// api/track.js
const { createClient } = require('@supabase/supabase-js');

// --- ENV
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const SERVICE_ROLE  = process.env.SUPABASE_SERVICE_ROLE;

if (!SUPABASE_URL || !SERVICE_ROLE) {
  console.error('❌ SUPABASE_URL ou SUPABASE_SERVICE_ROLE manquant(s).');
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE, {
  auth: { persistSession: false, autoRefreshToken: false }
});

// fetch compat (Node 18 a fetch natif, sinon fallback)
async function httpFetch(...args) {
  if (typeof fetch !== 'undefined') return fetch(...args);
  const nf = require('node-fetch');
  return nf(...args);
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const {
      session_id,
      event_name,
      page_url,
      referrer,
      utm,
      meta,
      device_type,
      language,
      tz_offset,
      viewport,
      screen,
      is_returning,
      engagement_ms,
      last_page_url
    } = req.body || {};

    if (!session_id || !event_name) {
      return res.status(400).json({ error: 'session_id et event_name requis' });
    }

    const userAgent     = req.headers['user-agent'] || null;
    const headerReferer = req.headers['referer'] || null;
    const now           = new Date().toISOString();

    // ===============================
    // 🚫 Exclusion du tracking
    // ===============================
    const clientDNT  = req.headers['dnt'] === '1';
    const metaDNT    = meta?.dnt === 1;
    const ip         = (req.headers['x-forwarded-for'] || '').split(',')[0]?.trim() || null;
    const MY_IPS     = []; // ex: ['1.2.3.4']
    const isPreview  = (headerReferer || '').includes('vercel.app');

    if (clientDNT || metaDNT || (ip && MY_IPS.includes(ip)) || isPreview) {
      console.log('📌 Tracking ignoré (self-excluded)');
      return res.status(200).json({ ok: true, skipped: 'self-excluded' });
    }

    // ===============================
    // 🌍 Détection pays/ville via IP (best-effort)
    // ===============================
    let country = null;
    let city    = null;
    if (ip && ip !== '::1' && !ip.startsWith('127.')) {
      try {
        const geo = await httpFetch(`https://ipapi.co/${ip}/json/`).then(r => r.json());
        country = geo?.country_name || null;
        city    = geo?.city || null;
      } catch (err) {
        console.warn('🌍 Erreur récupération géoloc', err?.message || err);
      }
    }

    // ===============================
    // 🔎 Session existante ?
    // ===============================
    const { data: existingSession, error: selErr } = await supabase
      .from('sessions')
      .select('session_id, engagement_ms')
      .eq('session_id', session_id)
      .maybeSingle();

    if (selErr) {
      console.error('select session error', selErr);
      return res.status(500).json({ error: 'select_session_failed', detail: selErr.message || selErr });
    }

    const engagementTotal =
      (existingSession?.engagement_ms || 0) + (Number(engagement_ms) || 0);

    // ===============================
    // 🧩 Données sessions (upsert)
    // ===============================
    const sessionData = {
      session_id,
      first_referrer: existingSession ? undefined : (referrer || headerReferer || null),
      first_utm:      existingSession ? undefined : (utm || null),
      first_seen_at:  existingSession ? undefined : now,

      user_agent: userAgent,
      device_type: device_type || null,
      language: language || null,
      tz_offset: tz_offset ?? null,
      viewport: viewport || null,
      screen: screen || null,
      country,
      city,
      is_returning: !!existingSession || !!is_returning,
      engagement_ms: engagementTotal,
      last_page_url: last_page_url || page_url || null,

      last_activity_at: now,
      last_event_name: event_name
    };

    // Upsert avec onConflict(session_id)
    const { error: sessErr } = await supabase
      .from('sessions')
      .upsert(sessionData, { onConflict: 'session_id' });

    if (sessErr) {
      console.error('upsert session error', sessErr);
      return res.status(500).json({ error: 'upsert_session_failed', detail: sessErr.message || sessErr });
    }

    // ===============================
    // 📝 Insertion de l’événement
    // ⚠️ On n’insère que les colonnes existantes dans `events`
    // ===============================
    const eventRow = {
      session_id,
      event_name,
      page_url: page_url || headerReferer || null,
      referrer: referrer || headerReferer || null,
      utm: utm || null,
      user_agent: userAgent,
      // On met tout le reste dans meta (y compris device/lang/… si tu veux les y retrouver)
      meta: meta ? { ...meta, device_type, language, tz_offset, viewport, screen, country, city, last_page_url } : { device_type, language, tz_offset, viewport, screen, country, city, last_page_url },
      category: meta?.category || null,
      value: meta?.value ?? null,
      elapsed_ms: meta?.elapsed_ms ?? null,
      element_selector: meta?.element_selector || null,
      occurred_at: now
    };

    const { error: evErr } = await supabase.from('events').insert(eventRow);
    if (evErr) {
      console.error('insert event error', evErr);
      return res.status(500).json({ error: 'insert_event_failed', detail: evErr.message || evErr });
    }

    return res.status(200).json({ ok: true, version: 'track-2025-08-11-enriched-fixed' });
  } catch (e) {
    console.error('track error', e);
    return res.status(500).json({ error: 'tracking_failed', detail: e?.message || String(e) });
  }
};

// api/track.js
const { createClient } = require('@supabase/supabase-js');
const fetch = require('node-fetch');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

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

    const userAgent = req.headers['user-agent'] || null;
    const headerReferer = req.headers['referer'] || null;
    const now = new Date().toISOString();

    // ===============================
    // 🚫 Exclusion du tracking
    // ===============================
    const clientDNT = req.headers['dnt'] === '1';
    const metaDNT = meta?.dnt === 1;
    const ip = (req.headers['x-forwarded-for'] || '').split(',')[0]?.trim() || null;
    const MY_IPS = []; // ex: ['1.2.3.4']
    const isPreview = (headerReferer || '').includes('vercel.app');

    if (clientDNT || metaDNT || (ip && MY_IPS.includes(ip)) || isPreview) {
      console.log('📌 Tracking ignoré (self-excluded)');
      return res.status(200).json({ ok: true, skipped: 'self-excluded' });
    }

    // ===============================
    // 🌍 Détection pays/ville via IP
    // ===============================
    let country = null;
    let city = null;
    if (ip && ip !== '::1' && !ip.startsWith('127.')) {
      try {
        const geo = await fetch(`https://ipapi.co/${ip}/json/`).then(r => r.json());
        country = geo.country_name || null;
        city = geo.city || null;
      } catch (err) {
        console.warn('🌍 Erreur récupération géoloc', err);
      }
    }

    // 🔹 1) Vérifier si la session existe déjà
    const { data: existingSession } = await supabase
      .from('sessions')
      .select('session_id')
      .eq('session_id', session_id)
      .maybeSingle();

    // 🔹 2) Construire les données pour sessions
    let sessionData;
    if (!existingSession) {
      // Nouvelle session
      sessionData = {
        session_id,
        first_referrer: referrer || headerReferer || null,
        first_utm: utm || null,
        first_seen_at: now,
        user_agent: userAgent,
        device_type: device_type || null,
        language: language || null,
        tz_offset: tz_offset || null,
        viewport: viewport || null,
        screen: screen || null,
        country,
        city,
        is_returning: false,
        engagement_ms: engagement_ms || 0,
        last_page_url: last_page_url || page_url || null,
        last_activity_at: now,
        last_event_name: event_name
      };
    } else {
      // Session existante → mise à jour
      sessionData = {
        session_id,
        last_activity_at: now,
        last_event_name: event_name,
        user_agent: userAgent,
        device_type: device_type || null,
        language: language || null,
        tz_offset: tz_offset || null,
        viewport: viewport || null,
        screen: screen || null,
        country,
        city,
        is_returning: true,
        engagement_ms: engagement_ms || 0,
        last_page_url: last_page_url || page_url || null
      };
    }

    // 🔹 3) Upsert sessions
    const { error: sessErr } = await supabase
      .from('sessions')
      .upsert(sessionData, { onConflict: 'session_id' });

    if (sessErr) {
      console.error('upsert session error', sessErr);
      return res.status(500).json({ error: 'upsert_session_failed', detail: sessErr.message || sessErr });
    }

    // 🔹 4) Insérer l’événement enrichi
    const { error: evErr } = await supabase.from('events').insert({
      session_id,
      event_name,
      page_url: page_url || headerReferer || null,
      referrer: referrer || headerReferer || null,
      utm: utm || null,
      user_agent: userAgent,
      meta: meta || null,
      category: meta?.category || null,
      value: meta?.value || null,
      elapsed_ms: meta?.elapsed_ms || null,
      device_type: device_type || null,
      language: language || null,
      tz_offset: tz_offset || null,
      viewport: viewport || null,
      screen: screen || null,
      country,
      city,
      is_returning: !!existingSession,
      engagement_ms: engagement_ms || 0,
      last_page_url: last_page_url || page_url || null,
      occurred_at: now
    });

    if (evErr) {
      console.error('insert event error', evErr);
      return res.status(500).json({ error: 'insert_event_failed', detail: evErr.message || evErr });
    }

    return res.status(200).json({ ok: true, version: "track-2025-08-11-enriched" });

  } catch (e) {
    console.error('track error', e);
    return res.status(500).json({ error: 'tracking_failed', detail: e.message || e });
  }
};

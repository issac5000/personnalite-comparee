// api/track.js
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const { session_id, event_name, page_url, referrer, utm, meta } = req.body || {};
    if (!session_id || !event_name) {
      return res.status(400).json({ error: 'session_id et event_name requis' });
    }

    const userAgent = req.headers['user-agent'] || null;
    const headerReferer = req.headers['referer'] || null;
    const now = new Date().toISOString();

    // ===============================
    // 🚫 Exclusion du tracking (double sécurité)
    // ===============================
    const clientDNT = req.headers['dnt'] === '1';
    const metaDNT = meta?.dnt === 1;

    // Option : exclusion par IP
    const ip = (req.headers['x-forwarded-for'] || '').split(',')[0]?.trim() || null;
    const MY_IPS = []; // ex: ['1.2.3.4', '5.6.7.8']

    // Option : exclusion des previews Vercel
    const isPreview = (headerReferer || '').includes('vercel.app');

    if (clientDNT || metaDNT || (ip && MY_IPS.includes(ip)) || isPreview) {
      console.log('📌 Tracking ignoré pour cette requête (self-excluded)');
      return res.status(200).json({ ok: true, skipped: 'self-excluded' });
    }
    // ===============================

    // 🔹 1) Upsert de la session
    const { error: sessErr } = await supabase
      .from('sessions')
      .upsert({
        session_id,
        first_referrer: referrer || headerReferer || null,
        first_utm: utm || null,
        user_agent: userAgent,
        last_activity_at: now,
        last_event_name: event_name
      }, { onConflict: 'session_id' });

    if (sessErr) {
      console.error('upsert session error', sessErr);
      return res.status(500).json({ error: 'upsert_session_failed', detail: sessErr.message || sessErr });
    }

    // 🔹 2) Enregistrer l’événement
    const { error: evErr } = await supabase.from('events').insert({
      session_id,
      event_name,
      page_url: page_url || headerReferer || null,
      referrer: referrer || headerReferer || null,
      utm: utm || null,
      user_agent: userAgent,
      meta: meta || null
    });

    if (evErr) throw evErr;

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('track error', e);
    return res.status(500).json({ error: 'tracking_failed' });
  }
};

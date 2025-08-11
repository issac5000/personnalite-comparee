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
    const ip = (req.headers['x-forwarded-for'] || '').split(',')[0]?.trim() || null;
    const MY_IPS = []; // ex: ['1.2.3.4']
    const isPreview = (headerReferer || '').includes('vercel.app');

    if (clientDNT || metaDNT || (ip && MY_IPS.includes(ip)) || isPreview) {
      console.log('📌 Tracking ignoré pour cette requête (self-excluded)');
      return res.status(200).json({ ok: true, skipped: 'self-excluded' });
    }
    // ===============================

    // 🔹 1) Vérifier si la session existe déjà
    const { data: existingSession, error: checkErr } = await supabase
      .from('sessions')
      .select('session_id')
      .eq('session_id', session_id)
      .maybeSingle();

    if (checkErr) {
      console.error('check session error', checkErr);
      return res.status(500).json({ error: 'check_session_failed', detail: checkErr.message || checkErr });
    }

    // 🔹 2) Construire les données session
    let sessionData;
    if (!existingSession) {
      // 👉 Nouvelle session : on définit toutes les infos de départ
      sessionData = {
        session_id,
        first_referrer: referrer || headerReferer || null,
        first_utm: utm || null,
        first_seen_at: now,
        user_agent: userAgent,
        last_activity_at: now,
        last_event_name: event_name
      };
    } else {
      // 👉 Session existante : on met juste à jour l'activité
      sessionData = {
        session_id,
        last_activity_at: now,
        last_event_name: event_name,
        user_agent: userAgent
      };
    }

    // 🔹 3) Upsert session
    const { error: sessErr } = await supabase
      .from('sessions')
      .upsert(sessionData, { onConflict: 'session_id' });

    if (sessErr) {
      console.error('upsert session error', sessErr);
      return res.status(500).json({ error: 'upsert_session_failed', detail: sessErr.message || sessErr });
    }

    // 🔹 4) Enregistrer l’événement
    const { error: evErr } = await supabase.from('events').insert({
      session_id,
      event_name,
      page_url: page_url || headerReferer || null,
      referrer: referrer || headerReferer || null,
      utm: utm || null,
      user_agent: userAgent,
      meta: meta || null,
      occurred_at: now // 🔹 Pour éviter tout problème de timestamp
    });

    if (evErr) {
      console.error('insert event error', evErr);
      return res.status(500).json({ error: 'insert_event_failed', detail: evErr.message || evErr });
    }

    return res.status(200).json({ ok: true });

  } catch (e) {
    console.error('track error', e);
    return res.status(500).json({ error: 'tracking_failed', detail: e.message || e });
  }
};

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

    // 1) Lire si la session existe déjà
    const { data: existing, error: readErr } = await supabase
      .from('sessions')
      .select('session_id')
      .eq('session_id', session_id)
      .maybeSingle();
    if (readErr) throw readErr;

    // 2) Créer la session si première fois
    if (!existing) {
      const { error: insErr } = await supabase.from('sessions').insert({
        session_id,
        first_referrer: referrer || headerReferer,
        first_utm: utm || null,
        user_agent: userAgent
      });
      if (insErr) throw insErr;
    } else {
      // Sinon, juste MAJ activité
      await supabase
        .from('sessions')
        .update({ last_activity_at: new Date().toISOString() })
        .eq('session_id', session_id);
    }

    // 3) Enregistrer l’événement
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

    // 4) Mémoriser la dernière action dans la session
    await supabase
      .from('sessions')
      .update({
        last_activity_at: new Date().toISOString(),
        last_event_name: event_name
      })
      .eq('session_id', session_id);

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('track error', e);
    return res.status(500).json({ error: 'tracking_failed' });
  }
};

// api/admin-stats.js
const { createClient } = require('@supabase/supabase-js');

// --- ENV & client Supabase (URL publique + clé Service Role côté serveur)
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const SERVICE_ROLE  = process.env.SUPABASE_SERVICE_ROLE;

if (!SUPABASE_URL || !SERVICE_ROLE) {
  console.error('❌ SUPABASE_URL ou SUPABASE_SERVICE_ROLE manquant(s).');
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE, {
  auth: { persistSession: false, autoRefreshToken: false }
});

// --- Identifiants admin (compat plusieurs noms d’ENV)
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || process.env.ADMIN_USER;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.ADMIN_PASS;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    // --- Auth stricte par body (envoyé depuis admin.html)
    const { username, password } = req.body || {};
    if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
      return res.status(500).json({ error: 'Identifiants admin non configurés sur le serveur' });
    }
    if (!username || !password || username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Accès refusé' });
    }

    // --- Compter les sessions (équiv. visiteurs uniques, session_id est unique)
    const { count: sessions_count, error: sessionsErr } = await supabase
      .from('sessions')
      .select('*', { count: 'exact', head: true });
    if (sessionsErr) throw sessionsErr;

    // --- Compter les événements
    const { count: events_count, error: eventsErr } = await supabase
      .from('events')
      .select('*', { count: 'exact', head: true });
    if (eventsErr) throw eventsErr;

    // --- Dernière activité (timestamp le + récent)
    const { data: last_event, error: lastEventErr } = await supabase
      .from('events')
      .select('occurred_at')
      .order('occurred_at', { ascending: false })
      .limit(1);
    if (lastEventErr) throw lastEventErr;

    res.status(200).json({
      sessions_count: sessions_count || 0,
      events_count: events_count || 0,
      unique_visitors: sessions_count || 0,
      last_activity: last_event?.[0]?.occurred_at || null
    });
  } catch (err) {
    console.error('Erreur dashboard admin:', err);
    res.status(500).json({ error: 'Erreur serveur', details: err.message || String(err) });
  }
};

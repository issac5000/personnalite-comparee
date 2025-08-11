// api/admin-stats.js
const { createClient } = require('@supabase/supabase-js');

// Connexion sécurisée à Supabase (clé service role stockée dans Vercel)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

// Identifiants admin obligatoires (définis dans Vercel → Environment Variables)
const ADMIN_USER = process.env.ADMIN_USER;
const ADMIN_PASS = process.env.ADMIN_PASS;

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { username, password } = req.body || {};

  // 🔒 Auth stricte : refuse si pas d'identifiants ou mauvais identifiants
  if (!username || !password || username !== ADMIN_USER || password !== ADMIN_PASS) {
    return res.status(401).json({ error: "Accès refusé" });
  }

  try {
    // 📊 Sessions
    const { count: sessions_count, error: sessionsErr } = await supabase
      .from("sessions")
      .select("*", { count: "exact", head: true });
    if (sessionsErr) throw sessionsErr;

    // 📊 Événements
    const { count: events_count, error: eventsErr } = await supabase
      .from("events")
      .select("*", { count: "exact", head: true });
    if (eventsErr) throw eventsErr;

    // 👥 Visiteurs uniques
    const { data: unique_visitors_data, error: visitorsErr } = await supabase
      .from("sessions")
      .select("session_id");
    if (visitorsErr) throw visitorsErr;

    // ⏳ Dernière activité
    const { data: last_event, error: lastEventErr } = await supabase
      .from("events")
      .select("occurred_at")
      .order("occurred_at", { ascending: false })
      .limit(1);
    if (lastEventErr) throw lastEventErr;

    res.status(200).json({
      sessions_count: sessions_count || 0,
      events_count: events_count || 0,
      unique_visitors: new Set(unique_visitors_data.map(s => s.session_id)).size,
      last_activity: last_event?.[0]?.occurred_at || null
    });

  } catch (err) {
    console.error("Erreur dashboard admin", err);
    res.status(500).json({ error: "Erreur serveur", details: err.message });
  }
};

// api/admin-stats.js
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE // clé cachée dans Vercel/Netlify
);

// Identifiants admin (tu peux les mettre dans .env aussi)
const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASS = process.env.ADMIN_PASS || "motdepasse123";

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { username, password } = req.body || {};

  // Auth simple
  if (username !== ADMIN_USER || password !== ADMIN_PASS) {
    return res.status(401).json({ error: "Accès refusé" });
  }

  try {
    // Récupération des stats
    const { count: sessions_count } = await supabase
      .from("sessions")
      .select("*", { count: "exact", head: true });

    const { count: events_count } = await supabase
      .from("events")
      .select("*", { count: "exact", head: true });

    const { data: unique_visitors_data } = await supabase
      .from("sessions")
      .select("session_id");

    const { data: last_event } = await supabase
      .from("events")
      .select("occurred_at")
      .order("occurred_at", { ascending: false })
      .limit(1);

    res.status(200).json({
      sessions_count,
      events_count,
      unique_visitors: new Set(unique_visitors_data.map(s => s.session_id)).size,
      last_activity: last_event?.[0]?.occurred_at || null
    });
  } catch (err) {
    console.error("Erreur dashboard", err);
    res.status(500).json({ error: "Erreur serveur", details: err.message });
  }
};

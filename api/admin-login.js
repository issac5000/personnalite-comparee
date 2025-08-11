// api/admin-login.js
const { createClient } = require('@supabase/supabase-js');

// --- Vérification de la configuration ---
if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE) {
  console.error("❌ Erreur : Variables Supabase manquantes");
}

if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD) {
  console.error("❌ Erreur : Variables ADMIN_USERNAME ou ADMIN_PASSWORD manquantes");
}

// Connexion à Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

// Identifiants admin depuis les variables d'environnement
const ADMIN_USER = process.env.ADMIN_USERNAME;
const ADMIN_PASS = process.env.ADMIN_PASSWORD;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const { username, password } = req.body || {};

    // Vérification de la config serveur
    if (!ADMIN_USER || !ADMIN_PASS) {
      return res.status(500).json({ error: 'Configuration serveur incomplète' });
    }

    // Vérification des identifiants
    if (username !== ADMIN_USER || password !== ADMIN_PASS) {
      return res.status(401).json({ error: 'Identifiants invalides' });
    }

    // Connexion réussie
    return res.status(200).json({
      success: true,
      message: 'Connexion réussie'
    });

  } catch (err) {
    console.error('❌ Erreur connexion admin:', err);
    return res.status(500).json({
      error: 'Erreur serveur',
      details: err.message
    });
  }
};

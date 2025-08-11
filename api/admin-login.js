// api/admin-login.js
const { createClient } = require('@supabase/supabase-js');

// Connexion Supabase avec la clé service role (sécurisée dans Vercel)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

// Identifiants admin (définis dans Vercel → Settings → Environment Variables)
const ADMIN_USER = process.env.ADMIN_USER;
const ADMIN_PASS = process.env.ADMIN_PASS;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const { username, password } = req.body || {};

    // Vérification des identifiants
    if (username !== ADMIN_USER || password !== ADMIN_PASS) {
      return res.status(401).json({ error: 'Identifiants invalides' });
    }

    // ✅ Connexion réussie
    return res.status(200).json({ success: true, message: 'Connexion réussie' });

  } catch (err) {
    console.error('Erreur connexion admin:', err);
    return res.status(500).json({ error: 'Erreur serveur', details: err.message });
  }
};

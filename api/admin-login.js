// api/admin-login.js
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const { username, password } = req.body || {};

    // Compatibilité des noms d’ENV
    const ADMIN_USERNAME = process.env.ADMIN_USERNAME || process.env.ADMIN_USER;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.ADMIN_PASS;

    if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
      return res.status(500).json({ error: 'Identifiants admin non configurés' });
    }

    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Champs manquants' });
    }

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      return res.status(200).json({ success: true });
    }

    return res.status(401).json({ success: false, message: 'Identifiants incorrects' });
  } catch (error) {
    console.error('Erreur dans admin-login.js:', error);
    return res.status(500).json({ error: 'Erreur interne du serveur' });
  }
}

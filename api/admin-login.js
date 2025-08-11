// api/admin-login.js

module.exports = function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const { username, password } = req.body || {};

    // Compat noms d’ENV
    const ADMIN_USERNAME = process.env.ADMIN_USERNAME || process.env.ADMIN_USER;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.ADMIN_PASS;

    if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
      console.error('❌ ADMIN env manquants');
      return res.status(500).json({
        error: 'Identifiants admin non configurés',
        error_code: 'ADMIN_ENV_MISSING'
      });
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
};

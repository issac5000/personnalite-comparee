// api/admin-login.js
module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Méthode non autorisée' });
  }

  try {
    const { username, password } = req.body || {};

    // Récupération des identifiants admin dans l’environnement
    const ADMIN_USERNAME = process.env.ADMIN_USERNAME || process.env.ADMIN_USER;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.ADMIN_PASS;

    if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
      return res.status(500).json({
        success: false,
        error: 'Identifiants admin non configurés',
        code: 'ADMIN_ENV_MISSING',
      });
    }

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Champs manquants',
        code: 'MISSING_FIELDS',
      });
    }

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      return res.status(200).json({ success: true });
    }

    return res.status(401).json({
      success: false,
      message: 'Identifiants incorrects',
      code: 'BAD_CREDENTIALS',
    });
  } catch (err) {
    console.error('admin-login crash:', err);
    return res.status(500).json({ success: false, error: 'Erreur interne du serveur' });
  }
};

// api/admin-login.js

async function readJsonBody(req) {
  try {
    // 1) Si Next/Node nous a déjà donné un objet
    if (req.body && typeof req.body === 'object') return req.body;

    // 2) Si c'est une string JSON
    if (typeof req.body === 'string' && req.body.trim().length) {
      return JSON.parse(req.body);
    }

    // 3) Fallback: lire le flux brut (certains runtimes Vercel ne parsente pas)
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const raw = Buffer.concat(chunks).toString('utf8');
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (e) {
    // Body illisible → on renvoie un truc safe
    return {};
  }
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const { username, password } = await readJsonBody(req);

    const ADMIN_USERNAME = process.env.ADMIN_USERNAME || process.env.ADMIN_USER;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.ADMIN_PASS;

    if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
      console.error('❌ ADMIN env manquants', {
        hasUser: !!ADMIN_USERNAME,
        hasPass: !!ADMIN_PASSWORD
      });
      return res.status(500).json({
        success: false,
        error: 'Identifiants admin non configurés',
        code: 'ADMIN_ENV_MISSING'
      });
    }

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Champs manquants',
        code: 'MISSING_FIELDS'
      });
    }

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      return res.status(200).json({ success: true });
    }

    return res.status(401).json({
      success: false,
      message: 'Identifiants incorrects',
      code: 'BAD_CREDENTIALS'
    });
  } catch (error) {
    console.error('🔥 admin-login crash:', error);
    return res.status(500).json({ success: false, error: 'Erreur interne du serveur' });
  }
};

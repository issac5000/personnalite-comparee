// api/admin-login.js
async function readJsonBody(req) {
  try {
    if (req.body && typeof req.body === 'object') return req.body;
    if (typeof req.body === 'string' && req.body.trim()) return JSON.parse(req.body);

    // Lire le flux brut compatible Edge/Node
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const bytes = chunks.flat
      ? new Uint8Array(chunks.flat())
      : new Uint8Array(chunks.reduce((acc, c) => acc.concat(Array.from(c)), []));
    const text = new TextDecoder().decode(bytes);
    return text ? JSON.parse(text) : {};
  } catch {
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

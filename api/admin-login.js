export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    const { username, password } = req.body || {};

    if (!process.env.ADMIN_USER || !process.env.ADMIN_PASS) {
      return res.status(500).json({ error: 'Configuration serveur incomplète' });
    }

    if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
      return res.status(200).json({ success: true, message: 'Connexion réussie' });
    } else {
      return res.status(401).json({ success: false, error: 'Identifiants incorrects' });
    }

  } catch (err) {
    console.error('Erreur admin-login:', err);
    return res.status(500).json({ error: 'Erreur serveur', details: err.message });
  }
}

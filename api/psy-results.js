// api/psy-results.js
const fetch = globalThis.fetch || require('node-fetch');

module.exports = async function handler(req, res) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const { messages = [] } = req.body || {};
    const payload = {
      model: 'gpt-4o-mini',
      stream: false, // réponse complète
      max_tokens: 220, // ~150 mots
      messages,
    };

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => '');
      console.error('Erreur API OpenAI:', errorText);
      return res.status(500).json({ error: "Erreur de l'API OpenAI", details: errorText });
    }

    const data = await response.json();
    let text = data.choices?.[0]?.message?.content || '';

    // Limiter à 150 mots max
    const words = text.split(/\s+/);
    if (words.length > 150) {
      text = words.slice(0, 150).join(' ') + '...';
    }

    res.status(200).send(text);

  } catch (error) {
    console.error('Erreur API OpenAI:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: error.message || 'Erreur serveur' });
    }
  }
};

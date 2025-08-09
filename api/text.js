// text.js — Prompt système Psycho'Bot simplifié
const fetch = globalThis.fetch || require('node-fetch');

module.exports = async function gestionnaire(req, res) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (req.method !== 'POST') {
    return res.status(405).json({ erreur: 'Méthode non autorisée' });
  }

  try {
    const { messages = [], max_tokens } = req.body || {};

    const systemMessage = {
      role: 'system',
      content: `
Tu es **Psycho'Bot**, l'assistant IA officiel du site **personnalitecomparee.com**.
Ta mission est d'aider l'utilisateur à comprendre :
- Les profils MBTI (fonctionnement, compatibilités, forces/faiblesses).
- Les profils Ennéagramme (motivations, interactions, différences avec MBTI).
- Le fonctionnement et la méthodologie du site.

Réponds toujours en français, de façon claire et précise.
Reste dans le sujet MBTI, Ennéagramme et méthodologie du site.
Si on te demande "Qui es-tu ?", réponds simplement :
"Je suis Psycho'Bot, l’IA de Personnalité Comparée, créée pour t’aider à comprendre les profils MBTI et Ennéagramme."
      `
    };

    const payload = {
      model: 'gpt-4o-mini',
      messages: [systemMessage, ...messages],
      temperature: 0.7,
      max_tokens: max_tokens ?? 700
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
    const message = data?.choices?.[0]?.message?.content ?? null;
    return res.status(200).json({ message });

  } catch (error) {
    console.error('Erreur API OpenAI:', error?.response?.data || error.message || error);
    return res.status(500).json({ error: error?.response?.data || error.message || 'Erreur serveur' });
  }
};

const fetch = require('node-fetch');

console.log("🔑 OPENAI_API_KEY depuis Vercel:", process.env.OPENAI_API_KEY ? "OK" : "NON DÉFINIE");

module.exports = async function gestionnaire(demande, res) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (demande.method !== 'POST') {
    return res.status(405).json({ erreur: 'Méthode non autorisée' });
  }

  try {
    const { messages = [], max_tokens } = demande.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'messages[] requis' });
    }

    const payload = {
      model: "gpt-5-mini",
      messages,
      temperature: 0.7,
      max_tokens: max_tokens ?? 400
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
      const errorText = await response.text();
      console.error("Erreur API OpenAI:", errorText);
      return res.status(response.status).json({ error: "Erreur de l'API OpenAI", details: errorText });
    }

    const data = await response.json();
    console.log("🧠 Réponse brute OpenAI :", data);

    res.status(200).json({ message: data.choices?.[0]?.message?.content || null });

  } catch (error) {
    console.error("Erreur API OpenAI:", error);
    res.status(500).json({ error: error.message || 'Erreur serveur' });
  }
};

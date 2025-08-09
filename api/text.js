// /api/chat.js

const fetch = require('node-fetch');

// Log au chargement du fichier pour voir si la clé est dispo
console.log("🔑 OPENAI_API_KEY depuis Vercel :", process.env.OPENAI_API_KEY ? "OK" : "NON DÉFINIE");

module.exports = async function gestionnaire(demande, res) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  // Vérif méthode
  if (demande.method !== 'POST') {
    return res.status(405).json({ erreur: 'Méthode non autorisée' });
  }

  // Vérif clé API
  if (!OPENAI_API_KEY) {
    console.error("❌ Clé API manquante !");
    return res.status(500).json({ error: "OPENAI_API_KEY non définie sur le serveur" });
  }

  try {
    let { messages = [], max_tokens } = demande.body;

    // ✅ Fallback si vide ou mauvais format
    if (!Array.isArray(messages) || messages.length === 0) {
      console.warn("⚠️ messages[] vide → ajout d'un message par défaut");
      messages = [
        { role: "system", content: "Tu es Psycho'Bot, assistant MBTI/Ennéagramme." },
        { role: "user", content: "Bonjour" }
      ];
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

    // Si erreur côté OpenAI
    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Erreur API OpenAI :", errorText);
      return res.status(response.status).json({
        error: "Erreur API OpenAI",
        details: errorText
      });
    }

    const data = await response.json();
    console.log("🧠 Réponse brute OpenAI :", data);

    return res.status(200).json({
      message: data.choices?.[0]?.message?.content || null
    });

  } catch (error) {
    console.error("💥 Erreur serveur :", error);
    return res.status(500).json({
      error: error.message || 'Erreur serveur',
      stack: error.stack || null
    });
  }
};

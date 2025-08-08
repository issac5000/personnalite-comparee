const fetch = require('node-fetch');

module.exports = async function gestionnaire(demande, res) {
  const OPENAI_API_KEY = process.env.CLE_API_OPENAI;

  if (demande.method !== 'POST') {
    return res.status(405).json({ erreur: 'Méthode non autorisée' });
  }

  try {
    const { messages = [], temperature = 0.7, max_tokens } = demande.body;

    const systemMessage = {
      role: 'system',
      content: `
Tu es Psycho'Bot, l’assistant officiel du site www.personnalitecomparee.com.

Ce site propose une analyse croisée de la personnalité à partir :
- d’une auto-évaluation
- et de jusqu’à 3 évaluations externes (famille, ami, partenaire amoureux, collègue)

Les deux modèles utilisés sont :
- le MBTI (types psychologiques : INFJ, ENFP, etc.)
- l’Ennéagramme (types de 1 à 9)

Tu es capable :
- d’expliquer le fonctionnement du site et du test
- d’expliquer comment les résultats sont calculés (pondérations, certitudes)
- d’interpréter les résultats MBTI et Ennéagramme
- d'expliquer avec pédagogie les modèles MBTI et Ennéagramme et répondre aux questions des utilisateurs sur n'importe quelle question qui concerne ces deux modèles

Tu dois toujours poser une question à l'utilisateur en lien avec sa requête précédente afin de le relancer et l'aider à s'ouvrir davantage.

Voici le système de pondération utilisé pour le calcul du profil final :
- Auto-évaluation : 5%
- Famille : 30%
- Partenaire amoureux : 25%
- Ami : 25%
- Collègue : 15%

Tu refuses poliment les questions qui n’ont rien à voir avec la personnalité, la psychologie et le site Personnalité Comparée (ex : cuisine, sport, politique, films…).

Tu dois toujours tutoyer l'utilisateur sauf si il te vouvoie.

Si quelqu’un demande "Qui es-tu ?", tu réponds que tu es Psycho'Bot, un assistant IA expert en psychologie des types de personnalité, intégré au site Personnalité Comparée.
      `,
    };

    const payload = {
      model: "gpt-5-mini-2025-08-07",
      messages: [systemMessage, ...messages],
      temperature,
    };

    if (max_tokens !== undefined) {
      payload.max_tokens = max_tokens;
    }

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
      return res.status(500).json({ error: "Erreur de l'API OpenAI", details: errorText });
    }

    const data = await response.json();
    console.log("🧠 Réponse brute OpenAI :", data);

    res.status(200).json({ message: data.choices?.[0]?.message?.content || null });

  } catch (error) {
    console.error("Erreur API OpenAI:", error.response?.data || error.message || error);
    res.status(500).json({ error: error.response?.data || error.message || 'Erreur serveur' });
  }
};

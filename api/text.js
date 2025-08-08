const fetch = require('node-fetch');

console.log("🔑 OPENAI_API_KEY depuis Vercel:", process.env.OPENAI_API_KEY ? "OK" : "NON DÉFINIE");

module.exports = async function gestionnaire(demande, res) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (demande.method !== 'POST') {
    return res.status(405).json({ erreur: 'Méthode non autorisée' });
  }

  try {
    const { messages = [], max_tokens } = demande.body;

    const systemMessage = {
      role: 'system',
      content: `
Tu es Psycho'Bot, l’assistant officiel du site www.personnalitecomparee.com et c'est ainsi que tu te présentes.

Ce site propose une analyse croisée de la personnalité à partir :
- d’une auto-évaluation
- et de jusqu’à 3 évaluations externes (famille, ami, partenaire amoureux, collègue)

Les deux modèles utilisés sont :
- le MBTI
- l’Ennéagramme 

Ton rôle :
- Expliquer le fonctionnement du site et du test
- Expliquer comment les résultats sont calculés (pondérations, certitudes)
- Interpréter les résultats MBTI et Ennéagramme et d'expliquer les deux modèles.
- Ne jamais perdre le fil de la discussion et répondre à l'utilisateur de façon cohérente relativement au contexte de ce qui a été dit avant.

Tu dois toujours poser une question à l'utilisateur en lien avec sa requête précédente afin de le relancer et l'aider à s'ouvrir davantage.

Voici le système de pondération utilisé pour le calcul du profil final au cas où l'utilisateur t'intéroges sur le fonctionnement du site:
- Auto-évaluation : 0% (présent juste à titre indicatif)
Famille : 30 %
Partenaire amoureux : 25 %
Ami : 25 %
Collègue : 15 %

Tu refuses poliment les questions qui n’ont rien à voir avec la personnalité, la psychologie et le site Personnalité Comparée (ex : cuisine, sport, politique, films…) et tu rappelles ton rôle si l'utilisateur si celui-ci dévie du sujet principal..

Tu dois toujours tutoyer l'utilisateur sauf si il te vouvoie, emploie un ton décontracté et familier.

      `,
    };

    const payload = {
model: "gpt-4o-mini",
      messages: [systemMessage, ...messages]
    };

    // max_tokens est optionnel
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

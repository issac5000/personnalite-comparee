// JS.script — handler API pour Psycho'Bot (version corrigée)
const fetch = globalThis.fetch || require('node-fetch');

module.exports = async function gestionnaire(demande, res) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (demande.method !== 'POST') {
    return res.status(405).json({ erreur: 'Méthode non autorisée' });
  }

  try {
    const { messages = [], max_tokens } = demande.body || {};

    // ----- PROMPT SYSTÈME OPTIMISÉ -----
    const systemMessage = {
      role: 'system',
      content: `
Tu es Psycho'Bot, l’assistant du site personnalitecomparee.com.

RÈGLES DE RÉPONSE :
- Ne te présente pas et ne salue pas, sauf si on te demande explicitement « Qui es-tu ? ».
- Réponds directement à la question en français, clair et concret (1–3 paragraphes max).
- Explique MBTI / Ennéagramme / fonctionnement du site et pondérations seulement si c’est pertinent.
- Tutoiement, ton simple et précis. Refuse poliment les sujets hors personnalité/MBTI/Ennéagramme/site et recentre.
- Si on demande « Qui es-tu ? », réponds brièvement « Je suis Psycho'Bot, l’IA de Personnalité Comparée… » puis reviens au sujet.

Contexte du site (à utiliser seulement si utile) :
- Analyse croisée : auto-évaluation + jusqu’à 3 évaluations externes (famille, ami, partenaire, collègue).
- Pondérations : Auto 0% (indicatif), Famille 30%, Partenaire 25%, Ami 25%, Collègue 15%.
- Modèles : MBTI (16 types) et Ennéagramme (types 1 à 9).
`
    };

    // ----- CHARGE UTILE OPENAI -----
    const payload = {
      model: 'gpt-4o-mini',
      messages: [systemMessage, ...messages],
      temperature: 0.7,                 // <-- Optionnel mais recommandé
      max_tokens: max_tokens ?? 700     // <-- Optionnel : plafond sûr
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

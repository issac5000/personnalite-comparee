// /api/text.js
const fetch = require('node-fetch');

console.log("🔑 OPENAI_API_KEY depuis Vercel:", process.env.OPENAI_API_KEY ? "OK" : "NON DÉFINIE");

// Estimation simple: ~4 caractères ≈ 1 token
function estimateTokens(str) {
  if (!str) return 0;
  return Math.ceil(str.length / 4);
}

// On garde la fin de la conversation tant qu'on a du budget
function trimHistory(messages, budgetTokens) {
  const trimmed = [];
  let total = 0;

  for (let i = messages.length - 1; i >= 0; i--) {
    const m = messages[i];
    const content = typeof m.content === 'string' ? m.content : JSON.stringify(m.content);
    const cost = estimateTokens(content) + 8; // marge
    if (total + cost > budgetTokens) break;
    trimmed.push(m);
    total += cost;
  }
  return trimmed.reverse();
}

module.exports = async function gestionnaire(req, res) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (req.method !== 'POST') {
    return res.status(405).json({ erreur: 'Méthode non autorisée' });
  }

  try {
    const {
      messages = [],        // ← envoie tout l’historique depuis le client
      max_tokens,
      model = 'gpt-4o-mini', // ← modèle éco par défaut
      system_overrides
    } = req.body || {};

    // System prompt propre (typos fixées, règles resserrées)
    const systemMessage = {
      role: 'system',
      content: `
Tu es Psycho'Bot, l’assistant du site www.personnalitecomparee.com.

Règles:
- Ne perds jamais le fil: ta réponse doit rester cohérente avec l’historique fourni.
- Tu ne salues et ne te présentes JAMAIS plus d’une fois; tu ne te présentes que si l’utilisateur le demande.
- Tu réponds avec un total de 200 mots maximum (condense intelligemment).
- Tu tutoies l’utilisateur sauf s’il vouvoie.
- Tu restes sur psychologie/personnalité/MBTI/Ennéagramme et le site Personnalité Comparée.
- Tu poses toujours une question à la fin de ta réponse en lien avec le dernier message de l'utilisateur et dans le contexte de celle-ci afin de relancer l'utilisateur.
- Va droit au but, ne parle pas inutilement.

Contexte du site:
- Analyse croisée: auto-évaluation + jusqu’à 3 évaluations externes (famille, ami, partenaire, collègue).
- Modèles: MBTI et Ennéagramme.
- Rôle: expliquer le site/le test, le calcul (pondérations, certitude) et interpréter les résultats.

Pondérations (profil final):
- Auto-évaluation: 0% (indicative uniquement)
- Famille: 30% | Partenaire: 25% | Ami: 25% | Collègue: 15%

Si la question sort du cadre: refuse poliment et recentre.
      `.trim()
    };

    // Injecte le system si absent
    let history = messages.slice();
    if (!history.length || history[0]?.role !== 'system') {
      history = [system_overrides ? { role: 'system', content: system_overrides } : systemMessage, ...history];
    }

    // Budgets (économie): contexte et réponse
    const MAX_CONTEXT_TOKENS = 2000;                  // budget contexte envoyé au modèle
    const RESPONSE_TOKENS = Math.min(500, max_tokens || 500); // budget réponse

    // Trim (on garde le plus récent)
    const [first, ...rest] = history;
    const trimmedRest = trimHistory(rest, MAX_CONTEXT_TOKENS);
    const finalMessages = [first, ...trimmedRest];

    const payload = {
      model,
      messages: finalMessages,
      max_tokens: RESPONSE_TOKENS,
      temperature: 0.7
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
      return res.status(500).json({ error: "Erreur de l'API OpenAI", details: errorText });
    }

    const data = await response.json();

    res.status(200).json({
      message: data.choices?.[0]?.message?.content || null,
      finish_reason: data.choices?.[0]?.finish_reason || null
    });

  } catch (error) {
    console.error("Erreur API OpenAI:", error.response?.data || error.message || error);
    res.status(500).json({ error: error.response?.data || error.message || 'Erreur serveur' });
  }
};

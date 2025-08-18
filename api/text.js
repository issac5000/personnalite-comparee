// /api/text.js

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
      messages = [],
      max_tokens,
      model = 'gpt-4o-mini',
      system_overrides
    } = req.body || {};

    // System prompt
    const systemMessage = {
      role: 'system',
      content: `
Tu es Psycho'Bot, l’assistant du site www.personnalitecomparee.com.

Règles:
- Ne perds jamais le fil: ta réponse doit rester cohérente avec l’historique fourni.
- Tu ne salues et ne te présentes JAMAIS plus d’une fois; uniquement si l’utilisateur le demande.
- 100 mots max par réponse (condense intelligemment).
- Tutoiement sauf si l’utilisateur vouvoie.
- Reste sur psychologie/personnalité/MBTI/Ennéagramme et le site Personnalité Comparée.
- Pose toujours une question en lien avec le dernier message.
- Va droit au but.

Contexte:
- Analyse croisée: auto-évaluation + 3 évaluations externes (famille, ami, partenaire, collègue).
- Modèles: MBTI et Ennéagramme.
- Pondérations: Auto-éval 0%, uniquement là à titre informatif. Résultat calculé en fonction de la convergence des réponses des proches et le niveau de cohérence interne de chaque évaluateur.

Si la question sort du cadre: refuse poliment et recentre.
      `.trim()
    };

    // Injecte le system si absent
    let history = messages.slice();
    if (!history.length || history[0]?.role !== 'system') {
      history = [system_overrides ? { role: 'system', content: system_overrides } : systemMessage, ...history];
    }

    const MAX_CONTEXT_TOKENS = 2000;
    const RESPONSE_TOKENS = Math.min(500, max_tokens || 500);

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
      console.error("❌ Erreur API OpenAI:", errorText);
      return res.status(500).json({
        error: "Erreur de l'API OpenAI",
        details: errorText
      });
    }

    const data = await response.json();

    res.status(200).json({
      message: data.choices?.[0]?.message?.content || null,
      finish_reason: data.choices?.[0]?.finish_reason || null
    });

  } catch (error) {
    console.error("❌ Erreur serveur:", error);
    res.status(500).json({
      error: error.message || 'Erreur serveur'
    });
  }
};

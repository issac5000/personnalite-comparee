// api/psy-results.js
const fetch = globalThis.fetch || require('node-fetch');

module.exports = async function handler(req, res) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const { messages = [], max_tokens, model } = req.body || {};

    // Monte le plafond pour éviter toute troncature
    const resolvedMaxTokens =
      typeof max_tokens === 'number' ? Math.max(2000, max_tokens) : 2500;

    const payload = {
      model: model || 'gpt-4o-mini',
      stream: false, // ✅ pas de streaming côté OpenAI → on récupère tout d'un coup
      max_tokens: resolvedMaxTokens,
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
      return res
        .status(500)
        .json({ error: "Erreur de l'API OpenAI", details: errorText });
    }

    const data = await response.json().catch(() => null);
    if (!data || !data.choices || !data.choices[0]) {
      console.error('Réponse inattendue OpenAI:', data);
      return res.status(500).json({ error: 'Réponse OpenAI invalide' });
    }

    const choice = data.choices[0];
    const content =
      (choice.message && choice.message.content) ||
      (typeof choice.text === 'string' ? choice.text : '') ||
      '';
    const finishReason = choice.finish_reason || 'stop';

    // On garde le même type de réponse que ton ancien endpoint
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'X-OpenAI-Finish-Reason': finishReason,
      'X-OpenAI-Usage-Prompt-Tokens': String(data.usage?.prompt_tokens ?? ''),
      'X-OpenAI-Usage-Completion-Tokens': String(data.usage?.completion_tokens ?? ''),
      'X-OpenAI-Usage-Total-Tokens': String(data.usage?.total_tokens ?? ''),
    });

    // Écrit tout en une fois → pas de risque de tronquer en cours de route
    res.write(content || '');
    res.end();
  } catch (error) {
    console.error('Erreur API OpenAI:', error);
    try { res.end(); } catch {}
    if (!res.headersSent) {
      res.status(500).json({ error: error.message || 'Erreur serveur' });
    }
  }
};

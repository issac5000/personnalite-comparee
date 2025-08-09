// api/psy-results.js
const fetch = globalThis.fetch || require('node-fetch');

module.exports = async function handler(req, res) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const { messages = [], max_tokens } = req.body || {};
    const maxTokens = max_tokens !== undefined ? max_tokens : 1600;

    let fullContent = '';
    let finish_reason = null;
    let currentMessages = [...messages];

    for (let i = 0; i < 5; i++) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 60000);

      const payload = {
        model: 'gpt-4o-mini',
        max_tokens: maxTokens,
        messages: currentMessages,
      };

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      }).finally(() => clearTimeout(timeout));

      if (!response.ok) {
        const errorText = await response.text().catch(() => '');
        console.error('Erreur API OpenAI:', errorText);
        return res
          .status(500)
          .json({ error: "Erreur de l'API OpenAI", details: errorText });
      }

      const data = await response.json();
      const choice = data.choices?.[0];
      const content = choice?.message?.content || '';
      finish_reason = choice?.finish_reason;
      fullContent += content;

      if (finish_reason !== 'length' && finish_reason !== 'incomplete') {
        break;
      }

      currentMessages = [
        ...currentMessages,
        { role: 'assistant', content },
        { role: 'user', content: 'continue' },
      ];
    }

    res.status(200).json({ content: fullContent, finish_reason });
  } catch (error) {
    console.error('Erreur API OpenAI:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: error.message || 'Erreur serveur' });
    }
  }
};


const fetch = globalThis.fetch || require('node-fetch');

module.exports = async function handler(req, res) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const { messages = [], max_tokens } = req.body || {};
    const payload = {
      model: 'gpt-4o-mini',
      stream: true,
      max_tokens: Math.max(800, max_tokens || 900),
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
      const errorText = await response.text();
      console.error('Erreur API OpenAI:', errorText);
      return res.status(500).json({ error: "Erreur de l'API OpenAI", details: errorText });
    }

    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
      'Cache-Control': 'no-cache',
    });

    const decoder = new TextDecoder('utf-8');
    let buffer = '';

    for await (const chunk of response.body) {
      buffer += decoder.decode(chunk, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop();
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          if (data === '[DONE]') {
            res.end();
            return;
          }
          try {
            const json = JSON.parse(data);
            const text = json.choices?.[0]?.delta?.content || '';
            if (text) res.write(text);
          } catch (e) {
            // ignore parse errors
          }
        }
      }
    }

    res.end();
  } catch (error) {
    console.error('Erreur API OpenAI:', error);
    res.status(500).json({ error: error.message || 'Erreur serveur' });
  }
};


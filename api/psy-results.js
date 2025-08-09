// api/psy-results.js
const fetch = globalThis.fetch || require('node-fetch');

module.exports = async function handler(req, res) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    let { messages = [], max_tokens } = req.body || {};

    // Ajout d'une consigne claire à GPT
    messages = [
      {
        role: 'system',
        content: "Réponds avec une description claire, complète et cohérente, en maximum 150 mots. Ne dépasse jamais cette limite, termine proprement ta dernière phrase."
      },
      ...messages
    ];

    const payload = {
      model: 'gpt-4o-mini',
      stream: true,
      max_tokens: max_tokens || 250, // ~150 mots ≈ 225-250 tokens
      messages
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

    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });

    const decoder = new TextDecoder('utf-8');
    let buffer = '';
    let wordCount = 0;
    let stopStreaming = false;

    // Lecture du flux OpenAI
    for await (const chunk of response.body) {
      if (stopStreaming) break;

      buffer += decoder.decode(chunk, { stream: true });
      let lines = buffer.split('\n');
      buffer = lines.pop();

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const data = line.slice(6);
        if (data === '[DONE]') {
          const tail = decoder.decode();
          if (tail && !stopStreaming) res.write(tail);
          return res.end();
        }
        try {
          const json = JSON.parse(data);
          const text = json.choices?.[0]?.delta?.content || '';
          if (text) {
            const words = text.split(/\s+/).filter(Boolean);
            if (wordCount + words.length > 150) {
              const remaining = 150 - wordCount;
              res.write(words.slice(0, remaining).join(' ') + "...");
              stopStreaming = true;
              break;
            } else {
              res.write(text);
              wordCount += words.length;
            }
          }
        } catch {
          // ignore
        }
      }
    }

    // Flush final si jamais il restait un bout de texte
    const tailFlush = decoder.decode();
    if (tailFlush && !stopStreaming) {
      const words = tailFlush.split(/\s+/).filter(Boolean);
      if (wordCount < 150) {
        const remaining = 150 - wordCount;
        res.write(words.slice(0, remaining).join(' '));
      }
    }

    res.end();
  } catch (error) {
    console.error('Erreur API OpenAI:', error);
    try { res.end(); } catch {}
    if (!res.headersSent) {
      res.status(500).json({ error: error.message || 'Erreur serveur' });
    }
  }
};

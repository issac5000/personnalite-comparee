// api/psy-results.js
const fetch = globalThis.fetch || require('node-fetch');

module.exports = async function handler(req, res) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const { messages = [], max_tokens } = req.body || {};

    // Monte le plafond par défaut pour éviter les coupures
    const resolvedMaxTokens =
      typeof max_tokens === 'number' ? Math.max(2000, max_tokens) : 2500;

    const payload = {
      model: 'gpt-4o-mini',
      stream: true,
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

    // Streaming texte brut (ton front concatène)
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    });

    const decoder = new TextDecoder('utf-8');
    let buffer = '';
    let finishReason = null;

    const processBuffer = () => {
      const parts = buffer.split(/\r?\n/);
      buffer = parts.pop() || ''; // garde la dernière ligne incomplète

      for (const raw of parts) {
        const line = raw.trim();
        if (!line || !line.startsWith('data:')) continue;

        // Tolère "data:" ou "data: "
        let data = line.slice(5).trim();
        if (data.startsWith(':')) data = data.slice(1).trim();
        if (!data) continue;

        if (data === '[DONE]') {
          // fin du flux
          const tail = decoder.decode();
          if (tail) res.write(tail);
          try {
            if (!res.headersSent) {
              res.setHeader(
                'X-OpenAI-Finish-Reason',
                finishReason || 'unknown'
              );
            }
          } catch {}
          return true; // signal de fin
        }

        try {
          const json = JSON.parse(data);
          const choice = json.choices && json.choices[0];
          if (choice && typeof choice.finish_reason === 'string') {
            finishReason = choice.finish_reason;
          }
          const text = choice?.delta?.content || '';
          if (text) res.write(text);
        } catch {
          // ignore les lignes non-JSON
        }
      }
      return false; // pas fini
    };

    // Lecture du flux SSE
    for await (const chunk of response.body) {
      buffer += decoder.decode(chunk, { stream: true });
      const done = processBuffer();
      if (done) {
        return res.end();
      }
    }

    // Flush final si le flux s'arrête sans [DONE]
    const tailFlush = decoder.decode();
    if (tailFlush) buffer += tailFlush;

    // Traite ce qui reste dans le buffer
    const doneAtEnd = processBuffer();
    if (!doneAtEnd) {
      try {
        if (!res.headersSent) {
          res.setHeader('X-OpenAI-Finish-Reason', finishReason || 'stream_end');
        }
      } catch {}
      res.end();
    }
  } catch (error) {
    console.error('Erreur API OpenAI:', error);
    try {
      res.end();
    } catch {}
    if (!res.headersSent) {
      res.status(500).json({ error: error.message || 'Erreur serveur' });
    }
  }
};

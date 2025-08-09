// api/psy-results.js
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
      const errorText = await response.text().catch(() => '');
      console.error('Erreur API OpenAI:', errorText);
      return res.status(500).json({ error: "Erreur de l'API OpenAI", details: errorText });
    }

    res.writeHead(200, {
      // on envoie du texte simple en flux (ton front concatène)
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });

    const decoder = new TextDecoder('utf-8');
    let buffer = '';

    // lecture du flux OpenAI (SSE "data: ...")
    for await (const chunk of response.body) {
      buffer += decoder.decode(chunk, { stream: true });

      let lines = buffer.split('\n');
      buffer = lines.pop(); // on garde la dernière ligne potentiellement incomplète

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const data = line.slice(6);
        if (data === '[DONE]') {
          // flush final du decoder au cas où
          const tail = decoder.decode();
          if (tail) res.write(tail);
          return res.end();
        }
        try {
          const json = JSON.parse(data);
          const text = json.choices?.[0]?.delta?.content || '';
          if (text) res.write(text);
        } catch {
          // ignore
        }
      }
    }

    // >>>> ICI: TRAITER LE RESTE (bug fixé)
    // flush final du decoder et traitement du buffer résiduel
    const tailFlush = decoder.decode(); // vide le decoder
    if (tailFlush) buffer += tailFlush;

    if (buffer) {
      const lines = buffer.split('\n');
      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const data = line.slice(6);
        if (data && data !== '[DONE]') {
          try {
            const json = JSON.parse(data);
            const text = json.choices?.[0]?.delta?.content || '';
            if (text) res.write(text);
          } catch { /* ignore */ }
        }
      }
    }

    res.end();
  } catch (error) {
    console.error('Erreur API OpenAI:', error);
    // si on avait commencé à écrire, on termine proprement
    try { res.end(); } catch {}
    if (!res.headersSent) {
      res.status(500).json({ error: error.message || 'Erreur serveur' });
    }
  }
};

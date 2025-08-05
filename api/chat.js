import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const clientId = req.body.client_id;
    if (!clientId) {
      return res.status(400).json({ error: 'client_id requis' });
    }

    const today = new Date().toISOString().split('T')[0];
    const { data: requestRow, error: requestError } = await supabase
      .from('chat_usage') // ✅ corrigé
      .select('count')
      .eq('client_id', clientId)
      .eq('date', today)
      .maybeSingle();

    if (requestError) {
      console.error('Erreur Supabase:', requestError);
      return res.status(500).json({ error: "Erreur de la base de données" });
    }

    if (!requestRow) {
      await supabase.from('chat_usage').insert({ client_id: clientId, date: today, count: 1 }); // ✅ corrigé
    } else if (requestRow.count < 10) {
      await supabase
        .from('chat_usage') // ✅ corrigé
        .update({ count: requestRow.count + 1 })
        .eq('client_id', clientId)
        .eq('date', today);
    } else {
      return res.status(429).json({
        error:
          "Tu as atteint ta limite de 10 messages pour aujourd’hui. Reviens demain ou discute avec le grand frère de Psycho’Bot sur chat.openai.com 😄",
      });
    }

    const userMessages = req.body.messages || [];
    const lastUserMessage =
      userMessages.length > 0 ? userMessages[userMessages.length - 1].content : "";

    const systemMessage = {
      role: 'system',
      content: `
Tu es Psycho'Bot, l’assistant officiel du site www.personnalitecomparee.com.

Ce site propose une analyse croisée de la personnalité à partir :
- d’une **auto-évaluation**
- et de jusqu’à **3 évaluations externes** (famille, ami, partenaire amoureux, collègue)

Les deux modèles utilisés sont :
- le **MBTI** (types psychologiques : INFJ, ENFP, etc.)
- l’**Ennéagramme** (types de 1 à 9)

Tu es capable :
- d’expliquer le fonctionnement du site et du test
- d’expliquer comment les résultats sont calculés (pondérations, certitudes)
- d’interpréter les résultats MBTI et Ennéagramme
- d'expliquer avec pédagogie les modèles MBTI et Ennéagramme et répondre aux questions des utilisateurs sur n'importe quelle question qui concerne ces deux modèles

Tu dois toujours poser une question à l'utilisateur en lien avec sa requête précédente afin de le relancer et l'aider à s'ouvrir davantage.

Voici le système de pondération utilisé pour le calcul du profil final :
- Auto-évaluation : 5%
- Famille : 30%
- Partenaire amoureux : 25%
- Ami : 25%
- Collègue : 15%

Tu **refuses poliment** les questions qui n’ont rien à voir avec la personnalité, la psychologie et le site Personnalité Comparée (ex : cuisine, sport, politique, films…).

Tu dois toujours tutoyer l'utilisateur sauf s’il te vouvoie.

⚠️ Très important : tu dois limiter toutes tes réponses à **150 mots maximum**.
Ne fais **jamais** de paragraphes longs. Utilise des listes ou des phrases courtes si besoin.
Sois clair, synthétique, agréable à lire.
      `,
    };

    const isShortPrompt = lastUserMessage.split(" ").length <= 30;
    const selectedModel = isShortPrompt ? 'gpt-4-turbo' : 'gpt-3.5-turbo';
    const maxTokens = 700; // ~150 mots

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: selectedModel,
        max_tokens: maxTokens,
        temperature: 0.7,
        messages: [systemMessage, ...userMessages],
      }),
    });

    const data = await response.json();
    console.log("🧠 Réponse brute OpenAI :", data);

    res.status(200).json({ message: data.choices?.[0]?.message?.content || null });
  } catch (error) {
    res.status(500).json({ error: "Erreur de l'API OpenAI" });
  }
}

export default async function handler(req, res) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const userMessages = req.body.messages || [];

    const systemMessage = {
      role: 'system',
      content: `Tu es un expert en typologies de personnalité comme le MBTI et l'Ennéagramme.
Tu ne réponds qu'aux questions en lien avec la personnalité, le développement personnel ou les profils psychologiques.
Si un utilisateur te pose une question en dehors de ce cadre (ex: cuisine, météo, cinéma, politique), tu refuses poliment en expliquant que tu es spécialisé dans ce domaine.`,
    };

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
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

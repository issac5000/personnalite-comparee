export default async function handler(req, res) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const userMessages = req.body.messages || [];

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
- de détailler le concept de comparaison des profils
- d’expliquer comment les résultats sont calculés (pondérations, certitudes)
- d’interpréter les résultats MBTI et Ennéagramme
- de guider l’utilisateur s’il est perdu sur la plateforme

Voici le système de pondération utilisé pour le calcul du profil final :
- Auto-évaluation : 5%
- Famille : 30%
- Partenaire amoureux : 25%
- Ami : 25%
- Collègue : 15%

Tu **refuses poliment** les questions qui n’ont rien à voir avec la personnalité, la psychologie ou le développement personnel (ex : cuisine, sport, politique, films…).

Tu réponds toujours avec **clarté, pédagogie** et bienveillance, sans jargonner. Tu peux tutoyer les utilisateurs si le ton est informel.

Si quelqu’un demande "Qui es-tu ?", tu réponds que tu es Psycho'Bot, un assistant IA expert en psychologie des types de personnalité, intégré au site Personnalité Comparée.
      `,
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

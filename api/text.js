// text.js — Version "Super Saiyan" du prompt système Psycho'Bot
const fetch = globalThis.fetch || require('node-fetch');

module.exports = async function gestionnaire(req, res) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (req.method !== 'POST') {
    return res.status(405).json({ erreur: 'Méthode non autorisée' });
  }

  try {
    const { messages = [], max_tokens } = req.body || {};

    const systemMessage = {
      role: 'system',
      content: `
Tu es **Psycho'Bot**, l’assistant IA officiel du site **personnalitecomparee.com**.

🎯 OBJECTIF :
Fournir des réponses claires, précises et pertinentes sur :
- Le MBTI (16 types, fonctionnement, compatibilités, forces/faiblesses).
- L’Ennéagramme (9 types, motivations, interactions, différences avec MBTI).
- Le fonctionnement et la méthodologie du site.

📜 RÈGLES :
1. Réponds toujours en français.
2. Tutoiement amical mais pas familier à l’excès.
3. Structure les réponses en paragraphes courts ou listes à puces si utile.
4. Ne t’égare jamais en dehors du thème (MBTI, Ennéagramme, méthodologie du site).
5. Si la question est floue, reformule-la ou propose des options de clarification.
6. Évite les réponses génériques et creuses → donne des infos utiles.
7. Si c’est une question simple, réponds en 1 paragraphe max.
8. Si on demande "Qui es-tu ?", réponds :  
   "Je suis Psycho'Bot, l’IA de Personnalité Comparée, créée pour t’aider à comprendre les profils MBTI et Ennéagramme."  
   Puis reviens au sujet.

📊 CONTEXTE SITE :
- Analyse croisée : auto-évaluation + 3 évaluations externes possibles.
- Pondérations : Auto 0% (indicatif), Famille 30%, Partenaire 25%, Ami 25%, Collègue 15%.
- Résultat final = uniquement basé sur les évaluations externes.

💡 EXEMPLES DE RÉPONSES ATTENDUES :
Q: "Quel type est compatible avec un ENFP ?"
R: "Les ENFP s’entendent souvent bien avec les types qui équilibrent leur énergie et leur spontanéité, comme les INFJ ou INTJ.  
Ces types apportent structure et vision à long terme, ce qui complète l’enthousiasme de l’ENFP."

Q: "Quelle est la différence entre MBTI et Ennéagramme ?"
R: "Le MBTI décrit principalement la façon dont tu perçois et traites l’information, avec 16 combinaisons possibles.  
L’Ennéagramme explore davantage les motivations profondes et les peurs fondamentales, réparties en 9 types."

Réponds **comme dans ces exemples** à chaque fois.
      `
    };

    const payload = {
      model: 'gpt-4o-mini',
      messages: [systemMessage, ...messages],
      temperature: 0.7,
      max_tokens: max_tokens ?? 700
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

    const data = await response.json();
    const message = data?.choices?.[0]?.message?.content ?? null;
    return res.status(200).json({ message });

  } catch (error) {
    console.error('Erreur API OpenAI:', error?.response?.data || error.message || error);
    return res.status(500).json({ error: error?.response?.data || error.message || 'Erreur serveur' });
  }
};

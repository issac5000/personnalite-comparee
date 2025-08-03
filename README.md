# personnalite-comparee
Webapp HTML/JS combinant test MBTI + Ennéagramme, sans backend. Résultats anonymes stockés via Supabase. Front hébergé sur GitHub Pages.

## Fonctionnalités

- Test MBTI + Ennéagramme avec validation par des proches
- Génération du profil final après 3 évaluations externes
- Chatbot basé sur GPT‑3.5 pour répondre aux questions sur les profils

## Configuration du chatbot

Pour utiliser le chatbot, une clé API OpenAI est nécessaire. Lors de la première
utilisation du chat, le navigateur vous invitera à saisir votre clé, qui sera
stockée localement dans `localStorage`.

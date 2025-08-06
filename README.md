# personnalite-comparee
Webapp HTML/JS combinant test MBTI + Ennéagramme, sans backend. Résultats anonymes stockés via Supabase. Front hébergé sur GitHub Pages.

## Fonctionnalités

- Test MBTI + Ennéagramme avec validation par des proches
- Génération du profil final après 3 évaluations externes
- Chatbot basé sur GPT‑3.5 pour répondre aux questions sur les profils

## Configuration du chatbot

Pour utiliser le chatbot, créez un fichier `.env` à la racine du projet contenant :

```
OPENAI_API_KEY=votre_cle_openai
```

Le serveur utilisera cette clé pour interroger l'API OpenAI.

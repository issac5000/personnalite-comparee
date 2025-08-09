// text.js

// Sélection des éléments du DOM
const input = document.querySelector('#userInput'); // champ texte
const sendBtn = document.querySelector('#sendBtn'); // bouton "Envoyer"
const chatBox = document.querySelector('#chatBox'); // zone d'affichage des messages

// Fonction d'envoi de message
async function sendMessage() {
  try {
    // 1️⃣ Récupérer le texte utilisateur en sécurité
    let userText = input?.value;
    if (typeof userText !== 'string') userText = '';
    userText = userText.trim();

    // 2️⃣ Bloquer si aucun texte
    if (!userText) {
      console.warn("⚠️ Aucun texte saisi → requête annulée");
      return;
    }

    // 3️⃣ Ajouter le message de l'utilisateur dans l'UI
    addMessageBubble(userText, 'user');
    input.value = '';

    // 4️⃣ Construire la charge utile avec un message SYSTEM obligatoire
    const payload = {
      messages: [
        { role: 'system', content: "Tu es Psycho'Bot, assistant MBTI/Ennéagramme." },
        { role: 'user', content: userText }
      ]
    };

    // 5️⃣ Appeler ton API backend
    const r = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await r.json();

    // 6️⃣ Si le serveur répond avec une erreur
    if (!r.ok) {
      console.error("❌ Erreur API :", data);
      addMessageBubble("⚠️ Une erreur est survenue, réessaie plus tard.", 'bot');
      return;
    }

    // 7️⃣ Afficher la réponse du bot
    addMessageBubble(data.message || "(Pas de réponse)", 'bot');

  } catch (err) {
    console.error("💥 Erreur front :", err);
    addMessageBubble("⚠️ Erreur technique", 'bot');
  }
}

// Fonction d'affichage des bulles
function addMessageBubble(text, sender = 'bot') {
  const bubble = document.createElement('div');
  bubble.className = sender === 'user' ? 'bubble user' : 'bubble bot';
  bubble.textContent = text;
  chatBox.appendChild(bubble);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Écouteurs d'événements
sendBtn.addEventListener('click', sendMessage);
input.addEventListener('keypress', e => {
  if (e.key === 'Enter') sendMessage();
});

const LIMIT_MESSAGE = "Tu as atteint la limite quotidienne. Reviens demain.";

async function sendChatMessage(message) {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'gpt-5-mini', message })
    });
    if (res.status === 429) {
      return { message: LIMIT_MESSAGE, limitError: true };
    }
    const data = await res.json();
    return { message: data.message };
  } catch (e) {
    return { message: "Désolé, une erreur est survenue." };
  }
}

function isNearBottom(el) {
  return el.scrollHeight - el.scrollTop - el.clientHeight < 50;
}

function safeScrollToBottom(el) {
  if (isNearBottom(el)) {
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }
}

function appendMessage(role, text, { limitError = false } = {}) {
  const row = document.createElement('div');
  row.className = `chat-row ${role}`;

  const bubble = document.createElement('div');
  bubble.className = role === 'assistant' ? 'assistant-bubble' : 'user-bubble';
  if (limitError) bubble.classList.add('limit-error');
  bubble.dataset.fullText = text;
  row.appendChild(bubble);

  const chatBox = document.getElementById('chat-box');
  chatBox.appendChild(row);
  safeScrollToBottom(chatBox);

  if (role === 'assistant') {
    const scrollInterval = setInterval(() => safeScrollToBottom(chatBox), 50);
    new Typed(bubble, {
      strings: [text],
      typeSpeed: 20,
      onComplete: () => clearInterval(scrollInterval)
    });
  } else {
    bubble.textContent = text;
    safeScrollToBottom(chatBox);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');

  function removeSuggestions() {
    const sug = document.getElementById('chat-suggestions');
    if (sug) sug.remove();
  }

  async function handleSend(message) {
    if (!message.trim()) return;
    appendMessage('user', message);
    removeSuggestions();
    chatInput.value = '';
    const { message: reply, limitError } = await sendChatMessage(message);
    appendMessage('assistant', reply, { limitError });
  }

  chatSend.addEventListener('click', () => handleSend(chatInput.value));

  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend(chatInput.value);
    }
  });

  document.querySelectorAll('.suggestion-bubble').forEach(btn => {
    btn.addEventListener('click', () => handleSend(btn.dataset.question));
  });
});

function applyTranslations(lang = null) {
  // si pas de langue en paramètre, on prend celle du localStorage ou FR par défaut
  if (!lang) {
    lang = localStorage.getItem('lang') || 'fr';
  }

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    let value = translations[lang];
    if (value) {
      key.split('.').forEach(k => {
        value = value && Object.prototype.hasOwnProperty.call(value, k)
          ? value[k]
          : undefined;
      });
    } else {
      value = undefined;
    }

    // on écrase toujours le texte si une traduction existe
    if (value !== undefined && value !== null) {
      el.innerHTML = value;
    } else {
      console.warn(`❌ Traduction manquante pour ${key} (${lang})`);
    }
  });
}

function switchLang(lang) {
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
}

document.addEventListener('DOMContentLoaded', () => applyTranslations());

const i18n = {
  t(key) {
    const lang = localStorage.getItem('lang') || 'fr';
    return translations[lang] && translations[lang][key] ? translations[lang][key] : key;
  }
};

function applyTranslations() {
  const lang = localStorage.getItem('lang') || 'fr';
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = i18n.t(key);
    if (translation !== undefined) {
      el.innerHTML = translation;
    }
  });
}

function switchLang(lang) {
  localStorage.setItem('lang', lang);
  applyTranslations();
}

document.addEventListener('DOMContentLoaded', applyTranslations);

function applyTranslations() {
  const lang = localStorage.getItem('lang') || 'fr';
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[lang] && translations[lang][key];
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

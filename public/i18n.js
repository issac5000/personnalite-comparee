function applyTranslations() {
  const lang = localStorage.getItem('lang') || 'fr';
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[lang] && translations[lang][key];
    el.innerHTML = translation !== undefined ? translation : key;
  });
}

function switchLang(lang) {
  localStorage.setItem('lang', lang);
  applyTranslations();
}

document.addEventListener('DOMContentLoaded', applyTranslations);

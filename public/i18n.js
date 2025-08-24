function applyTranslations(lang) {
  const selectedLang = lang || localStorage.getItem('lang') || 'fr';
  document.documentElement.setAttribute('lang', selectedLang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[selectedLang] && translations[selectedLang][key];
    if (translation !== undefined) {
      el.innerHTML = translation;
    }
  });
}

function switchLang(lang) {
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
}

document.addEventListener('DOMContentLoaded', () => applyTranslations());

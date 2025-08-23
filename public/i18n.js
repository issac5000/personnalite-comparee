const i18n = {
  currentLang: localStorage.getItem('pc_lang') || 'en',
  t(key) {
    return translations[this.currentLang] && translations[this.currentLang][key]
      ? translations[this.currentLang][key]
      : key;
  },
  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('pc_lang', lang);
  }
};

function renderI18n() {
  document.documentElement.setAttribute('lang', i18n.currentLang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = i18n.t(key);
    if (translation !== undefined) {
      el.innerHTML = translation;
    }
  });
}

if (!localStorage.getItem('pc_lang')) {
  localStorage.setItem('pc_lang', i18n.currentLang);
}

document.addEventListener('DOMContentLoaded', renderI18n);

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    const open = mobileMenu.classList.contains('active');
    if (open) {
      mobileMenu.classList.remove('active');
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
    } else {
      mobileMenu.classList.add('active');
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
      mobileMenuButton.setAttribute('aria-expanded', 'true');
    }
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const homeMenuContainer = document.getElementById('home-menu-container');
const homeMenuButton = document.getElementById('home-menu-button');
const homeMenu = document.getElementById('home-menu');
if (homeMenuContainer && homeMenuButton && homeMenu) {
  const openMenu = () => {
    homeMenu.classList.remove('invisible', 'opacity-0');
    homeMenuButton.setAttribute('aria-expanded', 'true');
  };
  const closeMenu = () => {
    homeMenu.classList.add('invisible', 'opacity-0');
    homeMenuButton.setAttribute('aria-expanded', 'false');
  };
  homeMenuContainer.addEventListener('mouseenter', openMenu);
  homeMenuContainer.addEventListener('mouseleave', closeMenu);
  homeMenuButton.addEventListener('focus', openMenu);
  homeMenuButton.addEventListener('blur', e => { if (!homeMenu.contains(e.relatedTarget)) closeMenu(); });
  document.addEventListener('click', e => { if (!homeMenuContainer.contains(e.target)) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}

const mobileHomeButton = document.getElementById('mobile-home-button');
const mobileHomeMenu = document.getElementById('mobile-home-menu');
const mobileHomeCaret = document.getElementById('mobile-home-caret');
if (mobileHomeButton && mobileHomeMenu && mobileHomeCaret) {
  mobileHomeButton.addEventListener('click', () => {
    const expanded = mobileHomeButton.getAttribute('aria-expanded') === 'true';
    mobileHomeButton.setAttribute('aria-expanded', String(!expanded));
    mobileHomeMenu.classList.toggle('hidden', expanded);
    mobileHomeCaret.classList.toggle('rotate-180', !expanded);
  });
  document.addEventListener('click', e => {
    if (!mobileHomeButton.contains(e.target) && !mobileHomeMenu.contains(e.target)) {
      mobileHomeMenu.classList.add('hidden');
      mobileHomeButton.setAttribute('aria-expanded', 'false');
      mobileHomeCaret.classList.remove('rotate-180');
    }
  });
}

function showModal(title, content) {
  const modalContainer = document.getElementById('modal-container');
  modalContainer.innerHTML = `
    <div class="modal show" id="current-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="text-xl font-bold text-gray-900">${title}</h2>
          <span class="close" onclick="closeModal()">&times;</span>
        </div>
        <div class="modal-body">${content}</div>
      </div>
    </div>`;
  if (typeof applyTranslations === 'function') {
    applyTranslations();
  }
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); }, { once: true });
  document.getElementById('current-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });
}

function closeModal() {
  const modal = document.getElementById('current-modal');
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      const c = document.getElementById('modal-container');
      if (c) c.innerHTML = '';
    }, 300);
  }
}

function openProfileModal() {
  const modal = document.getElementById('profile-modal');
  if (modal) {
    modal.classList.add('show');
    resetProfileModal();
  }
}
function closeProfileModal() {
  const modal = document.getElementById('profile-modal');
  if (modal) modal.classList.remove('show');
}
function resetProfileModal() {
  document.querySelectorAll('.profile-step').forEach(s => s.style.display = 'none');
  const inputStep = document.getElementById('code-input-step');
  if (inputStep) inputStep.style.display = 'block';
  const codeInput = document.getElementById('profile-code');
  if (codeInput) codeInput.value = '';
}
function checkProfileCode() {
  document.querySelectorAll('.profile-step').forEach(s => s.style.display = 'none');
  const error = document.getElementById('error-message');
  if (error) error.style.display = 'block';
}
function shareCode(){ alert('Fonctionnalité à venir'); }
function viewResults(){ alert('Fonctionnalité à venir'); }

const mbtiDetailedDescriptions = {
  INTJ:{title:"INTJ - L'Architecte",content:'<p>Visionnaires stratégiques avec un plan pour tout.</p>'},
  ENTJ:{title:"ENTJ - Le Commandant",content:'<p>Leaders naturels, charismatiques et déterminés.</p>'},
  INTP:{title:"INTP - Le Penseur",content:'<p>Penseurs logiques et créatifs, en quête d’idées.</p>'},
  ENTP:{title:"ENTP - L\'Innovateur",content:'<p>Curieux, ingénieux et toujours prêts à débattre.</p>'},
  INFJ:{title:"INFJ - L'Avocat",content:'<p>Idéalistes créatifs guidés par leurs valeurs.</p>'},
  ENFJ:{title:"ENFJ - Le Donateur",content:'<p>Charismatiques et empathiques, tournés vers autrui.</p>'},
  INFP:{title:"INFP - Le Médiateur",content:'<p>Poétiques, gentils et altruistes.</p>'},
  ENFP:{title:"ENFP - L\'Inspirateur",content:'<p>Enthousiastes, créatifs et sociables.</p>'},
  ISTJ:{title:"ISTJ - Le Logisticien",content:'<p>Pratiques et factuels, fiables et responsables.</p>'},
  ESTJ:{title:"ESTJ - Le Directeur",content:'<p>Organisés, dirigent avec efficacité.</p>'},
  ISFJ:{title:"ISFJ - Le Protecteur",content:'<p>Chaleureux et consciencieux, protecteurs.</p>'},
  ESFJ:{title:"ESFJ - Le Consul",content:'<p>Attentionnés, sociables et coopératifs.</p>'},
  ISTP:{title:"ISTP - Le Virtuose",content:'<p>Pragmatiques, aiment comprendre comment tout marche.</p>'},
  ESTP:{title:"ESTP - L\'Entrepreneur",content:'<p>Énergétiques, aiment l’action et le présent.</p>'},
  ISFP:{title:"ISFP - L\'Aventurier",content:'<p>Sensibles, artistiques et indépendants.</p>'},
  ESFP:{title:"ESFP - L'Artiste",content:'<p>Spontanés, débordant d’énergie et de joie de vivre.</p>'}
};
function showMBTIDetails(type){
  const d = mbtiDetailedDescriptions[type];
  if (d) showModal(d.title, d.content);
}

const enneagramDetailedDescriptions = {
  '1':{title:'Type 1 - Le Perfectionniste',content:'<p>Éthique, engagé et cherche la perfection.</p>'},
  '2':{title:'Type 2 - L\'Altruiste',content:'<p>Chaleureux et serviable, orienté vers les autres.</p>'},
  '3':{title:'Type 3 - Le Performant',content:'<p>Ambitieux, axé sur la réussite.</p>'},
  '4':{title:'Type 4 - L\'Individualiste',content:'<p>Sensible, expressif et authentique.</p>'},
  '5':{title:'Type 5 - L\'Observateur',content:'<p>Analytique, avide de connaissances.</p>'},
  '6':{title:'Type 6 - Le Loyal',content:'<p>Fiable, prudent et orienté sécurité.</p>'},
  '7':{title:'Type 7 - L\'Épicurien',content:'<p>Optimiste, aime la nouveauté.</p>'},
  '8':{title:'Type 8 - Le Leader',content:'<p>Assertif, protecteur et puissant.</p>'},
  '9':{title:'Type 9 - Le Médiateur',content:'<p>Calme, cherche l’harmonie.</p>'}
};
function showEnneagramDetails(type){
  const d = enneagramDetailedDescriptions[type];
  if (d) showModal(d.title, d.content);
}

function showPrivacyPolicy(){
  const content = `<p class="text-gray-700">Nous collectons uniquement les réponses nécessaires au fonctionnement du site. Aucune donnée personnelle n'est partagée.</p>`;
  showModal('Politique de Confidentialité', content);
}
function showTermsOfService(){
  const content = `<p class="text-gray-700">L'utilisation du site est soumise à votre acceptation de nos conditions d'utilisation.</p>`;
  showModal("Conditions d'utilisation", content);
}
function showLegalNotices(){
  const content = `
    <div class="space-y-4">
      <p class="text-gray-700">Personnalité Comparée — Site éducatif hébergé par Vercel.</p>
      <h4 class="font-semibold text-gray-900">Marques et mentions légales spécifiques</h4>
      <p class="text-gray-700">
        MBTI est une marque déposée appartenant à The Myers-Briggs Company. Le présent site utilise ce terme à des fins pédagogiques et informatives uniquement. Nous ne sommes ni affiliés, ni agréés, ni soutenus par The Myers-Briggs Company.
      </p>
      <p class="text-gray-700">
        L’utilisation du mot "Ennéagramme" fait référence au système de typologie de la personnalité bien connu, dont l’usage est libre. Aucun lien n’est revendiqué avec des organismes officiels comme The Enneagram Institute.
      </p>
    </div>
  `;
  showModal('Mentions légales', content);
}
function showContact(){
  const content = `<p class="text-gray-700">Écrivez-nous à <a href="mailto:contact@personnalitecomparee.com" class="text-blue-600 underline">contact@personnalitecomparee.com</a>.</p>`;
  showModal('Contact', content);
}

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://swjnpvfkloubshksobau.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3am5wdmZrbG91YnNoa3NvYmF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwOTUxMzEsImV4cCI6MjA2OTY3MTEzMX0.A6rnIJyfIIxDT0c2XW_zGeUXpdYCgBFd6MTzBGFZ-Cg";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
window.supabase = supabase;

// Lightweight, privacy-friendly client geolocation (cached per session)
// Purpose: enrich analytics events with country/city without server code.
// Cached in sessionStorage under 'pc_geo' and exposed as window.pcGeo
(async function initClientGeoOnce(){
  try {
    const cached = sessionStorage.getItem('pc_geo');
    if (cached) {
      window.pcGeo = JSON.parse(cached);
      return;
    }
    const ctrl = new AbortController();
    const to = setTimeout(() => ctrl.abort(), 2500); // fail fast
    const res = await fetch('https://ipwho.is/?fields=country,city,region,continent,success', { signal: ctrl.signal });
    clearTimeout(to);
    if (!res.ok) return;
    const d = await res.json();
    if (!d || d.success === false) return;
    const geo = {
      country: d.country || null,
      city: d.city || null,
      region: d.region || null,
      continent: d.continent || null
    };
    sessionStorage.setItem('pc_geo', JSON.stringify(geo));
    window.pcGeo = geo;
  } catch (e) {
    // Silent failure to avoid breaking the site
    // console.warn('[geo] lookup failed', e);
  }
})();

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
      <h3 class="text-lg font-semibold text-gray-900" data-i18n="footer.legal.mentions.title">Mentions Légales</h3>

      <h4 class="font-semibold text-gray-900" data-i18n="footer.legal.mentions.editor.title">Éditeur du site</h4>
      <p class="text-gray-700" data-i18n="footer.legal.mentions.editor.text">
        <strong>Personnalité Comparée</strong><br>
        Site web éducatif et informatif sur les tests de personnalité (MBTI et Ennéagramme)<br>
        Contact : <a href="mailto:contact@personnalitecomparee.com" class="text-blue-600 hover:underline">contact@personnalitecomparee.com</a>
      </p>

      <h4 class="font-semibold text-gray-900" data-i18n="footer.legal.mentions.hosting.title">Hébergement</h4>
      <p class="text-gray-700" data-i18n="footer.legal.mentions.hosting.text">
        Ce site est hébergé par <strong>Vercel Inc.</strong><br>
        340 S Lemon Ave #4133<br>
        Walnut, CA 91789, États-Unis<br>
        <a href="https://vercel.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">https://vercel.com</a>
      </p>

      <h4 class="font-semibold text-gray-900" data-i18n="footer.legal.mentions.ip.title">Propriété intellectuelle</h4>
      <p class="text-gray-700" data-i18n="footer.legal.mentions.ip.text">
        L’ensemble du contenu de ce site (textes, éléments graphiques, code source) est protégé par les lois en vigueur sur la propriété intellectuelle.<br>
        Les modèles MBTI et Ennéagramme sont des systèmes conceptuels utilisés ici uniquement à des fins pédagogiques et informatives.
      </p>

      <h4 class="font-semibold text-gray-900" data-i18n="footer.legal.mentions.liability.title">Responsabilité</h4>
      <p class="text-gray-700" data-i18n="footer.legal.mentions.liability.text">
        Les informations fournies sur ce site le sont à titre indicatif et ne constituent en aucun cas un conseil professionnel, médical ou psychologique. L’utilisateur reste seul responsable de l’usage qu’il fait des informations et résultats proposés.
      </p>

      <h4 class="font-semibold text-gray-900" data-i18n="footer.legal.mentions.trademarks.title">Marques et mentions légales spécifiques</h4>
      <p class="text-gray-700" data-i18n="footer.legal.mentions.trademarks.mbti">
        MBTI est une marque déposée appartenant à The Myers-Briggs Company. Le présent site utilise ce terme à des fins pédagogiques et informatives uniquement. Nous ne sommes ni affiliés, ni agréés, ni soutenus par The Myers-Briggs Company.
      </p>
      <p class="text-gray-700" data-i18n="footer.legal.mentions.trademarks.enneagram">
        L’utilisation du mot "Ennéagramme" fait référence au système de typologie de la personnalité bien connu, dont l’usage est libre. Aucun lien n’est revendiqué avec des organismes officiels comme The Enneagram Institute.
      </p>
    </div>
  `;
  showModal('<span data-i18n="footer.legal.mentions.title">Mentions Légales</span>', content);
}
function showContact(){
  const content = `
    <div class="space-y-4">
      <h3 class="text-lg font-semibold text-gray-900" data-i18n="footer.contact.support.title">Support</h3>

      <div class="bg-blue-50 p-4 rounded-lg">
        <h4 class="font-semibold text-blue-900" data-i18n="footer.contact.support.email.title">Email</h4>
        <p class="text-blue-700" data-i18n="footer.contact.support.email.text"></p>
      </div>

      <div class="bg-blue-50 p-4 rounded-lg">
        <h4 class="font-semibold text-blue-900" data-i18n="footer.contact.support.tech.title">Support technique</h4>
        <p class="text-blue-700" data-i18n="footer.contact.support.tech.text">Pour toute question technique ou problème avec le test, n'hésitez pas à nous écrire en détaillant votre problème.</p>
      </div>

      <div class="bg-green-50 p-4 rounded-lg">
        <h4 class="font-semibold text-green-900" data-i18n="footer.contact.support.suggestions.title">Suggestions</h4>
        <p class="text-green-700" data-i18n="footer.contact.support.suggestions.text">Vos suggestions d'amélioration sont les bienvenues ! Aidez-nous à améliorer l'expérience utilisateur.</p>
      </div>

      <div class="bg-yellow-50 p-4 rounded-lg">
        <h4 class="font-semibold text-yellow-900" data-i18n="footer.contact.support.time.title">Temps de réponse</h4>
        <p class="text-yellow-700" data-i18n="footer.contact.support.time.text">Nous nous efforçons de répondre à tous les messages dans les 48 heures.</p>
      </div>
    </div>
  `;
  showModal('<span data-i18n="footer.contact.support.title">Support</span>', content);
}

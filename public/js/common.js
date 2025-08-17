// Navigation and menu interactions
// déplacé depuis nav.js
function initNavigation(){
  document.addEventListener('DOMContentLoaded',()=>{
    const desktopConfigs=[
      {c:'home-menu-container',b:'home-menu-button',m:'home-menu'},
      {c:'mbti-menu-container',b:'mbti-menu-button',m:'mbti-menu'},
      {c:'ennea-menu-container',b:'ennea-menu-button',m:'ennea-menu'}
    ];
    const desktopMenus=desktopConfigs.map(cfg=>({
      container:document.getElementById(cfg.c),
      button:document.getElementById(cfg.b),
      menu:document.getElementById(cfg.m)
    })).filter(obj=>obj.container&&obj.button&&obj.menu);
    desktopMenus.forEach(current=>{
      let closeTimeout;
      const openMenu=()=>{
        clearTimeout(closeTimeout);
        desktopMenus.forEach(other=>{
          if(other!==current){
            other.menu.classList.add('invisible','opacity-0');
            other.button.setAttribute('aria-expanded','false');
          }
        });
        current.menu.classList.remove('invisible','opacity-0');
        current.button.setAttribute('aria-expanded','true');
      };
      const closeMenu=()=>{
        current.menu.classList.add('invisible','opacity-0');
        current.button.setAttribute('aria-expanded','false');
      };
      const scheduleClose=()=>{
        clearTimeout(closeTimeout);
        closeTimeout=setTimeout(closeMenu,250);
      };
      current.button.addEventListener('mouseenter',openMenu);
      current.menu.addEventListener('mouseenter',openMenu);
      current.button.addEventListener('mouseleave',scheduleClose);
      current.menu.addEventListener('mouseleave',scheduleClose);
      current.button.addEventListener('focus',openMenu);
      current.button.addEventListener('blur',e=>{if(!current.menu.contains(e.relatedTarget)) scheduleClose();});
      document.addEventListener('click',e=>{if(!current.container.contains(e.target)) closeMenu();});
      document.addEventListener('keydown',e=>{if(e.key==='Escape') closeMenu();});
    });

    const mobileConfigs=[
      {b:'mobile-home-button',m:'mobile-home-menu',c:'mobile-home-caret'},
      {b:'mobile-mbti-button',m:'mobile-mbti-menu',c:'mobile-mbti-caret'},
      {b:'mobile-ennea-button',m:'mobile-ennea-menu',c:'mobile-ennea-caret'}
    ];
    const mobileMenus=mobileConfigs.map(cfg=>({
      button:document.getElementById(cfg.b),
      menu:document.getElementById(cfg.m),
      caret:document.getElementById(cfg.c)
    })).filter(obj=>obj.button&&obj.menu&&obj.caret);

    const isMobile=()=>window.matchMedia('(max-width: 768px)').matches;

    mobileMenus.forEach(current=>{
      current.button.addEventListener('click',e=>{
        if(!isMobile()) return;
        const expanded=current.button.getAttribute('aria-expanded')==='true';
        if(!expanded){
          e.preventDefault();
          e.stopImmediatePropagation();
          mobileMenus.forEach(other=>{
            if(other!==current){
              other.menu.classList.add('hidden');
              other.button.setAttribute('aria-expanded','false');
              other.caret.classList.remove('rotate-180');
            }
          });
          current.menu.classList.remove('hidden');
          current.button.setAttribute('aria-expanded','true');
          current.caret.classList.add('rotate-180');
        }
      },{capture:true});
      current.menu.addEventListener('click',e=>{
        if(!isMobile()) return;
        const link=e.target.closest('a');
        if(link){
          current.menu.classList.add('hidden');
          current.button.setAttribute('aria-expanded','false');
          current.caret.classList.remove('rotate-180');
        }
      });
    });

    document.addEventListener('click',e=>{
      if(!isMobile()) return;
      mobileMenus.forEach(m=>{
        if(!m.button.contains(e.target) && !m.menu.contains(e.target)){
          m.menu.classList.add('hidden');
          m.button.setAttribute('aria-expanded','false');
          m.caret.classList.remove('rotate-180');
        }
      });
    });
  });
}

document.addEventListener('includesLoaded',initNavigation);

// Modals and shared utilities
// déplacé depuis common.js, index.html, mbti.html, enneagramme.html, blog.html
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

// déplacé depuis index.html, mbti.html, enneagramme.html, blog.html, profile-modal.html
function shareCode(){ alert('Fonctionnalité à venir'); }

function viewResults(){ alert('Fonctionnalité à venir'); }

// MBTI and Enneagram details (from common.js)
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

// déplacé depuis index.html, mbti.html, enneagramme.html, blog.html
function showPrivacyPolicy(){
  const content = `<p class="text-gray-700">Nous collectons uniquement les réponses nécessaires au fonctionnement du site. Aucune donnée personnelle n'est partagée.</p>`;
  showModal('Politique de Confidentialité', content);
}

// déplacé depuis index.html, mbti.html, enneagramme.html, blog.html
function showTermsOfService(){
  const content = `<p class="text-gray-700">L'utilisation du site est soumise à votre acceptation de nos conditions d'utilisation.</p>`;
  showModal("Conditions d'utilisation", content);
}

// déplacé depuis index.html, mbti.html, enneagramme.html, blog.html
function showLegalNotices(){
  const content = `<p class="text-gray-700">Personnalité Comparée — Site éducatif hébergé par Vercel.</p>`;
  showModal('Mentions légales', content);
}

// déplacé depuis index.html, mbti.html, enneagramme.html, blog.html
function showContact(){
  const content = `<p class="text-gray-700">Écrivez-nous à <a href="mailto:contact@personnalitecomparee.com" class="text-blue-600 underline">contact@personnalitecomparee.com</a>.</p>`;
  showModal('Contact', content);
}

// déplacé depuis index.html, mbti.html, enneagramme.html, blog.html
function displayStatusMessage(profile, completedEvaluations, totalEvaluations) {
  const statusMessage = document.getElementById('status-message');
  const totalRequired = 3;
  const remaining = totalRequired - completedEvaluations;

  if (completedEvaluations >= totalRequired) {
    statusMessage.className = 'rounded-lg p-4 mb-4 bg-green-50 border border-green-200';
    statusMessage.innerHTML = `
      <div class="flex">
        <div class="flex-shrink-0">
          <i class="fas fa-check-circle text-green-400 text-xl"></i>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-green-800">Analyse complète !</h3>
          <div class="mt-2 text-sm text-green-700">
            <p>Félicitations ! Toutes les évaluations ont été complétées. Vous pouvez maintenant consulter votre profil de personnalité complet.</p>
          </div>
        </div>
      </div>`;
    updateResultsButtonState(0);
  } else {
    statusMessage.className = 'rounded-lg p-4 mb-4 bg-yellow-50 border border-yellow-200';
    const personText = remaining === 1 ? 'personne' : 'personnes';
    statusMessage.innerHTML = `
      <div class="flex">
        <div class="flex-shrink-0">
          <i class="fas fa-clock text-yellow-400 text-xl"></i>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-yellow-800">Évaluations en cours</h3>
          <div class="mt-2 text-sm text-yellow-700">
            <p>Il reste <strong>${remaining} ${personText}</strong> qui ${remaining === 1 ? 'doit' : 'doivent'} compléter l’évaluation pour améliorer le niveau de certitude de votre profil et accéder à votre page de résultats détaillés. Cette page présente votre profil MBTI et votre profil Ennéagramme, leur niveau de certitude respectif, des graphiques pour y voir plus clair, une description personnalisée de votre profil par Psycho’Bot, ainsi que les résultats de chaque évaluateur et leur cohérence interne.</p>
            <p class="mt-1">Partagez votre code unique avec vos proches pour qu’ils puissent vous évaluer et vous donner accès à cette page.</p>
          </div>
        </div>
      </div>`;
    updateResultsButtonState(remaining);
  }
}

// déplacé depuis index.html, mbti.html, enneagramme.html
function updateResultsButtonState(remaining) {
  const btn = document.getElementById('seeResultsBtn');
  if (!btn) return;
  if (remaining > 0) {
    if (!btn.dataset.onclick && btn.getAttribute('onclick')) {
      btn.dataset.onclick = btn.getAttribute('onclick');
    }
    btn.removeAttribute('onclick');
    btn.setAttribute('disabled', 'disabled');
    btn.setAttribute('aria-disabled', 'true');
    btn.classList.add('opacity-60', 'cursor-not-allowed', 'bg-gray-300');
    btn.classList.remove('bg-black', 'hover:bg-gray-800');
    btn.setAttribute('title', 'Complétez d’abord 3 évaluations externes pour accéder à vos résultats détaillés.');
  } else {
    if (btn.dataset.onclick) {
      btn.setAttribute('onclick', btn.dataset.onclick);
    }
    btn.removeAttribute('disabled');
    btn.removeAttribute('aria-disabled');
    btn.classList.remove('opacity-60', 'cursor-not-allowed', 'bg-gray-300');
    btn.classList.add('bg-black', 'hover:bg-gray-800');
    btn.removeAttribute('title');
  }
}

// déplacé depuis index.html, mbti.html, enneagramme.html, blog.html
function updateProgress(totalProgress, maxProgress) {
  const progressPercent = (totalProgress / maxProgress) * 100;
  const bar = document.getElementById('progress-bar');
  if (bar) bar.style.width = progressPercent + '%';
  const text = document.getElementById('progress-text');
  if (text) text.textContent = `${totalProgress}/${maxProgress} terminé`;
}

document.addEventListener('includesLoaded',()=>{
  if (typeof initPage === 'function') {
    initPage();
  }
});

(function(){
  document.addEventListener('DOMContentLoaded', function(){
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

    // Consider tablet widths as mobile for menus to avoid crowding
    const isMobile=()=>window.matchMedia('(max-width: 1023px)').matches;

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

    // Brand name/logo: navigate home from any page; on home, just scroll to top
    const brandHome = document.getElementById('brand-home');
    if (brandHome) {
      const goHome = (e)=>{
        e.preventDefault();
        const p = location.pathname || '';
        const onHome = p.endsWith('/index.html') || p === '/' || p === '';
        if (onHome) {
          try { window.scrollTo({ top: 0, behavior: 'smooth' }); }
          catch { window.scrollTo(0,0); }
        } else {
          location.href = 'index.html';
        }
      };
      brandHome.style.cursor = 'pointer';
      brandHome.setAttribute('role','link');
      brandHome.setAttribute('tabindex','0');
      brandHome.addEventListener('click', goHome);
      brandHome.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' ') goHome(e); });
      const logoEl = brandHome.previousElementSibling;
      if (logoEl && logoEl.tagName === 'IMG') {
        logoEl.style.cursor = 'pointer';
        logoEl.addEventListener('click', goHome);
      }
    }

    const privacyLink = document.getElementById('privacy-link');
    if (privacyLink) {
      privacyLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPrivacyPolicy();
      });
    }

    const termsLink = document.getElementById('terms-link');
    if (termsLink) {
      termsLink.addEventListener('click', function(e) {
        e.preventDefault();
        showTermsOfService();
      });
    }

    const legalLink = document.getElementById('legal-link');
    if (legalLink) {
      legalLink.addEventListener('click', function(e) {
        e.preventDefault();
        showLegalNotices();
      });
    }

    const cookiesLink = document.getElementById('cookies-link');
    if (cookiesLink) {
      cookiesLink.addEventListener('click', function(e) {
        e.preventDefault();
        showCookies();
      });
    }

      const supportLink = document.getElementById('support-link');
      if (supportLink) {
        supportLink.addEventListener('click', function(e) {
          e.preventDefault();
          showSupport();
        });
      }

      const langToggle=document.getElementById('lang-toggle');
      const langMenu=document.getElementById('lang-menu');
      if(langToggle&&langMenu){
        const changeLanguage=lang=>{
          if(window.i18n&&typeof i18n.setLanguage==='function'){
            i18n.setLanguage(lang);
          }
          if(typeof renderI18n==='function') renderI18n();
          if(typeof switchLang==='function') switchLang(lang);
          if(typeof applyTranslations==='function') applyTranslations();
          if(typeof updatePlaceholders==='function') updatePlaceholders();
        };
        langToggle.addEventListener('click',e=>{
          e.stopPropagation();
          langMenu.classList.toggle('hidden');
        });
        langMenu.querySelectorAll('button[data-lang]').forEach(btn=>{
          btn.addEventListener('click',()=>{
            changeLanguage(btn.getAttribute('data-lang'));
            langMenu.classList.add('hidden');
          });
        });
        document.addEventListener('click',e=>{
          if(!langMenu.contains(e.target)&&!langToggle.contains(e.target)){
            langMenu.classList.add('hidden');
          }
        });
      }

      // Dynamically adjust body top padding to header height
      const headerEl = document.getElementById('site-header');
      const setHeaderOffset = ()=>{
        if(!headerEl) return;
        const h = headerEl.offsetHeight || 64;
        document.body.style.paddingTop = h + 'px';
        document.documentElement.style.setProperty('--header-h', h + 'px');
      };
      setHeaderOffset();
      let resizeTO;
      window.addEventListener('resize', ()=>{
        clearTimeout(resizeTO);
        resizeTO = setTimeout(setHeaderOffset, 100);
      });
    });
  })();

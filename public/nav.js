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

    mobileMenus.forEach(current=>{
      current.button.addEventListener('click',e=>{
        const expanded=current.button.getAttribute('aria-expanded')==='true';
        if(!expanded){
          e.preventDefault();
          mobileMenus.forEach(other=>{
            other.menu.classList.add('hidden');
            other.button.setAttribute('aria-expanded','false');
            other.caret.classList.remove('rotate-180');
          });
          current.menu.classList.remove('hidden');
          current.button.setAttribute('aria-expanded','true');
          current.caret.classList.add('rotate-180');
        }
      });
    });

    document.addEventListener('click',e=>{
      mobileMenus.forEach(m=>{
        if(!m.button.contains(e.target) && !m.menu.contains(e.target)){
          m.menu.classList.add('hidden');
          m.button.setAttribute('aria-expanded','false');
          m.caret.classList.remove('rotate-180');
        }
      });
    });
  });
})();

(function(){
  function initWaterFill() {
    const card = document.getElementById('autoEvalCard');
    if (!card) return null;

    let water = card.querySelector('.water-fill');
    if (!water) {
      water = document.createElement('div');
      water.className = 'water-fill';
      water.setAttribute('aria-hidden', 'true');
      card.prepend(water);
    }

    if (!water.querySelector('.water-svg')) {
      water.innerHTML = `
        <svg class="water-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waterGradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stop-color="hsla(215, 90%, 58%, 0.25)" />
              <stop offset="60%" stop-color="hsla(215, 90%, 60%, 0.18)" />
              <stop offset="100%" stop-color="hsla(215, 90%, 65%, 0.10)" />
            </linearGradient>
            <filter id="waterRipple">
              <feTurbulence type="fractalNoise" baseFrequency="0.008 0.02" numOctaves="2" seed="2">
                <animate class="ripple-anim" attributeName="baseFrequency" dur="8s" values="0.008 0.02;0.01 0.025;0.008 0.02" repeatCount="indefinite" />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="6" xChannelSelector="R" yChannelSelector="G">
                <animate class="ripple-anim" attributeName="scale" dur="8s" values="5;8;5" repeatCount="indefinite" />
              </feDisplacementMap>
            </filter>
          </defs>
          <rect width="100" height="100" fill="url(#waterGradient)" filter="url(#waterRipple)" />
        </svg>`;
    }

    const percentEl = card.querySelector('[data-water-percent]');

    function setWaterProgress(percentage) {
      if (!water) return;
      const clamped = Math.max(0, Math.min(100, Math.round(Number(percentage))));
      water.style.transform = `translateY(${100 - clamped}%)`;
      if (percentEl) {
        percentEl.textContent = `Progression : ${clamped}%`;
      }
    }

    window.setWaterProgress = setWaterProgress;
    return setWaterProgress;
  }
  function computeProgress(currentIndex, answeredCount) {
    const total = window.AUTO_QUESTIONS ? AUTO_QUESTIONS.length : 0;
    if (!total) return 0;
    const progress = Math.max(answeredCount, currentIndex) / total * 100;
    return Math.round(progress);
  }
  window.initWaterFill = initWaterFill;
  window.computeProgress = computeProgress;
})();

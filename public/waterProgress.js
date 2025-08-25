(function(){
  function initWaterFill() {
    const card = document.getElementById('autoEvalCard');
    if (!card) return null;
    const water = card.querySelector('.water-fill');
    const percentEl = card.querySelector('[data-water-percent]');
    function setWaterProgress(percentage) {
      if (!water) return;
      const clamped = Math.max(0, Math.min(100, Math.round(percentage)));
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

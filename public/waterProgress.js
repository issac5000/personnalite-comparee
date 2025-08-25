(function () {
  function initWaterFill() {
    const card = document.getElementById('autoEvalCard');
    if (!card) return null;

    const waterLevel = card.querySelector('#waterLevelMask .water-level');
    const percentEl = card.querySelector('[data-water-percent]');

    function setWaterProgress(p) {
      const clamped = Math.max(0, Math.min(100, Math.round(Number(p))));
      if (waterLevel) {
        waterLevel.style.transform = `translateY(${100 - clamped}%)`;
      }
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


function getSelfMbtiType(scores) {
  return scores ? buildMbtiType(scores) : null;
}

function getSelfEnneagramType(scores) {
  return scores ? getMaxKey(scores) : null;
}

function buildMbtiType(scores = {}) {
  const pairs = [
    ['E', 'I'],
    ['S', 'N'],
    ['T', 'F'],
    ['J', 'P'],
  ];
  let type = '';
  for (const [a, b] of pairs) {
    const aScore = typeof scores[a] === 'number' ? scores[a] : -Infinity;
    const bScore = typeof scores[b] === 'number' ? scores[b] : -Infinity;
    if (aScore === -Infinity && bScore === -Infinity) {
      return null;
    }
    type += aScore >= bScore ? a : b;
  }
  return type;
}

function getMaxKey(obj = {}) {
  let maxKey = null;
  let maxVal = -Infinity;
  for (const key in obj) {
    const val = obj[key];
    if (typeof val === 'number' && val > maxVal) {
      maxVal = val;
      maxKey = key;
    }
  }
  return maxKey;
}

function getDominantType(weightMap) {
  let dominantType = null;
  let weight = 0;
  for (const [type, w] of Object.entries(weightMap)) {
    if (w > weight) {
      weight = w;
      dominantType = type;
    }
  }
  return { dominantType, weight };
}

function computeFinalProfileFromExternalEvaluations(selfMbtiScores, selfEnneagramScores, evaluations) {
  const selfMbtiType = getSelfMbtiType(selfMbtiScores);
  const selfEnneagramType = getSelfEnneagramType(selfEnneagramScores);

  const emptyResult = {
    mbtiType: null,
    enneagramType: null,
    mbtiCertainty: 0,
    enneagramCertainty: 0,
    overallCertainty: 0,
    mbtiConvergence: 0,
    enneagramConvergence: 0,
    selfMbtiType,
    selfEnneagramType,
  };

  if (!Array.isArray(evaluations) || evaluations.length < 3) {
    return emptyResult;
  }

  const baseWeights = { family: 30, partner: 25, friend: 25, colleague: 15 };

  const rawWeights = [];
  let totalRaw = 0;
  const validEvaluations = [];

  evaluations.forEach((ev) => {
    const weight = baseWeights[ev.relation] || 0;
    if (weight > 0) {
      rawWeights.push(weight);
      validEvaluations.push(ev);
      totalRaw += weight;
    }
  });

  if (validEvaluations.length < 3 || totalRaw <= 0) {
    return emptyResult;
  }

  let normalizedWeights = rawWeights.map((w) => w / totalRaw);
  const sumNormalized = normalizedWeights.reduce((a, b) => a + b, 0);
  if (sumNormalized === 0) {
    return emptyResult;
  }
  normalizedWeights = normalizedWeights.map((w) => w / sumNormalized);

  const checkSum = normalizedWeights.reduce((a, b) => a + b, 0);
  if (Math.abs(checkSum - 1) > 1e-6) {
    normalizedWeights = normalizedWeights.map((w) => w / checkSum);
  }

  const mbtiWeights = {};
  const enneagramWeights = {};

  validEvaluations.forEach((ev, idx) => {
    const weight = normalizedWeights[idx];
    const mbtiType = buildMbtiType(ev.mbti_scores || {});
    if (mbtiType) {
      mbtiWeights[mbtiType] = (mbtiWeights[mbtiType] || 0) + weight;
    }
    const enneagramType = getMaxKey(ev.enneagram_scores || {});
    if (enneagramType) {
      enneagramWeights[enneagramType] = (enneagramWeights[enneagramType] || 0) + weight;
    }
  });

  const { dominantType: mbtiType, weight: mbtiWeight } = getDominantType(mbtiWeights);
  const { dominantType: enneagramType, weight: enneagramWeight } = getDominantType(enneagramWeights);

  const mbtiCertainty = Math.round((mbtiWeight || 0) * 100);
  const enneagramCertainty = Math.round((enneagramWeight || 0) * 100);
  const overallCertainty = Math.round((mbtiCertainty + enneagramCertainty) / 2);

  return {
    mbtiType,
    enneagramType,
    mbtiCertainty,
    enneagramCertainty,
    overallCertainty,
    mbtiConvergence: mbtiCertainty,
    enneagramConvergence: enneagramCertainty,
    selfMbtiType,
    selfEnneagramType,
  };
}

module.exports = { computeFinalProfileFromExternalEvaluations };


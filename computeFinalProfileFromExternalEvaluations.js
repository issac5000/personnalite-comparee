/**
 * Compute final MBTI and Enneagram profile from a set of external evaluations.
 *
 * The previous implementation performed a simple average of every external
 * evaluation.  This file now integrates two additional mechanisms:
 *   1.  Internal coherence weighting – each evaluator receives a coefficient
 *       (1.0, 0.7 or 0.4) based on the consistency of their answers.
 *   2.  External convergence weighting – a light bonus/malus is applied
 *       depending on how much an evaluation agrees with the majority.
 *
 * The core logic for deriving MBTI type, cognitive functions and Enneagram
 * type remains unchanged; only the weighting of the raw scores is affected.
 */

const COGNITIVE_FUNCTIONS = ['Fi', 'Fe', 'Ti', 'Te', 'Ni', 'Ne', 'Si', 'Se'];
const ENNEAGRAM_TYPES = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

// --- Weighted helpers ----------------------------------------------------

function weightedAverage(evaluations, keyList, field, weightGetter) {
  const totals = Object.fromEntries(keyList.map(k => [k, 0]));
  let totalWeight = 0;
  evaluations.forEach(ev => {
    const w = weightGetter(ev);
    totalWeight += w;
    const scores = ev[field] || {};
    keyList.forEach(k => {
      totals[k] += Number(scores[k] || 0) * w;
    });
  });
  if (totalWeight === 0) totalWeight = 1;
  return Object.fromEntries(keyList.map(k => [k, totals[k] / totalWeight]));
}

function computePercentages(avgMap) {
  const total = Object.values(avgMap).reduce((a, b) => a + b, 0);
  if (total === 0) return Object.fromEntries(Object.keys(avgMap).map(k => [k, 0]));
  return Object.fromEntries(
    Object.entries(avgMap).map(([k, v]) => [k, Math.round((v / total) * 100)])
  );
}

function mbtiFromFunctions(avgFunctions) {
  const E = avgFunctions.Fe + avgFunctions.Te + avgFunctions.Se + avgFunctions.Ne;
  const I = avgFunctions.Fi + avgFunctions.Ti + avgFunctions.Si + avgFunctions.Ni;
  const S = avgFunctions.Si + avgFunctions.Se;
  const N = avgFunctions.Ni + avgFunctions.Ne;
  const T = avgFunctions.Ti + avgFunctions.Te;
  const F = avgFunctions.Fi + avgFunctions.Fe;
  const J = avgFunctions.Te + avgFunctions.Fe;
  const P = avgFunctions.Se + avgFunctions.Ne;
  return (
    (E >= I ? 'E' : 'I') +
    (S >= N ? 'S' : 'N') +
    (T >= F ? 'T' : 'F') +
    (J >= P ? 'J' : 'P')
  );
}

function topEnneagramType(avgTypes) {
  let top = null;
  let max = -Infinity;
  for (const [t, v] of Object.entries(avgTypes)) {
    if (v > max) {
      top = t;
      max = v;
    }
  }
  return top;
}

function computeWing(avgTypes, coreType) {
  if (!coreType) return null;
  const left = coreType === '1' ? '9' : String(Number(coreType) - 1);
  const right = coreType === '9' ? '1' : String(Number(coreType) + 1);
  return avgTypes[left] >= avgTypes[right] ? left : right;
}

// --- Internal coherence --------------------------------------------------

function internalCoherenceMBTI(scores) {
  if (!scores) return 'Faible';
  const E = (scores.Fe || 0) + (scores.Te || 0) + (scores.Se || 0) + (scores.Ne || 0);
  const I = (scores.Fi || 0) + (scores.Ti || 0) + (scores.Si || 0) + (scores.Ni || 0);
  const S = (scores.Si || 0) + (scores.Se || 0);
  const N = (scores.Ni || 0) + (scores.Ne || 0);
  const T = (scores.Ti || 0) + (scores.Te || 0);
  const F = (scores.Fi || 0) + (scores.Fe || 0);
  const J = (scores.Te || 0) + (scores.Fe || 0);
  const P = (scores.Se || 0) + (scores.Ne || 0);

  const pairs = [
    [I, E],
    [S, N],
    [T, F],
    [J, P],
  ];

  const diffs = pairs.map(([a, b]) => Math.abs(a - b));
  const mean = diffs.reduce((s, v) => s + v, 0) / pairs.length;

  if (mean >= 10) return 'Forte';
  if (mean >= 7) return 'Moyenne';
  return 'Faible';
}

function internalCoherenceEnneagram(scores) {
  if (!scores) return 'Faible';
  const types = Object.keys(scores);
  if (types.length === 0) return 'Faible';

  let dominant = types[0];
  types.forEach(t => {
    if ((scores[t] || 0) > (scores[dominant] || 0)) dominant = t;
  });

  const dominantScore = scores[dominant] || 0;
  const others = types.filter(t => t !== dominant).map(t => scores[t] || 0);
  const meanOthers = others.reduce((s, v) => s + v, 0) / (others.length || 1);
  const diff = dominantScore - meanOthers;

  if (diff > 8) return 'Forte';
  if (diff >= 4) return 'Moyenne';
  return 'Faible';
}

const COHERENCE_COEFFICIENT = {
  Forte: 1.0,
  Moyenne: 0.7,
  Faible: 0.4,
};

function convergenceScore(evaluations, keyList, weightGetter, field) {
  if (evaluations.length <= 1) return 100;
  const means = weightedAverage(evaluations, keyList, field, weightGetter);
  let totalDeviation = 0;
  let totalWeight = 0;
  evaluations.forEach(ev => {
    const w = weightGetter(ev);
    totalWeight += w;
    const scores = ev[field] || {};
    keyList.forEach(k => {
      const val = Number(scores[k] || 0);
      totalDeviation += w * Math.abs(val - means[k]);
    });
  });
  // Maximum deviation if one evaluator gives 0 and another 3 on all keys
  const maxDeviation = totalWeight * keyList.length * 3;
  const ratio = totalDeviation / maxDeviation;
  return Math.round((1 - Math.min(ratio, 1)) * 100);
}

function computeFinalProfileFromExternalEvaluations(evaluations) {
  const empty = {
    mbtiType: null,
    enneagramType: null,
    enneagramWing: null,
    mbtiPercentages: {},
    mbtiStack: [],
    mbtiConvergence: 0,
    enneagramConvergence: 0,
    overallCertainty: 0,
  };

  if (!Array.isArray(evaluations) || evaluations.length === 0) {
    return empty;
  }

  // --- Step 1: evaluate internal coherence and compute base weights --------
  const enriched = evaluations.map(ev => {
    const fnScores = ev.function_scores || {};
    const enScores = ev.enneagram_scores || {};

    const mbti = mbtiFromFunctions(fnScores);
    const ennea = topEnneagramType(enScores);

    const cohMBTI = internalCoherenceMBTI(fnScores);
    const cohEnnea = internalCoherenceEnneagram(enScores);

    return {
      original: ev,
      function_scores: fnScores,
      enneagram_scores: enScores,
      mbtiType: mbti,
      enneagramType: ennea,
      weightMBTI: COHERENCE_COEFFICIENT[cohMBTI] || 0,
      weightEnnea: COHERENCE_COEFFICIENT[cohEnnea] || 0,
    };
  });

  // --- Step 2: determine majority types for external convergence -----------
  const majorityLetters = [0, 1, 2, 3].map(i => {
    const counts = {};
    enriched.forEach(e => {
      const l = e.mbtiType[i];
      counts[l] = (counts[l] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  });

  let majorityEnnea = null;
  const enCounts = {};
  enriched.forEach(e => {
    if (e.enneagramType) {
      enCounts[e.enneagramType] = (enCounts[e.enneagramType] || 0) + 1;
    }
  });
  if (Object.keys(enCounts).length) {
    majorityEnnea = Object.entries(enCounts).sort((a, b) => b[1] - a[1])[0][0];
  }

  // --- Step 3: apply external convergence bonus/malus ---------------------
  enriched.forEach(e => {
    let matches = 0;
    for (let i = 0; i < 4; i++) {
      if (e.mbtiType[i] === majorityLetters[i]) matches++;
    }
    if (majorityEnnea && e.enneagramType === majorityEnnea) matches++;

    let mult = 1;
    if (matches === 5) mult = 1.1;
    else if (matches === 3) mult = 0.9;
    else if (matches === 2) mult = 0.8;
    else if (matches <= 1) mult = 0.75;

    e.weightMBTI *= mult;
    e.weightEnnea *= mult;
  });

  // --- Step 4: compute weighted averages ----------------------------------
  const avgFunctions = weightedAverage(
    enriched,
    COGNITIVE_FUNCTIONS,
    'function_scores',
    e => e.weightMBTI
  );
  const avgEnnea = weightedAverage(
    enriched,
    ENNEAGRAM_TYPES,
    'enneagram_scores',
    e => e.weightEnnea
  );

  // --- Step 5: derive final profile ---------------------------------------
  const mbtiType = mbtiFromFunctions(avgFunctions);
  const mbtiPercentages = computePercentages(avgFunctions);
  const mbtiStack = Object.entries(avgFunctions)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([f]) => f);

  const enneagramType = topEnneagramType(avgEnnea);
  const enneagramWing = computeWing(avgEnnea, enneagramType);

  // --- Step 6: compute convergence scores ---------------------------------
  const mbtiConvergence = convergenceScore(
    enriched,
    COGNITIVE_FUNCTIONS,
    e => e.weightMBTI,
    'function_scores'
  );
  const enneagramConvergence = convergenceScore(
    enriched,
    ENNEAGRAM_TYPES,
    e => e.weightEnnea,
    'enneagram_scores'
  );
  const overallCertainty = Math.round((mbtiConvergence + enneagramConvergence) / 2);

  return {
    mbtiType,
    enneagramType,
    enneagramWing,
    mbtiPercentages,
    mbtiStack,
    mbtiConvergence,
    enneagramConvergence,
    overallCertainty,
  };
}

module.exports = { computeFinalProfileFromExternalEvaluations };


/**
 * Compute final MBTI and Enneagram profile from a set of external evaluations.
 * The algorithm no longer weights answers based on the relationship of the evaluator.
 * Instead it averages every evaluation and derives a profile based on Jungian
 * cognitive functions and Enneagram types.  A certainty score is produced by
 * measuring convergence between evaluators.
 */

const COGNITIVE_FUNCTIONS = ['Fi', 'Fe', 'Ti', 'Te', 'Ni', 'Ne', 'Si', 'Se'];
const ENNEAGRAM_TYPES = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

function averageScores(evaluations, keyList, field) {
  const totals = Object.fromEntries(keyList.map(k => [k, 0]));
  evaluations.forEach(ev => {
    const scores = ev[field] || {};
    keyList.forEach(k => {
      totals[k] += Number(scores[k] || 0);
    });
  });
  const count = evaluations.length;
  return Object.fromEntries(keyList.map(k => [k, totals[k] / count]));
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

function convergenceScore(evaluations, keyList, field) {
  if (evaluations.length <= 1) return 100;
  const means = averageScores(evaluations, keyList, field);
  let totalDeviation = 0;
  evaluations.forEach(ev => {
    const scores = ev[field] || {};
    keyList.forEach(k => {
      const val = Number(scores[k] || 0);
      totalDeviation += Math.abs(val - means[k]);
    });
  });
  // Maximum deviation if one evaluator gives 0 and another 3 on all keys
  const maxDeviation = evaluations.length * keyList.length * 3;
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

  const avgFunctions = averageScores(evaluations, COGNITIVE_FUNCTIONS, 'function_scores');
  const avgEnnea = averageScores(evaluations, ENNEAGRAM_TYPES, 'enneagram_scores');

  const mbtiType = mbtiFromFunctions(avgFunctions);
  const mbtiPercentages = computePercentages(avgFunctions);
  const mbtiStack = Object.entries(avgFunctions)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([f]) => f);

  const enneagramType = topEnneagramType(avgEnnea);
  const enneagramWing = computeWing(avgEnnea, enneagramType);

  const mbtiConvergence = convergenceScore(evaluations, COGNITIVE_FUNCTIONS, 'function_scores');
  const enneagramConvergence = convergenceScore(evaluations, ENNEAGRAM_TYPES, 'enneagram_scores');
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


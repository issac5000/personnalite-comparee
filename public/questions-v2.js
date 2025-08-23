// ============================
// AUTO (interne) — 20 questions (avec +3 / -1 opposé)
// ============================
const AUTO_QUESTIONS = [
  {
    id: 1,
    question: "Quand un plan part en vrille, tu fais quoi en premier ?",
    options: [
      { text: "Je questionne point par point jusqu’à clarifier.", functions: { Ti: 3, Fe: -1, Ni: 1 }, enneagram: { "5": 2, "1": 1 } },
      { text: "Je recadre et fixe un plan simple et mesurable.", functions: { Te: 3, Fi: -1, Si: 1 }, enneagram: { "3": 2, "8": 1 } },
      { text: "Je prends du recul pour saisir le sens global.", functions: { Ni: 3, Se: -1 }, enneagram: { "5": 1, "9": 2 } },
      { text: "Je teste en direct et j’ajuste au fur et à mesure.", functions: { Se: 3, Ni: -1, Ne: 1 }, enneagram: { "8": 2, "7": 1 } }
    ]
  },
  {
    id: 2,
    question: "Face à une décision sensible :",
    options: [
      { text: "Je reste fidèle à mes convictions, même si c’est impopulaire.", functions: { Fi: 3, Te: -1 }, enneagram: { "4": 2, "9": 1 } },
      { text: "Je pèse l’impact humain et la cohésion du groupe.", functions: { Fe: 3, Ti: -1, Ne: 1 }, enneagram: { "2": 2, "9": 1 } },
      { text: "Je tranche selon l’efficacité et les priorités.", functions: { Te: 3, Fi: -1, Si: 1 }, enneagram: { "3": 2, "1": 1 } },
      { text: "Je vérifie la cohérence logique avant tout.", functions: { Ti: 3, Fe: -1, Ni: 1 }, enneagram: { "5": 2, "1": 1 } }
    ]
  },
  {
    id: 3,
    question: "Ta manière d’apprendre quelque chose de nouveau :",
    options: [
      { text: "Je relie les concepts à des expériences passées fiables.", functions: { Si: 3, Ne: -1 }, enneagram: { "6": 2, "1": 1 } },
      { text: "Je capte les signaux faibles et j’anticipe la suite.", functions: { Ni: 3, Se: -1 }, enneagram: { "5": 1, "9": 2 } },
      { text: "J’explore plusieurs pistes en parallèle, par curiosité.", functions: { Ne: 3, Si: -1 }, enneagram: { "7": 2, "5": 1 } },
      { text: "Je manipule concrètement pour sentir comment ça réagit.", functions: { Se: 3, Ni: -1 }, enneagram: { "8": 2, "7": 1 } }
    ]
  },
  {
    id: 4,
    question: "Dans un conflit :",
    options: [
      { text: "Je protège la paix du groupe et j’apaise.", functions: { Fe: 3, Ti: -1 }, enneagram: { "9": 2, "2": 1 } },
      { text: "Je reste droit avec mes valeurs, quitte à froisser.", functions: { Fi: 3, Te: -1 }, enneagram: { "4": 2, "1": 1 } },
      { text: "Je pose des critères, propose une structure de sortie.", functions: { Te: 3, Fi: -1, Si: 1 }, enneagram: { "1": 2, "3": 1 } },
      { text: "Je clarifie les zones d’incohérence pour déminer.", functions: { Ti: 3, Fe: -1, Ni: 1 }, enneagram: { "5": 2, "6": 1 } }
    ]
  },
  {
    id: 5,
    question: "Quand tu démarres un projet :",
    options: [
      { text: "Je liste les étapes et j’avance de façon cadrée.", functions: { Si: 3, Ne: -1, Te: 1 }, enneagram: { "1": 2, "6": 1 } },
      { text: "Je visionne l’issue idéale et le chemin implicite.", functions: { Ni: 3, Se: -1 }, enneagram: { "5": 1, "9": 2 } },
      { text: "Je brainstorme à fond et je garde le meilleur.", functions: { Ne: 3, Si: -1, Ti: 1 }, enneagram: { "7": 2, "5": 1 } },
      { text: "Je passe tout de suite à l’action tangible.", functions: { Se: 3, Ni: -1 }, enneagram: { "8": 2, "3": 1 } }
    ]
  },
  {
    id: 6,
    question: "Dans un groupe :",
    options: [
      { text: "Je crée de l’harmonie et je connecte les gens.", functions: { Fe: 3, Ti: -1 }, enneagram: { "2": 2, "9": 1 } },
      { text: "Je garde mon indépendance et mes limites internes.", functions: { Fi: 3, Te: -1 }, enneagram: { "4": 2, "9": 1 } },
      { text: "J’organise pour avancer et livrer.", functions: { Te: 3, Fi: -1 }, enneagram: { "3": 2, "8": 1 } },
      { text: "J’analyse la logique de ce qui se passe.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } }
    ]
  },
  {
    id: 7,
    question: "Sous pression courte :",
    options: [
      { text: "Je réagis vite et je tire parti du terrain.", functions: { Se: 3, Ni: -1 }, enneagram: { "8": 2, "7": 1 } },
      { text: "Je simplifie et je fixe un cap clair.", functions: { Te: 3, Fi: -1 }, enneagram: { "3": 2, "1": 1 } },
      { text: "Je cherche la ligne directrice cachée.", functions: { Ni: 3, Se: -1 }, enneagram: { "5": 1, "9": 2 } },
      { text: "Je m’appuie sur ce qui a déjà fait ses preuves.", functions: { Si: 3, Ne: -1 }, enneagram: { "6": 2, "1": 1 } }
    ]
  },
  {
    id: 8,
    question: "Pour trancher un désaccord technique :",
    options: [
      { text: "Je teste en conditions réelles.", functions: { Se: 3, Ni: -1, Te: 1 }, enneagram: { "8": 2, "3": 1 } },
      { text: "Je compare avec des standards et des précédents.", functions: { Si: 3, Ne: -1, Ti: 1 }, enneagram: { "6": 2, "1": 1 } },
      { text: "Je modélise le problème et j’en déduis la solution.", functions: { Ti: 3, Fe: -1, Ni: 1 }, enneagram: { "5": 2, "1": 1 } },
      { text: "Je cherche la solution qui préserve la cohésion.", functions: { Fe: 3, Ti: -1 }, enneagram: { "2": 2, "9": 1 } }
    ]
  },
  {
    id: 9,
    question: "Ta relation aux règles :",
    options: [
      { text: "Je respecte si ça a du sens et de l’historique.", functions: { Si: 3, Ne: -1 }, enneagram: { "6": 2, "1": 1 } },
      { text: "Je les change si elles bloquent l’efficacité.", functions: { Te: 3, Fi: -1 }, enneagram: { "8": 2, "3": 1 } },
      { text: "Je m’en écarte si ça heurte mes valeurs.", functions: { Fi: 3, Te: -1 }, enneagram: { "4": 2, "9": 1 } },
      { text: "Je les discute si elles sont illogiques.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } }
    ]
  },
  {
    id: 10,
    question: "Quand tu te projettes :",
    options: [
      { text: "Je vois le fil conducteur des événements.", functions: { Ni: 3, Se: -1 }, enneagram: { "5": 1, "9": 2 } },
      { text: "J’imagine plusieurs scénarios alternatifs.", functions: { Ne: 3, Si: -1 }, enneagram: { "7": 2, "5": 1 } },
      { text: "Je transpose ce qui a marché hier.", functions: { Si: 3, Ne: -1 }, enneagram: { "6": 2, "1": 1 } },
      { text: "Je me base sur ce que je peux tester tout de suite.", functions: { Se: 3, Ni: -1 }, enneagram: { "8": 2, "7": 1 } }
    ]
  },
  {
    id: 11,
    question: "Vis-à-vis des autres :",
    options: [
      { text: "Je veux qu’on se sente respectés et entendus.", functions: { Fe: 3, Ti: -1 }, enneagram: { "2": 2, "9": 1 } },
      { text: "Je garde mon authenticité sans surjouer.", functions: { Fi: 3, Te: -1 }, enneagram: { "4": 2, "6": 1 } },
      { text: "Je clarifie les critères et responsabilités.", functions: { Te: 3, Fi: -1 }, enneagram: { "3": 2, "1": 1 } },
      { text: "Je clarifie les concepts pour éviter le flou.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } }
    ]
  },
  {
    id: 12,
    question: "Quand tu doutes :",
    options: [
      { text: "Je reviens aux faits et aux traces du passé.", functions: { Si: 3, Ne: -1 }, enneagram: { "6": 2, "1": 1 } },
      { text: "Je cherche le pattern sous-jacent.", functions: { Ni: 3, Se: -1 }, enneagram: { "5": 1, "9": 2 } },
      { text: "Je multiplie les pistes et je compare.", functions: { Ne: 3, Si: -1, Ti: 1 }, enneagram: { "7": 2, "5": 1 } },
      { text: "Je fais un test rapide sur le terrain.", functions: { Se: 3, Ni: -1 }, enneagram: { "8": 2, "7": 1 } }
    ]
  },
  {
    id: 13,
    question: "Ta manière d’être efficace :",
    options: [
      { text: "Des critères, des jalons, du concret.", functions: { Te: 3, Fi: -1, Si: 1 }, enneagram: { "3": 2, "1": 1 } },
      { text: "Un modèle clair et logique.", functions: { Ti: 3, Fe: -1, Ni: 1 }, enneagram: { "5": 2, "1": 1 } },
      { text: "Des choix alignés à mes valeurs.", functions: { Fi: 3, Te: -1 }, enneagram: { "4": 2, "9": 1 } },
      { text: "Des actions visibles et mesurables.", functions: { Se: 3, Ni: -1 }, enneagram: { "8": 2, "3": 1 } }
    ]
  },
  {
    id: 14,
    question: "Quand quelqu’un propose une idée bancale :",
    options: [
      { text: "Je l’encadre et je reformule en plan faisable.", functions: { Te: 3, Fi: -1 }, enneagram: { "3": 2, "8": 1 } },
      { text: "Je questionne jusqu’à trouver la faille.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } },
      { text: "J’essaie de valoriser et d’inclure la personne.", functions: { Fe: 3, Ti: -1 }, enneagram: { "2": 2, "9": 1 } },
      { text: "Je propose des alternatives créatives.", functions: { Ne: 3, Si: -1 }, enneagram: { "7": 2, "3": 1 } }
    ]
  },
  {
    id: 15,
    question: "Ta préférence au quotidien :",
    options: [
      { text: "Routines et repères stables.", functions: { Si: 3, Ne: -1 }, enneagram: { "6": 2, "1": 1 } },
      { text: "Découvertes et variations.", functions: { Ne: 3, Si: -1 }, enneagram: { "7": 2, "3": 1 } },
      { text: "Vision de fond et continuité interne.", functions: { Ni: 3, Se: -1 }, enneagram: { "5": 1, "9": 2 } },
      { text: "Action et retour immédiat.", functions: { Se: 3, Ni: -1 }, enneagram: { "8": 2, "7": 1 } }
    ]
  },
  {
    id: 16,
    question: "Quand tu aides :",
    options: [
      { text: "Je crée du lien et je facilite les échanges.", functions: { Fe: 3, Ti: -1 }, enneagram: { "2": 2, "9": 1 } },
      { text: "Je respecte l’autonomie et les limites de chacun.", functions: { Fi: 3, Te: -1 }, enneagram: { "4": 2, "9": 1 } },
      { text: "Je mets des outils/process utiles.", functions: { Te: 3, Fi: -1 }, enneagram: { "3": 2, "1": 1 } },
      { text: "Je clarifie pour que la personne comprenne seule.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } }
    ]
  },
  {
    id: 17,
    question: "Sous incertitude :",
    options: [
      { text: "Je me fie aux indices profonds.", functions: { Ni: 3, Se: -1 }, enneagram: { "5": 1, "9": 2 } },
      { text: "Je multiplie les essais rapides.", functions: { Se: 3, Ni: -1 }, enneagram: { "8": 2, "7": 1 } },
      { text: "Je crée plusieurs hypothèses concurrentes.", functions: { Ne: 3, Si: -1, Ti: 1 }, enneagram: { "7": 2, "5": 1 } },
      { text: "Je reviens aux précédents et aux règles.", functions: { Si: 3, Ne: -1 }, enneagram: { "6": 2, "1": 1 } }
    ]
  },
  {
    id: 18,
    question: "Quand tu t’exprimes :",
    options: [
      { text: "Je parle de ce qui est vrai pour moi.", functions: { Fi: 3, Te: -1 }, enneagram: { "4": 2, "9": 1 } },
      { text: "Je cherche les mots qui rassemblent.", functions: { Fe: 3, Ti: -1 }, enneagram: { "2": 2, "9": 1 } },
      { text: "Je structure et je vais droit au but.", functions: { Te: 3, Fi: -1 }, enneagram: { "3": 2, "8": 1 } },
      { text: "Je précise chaque terme pour éviter le flou.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } }
    ]
  },
  {
    id: 19,
    question: "Face à une erreur :",
    options: [
      { text: "Je corrige le process pour que ça n’arrive plus.", functions: { Te: 3, Fi: -1, Si: 1 }, enneagram: { "1": 2, "3": 1 } },
      { text: "Je comprends le mécanisme qui a déraillé.", functions: { Ti: 3, Fe: -1, Ni: 1 }, enneagram: { "5": 2, "1": 1 } },
      { text: "Je repère les signes avant-coureurs.", functions: { Ni: 3, Se: -1 }, enneagram: { "5": 1, "9": 2 } },
      { text: "Je fais un test terrain pour sécuriser.", functions: { Se: 3, Ni: -1 }, enneagram: { "8": 2, "7": 1 } }
    ]
  },
  {
    id: 20,
    question: "Ta motivation profonde :",
    options: [
      { text: "Être aligné avec qui je suis.", functions: { Fi: 3, Te: -1 }, enneagram: { "4": 2, "9": 1 } },
      { text: "Élever les autres et la relation.", functions: { Fe: 3, Ti: -1 }, enneagram: { "2": 2, "9": 1 } },
      { text: "Transformer en résultats concrets.", functions: { Te: 3, Fi: -1 }, enneagram: { "3": 2, "8": 1 } },
      { text: "Comprendre et clarifier le vrai.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } }
    ]
  }
];

const EXTERNAL_QUESTIONS = [
  // =======================
  // Gardée
  // =======================
  {
    id: 1,
    question: "Quand un imprévu arrive, votre proche :",
    options: [
      { text: "Agit vite et ajuste en direct.", functions: { Se: 3, Ni: -1, Te: 1 }, enneagram: { "8": 2, "7": 1 } },
      { text: "Prend du recul pour capter le sens global.", functions: { Ni: 3, Se: -1 }, enneagram: { "5": 1, "9": 2 } },
      { text: "Cherche un précédent et une règle applicable.", functions: { Si: 3, Ne: -1 }, enneagram: { "6": 2, "1": 1 } },
      { text: "Déplie la logique du problème avant d’agir.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } }
    ]
  },

  // =======================
  // Nouvelle Q2
  // =======================
  {
    id: 2,
    question: "Dans une discussion de groupe, il/elle :",
    options: [
      { text: "Encourage chacun à participer et garde l’harmonie.", functions: { Fe: 3, Ti: -1 }, enneagram: { "2": 2, "9": 1 } },
      { text: "Exprime ses idées avec authenticité, même si ça dérange.", functions: { Fi: 3, Te: -1 }, enneagram: { "4": 2, "6": 1 } },
      { text: "Recentre la discussion vers un objectif concret.", functions: { Te: 3, Fi: -1 }, enneagram: { "3": 2, "8": 1 } },
      { text: "Pose des questions pour clarifier la logique.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } }
    ]
  },

  // =======================
  // Gardée
  // =======================
  {
    id: 3,
    question: "Son rapport aux valeurs :",
    options: [
      { text: "Reste authentique même si c’est impopulaire.", functions: { Fi: 3, Te: -1 }, enneagram: { "4": 2, "9": 1 } },
      { text: "Privilégie la cohésion et le ressenti du groupe.", functions: { Fe: 3, Ti: -1 }, enneagram: { "2": 2, "9": 1 } },
      { text: "Fait primer l’efficacité mesurable.", functions: { Te: 3, Fi: -1 }, enneagram: { "3": 2, "8": 1 } },
      { text: "Fait primer la justesse logique.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } }
    ]
  },

  // =======================
  // Nouvelle Q4
  // =======================
  {
    id: 4,
    question: "Quand il/elle apprend quelque chose de nouveau :",
    options: [
      { text: "S’appuie sur ses expériences et repères passés.", functions: { Si: 3, Ne: -1 }, enneagram: { "6": 2, "1": 1 } },
      { text: "Expérimente rapidement pour voir ce que ça donne.", functions: { Se: 3, Ni: -1 }, enneagram: { "8": 2, "7": 1 } },
      { text: "Imagine des scénarios alternatifs et créatifs.", functions: { Ne: 3, Si: -1 }, enneagram: { "7": 2, "5": 1 } },
      { text: "Capte le sens profond sans tout expliquer.", functions: { Ni: 3, Se: -1 }, enneagram: { "5": 1, "9": 2 } }
    ]
  },

  // =======================
  // Nouvelle Q5
  // =======================
  {
    id: 5,
    question: "Quand il/elle doit gérer un problème pratique :",
    options: [
      { text: "Cherche une règle ou un exemple du passé.", functions: { Si: 3, Ne: -1 }, enneagram: { "6": 2, "1": 1 } },
      { text: "Teste une solution concrète tout de suite.", functions: { Se: 3, Ni: -1 }, enneagram: { "8": 2, "7": 1 } },
      { text: "Cherche une explication logique détaillée.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } },
      { text: "Se demande comment garder la cohésion humaine.", functions: { Fe: 3, Ti: -1 }, enneagram: { "2": 2, "9": 1 } }
    ]
  },

  // =======================
  // Nouvelle Q6
  // =======================
  {
    id: 6,
    question: "Quand il/elle prend des décisions rapides :",
    options: [
      { text: "S’appuie sur ses intuitions globales.", functions: { Ni: 3, Se: -1 }, enneagram: { "5": 1, "9": 2 } },
      { text: "Suit ses valeurs personnelles sans compromis.", functions: { Fi: 3, Te: -1 }, enneagram: { "4": 2, "9": 1 } },
      { text: "Se concentre sur l’efficacité immédiate.", functions: { Te: 3, Fi: -1 }, enneagram: { "3": 2, "8": 1 } },
      { text: "Teste directement sur le terrain.", functions: { Se: 3, Ni: -1 }, enneagram: { "8": 2, "7": 1 } }
    ]
  },

  // =======================
  // Nouvelle Q7
  // =======================
  {
    id: 7,
    question: "Dans ses relations :",
    options: [
      { text: "Apaise les tensions et cherche l’harmonie.", functions: { Fe: 3, Ti: -1 }, enneagram: { "9": 2, "2": 1 } },
      { text: "Affirme son authenticité et ses ressentis.", functions: { Fi: 3, Te: -1 }, enneagram: { "4": 2, "6": 1 } },
      { text: "Donne des directives claires et concrètes.", functions: { Te: 3, Fi: -1 }, enneagram: { "3": 2, "8": 1 } },
      { text: "Privilégie la précision et la logique.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } }
    ]
  },

  // =======================
  // Nouvelle Q8
  // =======================
  {
    id: 8,
    question: "Face à une nouvelle idée :",
    options: [
      { text: "Cherche comment ça a été fait ailleurs.", functions: { Si: 3, Ne: -1 }, enneagram: { "6": 2, "1": 1 } },
      { text: "Imagine d’autres pistes à partir de là.", functions: { Ne: 3, Si: -1 }, enneagram: { "7": 2, "3": 1 } },
      { text: "Capte directement où ça peut mener.", functions: { Ni: 3, Se: -1 }, enneagram: { "5": 1, "9": 2 } },
      { text: "Teste concrètement et observe le résultat.", functions: { Se: 3, Ni: -1 }, enneagram: { "8": 2, "7": 1 } }
    ]
  },

  // =======================
  // Nouvelle Q9
  // =======================
  {
    id: 9,
    question: "Quand il/elle exprime une opinion :",
    options: [
      { text: "Met en avant sa vérité personnelle.", functions: { Fi: 3, Te: -1 }, enneagram: { "4": 2, "9": 1 } },
      { text: "Adapte son discours pour rassembler.", functions: { Fe: 3, Ti: -1 }, enneagram: { "2": 2, "9": 1 } },
      { text: "Structure en étapes logiques et mesurables.", functions: { Te: 3, Fi: -1 }, enneagram: { "3": 2, "8": 1 } },
      { text: "Défend une cohérence intellectuelle.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } }
    ]
  },

  // =======================
  // Gardée
  // =======================
  {
    id: 10,
    question: "Son rapport aux règles :",
    options: [
      { text: "S’appuie dessus pour sécuriser.", functions: { Si: 3, Ne: -1 }, enneagram: { "6": 2, "1": 1 } },
      { text: "Les change si elles freinent le résultat.", functions: { Te: 3, Fi: -1 }, enneagram: { "8": 2, "3": 1 } },
      { text: "Les discute si elles sont illogiques.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } },
      { text: "S’en écarte si ça heurte ses valeurs.", functions: { Fi: 3, Te: -1 }, enneagram: { "4": 2, "9": 1 } }
    ]
  },

  // =======================
  // Gardée
  // =======================
  {
    id: 12,
    question: "Quand il/elle défend un point :",
    options: [
      { text: "S’aligne à ses valeurs internes.", functions: { Fi: 3, Te: -1 }, enneagram: { "4": 2, "9": 1 } },
      { text: "Cherche les mots qui rassemblent.", functions: { Fe: 3, Ti: -1 }, enneagram: { "2": 2, "9": 1 } },
      { text: "Met en avant la structure et le résultat.", functions: { Te: 3, Fi: -1 }, enneagram: { "3": 2, "8": 1 } },
      { text: "Démontre la cohérence logique.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } }
    ]
  },

  // =======================
  // Gardée
  // =======================
  {
    id: 14,
    question: "Style général :",
    options: [
      { text: "Plutôt stable et régulier(ère).", functions: { Si: 3, Ne: -1 }, enneagram: { "6": 2, "1": 1 } },
      { text: "Plutôt aventureux(se) et curieux(se).", functions: { Ne: 3, Si: -1 }, enneagram: { "7": 2, "3": 1 } },
      { text: "Plutôt visionnaire et synthétique.", functions: { Ni: 3, Se: -1 }, enneagram: { "5": 1, "9": 2 } },
      { text: "Plutôt pragmatique et physique.", functions: { Se: 3, Ni: -1 }, enneagram: { "8": 2, "7": 1 } }
    ]
  },

  // =======================
  // Gardée
  // =======================
  {
    id: 15,
    question: "Dans les débats :",
    options: [
      { text: "Reste axé(e) résultats et décisions.", functions: { Te: 3, Fi: -1 }, enneagram: { "3": 2, "8": 1 } },
      { text: "Priorise la clarté conceptuelle.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } },
      { text: "Cherche la cohésion et la paix.", functions: { Fe: 3, Ti: -1 }, enneagram: { "2": 2, "9": 1 } },
      { text: "Affirme son authenticité tranquille.", functions: { Fi: 3, Te: -1 }, enneagram: { "4": 2, "9": 1 } }
    ]
  },

  // =======================
  // Gardée
  // =======================
  {
    id: 18,
    question: "Style de décision :",
    options: [
      { text: "Pragmatique, terrain d’abord.", functions: { Se: 3, Ni: -1, Te: 1 }, enneagram: { "8": 2, "3": 1 } },
      { text: "Structuré, étapes et critères.", functions: { Te: 3, Fi: -1, Si: 1 }, enneagram: { "3": 2, "1": 1 } },
      { text: "Intuitif, capture la direction implicite.", functions: { Ni: 3, Se: -1 }, enneagram: { "5": 1, "9": 2 } },
      { text: "Logique, démontre avant de trancher.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } }
    ]
  },

  // =======================
  // Gardée
  // =======================
  {
    id: 19,
    question: "Dans la durée :",
    options: [
      { text: "Tient le cap par habitudes solides.", functions: { Si: 3, Ne: -1 }, enneagram: { "6": 2, "1": 1 } },
      { text: "Rafraîchit par des idées nouvelles.", functions: { Ne: 3, Si: -1 }, enneagram: { "7": 2, "3": 1 } },
      { text: "Garde la cohérence de fond.", functions: { Ni: 3, Se: -1 }, enneagram: { "5": 1, "9": 2 } },
      { text: "Assure par des actions tangibles.", functions: { Se: 3, Ni: -1 }, enneagram: { "8": 2, "7": 1 } }
    ]
  },

  // =======================
  // Gardée
  // =======================
  {
    id: 20,
    question: "Ce qu’on retient le plus de lui/elle :",
    options: [
      { text: "Alignement personnel et intégrité.", functions: { Fi: 3, Te: -1 }, enneagram: { "4": 2, "9": 1 } },
      { text: "Soutien relationnel et fédération.", functions: { Fe: 3, Ti: -1 }, enneagram: { "2": 2, "9": 1 } },
      { text: "Capacité à délivrer et organiser.", functions: { Te: 3, Fi: -1 }, enneagram: { "3": 2, "8": 1 } },
      { text: "Clarté intellectuelle et précision.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } }
    ]
  }
];


// Expose (browser/Node)
if (typeof window !== 'undefined') {
  window.AUTO_QUESTIONS = AUTO_QUESTIONS;
  window.EXTERNAL_QUESTIONS = EXTERNAL_QUESTIONS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AUTO_QUESTIONS, EXTERNAL_QUESTIONS };
}

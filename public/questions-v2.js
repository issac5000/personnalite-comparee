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

  {
    id: 7,
    question: "Dans ses relations votre proche a tendance à :",
    options: [
      { text: "Apaiser les tensions et chercher l’harmonie.", functions: { Fe: 3, Ti: -1 }, enneagram: { "9": 2, "2": 1 } },
      { text: "Affirmer son authenticité et ses ressentis.", functions: { Fi: 3, Te: -1 }, enneagram: { "4": 2, "6": 1 } },
      { text: "Donner des directives claires et concrètes.", functions: { Te: 3, Fi: -1 }, enneagram: { "3": 2, "8": 1 } },
      { text: "Privilégier la précision et la logique.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } }
    ]
  },

  {
    id: 8,
    question: "Face à une nouvelle idée votre proche :",
    options: [
      { text: "Cherche comment ça a été fait ailleurs.", functions: { Si: 3, Ne: -1 }, enneagram: { "6": 2, "1": 1 } },
      { text: "Imagine d’autres pistes à partir de là.", functions: { Ne: 3, Si: -1 }, enneagram: { "7": 2, "3": 1 } },
      { text: "Capte directement où ça peut mener.", functions: { Ni: 3, Se: -1 }, enneagram: { "5": 1, "9": 2 } },
      { text: "Teste concrètement et observe le résultat.", functions: { Se: 3, Ni: -1 }, enneagram: { "8": 2, "7": 1 } }
    ]
  },

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

  {
    id: 14,
    question: "Le style général de votre proche :",
    options: [
      { text: "Plutôt stable et régulier(ère).", functions: { Si: 3, Ne: -1 }, enneagram: { "6": 2, "1": 1 } },
      { text: "Plutôt aventureux(se) et curieux(se).", functions: { Ne: 3, Si: -1 }, enneagram: { "7": 2, "3": 1 } },
      { text: "Plutôt visionnaire et synthétique.", functions: { Ni: 3, Se: -1 }, enneagram: { "5": 1, "9": 2 } },
      { text: "Plutôt pragmatique et physique.", functions: { Se: 3, Ni: -1 }, enneagram: { "8": 2, "7": 1 } }
    ]
  },

  {
    id: 15,
    question: "Dans les débats votre proche :",
    options: [
      { text: "Reste axé(e) résultats et décisions.", functions: { Te: 3, Fi: -1 }, enneagram: { "3": 2, "8": 1 } },
      { text: "Priorise la clarté conceptuelle.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } },
      { text: "Cherche la cohésion et la paix.", functions: { Fe: 3, Ti: -1 }, enneagram: { "2": 2, "9": 1 } },
      { text: "Affirme son authenticité tranquille.", functions: { Fi: 3, Te: -1 }, enneagram: { "4": 2, "9": 1 } }
    ]
  },

  {
    id: 18,
    question: "Le style style de décision de votre proche :",
    options: [
      { text: "Pragmatique, terrain d’abord.", functions: { Se: 3, Ni: -1, Te: 1 }, enneagram: { "8": 2, "3": 1 } },
      { text: "Structuré, étapes et critères.", functions: { Te: 3, Fi: -1, Si: 1 }, enneagram: { "3": 2, "1": 1 } },
      { text: "Intuitif, capture la direction implicite.", functions: { Ni: 3, Se: -1 }, enneagram: { "5": 1, "9": 2 } },
      { text: "Logique, démontre avant de trancher.", functions: { Ti: 3, Fe: -1 }, enneagram: { "5": 2, "1": 1 } }
    ]
  },

  {
    id: 19,
    question: "Dans la durée votre proche :",
    options: [
      { text: "Tient le cap par habitudes solides.", functions: { Si: 3, Ne: -1 }, enneagram: { "6": 2, "1": 1 } },
      { text: "Rafraîchit par des idées nouvelles.", functions: { Ne: 3, Si: -1 }, enneagram: { "7": 2, "3": 1 } },
      { text: "Garde la cohérence de fond.", functions: { Ni: 3, Se: -1 }, enneagram: { "5": 1, "9": 2 } },
      { text: "Assure par des actions tangibles.", functions: { Se: 3, Ni: -1 }, enneagram: { "8": 2, "7": 1 } }
    ]
  },

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

const AUTO_TRANSLATIONS_EN = {
  1: {
    question: "When a plan goes off track, what do you do first?",
    options: [
      "I question point by point until it's clear.",
      "I reframe and set a simple, measurable plan.",
      "I step back to grasp the overall meaning.",
      "I test live and adjust as I go."
    ]
  },
  2: {
    question: "Faced with a delicate decision:",
    options: [
      "I stay true to my convictions, even if it's unpopular.",
      "I weigh the human impact and group cohesion.",
      "I decide based on efficiency and priorities.",
      "I check logical consistency above all."
    ]
  },
  3: {
    question: "Your way of learning something new:",
    options: [
      "I link concepts to reliable past experiences.",
      "I pick up subtle cues and anticipate what's next.",
      "I explore several paths in parallel out of curiosity.",
      "I handle things directly to feel how they respond."
    ]
  },
  4: {
    question: "In a conflict:",
    options: [
      "I protect the group's peace and soothe tensions.",
      "I stand firm with my values, even if it offends.",
      "I set criteria and propose an exit structure.",
      "I clarify areas of inconsistency to defuse."
    ]
  },
  5: {
    question: "When you start a project:",
    options: [
      "I list the steps and move forward in an orderly way.",
      "I envision the ideal outcome and the implicit path.",
      "I brainstorm thoroughly and keep the best.",
      "I jump straight into tangible action."
    ]
  },
  6: {
    question: "In a group:",
    options: [
      "I create harmony and connect people.",
      "I keep my independence and internal boundaries.",
      "I organize to move forward and deliver.",
      "I analyze the logic of what's happening."
    ]
  },
  7: {
    question: "Under short-term pressure:",
    options: [
      "I react quickly and leverage the situation.",
      "I simplify and set a clear course.",
      "I look for the hidden through-line.",
      "I rely on what's already proven."
    ]
  },
  8: {
    question: "To settle a technical disagreement:",
    options: [
      "I test in real conditions.",
      "I compare with standards and precedents.",
      "I model the problem and deduce the solution.",
      "I look for the solution that preserves cohesion."
    ]
  },
  9: {
    question: "Your relationship to rules:",
    options: [
      "I respect them if they make sense and have history.",
      "I change them if they block efficiency.",
      "I stray from them if they clash with my values.",
      "I question them if they're illogical."
    ]
  },
  10: {
    question: "When you look ahead:",
    options: [
      "I see the thread running through events.",
      "I imagine multiple alternative scenarios.",
      "I transpose what worked yesterday.",
      "I rely on what I can test right now."
    ]
  },
  11: {
    question: "Toward others:",
    options: [
      "I want everyone to feel respected and heard.",
      "I keep my authenticity without overplaying.",
      "I clarify criteria and responsibilities.",
      "I clarify concepts to avoid vagueness."
    ]
  },
  12: {
    question: "When you doubt:",
    options: [
      "I return to facts and traces from the past.",
      "I look for the underlying pattern.",
      "I multiply avenues and compare.",
      "I run a quick field test."
    ]
  },
  13: {
    question: "Your way of being effective:",
    options: [
      "Criteria, milestones, something concrete.",
      "A clear, logical model.",
      "Choices aligned with my values.",
      "Visible, measurable actions."
    ]
  },
  14: {
    question: "When someone suggests a shaky idea:",
    options: [
      "I frame it and rephrase it into a workable plan.",
      "I question it until I find the flaw.",
      "I try to value and include the person.",
      "I offer creative alternatives."
    ]
  },
  15: {
    question: "Your daily preference:",
    options: [
      "Stable routines and landmarks.",
      "Discoveries and variety.",
      "Underlying vision and internal continuity.",
      "Action and immediate feedback."
    ]
  },
  16: {
    question: "When you help:",
    options: [
      "I create connection and facilitate exchanges.",
      "I respect each person's autonomy and boundaries.",
      "I put in useful tools/processes.",
      "I clarify so the person can understand on their own."
    ]
  },
  17: {
    question: "Under uncertainty:",
    options: [
      "I rely on deep cues.",
      "I multiply quick trials.",
      "I create several competing hypotheses.",
      "I return to precedents and rules."
    ]
  },
  18: {
    question: "When you express yourself:",
    options: [
      "I speak about what is true for me.",
      "I look for words that bring people together.",
      "I structure and go straight to the point.",
      "I specify each term to avoid vagueness."
    ]
  },
  19: {
    question: "When faced with an error:",
    options: [
      "I fix the process so it doesn't happen again.",
      "I understand the mechanism that went off track.",
      "I spot the warning signs.",
      "I run a field test to secure it."
    ]
  },
  20: {
    question: "Your deep motivation:",
    options: [
      "Being aligned with who I am.",
      "Uplifting others and the relationship.",
      "Turning things into concrete results.",
      "Understanding and clarifying truth."
    ]
  }
};

const EXTERNAL_TRANSLATIONS_EN = {
  1: {
    question: "When something unexpected happens, your relative:",
    options: [
      "Acts quickly and adjusts on the spot.",
      "Steps back to grasp the overall meaning.",
      "Looks for a precedent and an applicable rule.",
      "Unfolds the logic of the problem before acting."
    ]
  },
  2: {
    question: "In a group discussion, he/she:",
    options: [
      "Encourages everyone to participate and keeps harmony.",
      "Expresses ideas authentically, even if it bothers others.",
      "Refocuses the discussion toward a concrete goal.",
      "Asks questions to clarify the logic."
    ]
  },
  3: {
    question: "Their relationship to values:",
    options: [
      "Stays authentic even if it's unpopular.",
      "Prioritizes group cohesion and feelings.",
      "Prioritizes measurable efficiency.",
      "Prioritizes logical correctness."
    ]
  },
  4: {
    question: "When he/she learns something new:",
    options: [
      "Leans on past experiences and references.",
      "Experiments quickly to see what happens.",
      "Imagines alternative and creative scenarios.",
      "Grasps the deeper meaning without explaining everything."
    ]
  },
  5: {
    question: "When he/she has to handle a practical problem:",
    options: [
      "Looks for a rule or past example.",
      "Tests a concrete solution right away.",
      "Seeks a detailed logical explanation.",
      "Wonders how to maintain human cohesion."
    ]
  },
  6: {
    question: "When he/she makes quick decisions:",
    options: [
      "Relies on broad intuitions.",
      "Follows personal values without compromise.",
      "Focuses on immediate efficiency.",
      "Tests directly in the field."
    ]
  },
  7: {
    question: "In relationships, your relative tends to:",
    options: [
      "Calm tensions and seek harmony.",
      "Assert their authenticity and feelings.",
      "Give clear, concrete directives.",
      "Favor precision and logic."
    ]
  },
  8: {
    question: "When faced with a new idea, your relative:",
    options: [
      "Looks for how it has been done elsewhere.",
      "Imagines other avenues from there.",
      "Immediately senses where it could lead.",
      "Tests it concretely and observes the result."
    ]
  },
  9: {
    question: "When he/she expresses an opinion:",
    options: [
      "Highlights their personal truth.",
      "Adapts speech to bring people together.",
      "Structures it in logical, measurable steps.",
      "Defends intellectual coherence."
    ]
  },
  10: {
    question: "Their relationship to rules:",
    options: [
      "Relies on them for security.",
      "Changes them if they hinder results.",
      "Debates them if they're illogical.",
      "Veers away if they clash with their values."
    ]
  },
  12: {
    question: "When he/she defends a point:",
    options: [
      "Aligns with their inner values.",
      "Seeks words that bring people together.",
      "Highlights the structure and outcome.",
      "Demonstrates logical coherence."
    ]
  },
  14: {
    question: "Your relative's general style:",
    options: [
      "Rather stable and consistent.",
      "Rather adventurous and curious.",
      "Rather visionary and synthetic.",
      "Rather pragmatic and physical."
    ]
  },
  15: {
    question: "In debates, your relative:",
    options: [
      "Stays focused on results and decisions.",
      "Prioritizes conceptual clarity.",
      "Seeks cohesion and peace.",
      "Asserts quiet authenticity."
    ]
  },
  18: {
    question: "Your relative's decision-making style:",
    options: [
      "Pragmatic, hands-on first.",
      "Structured, with steps and criteria.",
      "Intuitive, captures the implicit direction.",
      "Logical, demonstrates before deciding."
    ]
  },
  19: {
    question: "Over time, your relative:",
    options: [
      "Stays the course through solid habits.",
      "Refreshes with new ideas.",
      "Keeps the underlying coherence.",
      "Delivers through tangible actions."
    ]
  },
  20: {
    question: "What people remember most about him/her:",
    options: [
      "Personal alignment and integrity.",
      "Relational support and bringing people together.",
      "Ability to deliver and organize.",
      "Intellectual clarity and precision."
    ]
  }
};

const AUTO_QUESTIONS_EN = AUTO_QUESTIONS.map(q => ({
  ...q,
  question: AUTO_TRANSLATIONS_EN[q.id].question,
  options: q.options.map((opt, i) => ({ ...opt, text: AUTO_TRANSLATIONS_EN[q.id].options[i] }))
}));

const EXTERNAL_QUESTIONS_EN = EXTERNAL_QUESTIONS.map(q => ({
  ...q,
  question: EXTERNAL_TRANSLATIONS_EN[q.id].question,
  options: q.options.map((opt, i) => ({ ...opt, text: EXTERNAL_TRANSLATIONS_EN[q.id].options[i] }))
}));

const LANG = {
  fr: { AUTO_QUESTIONS, EXTERNAL_QUESTIONS },
  en: { AUTO_QUESTIONS: AUTO_QUESTIONS_EN, EXTERNAL_QUESTIONS: EXTERNAL_QUESTIONS_EN }
};


// Expose (browser/Node)
if (typeof window !== 'undefined') {
  window.AUTO_QUESTIONS = AUTO_QUESTIONS;
  window.EXTERNAL_QUESTIONS = EXTERNAL_QUESTIONS;
  window.LANG = LANG;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AUTO_QUESTIONS, EXTERNAL_QUESTIONS, AUTO_QUESTIONS_EN, EXTERNAL_QUESTIONS_EN, LANG };
}

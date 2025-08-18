// Nouveau questionnaire basé sur les fonctions cognitives et l'ennéagramme (harmonisé)

const AUTO_QUESTIONS = [
  {
    id: 1,
    question: "Laquelle de ces descriptions te correspond le plus ?",
    options: [
      { text: "Je prends mes décisions en fonction de mes convictions profondes.", functions: { Fi: 3 }, enneagram: { "4": 2, "9": 1 } },
      { text: "Je me demande comment mes choix vont impacter les autres.", functions: { Fe: 3, Te: 1 }, enneagram: { "2": 2, "6": 1 } },
      { text: "Je cherche ce qui est logique et efficace, même si ce n’est pas agréable.", functions: { Te: 1, Ti: 3 }, enneagram: { "1": 2, "5": 1, "3": 1 } }
    ]
  },
  {
    id: 2,
    question: "Laquelle de ces descriptions te correspond le plus ?",
    options: [
      { text: "J’aime me fier à des données précises et fiables.", functions: { Si: 3 }, enneagram: { "6": 2, "1": 1 } },
      { text: "J’improvise et j’agis dans l’instant sans forcément planifier.", functions: { Se: 3, Ne: 1 }, enneagram: { "7": 2, "8": 1 } },
      { text: "Je vois des liens ou des significations profondes derrière les événements.", functions: { Ni: 3, Ne: 2 }, enneagram: { "4": 2, "5": 1 } }
    ]
  },
  {
    id: 3,
    question: "Laquelle de ces descriptions te correspond le plus ?",
    options: [
      { text: "J’ai besoin de comprendre en profondeur avant d’agir.", functions: { Ti: 3 }, enneagram: { "5": 2, "1": 1 } },
      { text: "Je me sens poussé à aider les autres, même sans qu’ils demandent.", functions: { Fe: 3 }, enneagram: { "2": 2, "9": 1 } },
      { text: "J’agis pour atteindre mes objectifs, quitte à être compétitif.", functions: { Te: 3 }, enneagram: { "3": 2, "8": 1 } }
    ]
  },
  {
    id: 4,
    question: "Laquelle de ces descriptions te correspond le plus ?",
    options: [
      { text: "Je garde mes ressentis pour moi, mais ils guident mes choix.", functions: { Fi: 3 }, enneagram: { "4": 2, "9": 1 } },
      { text: "Je cherche la stabilité et les routines qui me rassurent.", functions: { Si: 3, Ni: 1 }, enneagram: { "6": 2, "9": 1 } },
      { text: "Je m’appuie sur mes intuitions pour voir ce qui va arriver.", functions: { Ni: 3 }, enneagram: { "5": 1, "1": 2 } }
    ]
  },
  {
    id: 5,
    question: "Laquelle de ces descriptions te correspond le plus ?",
    options: [
      { text: "Je multiplie les idées et scénarios possibles.", functions: { Ne: 3 }, enneagram: { "7": 2, "6": 1 } },
      { text: "Je cherche ce qui est juste et conforme à mes principes.", functions: { Ti: 3, Fi: 1 }, enneagram: { "1": 2, "4": 1 } },
      { text: "Je veux agir de manière efficace et concrète.", functions: { Te: 3, Se: 2 }, enneagram: { "3": 2, "8": 1 } }
    ]
  },
  {
    id: 6,
    question: "Laquelle de ces descriptions te correspond le plus ?",
    options: [
      { text: "Je privilégie l’harmonie et j’évite les conflits.", functions: { Fe: 3, Fi: 2 }, enneagram: { "9": 2, "2": 1 } },
      { text: "Je m’appuie sur des expériences passées pour décider.", functions: { Si: 3 }, enneagram: { "6": 2, "1": 1 } },
      { text: "Je prends les devants et j’impose mon point de vue si nécessaire.", functions: { Te: 3, Se: 2 }, enneagram: { "8": 2, "3": 1 } }
    ]
  },
  {
    id: 7,
    question: "Laquelle de ces descriptions te correspond le plus ?",
    options: [
      { text: "Je garde une vision claire et long terme de ce que je veux.", functions: { Ni: 3, Te: 1 }, enneagram: { "1": 2, "5": 1 } },
      { text: "Je réagis aux opportunités de l’instant.", functions: { Se: 3 }, enneagram: { "7": 2, "8": 1 } },
      { text: "J’évalue chaque détail pour être sûr de ne pas me tromper.", functions: { Si: 3, Ti: 2 }, enneagram: { "6": 2, "1": 1 } }
    ]
  },
  {
    id: 8,
    question: "Laquelle de ces descriptions te correspond le plus ?",
    options: [
      { text: "Je veux être reconnu pour ce que j’apporte aux autres.", functions: { Fe: 3 }, enneagram: { "2": 2, "3": 1 } },
      { text: "Je cherche à comprendre des concepts abstraits par moi-même.", functions: { Ti: 3, Ni: 2 }, enneagram: { "5": 2, "4": 1 } },
      { text: "J’aime expérimenter et vivre des sensations nouvelles.", functions: { Se: 3 }, enneagram: { "7": 2, "8": 1 } }
    ]
  },
  {
    id: 9,
    question: "Laquelle de ces descriptions te correspond le plus ?",
    options: [
      { text: "Je me concentre sur mes valeurs intérieures avant tout.", functions: { Fi: 3 }, enneagram: { "4": 2, "9": 1 } },
      { text: "Je fais ce qui est logique et cohérent avec la réalité.", functions: { Te: 3 }, enneagram: { "1": 2, "3": 1 } },
      { text: "Je garde la paix et je m’adapte pour éviter les tensions.", functions: { Fe: 2, Si: 2 }, enneagram: { "9": 2, "6": 1 } }
    ]
  },
  {
    id: 10,
    question: "Laquelle de ces descriptions te correspond le plus ?",
    options: [
      { text: "Je questionne et j’analyse tout en profondeur.", functions: { Ti: 3 }, enneagram: { "5": 2, "1": 1 } },
      { text: "Je suis mes intuitions sans forcément pouvoir les prouver.", functions: { Ni: 3 }, enneagram: { "4": 2, "5": 1 } },
      { text: "Je réagis rapidement à ce qui se passe autour de moi.", functions: { Se: 3 }, enneagram: { "8": 2, "7": 1 } }
    ]
  },
  {
    id: 11,
    question: "Laquelle de ces descriptions te correspond le plus ?",
    options: [
      { text: "Je me repose sur des expériences passées pour prendre mes décisions.", functions: { Si: 3 }, enneagram: { "6": 2, "1": 1 } },
      { text: "J’aime improviser, explorer ce qui m’entoure, sans plan préétabli.", functions: { Se: 3, Ne: 1 }, enneagram: { "7": 2, "9": 1 } },
      { text: "Je suis guidé par des intuitions profondes que je ne peux toujours expliquer.", functions: { Ni: 3, Ne: 2 }, enneagram: { "1": 1, "9": 2 } },
      { text: "Je passe d’une idée à l’autre sans jamais m’arrêter.", functions: { Ne: 3, Se: 1 }, enneagram: { "7": 2, "3": 1 } }
    ]
  },
  {
    id: 12,
    question: "Laquelle de ces descriptions te correspond le plus ?",
    options: [
      { text: "J’analyse tout en profondeur avant de m’engager émotionnellement.", functions: { Ti: 3 }, enneagram: { "5": 2, "3": 1 } },
      { text: "J’agis pour faire ce qui est bien, pas pour plaire.", functions: { Te: 3 }, enneagram: { "1": 2, "8": 1 } },
      { text: "J’évite de me mettre en avant mais je ressens très fort ce que je vis.", functions: { Fi: 2, Si: 1 }, enneagram: { "4": 2, "9": 1 } },
      { text: "Je me rends utile dès que je vois un besoin, même implicite.", functions: { Fe: 3 }, enneagram: { "2": 2, "6": 1 } }
    ]
  },
  {
    id: 13,
    question: "Laquelle de ces descriptions te correspond le plus ?",
    options: [
      { text: "Je cherche à comprendre pour anticiper, je vois ce qui est caché.", functions: { Ni: 3 }, enneagram: { "5": 1, "1": 2 } },
      { text: "J’agis vite et j’ajuste au fur et à mesure.", functions: { Se: 3 }, enneagram: { "8": 2, "3": 1 } },
      { text: "Je ne supporte pas l’idée d’être inutile ou rejeté.", functions: { Fe: 3, Te: 2 }, enneagram: { "2": 2, "4": 1 } },
      { text: "Je reviens toujours à ce qui fonctionne, je ne prends pas de risques inutiles.", functions: { Si: 3, Ni: 2 }, enneagram: { "6": 2, "9": 1 } }
    ]
  },
  {
    id: 14,
    question: "Laquelle de ces descriptions te correspond le plus ?",
    options: [
      { text: "J’explore toutes les idées possibles, même les plus improbables.", functions: { Ne: 3 }, enneagram: { "7": 2, "5": 1 } },
      { text: "Je garde pour moi mes émotions et j’agis selon mon propre ressenti.", functions: { Fi: 3 }, enneagram: { "4": 2, "6": 1 } },
      { text: "J’organise les choses pour atteindre des objectifs clairs.", functions: { Te: 3, Si: 2 }, enneagram: { "3": 2, "1": 1 } },
      { text: "Je pose beaucoup de questions pour comprendre avant d’agir.", functions: { Ti: 3 }, enneagram: { "5": 2, "3": 1 } }
    ]
  },
  {
    id: 15,
    question: "Laquelle de ces descriptions te correspond le plus ?",
    options: [
      { text: "Je prends souvent du recul pour voir la situation dans son ensemble.", functions: { Ni: 2, Ti: 1, Te: 1 }, enneagram: { "9": 2, "4": 1 } },
      { text: "J’observe, j’évalue, et j’agis avec rapidité et précision.", functions: { Se: 3 }, enneagram: { "8": 2, "7": 1 } },
      { text: "Je pense en termes de logique et de cohérence interne.", functions: { Ti: 3, Te: 2 }, enneagram: { "5": 1, "1": 2 } },
      { text: "Je cherche à stabiliser ce qui m’entoure, à garder un cadre.", functions: { Si: 3 }, enneagram: { "6": 2, "2": 1 } }
    ]
  },
  {
    id: 16,
    question: "Laquelle de ces descriptions te correspond le plus ?",
    options: [
      { text: "Je donne pour recevoir de la reconnaissance et du lien.", functions: { Fe: 4 }, enneagram: { "2": 2, "3": 1 } },
      { text: "J’agis pour que les choses soient faites, pas pour discuter.", functions: { Te: 1, Se: 1 }, enneagram: { "3": 2, "8": 1 } },
      { text: "Je suis mes ressentis sans toujours chercher à les expliquer.", functions: { Fi: 3, Fe: 2 }, enneagram: { "4": 2, "9": 1 } },
      { text: "Je jongle avec les idées, toujours en mouvement mental.", functions: { Ne: 3 }, enneagram: { "7": 2, "5": 1 } }
    ]
  },
  {
    id: 17,
    question: "Laquelle de ces descriptions te correspond le plus ?",
    options: [
      { text: "Je veux faire ce qu’il faut, selon une logique implacable.", functions: { Ti: 3, Te: 1 }, enneagram: { "1": 2, "6": 1 } },
      { text: "J’aime explorer de nouvelles idées sans forcément les creuser.", functions: { Ne: 3 }, enneagram: { "7": 2, "3": 1 } },
      { text: "J’agis de manière efficace et directe.", functions: { Te: 3, Se: 2 }, enneagram: { "8": 2, "3": 1 } },
      { text: "Je m’appuie sur des références précises et des habitudes stables.", functions: { Si: 3, Ni: 2 }, enneagram: { "6": 2, "9": 1 } }
    ]
  },
  {
    id: 18,
    question: "Laquelle de ces descriptions te correspond le plus ?",
    options: [
      { text: "Je perçois des vérités profondes sans toujours pouvoir les verbaliser.", functions: { Ni: 3, Fi: 2 }, enneagram: { "5": 2, "4": 1 } },
      { text: "J’agis vite et fort, je prends ma place naturellement.", functions: { Se: 3 }, enneagram: { "8": 2, "3": 1 } },
      { text: "Je veux apaiser, lisser, éviter les tensions au maximum.", functions: { Fe: 3, Fi: 2 }, enneagram: { "2": 2, "9": 1 } },
      { text: "Je ressens très fort mais je ne me laisse pas dicter mes émotions.", functions: { Fi: 3, Ti: 1 }, enneagram: { "4": 2, "6": 1 } }
    ]
  },
  {
    id: 19,
    question: "Laquelle de ces descriptions te correspond le plus ?",
    options: [
      { text: "Je cherche la vérité, même si elle est inconfortable.", functions: { Ti: 3 }, enneagram: { "5": 3, "1": 2 } },
      { text: "J’agis pour régler les choses, sans forcément tout comprendre.", functions: { Te: 2 }, enneagram: { "3": 2, "8": 1 } },
      { text: "J’explore tous les scénarios possibles, juste au cas où.", functions: { Ne: 3 }, enneagram: { "6": 2, "7": 1 } },
      { text: "Je garde une constance, une routine qui me sécurise.", functions: { Si: 3, Ni: 1 }, enneagram: { "6": 2, "9": 1 } }
    ]
  },
  {
    id: 20,
    question: "Laquelle de ces descriptions te correspond le plus ?",
    options: [
      { text: "J’agis par principe, fidèle à une vision intérieure de la vérité.", functions: { Fi: 4 }, enneagram: { "1": 1, "4": 2 } },
      { text: "J’observe les signaux faibles et je fais des liens très subtils.", functions: { Ni: 3, Ne: 2 }, enneagram: { "5": 1, "9": 2 } },
      { text: "Je me jette dans l’action sans perdre de temps.", functions: { Se: 3 }, enneagram: { "8": 2, "7": 1 } },
      { text: "Je cherche à rendre service et à créer de l’harmonie autour de moi.", functions: { Fe: 4 }, enneagram: { "2": 2, "9": 1 } }
    ]
  }
];

// Version externe - 20 questions (observation) — harmonisée
const EXTERNAL_QUESTIONS = [
  {
    id: 1,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il agit selon ce qu’il ressent comme juste, même si personne ne l’approuve.", functions: { "Fi": 3, "Ti": 2 }, enneagram: { "1": 2, "4": 1 } },
      { text: "Il s’efface souvent pour aider ou soutenir les autres.", functions: { "Fe": 3, }, enneagram: { "2": 2, "9": 1 } },
      { text: "Il prend des décisions rapides, orientées résultats.", functions: { "Te": 3, "Ti": 1 }, enneagram: { "3": 2, "8": 1 } },
      { text: "Il remet tout en question jusqu’à comprendre totalement.", functions: { "Ti": 3 }, enneagram: { "5": 2, "6": 1 } }
    ]
  },
  {
    id: 2,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il vit dans ses souvenirs, ses habitudes sont rassurantes.", functions: { "Si": 3, "Ni": 1 }, enneagram: { "6": 2, "9": 1 } },
      { text: "Il capte tous les détails de l’environnement et agit vite.", functions: { "Se": 3, "Si": 1 }, enneagram: { "7": 2, "8": 1 } },
      { text: "Il imagine et se projète constamment dans le futur.", functions: { "Ni": 3 }, enneagram: { "4": 2, "5": 1 } },
      { text: "Il saute d’une idée à l’autre avec enthousiasme.", functions: { "Ne": 3, "Se": 2 }, enneagram: { "7": 2, "3": 1 } }
    ]
  },
  {
    "id": 3,
    "question": "Dans quelle description reconnaissez-vous le plus votre proche ?",
    "options": [
      {
        "text": "Il ressent fortement ses émotions mais les garde pour lui.",
        "functions": { "Fi": 3, "Ti": 2 },
        "enneagram": { "4": 2, "6": 1 }
      },
      {
        "text": "Il cherche à maintenir la paix autour de lui.",
        "functions": { "Fe": 3 },
        "enneagram": { "2": 2, "9": 2 }
      },
      {
        "text": "Il veut une vérité logique, pas une version édulcorée.",
        "functions": { "Ti": 3, "Te": 1 },
        "enneagram": { "5": 1, "1": 2 }
      },
      {
        "text": "Il planifie tout avec clarté pour éviter les imprévus.",
        "functions": { "Te": 2, "Si": 3 },
        "enneagram": { "1": 1, "3": 2 }
      }
    ]
  },
  {
    "id": 4,
    "question": "Dans quelle description reconnaissez-vous le plus votre proche ?",
    "options": [
      {
        "text": "Il voit les dangers avant qu’ils arrivent, il anticipe tout.",
        "functions": { "Ni": 3, "Si": 2 },
        "enneagram": { "5": 2, "3": 1 }
      },
      {
        "text": "Il aime faire plaisir et attend une reconnaissance en retour.",
        "functions": { "Fe": 2, },
        "enneagram": { "2": 2, "3": 1 }
      },
      {
        "text": "Il se laisse guider par ses ressentis et son authenticité.",
        "functions": { "Fi": 3, "Fe": 1 },
        "enneagram": { "4": 2, "9": 1 }
      },
      {
        "text": "Il agit avec fermeté, surtout quand il faut recadrer.",
        "functions": { "Te": 2, "Se": 1 },
        "enneagram": { "1": 1, "8": 3 }
      }
    ]
  },
  {
    "id": 5,
    "question": "Dans quelle description reconnaissez-vous le plus votre proche ?",
    "options": [
      {
        "text": "Il structure son quotidien pour garder le contrôle.",
        "functions": { "Si": 3, "Ni": 2 },
        "enneagram": { "6": 2, "1": 1 }
      },
      {
        "text": "Il se fie à l’instant et agit vite, sans trop réfléchir.",
        "functions": { "Se": 3, "Ne": 2 },
        "enneagram": { "8": 2, "7": 1 }
      },
      {
        "text": "Il pense de manière abstraite, comme s’il reliait tout sans effort.",
        "functions": { "Ni": 3, "Ne": 2 },
        "enneagram": { "5": 2, "3": 1 }
      },
      {
        "text": "Il déteste les routines et adore changer de perspective.",
        "functions": { "Ne": 2, "Se": 3 },
        "enneagram": { "7": 2, "3": 1 }
      }
    ]
  },
  {
    "id": 6,
    "question": "Dans quelle description reconnaissez-vous le plus votre proche ?",
    "options": [
      {
        "text": "Il agit selon ce qu’il ressent profondément, sans chercher l’approbation.",
        "functions": { "Fi": 2, "Ti": 1 },
        "enneagram": { "4": 2, "9": 1 }
      },
      {
        "text": "Il veut être utile, quitte à porter les problèmes des autres.",
        "functions": { "Fe": 3 },
        "enneagram": { "2": 3, "6": 1 }
      },
      {
        "text": "Il cherche à optimiser, à tout structurer, parfois au détriment de l’humain.",
        "functions": { "Te": 3, "Si":  2, "Ni": 1 },
        "enneagram": { "1": 1, "2": 2 }
      },
      {
        "text": "Il veut comprendre chaque détail avant de donner son avis.",
        "functions": { "Ti": 3 },
        "enneagram": { "5": 2, "3": 1 }
      }
    ]
  },
  {
    "id": 7,
    "question": "Dans quelle description reconnaissez-vous le plus votre proche ?",
    "options": [
      {
        "text": "Il se sent souvent à part, unique, parfois même incompris.",
        "functions": { "Fi": 3 },
        "enneagram": { "4": 3, "5": 1 }
      },
      {
        "text": "Il cherche l’équilibre émotionnel du groupe avant d’affirmer ses idées.",
        "functions": { "Fe": 3 },
        "enneagram": { "2": 2, "9": 1 }
      },
      {
        "text": "Il adore expérimenter, tester, vivre ce qu’il ressent sur le moment.",
        "functions": { "Se": 3, "Ne": 1 },
        "enneagram": { "7": 2, "8": 1 }
      },
      {
        "text": "Il fait confiance à ses intuitions silencieuses, même s’il ne les explique pas.",
        "functions": { "Ni": 3 },
        "enneagram": { "1": 1, "9": 2 }
      }
    ]
  },
  {
    "id": 8,
    "question": "Dans quelle description reconnaissez-vous le plus votre proche ?",
    "options": [
      {
        "text": "Il est nostalgique, fidèle à ce qu’il connaît. Il préfère ce qui a fait ses preuves.",
        "functions": { "Si": 3, "Ni": 2 },
        "enneagram": { "6": 2, "9": 1 }
      },
      {
        "text": "Il rebondit mentalement sur tout, déteste les cadres trop rigides.",
        "functions": { "Ne": 3, "Se": 2 },
        "enneagram": { "7": 2, "3": 1 }
      },
      {
        "text": "Il veut comprendre les rouages cachés, sans jamais se contenter d’un “parce que”.",
        "functions": { "Ti": 3, "Te": 3 },
        "enneagram": { "5": 2, "3": 1 }
      },
      {
        "text": "Il structure son entourage pour que chacun soit à sa place.",
        "functions": { "Te": 3, "Si": 2 },
        "enneagram": { "8": 2, "3": 1 }
      }
    ]
  },
  {
    "id": 9,
    "question": "Dans quelle description reconnaissez-vous le plus votre proche ?",
    "options": [
      {
        "text": "Il ressent intensément ce qu’il vit, mais garde ça dans son monde intérieur.",
        "functions": { "Fi": 3, "Ti": 1 },
        "enneagram": { "4": 2, "6": 1 }
      },
      {
        "text": "Il sait instinctivement ce que les autres ressentent ou attendent.",
        "functions": { "Fe": 3, "Ne": 1 },
        "enneagram": { "2": 2, "9": 1 }
      },
      {
        "text": "Il agit dans l’urgence avec une confiance parfois brute mais efficace.",
        "functions": { "Se": 3, "Te": 2 },
        "enneagram": { "8": 2, "7": 1 }
      },
      {
        "text": "Il voit venir les choses, anticipe les dérives sans que personne ne s’en rende compte.",
        "functions": { "Ni": 2, "Ti": 1 },
        "enneagram": { "5": 1, "1": 2 }
      }
    ]
  },
  {
    "id": 10,
    "question": "Dans quelle description reconnaissez-vous le plus votre proche ?",
    "options": [
      {
        "text": "Il a besoin de sécurité et de repères stables pour se sentir bien.",
        "functions": { "Si": 3, "Ni": 2 },
        "enneagram": { "6": 2, "1": 1 }
      },
      {
        "text": "Il cherche sans cesse de nouvelles idées pour sortir de la routine.",
        "functions": { "Ne": 2, "Se": 2 },
        "enneagram": { "7": 2, "4": 1 }
      },
      {
        "text": "Il prend naturellement le lead quand il sent que personne n’ose.",
        "functions": { "Te": 3 },
        "enneagram": { "8": 3, "3": 1 }
      },
      {
        "text": "Il agit selon une vision intérieure qu’il est parfois le seul à comprendre.",
        "functions": { "Ni": 3, "Ti": 2, "Fi": 2 },
        "enneagram": { "5": 1, "9": 2 }
      }
    ]
  },
  {
    "id": 11,
    "question": "Dans quelle description reconnaissez-vous le plus votre proche ?",
    "options": [
      {
        "text": "Il se repose sur des expériences passées pour prendre ses décisions.",
        "functions": { "Si": 3 },
        "enneagram": { "6": 2, "1": 1 }
      },
      {
        "text": "Il aime improviser, explorer ce qui l'entoure, sans plan préétabli.",
        "functions": { "Se": 3, "Ne": 1 },
        "enneagram": { "7": 2, "9": 1 }
      },
      {
        "text": "Il suit des intuitions profondes qu'il ne peut toujours expliquer.",
        "functions": { "Ni": 3, "Ne": 2 },
        "enneagram": { "1": 1, "9": 2 }
      },
      {
        "text": "Il passe d'une idée à l'autre sans jamais s'arrêter.",
        "functions": { "Ne": 3, "Se": 1 },
        "enneagram": { "7": 2, "3": 1 }
      }
    ]
  },
  {
    "id": 12,
    "question": "Dans quelle description reconnaissez-vous le plus votre proche ?",
    "options": [
      {
        "text": "Il analyse tout en profondeur avant de s'engager émotionnellement.",
        "functions": { "Ti": 3 },
        "enneagram": { "5": 2, "3": 1 }
      },
      {
        "text": "Il agit pour faire ce qui est bien, pas pour plaire.",
        "functions": { "Te": 3 },
        "enneagram": { "1": 2, "8": 1 }
      },
      {
        "text": "Il évite de se mettre en avant mais ressent très fort ce qu'il vit.",
        "functions": { "Fi": 2, "Si": 1 },
        "enneagram": { "4": 2, "9": 1 }
      },
      {
        "text": "Il se rend utile dès qu’il voit un besoin, même implicite.",
        "functions": { "Fe": 3 },
        "enneagram": { "2": 2, "6": 1 }
      }
    ]
  },
  {
    "id": 13,
    "question": "Dans quelle description reconnaissez-vous le plus votre proche ?",
    "options": [
      {
        "text": "Il cherche à comprendre pour anticiper, il voit ce qui est caché.",
        "functions": { "Ni": 3 },
        "enneagram": { "5": 1, "1": 2 }
      },
      {
        "text": "Il agit vite et ajuste au fur et à mesure.",
        "functions": { "Se": 3 },
        "enneagram": { "8": 2, "3": 1 }
      },
      {
        "text": "Il ne supporte pas l'idée d’être inutile ou rejeté.",
        "functions": { "Fe": 3, "Te": 2 },
        "enneagram": { "2": 2, "4": 1 }
      },
      {
        "text": "Il revient toujours à ce qui fonctionne, il ne prend pas de risques inutiles.",
        "functions": { "Si": 3, "Ni": 2 },
        "enneagram": { "6": 2, "9": 1 }
      }
    ]
  },
  {
    "id": 14,
    "question": "Dans quelle description reconnaissez-vous le plus votre proche ?",
    "options": [
      {
        "text": "Il explore toutes les idées possibles, même les plus improbables.",
        "functions": { "Ne": 3 },
        "enneagram": { "7": 2, "5": 1 }
      },
      {
        "text": "Il garde pour lui ses émotions et agit selon son propre ressenti.",
        "functions": { "Fi": 3 },
        "enneagram": { "4": 2, "6": 1 }
      },
      {
        "text": "Il organise les choses pour atteindre des objectifs clairs.",
        "functions": { "Te": 3, "Si": 2 },
        "enneagram": { "3": 2, "1": 1 }
      },
      {
        "text": "Il pose beaucoup de questions pour comprendre avant d'agir.",
        "functions": { "Ti": 3 },
        "enneagram": { "5": 2, "3": 1 }
      }
    ]
  },
  {
    "id": 15,
    "question": "Dans quelle description reconnaissez-vous le plus votre proche ?",
    "options": [
      {
        "text": "Il prend souvent du recul pour voir la situation dans son ensemble.",
        "functions": { "Ni": 2, "Ti": 1, "Te": 1 },
        "enneagram": { "9": 2, "4": 1 }
      },
      {
        "text": "Il observe, évalue, et agit avec rapidité et précision.",
        "functions": { "Se": 3 },
        "enneagram": { "8": 2, "7": 1 }
      },
      {
        "text": "Il pense en termes de logique et de cohérence interne.",
        "functions": { "Ti": 3, "Te": 2 },
        "enneagram": { "5": 1, "1": 2 }
      },
      {
        "text": "Il cherche à stabiliser ce qui l’entoure, à garder un cadre.",
        "functions": { "Si": 3 },
        "enneagram": { "6": 2, "2": 1 }
      }
    ]
  },
  {
    "id": 16,
    "question": "Dans quelle description reconnaissez-vous le plus votre proche ?",
    "options": [
      {
        "text": "Il donne pour recevoir de la reconnaissance et du lien.",
        "functions": { "Fe": 4 },
        "enneagram": { "2": 2, "3": 1 }
      },
      {
        "text": "Il agit pour que les choses soient faites, pas pour discuter.",
        "functions": { "Te": 1, "Se": 1 },
        "enneagram": { "3": 2, "8": 1 }
      },
      {
        "text": "Il suit ses ressentis sans toujours chercher à les expliquer.",
        "functions": { "Fi": 3, "Fe": 2 },
        "enneagram": { "4": 2, "9": 1 }
      },
      {
        "text": "Il jongle avec les idées, toujours en mouvement mental.",
        "functions": { "Ne": 3 },
        "enneagram": { "7": 2, "5": 1 }
      }
    ]
  },
  {
    "id": 17,
    "question": "Dans quelle description reconnaissez-vous le plus votre proche ?",
    "options": [
      {
        "text": "Il veut faire ce qu’il faut, selon une logique implacable.",
        "functions": { "Ti": 3, "Te": 1 },
        "enneagram": { "1": 2, "6": 1 }
      },
      {
        "text": "Il aime explorer de nouvelles idées sans forcément les creuser.",
        "functions": { "Ne": 3 },
        "enneagram": { "7": 2, "3": 1 }
      },
      {
        "text": "Il agit de manière efficace et directe.",
        "functions": { "Te": 3, "Se": 2 },
        "enneagram": { "8": 2, "3": 1 }
      },
      {
        "text": "Il s’appuie sur des références précises et des habitudes stables.",
        "functions": { "Si": 3, "Ni": 2 },
        "enneagram": { "6": 2, "9": 1 }
      }
    ]
  },
  {
    "id": 18,
    "question": "Dans quelle description reconnaissez-vous le plus votre proche ?",
    "options": [
      {
        "text": "Il perçoit des vérités profondes sans toujours pouvoir les verbaliser.",
        "functions": { "Ni": 3, "Fi": 2 },
        "enneagram": { "5": 2, "4": 1 }
      },
      {
        "text": "Il agit vite et fort, il prend sa place naturellement.",
        "functions": { "Se": 3 },
        "enneagram": { "8": 2, "3": 1 }
      },
      {
        "text": "Il veut apaiser, lisser, éviter les tensions au maximum.",
        "functions": { "Fe": 3, "Fi": 2 },
        "enneagram": { "2": 2, "9": 1 }
      },
      {
        "text": "Il ressent très fort mais ne se laisse pas dicter ses émotions.",
        "functions": { "Fi": 3, "Ti": 1 },
        "enneagram": { "4": 2, "6": 1 }
      }
    ]
  },
  {
    "id": 19,
    "question": "Dans quelle description reconnaissez-vous le plus votre proche ?",
    "options": [
      {
        "text": "Il cherche la vérité, même si elle est inconfortable.",
        "functions": { "Ti": 3 },
        "enneagram": { "5": 3, "1": 2 }
      },
      {
        "text": "Il agit pour régler les choses, sans forcément tout comprendre.",
        "functions": { "Te": 2 },
        "enneagram": { "3": 2, "8": 1 }
      },
      {
        "text": "Il explore tous les scénarios possibles, juste au cas où.",
        "functions": { "Ne": 3 },
        "enneagram": { "6": 2, "7": 1 }
      },
      {
        "text": "Il garde une constance, une routine qui le sécurise.",
        "functions": { "Si": 3, "Ni": 1 },
        "enneagram": { "6": 2, "9": 1 }
      }
    ]
  },
  {
    "id": 20,
    "question": "Dans quelle description reconnaissez-vous le plus votre proche ?",
    "options": [
      {
        "text": "Il agit par principe, fidèle à une vision intérieure de la vérité.",
        "functions": { "Fi": 4 },
        "enneagram": { "1": 1, "4": 2 }
      },
      {
        "text": "Il observe les signaux faibles et fait des liens très subtils.",
        "functions": { "Ni": 3, "Ne": 2 },
        "enneagram": { "5": 1, "9": 2 }
      },
      {
        "text": "Il se jette dans l’action sans perdre de temps.",
        "functions": { "Se": 3 },
        "enneagram": { "8": 2, "7": 1 }
      },
      {
        "text": "Il cherche à rendre service et à créer de l'harmonie autour de lui.",
        "functions": { "Fe": 4 },
        "enneagram": { "2": 2, "9": 1 }
      }
    ]
  }
];

// Expose the questions arrays in both browser and Node environments
if (typeof window !== 'undefined') {
  window.AUTO_QUESTIONS = AUTO_QUESTIONS;
  window.EXTERNAL_QUESTIONS = EXTERNAL_QUESTIONS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AUTO_QUESTIONS, EXTERNAL_QUESTIONS };
}

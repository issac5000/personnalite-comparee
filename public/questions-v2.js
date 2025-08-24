const AUTO_QUESTIONS = [
  {
    "id": 1,
    "question": "Quand un plan part en vrille, tu fais quoi en premier ?",
    "i18nKey": "questionnaire.auto.q1.title",
    "options": [
      {
        "text": "Je questionne point par point jusqu’à clarifier.",
        "i18nKey": "questionnaire.auto.q1.option1",
        "functions": { "Ti": 3, "Fe": -1, "Ni": 1 },
        "enneagram": { "1": 1, "5": 2 }
      },
      {
        "text": "Je recadre et fixe un plan simple et mesurable.",
        "i18nKey": "questionnaire.auto.q1.option2",
        "functions": { "Te": 3, "Fi": -1, "Si": 1 },
        "enneagram": { "3": 2, "8": 1 }
      },
      {
        "text": "Je prends du recul pour saisir le sens global.",
        "i18nKey": "questionnaire.auto.q1.option3",
        "functions": { "Ni": 3, "Se": -1 },
        "enneagram": { "5": 1, "9": 2 }
      },
      {
        "text": "Je teste en direct et j’ajuste au fur et à mesure.",
        "i18nKey": "questionnaire.auto.q1.option4",
        "functions": { "Se": 3, "Ni": -1, "Ne": 1 },
        "enneagram": { "7": 1, "8": 2 }
      }
    ]
  },
  {
    "id": 2,
    "question": "Face à une décision sensible :",
    "i18nKey": "questionnaire.auto.q2.title",
    "options": [
      {
        "text": "Je reste fidèle à mes convictions, même si c’est impopulaire.",
        "i18nKey": "questionnaire.auto.q2.option1",
        "functions": { "Fi": 3, "Te": -1 },
        "enneagram": { "4": 2, "9": 1 }
      },
      {
        "text": "Je pèse l’impact humain et la cohésion du groupe.",
        "i18nKey": "questionnaire.auto.q2.option2",
        "functions": { "Fe": 3, "Ti": -1, "Ne": 1 },
        "enneagram": { "2": 2, "9": 1 }
      },
      {
        "text": "Je tranche selon l’efficacité et les priorités.",
        "i18nKey": "questionnaire.auto.q2.option3",
        "functions": { "Te": 3, "Fi": -1, "Si": 1 },
        "enneagram": { "1": 1, "3": 2 }
      },
      {
        "text": "Je vérifie la cohérence logique avant tout.",
        "i18nKey": "questionnaire.auto.q2.option4",
        "functions": { "Ti": 3, "Fe": -1, "Ni": 1 },
        "enneagram": { "1": 1, "5": 2 }
      }
    ]
  },
  {
    "id": 3,
    "question": "Ta manière d’apprendre quelque chose de nouveau :",
    "i18nKey": "questionnaire.auto.q3.title",
    "options": [
      {
        "text": "Je relie les concepts à des expériences passées fiables.",
        "i18nKey": "questionnaire.auto.q3.option1",
        "functions": { "Si": 3, "Ne": -1 },
        "enneagram": { "1": 1, "6": 2 }
      },
      {
        "text": "Je capte les signaux faibles et j’anticipe la suite.",
        "i18nKey": "questionnaire.auto.q3.option2",
        "functions": { "Ni": 3, "Se": -1 },
        "enneagram": { "5": 1, "9": 2 }
      },
      {
        "text": "J’explore plusieurs pistes en parallèle, par curiosité.",
        "i18nKey": "questionnaire.auto.q3.option3",
        "functions": { "Ne": 3, "Si": -1 },
        "enneagram": { "5": 1, "7": 2 }
      },
      {
        "text": "Je manipule concrètement pour sentir comment ça réagit.",
        "i18nKey": "questionnaire.auto.q3.option4",
        "functions": { "Se": 3, "Ni": -1 },
        "enneagram": { "7": 1, "8": 2 }
      }
    ]
  },
  {
    "id": 4,
    "question": "Dans un conflit :",
    "i18nKey": "questionnaire.auto.q4.title",
    "options": [
      {
        "text": "Je protège la paix du groupe et j’apaise.",
        "i18nKey": "questionnaire.auto.q4.option1",
        "functions": { "Fe": 3, "Ti": -1 },
        "enneagram": { "2": 1, "9": 2 }
      },
      {
        "text": "Je reste droit avec mes valeurs, quitte à froisser.",
        "i18nKey": "questionnaire.auto.q4.option2",
        "functions": { "Fi": 3, "Te": -1 },
        "enneagram": { "1": 1, "4": 2 }
      },
      {
        "text": "Je pose des critères, propose une structure de sortie.",
        "i18nKey": "questionnaire.auto.q4.option3",
        "functions": { "Te": 3, "Fi": -1, "Si": 1 },
        "enneagram": { "1": 2, "3": 1 }
      },
      {
        "text": "Je clarifie les zones d’incohérence pour déminer.",
        "i18nKey": "questionnaire.auto.q4.option4",
        "functions": { "Ti": 3, "Fe": -1, "Ni": 1 },
        "enneagram": { "5": 2, "6": 1 }
      }
    ]
  },
  {
    "id": 5,
    "question": "Quand tu démarres un projet :",
    "i18nKey": "questionnaire.auto.q5.title",
    "options": [
      {
        "text": "Je liste les étapes et j’avance de façon cadrée.",
        "i18nKey": "questionnaire.auto.q5.option1",
        "functions": { "Si": 3, "Ne": -1, "Te": 1 },
        "enneagram": { "1": 2, "6": 1 }
      },
      {
        "text": "Je visionne l’issue idéale et le chemin implicite.",
        "i18nKey": "questionnaire.auto.q5.option2",
        "functions": { "Ni": 3, "Se": -1 },
        "enneagram": { "5": 1, "9": 2 }
      },
      {
        "text": "Je brainstorme à fond et je garde le meilleur.",
        "i18nKey": "questionnaire.auto.q5.option3",
        "functions": { "Ne": 3, "Si": -1, "Ti": 1 },
        "enneagram": { "5": 1, "7": 2 }
      },
      {
        "text": "Je passe tout de suite à l’action tangible.",
        "i18nKey": "questionnaire.auto.q5.option4",
        "functions": { "Se": 3, "Ni": -1 },
        "enneagram": { "3": 1, "8": 2 }
      }
    ]
  },
{
    "id": 6,
    "question": "Dans un groupe :",
    "i18nKey": "questionnaire.auto.q6.title",
    "options": [
      {
        "text": "Je crée de l’harmonie et je connecte les gens.",
        "i18nKey": "questionnaire.auto.q6.option1",
        "functions": { "Fe": 3, "Ti": -1 },
        "enneagram": { "2": 2, "9": 1 }
      },
      {
        "text": "Je garde mon indépendance et mes limites internes.",
        "i18nKey": "questionnaire.auto.q6.option2",
        "functions": { "Fi": 3, "Te": -1 },
        "enneagram": { "4": 2, "9": 1 }
      },
      {
        "text": "J’organise pour avancer et livrer.",
        "i18nKey": "questionnaire.auto.q6.option3",
        "functions": { "Te": 3, "Fi": -1 },
        "enneagram": { "3": 2, "8": 1 }
      },
      {
        "text": "J’analyse la logique de ce qui se passe.",
        "i18nKey": "questionnaire.auto.q6.option4",
        "functions": { "Ti": 3, "Fe": -1 },
        "enneagram": { "1": 1, "5": 2 }
      }
    ]
  },
  {
    "id": 7,
    "question": "Sous pression courte :",
    "i18nKey": "questionnaire.auto.q7.title",
    "options": [
      {
        "text": "Je réagis vite et je tire parti du terrain.",
        "i18nKey": "questionnaire.auto.q7.option1",
        "functions": { "Se": 3, "Ni": -1 },
        "enneagram": { "7": 1, "8": 2 }
      },
      {
        "text": "Je simplifie et je fixe un cap clair.",
        "i18nKey": "questionnaire.auto.q7.option2",
        "functions": { "Te": 3, "Fi": -1 },
        "enneagram": { "1": 1, "3": 2 }
      },
      {
        "text": "Je cherche la ligne directrice cachée.",
        "i18nKey": "questionnaire.auto.q7.option3",
        "functions": { "Ni": 3, "Se": -1 },
        "enneagram": { "5": 1, "9": 2 }
      },
      {
        "text": "Je m’appuie sur ce qui a déjà fait ses preuves.",
        "i18nKey": "questionnaire.auto.q7.option4",
        "functions": { "Si": 3, "Ne": -1 },
        "enneagram": { "1": 1, "6": 2 }
      }
    ]
  },
  {
    "id": 8,
    "question": "Pour trancher un désaccord technique :",
    "i18nKey": "questionnaire.auto.q8.title",
    "options": [
      {
        "text": "Je teste en conditions réelles.",
        "i18nKey": "questionnaire.auto.q8.option1",
        "functions": { "Se": 3, "Ni": -1, "Te": 1 },
        "enneagram": { "3": 1, "8": 2 }
      },
      {
        "text": "Je compare avec des standards et des précédents.",
        "i18nKey": "questionnaire.auto.q8.option2",
        "functions": { "Si": 3, "Ne": -1, "Ti": 1 },
        "enneagram": { "1": 1, "6": 2 }
      },
      {
        "text": "Je modélise le problème et j’en déduis la solution.",
        "i18nKey": "questionnaire.auto.q8.option3",
        "functions": { "Ti": 3, "Fe": -1, "Ni": 1 },
        "enneagram": { "1": 1, "5": 2 }
      },
      {
        "text": "Je cherche la solution qui préserve la cohésion.",
        "i18nKey": "questionnaire.auto.q8.option4",
        "functions": { "Fe": 3, "Ti": -1 },
        "enneagram": { "2": 2, "9": 1 }
      }
    ]
  },
  {
    "id": 9,
    "question": "Ta relation aux règles :",
    "i18nKey": "questionnaire.auto.q9.title",
    "options": [
      {
        "text": "Je respecte si ça a du sens et de l’historique.",
        "i18nKey": "questionnaire.auto.q9.option1",
        "functions": { "Si": 3, "Ne": -1 },
        "enneagram": { "1": 1, "6": 2 }
      },
      {
        "text": "Je les change si elles bloquent l’efficacité.",
        "i18nKey": "questionnaire.auto.q9.option2",
        "functions": { "Te": 3, "Fi": -1 },
        "enneagram": { "3": 1, "8": 2 }
      },
      {
        "text": "Je m’en écarte si ça heurte mes valeurs.",
        "i18nKey": "questionnaire.auto.q9.option3",
        "functions": { "Fi": 3, "Te": -1 },
        "enneagram": { "4": 2, "9": 1 }
      },
      {
        "text": "Je les discute si elles sont illogiques.",
        "i18nKey": "questionnaire.auto.q9.option4",
        "functions": { "Ti": 3, "Fe": -1 },
        "enneagram": { "1": 1, "5": 2 }
      }
    ]
  },
  {
    "id": 10,
    "question": "Quand tu te projettes :",
    "i18nKey": "questionnaire.auto.q10.title",
    "options": [
      {
        "text": "Je vois le fil conducteur des événements.",
        "i18nKey": "questionnaire.auto.q10.option1",
        "functions": { "Ni": 3, "Se": -1 },
        "enneagram": { "5": 1, "9": 2 }
      },
      {
        "text": "J’imagine plusieurs scénarios alternatifs.",
        "i18nKey": "questionnaire.auto.q10.option2",
        "functions": { "Ne": 3, "Si": -1 },
        "enneagram": { "5": 1, "7": 2 }
      },
      {
        "text": "Je transpose ce qui a marché hier.",
        "i18nKey": "questionnaire.auto.q10.option3",
        "functions": { "Si": 3, "Ne": -1 },
        "enneagram": { "1": 1, "6": 2 }
      },
      {
        "text": "Je me base sur ce que je peux tester tout de suite.",
        "i18nKey": "questionnaire.auto.q10.option4",
        "functions": { "Se": 3, "Ni": -1 },
        "enneagram": { "7": 1, "8": 2 }
      }
    ]
  },
  {
    "id": 11,
    "question": "Vis-à-vis des autres :",
    "i18nKey": "questionnaire.auto.q11.title",
    "options": [
      {
        "text": "Je veux qu’on se sente respectés et entendus.",
        "i18nKey": "questionnaire.auto.q11.option1",
        "functions": { "Fe": 3, "Ti": -1 },
        "enneagram": { "2": 2, "9": 1 }
      },
      {
        "text": "Je garde mon authenticité sans surjouer.",
        "i18nKey": "questionnaire.auto.q11.option2",
        "functions": { "Fi": 3, "Te": -1 },
        "enneagram": { "4": 2, "6": 1 }
      },
      {
        "text": "Je clarifie les critères et responsabilités.",
        "i18nKey": "questionnaire.auto.q11.option3",
        "functions": { "Te": 3, "Fi": -1 },
        "enneagram": { "1": 1, "3": 2 }
      },
      {
        "text": "Je clarifie les concepts pour éviter le flou.",
        "i18nKey": "questionnaire.auto.q11.option4",
        "functions": { "Ti": 3, "Fe": -1 },
        "enneagram": { "1": 1, "5": 2 }
      }
    ]
  },
  {
    "id": 12,
    "question": "Quand tu doutes :",
    "i18nKey": "questionnaire.auto.q12.title",
    "options": [
      {
        "text": "Je reviens aux faits et aux traces du passé.",
        "i18nKey": "questionnaire.auto.q12.option1",
        "functions": { "Si": 3, "Ne": -1 },
        "enneagram": { "1": 1, "6": 2 }
      },
      {
        "text": "Je cherche le pattern sous-jacent.",
        "i18nKey": "questionnaire.auto.q12.option2",
        "functions": { "Ni": 3, "Se": -1 },
        "enneagram": { "5": 1, "9": 2 }
      },
      {
        "text": "Je multiplie les pistes et je compare.",
        "i18nKey": "questionnaire.auto.q12.option3",
        "functions": { "Ne": 3, "Si": -1, "Ti": 1 },
        "enneagram": { "5": 1, "7": 2 }
      },
      {
        "text": "Je fais un test rapide sur le terrain.",
        "i18nKey": "questionnaire.auto.q12.option4",
        "functions": { "Se": 3, "Ni": -1 },
        "enneagram": { "7": 1, "8": 2 }
      }
    ]
  },
  {
    "id": 13,
    "question": "Ta manière d’être efficace :",
    "i18nKey": "questionnaire.auto.q13.title",
    "options": [
      {
        "text": "Des critères, des jalons, du concret.",
        "i18nKey": "questionnaire.auto.q13.option1",
        "functions": { "Te": 3, "Fi": -1, "Si": 1 },
        "enneagram": { "1": 1, "3": 2 }
      },
      {
        "text": "Un modèle clair et logique.",
        "i18nKey": "questionnaire.auto.q13.option2",
        "functions": { "Ti": 3, "Fe": -1, "Ni": 1 },
        "enneagram": { "1": 1, "5": 2 }
      },
      {
        "text": "Des choix alignés à mes valeurs.",
        "i18nKey": "questionnaire.auto.q13.option3",
        "functions": { "Fi": 3, "Te": -1 },
        "enneagram": { "4": 2, "9": 1 }
      },
      {
        "text": "Des actions visibles et mesurables.",
        "i18nKey": "questionnaire.auto.q13.option4",
        "functions": { "Se": 3, "Ni": -1 },
        "enneagram": { "3": 1, "8": 2 }
      }
    ]
  },
  {
    "id": 14,
    "question": "Quand quelqu’un propose une idée bancale :",
    "i18nKey": "questionnaire.auto.q14.title",
    "options": [
      {
        "text": "Je l’encadre et je reformule en plan faisable.",
        "i18nKey": "questionnaire.auto.q14.option1",
        "functions": { "Te": 3, "Fi": -1 },
        "enneagram": { "3": 2, "8": 1 }
      },
      {
        "text": "Je questionne jusqu’à trouver la faille.",
        "i18nKey": "questionnaire.auto.q14.option2",
        "functions": { "Ti": 3, "Fe": -1 },
        "enneagram": { "1": 1, "5": 2 }
      },
      {
        "text": "J’essaie de valoriser et d’inclure la personne.",
        "i18nKey": "questionnaire.auto.q14.option3",
        "functions": { "Fe": 3, "Ti": -1 },
        "enneagram": { "2": 2, "9": 1 }
      },
      {
        "text": "Je propose des alternatives créatives.",
        "i18nKey": "questionnaire.auto.q14.option4",
        "functions": { "Ne": 3, "Si": -1 },
        "enneagram": { "3": 1, "7": 2 }
      }
    ]
  },
  {
    "id": 15,
    "question": "Ta préférence au quotidien :",
    "i18nKey": "questionnaire.auto.q15.title",
    "options": [
      {
        "text": "Routines et repères stables.",
        "i18nKey": "questionnaire.auto.q15.option1",
        "functions": { "Si": 3, "Ne": -1 },
        "enneagram": { "1": 1, "6": 2 }
      },
      {
        "text": "Découvertes et variations.",
        "i18nKey": "questionnaire.auto.q15.option2",
        "functions": { "Ne": 3, "Si": -1 },
        "enneagram": { "3": 1, "7": 2 }
      },
      {
        "text": "Vision de fond et continuité interne.",
        "i18nKey": "questionnaire.auto.q15.option3",
        "functions": { "Ni": 3, "Se": -1 },
        "enneagram": { "5": 1, "9": 2 }
      },
      {
        "text": "Action et retour immédiat.",
        "i18nKey": "questionnaire.auto.q15.option4",
        "functions": { "Se": 3, "Ni": -1 },
        "enneagram": { "7": 1, "8": 2 }
      }
    ]
  },
  {
    "id": 16,
    "question": "Quand tu aides :",
    "i18nKey": "questionnaire.auto.q16.title",
    "options": [
      {
        "text": "Je crée du lien et je facilite les échanges.",
        "i18nKey": "questionnaire.auto.q16.option1",
        "functions": { "Fe": 3, "Ti": -1 },
        "enneagram": { "2": 2, "9": 1 }
      },
      {
        "text": "Je respecte l’autonomie et les limites de chacun.",
        "i18nKey": "questionnaire.auto.q16.option2",
        "functions": { "Fi": 3, "Te": -1 },
        "enneagram": { "4": 2, "9": 1 }
      },
      {
        "text": "Je mets des outils/process utiles.",
        "i18nKey": "questionnaire.auto.q16.option3",
        "functions": { "Te": 3, "Fi": -1 },
        "enneagram": { "1": 1, "3": 2 }
      },
      {
        "text": "Je clarifie pour que la personne comprenne seule.",
        "i18nKey": "questionnaire.auto.q16.option4",
        "functions": { "Ti": 3, "Fe": -1 },
        "enneagram": { "1": 1, "5": 2 }
      }
    ]
  },
  {
    "id": 17,
    "question": "Sous incertitude :",
    "i18nKey": "questionnaire.auto.q17.title",
    "options": [
      {
        "text": "Je me fie aux indices profonds.",
        "i18nKey": "questionnaire.auto.q17.option1",
        "functions": { "Ni": 3, "Se": -1 },
        "enneagram": { "5": 1, "9": 2 }
      },
      {
        "text": "Je multiplie les essais rapides.",
        "i18nKey": "questionnaire.auto.q17.option2",
        "functions": { "Se": 3, "Ni": -1 },
        "enneagram": { "7": 1, "8": 2 }
      },
      {
        "text": "Je crée plusieurs hypothèses concurrentes.",
        "i18nKey": "questionnaire.auto.q17.option3",
        "functions": { "Ne": 3, "Si": -1, "Ti": 1 },
        "enneagram": { "5": 1, "7": 2 }
      },
      {
        "text": "Je reviens aux précédents et aux règles.",
        "i18nKey": "questionnaire.auto.q17.option4",
        "functions": { "Si": 3, "Ne": -1 },
        "enneagram": { "1": 1, "6": 2 }
      }
    ]
  },
  {
    "id": 18,
    "question": "Quand tu t’exprimes :",
    "i18nKey": "questionnaire.auto.q18.title",
    "options": [
      {
        "text": "Je parle de ce qui est vrai pour moi.",
        "i18nKey": "questionnaire.auto.q18.option1",
        "functions": { "Fi": 3, "Te": -1 },
        "enneagram": { "4": 2, "9": 1 }
      },
      {
        "text": "Je cherche les mots qui rassemblent.",
        "i18nKey": "questionnaire.auto.q18.option2",
        "functions": { "Fe": 3, "Ti": -1 },
        "enneagram": { "2": 2, "9": 1 }
      },
      {
        "text": "Je structure et je vais droit au but.",
        "i18nKey": "questionnaire.auto.q18.option3",
        "functions": { "Te": 3, "Fi": -1 },
        "enneagram": { "3": 2, "8": 1 }
      },
      {
        "text": "Je précise chaque terme pour éviter le flou.",
        "i18nKey": "questionnaire.auto.q18.option4",
        "functions": { "Ti": 3, "Fe": -1 },
        "enneagram": { "1": 1, "5": 2 }
      }
    ]
  },
  {
    "id": 19,
    "question": "Face à une erreur :",
    "i18nKey": "questionnaire.auto.q19.title",
    "options": [
      {
        "text": "Je corrige le process pour que ça n’arrive plus.",
        "i18nKey": "questionnaire.auto.q19.option1",
        "functions": { "Te": 3, "Fi": -1, "Si": 1 },
        "enneagram": { "1": 2, "3": 1 }
      },
      {
        "text": "Je comprends le mécanisme qui a déraillé.",
        "i18nKey": "questionnaire.auto.q19.option2",
        "functions": { "Ti": 3, "Fe": -1, "Ni": 1 },
        "enneagram": { "1": 1, "5": 2 }
      },
      {
        "text": "Je repère les signes avant-coureurs.",
        "i18nKey": "questionnaire.auto.q19.option3",
        "functions": { "Ni": 3, "Se": -1 },
        "enneagram": { "5": 1, "9": 2 }
      },
      {
        "text": "Je fais un test terrain pour sécuriser.",
        "i18nKey": "questionnaire.auto.q19.option4",
        "functions": { "Se": 3, "Ni": -1 },
        "enneagram": { "7": 1, "8": 2 }
      }
    ]
  },
  {
    "id": 20,
    "question": "Ta motivation profonde :",
    "i18nKey": "questionnaire.auto.q20.title",
    "options": [
      {
        "text": "Être aligné avec qui je suis.",
        "i18nKey": "questionnaire.auto.q20.option1",
        "functions": { "Fi": 3, "Te": -1 },
        "enneagram": { "4": 2, "9": 1 }
      },
      {
        "text": "Élever les autres et la relation.",
        "i18nKey": "questionnaire.auto.q20.option2",
        "functions": { "Fe": 3, "Ti": -1 },
        "enneagram": { "2": 2, "9": 1 }
      },
      {
        "text": "Transformer en résultats concrets.",
        "i18nKey": "questionnaire.auto.q20.option3",
        "functions": { "Te": 3, "Fi": -1 },
        "enneagram": { "3": 2, "8": 1 }
      },
      {
        "text": "Comprendre et clarifier le vrai.",
        "i18nKey": "questionnaire.auto.q20.option4",
        "functions": { "Ti": 3, "Fe": -1 },
        "enneagram": { "1": 1, "5": 2 }
      }
    ]
  }
];

const EXTERNAL_QUESTIONS = [
  {
    "id": 1,
    "question": "Quand un imprévu arrive, votre proche :",
    "i18nKey": "questionnaire.external.q1.title",
    "options": [
      { "text": "Agit vite et ajuste en direct.", "i18nKey": "questionnaire.external.q1.option1", "functions": { "Se": 3, "Ni": -1, "Te": 1 }, "enneagram": { "7": 1, "8": 2 } },
      { "text": "Prend du recul pour capter le sens global.", "i18nKey": "questionnaire.external.q1.option2", "functions": { "Ni": 3, "Se": -1 }, "enneagram": { "5": 1, "9": 2 } },
      { "text": "Cherche un précédent et une règle applicable.", "i18nKey": "questionnaire.external.q1.option3", "functions": { "Si": 3, "Ne": -1 }, "enneagram": { "1": 1, "6": 2 } },
      { "text": "Déplie la logique du problème avant d’agir.", "i18nKey": "questionnaire.external.q1.option4", "functions": { "Ti": 3, "Fe": -1 }, "enneagram": { "1": 1, "5": 2 } }
    ]
  },
  {
    "id": 2,
    "question": "Dans une discussion de groupe, il/elle :",
    "i18nKey": "questionnaire.external.q2.title",
    "options": [
      { "text": "Encourage chacun à participer et garde l’harmonie.", "i18nKey": "questionnaire.external.q2.option1", "functions": { "Fe": 3, "Ti": -1 }, "enneagram": { "2": 2, "9": 1 } },
      { "text": "Exprime ses idées avec authenticité, même si ça dérange.", "i18nKey": "questionnaire.external.q2.option2", "functions": { "Fi": 3, "Te": -1 }, "enneagram": { "4": 2, "6": 1 } },
      { "text": "Recentre la discussion vers un objectif concret.", "i18nKey": "questionnaire.external.q2.option3", "functions": { "Te": 3, "Fi": -1 }, "enneagram": { "3": 2, "8": 1 } },
      { "text": "Pose des questions pour clarifier la logique.", "i18nKey": "questionnaire.external.q2.option4", "functions": { "Ti": 3, "Fe": -1 }, "enneagram": { "1": 1, "5": 2 } }
    ]
  },
  {
    "id": 3,
    "question": "Son rapport aux valeurs :",
    "i18nKey": "questionnaire.external.q3.title",
    "options": [
      { "text": "Reste authentique même si c’est impopulaire.", "i18nKey": "questionnaire.external.q3.option1", "functions": { "Fi": 3, "Te": -1 }, "enneagram": { "4": 2, "9": 1 } },
      { "text": "Privilégie la cohésion et le ressenti du groupe.", "i18nKey": "questionnaire.external.q3.option2", "functions": { "Fe": 3, "Ti": -1 }, "enneagram": { "2": 2, "9": 1 } },
      { "text": "Fait primer l’efficacité mesurable.", "i18nKey": "questionnaire.external.q3.option3", "functions": { "Te": 3, "Fi": -1 }, "enneagram": { "3": 2, "8": 1 } },
      { "text": "Fait primer la justesse logique.", "i18nKey": "questionnaire.external.q3.option4", "functions": { "Ti": 3, "Fe": -1 }, "enneagram": { "1": 1, "5": 2 } }
    ]
  },
  {
    "id": 4,
    "question": "Quand il/elle apprend quelque chose de nouveau :",
    "i18nKey": "questionnaire.external.q4.title",
    "options": [
      { "text": "S’appuie sur ses expériences et repères passés.", "i18nKey": "questionnaire.external.q4.option1", "functions": { "Si": 3, "Ne": -1 }, "enneagram": { "1": 1, "6": 2 } },
      { "text": "Expérimente rapidement pour voir ce que ça donne.", "i18nKey": "questionnaire.external.q4.option2", "functions": { "Se": 3, "Ni": -1 }, "enneagram": { "7": 1, "8": 2 } },
      { "text": "Imagine des scénarios alternatifs et créatifs.", "i18nKey": "questionnaire.external.q4.option3", "functions": { "Ne": 3, "Si": -1 }, "enneagram": { "5": 1, "7": 2 } },
      { "text": "Capte le sens profond sans tout expliquer.", "i18nKey": "questionnaire.external.q4.option4", "functions": { "Ni": 3, "Se": -1 }, "enneagram": { "5": 1, "9": 2 } }
    ]
  },
  {
    "id": 5,
    "question": "Quand il/elle doit gérer un problème pratique :",
    "i18nKey": "questionnaire.external.q5.title",
    "options": [
      { "text": "Cherche une règle ou un exemple du passé.", "i18nKey": "questionnaire.external.q5.option1", "functions": { "Si": 3, "Ne": -1 }, "enneagram": { "1": 1, "6": 2 } },
      { "text": "Teste une solution concrète tout de suite.", "i18nKey": "questionnaire.external.q5.option2", "functions": { "Se": 3, "Ni": -1 }, "enneagram": { "7": 1, "8": 2 } },
      { "text": "Cherche une explication logique détaillée.", "i18nKey": "questionnaire.external.q5.option3", "functions": { "Ti": 3, "Fe": -1 }, "enneagram": { "1": 1, "5": 2 } },
      { "text": "Se demande comment garder la cohésion humaine.", "i18nKey": "questionnaire.external.q5.option4", "functions": { "Fe": 3, "Ti": -1 }, "enneagram": { "2": 2, "9": 1 } }
    ]
  },
  {
    "id": 6,
    "question": "Quand il/elle prend des décisions rapides :",
    "i18nKey": "questionnaire.external.q6.title",
    "options": [
      { "text": "S’appuie sur ses intuitions globales.", "i18nKey": "questionnaire.external.q6.option1", "functions": { "Ni": 3, "Se": -1 }, "enneagram": { "5": 1, "9": 2 } },
      { "text": "Suit ses valeurs personnelles sans compromis.", "i18nKey": "questionnaire.external.q6.option2", "functions": { "Fi": 3, "Te": -1 }, "enneagram": { "4": 2, "9": 1 } },
      { "text": "Se concentre sur l’efficacité immédiate.", "i18nKey": "questionnaire.external.q6.option3", "functions": { "Te": 3, "Fi": -1 }, "enneagram": { "3": 2, "8": 1 } },
      { "text": "Teste directement sur le terrain.", "i18nKey": "questionnaire.external.q6.option4", "functions": { "Se": 3, "Ni": -1 }, "enneagram": { "7": 1, "8": 2 } }
    ]
  },
  {
    "id": 7,
    "question": "Dans ses relations votre proche a tendance à :",
    "i18nKey": "questionnaire.external.q7.title",
    "options": [
      { "text": "Apaiser les tensions et cherche l’harmonie.", "i18nKey": "questionnaire.external.q7.option1", "functions": { "Fe": 3, "Ti": -1 }, "enneagram": { "2": 1, "9": 2 } },
      { "text": "Affirme son authenticité et ses ressentis.", "i18nKey": "questionnaire.external.q7.option2", "functions": { "Fi": 3, "Te": -1 }, "enneagram": { "4": 2, "6": 1 } },
      { "text": "Donne des directives claires et concrètes.", "i18nKey": "questionnaire.external.q7.option3", "functions": { "Te": 3, "Fi": -1 }, "enneagram": { "3": 2, "8": 1 } },
      { "text": "Privilégie la précision et la logique.", "i18nKey": "questionnaire.external.q7.option4", "functions": { "Ti": 3, "Fe": -1 }, "enneagram": { "1": 1, "5": 2 } }
    ]
  },
  {
    "id": 8,
    "question": "Face à une nouvelle idée votre proche :",
    "i18nKey": "questionnaire.external.q8.title",
    "options": [
      { "text": "Cherche comment ça a été fait ailleurs.", "i18nKey": "questionnaire.external.q8.option1", "functions": { "Si": 3, "Ne": -1 }, "enneagram": { "1": 1, "6": 2 } },
      { "text": "Imagine d’autres pistes à partir de là.", "i18nKey": "questionnaire.external.q8.option2", "functions": { "Ne": 3, "Si": -1 }, "enneagram": { "3": 1, "7": 2 } },
      { "text": "Capte directement où ça peut mener.", "i18nKey": "questionnaire.external.q8.option3", "functions": { "Ni": 3, "Se": -1 }, "enneagram": { "5": 1, "9": 2 } },
      { "text": "Teste concrètement et observe le résultat.", "i18nKey": "questionnaire.external.q8.option4", "functions": { "Se": 3, "Ni": -1 }, "enneagram": { "7": 1, "8": 2 } }
    ]
  },
  {
    "id": 9,
    "question": "Quand il/elle exprime une opinion :",
    "i18nKey": "questionnaire.external.q9.title",
    "options": [
      { "text": "Met en avant sa vérité personnelle.", "i18nKey": "questionnaire.external.q9.option1", "functions": { "Fi": 3, "Te": -1 }, "enneagram": { "4": 2, "9": 1 } },
      { "text": "Adapte son discours pour rassembler.", "i18nKey": "questionnaire.external.q9.option2", "functions": { "Fe": 3, "Ti": -1 }, "enneagram": { "2": 2, "9": 1 } },
      { "text": "Structure en étapes logiques et mesurables.", "i18nKey": "questionnaire.external.q9.option3", "functions": { "Te": 3, "Fi": -1 }, "enneagram": { "3": 2, "8": 1 } },
      { "text": "Défend une cohérence intellectuelle.", "i18nKey": "questionnaire.external.q9.option4", "functions": { "Ti": 3, "Fe": -1 }, "enneagram": { "1": 1, "5": 2 } }
    ]
  },
  {
    "id": 10,
    "question": "Son rapport aux règles :",
    "i18nKey": "questionnaire.external.q10.title",
    "options": [
      { "text": "S’appuie dessus pour sécuriser.", "i18nKey": "questionnaire.external.q10.option1", "functions": { "Si": 3, "Ne": -1 }, "enneagram": { "1": 1, "6": 2 } },
      { "text": "Les change si elles freinent le résultat.", "i18nKey": "questionnaire.external.q10.option2", "functions": { "Te": 3, "Fi": -1 }, "enneagram": { "3": 1, "8": 2 } },
      { "text": "Les discute si elles sont illogiques.", "i18nKey": "questionnaire.external.q10.option3", "functions": { "Ti": 3, "Fe": -1 }, "enneagram": { "1": 1, "5": 2 } },
      { "text": "S’en écarte si ça heurte ses valeurs.", "i18nKey": "questionnaire.external.q10.option4", "functions": { "Fi": 3, "Te": -1 }, "enneagram": { "4": 2, "9": 1 } }
    ]
  },
  {
    "id": 11,
    "question": "Dans les choix rapides votre proche :",
    "i18nKey": "questionnaire.external.q11.title",
    "options": [
      { "text": "Suit l’intuition globale.", "i18nKey": "questionnaire.external.q11.option1", "functions": { "Ni": 3, "Se": -1 }, "enneagram": { "5": 1, "9": 2 } },
      { "text": "Tente directement et ajuste.", "i18nKey": "questionnaire.external.q11.option2", "functions": { "Se": 3, "Ni": -1 }, "enneagram": { "7": 1, "8": 2 } },
      { "text": "Fait plusieurs scénarios mentaux.", "i18nKey": "questionnaire.external.q11.option3", "functions": { "Ne": 3, "Si": -1 }, "enneagram": { "5": 1, "7": 2 } },
      { "text": "Réplique un précédent fiable.", "i18nKey": "questionnaire.external.q11.option4", "functions": { "Si": 3, "Ne": -1 }, "enneagram": { "1": 1, "6": 2 } }
    ]
  },
  {
    "id": 12,
    "question": "Quand il/elle défend un point :",
    "i18nKey": "questionnaire.external.q12.title",
    "options": [
      { "text": "S’aligne à ses valeurs internes.", "i18nKey": "questionnaire.external.q12.option1", "functions": { "Fi": 3, "Te": -1 }, "enneagram": { "4": 2, "9": 1 } },
      { "text": "Cherche les mots qui rassemblent.", "i18nKey": "questionnaire.external.q12.option2", "functions": { "Fe": 3, "Ti": -1 }, "enneagram": { "2": 2, "9": 1 } },
      { "text": "Met en avant la structure et le résultat.", "i18nKey": "questionnaire.external.q12.option3", "functions": { "Te": 3, "Fi": -1 }, "enneagram": { "3": 2, "8": 1 } },
      { "text": "Démontre la cohérence logique.", "i18nKey": "questionnaire.external.q12.option4", "functions": { "Ti": 3, "Fe": -1 }, "enneagram": { "1": 1, "5": 2 } }
    ]
  },
  {
    "id": 13,
    "question": "Face à l’erreur votre proche :",
    "i18nKey": "questionnaire.external.q13.title",
    "options": [
      { "text": "Corrige le process durablement.", "i18nKey": "questionnaire.external.q13.option1", "functions": { "Te": 3, "Fi": -1, "Si": 1 }, "enneagram": { "1": 2, "3": 1 } },
      { "text": "Comprend le mécanisme de la faille.", "i18nKey": "questionnaire.external.q13.option2", "functions": { "Ti": 3, "Fe": -1, "Ni": 1 }, "enneagram": { "1": 1, "5": 2 } },
      { "text": "Repère les patterns annonciateurs.", "i18nKey": "questionnaire.external.q13.option3", "functions": { "Ni": 3, "Se": -1 }, "enneagram": { "5": 1, "9": 2 } },
      { "text": "Refait un test concret de sécurité.", "i18nKey": "questionnaire.external.q13.option4", "functions": { "Se": 3, "Ni": -1 }, "enneagram": { "7": 1, "8": 2 } }
    ]
  },
  {
    "id": 14,
    "question": "Le style général de votre proche :",
    "i18nKey": "questionnaire.external.q14.title",
    "options": [
      { "text": "Plutôt stable et régulier(ère).", "i18nKey": "questionnaire.external.q14.option1", "functions": { "Si": 3, "Ne": -1 }, "enneagram": { "1": 1, "6": 2 } },
      { "text": "Plutôt aventureux(se) et curieux(se).", "i18nKey": "questionnaire.external.q14.option2", "functions": { "Ne": 3, "Si": -1 }, "enneagram": { "3": 1, "7": 2 } },
      { "text": "Plutôt visionnaire et synthétique.", "i18nKey": "questionnaire.external.q14.option3", "functions": { "Ni": 3, "Se": -1 }, "enneagram": { "5": 1, "9": 2 } },
      { "text": "Plutôt pragmatique et physique.", "i18nKey": "questionnaire.external.q14.option4", "functions": { "Se": 3, "Ni": -1 }, "enneagram": { "7": 1, "8": 2 } }
    ]
  },
  {
    "id": 15,
    "question": "Dans les débats votre proche :",
    "i18nKey": "questionnaire.external.q15.title",
    "options": [
      { "text": "Reste axé(e) résultats et décisions.", "i18nKey": "questionnaire.external.q15.option1", "functions": { "Te": 3, "Fi": -1 }, "enneagram": { "3": 2, "8": 1 } },
      { "text": "Priorise la clarté conceptuelle.", "i18nKey": "questionnaire.external.q15.option2", "functions": { "Ti": 3, "Fe": -1 }, "enneagram": { "1": 1, "5": 2 } },
      { "text": "Cherche la cohésion et la paix.", "i18nKey": "questionnaire.external.q15.option3", "functions": { "Fe": 3, "Ti": -1 }, "enneagram": { "2": 2, "9": 1 } },
      { "text": "Affirme son authenticité tranquille.", "i18nKey": "questionnaire.external.q15.option4", "functions": { "Fi": 3, "Te": -1 }, "enneagram": { "4": 2, "9": 1 } }
    ]
  },
  {
    "id": 16,
    "question": "Face à la nouveauté :",
    "i18nKey": "questionnaire.external.q16.title",
    "options": [
      { "text": "Observe d’abord les usages établis.", "i18nKey": "questionnaire.external.q16.option1", "functions": { "Si": 3, "Ne": -1 }, "enneagram": { "1": 1, "6": 2 } },
      { "text": "Imagine des variantes originales.", "i18nKey": "questionnaire.external.q16.option2", "functions": { "Ne": 3, "Si": -1, "Ti": 1 }, "enneagram": { "5": 1, "7": 2 } },
      { "text": "Capte rapidement l’intention profonde.", "i18nKey": "questionnaire.external.q16.option3", "functions": { "Ni": 3, "Se": -1 }, "enneagram": { "5": 1, "9": 2 } },
      { "text": "Essaie tout de suite pour sentir.", "i18nKey": "questionnaire.external.q16.option4", "functions": { "Se": 3, "Ni": -1 }, "enneagram": { "7": 1, "8": 2 } }
    ]
  },
  {
    "id": 17,
    "question": "Avec la hiérarchie/les règles :",
    "i18nKey": "questionnaire.external.q17.title",
    "options": [
      { "text": "S’aligne si c’est logique et utile.", "i18nKey": "questionnaire.external.q17.option1", "functions": { "Ti": 3, "Fe": -1 }, "enneagram": { "1": 1, "5": 2 } },
      { "text": "S’aligne si c’est humainement juste.", "i18nKey": "questionnaire.external.q17.option2", "functions": { "Fe": 3, "Ti": -1 }, "enneagram": { "2": 2, "9": 1 } },
      { "text": "S’aligne si c’est efficace pour livrer.", "i18nKey": "questionnaire.external.q17.option3", "functions": { "Te": 3, "Fi": -1 }, "enneagram": { "3": 2, "8": 1 } },
      { "text": "S’aligne si ça respecte ses valeurs.", "i18nKey": "questionnaire.external.q17.option4", "functions": { "Fi": 3, "Te": -1 }, "enneagram": { "4": 2, "9": 1 } }
    ]
  },
  {
    "id": 18,
    "question": "Le style de décision de votre proche :",
    "i18nKey": "questionnaire.external.q18.title",
    "options": [
      { "text": "Pragmatique, terrain d’abord.", "i18nKey": "questionnaire.external.q18.option1", "functions": { "Se": 3, "Ni": -1, "Te": 1 }, "enneagram": { "3": 1, "8": 2 } },
      { "text": "Structuré, étapes et critères.", "i18nKey": "questionnaire.external.q18.option2", "functions": { "Te": 3, "Fi": -1, "Si": 1 }, "enneagram": { "1": 1, "3": 2 } },
      { "text": "Intuitif, capture la direction implicite.", "i18nKey": "questionnaire.external.q18.option3", "functions": { "Ni": 3, "Se": -1 }, "enneagram": { "5": 1, "9": 2 } },
      { "text": "Logique, démontre avant de trancher.", "i18nKey": "questionnaire.external.q18.option4", "functions": { "Ti": 3, "Fe": -1 }, "enneagram": { "1": 1, "5": 2 } }
    ]
  },
  {
    "id": 19,
    "question": "Dans la durée votre proche :",
    "i18nKey": "questionnaire.external.q19.title",
    "options": [
      { "text": "Tient le cap par habitudes solides.", "i18nKey": "questionnaire.external.q19.option1", "functions": { "Si": 3, "Ne": -1 }, "enneagram": { "1": 1, "6": 2 } },
      { "text": "Rafraîchit par des idées nouvelles.", "i18nKey": "questionnaire.external.q19.option2", "functions": { "Ne": 3, "Si": -1 }, "enneagram": { "3": 1, "7": 2 } },
      { "text": "Garde la cohérence de fond.", "i18nKey": "questionnaire.external.q19.option3", "functions": { "Ni": 3, "Se": -1 }, "enneagram": { "5": 1, "9": 2 } },
      { "text": "Assure par des actions tangibles.", "i18nKey": "questionnaire.external.q19.option4", "functions": { "Se": 3, "Ni": -1 }, "enneagram": { "7": 1, "8": 2 } }
    ]
  },
  {
    "id": 20,
    "question": "Ce qu’on retient le plus de lui/elle :",
    "i18nKey": "questionnaire.external.q20.title",
    "options": [
      { "text": "Alignement personnel et intégrité.", "i18nKey": "questionnaire.external.q20.option1", "functions": { "Fi": 3, "Te": -1 }, "enneagram": { "4": 2, "9": 1 } },
      { "text": "Soutien relationnel et fédération.", "i18nKey": "questionnaire.external.q20.option2", "functions": { "Fe": 3, "Ti": -1 }, "enneagram": { "2": 2, "9": 1 } },
      { "text": "Capacité à délivrer et organiser.", "i18nKey": "questionnaire.external.q20.option3", "functions": { "Te": 3, "Fi": -1 }, "enneagram": { "3": 2, "8": 1 } },
      { "text": "Clarté intellectuelle et précision.", "i18nKey": "questionnaire.external.q20.option4", "functions": { "Ti": 3, "Fe": -1 }, "enneagram": { "1": 1, "5": 2 } }
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

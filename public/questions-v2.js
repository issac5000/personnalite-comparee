const AUTO_QUESTIONS = [
  {
    "id": 1,      
    "question": "Quelle citation reflète le mieux ta vision du monde ?",
    "i18nKey": "questionnaire.auto.q1.title",
    "options": [
      {
        "text": "« L’esprit est gouverné par la logique. »",
        "i18nKey": "questionnaire.auto.q1.option1",
        "functions": { "Ti": 3, "Te": 3, "Fe": -3, "Fi": -3 },
        "enneagram": { "5": 2, "6": 1, "7": 2, "2": -3, "4": -3 }
      },
      {
        "text": "« La vérité est d’abord une question de subjectivité. »",
        "i18nKey": "questionnaire.auto.q1.option2",
        "functions": { "Fi": 3, "Fe": 3, "Ti": -3, "Te": -3 },
        "enneagram": { "2": 3, "4": 2, "9": 3, "5": -3, "6": -2, "7": -2 }
      }
    ]
  },
  {
    "id": 2,     
    "question": "Laquelle de ces suites de mots te correspond le plus ?",
    "i18nKey": "questionnaire.auto.q2.title",
    "options": [
      {
        "text": "valeurs, authenticité, intégrité, conviction, profondeur, identité, cohérence, intériorité, sensibilité",
        "i18nKey": "questionnaire.auto.q2.option1",
        "functions": { "Fi": 3, "Fe": 1, "Te": -3, "Ti": -1 },
        "enneagram": { "4": 3, "9": 1 }
      },
      {
        "text": "harmonie, relation, consensus, empathie, coopération, chaleur, soutien, adaptation, inclusion",
        "i18nKey": "questionnaire.auto.q2.option2",
        "functions": { "Fe": 3, "Fi": 1, "Ti": -3, "Te": -1 },
        "enneagram": { "2": 3, "9": 1 }
      },
      {
        "text": "logique, analyse, structure, précision, objectivité, réflexion, schémas, clarté, scepticisme",
        "i18nKey": "questionnaire.auto.q2.option3",
        "functions": { "Ti": 3, "Te": 1, "Fe": -3, "Fi": -1 },
        "enneagram": { "5": 3, "6": 1 }
      },
      {
        "text": "efficacité, organisation, performance, stratégie, planification, action, mesure, pragmatisme",
        "i18nKey": "questionnaire.auto.q2.option4",
        "functions": { "Te": 2, "Ti": 1, "Fi": -3, "Fe": -1 },
        "enneagram": { "3": 3, "8": 2 }
      }
    ]
  },
  {
    "id": 3,    
    "question": "Laquelle de ces affirmations te correspond le plus ?",
    "i18nKey": "questionnaire.auto.q3.title",
    "options": [
      {
        "text": "« Qui ne tente rien n’a rien. »",
        "i18nKey": "questionnaire.auto.q3.option1",
        "functions": { "Se": 3, "Ne": 3, "Ni": -3, "Si": -1 },
        "enneagram": { "8": 1, "3": 2 }
      },
      {
        "text": "« Mieux vaut prévenir que guérir. »",
        "i18nKey": "questionnaire.auto.q3.option2",
        "functions": { "Si": 2, "Ni": 2, "Ne": -3, "Se": -1 },
        "enneagram": { "6": 1, "1": 1 }
      }
    ]
  },
  {
    "id": 4,    
    "question": "Laquelle de ces suites de mots te décrit le mieux ?",
    "i18nKey": "questionnaire.auto.q4.title",
    "options": [
      {
        "text": "vision, symboles, anticipation, signification, futur, profondeur, connexion, synthèse, destin, révélation",
        "i18nKey": "questionnaire.auto.q4.option1",
        "functions": { "Ni": 4, "Se": -3 },
        "enneagram": { "9": 1 }
      },
      {
        "text": "possibilités, idées, associations, créativité, improvisation, ouverture, exploration, adaptation",
        "i18nKey": "questionnaire.auto.q4.option2",
        "functions": { "Ne": 3, "Se": 1, "Si": -3 },
        "enneagram": { "4": 1, "7": 1 }
      },
      {
        "text": "mémoire, habitude, tradition, stabilité, sécurité, expérience, repères, constance, confort",
        "i18nKey": "questionnaire.auto.q4.option3",
        "functions": { "Si": 2, "Ni": 3, "Ne": -3, "Se": -1 },
        "enneagram": { "6": 2, "1": 2 }
      },
      {
        "text": "action, spontanéité, intensité, plaisir, présence, expérimentation, réactivité, mouvement",
        "i18nKey": "questionnaire.auto.q4.option4",
        "functions": { "Se": 3, "Ne": 2, "Ni": -3, "Si": -1 },
        "enneagram": { "8": 1, "7": 2 }
      }
    ]
  },
  {
    "id": 5,   
    "question": "Laquelle de ces descriptions reflète le mieux ta motivation profonde ?",
    "i18nKey": "questionnaire.auto.q5.title",
    "options": [
      {
        "text": "Être aligné avec qui je suis",
        "i18nKey": "questionnaire.auto.q5.option1",
        "functions": { "Fi": 3, "Ti": 1, "Te": -3, "Fe": -1 },
        "enneagram": { "4": 2 }
      },
      {
        "text": "Élever les autres et renforcer la relation",
        "i18nKey": "questionnaire.auto.q5.option2",
        "functions": { "Fe": 3, "Te": 1, "Ti": -3, "Fi": -1 },
        "enneagram": { "2": 3 }
      },
      {
        "text": "Obtenir des résultats concrets",
        "i18nKey": "questionnaire.auto.q5.option3",
        "functions": { "Te": 2 },
        "enneagram": { "3": 3, "8": 2 }
      },
      {
        "text": "Comprendre et clarifier le vrai",
        "i18nKey": "questionnaire.auto.q5.option4",
        "functions": { "Ti": 3, "Te": 1, "Fe": -3, "Fi": -1 },
        "enneagram": { "5": 2, "6": 1, "7": 1 }
      }
    ]
  },
  {
  "id": 6,
  "question": "Laquelle de ces suites de mots te correspond le plus ?",
  "i18nKey": "questionnaire.auto.q6.title",
  "options": [
    {
      "text": "identité, authenticité, émotion, originalité, profondeur, intensité, beauté, singularité, sensibilité, mélancolie",
      "i18nKey": "questionnaire.auto.q6.option1",
      "functions": { "Fi": 3, "Fe": 1, "Te": -4, "Ti": -1 },
      "enneagram": { "4": 3, "9": 1 }
    },
    {
      "text": "savoir, analyse, logique, autonomie, réflexion, compréhension, objectivité, réserve, curiosité",
      "i18nKey": "questionnaire.auto.q6.option2",
      "functions": { "Ti": 4, "Te": 1, "Fe": -4, "Fi": -1 },
      "enneagram": { "5": 2, "6": 1 }
    },
    {
      "text": "sécurité, loyauté, doute, prudence, engagement, peur, soutien, solidarité, fiabilité, vigilance",
      "i18nKey": "questionnaire.auto.q6.option3",
      "functions": { "Si": 3, "Te": 1, "Fe": -4, "Fi": -1 },
      "enneagram": { "6": 3, "1": 2 }
    }
  ]
},
{
    "id": 7,  
    "question": "Quel type de personnalité se rapproche le plus de toi ?",
    "i18nKey": "questionnaire.auto.q7.title",
    "options": [
      {
        "text": "perfection, règles, discipline, éthique, ordre, rigueur, structure, responsabilité",
        "i18nKey": "questionnaire.auto.q7.option1",
        "functions": { "Si": 3, "Te": 2, "Ne": -2, "Se": -2 },
        "enneagram": { "1": 5 }
      },
      {
        "text": "aide, amour, soutien, empathie, chaleur, écoute, générosité",
        "i18nKey": "questionnaire.auto.q7.option2",
        "functions": { "Fe": 3, "Fi": 1, "Ti": -3, "Te": -1 },
        "enneagram": { "2": 4, "9": 2 }
      },
      {
        "text": "succès, ambition, productivité, motivation, efficacité, reconnaissance",
        "i18nKey": "questionnaire.auto.q7.option3",
        "functions": { "Te": 1, "Fe": 1, "Ti": -1, "Fi": -1 },
        "enneagram": { "3": 4 }
      }
    ]
  },
  {
    "id": 8,   
    "question": "Laquelle de ces suites de mots te correspond le plus ?",
    "i18nKey": "questionnaire.auto.q8.title",
    "options": [
      {
        "text": "plaisir, optimisme, spontanéité, variété, liberté, imagination, fun, enthousiasme",
        "i18nKey": "questionnaire.auto.q8.option1",
        "functions": { "Se": 3 },
        "enneagram": { "7": 4 }
      },
      {
        "text": "puissance, intensité, autorité, indépendance, confrontation, énergie, protection",
        "i18nKey": "questionnaire.auto.q8.option2",
        "functions": { "Te": 2, "Fi": -3 },
        "enneagram": { "8": 4 }
      },
      {
        "text": "paix, harmonie, stabilité, confort, patience, acceptation, union, réceptivité",
        "i18nKey": "questionnaire.auto.q8.option3",
        "functions": { "Fe": 3, "Ti": -3 },
        "enneagram": { "9": 4 }
      }
    ]
  },
  {
    "id": 9,   
    "question": "Entre ces deux façons de vivre, laquelle te parle le plus ?",
    "i18nKey": "questionnaire.auto.q9.title",
    "options": [
      {
        "text": "Vivre chaque jour comme le dernier",
        "i18nKey": "questionnaire.auto.q9.option1",
        "functions": { "Se": 3, "Ne": 3, "Ni": -3, "Si": -3 },
        "enneagram": { "7": 2, "8": 1 }
      },
      {
        "text": "Planifier pour réussir",
        "i18nKey": "questionnaire.auto.q9.option2",
        "functions": { "Si": 3, "Ni": 4, "Ne": -3, "Se": -3 },
        "enneagram": { "1": 2, "6": 1 }
      }
    ]
  },
  {
    "id": 10,    
    "question": "Lequel de ces proverbes te parle le plus ?",
    "i18nKey": "questionnaire.auto.q10.title",
    "options": [
      {
        "text": "« Le sourire que tu donnes revient vers toi. »",
        "i18nKey": "questionnaire.auto.q10.option1",
        "functions": { "Fi": 2, "Fe": 2, "Te": -2, "Ti": -2 },
        "enneagram": { "2": 1, "9": 2 }
      },
      {
        "text": "« La logique est l’art du vrai. »",
        "i18nKey": "questionnaire.auto.q10.option2",
        "functions": { "Te": 2, "Ti": 3, "Fi": -2, "Fe": -2 },
        "enneagram": { "5": 2, "6": 1 }
      }
    ]
  },
  {
    "id": 11,   
    "question": "Quel style te ressemble le plus ?",
    "i18nKey": "questionnaire.auto.q11.title",
    "options": [
      {
        "text": "Plutôt stable et régulier(ère)",
        "i18nKey": "questionnaire.auto.q11.option1",
        "functions": { "Si": 3, "Ni": 2, "Ne": -3, "Se": -1 },
        "enneagram": { "6": 1, "1": 2 }
      },
      {
        "text": "Plutôt aventureux(se) et curieux(se)",
        "i18nKey": "questionnaire.auto.q11.option2",
        "functions": { "Se": 3, "Ne": 3, "Ni": -3, "Si": -1 },
        "enneagram": { "8": 1, "7": 2 }
      },
      {
        "text": "Plutôt visionnaire et synthétique",
        "i18nKey": "questionnaire.auto.q11.option3",
        "functions": { "Ni": 3, "Se": -3 },
        "enneagram": { "6": 1, "5": 1 }
      },
      {
        "text": "Plutôt créatif(ve) et ouvert(e) aux possibilités",
        "i18nKey": "questionnaire.auto.q11.option4",
        "functions": { "Ne": 3, "Se": 1, "Si": -3 },
        "enneagram": { "4": 2, "7": 2 }
      }
    ]
  },
  {
    "id": 12,    
    "question": "Quel rapport as-tu avec les règles ?",
    "i18nKey": "questionnaire.auto.q12.title",
    "options": [
      {
        "text": "Je m’appuie dessus pour sécuriser",
        "i18nKey": "questionnaire.auto.q12.option1",
        "functions": { "Si": 3, "Ni": 2, "Ne": -3, "Se": -1 },
        "enneagram": { "6": 3, "1": 2 }
      },
      {
        "text": "Je les change si elles freinent le résultat",
        "i18nKey": "questionnaire.auto.q12.option2",
        "functions": { "Te": 2, "Ti": 1, "Fi": -1, "Fe": -1 },
        "enneagram": { "3": 2, "8": 3 }
      },
      {
        "text": "Je les discute si elles sont illogiques",
        "i18nKey": "questionnaire.auto.q12.option3",
        "functions": { "Ti": 2, "Te": 1, "Fe": -2, "Fi": -1 },
        "enneagram": { "5": 2 }
      },
      {
        "text": "Je m’en écarte si elles heurtent mes valeurs",
        "i18nKey": "questionnaire.auto.q12.option4",
        "functions": { "Fi": 3, "Te": -3 },
        "enneagram": { "4": 2 }
      }
    ]
  },
  {
    "id": 13,    
    "question": "Laquelle de ces expressions te parle le plus ?",
    "i18nKey": "questionnaire.auto.q13.title",
    "options": [
      {
        "text": "« Une image vaut mille mots »",
        "i18nKey": "questionnaire.auto.q13.option1",
        "functions": { "Si": 2, "Se": 2, "Ne": -2, "Ni": -2 },
        "enneagram": { "6": 1 }
      },
      {
        "text": "« Une idée vaut mille images »",
        "i18nKey": "questionnaire.auto.q13.option2",
        "functions": { "Ni": 2, "Ne": 2, "Si": -2, "Se": -2 },
        "enneagram": {}
      }
    ]
  },
  {
    "id": 14,   
    "question": "Quel proverbe reflète le mieux ta personnalité ?",
    "i18nKey": "questionnaire.auto.q14.title",
    "options": [
      {
        "text": "« Rester les pieds sur terre »",
        "i18nKey": "questionnaire.auto.q14.option1",
        "functions": { "Si": 2, "Se": 2, "Ne": -2, "Ni": -2 },
        "enneagram": {}
      },
      {
        "text": "« Avoir la tête dans les étoiles »",
        "i18nKey": "questionnaire.auto.q14.option2",
        "functions": { "Ni": 2, "Ne": 2, "Si": -2, "Se": -2 },
        "enneagram": {}
      }
    ]
  },
  {
    "id": 15,    
    "question": "Tu te considères comme quelqu’un de…",
    "i18nKey": "questionnaire.auto.q15.title",
    "options": [
      {
        "text": "Plutôt rationnel",
        "i18nKey": "questionnaire.auto.q15.option1",
        "functions": { "Ti": 2, "Te": 1, "Fe": -2, "Fi": -1 },
        "enneagram": { "5": 2 }
      },
      {
        "text": "Plutôt émotionnel",
        "i18nKey": "questionnaire.auto.q15.option2",
        "functions": { "Fi": 2, "Fe": 1, "Te": -2, "Ti": -1 },
        "enneagram": { "4": 1 }
      }
    ]
  },
  {
    "id": 16,   
    "question": "Laquelle de ces capacités te représente le mieux ?",
    "i18nKey": "questionnaire.auto.q16.title",
    "options": [
      {
        "text": "Alignement personnel et intégrité",
        "i18nKey": "questionnaire.auto.q16.option1",
        "functions": { "Fi": 4, "Te": -3 },
        "enneagram": { "4": 2, "9": 1 }
      },
      {
        "text": "Soutien relationnel et accompagnement",
        "i18nKey": "questionnaire.auto.q16.option2",
        "functions": { "Fe": 4, "Ti": -3 },
        "enneagram": { "2": 3, "9": 1 }
      },
      {
        "text": "Capacité à produire et organiser",
        "i18nKey": "questionnaire.auto.q16.option3",
        "functions": { "Te": 2, "Fi": -3 },
        "enneagram": { "3": 2, "8": 2 }
      },
      {
        "text": "Clarté intellectuelle et précision",
        "i18nKey": "questionnaire.auto.q16.option4",
        "functions": { "Ti": 3, "Te": 1, "Fe": -3, "Fi": -1 },
        "enneagram": { "5": 2, "6": 1 }
      }
    ]
  },
  {
  "id": 17,
  "question": "Vous vous qualifiez comme quelqu’un de :",
  "i18nKey": "questionnaire.auto.q17.title",
  "options": [
    {
      "text": "Plutôt terre-à-terre",
      "i18nKey": "questionnaire.auto.q17.option1",
      "functions": { "Si": 2, "Se": 2, "Ne": -2, "Ni": -2 },
      "enneagram": {}
    },
    {
      "text": "Plutôt évasif",
      "i18nKey": "questionnaire.auto.q17.option2",
      "functions": { "Ni": 2, "Ne": 2, "Si": -2, "Se": -2 },
      "enneagram": {}
    }
  ]
},
{
  "id": 18,
  "question": "Je me considère comme quelqu’un :",
  "i18nKey": "questionnaire.auto.q18.title",
  "options": [
    {
      "text": "D’introverti",
      "i18nKey": "questionnaire.auto.q18.option1",
      "functions": { "Si": 4, "Ni": 4, "Fi": 4, "Ti": 4, "Ne": -4, "Se": -4, "Fe": -4, "Te": -4 },
      "enneagram": {}
    },
    {
      "text": "D’extraverti",
      "i18nKey": "questionnaire.auto.q18.option2",
      "functions": { "Se": 4, "Ne": 4, "Fe": 4, "Te": 4, "Ni": -4, "Si": -4, "Fi": -4, "Ti": -4 },
      "enneagram": {}
    }
  ]
},
{
  "id": 19,
  "question": "Quand tu prends une décision importante, ta motivation principale est…",
  "i18nKey": "questionnaire.auto.q19.title",
  "options": [
    {
      "text": "Faire ce qui est juste, même si c’est difficile",
      "i18nKey": "questionnaire.auto.q19.option1",
      "functions": { },
      "enneagram": { "1": 5 }
    },
    {
      "text": "Aider, soutenir et être indispensable aux autres",
      "i18nKey": "questionnaire.auto.q19.option2",
      "functions": { },
      "enneagram": { "2": 4 }
    },
    {
      "text": "Réussir, atteindre mes objectifs et être reconnu",
      "i18nKey": "questionnaire.auto.q19.option3",
      "functions": { },
      "enneagram": { "3": 4 }
    },
    {
      "text": "Protéger mon indépendance et mes émotions",
      "i18nKey": "questionnaire.auto.q19.option4",
      "functions": { },
      "enneagram": { "4": 4 }
    }
  ]
},
{
  "id": 20,
  "question": "Ton plus grand moteur intérieur, c’est…",
  "i18nKey": "questionnaire.auto.q20.title",
  "options": [
    {
      "text": "Chercher à comprendre, analyser et trouver la vérité",
      "i18nKey": "questionnaire.auto.q20.option1",
      "functions": { },
      "enneagram": { "5": 3 }
    },
    {
      "text": "Sécuriser mon avenir et éviter les imprévus",
      "i18nKey": "questionnaire.auto.q20.option2",
      "functions": { },
      "enneagram": { "6": 3 }
    },
    {
      "text": "Profiter de la vie, explorer et multiplier les expériences",
      "i18nKey": "questionnaire.auto.q20.option3",
      "functions": { },
      "enneagram": { "7": 4 }
    },
    {
      "text": "Avoir le contrôle, prendre les devants et diriger",
      "i18nKey": "questionnaire.auto.q20.option4",
      "functions": { },
      "enneagram": { "8": 4 }
    },
    {
      "text": "Préserver la paix, éviter les conflits et rester serein",
      "i18nKey": "questionnaire.auto.q20.option5",
      "functions": { },
      "enneagram": { "9": 4 }
    }
  ]
}
];

const EXTERNAL_QUESTIONS = [
  
    {
      "id": 1,
      "question": "Quelle citation reflète le mieux la vision du monde de votre proche ?",
      "i18nKey": "questionnaire.ext.q1.title",
      "options": [
        {
          "text": "« L’esprit est gouverné par la logique. »",
          "i18nKey": "questionnaire.ext.q1.option1",
          "functions": { "Ti": 3, "Te": 3, "Fe": -3, "Fi": -3 },
          "enneagram": { "5": 2, "6": 1, "7": 2, "2": -3, "4": -3 }
        },
        {
          "text": "« La vérité est d’abord une question de subjectivité. »",
          "i18nKey": "questionnaire.ext.q1.option2",
          "functions": { "Fi": 3, "Fe": 3, "Ti": -3, "Te": -3 },
          "enneagram": { "2": 3, "4": 2, "9": 3, "5": -3, "6": -2, "7": -2 }
        }
      ]
    },
    {
      "id": 2,
      "question": "Laquelle de ces suites de mots correspond le plus à votre proche ?",
      "i18nKey": "questionnaire.ext.q2.title",
      "options": [
        {
          "text": "valeurs, authenticité, intégrité, conviction, profondeur, identité, cohérence, intériorité, sensibilité",
          "i18nKey": "questionnaire.ext.q2.option1",
          "functions": { "Fi": 3, "Fe": 1, "Te": -3, "Ti": -1 },
          "enneagram": { "4": 3, "9": 1 }
        },
        {
          "text": "harmonie, relation, consensus, empathie, coopération, chaleur, soutien, adaptation, inclusion",
          "i18nKey": "questionnaire.ext.q2.option2",
          "functions": { "Fe": 3, "Fi": 1, "Ti": -3, "Te": -1 },
          "enneagram": { "2": 3, "9": 1 }
        },
        {
          "text": "logique, analyse, structure, précision, objectivité, réflexion, schémas, clarté, scepticisme",
          "i18nKey": "questionnaire.ext.q2.option3",
          "functions": { "Ti": 3, "Te": 1, "Fe": -3, "Fi": -1 },
          "enneagram": { "5": 3, "6": 1 }
        },
        {
          "text": "efficacité, organisation, performance, stratégie, planification, action, mesure, pragmatisme",
          "i18nKey": "questionnaire.ext.q2.option4",
          "functions": { "Te": 2, "Ti": 1, "Fi": -3, "Fe": -1 },
          "enneagram": { "3": 3, "8": 2 }
        }
      ]
    },
    {
      "id": 3,
      "question": "Laquelle de ces affirmations correspond le plus à votre proche ?",
      "i18nKey": "questionnaire.ext.q3.title",
      "options": [
        {
          "text": "« Qui ne tente rien n’a rien. »",
          "i18nKey": "questionnaire.ext.q3.option1",
          "functions": { "Se": 3, "Ne": 3, "Ni": -3, "Si": -1 },
          "enneagram": { "8": 1, "3": 2 }
        },
        {
          "text": "« Mieux vaut prévenir que guérir. »",
          "i18nKey": "questionnaire.ext.q3.option2",
          "functions": { "Si": 2, "Ni": 2, "Ne": -3, "Se": -1 },
          "enneagram": { "6": 1, "1": 1 }
        }
      ]
    },
    {
      "id": 4,
      "question": "Laquelle de ces suites de mots décrit le mieux votre proche ?",
      "i18nKey": "questionnaire.ext.q4.title",
      "options": [
        {
          "text": "vision, symboles, anticipation, signification, futur, profondeur, connexion, synthèse, destin, révélation",
          "i18nKey": "questionnaire.ext.q4.option1",
          "functions": { "Ni": 4, "Se": -3 },
          "enneagram": { "9": 1 }
        },
        {
          "text": "possibilités, idées, associations, créativité, improvisation, ouverture, exploration, adaptation",
          "i18nKey": "questionnaire.ext.q4.option2",
          "functions": { "Ne": 3, "Se": 1, "Si": -3 },
          "enneagram": { "4": 1, "7": 1 }
        },
        {
          "text": "mémoire, habitude, tradition, stabilité, sécurité, expérience, repères, constance, confort",
          "i18nKey": "questionnaire.ext.q4.option3",
          "functions": { "Si": 2, "Ni": 3, "Ne": -3, "Se": -1 },
          "enneagram": { "6": 2, "1": 2 }
        },
        {
          "text": "action, spontanéité, intensité, plaisir, présence, expérimentation, réactivité, mouvement",
          "i18nKey": "questionnaire.ext.q4.option4",
          "functions": { "Se": 3, "Ne": 2, "Ni": -3, "Si": -1 },
          "enneagram": { "8": 1, "7": 2 }
        }
      ]
    },
    {
      "id": 5,
      "question": "Laquelle de ces descriptions reflète le mieux la motivation profonde de votre proche ?",
      "i18nKey": "questionnaire.ext.q5.title",
      "options": [
        {
          "text": "Être aligné avec qui il/elle est",
          "i18nKey": "questionnaire.ext.q5.option1",
          "functions": { "Fi": 3, "Ti": 1, "Te": -3, "Fe": -1 },
          "enneagram": { "4": 2 }
        },
        {
          "text": "Élever les autres et renforcer la relation",
          "i18nKey": "questionnaire.ext.q5.option2",
          "functions": { "Fe": 3, "Te": 1, "Ti": -3, "Fi": -1 },
          "enneagram": { "2": 3 }
        },
        {
          "text": "Obtenir des résultats concrets",
          "i18nKey": "questionnaire.ext.q5.option3",
          "functions": { "Te": 2 },
          "enneagram": { "3": 3, "8": 2 }
        },
        {
          "text": "Comprendre et clarifier le vrai",
          "i18nKey": "questionnaire.ext.q5.option4",
          "functions": { "Ti": 3, "Te": 1, "Fe": -3, "Fi": -1 },
          "enneagram": { "5": 2, "6": 1, "7": 1 }
        }
      ]
    },
    {
      "id": 6,
      "question": "Laquelle de ces suites de mots correspond le plus à votre proche ?",
      "i18nKey": "questionnaire.ext.q6.title",
      "options": [
        {
          "text": "identité, authenticité, émotion, originalité, profondeur, intensité, beauté, singularité, sensibilité, mélancolie",
          "i18nKey": "questionnaire.ext.q6.option1",
          "functions": { "Fi": 3, "Fe": 1, "Te": -4, "Ti": -1 },
          "enneagram": { "4": 3, "9": 1 }
        },
        {
          "text": "savoir, analyse, logique, autonomie, réflexion, compréhension, objectivité, réserve, curiosité",
          "i18nKey": "questionnaire.ext.q6.option2",
          "functions": { "Ti": 4, "Te": 1, "Fe": -4, "Fi": -1 },
          "enneagram": { "5": 2, "6": 1 }
        },
        {
          "text": "sécurité, loyauté, doute, prudence, engagement, peur, soutien, solidarité, fiabilité, vigilance",
          "i18nKey": "questionnaire.ext.q6.option3",
          "functions": { "Si": 3, "Te": 1, "Fe": -4, "Fi": -1 },
          "enneagram": { "6": 3, "1": 2 }
        }
      ]
    },
    {
      "id": 7,
      "question": "Quel type de personnalité se rapproche le plus de votre proche ?",
      "i18nKey": "questionnaire.ext.q7.title",
      "options": [
        {
          "text": "perfection, règles, discipline, éthique, ordre, rigueur, structure, responsabilité",
          "i18nKey": "questionnaire.ext.q7.option1",
          "functions": { "Si": 3, "Te": 2, "Ne": -2, "Se": -2 },
          "enneagram": { "1": 5 }
        },
        {
          "text": "aide, amour, soutien, empathie, chaleur, écoute, générosité",
          "i18nKey": "questionnaire.ext.q7.option2",
          "functions": { "Fe": 3, "Fi": 1, "Ti": -3, "Te": -1 },
          "enneagram": { "2": 4, "9": 2 }
        },
        {
          "text": "succès, ambition, productivité, motivation, efficacité, reconnaissance",
          "i18nKey": "questionnaire.ext.q7.option3",
          "functions": { "Te": 1, "Fe": 1, "Ti": -1, "Fi": -1 },
          "enneagram": { "3": 4 }
        }
      ]
    },
    {
      "id": 8,
      "question": "Laquelle de ces suites de mots correspond le plus à votre proche ?",
      "i18nKey": "questionnaire.ext.q8.title",
      "options": [
        {
          "text": "plaisir, optimisme, spontanéité, variété, liberté, imagination, fun, enthousiasme",
          "i18nKey": "questionnaire.ext.q8.option1",
          "functions": { "Se": 3 },
          "enneagram": { "7": 4 }
        },
        {
          "text": "puissance, intensité, autorité, indépendance, confrontation, énergie, protection",
          "i18nKey": "questionnaire.ext.q8.option2",
          "functions": { "Te": 2, "Fi": -3 },
          "enneagram": { "8": 4 }
        },
        {
          "text": "paix, harmonie, stabilité, confort, patience, acceptation, union, réceptivité",
          "i18nKey": "questionnaire.ext.q8.option3",
          "functions": { "Fe": 3, "Ti": -3 },
          "enneagram": { "9": 4 }
        }
      ]
    },
    {
      "id": 9,
      "question": "Entre ces deux façons de vivre, laquelle correspond le plus à votre proche ?",
      "i18nKey": "questionnaire.ext.q9.title",
      "options": [
        {
          "text": "Vivre chaque jour comme le dernier",
          "i18nKey": "questionnaire.ext.q9.option1",
          "functions": { "Se": 3, "Ne": 3, "Ni": -3, "Si": -3 },
          "enneagram": { "7": 2, "8": 1 }
        },
        {
          "text": "Planifier pour réussir",
          "i18nKey": "questionnaire.ext.q9.option2",
          "functions": { "Si": 3, "Ni": 4, "Ne": -3, "Se": -3 },
          "enneagram": { "1": 2, "6": 1 }
        }
      ]
    },
    {
      "id": 10,
      "question": "Lequel de ces proverbes parle le plus à votre proche ?",
      "i18nKey": "questionnaire.ext.q10.title",
      "options": [
        {
          "text": "« Le sourire que tu donnes revient vers toi. »",
          "i18nKey": "questionnaire.ext.q10.option1",
          "functions": { "Fi": 2, "Fe": 2, "Te": -2, "Ti": -2 },
          "enneagram": { "2": 1, "9": 2 }
        },
        {
          "text": "« La logique est l’art du vrai. »",
          "i18nKey": "questionnaire.ext.q10.option2",
          "functions": { "Te": 2, "Ti": 3, "Fi": -2, "Fe": -2 },
          "enneagram": { "5": 2, "6": 1 }
        }
      ]
    },
  {
    "id": 11,
    "question": "Quel style ressemble le plus à votre proche ?",
    "i18nKey": "questionnaire.ext.q11.title",
    "options": [
      {
        "text": "Plutôt stable et régulier(ère)",
        "i18nKey": "questionnaire.ext.q11.option1",
        "functions": { "Si": 3, "Ni": 2, "Ne": -3, "Se": -1 },
        "enneagram": { "6": 1, "1": 2 }
      },
      {
        "text": "Plutôt aventureux(se) et curieux(se)",
        "i18nKey": "questionnaire.ext.q11.option2",
        "functions": { "Se": 3, "Ne": 3, "Ni": -3, "Si": -1 },
        "enneagram": { "8": 1, "7": 2 }
      },
      {
        "text": "Plutôt visionnaire et synthétique",
        "i18nKey": "questionnaire.ext.q11.option3",
        "functions": { "Ni": 3, "Se": -3 },
        "enneagram": { "6": 1, "5": 1 }
      },
      {
        "text": "Plutôt créatif(ve) et ouvert(e) aux possibilités",
        "i18nKey": "questionnaire.ext.q11.option4",
        "functions": { "Ne": 3, "Se": 1, "Si": -3 },
        "enneagram": { "4": 2, "7": 2 }
      }
    ]
  },
  {
    "id": 12,
    "question": "Quel rapport votre proche entretient-il/elle avec les règles ?",
    "i18nKey": "questionnaire.ext.q12.title",
    "options": [
      {
        "text": "Il/elle s’appuie dessus pour sécuriser",
        "i18nKey": "questionnaire.ext.q12.option1",
        "functions": { "Si": 3, "Ni": 2, "Ne": -3, "Se": -1 },
        "enneagram": { "6": 3, "1": 2 }
      },
      {
        "text": "Il/elle les change si elles freinent le résultat",
        "i18nKey": "questionnaire.ext.q12.option2",
        "functions": { "Te": 2, "Ti": 1, "Fi": -1, "Fe": -1 },
        "enneagram": { "3": 2, "8": 3 }
      },
      {
        "text": "Il/elle les discute si elles sont illogiques",
        "i18nKey": "questionnaire.ext.q12.option3",
        "functions": { "Ti": 2, "Te": 1, "Fe": -2, "Fi": -1 },
        "enneagram": { "5": 2 }
      },
      {
        "text": "Il/elle s’en écarte si elles heurtent ses valeurs",
        "i18nKey": "questionnaire.ext.q12.option4",
        "functions": { "Fi": 3, "Te": -3 },
        "enneagram": { "4": 2 }
      }
    ]
  },
  {
    "id": 13,
    "question": "Laquelle de ces expressions décrit le mieux votre proche ?",
    "i18nKey": "questionnaire.ext.q13.title",
    "options": [
      {
        "text": "« Une image vaut mille mots »",
        "i18nKey": "questionnaire.ext.q13.option1",
        "functions": { "Si": 2, "Se": 2, "Ne": -2, "Ni": -2 },
        "enneagram": { "6": 1 }
      },
      {
        "text": "« Une idée vaut mille images »",
        "i18nKey": "questionnaire.ext.q13.option2",
        "functions": { "Ni": 2, "Ne": 2, "Si": -2, "Se": -2 },
        "enneagram": { "4": 1 }
      }
    ]
  },
  {
    "id": 14,
    "question": "Quel proverbe reflète le mieux la personnalité de votre proche ?",
    "i18nKey": "questionnaire.ext.q14.title",
    "options": [
      {
        "text": "« Rester les pieds sur terre »",
        "i18nKey": "questionnaire.ext.q14.option1",
        "functions": { "Si": 2, "Se": 2, "Ne": -2, "Ni": -2 },
        "enneagram": {}
      },
      {
        "text": "« Avoir la tête dans les étoiles »",
        "i18nKey": "questionnaire.ext.q14.option2",
        "functions": { "Ni": 2, "Ne": 2, "Si": -2, "Se": -2 },
        "enneagram": {}
      }
    ]
  },
  {
    "id": 15,
    "question": "Diriez-vous que votre proche est plutôt…",
    "i18nKey": "questionnaire.ext.q15.title",
    "options": [
      {
        "text": "Rationnel",
        "i18nKey": "questionnaire.ext.q15.option1",
        "functions": { "Ti": 3, "Te": 1, "Fe": -2, "Fi": -1 },
        "enneagram": { "5": 2 }
      },
      {
        "text": "Émotionnel",
        "i18nKey": "questionnaire.ext.q15.option2",
        "functions": { "Fi": 2, "Fe": 1, "Te": -2, "Ti": -1 },
        "enneagram": { "4": 1 }
      }
    ]
  },
  {
    "id": 16,
    "question": "Laquelle de ces capacités représente le mieux votre proche ?",
    "i18nKey": "questionnaire.ext.q16.title",
    "options": [
      {
        "text": "Alignement personnel et intégrité",
        "i18nKey": "questionnaire.ext.q16.option1",
        "functions": { "Fi": 4, "Te": -3 },
        "enneagram": { "4": 2, "9": 1 }
      },
      {
        "text": "Soutien relationnel et accompagnement",
        "i18nKey": "questionnaire.ext.q16.option2",
        "functions": { "Fe": 4, "Ti": -3 },
        "enneagram": { "2": 3, "9": 1 }
      },
      {
        "text": "Capacité à produire et organiser",
        "i18nKey": "questionnaire.ext.q16.option3",
        "functions": { "Te": 2, "Fi": -3 },
        "enneagram": { "3": 2, "8": 2 }
      },
      {
        "text": "Clarté intellectuelle et précision",
        "i18nKey": "questionnaire.ext.q16.option4",
        "functions": { "Ti": 3, "Te": 1, "Fe": -3, "Fi": -1 },
        "enneagram": { "5": 2, "6": 1 }
      }
    ]
  },
  {
    "id": 17,
    "question": "Vous qualifieriez votre proche comme quelqu’un de…",
    "i18nKey": "questionnaire.ext.q17.title",
    "options": [
      {
        "text": "Plutôt terre-à-terre",
        "i18nKey": "questionnaire.ext.q17.option1",
        "functions": { "Si": 2, "Se": 2, "Ne": -2, "Ni": -2 },
        "enneagram": {}
      },
      {
        "text": "Plutôt évasif",
        "i18nKey": "questionnaire.ext.q17.option2",
        "functions": { "Ni": 2, "Ne": 2, "Si": -2, "Se": -2 },
        "enneagram": {}
      }
    ]
  },
  {
    "id": 18,
    "question": "Diriez-vous que votre proche est plutôt…",
    "i18nKey": "questionnaire.ext.q18.title",
    "options": [
      {
        "text": "Introverti",
        "i18nKey": "questionnaire.ext.q18.option1",
        "functions": { "Si": 4, "Ni": 4, "Fi": 4, "Ti": 4, "Ne": -4, "Se": -4, "Fe": -4, "Te": -4 },
        "enneagram": {}
      },
      {
        "text": "Extraverti",
        "i18nKey": "questionnaire.ext.q18.option2",
        "functions": { "Se": 4, "Ne": 4, "Fe": 4, "Te": 4, "Ni": -4, "Si": -4, "Fi": -4, "Ti": -4 },
        "enneagram": {}
      }
    ]
  },
  {
    "id": 19,
    "question": "Quand votre proche prend une décision importante, sa motivation principale est…",
    "i18nKey": "questionnaire.ext.q19.title",
    "options": [
      {
        "text": "Faire ce qui est juste, même si c’est difficile",
        "i18nKey": "questionnaire.ext.q19.option1",
        "functions": {},
        "enneagram": { "1": 5 }
      },
      {
        "text": "Aider, soutenir et être indispensable aux autres",
        "i18nKey": "questionnaire.ext.q19.option2",
        "functions": {},
        "enneagram": { "2": 4 }
      },
      {
        "text": "Réussir, atteindre ses objectifs et être reconnu",
        "i18nKey": "questionnaire.ext.q19.option3",
        "functions": {},
        "enneagram": { "3": 4 }
      },
      {
        "text": "Protéger son indépendance et ses émotions",
        "i18nKey": "questionnaire.ext.q19.option4",
        "functions": {},
        "enneagram": { "4": 4 }
      }
    ]
  },
  {
    "id": 20,
    "question": "Le plus grand moteur intérieur de votre proche, c’est…",
    "i18nKey": "questionnaire.ext.q20.title",
    "options": [
      {
        "text": "Chercher à comprendre, analyser et trouver la vérité",
        "i18nKey": "questionnaire.ext.q20.option1",
        "functions": {},
        "enneagram": { "5": 3 }
      },
      {
        "text": "Sécuriser son avenir et éviter les imprévus",
        "i18nKey": "questionnaire.ext.q20.option2",
        "functions": {},
        "enneagram": { "6": 3 }
      },
      {
        "text": "Profiter de la vie, explorer et multiplier les expériences",
        "i18nKey": "questionnaire.ext.q20.option3",
        "functions": {},
        "enneagram": { "7": 4 }
      },
      {
        "text": "Avoir le contrôle, prendre les devants et diriger",
        "i18nKey": "questionnaire.ext.q20.option4",
        "functions": {},
        "enneagram": { "8": 4 }
      },
      {
        "text": "Préserver la paix, éviter les conflits et rester serein",
        "i18nKey": "questionnaire.ext.q20.option5",
        "functions": {},
        "enneagram": { "9": 4 }
      }
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

// Nouveau questionnaire basé sur les fonctions cognitives et l'ennéagramme (harmonisé)

const AUTO_QUESTIONS = [
  {
    id: 1,
    question: "Quand tu dois trancher un choix impliquant des valeurs et des faits, tu t'appuies d'abord sur…",
    options: [
      { text: "ce qui est aligné avec mes convictions internes", functions: { Fi: 3 }, enneagram: { 4: 2, 9: 1 } },
      { text: "l’impact humain et relationnel autour de moi", functions: { Fe: 3, Te: 1 }, enneagram: { 2: 2, 6: 1 } },
      { text: "la logique opérationnelle et la mesure des résultats", functions: { Te: 1, Ti: 3 }, enneagram: { 1: 2, 5: 1, 3: 1 } }
    ]
  },
  {
    id: 2,
    question: "Face à un nouveau concept complexe, ta porte d’entrée naturelle c’est…",
    options: [
      { text: "explorer des possibilités et faire des liens inattendus", functions: { Ne: 3, Ni: 2 }, enneagram: { 7: 1, 5: 1 } },
      { text: "raccrocher à des schémas connus et à l’expérience", functions: { Si: 3 }, enneagram: { 6: 2, 1: 1 } },
      { text: "chercher le fil directeur, le sens profond", functions: { Ni: 2 }, enneagram: { 5: 2, 4: 1 } }
    ]
  },
  {
    id: 3,
    question: "Quand un imprévu bouscule ton plan…",
    options: [
      { text: "tu t’adaptes vite et testes sur le moment", functions: { Se: 2, Ne: 1 }, enneagram: { 7: 1, 8: 1 } },
      { text: "tu réorganises pour sécuriser le résultat", functions: { Si: 2, Te: 1, Ni: 1 }, enneagram: { 1: 2, 6: 1 } },
      { text: "tu prends du recul pour comprendre la dynamique", functions: { Ni: 2, Ti: 1, Si: 1 }, enneagram: { 5: 1, 6: 1 } }
    ]
  },
  {
    id: 4,
    question: "Dans un repas de famille, un débat s'ouvre, ton réflexe dominant c'est...",
    options: [
      { text: "structurer par l’analyse logique et les définitions", functions: { Ti: 3, Te: 1, Si: 1 }, enneagram: { 5: 2, 1: 1, 8: 1 } },
      { text: "faire circuler la parole et harmoniser", functions: { Fe: 2, Fi: 1 }, enneagram: { 2: 2, 9: 1 } },
      { text: "être en retrait, écouter et éviter les querelles", functions: { Fe: 2, Ti: -2 }, enneagram: { 2: 2, 9: 3 } }
    ]
  },
  {
    id: 5,
    question: "Ton environnement de travail qui te rend le plus efficace…",
    options: [
      { text: "process, clarté, repères stables", functions: { Si: 2, Te: 1, Ni: 1 }, enneagram: { 1: 2, 6: 1 } },
      { text: "épuré, sensoriel, réactif", functions: { Se: 2, Ti: 1 }, enneagram: { 8: 2, 3: 1 } },
      { text: "stimulant, ouvert aux associations d’idées", functions: { Ne: 2, Se: 1 }, enneagram: { 4: 2, 7: 1 } }
    ]
  },
  {
    id: 6,
    question: "Quand tu aides quelqu’un…",
    options: [
      { text: "tu analyses la mécanique du problème", functions: { Ti: 2, Ni: 1 }, enneagram: { 5: 1, 6: 1 } },
      { text: "tu proposes des étapes concrètes tout de suite", functions: { Te: 1, Se: 1, Ti: 2 }, enneagram: { 3: 1, 8: 1, 5: 1 } },
      { text: "tu entres en résonance avec son vécu", functions: { Fe: 1, Fi: 2 }, enneagram: { 2: 3 } }
    ]
  },
  {
    id: 7,
    question: "Ta façon naturelle de planifier l’avenir…",
    options: [
      { text: "vision ciblée et trajectoire long terme", functions: { Ni: 3, Si: 2 }, enneagram: { 1: 1, 3: 1, 6: 1 } },
      { text: "cartographie d’options et portes ouvertes", functions: { Ne: 3 }, enneagram: { 7: 2 } },
      { text: "jalons concrets et gestion des risques", functions: { Si: 2, Te: 1, Ni: 1 }, enneagram: { 6: 2 } }
    ]
  },
  {
    id: 8,
    question: "Dans un conflit relationnel…",
    options: [
      { text: "tu cherches l’accord qui préserve chacun", functions: { Fe: 2, Te: 1, Fi: 1 }, enneagram: { 9: 2, 2: 1 } },
      { text: "tu vas droit au point à corriger", functions: { Te: 1, Se: 1, Ti: 1 }, enneagram: { 8: 2, 1: 1, 5: 1 } },
      { text: "tu prends de la distance pour assimiler", functions: { Fi: 2, Ni: 1 }, enneagram: { 5: 2, 4: 1 } }
    ]
  },
  {
    id: 9,
    question: "Ce qui te motive en premier lieu…",
    options: [
      { text: "être authentique et fidèle à toi-même", functions: { Fi: 3, Ti: 2 }, enneagram: { 4: 2 } },
      { text: "atteindre un standard de performance", functions: { Te: 1, Ti: 2 }, enneagram: { 3: 3, 1: 1 } },
      { text: "préserver la stabilité et la paix intérieure", functions: { Si: 2, Ni: 1 }, enneagram: { 9: 3, 6: 1 } }
    ]
  },
  {
    id: 10,
    question: "Quand tu entres dans un endroit inconnu…",
    options: [
      { text: "tu scans les stimuli et passes à l’action", functions: { Se: 3 }, enneagram: { 7: 1, 8: 1 } },
      { text: "tu compares avec des repères mémorisés", functions: { Si: 2 }, enneagram: { 6: 2 } },
      { text: "tu cherches l’intention/le sens de l’ensemble", functions: { Ni: 3 }, enneagram: { 5: 2, 4: 1 } }
    ]
  },
  {
    id: 11,
    question: "En équipe, on te reconnaît surtout pour…",
    options: [
      { text: "l’organisation et la tenue des échéances", functions: { Te: 2, Si: 2 }, enneagram: { 1: 1, 3: 1, 6: 2 } },
      { text: "l’inclusion et la qualité du climat", functions: { Fe: 2, Te: 2 }, enneagram: { 2: 2, 9: 1 } },
      { text: "les idées originales et le pivot rapide", functions: { Ne: 3, Se: 1 }, enneagram: { 7: 2 } }
    ]
  },
  {
    id: 12,
    question: "Ta relation au temps est plutôt…",
    options: [
      { text: "présent-action, tu ajustes en live", functions: { Se: 2, Ne: 2 }, enneagram: { 7: 1, 8: 1 } },
      { text: "récurrence et routine maîtrisée", functions: { Si: 2, Ni: 1 }, enneagram: { 6: 2, 1: 1 } },
      { text: "projection et scénarios futurs", functions: { Ni: 2, Si: 1 }, enneagram: { 5: 1, 3: 1 } }
    ]
  },
  {
    id: 13,
    question: "Devant une règle bancale…",
    options: [
      { text: "tu cherches le moyen de la contourner", functions: { Te: 1, Se: 3, Ne: 2 }, enneagram: { 7: 1, 8: 2 } },
      { text: "tu la suis si elle sécurise le cadre", functions: { Si: 2, Ti: 1 }, enneagram: { 6: 2 } },
      { text: "tu la contournes si elle viole tes valeurs", functions: { Fi: 2, Ne: 1, Se: 2 }, enneagram: { 4: 1, 7: 1 } }
    ]
  },
  {
    id: 14,
    question: "Quand tu es seul...",
    options: [
      { text: "Tu te retrouves vite sur les réseaux sociaux à intéragir avec d'autres", functions: { Se: 1, Fe: 1, Te: 1 }, enneagram: { 2: 1, 3: 1, 8: 1 } },
      { text: "Tu profites de cette solitude pour faire ce qui te passionne (lire, regarder une vidéo etc)", functions: { Fi: 2, Ti: 2 }, enneagram: { 4: 1, 5: 1, 9: 1 } },
      { text: "Tu cherche le moyen d'être en intéraction avec d'autres", functions: { Se: 1, Te: 1, Fe: 1 }, enneagram: { 7: 2, 2: 2 } }
    ]
  },
  {
    id: 15,
    question: "Pour résoudre un problème technique…",
    options: [
      { text: "tu démontes le système conceptuellement", functions: { Ti: 3 }, enneagram: { 5: 2 } },
      { text: "tu appliques un protocole clair", functions: { Te: 1, Si: 2 }, enneagram: { 1: 2, 6: 1, 5: 1 } },
      { text: "tu expérimentes et itères rapidement", functions: { Ne: 2, Se: 1 }, enneagram: { 7: 2, 3: 2 } }
    ]
  },
  {
    id: 16,
    question: "Une vie réussie, pour toi, c’est…",
    options: [
      { text: "fidélité à soi et aux proches", functions: { Fi: 2, Fe: 1, Ti: 1 }, enneagram: { 2: 1, 4: 2 } },
      { text: "impact tangible et trace utile", functions: { Te: 1, Fe: 1 }, enneagram: { 3: 2, 1: 1, 8: 1 } },
      { text: "paix, équilibre, absence de pression", functions: { Si: 1, Ne: 1, Se: 1 }, enneagram: { 9: 2 } }
    ]
  }
];

// Version externe - 20 questions (observation) — harmonisée
const EXTERNAL_QUESTIONS = [
  {
    id: 1,
    question: "Cette personne décide surtout en fonction…",
    options: [
      { text: "de ses convictions internes", functions: { Fi: 3, Ti: 2 }, enneagram: { 4: 2, 9: 1 } },
      { text: "de l’impact sur les autres", functions: { Fe: 2, Te: 1 }, enneagram: { 2: 2, 6: 1 } },
      { text: "de l’efficacité et des résultats", functions: { Te: 1, Ti: 2, Si: 1 }, enneagram: { 3: 3, 1: 2, 5: 1 } }
    ]
  },
  {
    id: 2,
    question: "Pour apprendre, elle…",
    options: [
      { text: "teste vite en situation réelle", functions: { Se: 3, Ne: 2 }, enneagram: { 7: 1, 8: 1 } },
      { text: "s’appuie sur son expérience", functions: { Si: 2, Ni: 2 }, enneagram: { 6: 2 } },
      { text: "cherche le sens global/les modèles", functions: { Ni: 2, Ne: 1 }, enneagram: { 5: 2 } }
    ]
  },
  {
    id: 3,
    question: "Sous pression, elle…",
    options: [
      { text: "renforce le contrôle et la structure", functions: { Te: 1, Si: 1 }, enneagram: { 1: 2, 8: 2 } },
      { text: "se replie pour analyser", functions: { Fi: 1, Ni: 2, Ti: 1, Si: 1 }, enneagram: { 5: 2, 4: 1 } },
      { text: "désamorce et passe à autre chose", functions: { Ne: 2, Se: 1 }, enneagram: { 7: 1 } }
    ]
  },
  {
    id: 4,
    question: "Dans un groupe, elle est plutôt celle qui…",
    options: [
      { text: "anime et relie les personnes", functions: { Fe: 2, Se: 1, Te: 1 }, enneagram: { 2: 2, 7: 1, 9: 1 } },
      { text: "analyse en profondeur", functions: { Ni: 2, Ti: 1 }, enneagram: { 5: 2 } },
      { text: "organise et oriente l’action", functions: { Te: 2, Fe: 1 }, enneagram: { 3: 3, 8: 2 } }
    ]
  },
  {
    id: 5,
    question: "Son espace de travail semble…",
    options: [
      { text: "soigné et processé", functions: { Si: 1, Te: 1, Ni: 1 }, enneagram: { 1: 2, 6: 1 } },
      { text: "personnel et créatif", functions: { Fi: 2, Ne: 1 }, enneagram: { 4: 2 } },
      { text: "minimaliste et réactif", functions: { Si: 1, Ti: 1 }, enneagram: { 8: 2, 3: 1 } }
    ]
  },
  {
    id: 6,
    question: "Avec les autres, elle montre surtout…",
    options: [
      { text: "soutien empathique", functions: { Fe: 2, Fi: 1 }, enneagram: { 2: 3 } },
      { text: "conseils concrets", functions: { Te: 1, Se: 1, Ti: 2 }, enneagram: { 3: 1, 8: 1, 5: 1 } },
      { text: "écoute calme et discrète", functions: { Fi: 2, Si: 1 }, enneagram: { 9: 2 } }
    ]
  },
  {
    id: 7,
    question: "Quand un plan change, elle…",
    options: [
      { text: "s’adapte rapidement", functions: { Ne: 2, Se: 1 }, enneagram: { 7: 1 } },
      { text: "revient au plan initial si possible", functions: { Si: 1, Te: 1 }, enneagram: { 6: 2 } },
      { text: "questionne la finalité", functions: { Ni: 2, Fi: 1 }, enneagram: { 4: 1, 5: 1 } }
    ]
  },
  {
    id: 8,
    question: "En désaccord, elle…",
    options: [
      { text: "négocie une solution mutuellement acceptable", functions: { Fe: 2, Te: 1 }, enneagram: { 9: 2, 2: 2 } },
      { text: "tient fermement sa position", functions: { Ti: 3, Fi: 2 }, enneagram: { 8: 2, 1: 2, 4: 2 } },
      { text: "se retire pour éviter l’escalade", functions: { Fe: 1, Si: 1 }, enneagram: { 6: 1, 9: 2 } }
    ]
  },
  {
    id: 9,
    question: "On dirait qu’elle est motivée surtout par…",
    options: [
      { text: "la réussite mesurable", functions: { Te: 3 }, enneagram: { 3: 3 } },
      { text: "l’harmonie sociale", functions: { Fe: 2 }, enneagram: { 2: 2, 9: 2 } },
      { text: "le sens personnel", functions: { Fi: 3, Ti: 1 }, enneagram: { 4: 2 } }
    ]
  },
  {
    id: 10,
    question: "Face à une situation nouvelle, elle…",
    options: [
      { text: "observe avant d’agir", functions: { Ni: 2, Si: 1 }, enneagram: { 5: 2, 1: 2 } },
      { text: "se lance spontanément", functions: { Se: 3, Ne: 2 }, enneagram: { 7: 1, 8: 1 } },
      { text: "cherche une référence rassurante", functions: { Si: 1, Fe: 1 }, enneagram: { 6: 2 } }
    ]
  },
  {
    id: 11,
    question: "Sa communication est plutôt…",
    options: [
      { text: "directe et factuelle", functions: { Te: 1, Ti: 1, Si: 2, Se: 2 }, enneagram: { 1: 1, 8: 1 } },
      { text: "imaginative et associative", functions: { Ne: 3, Ni: 3 }, enneagram: { 7: 1, 4: 2 } },
      { text: "chaleureuse et personnelle", functions: { Fe: 2, Fi: 2 }, enneagram: { 2: 3, 9: 2 } }
    ]
  },
  {
    id: 12,
    question: "Quand elle parle d’avenir, elle…",
    options: [
      { text: "décrit un but précis", functions: { Ni: 3, Si: 1 }, enneagram: { 3: 1, 1: 1 } },
      { text: "déploie plusieurs scénarios", functions: { Ne: 2, Se: 1 }, enneagram: { 7: 1, 4: 1 } },
      { text: "reste centrée sur l’instant", functions: { Se: 1, Si: 2 }, enneagram: { 9: 2 } }
    ]
  },
  {
    id: 13,
    question: "Dans son temps libre, elle aime…",
    options: [
      { text: "organiser des activités utiles", functions: { Te: 1, Si: 1, Fe: 1 }, enneagram: { 1: 1, 3: 1 } },
      { text: "créer/exprimer quelque chose d’unique", functions: { Fi: 2, Ne: 1, Ti: 1 }, enneagram: { 4: 2 } },
      { text: "se détendre sans plan", functions: { Se: 2, Ne: 1 }, enneagram: { 9: 2, 7: 1 } }
    ]
  },
  {
    id: 14,
    question: "Face à l’incertitude, elle…",
    options: [
      { text: "récolte des données et structure", functions: { Ti: 2, Te: 1, Si: 1 }, enneagram: { 5: 2, 6: 1 } },
      { text: "fait confiance à son intuition", functions: { Ni: 2, Fi: 1, Ne: 2 }, enneagram: { 4: 1 } },
      { text: "avance sans trop s’arrêter", functions: { Se: 2, Ne: 1 }, enneagram: { 7: 1, 8: 1 } }
    ]
  },
  {
    id: 15,
    question: "Elle semble surtout rechercher…",
    options: [
      { text: "sécurité et stabilité", functions: { Si: 2, Ni: 2 }, enneagram: { 6: 3 } },
      { text: "autonomie et cohérence interne", functions: { Fi: 2, Ti: 2 }, enneagram: { 5: 2, 4: 2 } },
      { text: "intensité et challenge", functions: { Se: 1, Te: 1, Ne: 1 }, enneagram: { 8: 2, 7: 1 } }
    ]
  },
  {
    id: 16,
    question: "Dans ses relations, on la perçoit…",
    options: [
      { text: "protectrice et attentive", functions: { Fe: 2 }, enneagram: { 2: 2 } },
      { text: "réservée mais fiable", functions: { Si: 1, Fi: 1 }, enneagram: { 6: 1, 9: 1 } },
      { text: "franche, parfois abrupte", functions: { Te: 1, Se: 1, Ti: 1 }, enneagram: { 8: 2, 5: 1 } }
    ]
  },
  {
    id: 17,
    question: "Quand il faut choisir rapidement, elle…",
    options: [
      { text: "va droit au but", functions: { Te: 1, Se: 1 }, enneagram: { 3: 2, 8: 1 } },
      { text: "prend un temps d’analyse", functions: { Ti: 1, Si: 1 }, enneagram: { 5: 2 } },
      { text: "sollicite l’avis du groupe", functions: { Fe: 1, Ne: 1, Te: 1 }, enneagram: { 6: 2, 2: 2 } }
    ]
  },
  {
    id: 18,
    question: "Elle se ressource surtout…",
    options: [
      { text: "en solitaire, monde intérieur", functions: { Ni: 1, Fi: 1, Ti: 1, Si: 1 }, enneagram: { 4: 1, 5: 1, 9: 1 } },
      { text: "auprès d’un large cercle social", functions: { Fe: 1, Se: 1, Te: 1 }, enneagram: { 7: 1, 2: 1 } },
      { text: "avec quelques proches sûrs", functions: { Si: 1, Fi: 1 }, enneagram: { 6: 2 } }
    ]
  },
  {
    id: 19,
    question: "Son rapport aux règles est plutôt…",
    options: [
      { text: "respect strict pour l’ordre", functions: { Si: 2, Te: 1, Ni: 1 }, enneagram: { 1: 2, 6: 3 } },
      { text: "contournement si injustes", functions: { Fi: 2, Ne: 1, Ti: 1 }, enneagram: { 4: 1, 7: 1 } },
      { text: "questionnement pour améliorer", functions: { Ti: 2, Fe: 1, Ne: 1, Se: 1 }, enneagram: { 6: 1, 5: 1, 1: 2 } }
    ]
  },
  {
    id: 20,
    question: "Globalement, cette personne dégage…",
    options: [
      { text: "une énergie calme et conciliante", functions: { Si: 1, Fe: 1 }, enneagram: { 9: 3 } },
      { text: "une présence intense et directive", functions: { Te: 1, Se: 1 }, enneagram: { 8: 3 } },
      { text: "une curiosité vive et enthousiaste", functions: { Ne: 3, Se: 1 }, enneagram: { 7: 2 } }
    ]
  }
];

if (typeof module !== 'undefined') {
  module.exports = { AUTO_QUESTIONS, EXTERNAL_QUESTIONS };
}

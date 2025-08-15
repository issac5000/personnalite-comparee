// Nouveau questionnaire basé sur les fonctions cognitives et l'ennéagramme

const AUTO_QUESTIONS = [
  {
    id: 1,
    question: "Quand vous devez trancher un choix personnel, vous privilégiez…",
    options: [
      { text: "ce qui résonne avec vos valeurs intérieures", functions: { Fi: 3 }, enneagram: { 4: 2, 9: 1 } },
      { text: "l'impact que cela aura sur l'harmonie autour de vous", functions: { Fe: 3 }, enneagram: { 2: 2, 6: 1 } },
      { text: "la solution la plus efficace et mesurable", functions: { Te: 3 }, enneagram: { 1: 2, 3: 1 } }
    ]
  },
  {
    id: 2,
    question: "Pour comprendre un nouveau concept, vous préférez…",
    options: [
      { text: "explorer librement toutes les pistes possibles", functions: { Ne: 3 }, enneagram: { 7: 2, 5: 1 } },
      { text: "relier l'idée à vos expériences passées", functions: { Si: 3 }, enneagram: { 6: 2, 1: 1 } },
      { text: "expérimenter concrètement sur le terrain", functions: { Se: 3 }, enneagram: { 8: 2, 3: 1 } }
    ]
  },
  {
    id: 3,
    question: "Face à un imprévu dans votre journée, vous…",
    options: [
      { text: "improvisez avec enthousiasme", functions: { Se: 2, Ne: 1 }, enneagram: { 7: 2 } },
      { text: "cherchez à rétablir votre plan initial", functions: { Si: 2, Te: 1 }, enneagram: { 1: 2 } },
      { text: "prenez du recul pour comprendre le sens caché", functions: { Ni: 3 }, enneagram: { 4: 1, 5: 1 } }
    ]
  },
  {
    id: 4,
    question: "Dans une discussion animée, vous êtes celui qui…",
    options: [
      { text: "ramène des faits et de la logique", functions: { Ti: 3 }, enneagram: { 5: 2 } },
      { text: "observe silencieusement en analysant le non‑dit", functions: { Ni: 2, Fi: 1 }, enneagram: { 4: 2 } },
      { text: "anime le groupe et met chacun à l'aise", functions: { Fe: 3 }, enneagram: { 2: 2 } }
    ]
  },
  {
    id: 5,
    question: "Votre espace de travail idéal est…",
    options: [
      { text: "structuré et optimisé pour la productivité", functions: { Te: 3, Si: 1 }, enneagram: { 1: 2, 3: 1 } },
      { text: "rempli d'objets inspirants et uniques", functions: { Fi: 2, Ne: 1 }, enneagram: { 4: 2 } },
      { text: "minimaliste pour rester en alerte", functions: { Se: 2, Ti: 1 }, enneagram: { 8: 2 } }
    ]
  },
  {
    id: 6,
    question: "Lorsque vous aidez quelqu'un, vous…",
    options: [
      { text: "partagez des conseils pratiques immédiatement applicables", functions: { Te: 2, Se: 1 }, enneagram: { 3: 1, 8: 1 } },
      { text: "écoutez avec empathie pour comprendre ses émotions", functions: { Fe: 2, Fi: 1 }, enneagram: { 2: 3 } },
      { text: "analysez sa situation pour trouver la cause profonde", functions: { Ti: 2, Ni: 1 }, enneagram: { 5: 2 } }
    ]
  },
  {
    id: 7,
    question: "Quand vous planifiez l'avenir, vous voyez surtout…",
    options: [
      { text: "des possibilités variées et changeantes", functions: { Ne: 3 }, enneagram: { 7: 3 } },
      { text: "une vision claire et ciblée", functions: { Ni: 3 }, enneagram: { 1: 1, 3: 1 } },
      { text: "les étapes concrètes à réaliser", functions: { Si: 2, Te: 1 }, enneagram: { 6: 2 } }
    ]
  },
  {
    id: 8,
    question: "Devant un conflit relationnel, vous avez tendance à…",
    options: [
      { text: "rechercher une solution gagnant‑gagnant", functions: { Fe: 3 }, enneagram: { 9: 2 } },
      { text: "exprimer directement ce qui ne va pas", functions: { Te: 2, Se: 1 }, enneagram: { 8: 2 } },
      { text: "vous retirer pour réfléchir", functions: { Fi: 2, Ni: 1 }, enneagram: { 5: 2 } }
    ]
  },
  {
    id: 9,
    question: "Votre motivation première est de…",
    options: [
      { text: "vivre en accord avec votre identité", functions: { Fi: 3 }, enneagram: { 4: 3 } },
      { text: "atteindre un objectif mesurable", functions: { Te: 3 }, enneagram: { 3: 3 } },
      { text: "rester en paix et éviter le stress", functions: { Si: 2, Ne: 1 }, enneagram: { 9: 3 } }
    ]
  },
  {
    id: 10,
    question: "Quand vous explorez un nouveau lieu, vous…",
    options: [
      { text: "vous laissez guider par vos cinq sens", functions: { Se: 3 }, enneagram: { 7: 2 } },
      { text: "recherchez l'histoire cachée du lieu", functions: { Ni: 2, Ti: 1 }, enneagram: { 5: 2 } },
      { text: "comparez ce que vous voyez à des souvenirs", functions: { Si: 3 }, enneagram: { 6: 2 } }
    ]
  },
  {
    id: 11,
    question: "Lorsque vous travaillez en équipe, vous êtes celui qui…",
    options: [
      { text: "coordonne et répartit les tâches", functions: { Te: 3 }, enneagram: { 1: 1, 8: 1 } },
      { text: "assure que tout le monde se sente entendu", functions: { Fe: 3 }, enneagram: { 2: 2 } },
      { text: "propose des idées originales", functions: { Ne: 3 }, enneagram: { 7: 2 } }
    ]
  },
  {
    id: 12,
    question: "Votre rapport au temps est plutôt…",
    options: [
      { text: "orienté vers l'instant présent", functions: { Se: 2, Fi: 1 }, enneagram: { 7: 1, 8: 1 } },
      { text: "tourné vers des schémas récurrents", functions: { Si: 3 }, enneagram: { 6: 2 } },
      { text: "projeté vers ce qui va arriver", functions: { Ni: 3 }, enneagram: { 5: 1 } }
    ]
  },
  {
    id: 13,
    question: "Face à une règle qui vous semble absurde, vous…",
    options: [
      { text: "la contournez si elle entrave votre liberté", functions: { Fi: 2, Ne: 1 }, enneagram: { 4: 1, 7: 1 } },
      { text: "cherchez à la modifier officiellement", functions: { Te: 2, Fe: 1 }, enneagram: { 1: 2, 8: 1 } },
      { text: "l'appliquez malgré tout pour garder l'ordre", functions: { Si: 2, Ti: 1 }, enneagram: { 6: 2 } }
    ]
  },
  {
    id: 14,
    question: "Quand vous êtes plongé dans vos pensées, c'est souvent pour…",
    options: [
      { text: "explorer des symboles et significations", functions: { Ni: 3 }, enneagram: { 4: 1, 5: 1 } },
      { text: "réviser des souvenirs en détail", functions: { Si: 3 }, enneagram: { 6: 1, 9: 1 } },
      { text: "imaginer des scénarios futurs", functions: { Ne: 3 }, enneagram: { 7: 2 } }
    ]
  },
  {
    id: 15,
    question: "Pour résoudre un problème technique, vous…",
    options: [
      { text: "décomposez logiquement chaque étape", functions: { Ti: 3 }, enneagram: { 5: 3 } },
      { text: "cherchez un tutoriel ou l'avis d'un expert", functions: { Te: 2, Si: 1 }, enneagram: { 6: 2 } },
      { text: "expérimentez différentes possibilités", functions: { Ne: 2, Se: 1 }, enneagram: { 7: 2 } }
    ]
  },
  {
    id: 16,
    question: "Votre définition d'une vie réussie se rapproche de…",
    options: [
      { text: "rester fidèle à soi et à ses proches", functions: { Fi: 2, Fe: 1 }, enneagram: { 2: 1, 4: 2 } },
      { text: "laisser une trace concrète et utile", functions: { Te: 2, Ni: 1 }, enneagram: { 3: 2, 1: 1 } },
      { text: "profiter du voyage sans pression", functions: { Si: 1, Ne: 1, Se: 1 }, enneagram: { 9: 2 } }
    ]
  }
];

// Version externe - 20 questions
const EXTERNAL_QUESTIONS = [
  {
    id: 1,
    question: "Cette personne prend ses décisions surtout en fonction…",
    options: [
      { text: "de ses valeurs personnelles", functions: { Fi: 3 }, enneagram: { 4: 2, 9: 1 } },
      { text: "de l'impact sur les autres", functions: { Fe: 3 }, enneagram: { 2: 2, 6: 1 } },
      { text: "de l'efficacité mesurable", functions: { Te: 3 }, enneagram: { 3: 2, 1: 1 } }
    ]
  },
  {
    id: 2,
    question: "Pour apprendre, cette personne préfère…",
    options: [
      { text: "tester immédiatement", functions: { Se: 3 }, enneagram: { 7: 2, 8: 1 } },
      { text: "relier à son vécu", functions: { Si: 3 }, enneagram: { 6: 2 } },
      { text: "explorer des idées abstraites", functions: { Ne: 2, Ni: 1 }, enneagram: { 5: 2 } }
    ]
  },
  {
    id: 3,
    question: "Lorsqu'elle est sous pression, cette personne…",
    options: [
      { text: "cherche à garder le contrôle et l'ordre", functions: { Te: 2, Si: 1 }, enneagram: { 1: 2, 8: 1 } },
      { text: "se replie pour réfléchir", functions: { Fi: 2, Ni: 1 }, enneagram: { 5: 2 } },
      { text: "dédramatise et passe à autre chose", functions: { Ne: 2, Se: 1 }, enneagram: { 7: 2 } }
    ]
  },
  {
    id: 4,
    question: "Dans un groupe, cette personne est souvent celle qui…",
    options: [
      { text: "met l'ambiance et encourage", functions: { Fe: 2, Se: 1 }, enneagram: { 2: 2, 7: 1 } },
      { text: "analyse en silence", functions: { Ni: 2, Ti: 1 }, enneagram: { 5: 2 } },
      { text: "structure l'action", functions: { Te: 3 }, enneagram: { 3: 2, 8: 1 } }
    ]
  },
  {
    id: 5,
    question: "Son environnement de travail est plutôt…",
    options: [
      { text: "soigné et fonctionnel", functions: { Si: 2, Te: 1 }, enneagram: { 1: 2 } },
      { text: "créatif et personnalisé", functions: { Fi: 2, Ne: 1 }, enneagram: { 4: 2 } },
      { text: "variable selon son humeur", functions: { Se: 2 }, enneagram: { 7: 1, 9: 1 } }
    ]
  },
  {
    id: 6,
    question: "Avec les autres, cette personne montre surtout…",
    options: [
      { text: "de l'empathie et du soutien", functions: { Fe: 3 }, enneagram: { 2: 3 } },
      { text: "des conseils pratiques", functions: { Te: 2, Se: 1 }, enneagram: { 3: 1, 8: 1 } },
      { text: "une écoute discrète", functions: { Fi: 2, Si: 1 }, enneagram: { 9: 2 } }
    ]
  },
  {
    id: 7,
    question: "Quand un plan change, cette personne…",
    options: [
      { text: "s'adapte rapidement", functions: { Ne: 2, Se: 1 }, enneagram: { 7: 2 } },
      { text: "cherche à revenir au plan initial", functions: { Si: 2, Te: 1 }, enneagram: { 6: 2 } },
      { text: "questionne le sens du changement", functions: { Ni: 2, Fi: 1 }, enneagram: { 4: 1, 5: 1 } }
    ]
  },
  {
    id: 8,
    question: "Lors d'un désaccord, cette personne…",
    options: [
      { text: "négocie pour que chacun y trouve son compte", functions: { Fe: 3 }, enneagram: { 9: 2 } },
      { text: "maintient fermement sa position", functions: { Te: 2, Ti: 1 }, enneagram: { 8: 2, 1: 1 } },
      { text: "se retire pour éviter l'escalade", functions: { Fi: 2, Si: 1 }, enneagram: { 6: 1, 5: 1 } }
    ]
  },
  {
    id: 9,
    question: "Cette personne paraît motivée avant tout par…",
    options: [
      { text: "la réussite mesurable", functions: { Te: 3 }, enneagram: { 3: 3 } },
      { text: "l'harmonie relationnelle", functions: { Fe: 3 }, enneagram: { 2: 2, 9: 1 } },
      { text: "la recherche de sens intérieur", functions: { Fi: 3 }, enneagram: { 4: 2 } }
    ]
  },
  {
    id: 10,
    question: "Devant une situation nouvelle, cette personne…",
    options: [
      { text: "observe avant d'agir", functions: { Ni: 2, Si: 1 }, enneagram: { 5: 2 } },
      { text: "se lance spontanément", functions: { Se: 3 }, enneagram: { 7: 2 } },
      { text: "cherche des références pour se rassurer", functions: { Si: 2, Fe: 1 }, enneagram: { 6: 2 } }
    ]
  },
  {
    id: 11,
    question: "Son style de communication est…",
    options: [
      { text: "direct et objectif", functions: { Te: 2, Ti: 1 }, enneagram: { 1: 1, 8: 1 } },
      { text: "imaginatif et digressif", functions: { Ne: 3 }, enneagram: { 7: 2 } },
      { text: "chaleureux et personnel", functions: { Fe: 3 }, enneagram: { 2: 3 } }
    ]
  },
  {
    id: 12,
    question: "Quand elle parle de l'avenir, cette personne…",
    options: [
      { text: "décrit un but précis", functions: { Ni: 3 }, enneagram: { 3: 1, 1: 1 } },
      { text: "imagine plusieurs scénarios possibles", functions: { Ne: 3 }, enneagram: { 7: 2 } },
      { text: "reste plutôt centrée sur le présent", functions: { Se: 2, Fi: 1 }, enneagram: { 9: 2 } }
    ]
  },
  {
    id: 13,
    question: "Dans son temps libre, cette personne aime surtout…",
    options: [
      { text: "organiser des activités utiles", functions: { Te: 2, Si: 1 }, enneagram: { 1: 1, 3: 1 } },
      { text: "créer et s'exprimer", functions: { Fi: 2, Ne: 1 }, enneagram: { 4: 2 } },
      { text: "se détendre sans plan", functions: { Se: 2, Ne: 1 }, enneagram: { 9: 2, 7: 1 } }
    ]
  },
  {
    id: 14,
    question: "Face à l'incertitude, cette personne…",
    options: [
      { text: "cherche à rassembler des données", functions: { Ti: 2, Te: 1 }, enneagram: { 5: 2, 6: 1 } },
      { text: "fait confiance à son intuition", functions: { Ni: 2, Fi: 1 }, enneagram: { 4: 1, 8: 1 } },
      { text: "avance sans trop se poser de questions", functions: { Se: 2, Ne: 1 }, enneagram: { 7: 2 } }
    ]
  },
  {
    id: 15,
    question: "Cette personne semble surtout rechercher…",
    options: [
      { text: "la sécurité et la stabilité", functions: { Si: 3 }, enneagram: { 6: 3 } },
      { text: "l'indépendance", functions: { Fi: 2, Ti: 1 }, enneagram: { 5: 2, 4: 1 } },
      { text: "l'intensité et le défi", functions: { Se: 2, Te: 1 }, enneagram: { 8: 2 } }
    ]
  },
  {
    id: 16,
    question: "Dans ses relations, cette personne est vue comme…",
    options: [
      { text: "protectrice et attentive", functions: { Fe: 3 }, enneagram: { 2: 2 } },
      { text: "réservée mais fiable", functions: { Si: 2, Fi: 1 }, enneagram: { 6: 1, 9: 1 } },
      { text: "franche et parfois brusque", functions: { Te: 2, Se: 1 }, enneagram: { 8: 2 } }
    ]
  },
  {
    id: 17,
    question: "Quand il faut choisir rapidement, cette personne…",
    options: [
      { text: "va droit au but", functions: { Te: 2, Se: 1 }, enneagram: { 3: 2 } },
      { text: "prend un moment pour réfléchir", functions: { Ti: 2, Si: 1 }, enneagram: { 5: 2 } },
      { text: "demande l'avis du groupe", functions: { Fe: 2, Ne: 1 }, enneagram: { 6: 2 } }
    ]
  },
  {
    id: 18,
    question: "Cette personne semble se ressourcer surtout…",
    options: [
      { text: "seule dans son monde intérieur", functions: { Ni: 2, Fi: 1 }, enneagram: { 4: 1, 5: 1 } },
      { text: "au contact d'un large cercle social", functions: { Fe: 2, Se: 1 }, enneagram: { 7: 2, 2: 1 } },
      { text: "avec quelques proches de confiance", functions: { Si: 2, Fi: 1 }, enneagram: { 6: 2 } }
    ]
  },
  {
    id: 19,
    question: "Son approche des règles est plutôt…",
    options: [
      { text: "les respecter scrupuleusement", functions: { Si: 2, Te: 1 }, enneagram: { 1: 2 } },
      { text: "les contourner si elles semblent injustes", functions: { Fi: 2, Ne: 1 }, enneagram: { 4: 1, 7: 1 } },
      { text: "les questionner pour les améliorer", functions: { Ti: 2, Fe: 1 }, enneagram: { 6: 1, 5: 1 } }
    ]
  },
  {
    id: 20,
    question: "Globalement, cette personne dégage surtout…",
    options: [
      { text: "une énergie calme et conciliante", functions: { Si: 2, Fe: 1 }, enneagram: { 9: 3 } },
      { text: "une présence intense et directive", functions: { Te: 2, Se: 1 }, enneagram: { 8: 3 } },
      { text: "une curiosité vive et enthousiaste", functions: { Ne: 3 }, enneagram: { 7: 3 } }
    ]
  }
];

if (typeof module !== 'undefined') {
  module.exports = { AUTO_QUESTIONS, EXTERNAL_QUESTIONS };
}


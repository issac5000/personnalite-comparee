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
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il agit selon ce qu’il ressent comme juste, même si personne ne l’approuve.", functions: { Fi: 3 }, enneagram: { 1: 2, 4: 1 } },
      { text: "Il s’efface souvent pour aider ou soutenir les autres.", functions: { Fe: 3 }, enneagram: { 2: 2, 9: 1 } },
      { text: "Il prend des décisions rapides, orientées résultats.", functions: { Te: 3 }, enneagram: { 3: 2, 8: 1 } },
      { text: "Il remet tout en question jusqu’à comprendre totalement.", functions: { Ti: 3 }, enneagram: { 5: 2, 6: 1 } }
    ]
  },
  {
    id: 2,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il vit dans ses souvenirs, ses habitudes sont rassurantes.", functions: { Si: 3 }, enneagram: { 6: 2, 9: 1 } },
      { text: "Il capte tous les détails de l’environnement et agit vite.", functions: { Se: 3 }, enneagram: { 7: 2, 8: 1 } },
      { text: "Il imagine le futur comme une histoire intérieure.", functions: { Ni: 3 }, enneagram: { 4: 2, 5: 1 } },
      { text: "Il saute d’une idée à l’autre avec enthousiasme.", functions: { Ne: 3 }, enneagram: { 7: 2, 3: 1 } }
    ]
  },
  {
    id: 3,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il ressent fortement ses émotions mais les garde pour lui.", functions: { Fi: 3 }, enneagram: { 4: 2, 6: 1 } },
      { text: "Il cherche à maintenir la paix autour de lui.", functions: { Fe: 3 }, enneagram: { 2: 1, 9: 2 } },
      { text: "Il veut une vérité logique, pas une version édulcorée.", functions: { Ti: 3 }, enneagram: { 5: 2, 1: 1 } },
      { text: "Il planifie tout avec clarté pour éviter les imprévus.", functions: { Te: 3 }, enneagram: { 1: 1, 3: 2 } }
    ]
  },
  {
    id: 4,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il voit les dangers avant qu’ils arrivent, il anticipe tout.", functions: { Ni: 3 }, enneagram: { 5: 2, 6: 1 } },
      { text: "Il aime faire plaisir et attend une reconnaissance en retour.", functions: { Fe: 3 }, enneagram: { 2: 2, 3: 1 } },
      { text: "Il se laisse guider par ses ressentis et son authenticité.", functions: { Fi: 3 }, enneagram: { 4: 2, 9: 1 } },
      { text: "Il agit avec fermeté, surtout quand il faut recadrer.", functions: { Te: 3 }, enneagram: { 1: 1, 8: 2 } }
    ]
  },
  {
    id: 5,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il structure son quotidien pour garder le contrôle.", functions: { Si: 3 }, enneagram: { 6: 2, 1: 1 } },
      { text: "Il se fie à l’instant et agit vite, sans trop réfléchir.", functions: { Se: 3 }, enneagram: { 8: 2, 7: 1 } },
      { text: "Il pense de manière abstraite, comme s’il reliait tout sans effort.", functions: { Ni: 3 }, enneagram: { 5: 2, 4: 1 } },
      { text: "Il déteste les routines et adore changer de perspective.", functions: { Ne: 3 }, enneagram: { 7: 2, 3: 1 } }
    ]
  },
  {
    id: 6,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il agit selon ce qu’il ressent profondément, sans chercher l’approbation.", functions: { Fi: 3 }, enneagram: { 4: 2, 9: 1 } },
      { text: "Il veut être utile, quitte à porter les problèmes des autres.", functions: { Fe: 3 }, enneagram: { 2: 2, 6: 1 } },
      { text: "Il cherche à optimiser, à tout structurer, parfois au détriment de l’humain.", functions: { Te: 3 }, enneagram: { 1: 1, 3: 2 } },
      { text: "Il veut comprendre chaque détail avant de donner son avis.", functions: { Ti: 3 }, enneagram: { 5: 2, 6: 1 } }
    ]
  },
  {
    id: 7,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il se sent souvent à part, unique, parfois même incompris.", functions: { Fi: 3 }, enneagram: { 4: 2, 5: 1 } },
      { text: "Il cherche l’équilibre émotionnel du groupe avant d’affirmer ses idées.", functions: { Fe: 2 }, enneagram: { 9: 2, 2: 1 } },
      { text: "Il adore expérimenter, tester, vivre ce qu’il ressent sur le moment.", functions: { Se: 3 }, enneagram: { 7: 2, 8: 1 } },
      { text: "Il fait confiance à ses intuitions silencieuses, même s’il ne les explique pas.", functions: { Ni: 3 }, enneagram: { 1: 1, 9: 2 } }
    ]
  },
  {
    id: 8,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il est nostalgique, fidèle à ce qu’il connaît. Il préfère ce qui a fait ses preuves.", functions: { Si: 3 }, enneagram: { 6: 2, 9: 1 } },
      { text: "Il rebondit mentalement sur tout, déteste les cadres trop rigides.", functions: { Ne: 3 }, enneagram: { 7: 2, 3: 1 } },
      { text: "Il veut comprendre les rouages cachés, sans jamais se contenter d’un “parce que”.", functions: { Ti: 3 }, enneagram: { 5: 2, 1: 1 } },
      { text: "Il structure son entourage pour que chacun soit à sa place.", functions: { Te: 3 }, enneagram: { 8: 2, 3: 1 } }
    ]
  },
  {
    id: 9,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il ressent intensément ce qu’il vit, mais garde ça dans son monde intérieur.", functions: { Fi: 3 }, enneagram: { 4: 2, 6: 1 } },
      { text: "Il sait instinctivement ce que les autres ressentent ou attendent.", functions: { Fe: 3 }, enneagram: { 2: 2, 9: 1 } },
      { text: "Il agit dans l’urgence avec une confiance parfois brute mais efficace.", functions: { Se: 3 }, enneagram: { 8: 2, 7: 1 } },
      { text: "Il voit venir les choses, anticipe les dérives sans que personne ne s’en rende compte.", functions: { Ni: 3 }, enneagram: { 5: 2, 1: 1 } }
    ]
  },
  {
    id: 10,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il a besoin de sécurité et de repères stables pour se sentir bien.", functions: { Si: 3 }, enneagram: { 6: 2, 1: 1 } },
      { text: "Il cherche sans cesse de nouvelles idées pour sortir de la routine.", functions: { Ne: 3 }, enneagram: { 7: 2, 4: 1 } },
      { text: "Il prend naturellement le lead quand il sent que personne n’ose.", functions: { Te: 3 }, enneagram: { 8: 2, 3: 1 } },
      { text: "Il agit selon une vision intérieure qu’il est parfois le seul à comprendre.", functions: { Ni: 3 }, enneagram: { 5: 2, 9: 1 } }
    ]
  }
];
id: 11,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il se repose sur des expériences passées pour prendre ses décisions.", functions: { Si: 3 }, enneagram: { 6: 2, 1: 1 } },
      { text: "Il aime improviser, explorer ce qui l'entoure, sans plan préétabli.", functions: { Se: 3 }, enneagram: { 7: 2, 9: 1 } },
      { text: "Il suit des intuitions profondes qu'il ne peut toujours expliquer.", functions: { Ni: 3 }, enneagram: { 1: 1, 9: 2 } },
      { text: "Il passe d'une idée à l'autre sans jamais s'arrêter.", functions: { Ne: 3 }, enneagram: { 7: 2, 3: 1 } }
    ]
  },
  {
    id: 12,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il analyse tout en profondeur avant de s'engager émotionnellement.", functions: { Ti: 3 }, enneagram: { 5: 2, 6: 1 } },
      { text: "Il agit pour faire ce qui est bien, pas pour plaire.", functions: { Te: 3 }, enneagram: { 1: 2, 8: 1 } },
      { text: "Il évite de se mettre en avant mais ressent très fort ce qu'il vit.", functions: { Fi: 3 }, enneagram: { 4: 2, 9: 1 } },
      { text: "Il se rend utile dès qu’il voit un besoin, même implicite.", functions: { Fe: 3 }, enneagram: { 2: 2, 6: 1 } }
    ]
  },
  {
    id: 13,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il cherche à comprendre pour anticiper, il voit ce qui est caché.", functions: { Ni: 3 }, enneagram: { 5: 2, 1: 1 } },
      { text: "Il agit vite et ajuste au fur et à mesure.", functions: { Se: 3 }, enneagram: { 8: 2, 3: 1 } },
      { text: "Il ne supporte pas l'idée d’être inutile ou rejeté.", functions: { Fe: 3 }, enneagram: { 2: 2, 4: 1 } },
      { text: "Il revient toujours à ce qui fonctionne, il ne prend pas de risques inutiles.", functions: { Si: 3 }, enneagram: { 6: 2, 9: 1 } }
    ]
  },
  {
    id: 14,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il explore toutes les idées possibles, même les plus improbables.", functions: { Ne: 3 }, enneagram: { 7: 2, 5: 1 } },
      { text: "Il garde pour lui ses émotions et agit selon son propre ressenti.", functions: { Fi: 3 }, enneagram: { 4: 2, 6: 1 } },
      { text: "Il organise les choses pour atteindre des objectifs clairs.", functions: { Te: 3 }, enneagram: { 3: 2, 1: 1 } },
      { text: "Il pose beaucoup de questions pour comprendre avant d'agir.", functions: { Ti: 3 }, enneagram: { 5: 2, 6: 1 } }
    ]
  },
  {
    id: 15,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il prend souvent du recul pour voir la situation dans son ensemble.", functions: { Ni: 3 }, enneagram: { 9: 2, 4: 1 } },
      { text: "Il observe, évalue, et agit avec rapidité et précision.", functions: { Se: 3 }, enneagram: { 8: 2, 7: 1 } },
      { text: "Il pense en termes de logique et de cohérence interne.", functions: { Ti: 3 }, enneagram: { 5: 2, 1: 1 } },
      { text: "Il cherche à stabiliser ce qui l’entoure, à garder un cadre.", functions: { Si: 3 }, enneagram: { 6: 2, 2: 1 } }
    ]
  },
  {
    id: 16,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il donne pour recevoir de la reconnaissance et du lien.", functions: { Fe: 3 }, enneagram: { 2: 2, 3: 1 } },
      { text: "Il agit pour que les choses soient faites, pas pour discuter.", functions: { Te: 3 }, enneagram: { 1: 2, 8: 1 } },
      { text: "Il suit ses ressentis sans toujours chercher à les expliquer.", functions: { Fi: 3 }, enneagram: { 4: 2, 9: 1 } },
      { text: "Il jongle avec les idées, toujours en mouvement mental.", functions: { Ne: 3 }, enneagram: { 7: 2, 5: 1 } }
    ]
  },
  {
    id: 17,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il veut faire ce qu’il faut, selon une logique implacable.", functions: { Ti: 3 }, enneagram: { 1: 2, 6: 1 } },
      { text: "Il aime explorer de nouvelles idées sans forcément les creuser.", functions: { Ne: 3 }, enneagram: { 7: 2, 3: 1 } },
      { text: "Il agit de manière efficace et directe.", functions: { Te: 3 }, enneagram: { 8: 2, 3: 1 } },
      { text: "Il s’appuie sur des références précises et des habitudes stables.", functions: { Si: 3 }, enneagram: { 6: 2, 9: 1 } }
    ]
  },
  {
    id: 18,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il perçoit des vérités profondes sans toujours pouvoir les verbaliser.", functions: { Ni: 3 }, enneagram: { 5: 2, 4: 1 } },
      { text: "Il agit vite et fort, il prend sa place naturellement.", functions: { Se: 3 }, enneagram: { 8: 2, 3: 1 } },
      { text: "Il veut apaiser, lisser, éviter les tensions au maximum.", functions: { Fe: 3 }, enneagram: { 9: 2, 2: 1 } },
      { text: "Il ressent très fort mais ne se laisse pas dicter ses émotions.", functions: { Fi: 3 }, enneagram: { 4: 2, 6: 1 } }
    ]
  },
  {
    id: 19,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il cherche la vérité, même si elle est inconfortable.", functions: { Ti: 3 }, enneagram: { 5: 2, 1: 1 } },
      { text: "Il agit pour régler les choses, sans forcément tout comprendre.", functions: { Te: 3 }, enneagram: { 3: 2, 8: 1 } },
      { text: "Il explore tous les scénarios possibles, juste au cas où.", functions: { Ne: 3 }, enneagram: { 6: 2, 7: 1 } },
      { text: "Il garde une constance, une routine qui le sécurise.", functions: { Si: 3 }, enneagram: { 6: 2, 9: 1 } }
    ]
  },
  {
    id: 20,
    question: "Dans quelle description reconnaissez-vous le plus votre proche ?",
    options: [
      { text: "Il agit par principe, fidèle à une vision intérieure de la vérité.", functions: { Fi: 3 }, enneagram: { 1: 1, 4: 2 } },
      { text: "Il observe les signaux faibles et fait des liens très subtils.", functions: { Ni: 3 }, enneagram: { 5: 2, 9: 1 } },
      { text: "Il se jette dans l’action sans perdre de temps.", functions: { Se: 3 }, enneagram: { 8: 2, 7: 1 } },
      { text: "Il cherche à rendre service et à créer de l'harmonie autour de lui.", functions: { Fe: 3 }, enneagram: { 2: 2, 9: 1 } }
    ]
  }
];

if (typeof module !== 'undefined') {
  module.exports = { AUTO_QUESTIONS, EXTERNAL_QUESTIONS };
}

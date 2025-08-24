const AUTO_QUESTIONS = [
  {
    id: 1,
    question: "When a plan goes off track, what's your first move?",
    i18nKey: "questions.auto.1.question",
    options: [
      { text: "I question point by point until it's clear.", i18nKey: "questions.auto.1.option1", functions: { Ti: 3, Fe: -1, Ni: 1 }, enneagram: { 5: 2, 1: 1 } },
      { text: "I reframe and set a simple, measurable plan.", i18nKey: "questions.auto.1.option2", functions: { Te: 3, Fi: -1, Si: 1 }, enneagram: { 3: 2, 8: 1 } },
      { text: "I step back to grasp the overall meaning.", i18nKey: "questions.auto.1.option3", functions: { Ni: 3, Se: -1 }, enneagram: { 5: 1, 9: 2 } },
      { text: "I test live and adjust as I go.", i18nKey: "questions.auto.1.option4", functions: { Se: 3, Ni: -1, Ne: 1 }, enneagram: { 8: 2, 7: 1 } }
    ]
  },
  {
    id: 2,
    question: "Faced with a sensitive decision:",
    i18nKey: "questions.auto.2.question",
    options: [
      { text: "I stay true to my convictions, even if it's unpopular.", i18nKey: "questions.auto.2.option1", functions: { Fi: 3, Te: -1 }, enneagram: { 4: 2, 9: 1 } },
      { text: "I weigh the human impact and group cohesion.", i18nKey: "questions.auto.2.option2", functions: { Fe: 3, Ti: -1, Ne: 1 }, enneagram: { 2: 2, 9: 1 } },
      { text: "I decide based on efficiency and priorities.", i18nKey: "questions.auto.2.option3", functions: { Te: 3, Fi: -1, Si: 1 }, enneagram: { 3: 2, 1: 1 } },
      { text: "I check the logical consistency above all.", i18nKey: "questions.auto.2.option4", functions: { Ti: 3, Fe: -1, Ni: 1 }, enneagram: { 5: 2, 1: 1 } }
    ]
  },
  {
    id: 3,
    question: "Your way of learning something new:",
    i18nKey: "questions.auto.3.question",
    options: [
      { text: "I link concepts to reliable past experiences.", i18nKey: "questions.auto.3.option1", functions: { Si: 3, Ne: -1 }, enneagram: { 6: 2, 1: 1 } },
      { text: "I pick up subtle cues and anticipate what's next.", i18nKey: "questions.auto.3.option2", functions: { Ni: 3, Se: -1 }, enneagram: { 5: 1, 9: 2 } },
      { text: "I explore several avenues in parallel out of curiosity.", i18nKey: "questions.auto.3.option3", functions: { Ne: 3, Si: -1 }, enneagram: { 7: 2, 5: 1 } },
      { text: "I handle things concretely to feel how they react.", i18nKey: "questions.auto.3.option4", functions: { Se: 3, Ni: -1 }, enneagram: { 8: 2, 7: 1 } }
    ]
  },
  {
    id: 4,
    question: "In a conflict:",
    i18nKey: "questions.auto.4.question",
    options: [
      { text: "I protect group harmony and calm things down.", i18nKey: "questions.auto.4.option1", functions: { Fe: 3, Ti: -1 }, enneagram: { 9: 2, 2: 1 } },
      { text: "I stand by my values, even if it ruffles feathers.", i18nKey: "questions.auto.4.option2", functions: { Fi: 3, Te: -1 }, enneagram: { 4: 2, 1: 1 } },
      { text: "I set criteria and propose an exit structure.", i18nKey: "questions.auto.4.option3", functions: { Te: 3, Fi: -1, Si: 1 }, enneagram: { 1: 2, 3: 1 } },
      { text: "I clarify inconsistencies to defuse tension.", i18nKey: "questions.auto.4.option4", functions: { Ti: 3, Fe: -1, Ni: 1 }, enneagram: { 5: 2, 6: 1 } }
    ]
  },
  {
    id: 5,
    question: "When you start a project:",
    i18nKey: "questions.auto.5.question",
    options: [
      { text: "I list the steps and move forward in an organized way.", i18nKey: "questions.auto.5.option1", functions: { Si: 3, Ne: -1, Te: 1 }, enneagram: { 1: 2, 6: 1 } },
      { text: "I envision the ideal outcome and the implicit path.", i18nKey: "questions.auto.5.option2", functions: { Ni: 3, Se: -1 }, enneagram: { 5: 1, 9: 2 } },
      { text: "I brainstorm thoroughly and keep the best ideas.", i18nKey: "questions.auto.5.option3", functions: { Ne: 3, Si: -1, Ti: 1 }, enneagram: { 7: 2, 5: 1 } },
      { text: "I jump straight into tangible action.", i18nKey: "questions.auto.5.option4", functions: { Se: 3, Ni: -1 }, enneagram: { 8: 2, 3: 1 } }
    ]
  },
  {
    id: 6,
    question: "In a group:",
    i18nKey: "questions.auto.6.question",
    options: [
      { text: "I create harmony and connect people.", i18nKey: "questions.auto.6.option1", functions: { Fe: 3, Ti: -1 }, enneagram: { 2: 2, 9: 1 } },
      { text: "I maintain my independence and internal boundaries.", i18nKey: "questions.auto.6.option2", functions: { Fi: 3, Te: -1 }, enneagram: { 4: 2, 9: 1 } },
      { text: "I organize to move forward and deliver.", i18nKey: "questions.auto.6.option3", functions: { Te: 3, Fi: -1 }, enneagram: { 3: 2, 8: 1 } },
      { text: "I analyze the logic of what's happening.", i18nKey: "questions.auto.6.option4", functions: { Ti: 3, Fe: -1 }, enneagram: { 5: 2, 1: 1 } }
    ]
  },
  {
    id: 7,
    question: "Under short-term pressure:",
    i18nKey: "questions.auto.7.question",
    options: [
      { text: "I react quickly and make use of the situation.", i18nKey: "questions.auto.7.option1", functions: { Se: 3, Ni: -1 }, enneagram: { 8: 2, 7: 1 } },
      { text: "I simplify and set a clear course.", i18nKey: "questions.auto.7.option2", functions: { Te: 3, Fi: -1 }, enneagram: { 3: 2, 1: 1 } },
      { text: "I look for the hidden guiding line.", i18nKey: "questions.auto.7.option3", functions: { Ni: 3, Se: -1 }, enneagram: { 5: 1, 9: 2 } },
      { text: "I rely on what has already proven itself.", i18nKey: "questions.auto.7.option4", functions: { Si: 3, Ne: -1 }, enneagram: { 6: 2, 1: 1 } }
    ]
  },
  {
    id: 8,
    question: "To settle a technical disagreement:",
    i18nKey: "questions.auto.8.question",
    options: [
      { text: "I test in real conditions.", i18nKey: "questions.auto.8.option1", functions: { Se: 3, Ni: -1, Te: 1 }, enneagram: { 8: 2, 3: 1 } },
      { text: "I compare with standards and precedents.", i18nKey: "questions.auto.8.option2", functions: { Si: 3, Ne: -1, Ti: 1 }, enneagram: { 6: 2, 1: 1 } },
      { text: "I model the problem and deduce the solution.", i18nKey: "questions.auto.8.option3", functions: { Ti: 3, Fe: -1, Ni: 1 }, enneagram: { 5: 2, 1: 1 } },
      { text: "I seek the solution that preserves cohesion.", i18nKey: "questions.auto.8.option4", functions: { Fe: 3, Ti: -1 }, enneagram: { 2: 2, 9: 1 } }
    ]
  },
  {
    id: 9,
    question: "Your relationship to rules:",
    i18nKey: "questions.auto.9.question",
    options: [
      { text: "I respect them if they make sense and have history.", i18nKey: "questions.auto.9.option1", functions: { Si: 3, Ne: -1 }, enneagram: { 6: 2, 1: 1 } },
      { text: "I change them if they block efficiency.", i18nKey: "questions.auto.9.option2", functions: { Te: 3, Fi: -1 }, enneagram: { 8: 2, 3: 1 } },
      { text: "I ignore them if they clash with my values.", i18nKey: "questions.auto.9.option3", functions: { Fi: 3, Te: -1 }, enneagram: { 4: 2, 9: 1 } },
      { text: "I question them if they're illogical.", i18nKey: "questions.auto.9.option4", functions: { Ti: 3, Fe: -1 }, enneagram: { 5: 2, 1: 1 } }
    ]
  },
  {
    id: 10,
    question: "When you look ahead:",
    i18nKey: "questions.auto.10.question",
    options: [
      { text: "I see the thread linking events.", i18nKey: "questions.auto.10.option1", functions: { Ni: 3, Se: -1 }, enneagram: { 5: 1, 9: 2 } },
      { text: "I imagine several alternative scenarios.", i18nKey: "questions.auto.10.option2", functions: { Ne: 3, Si: -1 }, enneagram: { 7: 2, 5: 1 } },
      { text: "I transpose what worked before.", i18nKey: "questions.auto.10.option3", functions: { Si: 3, Ne: -1 }, enneagram: { 6: 2, 1: 1 } },
      { text: "I rely on what I can test immediately.", i18nKey: "questions.auto.10.option4", functions: { Se: 3, Ni: -1 }, enneagram: { 8: 2, 7: 1 } }
    ]
  },
  {
    id: 11,
    question: "Regarding others:",
    i18nKey: "questions.auto.11.question",
    options: [
      { text: "I want everyone to feel respected and heard.", i18nKey: "questions.auto.11.option1", functions: { Fe: 3, Ti: -1 }, enneagram: { 2: 2, 9: 1 } },
      { text: "I keep my authenticity without overplaying.", i18nKey: "questions.auto.11.option2", functions: { Fi: 3, Te: -1 }, enneagram: { 4: 2, 6: 1 } },
      { text: "I clarify criteria and responsibilities.", i18nKey: "questions.auto.11.option3", functions: { Te: 3, Fi: -1 }, enneagram: { 3: 2, 1: 1 } },
      { text: "I clarify concepts to avoid vagueness.", i18nKey: "questions.auto.11.option4", functions: { Ti: 3, Fe: -1 }, enneagram: { 5: 2, 1: 1 } }
    ]
  },
  {
    id: 12,
    question: "When you doubt:",
    i18nKey: "questions.auto.12.question",
    options: [
      { text: "I go back to facts and traces from the past.", i18nKey: "questions.auto.12.option1", functions: { Si: 3, Ne: -1 }, enneagram: { 6: 2, 1: 1 } },
      { text: "I look for the underlying pattern.", i18nKey: "questions.auto.12.option2", functions: { Ni: 3, Se: -1 }, enneagram: { 5: 1, 9: 2 } },
      { text: "I multiply possibilities and compare.", i18nKey: "questions.auto.12.option3", functions: { Ne: 3, Si: -1, Ti: 1 }, enneagram: { 7: 2, 5: 1 } },
      { text: "I do a quick field test.", i18nKey: "questions.auto.12.option4", functions: { Se: 3, Ni: -1 }, enneagram: { 8: 2, 7: 1 } }
    ]
  },
  {
    id: 13,
    question: "How you stay effective:",
    i18nKey: "questions.auto.13.question",
    options: [
      { text: "Criteria, milestones, something concrete.", i18nKey: "questions.auto.13.option1", functions: { Te: 3, Fi: -1, Si: 1 }, enneagram: { 3: 2, 1: 1 } },
      { text: "A clear, logical model.", i18nKey: "questions.auto.13.option2", functions: { Ti: 3, Fe: -1, Ni: 1 }, enneagram: { 5: 2, 1: 1 } },
      { text: "Choices aligned with my values.", i18nKey: "questions.auto.13.option3", functions: { Fi: 3, Te: -1 }, enneagram: { 4: 2, 9: 1 } },
      { text: "Visible, measurable actions.", i18nKey: "questions.auto.13.option4", functions: { Se: 3, Ni: -1 }, enneagram: { 8: 2, 3: 1 } }
    ]
  },
  {
    id: 14,
    question: "When someone suggests a shaky idea:",
    i18nKey: "questions.auto.14.question",
    options: [
      { text: "I frame it and reformulate it into a workable plan.", i18nKey: "questions.auto.14.option1", functions: { Te: 3, Fi: -1 }, enneagram: { 3: 2, 8: 1 } },
      { text: "I question it until I find the flaw.", i18nKey: "questions.auto.14.option2", functions: { Ti: 3, Fe: -1 }, enneagram: { 5: 2, 1: 1 } },
      { text: "I try to value and include the person.", i18nKey: "questions.auto.14.option3", functions: { Fe: 3, Ti: -1 }, enneagram: { 2: 2, 9: 1 } },
      { text: "I propose creative alternatives.", i18nKey: "questions.auto.14.option4", functions: { Ne: 3, Si: -1 }, enneagram: { 7: 2, 3: 1 } }
    ]
  },
  {
    id: 15,
    question: "Your daily preference:",
    i18nKey: "questions.auto.15.question",
    options: [
      { text: "Routines and stable reference points.", i18nKey: "questions.auto.15.option1", functions: { Si: 3, Ne: -1 }, enneagram: { 6: 2, 1: 1 } },
      { text: "Discoveries and variety.", i18nKey: "questions.auto.15.option2", functions: { Ne: 3, Si: -1 }, enneagram: { 7: 2, 3: 1 } },
      { text: "Underlying vision and inner continuity.", i18nKey: "questions.auto.15.option3", functions: { Ni: 3, Se: -1 }, enneagram: { 5: 1, 9: 2 } },
      { text: "Action and immediate feedback.", i18nKey: "questions.auto.15.option4", functions: { Se: 3, Ni: -1 }, enneagram: { 8: 2, 7: 1 } }
    ]
  },
  {
    id: 16,
    question: "When you help:",
    i18nKey: "questions.auto.16.question",
    options: [
      { text: "I create connection and facilitate exchanges.", i18nKey: "questions.auto.16.option1", functions: { Fe: 3, Ti: -1 }, enneagram: { 2: 2, 9: 1 } },
      { text: "I respect each person's autonomy and boundaries.", i18nKey: "questions.auto.16.option2", functions: { Fi: 3, Te: -1 }, enneagram: { 4: 2, 9: 1 } },
      { text: "I provide useful tools/processes.", i18nKey: "questions.auto.16.option3", functions: { Te: 3, Fi: -1 }, enneagram: { 3: 2, 1: 1 } },
      { text: "I clarify so the person can understand on their own.", i18nKey: "questions.auto.16.option4", functions: { Ti: 3, Fe: -1 }, enneagram: { 5: 2, 1: 1 } }
    ]
  },
  {
    id: 17,
    question: "Under uncertainty:",
    i18nKey: "questions.auto.17.question",
    options: [
      { text: "I rely on deep clues.", i18nKey: "questions.auto.17.option1", functions: { Ni: 3, Se: -1 }, enneagram: { 5: 1, 9: 2 } },
      { text: "I multiply quick trials.", i18nKey: "questions.auto.17.option2", functions: { Se: 3, Ni: -1 }, enneagram: { 8: 2, 7: 1 } },
      { text: "I create several competing hypotheses.", i18nKey: "questions.auto.17.option3", functions: { Ne: 3, Si: -1, Ti: 1 }, enneagram: { 7: 2, 5: 1 } },
      { text: "I go back to precedents and rules.", i18nKey: "questions.auto.17.option4", functions: { Si: 3, Ne: -1 }, enneagram: { 6: 2, 1: 1 } }
    ]
  },
  {
    id: 18,
    question: "When you express yourself:",
    i18nKey: "questions.auto.18.question",
    options: [
      { text: "I speak about what's true for me.", i18nKey: "questions.auto.18.option1", functions: { Fi: 3, Te: -1 }, enneagram: { 4: 2, 9: 1 } },
      { text: "I look for words that bring people together.", i18nKey: "questions.auto.18.option2", functions: { Fe: 3, Ti: -1 }, enneagram: { 2: 2, 9: 1 } },
      { text: "I structure and go straight to the point.", i18nKey: "questions.auto.18.option3", functions: { Te: 3, Fi: -1 }, enneagram: { 3: 2, 8: 1 } },
      { text: "I specify each term to avoid vagueness.", i18nKey: "questions.auto.18.option4", functions: { Ti: 3, Fe: -1 }, enneagram: { 5: 2, 1: 1 } }
    ]
  },
  {
    id: 19,
    question: "When faced with a mistake:",
    i18nKey: "questions.auto.19.question",
    options: [
      { text: "I fix the process so it doesn't happen again.", i18nKey: "questions.auto.19.option1", functions: { Te: 3, Fi: -1, Si: 1 }, enneagram: { 1: 2, 3: 1 } },
      { text: "I understand the mechanism that went off track.", i18nKey: "questions.auto.19.option2", functions: { Ti: 3, Fe: -1, Ni: 1 }, enneagram: { 5: 2, 1: 1 } },
      { text: "I spot the warning signs.", i18nKey: "questions.auto.19.option3", functions: { Ni: 3, Se: -1 }, enneagram: { 5: 1, 9: 2 } },
      { text: "I run a field test to secure.", i18nKey: "questions.auto.19.option4", functions: { Se: 3, Ni: -1 }, enneagram: { 8: 2, 7: 1 } }
    ]
  },
  {
    id: 20,
    question: "Your deep motivation:",
    i18nKey: "questions.auto.20.question",
    options: [
      { text: "Being aligned with who I am.", i18nKey: "questions.auto.20.option1", functions: { Fi: 3, Te: -1 }, enneagram: { 4: 2, 9: 1 } },
      { text: "Lifting others and the relationship.", i18nKey: "questions.auto.20.option2", functions: { Fe: 3, Ti: -1 }, enneagram: { 2: 2, 9: 1 } },
      { text: "Turning things into concrete results.", i18nKey: "questions.auto.20.option3", functions: { Te: 3, Fi: -1 }, enneagram: { 3: 2, 8: 1 } },
      { text: "Understanding and clarifying the truth.", i18nKey: "questions.auto.20.option4", functions: { Ti: 3, Fe: -1 }, enneagram: { 5: 2, 1: 1 } }
    ]
  }
];

const EXTERNAL_QUESTIONS = [

  {
    id: 1,
    question: "When something unexpected happens, your relative:",
    i18nKey: "questions.external.1.question",
    options: [
      { text: "Acts quickly and adjusts on the spot.", i18nKey: "questions.external.1.option1", functions: { Se: 3, Ni: -1, Te: 1 }, enneagram: { 8: 2, 7: 1 } },
      { text: "Steps back to grasp the overall meaning.", i18nKey: "questions.external.1.option2", functions: { Ni: 3, Se: -1 }, enneagram: { 5: 1, 9: 2 } },
      { text: "Looks for a precedent and an applicable rule.", i18nKey: "questions.external.1.option3", functions: { Si: 3, Ne: -1 }, enneagram: { 6: 2, 1: 1 } },
      { text: "Unfolds the logic of the problem before acting.", i18nKey: "questions.external.1.option4", functions: { Ti: 3, Fe: -1 }, enneagram: { 5: 2, 1: 1 } }
    ]
  },

  {
    id: 2,
    question: "In a group discussion, he/she:",
    i18nKey: "questions.external.2.question",
    options: [
      { text: "Encourages everyone to participate and keeps harmony.", i18nKey: "questions.external.2.option1", functions: { Fe: 3, Ti: -1 }, enneagram: { 2: 2, 9: 1 } },
      { text: "Expresses ideas authentically, even if it bothers others.", i18nKey: "questions.external.2.option2", functions: { Fi: 3, Te: -1 }, enneagram: { 4: 2, 6: 1 } },
      { text: "Refocuses the discussion toward a concrete goal.", i18nKey: "questions.external.2.option3", functions: { Te: 3, Fi: -1 }, enneagram: { 3: 2, 8: 1 } },
      { text: "Asks questions to clarify the logic.", i18nKey: "questions.external.2.option4", functions: { Ti: 3, Fe: -1 }, enneagram: { 5: 2, 1: 1 } }
    ]
  },

  {
    id: 3,
    question: "Their relation to values:",
    i18nKey: "questions.external.3.question",
    options: [
      { text: "Stays authentic even if it's unpopular.", i18nKey: "questions.external.3.option1", functions: { Fi: 3, Te: -1 }, enneagram: { 4: 2, 9: 1 } },
      { text: "Favors cohesion and the group's feelings.", i18nKey: "questions.external.3.option2", functions: { Fe: 3, Ti: -1 }, enneagram: { 2: 2, 9: 1 } },
      { text: "Prioritizes measurable efficiency.", i18nKey: "questions.external.3.option3", functions: { Te: 3, Fi: -1 }, enneagram: { 3: 2, 8: 1 } },
      { text: "Prioritizes logical accuracy.", i18nKey: "questions.external.3.option4", functions: { Ti: 3, Fe: -1 }, enneagram: { 5: 2, 1: 1 } }
    ]
  },

  {
    id: 4,
    question: "When they learn something new:",
    i18nKey: "questions.external.4.question",
    options: [
      { text: "Relies on past experiences and references.", i18nKey: "questions.external.4.option1", functions: { Si: 3, Ne: -1 }, enneagram: { 6: 2, 1: 1 } },
      { text: "Experiments quickly to see what happens.", i18nKey: "questions.external.4.option2", functions: { Se: 3, Ni: -1 }, enneagram: { 8: 2, 7: 1 } },
      { text: "Imagines alternative and creative scenarios.", i18nKey: "questions.external.4.option3", functions: { Ne: 3, Si: -1 }, enneagram: { 7: 2, 5: 1 } },
      { text: "Grasps the deeper meaning without explaining everything.", i18nKey: "questions.external.4.option4", functions: { Ni: 3, Se: -1 }, enneagram: { 5: 1, 9: 2 } }
    ]
  },

  {
    id: 5,
    question: "When they have to handle a practical problem:",
    i18nKey: "questions.external.5.question",
    options: [
      { text: "Looks for a rule or example from the past.", i18nKey: "questions.external.5.option1", functions: { Si: 3, Ne: -1 }, enneagram: { 6: 2, 1: 1 } },
      { text: "Tests a concrete solution right away.", i18nKey: "questions.external.5.option2", functions: { Se: 3, Ni: -1 }, enneagram: { 8: 2, 7: 1 } },
      { text: "Seeks a detailed logical explanation.", i18nKey: "questions.external.5.option3", functions: { Ti: 3, Fe: -1 }, enneagram: { 5: 2, 1: 1 } },
      { text: "Wonders how to maintain human cohesion.", i18nKey: "questions.external.5.option4", functions: { Fe: 3, Ti: -1 }, enneagram: { 2: 2, 9: 1 } }
    ]
  },

  {
    id: 6,
    question: "When they make quick decisions:",
    i18nKey: "questions.external.6.question",
    options: [
      { text: "Relies on broad intuitions.", i18nKey: "questions.external.6.option1", functions: { Ni: 3, Se: -1 }, enneagram: { 5: 1, 9: 2 } },
      { text: "Follows personal values without compromise.", i18nKey: "questions.external.6.option2", functions: { Fi: 3, Te: -1 }, enneagram: { 4: 2, 9: 1 } },
      { text: "Focuses on immediate efficiency.", i18nKey: "questions.external.6.option3", functions: { Te: 3, Fi: -1 }, enneagram: { 3: 2, 8: 1 } },
      { text: "Tests directly in the field.", i18nKey: "questions.external.6.option4", functions: { Se: 3, Ni: -1 }, enneagram: { 8: 2, 7: 1 } }
    ]
  },

  {
    id: 7,
    question: "In relationships, your relative tends to:",
    i18nKey: "questions.external.7.question",
    options: [
      { text: "Ease tensions and seek harmony.", i18nKey: "questions.external.7.option1", functions: { Fe: 3, Ti: -1 }, enneagram: { 9: 2, 2: 1 } },
      { text: "Assert their authenticity and feelings.", i18nKey: "questions.external.7.option2", functions: { Fi: 3, Te: -1 }, enneagram: { 4: 2, 6: 1 } },
      { text: "Give clear, concrete directions.", i18nKey: "questions.external.7.option3", functions: { Te: 3, Fi: -1 }, enneagram: { 3: 2, 8: 1 } },
      { text: "Favor precision and logic.", i18nKey: "questions.external.7.option4", functions: { Ti: 3, Fe: -1 }, enneagram: { 5: 2, 1: 1 } }
    ]
  },

  {
    id: 8,
    question: "When faced with a new idea, your relative:",
    i18nKey: "questions.external.8.question",
    options: [
      { text: "Looks at how it's been done elsewhere.", i18nKey: "questions.external.8.option1", functions: { Si: 3, Ne: -1 }, enneagram: { 6: 2, 1: 1 } },
      { text: "Imagines other avenues from there.", i18nKey: "questions.external.8.option2", functions: { Ne: 3, Si: -1 }, enneagram: { 7: 2, 3: 1 } },
      { text: "Immediately senses where it can lead.", i18nKey: "questions.external.8.option3", functions: { Ni: 3, Se: -1 }, enneagram: { 5: 1, 9: 2 } },
      { text: "Tests it concretely and observes the result.", i18nKey: "questions.external.8.option4", functions: { Se: 3, Ni: -1 }, enneagram: { 8: 2, 7: 1 } }
    ]
  },

  {
    id: 9,
    question: "When he/she expresses an opinion:",
    i18nKey: "questions.external.9.question",
    options: [
      { text: "Highlights personal truth.", i18nKey: "questions.external.9.option1", functions: { Fi: 3, Te: -1 }, enneagram: { 4: 2, 9: 1 } },
      { text: "Adapts speech to bring people together.", i18nKey: "questions.external.9.option2", functions: { Fe: 3, Ti: -1 }, enneagram: { 2: 2, 9: 1 } },
      { text: "Structures it in logical, measurable steps.", i18nKey: "questions.external.9.option3", functions: { Te: 3, Fi: -1 }, enneagram: { 3: 2, 8: 1 } },
      { text: "Defends intellectual coherence.", i18nKey: "questions.external.9.option4", functions: { Ti: 3, Fe: -1 }, enneagram: { 5: 2, 1: 1 } }
    ]
  },

  {
    id: 10,
    question: "Their relationship to rules:",
    i18nKey: "questions.external.10.question",
    options: [
      { text: "Relies on them for security.", i18nKey: "questions.external.10.option1", functions: { Si: 3, Ne: -1 }, enneagram: { 6: 2, 1: 1 } },
      { text: "Changes them if they hinder results.", i18nKey: "questions.external.10.option2", functions: { Te: 3, Fi: -1 }, enneagram: { 8: 2, 3: 1 } },
      { text: "Challenges them if they're illogical.", i18nKey: "questions.external.10.option3", functions: { Ti: 3, Fe: -1 }, enneagram: { 5: 2, 1: 1 } },
      { text: "Strays from them if they clash with personal values.", i18nKey: "questions.external.10.option4", functions: { Fi: 3, Te: -1 }, enneagram: { 4: 2, 9: 1 } }
    ]
  },

  {
    id: 12,
    question: "When he/she defends a point:",
    i18nKey: "questions.external.12.question",
    options: [
      { text: "Aligns with internal values.", i18nKey: "questions.external.12.option1", functions: { Fi: 3, Te: -1 }, enneagram: { 4: 2, 9: 1 } },
      { text: "Seeks words that bring people together.", i18nKey: "questions.external.12.option2", functions: { Fe: 3, Ti: -1 }, enneagram: { 2: 2, 9: 1 } },
      { text: "Highlights structure and outcome.", i18nKey: "questions.external.12.option3", functions: { Te: 3, Fi: -1 }, enneagram: { 3: 2, 8: 1 } },
      { text: "Demonstrates logical coherence.", i18nKey: "questions.external.12.option4", functions: { Ti: 3, Fe: -1 }, enneagram: { 5: 2, 1: 1 } }
    ]
  },

  {
    id: 14,
    question: "Your relative's general style:",
    i18nKey: "questions.external.14.question",
    options: [
      { text: "Rather stable and consistent.", i18nKey: "questions.external.14.option1", functions: { Si: 3, Ne: -1 }, enneagram: { 6: 2, 1: 1 } },
      { text: "Rather adventurous and curious.", i18nKey: "questions.external.14.option2", functions: { Ne: 3, Si: -1 }, enneagram: { 7: 2, 3: 1 } },
      { text: "Rather visionary and synthetic.", i18nKey: "questions.external.14.option3", functions: { Ni: 3, Se: -1 }, enneagram: { 5: 1, 9: 2 } },
      { text: "Rather pragmatic and hands-on.", i18nKey: "questions.external.14.option4", functions: { Se: 3, Ni: -1 }, enneagram: { 8: 2, 7: 1 } }
    ]
  },

  {
    id: 15,
    question: "In debates, your relative:",
    i18nKey: "questions.external.15.question",
    options: [
      { text: "Stays focused on results and decisions.", i18nKey: "questions.external.15.option1", functions: { Te: 3, Fi: -1 }, enneagram: { 3: 2, 8: 1 } },
      { text: "Prioritizes conceptual clarity.", i18nKey: "questions.external.15.option2", functions: { Ti: 3, Fe: -1 }, enneagram: { 5: 2, 1: 1 } },
      { text: "Seeks cohesion and peace.", i18nKey: "questions.external.15.option3", functions: { Fe: 3, Ti: -1 }, enneagram: { 2: 2, 9: 1 } },
      { text: "Asserts a calm authenticity.", i18nKey: "questions.external.15.option4", functions: { Fi: 3, Te: -1 }, enneagram: { 4: 2, 9: 1 } }
    ]
  },

  {
    id: 18,
    question: "Your relative's decision-making style:",
    i18nKey: "questions.external.18.question",
    options: [
      { text: "Pragmatic, hands-on first.", i18nKey: "questions.external.18.option1", functions: { Se: 3, Ni: -1, Te: 1 }, enneagram: { 8: 2, 3: 1 } },
      { text: "Structured, with steps and criteria.", i18nKey: "questions.external.18.option2", functions: { Te: 3, Fi: -1, Si: 1 }, enneagram: { 3: 2, 1: 1 } },
      { text: "Intuitive, captures the implicit direction.", i18nKey: "questions.external.18.option3", functions: { Ni: 3, Se: -1 }, enneagram: { 5: 1, 9: 2 } },
      { text: "Logical, demonstrates before deciding.", i18nKey: "questions.external.18.option4", functions: { Ti: 3, Fe: -1 }, enneagram: { 5: 2, 1: 1 } }
    ]
  },

  {
    id: 19,
    question: "Over time, your relative:",
    i18nKey: "questions.external.19.question",
    options: [
      { text: "Stays the course through solid habits.", i18nKey: "questions.external.19.option1", functions: { Si: 3, Ne: -1 }, enneagram: { 6: 2, 1: 1 } },
      { text: "Refreshes things with new ideas.", i18nKey: "questions.external.19.option2", functions: { Ne: 3, Si: -1 }, enneagram: { 7: 2, 3: 1 } },
      { text: "Maintains underlying coherence.", i18nKey: "questions.external.19.option3", functions: { Ni: 3, Se: -1 }, enneagram: { 5: 1, 9: 2 } },
      { text: "Secures things through tangible actions.", i18nKey: "questions.external.19.option4", functions: { Se: 3, Ni: -1 }, enneagram: { 8: 2, 7: 1 } }
    ]
  },

  {
    id: 20,
    question: "What people remember most about them:",
    i18nKey: "questions.external.20.question",
    options: [
      { text: "Personal alignment and integrity.", i18nKey: "questions.external.20.option1", functions: { Fi: 3, Te: -1 }, enneagram: { 4: 2, 9: 1 } },
      { text: "Relational support and team-building.", i18nKey: "questions.external.20.option2", functions: { Fe: 3, Ti: -1 }, enneagram: { 2: 2, 9: 1 } },
      { text: "Ability to deliver and organize.", i18nKey: "questions.external.20.option3", functions: { Te: 3, Fi: -1 }, enneagram: { 3: 2, 8: 1 } },
      { text: "Intellectual clarity and precision.", i18nKey: "questions.external.20.option4", functions: { Ti: 3, Fe: -1 }, enneagram: { 5: 2, 1: 1 } }
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

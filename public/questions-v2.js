const AUTO_QUESTIONS = [
  {
    "id": 1,
    "question": "When a plan starts in a spin, what are you doing first?",
    "i18nKey": "questions.auto.1.question",
    "options": [
      {
        "text": "I question point by point until clarifying.",
        "i18nKey": "questions.auto.1.option1",
        "functions": {
          "Ti": 3,
          "Fe": -1,
          "Ni": 1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      },
      {
        "text": "I reframe and fix a simple and measurable plan.",
        "i18nKey": "questions.auto.1.option2",
        "functions": {
          "Te": 3,
          "Fi": -1,
          "Si": 1
        },
        "enneagram": {
          "3": 2,
          "8": 1
        }
      },
      {
        "text": "I take a step back to grasp the overall meaning.",
        "i18nKey": "questions.auto.1.option3",
        "functions": {
          "Ni": 3,
          "Se": -1
        },
        "enneagram": {
          "5": 1,
          "9": 2
        }
      },
      {
        "text": "I test live and adjust as you go.",
        "i18nKey": "questions.auto.1.option4",
        "functions": {
          "Se": 3,
          "Ni": -1,
          "Ne": 1
        },
        "enneagram": {
          "7": 1,
          "8": 2
        }
      }
    ]
  },
  {
    "id": 2,
    "question": "Faced with a sensitive decision:",
    "i18nKey": "questions.auto.2.question",
    "options": [
      {
        "text": "I remain faithful to my convictions, even if it is unpopular.",
        "i18nKey": "questions.auto.2.option1",
        "functions": {
          "Fi": 3,
          "Te": -1
        },
        "enneagram": {
          "4": 2,
          "9": 1
        }
      },
      {
        "text": "I weigh the human impact and the cohesion of the group.",
        "i18nKey": "questions.auto.2.option2",
        "functions": {
          "Fe": 3,
          "Ti": -1,
          "Ne": 1
        },
        "enneagram": {
          "2": 2,
          "9": 1
        }
      },
      {
        "text": "I decide depending on efficiency and priorities.",
        "i18nKey": "questions.auto.2.option3",
        "functions": {
          "Te": 3,
          "Fi": -1,
          "Si": 1
        },
        "enneagram": {
          "1": 1,
          "3": 2
        }
      },
      {
        "text": "I check logical consistency above all.",
        "i18nKey": "questions.auto.2.option4",
        "functions": {
          "Ti": 3,
          "Fe": -1,
          "Ni": 1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      }
    ]
  },
  {
    "id": 3,
    "question": "Your way of learning something new:",
    "i18nKey": "questions.auto.3.question",
    "options": [
      {
        "text": "I connect concepts to reliable past experiences.",
        "i18nKey": "questions.auto.3.option1",
        "functions": {
          "Si": 3,
          "Ne": -1
        },
        "enneagram": {
          "1": 1,
          "6": 2
        }
      },
      {
        "text": "I capture weak signals and anticipate the rest.",
        "i18nKey": "questions.auto.3.option2",
        "functions": {
          "Ni": 3,
          "Se": -1
        },
        "enneagram": {
          "5": 1,
          "9": 2
        }
      },
      {
        "text": "I explore several tracks in parallel, out of curiosity.",
        "i18nKey": "questions.auto.3.option3",
        "functions": {
          "Ne": 3,
          "Si": -1
        },
        "enneagram": {
          "5": 1,
          "7": 2
        }
      },
      {
        "text": "I manipulate concretely to feel how it reacts.",
        "i18nKey": "questions.auto.3.option4",
        "functions": {
          "Se": 3,
          "Ni": -1
        },
        "enneagram": {
          "7": 1,
          "8": 2
        }
      }
    ]
  },
  {
    "id": 4,
    "question": "In a conflict:",
    "i18nKey": "questions.auto.4.question",
    "options": [
      {
        "text": "I protect the peace of the group and I calm down.",
        "i18nKey": "questions.auto.4.option1",
        "functions": {
          "Fe": 3,
          "Ti": -1
        },
        "enneagram": {
          "2": 1,
          "9": 2
        }
      },
      {
        "text": "I remain straight with my values, even if it means offending.",
        "i18nKey": "questions.auto.4.option2",
        "functions": {
          "Fi": 3,
          "Te": -1
        },
        "enneagram": {
          "1": 1,
          "4": 2
        }
      },
      {
        "text": "I take criteria, offer an output structure.",
        "i18nKey": "questions.auto.4.option3",
        "functions": {
          "Te": 3,
          "Fi": -1,
          "Si": 1
        },
        "enneagram": {
          "1": 2,
          "3": 1
        }
      },
      {
        "text": "I clarify the inconsistency areas to move.",
        "i18nKey": "questions.auto.4.option4",
        "functions": {
          "Ti": 3,
          "Fe": -1,
          "Ni": 1
        },
        "enneagram": {
          "5": 2,
          "6": 1
        }
      }
    ]
  },
  {
    "id": 5,
    "question": "When you start a project:",
    "i18nKey": "questions.auto.5.question",
    "options": [
      {
        "text": "I list the steps and go on a framework.",
        "i18nKey": "questions.auto.5.option1",
        "functions": {
          "Si": 3,
          "Ne": -1,
          "Te": 1
        },
        "enneagram": {
          "1": 2,
          "6": 1
        }
      },
      {
        "text": "I view the ideal outcome and the implicit path.",
        "i18nKey": "questions.auto.5.option2",
        "functions": {
          "Ni": 3,
          "Se": -1
        },
        "enneagram": {
          "5": 1,
          "9": 2
        }
      },
      {
        "text": "I brainstorm thoroughly and keep the best.",
        "i18nKey": "questions.auto.5.option3",
        "functions": {
          "Ne": 3,
          "Si": -1,
          "Ti": 1
        },
        "enneagram": {
          "5": 1,
          "7": 2
        }
      },
      {
        "text": "I immediately go to the tangible action.",
        "i18nKey": "questions.auto.5.option4",
        "functions": {
          "Se": 3,
          "Ni": -1
        },
        "enneagram": {
          "3": 1,
          "8": 2
        }
      }
    ]
  },
  {
    "id": 6,
    "question": "In a group:",
    "i18nKey": "questions.auto.6.question",
    "options": [
      {
        "text": "I create harmony and connect people.",
        "i18nKey": "questions.auto.6.option1",
        "functions": {
          "Fe": 3,
          "Ti": -1
        },
        "enneagram": {
          "2": 2,
          "9": 1
        }
      },
      {
        "text": "I keep my independence and my internal limits.",
        "i18nKey": "questions.auto.6.option2",
        "functions": {
          "Fi": 3,
          "Te": -1
        },
        "enneagram": {
          "4": 2,
          "9": 1
        }
      },
      {
        "text": "I organize to move forward and deliver.",
        "i18nKey": "questions.auto.6.option3",
        "functions": {
          "Te": 3,
          "Fi": -1
        },
        "enneagram": {
          "3": 2,
          "8": 1
        }
      },
      {
        "text": "I analyze the logic of what's going on.",
        "i18nKey": "questions.auto.6.option4",
        "functions": {
          "Ti": 3,
          "Fe": -1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      }
    ]
  },
  {
    "id": 7,
    "question": "Under short pressure:",
    "i18nKey": "questions.auto.7.question",
    "options": [
      {
        "text": "I react quickly and take advantage of the field.",
        "i18nKey": "questions.auto.7.option1",
        "functions": {
          "Se": 3,
          "Ni": -1
        },
        "enneagram": {
          "7": 1,
          "8": 2
        }
      },
      {
        "text": "I simplify and fix a clear course.",
        "i18nKey": "questions.auto.7.option2",
        "functions": {
          "Te": 3,
          "Fi": -1
        },
        "enneagram": {
          "1": 1,
          "3": 2
        }
      },
      {
        "text": "I am looking for the hidden guideline.",
        "i18nKey": "questions.auto.7.option3",
        "functions": {
          "Ni": 3,
          "Se": -1
        },
        "enneagram": {
          "5": 1,
          "9": 2
        }
      },
      {
        "text": "I rely on what has already proven itself.",
        "i18nKey": "questions.auto.7.option4",
        "functions": {
          "Si": 3,
          "Ne": -1
        },
        "enneagram": {
          "1": 1,
          "6": 2
        }
      }
    ]
  },
  {
    "id": 8,
    "question": "To decide a technical disagreement:",
    "i18nKey": "questions.auto.8.question",
    "options": [
      {
        "text": "I test in real conditions.",
        "i18nKey": "questions.auto.8.option1",
        "functions": {
          "Se": 3,
          "Ni": -1,
          "Te": 1
        },
        "enneagram": {
          "3": 1,
          "8": 2
        }
      },
      {
        "text": "I compare with standards and previous ones.",
        "i18nKey": "questions.auto.8.option2",
        "functions": {
          "Si": 3,
          "Ne": -1,
          "Ti": 1
        },
        "enneagram": {
          "1": 1,
          "6": 2
        }
      },
      {
        "text": "I model the problem and deduce the solution.",
        "i18nKey": "questions.auto.8.option3",
        "functions": {
          "Ti": 3,
          "Fe": -1,
          "Ni": 1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      },
      {
        "text": "I am looking for the solution that preserves cohesion.",
        "i18nKey": "questions.auto.8.option4",
        "functions": {
          "Fe": 3,
          "Ti": -1
        },
        "enneagram": {
          "2": 2,
          "9": 1
        }
      }
    ]
  },
  {
    "id": 9,
    "question": "Your relationship to rules:",
    "i18nKey": "questions.auto.9.question",
    "options": [
      {
        "text": "I respect if it makes sense and history.",
        "i18nKey": "questions.auto.9.option1",
        "functions": {
          "Si": 3,
          "Ne": -1
        },
        "enneagram": {
          "1": 1,
          "6": 2
        }
      },
      {
        "text": "I change them if they block efficiency.",
        "i18nKey": "questions.auto.9.option2",
        "functions": {
          "Te": 3,
          "Fi": -1
        },
        "enneagram": {
          "3": 1,
          "8": 2
        }
      },
      {
        "text": "I dismiss myself if it strikes my values.",
        "i18nKey": "questions.auto.9.option3",
        "functions": {
          "Fi": 3,
          "Te": -1
        },
        "enneagram": {
          "4": 2,
          "9": 1
        }
      },
      {
        "text": "I discuss them if they are illogical.",
        "i18nKey": "questions.auto.9.option4",
        "functions": {
          "Ti": 3,
          "Fe": -1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      }
    ]
  },
  {
    "id": 10,
    "question": "When you project yourself:",
    "i18nKey": "questions.auto.10.question",
    "options": [
      {
        "text": "I see the common thread of the events.",
        "i18nKey": "questions.auto.10.option1",
        "functions": {
          "Ni": 3,
          "Se": -1
        },
        "enneagram": {
          "5": 1,
          "9": 2
        }
      },
      {
        "text": "I imagine several alternative scenarios.",
        "i18nKey": "questions.auto.10.option2",
        "functions": {
          "Ne": 3,
          "Si": -1
        },
        "enneagram": {
          "5": 1,
          "7": 2
        }
      },
      {
        "text": "I transpose what worked yesterday.",
        "i18nKey": "questions.auto.10.option3",
        "functions": {
          "Si": 3,
          "Ne": -1
        },
        "enneagram": {
          "1": 1,
          "6": 2
        }
      },
      {
        "text": "I base myself on what I can test right away.",
        "i18nKey": "questions.auto.10.option4",
        "functions": {
          "Se": 3,
          "Ni": -1
        },
        "enneagram": {
          "7": 1,
          "8": 2
        }
      }
    ]
  },
  {
    "id": 11,
    "question": "With regard to others:",
    "i18nKey": "questions.auto.11.question",
    "options": [
      {
        "text": "I want us to feel respected and heard.",
        "i18nKey": "questions.auto.11.option1",
        "functions": {
          "Fe": 3,
          "Ti": -1
        },
        "enneagram": {
          "2": 2,
          "9": 1
        }
      },
      {
        "text": "I keep my authenticity without overplaying.",
        "i18nKey": "questions.auto.11.option2",
        "functions": {
          "Fi": 3,
          "Te": -1
        },
        "enneagram": {
          "4": 2,
          "6": 1
        }
      },
      {
        "text": "I clarify the criteria and responsibilities.",
        "i18nKey": "questions.auto.11.option3",
        "functions": {
          "Te": 3,
          "Fi": -1
        },
        "enneagram": {
          "1": 1,
          "3": 2
        }
      },
      {
        "text": "I clarify the concepts to avoid blurring.",
        "i18nKey": "questions.auto.11.option4",
        "functions": {
          "Ti": 3,
          "Fe": -1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      }
    ]
  },
  {
    "id": 12,
    "question": "When you doubt:",
    "i18nKey": "questions.auto.12.question",
    "options": [
      {
        "text": "I come back to the facts and traces of the past.",
        "i18nKey": "questions.auto.12.option1",
        "functions": {
          "Si": 3,
          "Ne": -1
        },
        "enneagram": {
          "1": 1,
          "6": 2
        }
      },
      {
        "text": "I'm looking for the underlying pattern.",
        "i18nKey": "questions.auto.12.option2",
        "functions": {
          "Ni": 3,
          "Se": -1
        },
        "enneagram": {
          "5": 1,
          "9": 2
        }
      },
      {
        "text": "I multiply the tracks and I compare.",
        "i18nKey": "questions.auto.12.option3",
        "functions": {
          "Ne": 3,
          "Si": -1,
          "Ti": 1
        },
        "enneagram": {
          "5": 1,
          "7": 2
        }
      },
      {
        "text": "I do a quick test in the field.",
        "i18nKey": "questions.auto.12.option4",
        "functions": {
          "Se": 3,
          "Ni": -1
        },
        "enneagram": {
          "7": 1,
          "8": 2
        }
      }
    ]
  },
  {
    "id": 13,
    "question": "Your way of being effective:",
    "i18nKey": "questions.auto.13.question",
    "options": [
      {
        "text": "Criteria, milestones, concrete.",
        "i18nKey": "questions.auto.13.option1",
        "functions": {
          "Te": 3,
          "Fi": -1,
          "Si": 1
        },
        "enneagram": {
          "1": 1,
          "3": 2
        }
      },
      {
        "text": "A clear and logical model.",
        "i18nKey": "questions.auto.13.option2",
        "functions": {
          "Ti": 3,
          "Fe": -1,
          "Ni": 1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      },
      {
        "text": "Choices aligned with my values.",
        "i18nKey": "questions.auto.13.option3",
        "functions": {
          "Fi": 3,
          "Te": -1
        },
        "enneagram": {
          "4": 2,
          "9": 1
        }
      },
      {
        "text": "Visible and measurable actions.",
        "i18nKey": "questions.auto.13.option4",
        "functions": {
          "Se": 3,
          "Ni": -1
        },
        "enneagram": {
          "3": 1,
          "8": 2
        }
      }
    ]
  },
  {
    "id": 14,
    "question": "When someone offers a wobbly idea:",
    "i18nKey": "questions.auto.14.question",
    "options": [
      {
        "text": "I supervise it and I reformulate in feasible plan.",
        "i18nKey": "questions.auto.14.option1",
        "functions": {
          "Te": 3,
          "Fi": -1
        },
        "enneagram": {
          "3": 2,
          "8": 1
        }
      },
      {
        "text": "I question until they find the fault.",
        "i18nKey": "questions.auto.14.option2",
        "functions": {
          "Ti": 3,
          "Fe": -1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      },
      {
        "text": "I try to value and include the person.",
        "i18nKey": "questions.auto.14.option3",
        "functions": {
          "Fe": 3,
          "Ti": -1
        },
        "enneagram": {
          "2": 2,
          "9": 1
        }
      },
      {
        "text": "I offer creative alternatives.",
        "i18nKey": "questions.auto.14.option4",
        "functions": {
          "Ne": 3,
          "Si": -1
        },
        "enneagram": {
          "3": 1,
          "7": 2
        }
      }
    ]
  },
  {
    "id": 15,
    "question": "Your daily preference:",
    "i18nKey": "questions.auto.15.question",
    "options": [
      {
        "text": "Stable routines and benchmarks.",
        "i18nKey": "questions.auto.15.option1",
        "functions": {
          "Si": 3,
          "Ne": -1
        },
        "enneagram": {
          "1": 1,
          "6": 2
        }
      },
      {
        "text": "Discoveries and variations.",
        "i18nKey": "questions.auto.15.option2",
        "functions": {
          "Ne": 3,
          "Si": -1
        },
        "enneagram": {
          "3": 1,
          "7": 2
        }
      },
      {
        "text": "Substantive vision and internal continuity.",
        "i18nKey": "questions.auto.15.option3",
        "functions": {
          "Ni": 3,
          "Se": -1
        },
        "enneagram": {
          "5": 1,
          "9": 2
        }
      },
      {
        "text": "Immediate action and return.",
        "i18nKey": "questions.auto.15.option4",
        "functions": {
          "Se": 3,
          "Ni": -1
        },
        "enneagram": {
          "7": 1,
          "8": 2
        }
      }
    ]
  },
  {
    "id": 16,
    "question": "When you help:",
    "i18nKey": "questions.auto.16.question",
    "options": [
      {
        "text": "I create a link and I facilitate exchanges.",
        "i18nKey": "questions.auto.16.option1",
        "functions": {
          "Fe": 3,
          "Ti": -1
        },
        "enneagram": {
          "2": 2,
          "9": 1
        }
      },
      {
        "text": "I respect the autonomy and the limits of each.",
        "i18nKey": "questions.auto.16.option2",
        "functions": {
          "Fi": 3,
          "Te": -1
        },
        "enneagram": {
          "4": 2,
          "9": 1
        }
      },
      {
        "text": "I put useful tools/processes.",
        "i18nKey": "questions.auto.16.option3",
        "functions": {
          "Te": 3,
          "Fi": -1
        },
        "enneagram": {
          "1": 1,
          "3": 2
        }
      },
      {
        "text": "I clarify so that the person understands alone.",
        "i18nKey": "questions.auto.16.option4",
        "functions": {
          "Ti": 3,
          "Fe": -1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      }
    ]
  },
  {
    "id": 17,
    "question": "Under uncertainty:",
    "i18nKey": "questions.auto.17.question",
    "options": [
      {
        "text": "I trust deep clues.",
        "i18nKey": "questions.auto.17.option1",
        "functions": {
          "Ni": 3,
          "Se": -1
        },
        "enneagram": {
          "5": 1,
          "9": 2
        }
      },
      {
        "text": "I multiply the quick tests.",
        "i18nKey": "questions.auto.17.option2",
        "functions": {
          "Se": 3,
          "Ni": -1
        },
        "enneagram": {
          "7": 1,
          "8": 2
        }
      },
      {
        "text": "I create several competing hypotheses.",
        "i18nKey": "questions.auto.17.option3",
        "functions": {
          "Ne": 3,
          "Si": -1,
          "Ti": 1
        },
        "enneagram": {
          "5": 1,
          "7": 2
        }
      },
      {
        "text": "I come back to the previous ones and the rules.",
        "i18nKey": "questions.auto.17.option4",
        "functions": {
          "Si": 3,
          "Ne": -1
        },
        "enneagram": {
          "1": 1,
          "6": 2
        }
      }
    ]
  },
  {
    "id": 18,
    "question": "When you express yourself:",
    "i18nKey": "questions.auto.18.question",
    "options": [
      {
        "text": "I'm talking about what's true for me.",
        "i18nKey": "questions.auto.18.option1",
        "functions": {
          "Fi": 3,
          "Te": -1
        },
        "enneagram": {
          "4": 2,
          "9": 1
        }
      },
      {
        "text": "I'm looking for the words that bring together.",
        "i18nKey": "questions.auto.18.option2",
        "functions": {
          "Fe": 3,
          "Ti": -1
        },
        "enneagram": {
          "2": 2,
          "9": 1
        }
      },
      {
        "text": "I structure and I go straight to the point.",
        "i18nKey": "questions.auto.18.option3",
        "functions": {
          "Te": 3,
          "Fi": -1
        },
        "enneagram": {
          "3": 2,
          "8": 1
        }
      },
      {
        "text": "I specify each term to avoid vagueness.",
        "i18nKey": "questions.auto.18.option4",
        "functions": {
          "Ti": 3,
          "Fe": -1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      }
    ]
  },
  {
    "id": 19,
    "question": "Faced with an error:",
    "i18nKey": "questions.auto.19.question",
    "options": [
      {
        "text": "I correct the process so that it does not happen anymore.",
        "i18nKey": "questions.auto.19.option1",
        "functions": {
          "Te": 3,
          "Fi": -1,
          "Si": 1
        },
        "enneagram": {
          "1": 2,
          "3": 1
        }
      },
      {
        "text": "I understand the mechanism that derailed.",
        "i18nKey": "questions.auto.19.option2",
        "functions": {
          "Ti": 3,
          "Fe": -1,
          "Ni": 1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      },
      {
        "text": "I spot the warning signs.",
        "i18nKey": "questions.auto.19.option3",
        "functions": {
          "Ni": 3,
          "Se": -1
        },
        "enneagram": {
          "5": 1,
          "9": 2
        }
      },
      {
        "text": "I do a field test to secure.",
        "i18nKey": "questions.auto.19.option4",
        "functions": {
          "Se": 3,
          "Ni": -1
        },
        "enneagram": {
          "7": 1,
          "8": 2
        }
      }
    ]
  },
  {
    "id": 20,
    "question": "Your deep motivation:",
    "i18nKey": "questions.auto.20.question",
    "options": [
      {
        "text": "Be aligned with whom I am.",
        "i18nKey": "questions.auto.20.option1",
        "functions": {
          "Fi": 3,
          "Te": -1
        },
        "enneagram": {
          "4": 2,
          "9": 1
        }
      },
      {
        "text": "Raise others and the relationship.",
        "i18nKey": "questions.auto.20.option2",
        "functions": {
          "Fe": 3,
          "Ti": -1
        },
        "enneagram": {
          "2": 2,
          "9": 1
        }
      },
      {
        "text": "Transform into concrete results.",
        "i18nKey": "questions.auto.20.option3",
        "functions": {
          "Te": 3,
          "Fi": -1
        },
        "enneagram": {
          "3": 2,
          "8": 1
        }
      },
      {
        "text": "Understand and clarify the true.",
        "i18nKey": "questions.auto.20.option4",
        "functions": {
          "Ti": 3,
          "Fe": -1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      }
    ]
  }
];

const EXTERNAL_QUESTIONS = [
  {
    "id": 1,
    "question": "When an unexpected arrives, your loved one:",
    "i18nKey": "questions.external.1.question",
    "options": [
      {
        "text": "Acts quickly and adjusts live.",
        "i18nKey": "questions.external.1.option1",
        "functions": {
          "Se": 3,
          "Ni": -1,
          "Te": 1
        },
        "enneagram": {
          "7": 1,
          "8": 2
        }
      },
      {
        "text": "Takes a step back to capture the overall meaning.",
        "i18nKey": "questions.external.1.option2",
        "functions": {
          "Ni": 3,
          "Se": -1
        },
        "enneagram": {
          "5": 1,
          "9": 2
        }
      },
      {
        "text": "Looking for a previous precedent and an applicable rule.",
        "i18nKey": "questions.external.1.option3",
        "functions": {
          "Si": 3,
          "Ne": -1
        },
        "enneagram": {
          "1": 1,
          "6": 2
        }
      },
      {
        "text": "Unfolds the logic of the problem before acting.",
        "i18nKey": "questions.external.1.option4",
        "functions": {
          "Ti": 3,
          "Fe": -1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      }
    ]
  },
  {
    "id": 2,
    "question": "In a group discussion, he/her:",
    "i18nKey": "questions.external.2.question",
    "options": [
      {
        "text": "Encourages everyone to participate and keeps harmony.",
        "i18nKey": "questions.external.2.option1",
        "functions": {
          "Fe": 3,
          "Ti": -1
        },
        "enneagram": {
          "2": 2,
          "9": 1
        }
      },
      {
        "text": "Expresses his ideas with authenticity, even if it bothers.",
        "i18nKey": "questions.external.2.option2",
        "functions": {
          "Fi": 3,
          "Te": -1
        },
        "enneagram": {
          "4": 2,
          "6": 1
        }
      },
      {
        "text": "Refocus the discussion towards a concrete objective.",
        "i18nKey": "questions.external.2.option3",
        "functions": {
          "Te": 3,
          "Fi": -1
        },
        "enneagram": {
          "3": 2,
          "8": 1
        }
      },
      {
        "text": "Ask questions to clarify logic.",
        "i18nKey": "questions.external.2.option4",
        "functions": {
          "Ti": 3,
          "Fe": -1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      }
    ]
  },
  {
    "id": 3,
    "question": "Its relation to values:",
    "i18nKey": "questions.external.3.question",
    "options": [
      {
        "text": "It remains authentic even if it is unpopular.",
        "i18nKey": "questions.external.3.option1",
        "functions": {
          "Fi": 3,
          "Te": -1
        },
        "enneagram": {
          "4": 2,
          "9": 1
        }
      },
      {
        "text": "Favors the cohesion and the feeling of the group.",
        "i18nKey": "questions.external.3.option2",
        "functions": {
          "Fe": 3,
          "Ti": -1
        },
        "enneagram": {
          "2": 2,
          "9": 1
        }
      },
      {
        "text": "Prevails measuring measuring efficiency.",
        "i18nKey": "questions.external.3.option3",
        "functions": {
          "Te": 3,
          "Fi": -1
        },
        "enneagram": {
          "3": 2,
          "8": 1
        }
      },
      {
        "text": "Takes precedence over the logical accuracy.",
        "i18nKey": "questions.external.3.option4",
        "functions": {
          "Ti": 3,
          "Fe": -1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      }
    ]
  },
  {
    "id": 4,
    "question": "When he/she learns something new:",
    "i18nKey": "questions.external.4.question",
    "options": [
      {
        "text": "Is based on his past experiences and benchmarks.",
        "i18nKey": "questions.external.4.option1",
        "functions": {
          "Si": 3,
          "Ne": -1
        },
        "enneagram": {
          "1": 1,
          "6": 2
        }
      },
      {
        "text": "Experiences quickly to see what it gives.",
        "i18nKey": "questions.external.4.option2",
        "functions": {
          "Se": 3,
          "Ni": -1
        },
        "enneagram": {
          "7": 1,
          "8": 2
        }
      },
      {
        "text": "Imagine alternative and creative scenarios.",
        "i18nKey": "questions.external.4.option3",
        "functions": {
          "Ne": 3,
          "Si": -1
        },
        "enneagram": {
          "5": 1,
          "7": 2
        }
      },
      {
        "text": "Captures the deep meaning without explaining everything.",
        "i18nKey": "questions.external.4.option4",
        "functions": {
          "Ni": 3,
          "Se": -1
        },
        "enneagram": {
          "5": 1,
          "9": 2
        }
      }
    ]
  },
  {
    "id": 5,
    "question": "When he/she has to manage a practical problem:",
    "i18nKey": "questions.external.5.question",
    "options": [
      {
        "text": "Look for a rule or an example of the past.",
        "i18nKey": "questions.external.5.option1",
        "functions": {
          "Si": 3,
          "Ne": -1
        },
        "enneagram": {
          "1": 1,
          "6": 2
        }
      },
      {
        "text": "Test a concrete solution right away.",
        "i18nKey": "questions.external.5.option2",
        "functions": {
          "Se": 3,
          "Ni": -1
        },
        "enneagram": {
          "7": 1,
          "8": 2
        }
      },
      {
        "text": "Look for a detailed logical explanation.",
        "i18nKey": "questions.external.5.option3",
        "functions": {
          "Ti": 3,
          "Fe": -1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      },
      {
        "text": "Wonders how to keep human cohesion.",
        "i18nKey": "questions.external.5.option4",
        "functions": {
          "Fe": 3,
          "Ti": -1
        },
        "enneagram": {
          "2": 2,
          "9": 1
        }
      }
    ]
  },
  {
    "id": 6,
    "question": "When he/she makes quick decisions:",
    "i18nKey": "questions.external.6.question",
    "options": [
      {
        "text": "Is based on his global intuitions.",
        "i18nKey": "questions.external.6.option1",
        "functions": {
          "Ni": 3,
          "Se": -1
        },
        "enneagram": {
          "5": 1,
          "9": 2
        }
      },
      {
        "text": "Follows his personal values ​​without compromise.",
        "i18nKey": "questions.external.6.option2",
        "functions": {
          "Fi": 3,
          "Te": -1
        },
        "enneagram": {
          "4": 2,
          "9": 1
        }
      },
      {
        "text": "Focuses on immediate efficiency.",
        "i18nKey": "questions.external.6.option3",
        "functions": {
          "Te": 3,
          "Fi": -1
        },
        "enneagram": {
          "3": 2,
          "8": 1
        }
      },
      {
        "text": "Tests directly on the ground.",
        "i18nKey": "questions.external.6.option4",
        "functions": {
          "Se": 3,
          "Ni": -1
        },
        "enneagram": {
          "7": 1,
          "8": 2
        }
      }
    ]
  },
  {
    "id": 7,
    "question": "In its relationships your loved one tends to:",
    "i18nKey": "questions.external.7.question",
    "options": [
      {
        "text": "Salle tensions and seeks harmony.",
        "i18nKey": "questions.external.7.option1",
        "functions": {
          "Fe": 3,
          "Ti": -1
        },
        "enneagram": {
          "2": 1,
          "9": 2
        }
      },
      {
        "text": "Says his authenticity and feelings.",
        "i18nKey": "questions.external.7.option2",
        "functions": {
          "Fi": 3,
          "Te": -1
        },
        "enneagram": {
          "4": 2,
          "6": 1
        }
      },
      {
        "text": "Gives clear and concrete directives.",
        "i18nKey": "questions.external.7.option3",
        "functions": {
          "Te": 3,
          "Fi": -1
        },
        "enneagram": {
          "3": 2,
          "8": 1
        }
      },
      {
        "text": "Favors precision and logic.",
        "i18nKey": "questions.external.7.option4",
        "functions": {
          "Ti": 3,
          "Fe": -1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      }
    ]
  },
  {
    "id": 8,
    "question": "Faced with a new idea your loved one:",
    "i18nKey": "questions.external.8.question",
    "options": [
      {
        "text": "Look for how it was done elsewhere.",
        "i18nKey": "questions.external.8.option1",
        "functions": {
          "Si": 3,
          "Ne": -1
        },
        "enneagram": {
          "1": 1,
          "6": 2
        }
      },
      {
        "text": "Imagine other tracks from there.",
        "i18nKey": "questions.external.8.option2",
        "functions": {
          "Ne": 3,
          "Si": -1
        },
        "enneagram": {
          "3": 1,
          "7": 2
        }
      },
      {
        "text": "Captures directly where it can lead.",
        "i18nKey": "questions.external.8.option3",
        "functions": {
          "Ni": 3,
          "Se": -1
        },
        "enneagram": {
          "5": 1,
          "9": 2
        }
      },
      {
        "text": "Concretely tests and observes the result.",
        "i18nKey": "questions.external.8.option4",
        "functions": {
          "Se": 3,
          "Ni": -1
        },
        "enneagram": {
          "7": 1,
          "8": 2
        }
      }
    ]
  },
  {
    "id": 9,
    "question": "When he/she expresses an opinion:",
    "i18nKey": "questions.external.9.question",
    "options": [
      {
        "text": "Highlights his personal truth.",
        "i18nKey": "questions.external.9.option1",
        "functions": {
          "Fi": 3,
          "Te": -1
        },
        "enneagram": {
          "4": 2,
          "9": 1
        }
      },
      {
        "text": "Adapts his speech to bring together.",
        "i18nKey": "questions.external.9.option2",
        "functions": {
          "Fe": 3,
          "Ti": -1
        },
        "enneagram": {
          "2": 2,
          "9": 1
        }
      },
      {
        "text": "Structure in logical and measurable steps.",
        "i18nKey": "questions.external.9.option3",
        "functions": {
          "Te": 3,
          "Fi": -1
        },
        "enneagram": {
          "3": 2,
          "8": 1
        }
      },
      {
        "text": "Defends intellectual coherence.",
        "i18nKey": "questions.external.9.option4",
        "functions": {
          "Ti": 3,
          "Fe": -1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      }
    ]
  },
  {
    "id": 10,
    "question": "His relation to the rules:",
    "i18nKey": "questions.external.10.question",
    "options": [
      {
        "text": "Bases on it to secure.",
        "i18nKey": "questions.external.10.option1",
        "functions": {
          "Si": 3,
          "Ne": -1
        },
        "enneagram": {
          "1": 1,
          "6": 2
        }
      },
      {
        "text": "Chang them if they brake the result.",
        "i18nKey": "questions.external.10.option2",
        "functions": {
          "Te": 3,
          "Fi": -1
        },
        "enneagram": {
          "3": 1,
          "8": 2
        }
      },
      {
        "text": "Discuss them if they are illogical.",
        "i18nKey": "questions.external.10.option3",
        "functions": {
          "Ti": 3,
          "Fe": -1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      },
      {
        "text": "Remove from it if it strikes her values.",
        "i18nKey": "questions.external.10.option4",
        "functions": {
          "Fi": 3,
          "Te": -1
        },
        "enneagram": {
          "4": 2,
          "9": 1
        }
      }
    ]
  },
  {
    "id": 11,
    "question": "In quick choices your loved one:",
    "i18nKey": "questions.external.11.question",
    "options": [
      {
        "text": "Follows the global intuition.",
        "i18nKey": "questions.external.11.option1",
        "functions": {
          "Ni": 3,
          "Se": -1
        },
        "enneagram": {
          "5": 1,
          "9": 2
        }
      },
      {
        "text": "Tent directly and adjust.",
        "i18nKey": "questions.external.11.option2",
        "functions": {
          "Se": 3,
          "Ni": -1
        },
        "enneagram": {
          "7": 1,
          "8": 2
        }
      },
      {
        "text": "Makes several mental scenarios.",
        "i18nKey": "questions.external.11.option3",
        "functions": {
          "Ne": 3,
          "Si": -1
        },
        "enneagram": {
          "5": 1,
          "7": 2
        }
      },
      {
        "text": "Replica a reliable precedent.",
        "i18nKey": "questions.external.11.option4",
        "functions": {
          "Si": 3,
          "Ne": -1
        },
        "enneagram": {
          "1": 1,
          "6": 2
        }
      }
    ]
  },
  {
    "id": 12,
    "question": "When he/she defends a point:",
    "i18nKey": "questions.external.12.question",
    "options": [
      {
        "text": "Align with its internal values.",
        "i18nKey": "questions.external.12.option1",
        "functions": {
          "Fi": 3,
          "Te": -1
        },
        "enneagram": {
          "4": 2,
          "9": 1
        }
      },
      {
        "text": "Look for the words that bring together.",
        "i18nKey": "questions.external.12.option2",
        "functions": {
          "Fe": 3,
          "Ti": -1
        },
        "enneagram": {
          "2": 2,
          "9": 1
        }
      },
      {
        "text": "Highlights the structure and the result.",
        "i18nKey": "questions.external.12.option3",
        "functions": {
          "Te": 3,
          "Fi": -1
        },
        "enneagram": {
          "3": 2,
          "8": 1
        }
      },
      {
        "text": "Demonstrates logical consistency.",
        "i18nKey": "questions.external.12.option4",
        "functions": {
          "Ti": 3,
          "Fe": -1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      }
    ]
  },
  {
    "id": 13,
    "question": "Faced with the error your loved one:",
    "i18nKey": "questions.external.13.question",
    "options": [
      {
        "text": "Corrects the process sustainably.",
        "i18nKey": "questions.external.13.option1",
        "functions": {
          "Te": 3,
          "Fi": -1,
          "Si": 1
        },
        "enneagram": {
          "1": 2,
          "3": 1
        }
      },
      {
        "text": "Includes the fault mechanism.",
        "i18nKey": "questions.external.13.option2",
        "functions": {
          "Ti": 3,
          "Fe": -1,
          "Ni": 1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      },
      {
        "text": "Locate the announcing patterns.",
        "i18nKey": "questions.external.13.option3",
        "functions": {
          "Ni": 3,
          "Se": -1
        },
        "enneagram": {
          "5": 1,
          "9": 2
        }
      },
      {
        "text": "Repeat a concrete security test.",
        "i18nKey": "questions.external.13.option4",
        "functions": {
          "Se": 3,
          "Ni": -1
        },
        "enneagram": {
          "7": 1,
          "8": 2
        }
      }
    ]
  },
  {
    "id": 14,
    "question": "The general style of your loved one:",
    "i18nKey": "questions.external.14.question",
    "options": [
      {
        "text": "Rather stable and regular (era).",
        "i18nKey": "questions.external.14.option1",
        "functions": {
          "Si": 3,
          "Ne": -1
        },
        "enneagram": {
          "1": 1,
          "6": 2
        }
      },
      {
        "text": "Rather adventurous and curious.",
        "i18nKey": "questions.external.14.option2",
        "functions": {
          "Ne": 3,
          "Si": -1
        },
        "enneagram": {
          "3": 1,
          "7": 2
        }
      },
      {
        "text": "Rather visionary and synthetic.",
        "i18nKey": "questions.external.14.option3",
        "functions": {
          "Ni": 3,
          "Se": -1
        },
        "enneagram": {
          "5": 1,
          "9": 2
        }
      },
      {
        "text": "Rather pragmatic and physical.",
        "i18nKey": "questions.external.14.option4",
        "functions": {
          "Se": 3,
          "Ni": -1
        },
        "enneagram": {
          "7": 1,
          "8": 2
        }
      }
    ]
  },
  {
    "id": 15,
    "question": "In the debates your loved one:",
    "i18nKey": "questions.external.15.question",
    "options": [
      {
        "text": "Remains focused on results and decisions.",
        "i18nKey": "questions.external.15.option1",
        "functions": {
          "Te": 3,
          "Fi": -1
        },
        "enneagram": {
          "3": 2,
          "8": 1
        }
      },
      {
        "text": "Prioritizes conceptual clarity.",
        "i18nKey": "questions.external.15.option2",
        "functions": {
          "Ti": 3,
          "Fe": -1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      },
      {
        "text": "Seeks cohesion and peace.",
        "i18nKey": "questions.external.15.option3",
        "functions": {
          "Fe": 3,
          "Ti": -1
        },
        "enneagram": {
          "2": 2,
          "9": 1
        }
      },
      {
        "text": "Says his quiet authenticity.",
        "i18nKey": "questions.external.15.option4",
        "functions": {
          "Fi": 3,
          "Te": -1
        },
        "enneagram": {
          "4": 2,
          "9": 1
        }
      }
    ]
  },
  {
    "id": 16,
    "question": "Faced with novelty:",
    "i18nKey": "questions.external.16.question",
    "options": [
      {
        "text": "First observes established uses.",
        "i18nKey": "questions.external.16.option1",
        "functions": {
          "Si": 3,
          "Ne": -1
        },
        "enneagram": {
          "1": 1,
          "6": 2
        }
      },
      {
        "text": "Imagine original variants.",
        "i18nKey": "questions.external.16.option2",
        "functions": {
          "Ne": 3,
          "Si": -1,
          "Ti": 1
        },
        "enneagram": {
          "5": 1,
          "7": 2
        }
      },
      {
        "text": "Quickly captures deep intention.",
        "i18nKey": "questions.external.16.option3",
        "functions": {
          "Ni": 3,
          "Se": -1
        },
        "enneagram": {
          "5": 1,
          "9": 2
        }
      },
      {
        "text": "Try right away to feel.",
        "i18nKey": "questions.external.16.option4",
        "functions": {
          "Se": 3,
          "Ni": -1
        },
        "enneagram": {
          "7": 1,
          "8": 2
        }
      }
    ]
  },
  {
    "id": 17,
    "question": "With hierarchy/rules:",
    "i18nKey": "questions.external.17.question",
    "options": [
      {
        "text": "Align if it is logical and useful.",
        "i18nKey": "questions.external.17.option1",
        "functions": {
          "Ti": 3,
          "Fe": -1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      },
      {
        "text": "Align if it is humanly right.",
        "i18nKey": "questions.external.17.option2",
        "functions": {
          "Fe": 3,
          "Ti": -1
        },
        "enneagram": {
          "2": 2,
          "9": 1
        }
      },
      {
        "text": "Align if it is effective to deliver.",
        "i18nKey": "questions.external.17.option3",
        "functions": {
          "Te": 3,
          "Fi": -1
        },
        "enneagram": {
          "3": 2,
          "8": 1
        }
      },
      {
        "text": "Align if it respects its values.",
        "i18nKey": "questions.external.17.option4",
        "functions": {
          "Fi": 3,
          "Te": -1
        },
        "enneagram": {
          "4": 2,
          "9": 1
        }
      }
    ]
  },
  {
    "id": 18,
    "question": "The decision style of your loved one:",
    "i18nKey": "questions.external.18.question",
    "options": [
      {
        "text": "Pragmatic, land first.",
        "i18nKey": "questions.external.18.option1",
        "functions": {
          "Se": 3,
          "Ni": -1,
          "Te": 1
        },
        "enneagram": {
          "3": 1,
          "8": 2
        }
      },
      {
        "text": "Structured, stages and criteria.",
        "i18nKey": "questions.external.18.option2",
        "functions": {
          "Te": 3,
          "Fi": -1,
          "Si": 1
        },
        "enneagram": {
          "1": 1,
          "3": 2
        }
      },
      {
        "text": "Intuitive, captures the implicit direction.",
        "i18nKey": "questions.external.18.option3",
        "functions": {
          "Ni": 3,
          "Se": -1
        },
        "enneagram": {
          "5": 1,
          "9": 2
        }
      },
      {
        "text": "Logic, demonstrates before deciding.",
        "i18nKey": "questions.external.18.option4",
        "functions": {
          "Ti": 3,
          "Fe": -1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
      }
    ]
  },
  {
    "id": 19,
    "question": "Over time your loved one:",
    "i18nKey": "questions.external.19.question",
    "options": [
      {
        "text": "Holds the course for solid habits.",
        "i18nKey": "questions.external.19.option1",
        "functions": {
          "Si": 3,
          "Ne": -1
        },
        "enneagram": {
          "1": 1,
          "6": 2
        }
      },
      {
        "text": "Refreshed with new ideas.",
        "i18nKey": "questions.external.19.option2",
        "functions": {
          "Ne": 3,
          "Si": -1
        },
        "enneagram": {
          "3": 1,
          "7": 2
        }
      },
      {
        "text": "Keep substantial consistency.",
        "i18nKey": "questions.external.19.option3",
        "functions": {
          "Ni": 3,
          "Se": -1
        },
        "enneagram": {
          "5": 1,
          "9": 2
        }
      },
      {
        "text": "Ensures by tangible actions.",
        "i18nKey": "questions.external.19.option4",
        "functions": {
          "Se": 3,
          "Ni": -1
        },
        "enneagram": {
          "7": 1,
          "8": 2
        }
      }
    ]
  },
  {
    "id": 20,
    "question": "What we remember the most from him/her:",
    "i18nKey": "questions.external.20.question",
    "options": [
      {
        "text": "Personal alignment and integrity.",
        "i18nKey": "questions.external.20.option1",
        "functions": {
          "Fi": 3,
          "Te": -1
        },
        "enneagram": {
          "4": 2,
          "9": 1
        }
      },
      {
        "text": "Relationship support and federation.",
        "i18nKey": "questions.external.20.option2",
        "functions": {
          "Fe": 3,
          "Ti": -1
        },
        "enneagram": {
          "2": 2,
          "9": 1
        }
      },
      {
        "text": "Ability to deliver and organize.",
        "i18nKey": "questions.external.20.option3",
        "functions": {
          "Te": 3,
          "Fi": -1
        },
        "enneagram": {
          "3": 2,
          "8": 1
        }
      },
      {
        "text": "Intellectual clarity and precision.",
        "i18nKey": "questions.external.20.option4",
        "functions": {
          "Ti": 3,
          "Fe": -1
        },
        "enneagram": {
          "1": 1,
          "5": 2
        }
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

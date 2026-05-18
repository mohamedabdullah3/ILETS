import { VocabularyQuestion } from "@/types";

export const vocabularyQuestions: VocabularyQuestion[] = [
  { id: 1, type: "synonym", question: "Select the synonym of 'significant'.", options: ["minor", "important", "random", "brief"], correctAnswer: "important", explanation: "Significant means important or meaningful.", topicTag: "academic word list" },
  { id: 2, type: "fill-blank", question: "A clear study plan can ____ your exam performance.", options: ["ignore", "enhance", "damage", "delete"], correctAnswer: "enhance", explanation: "Enhance means improve.", topicTag: "exam strategy" },
  { id: 3, type: "collocation", question: "Choose the best collocation: 'conduct ____'.", options: ["research", "progress", "possibility", "response"], correctAnswer: "research", explanation: "'Conduct research' is a common academic collocation.", topicTag: "research" },
  { id: 4, type: "meaning", question: "What does 'allocate' mean?", options: ["to distribute for a purpose", "to remove completely", "to predict exactly", "to discuss casually"], correctAnswer: "to distribute for a purpose", explanation: "Allocate usually means assign resources/time.", topicTag: "time management" },
  { id: 5, type: "synonym", question: "Select the synonym of 'obtain'.", options: ["reject", "achieve", "postpone", "clarify"], correctAnswer: "achieve", explanation: "Obtain means to get or achieve.", topicTag: "goals" },
  { id: 6, type: "fill-blank", question: "Students should ____ their progress weekly.", options: ["monitor", "doubt", "avoid", "freeze"], correctAnswer: "monitor", explanation: "Monitor means track regularly.", topicTag: "self-study" },
  { id: 7, type: "collocation", question: "Choose the best collocation: 'meet ____'.", options: ["requirements", "vocabulary", "confidence", "syllabus"], correctAnswer: "requirements", explanation: "Meet requirements is standard usage.", topicTag: "admissions" },
  { id: 8, type: "meaning", question: "What does 'feasible' mean?", options: ["possible and practical", "highly expensive", "extremely difficult", "unrelated"], correctAnswer: "possible and practical", explanation: "Feasible = can be done realistically.", topicTag: "planning" },
  { id: 9, type: "synonym", question: "Select the synonym of 'evaluate'.", options: ["assess", "ignore", "memorize", "reduce"], correctAnswer: "assess", explanation: "Evaluate means assess.", topicTag: "assessment" },
  { id: 10, type: "collocation", question: "Choose the best collocation: 'strong ____'.", options: ["foundation", "discuss", "prepare", "influence"], correctAnswer: "foundation", explanation: "Strong foundation is common in education contexts.", topicTag: "learning" }
];

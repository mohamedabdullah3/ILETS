export type StudentProfile = {
  name: string;
  country: string;
  targetBand: string;
  examDate: string;
  dailyStudyTime: string;
  mainGoal: string;
  weakestSkill: string;
};

export type ReadingQuestion = {
  id: number;
  type: "mcq" | "tfn" | "vocab" | "main-idea";
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  skillTag: "detail" | "inference" | "vocabulary" | "main idea" | "time management";
};

export type VocabularyQuestion = {
  id: number;
  type: "synonym" | "fill-blank" | "collocation" | "meaning";
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  topicTag: string;
};

export type AssessmentResult = {
  readingAnswers: Record<number, string>;
  vocabularyAnswers: Record<number, string>;
  writingText: string;
  readingScore: number;
  vocabularyScore: number;
  writingWordCount: number;
  estimatedBand: string;
  weaknesses: string[];
};

export type StudyPlanItem = {
  dayRange: string;
  focus: string;
  details: string;
};

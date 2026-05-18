import { readingQuestions } from "@/data/readingQuestions";
import { vocabularyQuestions } from "@/data/vocabularyQuestions";

// Placeholder MVP scoring logic.
// TODO (future): replace with richer psychometric scoring and AI-assisted writing evaluation.
// TODO (future): connect OpenAI API to evaluate task response, cohesion, grammar, and lexical resource.
export const evaluateAssessment = (
  readingAnswers: Record<number, string>,
  vocabularyAnswers: Record<number, string>,
  writingText: string,
) => {
  const readingScore = readingQuestions.filter((q) => readingAnswers[q.id] === q.correctAnswer).length;
  const vocabularyScore = vocabularyQuestions.filter((q) => vocabularyAnswers[q.id] === q.correctAnswer).length;
  const writingWordCount = writingText.trim() ? writingText.trim().split(/\s+/).length : 0;

  const writingQuality = writingWordCount < 150 ? "weak" : writingWordCount < 250 ? "needs development" : "acceptable";
  const combined = readingScore + vocabularyScore + (writingQuality === "acceptable" ? 2 : writingQuality === "needs development" ? 1 : 0);

  const estimatedBand = combined <= 6 ? "4.5–5.0" : combined <= 10 ? "5.5–6.0" : combined <= 14 ? "6.0–6.5" : "6.5–7.0";

  return { readingScore, vocabularyScore, writingWordCount, writingQuality, estimatedBand };
};

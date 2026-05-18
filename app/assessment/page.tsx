"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import ProgressSteps from "@/components/ProgressSteps";
import ReadingSection from "@/components/ReadingSection";
import VocabularySection from "@/components/VocabularySection";
import WritingSection from "@/components/WritingSection";
import { evaluateAssessment } from "@/lib/scoring";
import { saveDraft, saveResult } from "@/lib/storage";

export default function AssessmentPage() {
  const [step, setStep] = useState(1);
  const [readingAnswers, setReadingAnswers] = useState<Record<number, string>>({});
  const [vocabularyAnswers, setVocabularyAnswers] = useState<Record<number, string>>({});
  const [writingText, setWritingText] = useState("");
  const router = useRouter();
  const writingWordCount = useMemo(() => writingText.trim() ? writingText.trim().split(/\s+/).length : 0, [writingText]);

  const submit = () => {
    const evalRes = evaluateAssessment(readingAnswers, vocabularyAnswers, writingText);
    const weaknesses = [
      evalRes.readingScore < 3 ? "تحتاج تحسين فهم الأسئلة الاستنتاجية" : "",
      evalRes.vocabularyScore < 6 ? "تحتاج تقوية Academic Vocabulary" : "",
      evalRes.writingWordCount < 250 ? "إجابة Writing تحتاج تطوير أفكار أو أمثلة أكثر" : "",
      evalRes.readingScore < 4 ? "تحتاج إدارة وقت أفضل أثناء الحل" : "",
    ].filter(Boolean);
    const result = { readingAnswers, vocabularyAnswers, writingText, ...evalRes, weaknesses };
    saveResult(result);
    router.push("/results");
  };

  return <main className="mx-auto max-w-4xl p-4" dir="rtl"><ProgressSteps step={step} />
    {step === 1 && <ReadingSection answers={readingAnswers} setAnswers={setReadingAnswers} />}
    {step === 2 && <VocabularySection answers={vocabularyAnswers} setAnswers={setVocabularyAnswers} />}
    {step === 3 && <WritingSection text={writingText} setText={(v)=>{setWritingText(v); saveDraft({readingAnswers,vocabularyAnswers,writingText:v});}} />}
    {step === 4 && <section className="space-y-3 rounded-xl border p-4"><h3 className="font-bold">Review & Submit</h3><p>Reading answered: {Object.keys(readingAnswers).length}/5</p><p>Vocabulary answered: {Object.keys(vocabularyAnswers).length}/10</p><p>Writing word count: {writingWordCount}</p><button className="rounded-lg bg-navy px-4 py-2 text-white" onClick={submit}>Submit</button></section>}
    <div className="mt-6 flex justify-between">{step>1?<button onClick={()=>setStep(step-1)}>السابق</button>:<span/>}{step<4&&<button className="rounded-lg bg-gold px-4 py-2" onClick={()=>setStep(step+1)}>التالي</button>}</div>
  </main>;
}

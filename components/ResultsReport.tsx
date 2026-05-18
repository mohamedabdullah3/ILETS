"use client";
import StudyPlan from "./StudyPlan";
import CTASection from "./CTASection";
import { AssessmentResult, StudentProfile } from "@/types";
import { saveLead } from "@/lib/storage";
import { useState } from "react";

export default function ResultsReport({result, profile}:{result:AssessmentResult;profile:StudentProfile|null}) {
  const [email, setEmail] = useState(""); const [whatsapp, setWhatsapp] = useState("");
  return <div className="space-y-6" dir="rtl"><div className="rounded-2xl bg-beige p-5"><h1 className="text-2xl font-bold">تقرير جاهزيتك المبدئي لاختبار IELTS</h1><p className="text-sm mt-2">هذا تقييم تدريبي مبدئي وليس نتيجة رسمية من IELTS.</p></div>
  <section className="rounded-2xl border p-5"><h2 className="font-bold">Estimated Readiness: {result.estimatedBand}</h2><p className="text-sm">التقدير تقريبي لأغراض التدريب فقط.</p></section>
  <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[
    `Reading: ${result.readingScore}/5`,
    `Vocabulary: ${result.vocabularyScore}/10`,
    `Writing words: ${result.writingWordCount}`,
    `Recommendation: ${profile?.dailyStudyTime || '30 min'} daily`
  ].map(t=><div key={t} className="rounded-xl border p-4">{t}</div>)}</section>
  <section><h3 className="mb-2 font-bold">Top Weaknesses</h3><ul className="list-disc space-y-1 pr-6">{result.weaknesses.map(w=><li key={w}>{w}</li>)}</ul></section>
  <section><h3 className="mb-3 font-bold">Personalized 14-Day Study Plan</h3><StudyPlan profile={profile} /></section>
  <section><h3 className="mb-3 font-bold">Recommended Next Step</h3><CTASection /></section>
  <section className="rounded-xl border p-4"><p className="mb-2">هل تريد إرسال التقرير على واتساب أو البريد؟</p><div className="grid gap-2 sm:grid-cols-2"><input className="rounded-lg border p-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /><input className="rounded-lg border p-2" placeholder="WhatsApp" value={whatsapp} onChange={e=>setWhatsapp(e.target.value)} /></div><button onClick={()=>saveLead({email,whatsapp})} className="mt-3 rounded-lg bg-navy px-4 py-2 text-white">حفظ</button></section></div>;
}

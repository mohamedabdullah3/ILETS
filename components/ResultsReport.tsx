"use client";

import { useMemo, useState } from "react";
import CTASection from "./CTASection";
import StudyPlan from "./StudyPlan";
import { saveLead } from "@/lib/storage";
import { AssessmentResult, StudentProfile } from "@/types";

const writingReadinessText = (words: number) => {
  if (words < 150) return "ضعيف حاليًا: الإجابة قصيرة جدًا وتحتاج تطوير واضح.";
  if (words < 250) return "متوسط: تحتاج توسعة الأفكار والأمثلة للوصول لمعيار Task 2.";
  if (words <= 320) return "جيد: طول مناسب كبداية مع فرصة لتحسين الجودة.";
  return "جيد جدًا: طول مناسب، مع أهمية إدارة الوقت أثناء الاختبار.";
};

const readinessNarrative = (band: string) => {
  if (band === "4.5–5.0") return "أنت في مرحلة تأسيس جيدة، ومع خطة مركزة خلال الأسابيع القادمة يمكنك التقدم بثبات.";
  if (band === "5.5–6.0") return "مستواك واعد، وتحتاج فقط انضباط يومي وتحسين نقاط محددة للوصول للنطاق الأعلى.";
  if (band === "6.0–6.5") return "أداءك قوي كبداية، والتركيز على الدقة وإدارة الوقت سيدعم انتقالك للمستوى التالي.";
  return "جاهزيتك متقدمة نسبيًا، وخطوة التحسين الآن هي صقل الكتابة تحت وقت الاختبار.";
};

export default function ResultsReport({ result, profile }: { result: AssessmentResult; profile: StudentProfile | null }) {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const topWeaknesses = useMemo(() => result.weaknesses.slice(0, 3), [result.weaknesses]);

  const consistency = useMemo(() => {
    const daily = profile?.dailyStudyTime ?? "30 min";
    if (daily === "15 min") return "ابدأ بـ 15 دقيقة يوميًا، وزدها تدريجيًا إلى 30 دقيقة خلال أسبوع.";
    if (daily === "30 min") return "استمر على 30 دقيقة يوميًا مع يوم مراجعة خفيف كل 3 أيام.";
    if (daily === "45 min") return "ممتاز، 45 دقيقة يوميًا كافية لرفع الجاهزية بشكل واضح خلال 14 يوم.";
    return "رائع، وقتك اليومي ممتاز. ركّز على الجودة لا الكمية فقط.";
  }, [profile?.dailyStudyTime]);

  return (
    <div className="space-y-5 sm:space-y-7" dir="rtl">
      <header className="rounded-3xl border border-gold/25 bg-gradient-to-b from-beige to-white p-5 sm:p-7 shadow-sm">
        <p className="text-xs sm:text-sm text-navy/70">IELTS Readiness Coach • Gulf Edition</p>
        <h1 className="mt-2 text-2xl font-extrabold leading-tight sm:text-3xl">تقرير جاهزيتك المبدئي لاختبار IELTS</h1>
        <p className="mt-2 text-sm sm:text-base text-navy/85">تقرير شخصي مصمم لمساعدتك على اتخاذ قرار تدريبي أوضح قبل موعد الاختبار.</p>
        <p className="mt-3 rounded-xl bg-white/70 p-3 text-xs sm:text-sm text-navy/80">هذا تقييم تدريبي مبدئي وليس نتيجة رسمية من IELTS، ولا يضمن درجة محددة.</p>
      </header>

      <section className="rounded-2xl border border-navy/10 bg-white p-5 sm:p-6 shadow-sm">
        <p className="text-xs text-navy/60">Estimated Band Range</p>
        <div className="mt-2 flex items-end justify-between gap-3">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">{result.estimatedBand}</h2>
          <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-navy">تقدير تدريبي</span>
        </div>
        <p className="mt-3 text-sm leading-7 text-navy/85">{readinessNarrative(result.estimatedBand)}</p>
        <p className="mt-2 text-xs text-navy/65">التقدير تقريبي لأغراض التدريب فقط، ويعتمد على هذا النشاط القصير وليس اختبارًا كاملاً.</p>
      </section>

      <section>
        <h3 className="mb-3 text-lg font-bold">تفصيل الأداء</h3>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-2xl border p-4">
            <p className="text-xs text-navy/60">Reading</p><p className="mt-1 text-2xl font-bold">{result.readingScore}/5</p>
            <p className="mt-2 text-xs text-navy/70">ركّز على دقة الفهم والاستدلال.</p>
          </article>
          <article className="rounded-2xl border p-4">
            <p className="text-xs text-navy/60">Vocabulary</p><p className="mt-1 text-2xl font-bold">{result.vocabularyScore}/10</p>
            <p className="mt-2 text-xs text-navy/70">وسع مفرداتك الأكاديمية اليومية.</p>
          </article>
          <article className="rounded-2xl border p-4">
            <p className="text-xs text-navy/60">Writing Readiness</p><p className="mt-1 text-base font-bold leading-7">{writingReadinessText(result.writingWordCount)}</p>
            <p className="mt-2 text-xs text-navy/70">Word count: {result.writingWordCount}</p>
          </article>
          <article className="rounded-2xl border p-4">
            <p className="text-xs text-navy/60">Study Consistency</p><p className="mt-1 text-sm font-semibold leading-7">{consistency}</p>
            <p className="mt-2 text-xs text-navy/70">هدفك الحالي: {profile?.targetBand ?? "6.0"}</p>
          </article>
        </div>
      </section>

      <section className="rounded-2xl border border-gold/20 bg-beige/40 p-5 sm:p-6">
        <h3 className="text-lg font-bold">أهم 3 نقاط تحتاج عناية الآن</h3>
        <ul className="mt-3 space-y-2">
          {topWeaknesses.length ? topWeaknesses.map((w, idx) => (
            <li key={w} className="rounded-xl bg-white p-3 text-sm leading-7"><span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">{idx + 1}</span>{w}</li>
          )) : <li className="rounded-xl bg-white p-3 text-sm">أداؤك متوازن حاليًا. ركّز على الاستمرارية والتدريب تحت وقت.</li>}
        </ul>
      </section>

      <section>
        <h3 className="mb-3 text-lg font-bold">خطة تدريب شخصية لمدة 14 يوم</h3>
        <StudyPlan profile={profile} />
      </section>

      <section>
        <h3 className="mb-3 text-lg font-bold">الخطوة التالية الموصى بها</h3>
        <CTASection />
      </section>

      <section className="rounded-2xl border p-4 sm:p-5">
        <p className="mb-2 font-semibold">هل تريد إرسال التقرير على واتساب أو البريد؟</p>
        <div className="grid gap-2 sm:grid-cols-2">
          <input className="rounded-xl border p-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="rounded-xl border p-3" placeholder="WhatsApp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
        </div>
        <button onClick={() => saveLead({ email, whatsapp })} className="mt-3 w-full rounded-xl bg-navy px-4 py-3 text-white sm:w-auto">حفظ البيانات</button>
      </section>
    </div>
  );
}

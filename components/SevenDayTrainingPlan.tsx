"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AssessmentResult, StudentProfile } from "@/types";
import { startTrainingPlan } from "@/lib/storage";

type Props = { profile: StudentProfile | null; result: AssessmentResult | null };

export default function SevenDayTrainingPlan({ profile, result }: Props) {
  const [startedMsg, setStartedMsg] = useState("");
  const weakest = (profile?.weakestSkill || (result?.weaknesses[0]?.includes("Vocabulary") ? "Vocabulary" : result?.weaknesses[0]?.includes("Writing") ? "Writing" : "Reading")) as string;
  const daily = profile?.dailyStudyTime || "30 min";

  const emphasis = useMemo(() => {
    if (weakest.includes("Writing")) return "مع تركيز أعلى على مهام الكتابة وتوسيع الأفكار.";
    if (weakest.includes("Vocabulary")) return "مع تركيز أعلى على بناء المفردات الأكاديمية والتطبيق.";
    return "مع تركيز أعلى على دقة الفهم في القراءة وإدارة الوقت.";
  }, [weakest]);

  const days = [
    { day: "Day 1", focus: "Readiness review + mistake analysis", task: "مراجعة نتيجة التقييم وتحديد 3 أخطاء متكررة.", metric: "تحديد قائمة أخطاء واضحة." },
    { day: "Day 2", focus: "Reading focused practice", task: "حل نص قراءة قصير مع استخراج الكلمات المفتاحية.", metric: "تحسين دقة الإجابات بنسبة مبدئية." },
    { day: "Day 3", focus: "Vocabulary building from mistakes", task: "إنشاء قائمة 20 كلمة من أخطائك واستخدامها في جمل.", metric: "استخدام 15 كلمة بشكل صحيح." },
    { day: "Day 4", focus: "Writing Task 2 structure", task: "كتابة مخطط مقال كامل (Intro + 2 Body + Conclusion).", metric: "بناء هيكل واضح خلال وقت محدد." },
    { day: "Day 5", focus: "Timed Reading + Vocabulary application", task: "تدريب زمني يجمع القراءة والمفردات.", metric: "الالتزام بالوقت وتقليل الأخطاء." },
    { day: "Day 6", focus: "Writing practice + self-review checklist", task: "كتابة إجابة كاملة ثم مراجعتها عبر checklist.", metric: "تحسين الترابط وتقليل أخطاء الصياغة." },
    { day: "Day 7", focus: "Mini mock test + progress reflection", task: "اختبار مصغر ثم مراجعة التطور مقارنة بيوم 1.", metric: "تحديد تقدم ملموس وخطة الأسبوع التالي." },
  ];

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-gold/20 bg-beige/40 p-4 text-sm leading-7">{emphasis} الهدف المستهدف: {profile?.targetBand ?? "6.0"} • الوقت اليومي: {daily}</div>
      <div className="space-y-3">
        {days.map((item) => (
          <article key={item.day} className="rounded-2xl border p-4 shadow-sm">
            <p className="text-xs text-navy/60">{item.day}</p>
            <p className="mt-1 font-bold">{item.focus}</p>
            <p className="mt-2 text-sm">Estimated time: {daily}</p>
            <p className="mt-1 text-sm">Task: {item.task}</p>
            <p className="mt-1 text-sm text-navy/75">Success metric: {item.metric}</p>
          </article>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          className="rounded-xl bg-navy px-4 py-2 text-white"
          onClick={() => {
            startTrainingPlan(new Date().toISOString());
            setStartedMsg("تم بدء خطة التدريب. يمكنك العودة يوميًا لمتابعة التقدم.");
          }}
        >
          ابدأ اليوم الأول
        </button>
        <Link href="/results" className="rounded-xl border px-4 py-2">العودة إلى التقرير</Link>
      </div>
      {startedMsg && <div className="rounded-xl bg-green-50 p-3 text-sm text-green-700">{startedMsg}</div>}
    </div>
  );
}

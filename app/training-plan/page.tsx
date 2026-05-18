"use client";

import SevenDayTrainingPlan from "@/components/SevenDayTrainingPlan";
import { getProfile, getResult } from "@/lib/storage";
import { AssessmentResult, StudentProfile } from "@/types";
import { useEffect, useState } from "react";

export default function TrainingPlanPage() {
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  useEffect(() => {
    setProfile(getProfile());
    setResult(getResult());
  }, []);

  return (
    <main className="mx-auto max-w-4xl space-y-5 p-4 sm:p-6" dir="rtl">
      <section className="rounded-3xl border border-gold/25 bg-gradient-to-b from-beige to-white p-5 sm:p-7">
        <h1 className="text-2xl font-extrabold sm:text-3xl">خطة تدريب IELTS لمدة 7 أيام</h1>
        <p className="mt-2 text-sm leading-7 text-navy/85">خطة قصيرة مبنية على نتيجتك المبدئية والمهارة التي تحتاج لتحسين أكبر.</p>
      </section>
      <SevenDayTrainingPlan profile={profile} result={result} />
    </main>
  );
}

"use client";

import ResultsReport from "@/components/ResultsReport";
import { getProfile, getResult } from "@/lib/storage";
import { AssessmentResult, StudentProfile } from "@/types";
import { useEffect, useState } from "react";

export default function ResultsPage() {
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [profile, setProfile] = useState<StudentProfile | null>(null);

  useEffect(() => {
    setResult(getResult());
    setProfile(getProfile());
  }, []);

  if (!result) {
    return <main className="p-6 sm:p-8" dir="rtl">لا توجد نتائج بعد. ابدأ الاختبار أولًا.</main>;
  }

  return (
    <main className="mx-auto max-w-5xl p-4 sm:p-6 lg:p-8">
      <ResultsReport result={result} profile={profile} />
    </main>
  );
}

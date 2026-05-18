"use client";
import ResultsReport from "@/components/ResultsReport";
import { getProfile, getResult } from "@/lib/storage";
import { useEffect, useState } from "react";
import { AssessmentResult, StudentProfile } from "@/types";

export default function ResultsPage() {
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  useEffect(() => { setResult(getResult()); setProfile(getProfile()); }, []);
  if (!result) return <main className="p-8" dir="rtl">لا توجد نتائج بعد. ابدأ الاختبار أولًا.</main>;
  return <main className="mx-auto max-w-5xl p-4"><ResultsReport result={result} profile={profile} /></main>;
}

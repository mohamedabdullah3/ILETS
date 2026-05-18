"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { getProfile, saveWritingSprintRequest } from "@/lib/storage";

export default function WritingSprintForm() {
  const [studentName, setStudentName] = useState("");
  const [targetBand, setTargetBand] = useState("6.0");
  const [taskType, setTaskType] = useState<"IELTS Task 1" | "IELTS Task 2" | "General Writing">("IELTS Task 2");
  const [essay, setEssay] = useState("");
  const [mainConcern, setMainConcern] = useState<"Grammar" | "Vocabulary" | "Structure" | "Ideas" | "Not sure">("Not sure");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const profile = getProfile();
    if (profile) {
      setStudentName(profile.name || "");
      setTargetBand(profile.targetBand || "6.0");
    }
  }, []);

  const wordCount = useMemo(() => (essay.trim() ? essay.trim().split(/\s+/).length : 0), [essay]);
  const feedback = wordCount < 150 ? "answer is too short." : wordCount < 250 ? "needs more development." : wordCount <= 320 ? "good length for Task 2." : "good length but watch time management.";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future extension point: connect OpenAI API here for deeper writing diagnostics.
    saveWritingSprintRequest({ studentName, targetBand, taskType, essay, wordCount, mainConcern, createdAt: new Date().toISOString() });
    setSuccess("تم حفظ طلب التصحيح بنجاح. في النسخة القادمة سيتم إرسال التقرير المفصل تلقائيًا.");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-navy/10 bg-white p-5 sm:p-6 shadow-sm">
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="rounded-xl border p-3" placeholder="اسم الطالب" value={studentName} onChange={(e) => setStudentName(e.target.value)} required />
        <input className="rounded-xl border p-3" placeholder="الهدف (Band)" value={targetBand} onChange={(e) => setTargetBand(e.target.value)} required />
      </div>
      <select className="w-full rounded-xl border p-3" value={taskType} onChange={(e) => setTaskType(e.target.value as any)}>
        <option>IELTS Task 1</option><option>IELTS Task 2</option><option>General Writing</option>
      </select>
      <textarea className="min-h-56 w-full rounded-xl border p-3" placeholder="اكتب إجابتك هنا..." value={essay} onChange={(e) => setEssay(e.target.value)} required />
      <div className="text-sm text-navy/75">Word count: {wordCount}</div>
      <select className="w-full rounded-xl border p-3" value={mainConcern} onChange={(e) => setMainConcern(e.target.value as any)}>
        <option>Grammar</option><option>Vocabulary</option><option>Structure</option><option>Ideas</option><option>Not sure</option>
      </select>
      <button className="w-full rounded-xl bg-navy px-4 py-3 text-white">احفظ طلب التصحيح</button>
      {success && <div className="rounded-xl bg-green-50 p-3 text-sm text-green-700">{success}</div>}
      <div className="rounded-xl bg-beige/50 p-3 text-sm">Rule-based feedback: {feedback}</div>
      <Link href="/results" className="inline-block rounded-xl border px-4 py-2">العودة إلى التقرير</Link>
    </form>
  );
}

"use client";
import { useState } from "react";

export default function CTASection() {
  const [open, setOpen] = useState(false);
  const actions = ["احصل على تصحيح Writing مفصل", "ابدأ خطة تدريب 7 أيام", "أعد الاختبار بعد أسبوع"];
  return <div className="grid gap-3 sm:grid-cols-3">{actions.map(a=><button key={a} className="rounded-xl border p-4 text-sm" onClick={()=>setOpen(true)}>{a}</button>)}{open && <div className="fixed inset-0 grid place-items-center bg-black/40 p-4" onClick={()=>setOpen(false)}><div className="rounded-xl bg-white p-6">هذه الخاصية ستكون متاحة في النسخة القادمة.</div></div>}</div>;
}

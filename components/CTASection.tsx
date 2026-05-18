"use client";

import { useState } from "react";

const offerings = [
  {
    title: "Writing Correction Sprint",
    subtitle: "تصحيح مركز لمدة 7 أيام",
    description: "خطة مكثفة لمراجعة كتابة Task 2 مع ملاحظات عملية على البنية، الفكرة، واللغة.",
  },
  {
    title: "خطة تدريب 7 أيام",
    subtitle: "جاهزة قبل الاختبار",
    description: "توزيع يومي بسيط يساعدك تلتزم وتراجع أهم المهارات قبل موعدك.",
  },
  {
    title: "إعادة التقييم بعد أسبوع",
    subtitle: "قياس التقدم",
    description: "أعد نفس التقييم بعد 7 أيام لمقارنة الأداء وتحديد أولوياتك الجديدة.",
  },
];

export default function CTASection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {offerings.map((item) => (
        <button
          key={item.title}
          onClick={() => setOpen(true)}
          className="rounded-2xl border border-navy/10 bg-white p-4 text-right shadow-sm transition hover:-translate-y-0.5 hover:shadow"
        >
          <p className="text-xs text-gold">{item.subtitle}</p>
          <p className="mt-1 font-bold text-navy">{item.title}</p>
          <p className="mt-2 text-sm leading-7 text-navy/75">{item.description}</p>
        </button>
      ))}

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" onClick={() => setOpen(false)}>
          <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center" onClick={(e) => e.stopPropagation()}>
            <p className="text-lg font-bold text-navy">قريبًا ✨</p>
            <p className="mt-2 text-sm leading-7 text-navy/80">هذه الخاصية ستكون متاحة في النسخة القادمة مع تجربة تصحيح أعمق.</p>
            <button className="mt-4 rounded-xl bg-navy px-4 py-2 text-white" onClick={() => setOpen(false)}>حسنًا</button>
          </div>
        </div>
      )}
    </div>
  );
}

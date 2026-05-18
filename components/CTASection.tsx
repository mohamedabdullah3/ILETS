"use client";

import { useRouter } from "next/navigation";

type Props = {
  onRetakeClick: () => void;
};

export default function CTASection({ onRetakeClick }: Props) {
  const router = useRouter();

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <button
        onClick={() => router.push("/writing-sprint")}
        className="rounded-2xl border border-navy/10 bg-white p-4 text-right shadow-sm transition hover:-translate-y-0.5 hover:shadow"
      >
        <p className="text-xs text-gold">تصحيح مركز لمدة 7 أيام</p>
        <p className="mt-1 font-bold text-navy">Writing Correction Sprint</p>
        <p className="mt-2 text-sm leading-7 text-navy/75">مراجعة تدريبية مبدئية لإجابتك مع مؤشرات تطوير مباشرة.</p>
      </button>
      <button
        onClick={() => router.push("/training-plan")}
        className="rounded-2xl border border-navy/10 bg-white p-4 text-right shadow-sm transition hover:-translate-y-0.5 hover:shadow"
      >
        <p className="text-xs text-gold">جاهزة قبل الاختبار</p>
        <p className="mt-1 font-bold text-navy">7-Day Training Plan</p>
        <p className="mt-2 text-sm leading-7 text-navy/75">خطة يومية قصيرة مبنية على مستواك الحالي وهدفك.</p>
      </button>
      <button onClick={onRetakeClick} className="rounded-2xl border border-navy/10 bg-white p-4 text-right shadow-sm transition hover:-translate-y-0.5 hover:shadow">
        <p className="text-xs text-gold">قياس التقدم</p>
        <p className="mt-1 font-bold text-navy">Retake Assessment After One Week</p>
        <p className="mt-2 text-sm leading-7 text-navy/75">فعّل تذكير إعادة التقييم وقارن الأداء بعد أسبوع.</p>
      </button>
    </div>
  );
}

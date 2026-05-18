import { StudentProfile, StudyPlanItem } from "@/types";

export default function StudyPlan({ profile }: { profile: StudentProfile | null }) {
  const targetBand = profile?.targetBand ?? "6.0";
  const weakest = profile?.weakestSkill ?? "Reading";

  const items: StudyPlanItem[] = [
    { dayRange: "Day 1-2", focus: "Reading basics + vocabulary review", details: `تركيز أساسي على ${weakest} مع تمارين مفردات أكاديمية.` },
    { dayRange: "Day 3-4", focus: "Writing Task 2 structure", details: "بناء المقال: افتتاحية واضحة + فكرتين مدعومتين بأمثلة." },
    { dayRange: "Day 5-6", focus: "Reading timed practice", details: "تدريب زمني مضبوط لمحاكاة ضغط الاختبار." },
    { dayRange: "Day 7", focus: "Mini review", details: "مراجعة أخطاء الأسبوع الأول وخطة تصحيح سريعة." },
    { dayRange: "Day 8-10", focus: "Writing improvement + vocabulary application", details: "تطوير جودة الأفكار والربط المنطقي بين الفقرات." },
    { dayRange: "Day 11-12", focus: "Mixed practice", details: "دمج Reading + Vocabulary + Writing في جلسة واحدة." },
    { dayRange: "Day 13", focus: "Mini mock test", details: `اختبار قصير لقياس قربك من نطاق ${targetBand}.` },
    { dayRange: "Day 14", focus: "Review mistakes + next action", details: "استخراج 3 أولويات تدريب للأسبوع التالي." },
  ];

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={item.dayRange} className="relative rounded-2xl border border-navy/10 bg-white p-4 sm:p-5 shadow-sm">
          <div className="absolute right-0 top-0 h-full w-1.5 rounded-r-2xl bg-gold/70" />
          <p className="text-xs text-navy/60">المرحلة {index + 1}</p>
          <p className="mt-1 text-sm font-bold text-navy">{item.dayRange}</p>
          <p className="mt-1 font-semibold">{item.focus}</p>
          <p className="mt-2 text-sm leading-7 text-navy/80">{item.details}</p>
        </div>
      ))}
    </div>
  );
}

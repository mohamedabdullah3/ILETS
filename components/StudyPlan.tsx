import { StudyPlanItem, StudentProfile } from "@/types";

export default function StudyPlan({ profile }: { profile: StudentProfile | null }) {
  const extra = profile?.weakestSkill ? `تركيز إضافي على ${profile.weakestSkill}` : "مراجعة متوازنة";
  const items: StudyPlanItem[] = [
    { dayRange: "Day 1-2", focus: "Reading basics + vocabulary review", details: extra },
    { dayRange: "Day 3-4", focus: "Writing Task 2 structure", details: "مقدمة، body paragraphs، خاتمة" },
    { dayRange: "Day 5-6", focus: "Reading timed practice", details: "تدريب على إدارة الوقت" },
    { dayRange: "Day 7", focus: "Mini review", details: "تجميع الأخطاء المتكررة" },
    { dayRange: "Day 8-10", focus: "Writing improvement + vocabulary application", details: "توسيع الأفكار مع أمثلة" },
    { dayRange: "Day 11-12", focus: "Mixed practice", details: "Reading + Vocabulary + Writing" },
    { dayRange: "Day 13", focus: "Mini mock test", details: "محاكاة اختبار قصيرة" },
    { dayRange: "Day 14", focus: "Review mistakes + next action", details: "تحديد الخطوة التالية" },
  ];
  return <div className="space-y-3">{items.map(i=><div key={i.dayRange} className="rounded-xl border-l-4 border-gold p-4"><p className="font-bold">{i.dayRange}</p><p>{i.focus}</p><p className="text-sm text-slate-600">{i.details}</p></div>)}</div>;
}

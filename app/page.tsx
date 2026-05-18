import StudentProfileForm from "@/components/StudentProfileForm";

export default function Home() {
  return <main className="mx-auto max-w-4xl space-y-8 p-4 sm:p-8" dir="rtl"><section className="rounded-3xl bg-gradient-to-b from-beige to-white p-8 text-center"><h1 className="text-3xl font-bold">اختبر جاهزيتك للآيلتس قبل موعد الاختبار</h1><p className="mt-3">تدريب قصير في Reading وVocabulary وWriting مع تقرير مبدئي يوضح مستواك، نقاط ضعفك، وخطة تحسين لمدة 14 يوم.</p></section><section><h2 className="mb-3 text-xl font-bold">ماذا ستحصل عليه؟</h2><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{["تقييم مبدئي لمستواك","تحليل نقاط القوة والضعف","تصحيح مبدئي للـ Writing","خطة تدريب 14 يوم","توصيات حسب هدفك وموعد اختبارك"].map(i=><div key={i} className="rounded-2xl border p-4">{i}</div>)}</div></section><StudentProfileForm /></main>;
}

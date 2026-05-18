import WritingSprintForm from "@/components/WritingSprintForm";

export default function WritingSprintPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-5 p-4 sm:p-6" dir="rtl">
      <section className="rounded-3xl border border-gold/25 bg-gradient-to-b from-beige to-white p-5 sm:p-7">
        <h1 className="text-2xl font-extrabold sm:text-3xl">تصحيح Writing مكثف لمدة 7 أيام</h1>
        <p className="mt-2 text-sm leading-7 text-navy/85">ارفع إجابتك أو اكتبها هنا لتحصل على مراجعة تدريبية مبدئية تساعدك تفهم نقاط الضعف في الكتابة.</p>
      </section>
      <WritingSprintForm />
    </main>
  );
}

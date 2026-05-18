export default function WritingSection({text,setText}:{text:string;setText:(v:string)=>void}) {
  const wc = text.trim()?text.trim().split(/\s+/).length:0;
  const feedback = wc < 150 ? "Very short, not enough development." : wc < 250 ? "Needs more development for IELTS Task 2." : wc <= 320 ? "Good length." : "Good length, but remind about time management.";
  return <section className="space-y-3"><p className="rounded-xl bg-beige/50 p-3 text-sm">Some people believe that studying abroad improves future career opportunities. To what extent do you agree or disagree?</p><p className="text-sm">Write at least 250 words.</p><textarea className="min-h-64 w-full rounded-xl border p-3" value={text} onChange={e=>setText(e.target.value)} /><div className="text-sm">Word count: {wc}</div><div className="rounded-xl border p-3 text-sm">{feedback}</div></section>;
}

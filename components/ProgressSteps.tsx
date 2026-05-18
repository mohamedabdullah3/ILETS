export default function ProgressSteps({ step }: { step: number }) {
  const items = ["Reading", "Vocabulary", "Writing", "Review"];
  return <div className="mb-6"><div className="h-2 rounded-full bg-beige"><div className="h-2 rounded-full bg-gold" style={{width:`${(step/4)*100}%`}} /></div><div className="mt-2 grid grid-cols-4 gap-2 text-center text-xs">{items.map((item, i)=><div key={item} className={i<step?"text-navy font-bold":"text-slate-400"}>{item}</div>)}</div></div>;
}

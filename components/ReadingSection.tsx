import { readingPassage, readingQuestions } from "@/data/readingQuestions";

export default function ReadingSection({answers,setAnswers}:{answers:Record<number,string>;setAnswers:(v:Record<number,string>)=>void}) {
  return <section className="space-y-4"><div className="rounded-xl border p-4 text-sm leading-7">{readingPassage}</div>{readingQuestions.map(q=><div key={q.id} className="rounded-xl border p-4"><p className="mb-2 font-semibold">{q.id}. {q.question}</p><div className="grid gap-2">{q.options.map(op=><label key={op} className="flex gap-2"><input type="radio" name={`r-${q.id}`} checked={answers[q.id]===op} onChange={()=>setAnswers({...answers,[q.id]:op})}/>{op}</label>)}</div></div>)}</section>;
}

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { StudentProfile } from "@/types";
import { saveProfile } from "@/lib/storage";

const initial: StudentProfile = { name: "", country: "Saudi Arabia", targetBand: "6.0", examDate: "", dailyStudyTime: "30 min", mainGoal: "University", weakestSkill: "Reading" };

export default function StudentProfileForm() {
  const [form, setForm] = useState<StudentProfile>(initial);
  const router = useRouter();
  return <form className="grid gap-3 rounded-2xl bg-beige/50 p-5" onSubmit={(e)=>{e.preventDefault(); saveProfile(form); router.push('/assessment');}}>
    {Object.entries({name:"الاسم",examDate:"موعد الاختبار"}).map(([k,label])=><input key={k} required className="rounded-xl border p-3" placeholder={label} type={k==='examDate'?'date':'text'} value={(form as any)[k]} onChange={e=>setForm({...form,[k]:e.target.value})}/>)}
    <select className="rounded-xl border p-3" value={form.country} onChange={e=>setForm({...form,country:e.target.value})}>{["Saudi Arabia","UAE","Kuwait","Qatar","Bahrain","Oman"].map(v=><option key={v}>{v}</option>)}</select>
    <select className="rounded-xl border p-3" value={form.targetBand} onChange={e=>setForm({...form,targetBand:e.target.value})}>{["5.5","6.0","6.5","7.0","7.5","8.0"].map(v=><option key={v}>{v}</option>)}</select>
    <select className="rounded-xl border p-3" value={form.dailyStudyTime} onChange={e=>setForm({...form,dailyStudyTime:e.target.value})}>{["15 min","30 min","45 min","60+ min"].map(v=><option key={v}>{v}</option>)}</select>
    <select className="rounded-xl border p-3" value={form.mainGoal} onChange={e=>setForm({...form,mainGoal:e.target.value})}>{["University","Scholarship","Job","Immigration","Other"].map(v=><option key={v}>{v}</option>)}</select>
    <select className="rounded-xl border p-3" value={form.weakestSkill} onChange={e=>setForm({...form,weakestSkill:e.target.value})}>{["Reading","Writing","Listening","Speaking","Vocabulary","Not sure"].map(v=><option key={v}>{v}</option>)}</select>
    <button className="rounded-xl bg-navy p-3 text-white">ابدأ اختبار الجاهزية</button>
  </form>
}

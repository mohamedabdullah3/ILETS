"use client";

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function RetakeReminderModal({ open, onClose, onConfirm }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-2xl bg-white p-6 text-right" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-xl font-bold text-navy">إعادة التقييم بعد أسبوع</h3>
        <p className="mt-2 text-sm leading-7 text-navy/80">
          سنحفظ لك موعد إعادة التقييم داخل هذا المتصفح. بعد 7 أيام يمكنك إعادة الاختبار ومقارنة مستواك.
        </p>
        <div className="mt-5 flex gap-2">
          <button className="rounded-xl border px-4 py-2" onClick={onClose}>إلغاء</button>
          <button className="rounded-xl bg-navy px-4 py-2 text-white" onClick={onConfirm}>تفعيل التذكير</button>
        </div>
      </div>
    </div>
  );
}

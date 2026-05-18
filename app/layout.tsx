import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IELTS Readiness Coach",
  description: "مدرب جاهزية ذكي لاختبار IELTS للطلاب الخليجيين",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}

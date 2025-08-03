import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'بوفيه مفتوح - اطلب طعامك الطازج في أي وقت',
  description:
    'اكتشف أشهى الأطباق من أفضل المطاعم في منطقتك. اطلب أونلاين أو احجز طاولة للمناسبات الخاصة.',
  keywords: 'بوفيه, مطعم, توصيل طعام, طلب أونلاين, حجز طاولة',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.webp" type="image/webp" />
      </head>
      <body className="bg-[var(--background)] text-[var(--foreground)] min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}

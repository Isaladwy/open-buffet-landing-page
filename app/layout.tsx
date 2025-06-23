import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Cairo } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

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
          href="https://fonts.googleapis.com/css2?family=Cairo:slnt,wght@0,400;0,500;0,600;0,700;0,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} bg-[var(--background)] text-[var(--foreground)] min-h-screen antialiased`}
        style={{
          letterSpacing: '0.01em',
          textAlign: 'right',
          fontFamily: 'Cairo, GE SS Two, Arial, Helvetica, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

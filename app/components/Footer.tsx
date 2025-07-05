import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#181c1b] text-white py-12 px-6 md:px-12 border-t-2 border-[var(--accent)]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-bold mb-4 text-[var(--accent)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
            بوفيه خان الريحان
          </h3>
          <p className="text-sm text-white/80 mb-4 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">
            أفضل تجربة بوفيه في الدمام مع تشكيلة واسعة من الأطباق والمأكولات
            الطازجة.
          </p>
          {/* <div className="flex space-x-4 ">
            <a
              href="#"
              className="text-[var(--accent)] hover:text-white transition-colors [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]"
              aria-label="فيسبوك"
            >
              <i className="fab fa-facebook-f"></i>فيسبوك
            </a>
            <a
              href="#"
              className="text-[var(--accent)] hover:text-white transition-colors [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]"
              aria-label="انستجرام"
            >
              <i className="fab fa-instagram"></i>انستجرام
            </a>
            <a
              href="#"
              className="text-[var(--accent)] hover:text-white transition-colors [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]"
              aria-label="تويتر"
            >
              <i className="fab fa-twitter"></i>تويتر
            </a>
          </div> */}
        </div>
        <div>
          <h3 className="font-bold mb-4 text-[var(--accent)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
            ساعات العمل
          </h3>
          <p className="text-sm text-white/80 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">
            الأحد - الخميس: 11 صباحاً - 10 مساءً
          </p>
          <p className="text-sm text-white/80 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">
            الجمعة - السبت: 10 صباحاً - 11 مساءً
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-[var(--accent)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
            تواصل معنا
          </h3>
          <Link
            target="_blank"
            href="https://maps.app.goo.gl/xDauMUbiEV7DSTs67"
            className="text-sm hover:text-[#e0b96a] hover:underline text-white/80 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]"
          >
            طريق الخليج، الغادر، سيهات
          </Link>
          <p className="hover:text-[#e0b96a] hover:underline text-sm text-white/80 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">
            info@openbuffet.com
          </p>
          <Link
            target="_blank"
            href="tel:0593366301"
            className="hover:text-[#e0b96a] hover:underline text-sm text-white/80 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]"
          >
            0593366301
          </Link>
        </div>
      </div>
      <div className="border-t border-[var(--accent)] pt-6 text-center text-sm text-white/60">
        <p className="[text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">
          © 2025 بوفيه مفتوح. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}

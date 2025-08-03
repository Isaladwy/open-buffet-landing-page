import Link from 'next/link';
import React from 'react';

const SpecialOffers = () => (
  <div className="flex md:flex-row flex-col mt-16 items-center justify-center gap-8">
    <div className="bg-gradient-to-r from-[var(--accent)] to-yellow-400 rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold text-[#181c1b] mb-4 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">
        عرض العائلات
      </h3>
      <p className="text-lg text-[#181c1b] mb-6 font-[var(--font-cairo)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_15%)]">
        خصم 15% للعائلات المكونة من 15 شخص أو أكثر
      </p>
      <Link
        href="#booking"
        className="bg-[#181c1b] text-[var(--accent)] font-bold py-3 px-8 rounded-lg hover:bg-black/95 transition-colors[text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]"
      >
        احجز الآن
      </Link>
    </div>
    <div className="bg-gradient-to-r from-teal-900 to-teal-700 rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold text-white mb-4 [text-shadow:_1px_1px_3px_rgb(0_0_0_/_30%)]">
        عرض الأعراس
      </h3>
      <p className="text-lg text-white mb-6 font-[var(--font-cairo)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_25%)]">
        باقة خاصة للأعراس مع ديكورات إضافية وخدمة مميزة
      </p>
      <Link
        href="#booking"
        className="bg-white text-[#233a45] font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]"
      >
        استفسر الآن
      </Link>
    </div>
  </div>
);

export default SpecialOffers;

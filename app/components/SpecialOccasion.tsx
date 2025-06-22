import Image from 'next/image';
import React from 'react';

export default function SpecialOccasion() {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center py-20 px-6 md:px-0 gap-12 relative overflow-hidden bg-[var(--logo-beige)]"
    >
      <h1 className="uppercase text-5xl  text-[var(--logo-green)] mb-2 font-[var(--font-cairo)] text-center [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">
        بوفيه المناسبات والحفلات
      </h1>

      <div className="md:w-1/3 w-full flex justify-center mb-8 md:mb-0 z-10">
        <div className="rounded-2xl overflow-hidden shadow-lg md:mr-6 border-4 border-[var(--accent)] max-w-xs">
          {/* Replace src with your own image if desired */}
          <Image
            width={500}
            height={500}
            src="/images/photo-1617201835781-615e57a8b71d.png"
            alt="مطعم ويلما"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      {/* Text Content */}
      <div className="md:w-2/3 w-full flex flex-col items-center justify-center z-10">
        <h2 className="text-xl md:text-2xl font-bold text-[var(--logo-dark-blue)] mb-4 max-w-xl text-center [text-shadow:_1px_1px_3px_rgb(0_0_0_/_15%)]">
          بوفيهنا هو الخيار الأمثل لجميع مناسباتك، الحفلات والأعراس
        </h2>
        <p className="text-base md:text-lg text-black mb-8 max-w-md font-[var(--font-cairo)] text-center [text-shadow:_1px_1px_2px_rgb(0_0_0_/_10%)]">
          نقدم لك أطباقاً متنوعة تناسب جميع الأذواق، مع جودة عالية وخدمة راقية
          في أجواء مميزة تناسب حفلاتك وأفراحك.
        </p>
        {/* Decorative Swirl */}
        <div className="my-6">
          <svg
            width="120"
            height="20"
            viewBox="0 0 120 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 10 Q30 2,60 10 T118 10"
              stroke="#e0b96a"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

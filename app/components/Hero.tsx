import React from 'react';
import Button from './Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Full-page background image */}
      <Image
        fill
        src="/images/buffet1.png"
        alt="Buffet Food"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        priority
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[var(--theme-dark-teal)]/70 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 flex-1 justify-center w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg font-[var(--font-cairo)] font-bold">
          استمتع بتجربة البوفيه المفتوح
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 font-medium font-[var(--font-cairo)]">
          تشكيلة واسعة من الأطباق الطازجة يومياً. مثالي للحفلات، الأعراس، وجميع
          المناسبات.
        </p>
        <Button
          variant="primary"
          className="bg-[var(--theme-orange)] text-[var(--theme-dark-teal)] font-semibold px-8 py-3 text-lg shadow-md hover:bg-opacity-90 transition-all"
        >
          استعرض القائمة
        </Button>
      </div>
    </section>
  );
}

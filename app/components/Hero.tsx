import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[100vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Full-page background image */}
      <Image
        fill
        src="/images/buffet1.webp"
        alt="Buffet Food"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 flex-1 justify-center w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg text-center [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)]">
          استمتع بتجربة البوفيه المفتوح
        </h1>
        <p className="text-lg md:text-xl text-[var(--accent)] mb-8 font-medium text-right [text-shadow:_1px_1px_2px_rgb(0_0_0_/_50%)]">
          تشكيلة واسعة من الأطباق الطازجة يومياً. مثالي للحفلات، الأعراس، وجميع
          المناسبات.
        </p>
        <button
          className="rounded-md text-black drop-shadow-md bg-[var(--logo-green)] font-semibold px-8 py-3 text-lg shadow-md hover:bg-yellow-400 transition-colors [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]"
        >
          استعرض القائمة
        </button>
      </div>
    </section>
  );
}

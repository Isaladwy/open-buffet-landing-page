import React from 'react';
import Image from 'next/image';
// import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[50vh] lg:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Full-page background image */}
      <Image
        fill
        src="/hero.jpg"
        alt="Buffet Food"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-start pr-10 w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg text-center [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)]">
        أطلب أول بوفيه الآن
        </h1>
        <p className="text-3xl md:text-5xl text-[#fff] mb-8  text-center [text-shadow:_1px_1px_2px_rgb(0_0_0_/_50%)]">
          وخلنا نهتم بكل التفاصيل!
        </p>
        {/* <Link href="/contact" className="z-20">
        <button 
          className="rounded-md text-black drop-shadow-md bg-[var(--logo-green)] font-semibold px-8 py-3 text-lg shadow-md hover:bg-yellow-400 transition-colors [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]"
          >
          استعرض القائمة
        </button>
          </Link> */}
      </div>
    </section>
  );
}

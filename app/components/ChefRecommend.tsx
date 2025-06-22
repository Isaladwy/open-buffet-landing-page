import React from 'react';
import Image from 'next/image';

export default function ChefRecommend() {
  return (
    <section className="w-full flex flex-col items-center justify-center pb-20 px-6 md:px-0 gap-12 bg-[var(--logo-beige)]">
      <h1 className="uppercase text-5xl  text-[var(--logo-green)] mb-2 font-[var(--font-cairo)] text-right [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
          طبق اليوم
        </h1>
      {/* Text Content */}
      <div className="md:w-1/2 w-full flex flex-col items-center text-center justify-center mb-8 md:mb-0">
        
        <h2 className="text-xl md:text-2xl font-bold text-[var(--logo-dark-blue)] mb-4 max-w-xl font-[var(--font-cairo)] text-right [text-shadow:_1px_1px_3px_rgb(0_0_0_/_20%)]">
          الشيف يرشح لك
        </h2>
        <p className="text-base md:text-lg text-black mb-8 mr-6 max-w-md font-[var(--font-cairo)] text-center [text-shadow:_1px_1px_2px_rgb(0_0_0_/_15%)]">
          جرب طبق اليوم المختار بعناية من الشيف، يجمع بين النكهات الأصيلة
          والمكونات الطازجة.
        </p>
        <button 
          className="rounded-md text-black drop-shadow-md bg-[var(--logo-green)] text-[#181c1b] font-semibold px-8 py-3 text-lg shadow-md hover:bg-yellow-400 transition-colors [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]"
        >
          اكتشف المزيد
        </button>
      </div>
      {/* Food Photo */}
      <div className="md:w-1/2 w-full flex justify-center z-10">
        <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-[var(--accent)] max-w-xs">
          <Image
            width={500}
            height={500}
            src="/images/photo-1547573854-74d2a71d0826.png"
            alt="طبق من اختيار الشيف"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

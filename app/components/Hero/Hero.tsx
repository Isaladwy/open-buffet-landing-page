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
        priority
        src="/hero.jpg"
        alt="Buffet Food"
        className=" inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 " />
      {/* Content */}
      <div className="flex items-center flex-col xl:flex-row w-[80%]">
        <div className="z-20 flex flex-col xl:items-start items-center w-full">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg text-center [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)]">
            أطلب أول بوفيه الآن
          </h1>
          <p className="text-3xl md:text-5xl text-[#fff] mb-8 text-center [text-shadow:_1px_1px_2px_rgb(0_0_0_/_50%)]">
            وخلنا نهتم بكل التفاصيل!
          </p>
        </div>
        <div className="z-20 w-full flex items-center justify-center">
          <Image
            src="/Offer-Shape1.png"
            alt="Buffet Food"
            width={220}
            height={220}
            className="object-fill hover:scale-120 z-20 lg:w-[500px] lg:h-[500px] w-[220px] h-[220px]"
            
          />
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Button from './Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Full-page background image */}
      <Image
        fill
        src="/images/buffet1.png"
        alt="Buffet Food"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
          Taste The <br className="hidden md:block" />
          Difference
        </h1>
        <p className="text-lg md:text-xl text-[var(--accent)] mb-8 font-medium">
          When the going gets tough, the tough get grilling. Bringing heat to
          your meat. No one can compete with our meat
        </p>
        <Button
          variant="primary"
          className="bg-[var(--accent)] text-[#181c1b] font-semibold px-8 py-3 text-lg shadow-md hover:bg-yellow-400 transition-colors"
        >
          Our Menus
        </Button>
      </div>
    </section>
  );
}

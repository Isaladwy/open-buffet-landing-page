import React from 'react';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative bg-transparent py-20 px-6 md:px-0 flex flex-col items-center text-center overflow-hidden">
      <div className="max-w-2xl mx-auto z-10">
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
      {/* Decorative images and leaves will be added in a later step */}
    </section>
  );
}

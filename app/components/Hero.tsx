import React from 'react';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative bg-transparent py-20 px-6 md:px-0 flex flex-col items-center text-center overflow-hidden">
      {/* Decorative Images */}
      <img
        src="/images/buffet1.svg"
        alt="Buffet Plate"
        className="hidden md:block absolute top-0 left-0 w-56 -translate-y-1/4 -translate-x-1/4 z-0 opacity-90"
      />
      <img
        src="/images/special-offer.svg"
        alt="Special Offer Plate"
        className="hidden md:block absolute top-0 right-0 w-64 -translate-y-1/4 translate-x-1/4 z-0 opacity-90"
      />
      <img
        src="/images/party-buffet.svg"
        alt="Leaf Decor"
        className="hidden md:block absolute bottom-0 left-0 w-48 translate-y-1/4 -translate-x-1/4 z-0 opacity-80"
      />
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
    </section>
  );
}

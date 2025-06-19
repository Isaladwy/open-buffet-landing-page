import React from 'react';
import Button from './Button';
import Image from 'next/image';

export default function ChefRecommend() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-20 px-6 md:px-0 gap-12">
      {/* Text Content */}
      <div className="md:w-1/2 w-full flex flex-col items-center text-center justify-center mb-8 md:mb-0">
        <span className="uppercase text-xs tracking-widest text-[var(--accent)] mb-2">
          Delight in every bite
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-xl">
          Our Chef <span className="text-[var(--accent)]">Recommend</span>
        </h2>
        <p className="text-base md:text-lg text-white/80 mb-8 max-w-md">
          Exerci tation photo booth stumptown tote bag Banksy, elit small batch
          freegan sed. Craft beer elit seitan exercitation.
        </p>
        <Button
          variant="primary"
          className="bg-[var(--accent)] text-[#181c1b] font-semibold px-8 py-3 text-lg shadow-md hover:bg-yellow-400 transition-colors"
        >
          View Menus
        </Button>
      </div>
      {/* Food Photo */}
      <div className="md:w-1/2 w-full flex justify-center z-10">
        <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-[var(--accent)] max-w-xs">
          <Image
            width={500}
            height={500}
            src="/images/photo-1547573854-74d2a71d0826.png"
            alt="Chef Recommended Dish"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

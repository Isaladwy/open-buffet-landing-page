import React from 'react';

export default function SpecialOccasion() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-20 px-6 md:px-0 gap-12 relative overflow-hidden">
      {/* Decorative Leaf */}
      <img
        src="/images/party-buffet.svg"
        alt="Leaf Decor"
        className="hidden md:block absolute -top-16 right-0 w-40 opacity-70 z-0"
      />
      {/* Restaurant Image */}
      <div className="md:w-1/3 w-full flex justify-center mb-8 md:mb-0 z-10">
        <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-[var(--accent)] max-w-xs">
          {/* Replace src with your own image if desired */}
          <img
            src="/images/restaurant1.svg"
            alt="مطعم ويلما"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      {/* Text Content */}
      <div className="md:w-2/3 w-full flex flex-col items-start justify-center z-10">
        <span className="uppercase text-xs tracking-widest text-[var(--accent)] mb-2">
          وجهتك للمناسبات الخاصة
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-xl">
          بوفيه ويلما هو الطعم الفاخر الذي يستحق أن{' '}
          <span className="italic text-[var(--accent)]">يُتذوق</span>، لحم بقري
          طازج بين <span className="italic">أسنانك</span>
        </h2>
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

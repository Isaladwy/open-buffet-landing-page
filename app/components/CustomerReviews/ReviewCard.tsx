import React from 'react';

export interface Review {
  name: string;
  review: string;
  stars: number;
  date?: string;
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-[#233a45] p-8 rounded-2xl shadow-lg flex flex-col items-center text-center border border-[var(--accent)] min-h-[320px]">
      <div className="w-16 h-16 rounded-full bg-[var(--accent)] flex items-center justify-center text-xl font-bold text-[#232a28] mb-4 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">
        {review.name[0]}
      </div>
      <h3 className="font-bold text-white mb-2 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
        {review.name}
      </h3>
      <div className="text-[var(--accent)] mb-2 text-lg [text-shadow:_1px_1px_2px_rgb(0_0_0_/_25%)]">
        {'★'.repeat(review.stars)}
      </div>
      <p className="text-white/80 font-[var(--font-cairo)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">
        {review.review}
      </p>
    </div>
  );
}

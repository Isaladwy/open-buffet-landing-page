import React from 'react';

const reviews = [
  {
    name: 'سارة الأحمد',
    review: 'تجربة رائعة! تنوع الأطباق وجودة الخدمة جعلت الحفل مميزاً جداً.',
    stars: 5,
  },
  {
    name: 'محمد العتيبي',
    review: 'بوفيه غني بالأصناف الطازجة. أنصح به للحفلات والأعراس.',
    stars: 5,
  },
  {
    name: 'ريم السبيعي',
    review: 'الطعام لذيذ والأجواء راقية. شكراً لفريق العمل على التنظيم الرائع.',
    stars: 4,
  },
];

export default function CustomerReviews() {
  return (
    <section
      id="reviews"
      className="py-16 px-6 md:px-12 bg-[var(--background)]"
    >
      <h2 className="text-3xl font-bold mb-10 text-[var(--accent)] text-center font-[var(--font-cairo)]">
        آراء العملاء
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#233a45] p-8 rounded-2xl shadow-lg flex flex-col items-center text-center border border-[var(--accent)]"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--accent)] flex items-center justify-center text-xl font-bold text-[#232a28] mb-4">
              {item.name[0]}
            </div>
            <h3 className="font-bold text-white mb-2 font-[var(--font-cairo)]">
              {item.name}
            </h3>
            <div className="text-[var(--accent)] mb-2 text-lg">
              {'★'.repeat(item.stars)}
            </div>
            <p className="text-white/80 font-[var(--font-cairo)]">
              {item.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

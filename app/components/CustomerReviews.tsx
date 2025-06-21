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
    stars: 5,
  },
];

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-16 px-6 md:px-12 bg-white">
      <h2 className="text-3xl font-bold mb-10 text-[var(--theme-dark-teal)] text-center font-[var(--font-cairo)]">
        آراء العملاء
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center border border-gray-100"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--theme-green)] flex items-center justify-center text-xl font-bold text-white mb-4">
              {item.name[0]}
            </div>
            <h3 className="font-bold text-black mb-2 font-[var(--font-cairo)]">
              {item.name}
            </h3>
            <div className="text-[var(--theme-orange)] mb-2 text-lg">
              {'★'.repeat(item.stars)}
            </div>
            <p className="text-gray-600 font-[var(--font-cairo)]">
              {item.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

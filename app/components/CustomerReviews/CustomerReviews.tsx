"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
  };
  return (
    <section
      id="reviews"
      className="py-16 px-6 md:px-12 bg-[#f7f7fe]"
    >
      <h2 className="text-3xl font-bold mb-10 text-[var(--logo-green)] text-center [text-shadow:_1px_1px_3px_rgb(0_0_0_/_25%)]">
        آراء العملاء
      </h2>
      <div className="max-w-2xl mx-auto">
        <Slider {...sliderSettings}>
          {reviews.map((item, idx) => (
            <div key={idx}>
              <div className="bg-[#233a45] p-8 rounded-2xl shadow-lg flex flex-col items-center text-center border border-[var(--accent)] min-h-[320px]">
                <div className="w-16 h-16 rounded-full bg-[var(--accent)] flex items-center justify-center text-xl font-bold text-[#232a28] mb-4 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">
                  {item.name[0]}
                </div>
                <h3 className="font-bold text-white mb-2 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
                  {item.name}
                </h3>
                <div className="text-[var(--accent)] mb-2 text-lg [text-shadow:_1px_1px_2px_rgb(0_0_0_/_25%)]">
                  {'★'.repeat(item.stars)}
                </div>
                <p className="text-white/80 font-[var(--font-cairo)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">
                  {item.review}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

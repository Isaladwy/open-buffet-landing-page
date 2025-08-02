
'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

import Image from 'next/image';

const reviews = [
  {
    name: 'أحمد علي',
    review: 'الطعام كان لذيذًا جدًا والخدمة ممتازة. سأعود بالتأكيد!',
    stars: 5,
    image: '/images/customers/ahmed.jpg',
  },
  {
    name: 'سارة محمد',
    review: 'تنوع الأطباق رائع والأسعار مناسبة. أنصح الجميع بالتجربة.',
    stars: 4,
    image: '/images/customers/sara.jpg',
  },
  {
    name: 'خالد حسن',
    review: 'تجربة رائعة من جميع النواحي. فريق العمل ودود جدًا.',
    stars: 5,
    image: '/images/customers/khaled.jpg',
  },
  {
    name: 'أحمد علي',
    review: 'الطعام كان لذيذًا جدًا والخدمة ممتازة. سأعود بالتأكيد!',
    stars: 5,
    image: '/images/customers/ahmed.jpg',
  },
  {
    name: 'نجوى حمدان',
    review: 'تنوع الأطباق رائع والأسعار مناسبة. أنصح الجميع بالتجربة.',
    stars: 4,
    image: '/images/customers/sara.jpg',
  },
];

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-16   ">
      <h2 className="text-3xl font-bold mb-10 text-[#233a45] text-center [text-shadow:_1px_1px_3px_rgb(0_0_0_/_25%)]">
        آراء العملاء
      </h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={18}
        slidesPerView={1}
        // navigation
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="w-full"
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1250: {
            slidesPerView: 3,
          },
          1600: {slidesPerView: 4,
          },
        }}
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-[#233a45] p-8 rounded-2xl shadow-lg flex flex-col items-center text-center border border-[var(--accent)] min-h-[320px] w-80 mx-auto">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-[var(--accent)] flex items-center justify-center mb-4 shadow-lg border-4 border-[var(--accent)]">
              <Image
                src={review.image}
                alt={review.name}
                width={112}
                height={112}
                className="object-cover w-full h-full"
              />
            </div>
              <h3 className="font-bold text-white mb-2 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
                {review.name}
              </h3>
              <div className="text-[var(--accent)] mb-2 text-lg [text-shadow:_1px_1px_2px_rgb(0_0_0_/_25%)]">
                {'★'.repeat(review.stars)}
              </div>
              <p className="text-white/80 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">
                {review.review}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

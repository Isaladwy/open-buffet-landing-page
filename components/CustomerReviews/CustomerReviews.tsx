
'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

import Image from 'next/image';

const reviews = [
  {
    name: 'ماجــد مسفــر',
    review: 'المشويات طعمها لذيذ والاكل بشكل عام لذيذ',
    stars: 4,
    image: '/customers/image.png',
  },
  {
    name: 'Hind (Vip)',
    review: 'الأكل ماشاء الله طعم مرررا ..',
    stars: 5,
    image: '/customers/image1.png',
  },
  {
    name: 'abu yousef',
    review: 'مازالوا محافظين على جودة الأكل .. كما اخص بالشكر الجزيل طاقم الموظفين على حسن الضيافة والاستقبال',
    stars: 3,
    image: '/customers/image2.png',
  },
  {
    name: 'WAFA RAMADAN',
    review: 'طبعا أكلهم مو طبيعي خياااال تبولة خان و المنسف !!! قمة باللذاذة و الأسعار جدا مناسبة',
    stars: 5,
    image: '/customers/image3.png',
  },
  {
    name: 'dana abdulla',
    review: 'الاستقبال منظم وتقديم الطلب سريع وراهي والاسعار جداااااااا خياليه .. من الاخر زبونه دايمه عندكم',
    stars: 5,
    image: '/customers/image4.png',
  },
];

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-16   ">
      <h2 className="text-3xl font-bold mb-10 text-[#233a45] text-center">
        آراء العملاء
      </h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        // navigation
        speed={900}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="w-full"
        breakpoints={{
          770: {
            slidesPerView: 2,
          },
          1250: {
            slidesPerView: 3,
          },
          1600: { slidesPerView: 4 },
        }}
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-[#233a45] p-8 rounded-2xl shadow-lg flex flex-col items-center text-center border border-[var(--accent)] h-[320px]  mx-auto">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-[var(--accent)] flex items-center justify-center mb-4 shadow-lg border-4 border-[var(--accent)]">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={1200}
                  height={1200}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-bold text-white mb-2 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
                {review.name}
              </h3>
              <div className="mb-2 text-lg flex justify-center gap-1 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_25%)]">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < review.stars ? (
                    <span key={i} className="text-[var(--accent)]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="var(--accent)"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ display: 'inline', verticalAlign: 'middle' }}
                      >
                        <polygon points="10,2 12.472,7.236 18,7.854 13.75,11.764 15.236,17.146 10,14.2 4.764,17.146 6.25,11.764 2,7.854 7.528,7.236" />
                      </svg>
                    </span>
                  ) : (
                    <span key={i} className="text-[var(--accent)] ">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ display: 'inline', verticalAlign: 'middle' }}
                      >
                        <polygon points="10,2 12.472,7.236 18,7.854 13.75,11.764 15.236,17.146 10,14.2 4.764,17.146 6.25,11.764 2,7.854 7.528,7.236" />
                      </svg>
                    </span>
                  )
                )}
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

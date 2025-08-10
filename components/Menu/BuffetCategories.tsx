'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const buffetItems = [
  { src: '/plates/أرز-شعريه.webp', alt: 'أرز شعرية', label: 'أرز شعرية' },
  { src: '/plates/باستا-بشاميل.webp', alt: 'باستا بشاميل', label: 'باستا بشاميل' },
  { src: '/plates/بطاطا-حاره.webp', alt: 'بطاطا حاره', label: 'بطاطا حاره' },
  { src: '/plates/خاروف-نعيمي.webp', alt: 'خاروف نعيمي', label: 'خاروف نعيمي' },
  { src: '/plates/داود-باشا.webp', alt: 'داود باشا', label: 'داود باشا' },
  { src: '/plates/شوربة-عدس.webp', alt: 'شوربة عدس', label: 'شوربة عدس' },
  { src: '/plates/كوسه-باللبن.webp', alt: 'كوسه باللبن', label: 'كوسه باللبن' },
  { src: '/plates/مشكل-محاشي.webp', alt: 'مشكل محاشي', label: 'مشكل محاشـي' },
  { src: '/plates/مشكل-مقبلات-مقليه.webp', alt: 'مشكل مقبلات مقليه', label: 'مشكل مقبلات مقليه' },
  { src: '/plates/ميكس-كباب.webp', alt: 'ميكس كباب', label: 'ميكس كباب' },
];


const BuffetCategories = () => (
  <div className="mt-16">
    <h3 className="text-3xl font-bold mb-10 text-[#233a45] text-center">
      تشكيلة الأطباق
    </h3>
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={24}
      slidesPerView={1.4}
      speed={900}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      className="w-full"
      breakpoints={{
        380: {
          slidesPerView: 1.66,
        },
        550: {
          slidesPerView: 2.1,
        },
        768: {
          slidesPerView: 3.1,
        },
        1024: {
          slidesPerView: 4.1,
        },
        1250: {
          slidesPerView: 5.1,
        },
        1440: {
          slidesPerView: 6.1,
        },
      }}
      style={{
        // Smoother transition for slide movement
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {buffetItems.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex flex-col items-center transition-transform duration-500 ease-in-out hover:scale-105">
            <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg mb-3 relative flex items-center justify-center transition-shadow duration-500 hover:shadow-2xl">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 ease-in-out scale-100 hover:scale-105"
                style={{ borderRadius: '1rem' }}
              />
            </div>
            <span className="text-[var(--logo-green)] drop-shadow-xs text-2xl font-bold text-center px-2 pb-2 transition-colors duration-500 ease-in-out hover:text-[var(--logo-teal)]">
              {item.label}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default BuffetCategories;
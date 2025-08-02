'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const buffetItems = [
  { src: '/images/plates/1.jpg', alt: 'فتوش', label: 'فتوش' },
  { src: '/images/plates/2.jpg', alt: 'سلطة يونانية', label: 'سلطة يونانية' },
  { src: '/images/plates/3.jpg', alt: 'سلطة خضراء', label: 'سلطة خضراء' },
  { src: '/images/plates/4.jpg', alt: 'حمص', label: 'حمص' },
  { src: '/images/plates/1.jpg', alt: 'متبل', label: 'متبل' },
  { src: '/images/plates/2.jpg', alt: 'تبولة', label: 'تبولة' },
  { src: '/images/plates/3.jpg', alt: 'دجاج مشوي', label: 'دجاج مشوي' },
];


const BuffetCategories = () => (
  <div className="my-16  ">
    <h3 className="text-3xl font-bold mb-10 text-[#233a45] text-center">
      تشكيلة الأطباق
    </h3>
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={18}
      slidesPerView={1.66}
      // navigation
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="w-full"
      breakpoints={{
        550: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1250: {
          slidesPerView: 5,
        },
        1440: {
          slidesPerView: 6,
        },
      }}
    >
      {buffetItems.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg mb-3 relative flex items-center justify-center">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                style={{ borderRadius: '1rem' }}
              />
            </div>
            <span className="text-[var(--logo-green)] text-2xl font-bold text-center px-2 pb-2">
              {item.label}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default BuffetCategories;
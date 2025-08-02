'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';



const BuffetCategories = () => (
  <div className="my-16  ">
    <h3 className="text-2xl font-bold text-[#233a45] mb-8 text-center [text-shadow:_1px_1px_3px_rgb(0_0_0_/_15%)]">
      تشكيلة الأطباق
    </h3>
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="w-full"
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 bg-[#21505a] rounded-2xl overflow-hidden border-4 border-[var(--accent)] shadow-lg mb-3 relative flex items-center justify-center">
            <Image
              src="/images/elegant-buffet/fattoush.webp"
              alt="فتوش"
              fill
              className="object-cover"
              style={{ borderRadius: '1rem' }}
            />
          </div>
          <span className="text-[var(--logo-green)] text-2xl font-bold text-center px-2 pb-2">
            فتوش
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 bg-[#21505a] rounded-2xl overflow-hidden border-4 border-[var(--accent)] shadow-lg mb-3 relative flex items-center justify-center">
            <Image
              src="/images/elegant-buffet/greek-salad.webp"
              alt="سلطة يونانية"
              fill
              className="object-cover"
              style={{ borderRadius: '1rem' }}
            />
          </div>
          <span className="text-[var(--logo-green)] text-2xl font-bold text-center px-2 pb-2">
            سلطة يونانية
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 bg-[#21505a] rounded-2xl overflow-hidden border-4 border-[var(--accent)] shadow-lg mb-3 relative flex items-center justify-center">
            <Image
              src="/images/elegant-buffet/green-salad.webp"
              alt="سلطة خضراء"
              fill
              className="object-cover"
              style={{ borderRadius: '1rem' }}
            />
          </div>
          <span className="text-[var(--logo-green)] text-2xl font-bold text-center px-2 pb-2">
            سلطة خضراء
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 bg-[#21505a] rounded-2xl overflow-hidden border-4 border-[var(--accent)] shadow-lg mb-3 relative flex items-center justify-center">
            <Image
              src="/images/elegant-buffet/hummus.webp"
              alt="حمص"
              fill
              className="object-cover"
              style={{ borderRadius: '1rem' }}
            />
          </div>
          <span className="text-[var(--logo-green)] text-2xl font-bold text-center px-2 pb-2">
            حمص
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 bg-[#21505a] rounded-2xl overflow-hidden border-4 border-[var(--accent)] shadow-lg mb-3 relative flex items-center justify-center">
            <Image
              src="/images/elegant-buffet/mutabbal.webp"
              alt="متبل"
              fill
              className="object-cover"
              style={{ borderRadius: '1rem' }}
            />
          </div>
          <span className="text-[var(--logo-green)] text-2xl font-bold text-center px-2 pb-2">
            متبل
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 bg-[#21505a] rounded-2xl overflow-hidden border-4 border-[var(--accent)] shadow-lg mb-3 relative flex items-center justify-center">
            <Image
              src="/images/elegant-buffet/tabbouleh.webp"
              alt="تبولة"
              fill
              className="object-cover"
              style={{ borderRadius: '1rem' }}
            />
          </div>
          <span className="text-[var(--logo-green)] text-2xl font-bold text-center px-2 pb-2">
            تبولة
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 bg-[#21505a] rounded-2xl overflow-hidden border-4 border-[var(--accent)] shadow-lg mb-3 relative flex items-center justify-center">
            <Image
              src="/images/main-buffet/grilled-chicken.webp"
              alt="دجاج مشوي"
              fill
              className="object-cover"
              style={{ borderRadius: '1rem' }}
            />
          </div>
          <span className="text-[var(--logo-green)] text-2xl font-bold text-center px-2 pb-2">
            دجاج مشوي
          </span>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
);

export default BuffetCategories;

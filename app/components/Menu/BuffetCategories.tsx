import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

interface BuffetCategoryItem {
  name: string;
  imageUrl: string;
}

interface BuffetCategory {
  title: string;
  items: BuffetCategoryItem[];
}

interface BuffetCategoriesProps {
  buffetCategories: BuffetCategory[];
}

const BuffetCategories: React.FC<BuffetCategoriesProps> = ({ buffetCategories }) => (
  <div className="mb-16">
    <h3 className="text-2xl font-bold text-[var(--logo-green)] mb-8 text-center [text-shadow:_1px_1px_3px_rgb(0_0_0_/_15%)]">
      تشكيلة الأطباق لكل باقة
    </h3>
    <div className="flex flex-col gap-8">
      {buffetCategories.map((category, categoryIndex) => (
        <div
          key={categoryIndex}
          className="bg-[#233a45] rounded-2xl p-6 border border-[var(--accent)]/30"
        >
          <h4 className="text-xl font-bold text-[var(--accent)] mb-4 text-center[text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
            {category.title}
          </h4>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {category.items.map((item, itemIndex) => (
              <SwiperSlide key={itemIndex}>
                <div className="h-48 w-full rounded-lg relative">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg font-bold text-center p-4 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)]">
                      {item.name}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  </div>
);

export default BuffetCategories;

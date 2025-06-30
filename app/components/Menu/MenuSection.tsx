'use client';
import React from 'react';


import { buffetPackages, buffetCategories } from './menuData';
import BuffetPackages from './BuffetPackages';
import BuffetCategories from './BuffetCategories';
import SpecialOffers from './SpecialOffers';



const MenuSection = () => {
  return (
    <section id="menu" className="py-20 px-6 md:px-12 bg-[#f7f7fe]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="uppercase text-5xl text-[var(--logo-green)] mb-10 font-[var(--font-cairo)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">
            بوفيه مفتوح
          </h1>
          <h3 className="text-xl md:text-2xl font-bold text-[var(--logo-dark-blue)] mb-4  [text-shadow:_1px_1px_3px_rgb(0_0_0_/_15%)]">
            باقات البوفيه المفتوح
          </h3>
          <p className="text-lg text-black max-w-2xl mx-auto font-[var(--font-cairo)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_10%)]">
            اختر الباقة المناسبة لمناسبتك. جميع الباقات تشمل أطباق متنوعة
            ومشروبات مع خدمة راقية ومميزة
          </p>
        </div>

        {/* Buffet Packages */}
        <BuffetPackages buffetPackages={buffetPackages} />

        {/* Buffet Categories */}
        <BuffetCategories buffetCategories={buffetCategories} />

        {/* Special Offers */}
        <SpecialOffers />
      </div>
    </section>
  );
};

export default MenuSection;

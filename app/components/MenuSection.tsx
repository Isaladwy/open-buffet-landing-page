'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';

const MenuSection = () => {
  const buffetPackages = [
    {
      title: 'البوفيه الأساسي',
      description: 'تشكيلة متنوعة من الأطباق العربية التقليدية',
      price: '75 ريال',
      perPerson: 'للشخص الواحد',
      includes: [
        'مقبلات متنوعة (حمص، تبولة، سلطات)',
        'أطباق رئيسية (كباب، دجاج مشوي، سمك)',
        'أرز وخبز طازج',
        'حلويات عربية تقليدية',
        'مشروبات ساخنة وباردة',
      ],
      minGuests: 'الحد الأدنى: 10 أشخاص',
    },
    {
      title: 'البوفيه المميز',
      description: 'بوفيه فاخر مع أطباق إضافية ومشويات متنوعة',
      price: '95 ريال',
      perPerson: 'للشخص الواحد',
      includes: [
        'جميع أطباق البوفيه الأساسي',
        'مشويات إضافية (لحم ضأن، دجاج، سمك)',
        'أطباق شرقية وغربية متنوعة',
        'حلويات متنوعة (عربية وغربية)',
        'عصائر طازجة ومشروبات غازية',
        'قهوة تركية وشاي بالنعناع',
      ],
      minGuests: 'الحد الأدنى: 8 أشخاص',
    },
    {
      title: 'البوفيه الفاخر',
      description: 'تجربة بوفيه استثنائية مع أطباق فاخرة ومتنوعة',
      price: '125 ريال',
      perPerson: 'للشخص الواحد',
      includes: [
        'جميع أطباق البوفيه المميز',
        'أطباق بحرية فاخرة',
        'مشويات على الفحم',
        'حلويات فاخرة متنوعة',
        'عصائر طبيعية ومشروبات متنوعة',
        'قهوة عربية وتركية',
        'خدمة راقية ومميزة',
      ],
      minGuests: 'الحد الأدنى: 6 أشخاص',
    },
  ];

  const buffetCategories = [
    {
      title: 'المقبلات والسلطات',
      items: [
        { name: 'حمص بالطحينة', query: 'hummus' },
        { name: 'تبولة', query: 'tabbouleh' },
        { name: 'سلطة يونانية', query: 'greek,salad' },
        { name: 'متبل باذنجان', query: 'eggplant,dip' },
        { name: 'سلطة خضراء طازجة', query: 'green,salad' },
        { name: 'سلطة فتوش', query: 'fattoush,salad' },
      ].map((item) => ({
        ...item,
        imageUrl: `https://source.unsplash.com/random/800x600?${item.query}`,
      })),
    },
    {
      title: 'الأطباق الرئيسية',
      items: [
        { name: 'كباب لحم ضأن', query: 'lamb,kebab' },
        { name: 'دجاج مشوي', query: 'grilled,chicken' },
        { name: 'سمك مشوي', query: 'grilled,fish' },
        { name: 'مقلوبة لحم', query: 'maqluba,food' },
        { name: 'مندي لحم', query: 'mandi,meat' },
        { name: 'أرز بسمتي مع توابل', query: 'spiced,rice' },
      ].map((item) => ({
        ...item,
        imageUrl: `https://source.unsplash.com/random/800x600?${item.query}`,
      })),
    },
    {
      title: 'المشويات',
      items: [
        { name: 'كباب دجاج', query: 'chicken,kebab' },
        { name: 'كباب لحم', query: 'meat,kebab' },
        { name: 'شرائح لحم مشوية', query: 'grilled,steak' },
        { name: 'دجاج مشوي على الفحم', query: 'charcoal,chicken' },
        { name: 'سمك مشوي', query: 'grilled,seafood' },
      ].map((item) => ({
        ...item,
        imageUrl: `https://source.unsplash.com/random/800x600?${item.query}`,
      })),
    },
    {
      title: 'الحلويات',
      items: [
        { name: 'كنافة نابلسية', query: 'kunafa' },
        { name: 'بقلاوة تركية', query: 'baklava' },
        { name: 'أم علي', query: 'om,ali,dessert' },
        { name: 'قطايف', query: 'qatayef' },
        { name: 'حلاوة طحينية', query: 'halva' },
        { name: 'فواكه طازجة', query: 'fruit,platter' },
      ].map((item) => ({
        ...item,
        imageUrl: `https://source.unsplash.com/random/800x600?${item.query}`,
      })),
    },
  ];

  return (
    <section id="menu" className="py-20 px-6 md:px-12 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="uppercase text-xs tracking-widest text-[var(--accent)] mb-2 font-[var(--font-cairo)]">
            بوفيه مفتوح
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[var(--font-cairo)]">
            باقات البوفيه المفتوح
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-[var(--font-cairo)]">
            اختر الباقة المناسبة لمناسبتك. جميع الباقات تشمل أطباق متنوعة
            ومشروبات مع خدمة راقية ومميزة
          </p>
        </div>

        {/* Buffet Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {buffetPackages.map((package_, index) => (
            <div
              key={index}
              className="bg-[#232a28] rounded-2xl p-8 border border-[var(--accent)] hover:border-[var(--accent)]/60 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-[var(--accent)] mb-2 text-center font-[var(--font-cairo)]">
                {package_.title}
              </h3>
              <p className="text-white/70 text-center mb-4 font-[var(--font-cairo)]">
                {package_.description}
              </p>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-white font-[var(--font-cairo)]">
                  {package_.price}
                </span>
                <p className="text-sm text-[var(--accent)] font-[var(--font-cairo)]">
                  {package_.perPerson}
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                {package_.includes.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-[var(--accent)] mr-2 mt-1">✓</span>
                    <span className="text-white/80 text-sm font-[var(--font-cairo)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[var(--accent)] text-center font-[var(--font-cairo)]">
                {package_.minGuests}
              </p>
            </div>
          ))}
        </div>

        {/* Buffet Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center font-[var(--font-cairo)]">
            تشكيلة الأطباق المتوفرة
          </h3>
          <div className="flex flex-col gap-8">
            {buffetCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-[#232a28] rounded-2xl p-6 border border-[var(--accent)]/30"
              >
                <h4 className="text-xl font-bold text-[var(--accent)] mb-4 text-center font-[var(--font-cairo)]">
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
                      <div
                        className="h-48 w-full bg-cover bg-center rounded-lg relative"
                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                      >
                        <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                          <span className="text-white text-lg font-bold text-center font-[var(--font-cairo)] p-4">
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

        {/* Special Offers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-[var(--accent)] to-yellow-400 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[#181c1b] mb-4 font-[var(--font-cairo)]">
              عرض العائلات
            </h3>
            <p className="text-lg text-[#181c1b] mb-6 font-[var(--font-cairo)]">
              خصم 15% للعائلات المكونة من 15 شخص أو أكثر
            </p>
            <button className="bg-[#181c1b] text-[var(--accent)] font-bold py-3 px-8 rounded-lg hover:bg-white transition-colors font-[var(--font-cairo)]">
              احجز الآن
            </button>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4 font-[var(--font-cairo)]">
              عرض الأعراس
            </h3>
            <p className="text-lg text-white mb-6 font-[var(--font-cairo)]">
              باقة خاصة للأعراس مع ديكورات إضافية وخدمة مميزة
            </p>
            <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors font-[var(--font-cairo)]">
              استفسر الآن
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-[#232a28] p-6 rounded-xl border border-[var(--accent)]">
            <div className="text-3xl mb-3">🍽️</div>
            <h4 className="font-bold text-white mb-2 font-[var(--font-cairo)]">
              بوفيه مفتوح
            </h4>
            <p className="text-sm text-white/70 font-[var(--font-cairo)]">
              تناول ما تريد من الأطباق المتنوعة المتوفرة
            </p>
          </div>

          <div className="bg-[#232a28] p-6 rounded-xl border border-[var(--accent)]">
            <div className="text-3xl mb-3">👨‍🍳</div>
            <h4 className="font-bold text-white mb-2 font-[var(--font-cairo)]">
              شيف محترف
            </h4>
            <p className="text-sm text-white/70 font-[var(--font-cairo)]">
              أطباق محضرة بأيدي شيف محترف مع خبرة 15 عام
            </p>
          </div>

          <div className="bg-[#232a28] p-6 rounded-xl border border-[var(--accent)]">
            <div className="text-3xl mb-3">🌱</div>
            <h4 className="font-bold text-white mb-2 font-[var(--font-cairo)]">
              مكونات طازجة
            </h4>
            <p className="text-sm text-white/70 font-[var(--font-cairo)]">
              جميع المكونات طازجة ومختارة بعناية يومياً
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

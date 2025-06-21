import React from 'react';

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
        'حمص بالطحينة',
        'تبولة',
        'سلطة يونانية',
        'متبل باذنجان',
        'سلطة خضراء طازجة',
        'سلطة فتوش',
      ],
    },
    {
      title: 'الأطباق الرئيسية',
      items: [
        'كباب لحم ضأن',
        'دجاج مشوي',
        'سمك مشوي',
        'مقلوبة لحم',
        'مندي لحم',
        'أرز بسمتي مع توابل',
      ],
    },
    {
      title: 'المشويات',
      items: [
        'كباب دجاج',
        'كباب لحم',
        'شرائح لحم مشوية',
        'دجاج مشوي على الفحم',
        'سمك مشوي',
      ],
    },
    {
      title: 'الحلويات',
      items: [
        'كنافة نابلسية',
        'بقلاوة تركية',
        'أم علي',
        'قطايف',
        'حلاوة طحينية',
        'فواكه طازجة',
      ],
    },
  ];

  return (
    <section id="menu" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="uppercase text-xs tracking-widest text-[var(--theme-green)] mb-2 font-[var(--font-cairo)]">
            بوفيه مفتوح
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-dark-teal)] mb-4 font-[var(--font-cairo)]">
            باقات البوفيه المفتوح
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-[var(--font-cairo)]">
            اختر الباقة المناسبة لمناسبتك. جميع الباقات تشمل أطباق متنوعة
            ومشروبات مع خدمة راقية ومميزة
          </p>
        </div>

        {/* Buffet Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {buffetPackages.map((package_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-[var(--theme-dark-teal)] mb-2 text-center font-[var(--font-cairo)]">
                {package_.title}
              </h3>
              <p className="text-gray-500 text-center mb-4 font-[var(--font-cairo)] flex-grow">
                {package_.description}
              </p>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-black font-[var(--font-cairo)]">
                  {package_.price}
                </span>
                <p className="text-sm text-[var(--theme-green)] font-[var(--font-cairo)]">
                  {package_.perPerson}
                </p>
              </div>
              <ul className="space-y-3 mb-6 flex-grow">
                {package_.includes.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-[var(--theme-green)] ml-2 mt-1">
                      ✓
                    </span>
                    <span className="text-gray-700 text-sm font-[var(--font-cairo)] text-right">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[var(--theme-green)] text-center font-[var(--font-cairo)] mt-auto">
                {package_.minGuests}
              </p>
            </div>
          ))}
        </div>

        {/* Buffet Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black mb-8 text-center font-[var(--font-cairo)]">
            تشكيلة الأطباق المتوفرة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {buffetCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white rounded-2xl p-6 border border-gray-200"
              >
                <h4 className="text-xl font-bold text-[var(--theme-dark-teal)] mb-4 text-center font-[var(--font-cairo)]">
                  {category.title}
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="text-gray-700 text-sm text-center font-[var(--font-cairo)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-[var(--theme-orange)] to-yellow-500 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4 font-[var(--font-cairo)]">
              عرض العائلات
            </h3>
            <p className="text-lg text-white mb-6 font-[var(--font-cairo)]">
              خصم 15% للعائلات المكونة من 15 شخص أو أكثر
            </p>
            <button className="bg-white text-[var(--theme-dark-teal)] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors font-[var(--font-cairo)]">
              احجز الآن
            </button>
          </div>

          <div className="bg-gradient-to-r from-[var(--theme-green)] to-teal-500 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4 font-[var(--font-cairo)]">
              عرض الأعراس
            </h3>
            <p className="text-lg text-white mb-6 font-[var(--font-cairo)]">
              باقة خاصة للأعراس مع ديكورات إضافية وخدمة مميزة
            </p>
            <button className="bg-white text-[var(--theme-dark-teal)] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors font-[var(--font-cairo)]">
              استفسر الآن
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-3xl mb-3">🍽️</div>
            <h4 className="font-bold text-black mb-2 font-[var(--font-cairo)]">
              بوفيه مفتوح
            </h4>
            <p className="text-sm text-gray-700 font-[var(--font-cairo)]">
              تناول ما تريد من الأطباق المتنوعة المتوفرة
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-3xl mb-3">👨‍🍳</div>
            <h4 className="font-bold text-black mb-2 font-[var(--font-cairo)]">
              شيف محترف
            </h4>
            <p className="text-sm text-gray-700 font-[var(--font-cairo)]">
              أطباق محضرة بأيدي شيف محترف مع خبرة 15 عام
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-3xl mb-3">🌱</div>
            <h4 className="font-bold text-black mb-2 font-[var(--font-cairo)]">
              مكونات طازجة
            </h4>
            <p className="text-sm text-gray-700 font-[var(--font-cairo)]">
              جميع المكونات طازجة ومختارة بعناية يومياً
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

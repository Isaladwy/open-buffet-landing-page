import React from 'react';

const MenuSection = () => {
  const menuCategories = [
    {
      title: 'المقبلات',
      items: [
        {
          name: 'سلطة يونانية',
          description: 'طماطم، خيار، زيتون، جبنة فيتا',
          price: '25 ريال',
        },
        {
          name: 'حمص بالطحينة',
          description: 'حمص مطحون مع طحينة وليمون',
          price: '20 ريال',
        },
        {
          name: 'تبولة',
          description: 'برغل مع بقدونس ونعناع طازج',
          price: '22 ريال',
        },
        {
          name: 'متبل باذنجان',
          description: 'باذنجان مشوي مع طماطم وثوم',
          price: '18 ريال',
        },
      ],
    },
    {
      title: 'الأطباق الرئيسية',
      items: [
        {
          name: 'كباب لحم',
          description: 'لحم ضأن مشوي على الفحم مع أرز',
          price: '45 ريال',
        },
        {
          name: 'دجاج مشوي',
          description: 'دجاج مشوي مع خضار وأرز بسمتي',
          price: '40 ريال',
        },
        {
          name: 'سمك مشوي',
          description: 'سمك طازج مشوي مع صلصة ليمون',
          price: '50 ريال',
        },
        {
          name: 'مقلوبة لحم',
          description: 'أرز مع لحم وخضار مطبوخة',
          price: '42 ريال',
        },
      ],
    },
    {
      title: 'الحلويات',
      items: [
        {
          name: 'كنافة',
          description: 'كنافة نابلسية مع جبنة وجوز',
          price: '30 ريال',
        },
        {
          name: 'بقلاوة',
          description: 'بقلاوة تركية مع عسل وجوز',
          price: '28 ريال',
        },
        {
          name: 'أم علي',
          description: 'خبز محمص مع حليب ومكسرات',
          price: '25 ريال',
        },
        {
          name: 'قطايف',
          description: 'قطايف محشوة بالجوز أو الجبنة',
          price: '32 ريال',
        },
      ],
    },
    {
      title: 'المشروبات',
      items: [
        {
          name: 'عصير برتقال طازج',
          description: 'عصير برتقال طبيعي 100%',
          price: '15 ريال',
        },
        {
          name: 'عصير ليمون بالنعناع',
          description: 'ليمون طازج مع نعناع',
          price: '12 ريال',
        },
        {
          name: 'قهوة تركية',
          description: 'قهوة تركية تقليدية',
          price: '18 ريال',
        },
        {
          name: 'شاي بالنعناع',
          description: 'شاي أخضر مع نعناع طازج',
          price: '10 ريال',
        },
      ],
    },
  ];

  return (
    <section id="menu" className="py-20 px-6 md:px-12 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="uppercase text-xs tracking-widest text-[var(--accent)] mb-2 font-[var(--font-cairo)]">
            قائمة الطعام
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[var(--font-cairo)]">
            قائمة البوفيه المفتوح
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-[var(--font-cairo)]">
            اكتشف تشكيلة واسعة من الأطباق الطازجة والمشوية يومياً. نقدم لك أفضل
            النكهات العربية والأجنبية
          </p>
        </div>

        {/* Menu Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {menuCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-[#232a28] rounded-2xl p-8 border border-[var(--accent)]"
            >
              <h3 className="text-2xl font-bold text-[var(--accent)] mb-6 text-center font-[var(--font-cairo)]">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-start border-b border-[var(--accent)]/20 pb-4 last:border-b-0"
                  >
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1 font-[var(--font-cairo)]">
                        {item.name}
                      </h4>
                      <p className="text-sm text-white/70 font-[var(--font-cairo)]">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-lg font-bold text-[var(--accent)] font-[var(--font-cairo)]">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Offer */}
        <div className="mt-16 bg-gradient-to-r from-[var(--accent)] to-yellow-400 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#181c1b] mb-4 font-[var(--font-cairo)]">
            عرض خاص للعائلات
          </h3>
          <p className="text-lg text-[#181c1b] mb-6 font-[var(--font-cairo)]">
            احصل على خصم 20% على البوفيه الكامل للعائلات المكونة من 4 أشخاص أو
            أكثر
          </p>
          <button className="bg-[#181c1b] text-[var(--accent)] font-bold py-3 px-8 rounded-lg hover:bg-white transition-colors font-[var(--font-cairo)]">
            احجز الآن
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-[#232a28] p-6 rounded-xl border border-[var(--accent)]">
            <div className="text-3xl mb-3">🍽️</div>
            <h4 className="font-bold text-white mb-2 font-[var(--font-cairo)]">
              أطباق يومية
            </h4>
            <p className="text-sm text-white/70 font-[var(--font-cairo)]">
              قائمة متجددة كل يوم مع أفضل المكونات الطازجة
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
              نستخدم أفضل المكونات الطازجة والمحلية
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

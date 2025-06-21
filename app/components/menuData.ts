export const buffetPackages = [
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

export const buffetCategories = [
  {
    title: 'الأطباق الرئيسية',
    items: [
      { name: 'كباب لحم ضأن', query: 'lamb,kebab' },
      { name: 'دجاج مشوي', query: 'grilled,chicken' },
      { name: 'سمك مشوي', query: 'grilled,fish' },
      { name: 'مقلوبة لحم', query: 'maqluba,food' },
      { name: 'مندي لحم', query: 'mandi,meat' },
      { name: 'أرز بسمتي مع توابل', query: 'spiced,rice' },
    ].map((item: { name: string; query: string }) => ({
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
    ].map((item: { name: string; query: string }) => ({
      ...item,
      imageUrl: `https://source.unsplash.com/random/800x600?${item.query}`,
    })),
  },
  {
    title: 'المقبلات والسلطات',
    items: [
      { name: 'حمص بالطحينة', query: 'hummus' },
      { name: 'تبولة', query: 'tabbouleh' },
      { name: 'سلطة يونانية', query: 'greek,salad' },
      { name: 'متبل باذنجان', query: 'eggplant,dip' },
      { name: 'سلطة خضراء طازجة', query: 'green,salad' },
      { name: 'سلطة فتوش', query: 'fattoush,salad' },
    ].map((item: { name: string; query: string }) => ({
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
    ].map((item: { name: string; query: string }) => ({
      ...item,
      imageUrl: `https://source.unsplash.com/random/800x600?${item.query}`,
    })),
  },
];

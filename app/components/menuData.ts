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
    path: 'main-dishes',
    items: [
      { name: 'كباب لحم ضأن', imageName: 'kebab-lamb.webp' },
      { name: 'دجاج مشوي', imageName: 'grilled-chicken.webp' },
      { name: 'سمك مشوي', imageName: 'grilled-fish.webp' },
      { name: 'مقلوبة لحم', imageName: 'maqluba.webp' },
      { name: 'مندي لحم', imageName: 'mandi.webp' },
      { name: 'أرز بسمتي مع توابل', imageName: 'spiced-rice.webp' },
    ],
  },
  {
    title: 'المشويات',
    path: 'grills',
    items: [
      { name: 'كباب دجاج', imageName: 'kebab-chicken.webp' },
      { name: 'كباب لحم', imageName: 'kebab-meat.webp' },
      { name: 'شرائح لحم مشوية', imageName: 'grilled-steak.webp' },
      { name: 'دجاج مشوي على الفحم', imageName: 'charcoal-chicken.webp' },
      { name: 'سمك مشوي', imageName: 'grilled-seafood.webp' },
    ],
  },
  {
    title: 'المقبلات والسلطات',
    path: 'appetizers-and-salads',
    items: [
      { name: 'حمص بالطحينة', imageName: 'hummus.webp' },
      { name: 'تبولة', imageName: 'tabbouleh.webp' },
      { name: 'سلطة يونانية', imageName: 'greek-salad.webp' },
      { name: 'متبل باذنجان', imageName: 'mutabbal.webp' },
      { name: 'سلطة خضراء طازجة', imageName: 'green-salad.webp' },
      { name: 'سلطة فتوش', imageName: 'fattoush.webp' },
    ],
  },
  {
    title: 'الحلويات',
    path: 'desserts',
    items: [
      { name: 'كنافة نابلسية', imageName: 'kunafa.webp' },
      { name: 'بقلاوة تركية', imageName: 'baklava.webp' },
      { name: 'أم علي', imageName: 'om-ali.webp' },
      { name: 'قطايف', imageName: 'qatayef.webp' },
      { name: 'حلاوة طحينية', imageName: 'halva.webp' },
      { name: 'فواكه طازجة', imageName: 'fruit-platter.webp' },
    ],
  },
].map((category) => ({
  ...category,
  items: category.items.map((item) => ({
    ...item,
    imageUrl: `/images/${category.path}/${item.imageName}`,
  })),
}));

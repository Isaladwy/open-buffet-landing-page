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
      { name: 'كباب لحم ضأن', imageName: 'kebab-lamb.jpg' },
      { name: 'دجاج مشوي', imageName: 'grilled-chicken.jpg' },
      { name: 'سمك مشوي', imageName: 'grilled-fish.jpg' },
      { name: 'مقلوبة لحم', imageName: 'maqluba.jpg' },
      { name: 'مندي لحم', imageName: 'mandi.jpg' },
      { name: 'أرز بسمتي مع توابل', imageName: 'spiced-rice.jpg' },
    ],
  },
  {
    title: 'المشويات',
    path: 'grills',
    items: [
      { name: 'كباب دجاج', imageName: 'kebab-chicken.jpg' },
      { name: 'كباب لحم', imageName: 'kebab-meat.jpg' },
      { name: 'شرائح لحم مشوية', imageName: 'grilled-steak.jpg' },
      { name: 'دجاج مشوي على الفحم', imageName: 'charcoal-chicken.jpg' },
      { name: 'سمك مشوي', imageName: 'grilled-seafood.jpg' },
    ],
  },
  {
    title: 'المقبلات والسلطات',
    path: 'appetizers-and-salads',
    items: [
      { name: 'حمص بالطحينة', imageName: 'hummus.jpg' },
      { name: 'تبولة', imageName: 'tabbouleh.jpg' },
      { name: 'سلطة يونانية', imageName: 'greek-salad.jpg' },
      { name: 'متبل باذنجان', imageName: 'mutabbal.jpg' },
      { name: 'سلطة خضراء طازجة', imageName: 'green-salad.jpg' },
      { name: 'سلطة فتوش', imageName: 'fattoush.jpg' },
    ],
  },
  {
    title: 'الحلويات',
    path: 'desserts',
    items: [
      { name: 'كنافة نابلسية', imageName: 'kunafa.jpg' },
      { name: 'بقلاوة تركية', imageName: 'baklava.jpg' },
      { name: 'أم علي', imageName: 'om-ali.jpg' },
      { name: 'قطايف', imageName: 'qatayef.jpg' },
      { name: 'حلاوة طحينية', imageName: 'halva.jpg' },
      { name: 'فواكه طازجة', imageName: 'fruit-platter.jpg' },
    ],
  },
].map((category) => ({
  ...category,
  items: category.items.map((item) => ({
    ...item,
    imageUrl: `/images/${category.path}/${item.imageName}`,
  })),
}));

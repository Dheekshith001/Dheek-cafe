export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Collection', href: '#collection' },
  { name: 'Best Sellers', href: '#best-sellers' },
  { name: 'Our Story', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Brewing', href: '#brewing' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export const featuredCollection = [
  {
    id: 1,
    name: 'Panama Geisha Reserve',
    tagline: 'Floral & Ethereal',
    price: '₹6,500.00',
    rating: 4.9,
    description: 'Extremely rare and sought-after micro-lot with delicate notes of jasmine, bergamot, and sweet peach.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    badge: 'Limited Release',
    notes: ['Jasmine', 'Bergamot', 'Peach'],
  },
  {
    id: 2,
    name: 'Ethiopian Yirgacheffe Heirloom',
    tagline: 'Bright & Citric',
    price: '₹2,400.00',
    rating: 4.8,
    description: 'A classic single-origin coffee showcasing crisp lemon acidity, black tea body, and floral honey aromas.',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80',
    badge: 'Organic Single Origin',
    notes: ['Lemon', 'Honey', 'Black Tea'],
  },
  {
    id: 3,
    name: 'Sumatra Mandheling Gold',
    tagline: 'Earthy & Bold',
    price: '₹2,800.00',
    rating: 4.7,
    description: 'A deeply complex, full-bodied cup with tasting profiles of cedarwood, dark cocoa, and sweet tobacco.',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=80',
    badge: 'Artisan Roast',
    notes: ['Dark Cocoa', 'Cedarwood', 'Spice'],
  },
];

export const bestSellers = [
  {
    id: 1,
    name: 'Dheek Signature Espresso Blend',
    price: '₹1,450.00',
    rating: 4.9,
    reviews: 240,
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=600&q=80',
    description: 'Our award-winning blend designed for the perfect, velvety espresso shot with golden hazelnut crema.',
  },
  {
    id: 2,
    name: 'Highland Caramel Infusion',
    price: '₹1,650.00',
    rating: 4.8,
    reviews: 185,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
    description: 'Premium Arabica beans gently roasted and infused with organic caramel oil for a silky-smooth finish.',
  },
  {
    id: 3,
    name: 'Kyoto-Style Cold Brew Concentrate',
    price: '₹1,850.00',
    rating: 4.9,
    reviews: 310,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80',
    description: 'Slow-dripped over 18 hours using ice water, resulting in an incredibly clean, chocolate-forward profile.',
  },
];

export const features = [
  {
    icon: 'Compass',
    title: 'Ethical Global Sourcing',
    description: 'We partner directly with family-owned coffee estates globally, ensuring above fair-trade wages.',
  },
  {
    icon: 'Flame',
    title: 'Precision Micro-Roasting',
    description: 'Beans are roasted in small 12kg batches using advanced thermodynamic profiling for ultimate flavor consistency.',
  },
  {
    icon: 'Wind',
    title: 'Aroma-Seal Protection',
    description: 'Equipped with nitrogen flush packaging, locking in the natural gasses and volatile aromas for months.',
  },
  {
    icon: 'Award',
    title: 'Q-Grader Certified',
    description: 'Every single batch is cupped and scored by our in-house certified Q-Graders to guarantee premium grade.',
  },
];

export const menuCategories = [
  'All',
  'Espresso',
  'Latte & Cappuccino',
  'Cold Brew',
  'Specialty Sweets & Desserts',
];

export const menuItems = [
  {
    id: 1,
    name: 'Double Ristretto Espresso',
    category: 'Espresso',
    price: '₹280.00',
    notes: 'Intense, sweet, short pulling of our signature blend',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Gold Flake Cortado',
    category: 'Espresso',
    price: '₹480.00',
    notes: 'Equal parts espresso and warm milk, topped with edible 24k gold leaf',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Velvet Rose Latte',
    category: 'Latte & Cappuccino',
    price: '₹420.00',
    notes: 'Espresso with organic rosewater syrup, velvety micro-foam, and dried petals',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'Deconstructed Cappuccino',
    category: 'Latte & Cappuccino',
    price: '₹490.00',
    notes: 'Served in three separate glass vessels: double shot, warm milk, and dry foam',
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    name: 'Smoked Oak Nitro Cold Brew',
    category: 'Cold Brew',
    price: '₹460.00',
    notes: 'Slow-extracted cold brew infused with nitrogen and smoked oakwood steam',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    name: 'Truffle Affogato',
    category: 'Cold Brew',
    price: '₹650.00',
    notes: 'House-made vanilla bean gelato, shot of espresso, shaved white truffles',
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 7,
    name: 'Pistachio Matcha Croissant',
    category: 'Specialty Sweets & Desserts',
    price: '₹450.00',
    notes: 'Baked fresh with organic Uji matcha cream and roasted pistachio crumbs',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 8,
    name: 'Espresso Chocolate Tiramisu',
    category: 'Specialty Sweets & Desserts',
    price: '₹680.00',
    notes: 'Ladyfingers soaked in dark rum and our espresso blend, layered with mascarpone',
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=600&q=80',
  },
];

export const brewingSteps = [
  {
    step: '01',
    title: 'Sustainable Sourcing',
    subtitle: 'Cultivated at High Altitudes',
    description: 'We source exclusively from farms positioned 1,500+ meters above sea level, where cool nights slow bean development for intense sweetness.',
  },
  {
    step: '02',
    title: 'Artisan Micro-Roasting',
    subtitle: 'The Maillard Reaction',
    description: 'We track roasting thermodynamics in real time, catching the precise moment the bean pops to maximize complex acidity and body.',
  },
  {
    step: '03',
    title: 'Cryogenic Grinding',
    subtitle: 'Flavor Locking',
    description: 'Grinding beans under cooled temperatures preserves sensitive essential aromatic oils that standard grinding friction destroys.',
  },
  {
    step: '04',
    title: 'Precision Brewing',
    subtitle: 'Golden Ratio Perfected',
    description: 'Every cup is brewed with structured mineral water at 93°C, strictly adhering to our scientific ratio of 1:16.',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Lord Arthur Sterling',
    role: 'Connoisseur & Collector',
    comment: 'The Panama Geisha from Dheek-cafe is absolutely transcendent. It is floral, complex, and represents the absolute pinnacle of luxury coffee.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 2,
    name: 'Elena Rostova',
    role: 'Michelin Star Pastry Chef',
    comment: 'I use their Espresso blend in all my high-end dessert pairings. The depth of flavor is unmatched, holding hints of dark honey and cedar.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 3,
    name: 'Marcus Chen',
    role: 'Specialty Coffee Association Judge',
    comment: 'Dheek-cafe has managed to bridge the gap between hard coffee science and elegant luxury branding. Their extraction profile is flawless.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
];

export const galleryItems = [
  {
    id: 1,
    title: 'The Art of Roasting',
    category: 'Craft',
    image: 'https://images.unsplash.com/photo-1606791405792-1004f1718d0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Perfect Crema Pour',
    category: 'Espresso',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Artisan Cafe Ambience',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Ethical Sourcing Farms',
    category: 'Origin',
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Precision Espresso Machine',
    category: 'Gear',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Deconstructed Latte Art',
    category: 'Art',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
  },
];

export const faqs = [
  {
    question: "Do you sell coffee beans wholesale or direct to consumers? (Sell or Not)",
    answer: "We offer both! You can purchase our fresh micro-lots directly from our online cellar, or contact our team if you are a specialty café looking for custom roasting and wholesale partnerships."
  },
  {
    question: "How does the Dheek Cellar Membership work? (Membership)",
    answer: "Our members receive monthly deliveries of freshly roasted single-origin coffees, exclusive early access to rare micro-lots, invites to private laboratory cupping events, and complimentary carbon-neutral shipping."
  },
  {
    question: "How can I share my feedback or contact your roasters? (Let us Know)",
    answer: "We would love to hear from you! You can use our contact form below to drop us a line, or email us directly at dheekshithnaidu@gmail.com with any suggestions, reviews, or questions."
  }
];

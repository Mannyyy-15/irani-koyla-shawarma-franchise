export interface FranchiseSupportItem {
  title: string;
  category?: string;
  description?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'INVESTMENT' | 'SUPPORT' | 'LOCATION' | 'BRAND';
}

export const BRAND_POSITIONING = [
  '100% Halal',
  'No Beef',
  'Real Koyla Smoke',
  'Starts at ₹80',
  '5% Royalty',
  'Lifetime Deal',
];

export const FRANCHISE_TICKER = [
  'OWN THE TASTE. BUILD THE LEGACY.',
  '100% HALAL & NO BEEF',
  'REAL KOYLA SMOKE',
  'STARTS AT JUST ₹80',
  '₹8,00,000 ONE-TIME FRANCHISE FEE',
  '5% MONTHLY ROYALTY (ONGOING BRAND SUPPORT)',
  'LIFETIME AGREEMENT (VALID UNTIL DEAL)',
  '200 – 500 SQ. FT. OUTLET SIZE',
  'COMPLETE SETUP & STAFF TRAINING INCLUDED',
  'HEAD OFFICE: VIRAR, MAHARASHTRA',
];

export const CORE_INVESTMENT_METRICS = [
  {
    value: '₹8,00,000',
    label: 'One-Time Fee',
    detail: 'Brand license, setup guide & staff training included',
  },
  {
    value: '5%',
    label: 'Monthly Royalty',
    detail: 'Low 5% royalty for continuous brand & marketing support',
  },
  {
    value: 'Lifetime',
    label: 'Agreement Term',
    detail: 'Valid until deal. No yearly renewal fees',
  },
  {
    value: '200–500',
    label: 'Outlet Sq. Ft.',
    detail: 'Compact shop size with fast live charcoal counter',
  },
];

export const WHY_INVEST_POINTS = [
  {
    title: 'Huge Daily Demand',
    description: 'Starting at ₹80 with real charcoal smoke, people keep coming back every day.',
  },
  {
    title: 'Low Monthly Royalty (5%)',
    description: 'Only 5% monthly royalty with complete ongoing supply chain, recipes, and marketing help.',
  },
  {
    title: 'Lifetime Agreement',
    description: 'Pay ₹8 Lakhs once. Your franchise agreement is valid for a lifetime.',
  },
  {
    title: 'High Profit Margins',
    description: 'Smart recipes and direct raw material supply give you 30% to 35% net margin.',
  },
  {
    title: 'Easy to Run (No Master Chef)',
    description: 'Standardized sauces and prep training mean anyone can run the kitchen smoothly.',
  },
  {
    title: 'Low Wastage',
    description: 'Fast rotating shawarma spits mean zero food waste and fast customer service.',
  },
];

export const COMPLETE_SUPPORT_ITEMS = [
  { title: 'Site Selection', description: 'Help in identifying high potential locations.' },
  { title: 'Outlet Setup', description: 'Interior design, equipment and vendor tie-ups.' },
  { title: 'Training', description: 'Comprehensive training for owners and staff.' },
  { title: 'Marketing Support', description: 'National & local marketing strategies.' },
  { title: 'Operations Manual', description: 'Step-by-step SOPs for smooth operations.' },
  { title: 'Menu & Supply Chain', description: 'Standardized recipes & reliable supply network.' },
  { title: 'Technology', description: 'POS, reporting & operational tools for efficiency.' },
  { title: 'Ongoing Support', description: 'Dedicated relationship manager & continuous support.' },
];

export const IDEAL_LOCATIONS = [
  {
    title: 'Main Markets & High Streets',
    name: 'Main Markets & High Streets',
    tag: 'BUSY CROWDS',
    description: 'Main shopping streets with heavy evening rush.',
  },
  {
    title: 'Colleges & Coaching Hubs',
    name: 'Colleges & Coaching Hubs',
    tag: 'STUDENT AREA',
    description: 'Campuses and student hostels with daily repeat customers.',
  },
  {
    title: 'Food Streets & Night Markets',
    name: 'Food Streets & Night Markets',
    tag: 'FOOD HUBS',
    description: 'Popular evening food spots and late night drive-bys.',
  },
  {
    title: 'Near Stations & Metro Stops',
    name: 'Near Stations & Metro Stops',
    tag: 'DAILY TRANSIT',
    description: 'High foot traffic areas where commuters grab quick takeaways.',
  },
  {
    title: 'Dense Residential Areas',
    name: 'Dense Residential Areas',
    tag: 'FAMILY & TAKEAWAY',
    description: 'Busy neighborhoods with heavy home delivery and family orders.',
  },
];

export const ONBOARDING_STEPS = [
  {
    step: '01',
    duration: 'DAYS 1–7',
    title: 'Apply & Sign Agreement',
    description: 'Select your city, pay the ₹8 Lakh fee, and get your lifetime agreement.',
  },
  {
    step: '02',
    duration: 'DAYS 8–20',
    title: 'Location & 3D Design',
    description: 'Finalize your 200–500 sq. ft. shop and get complete interior 3D plans.',
  },
  {
    step: '03',
    duration: 'DAYS 21–40',
    title: 'Kitchen & Machine Setup',
    description: 'Install shawarma machines, koyla charcoal setup, and counters.',
  },
  {
    step: '04',
    duration: 'DAYS 41–50',
    title: 'Staff Training',
    description: 'We train your cooks in meat slicing, secret sauces, and fast wrapping.',
  },
  {
    step: '05',
    duration: 'DAYS 51–60',
    title: 'Grand Opening',
    description: 'Run launch offers, local ads, and start serving your city.',
  },
];

export const CONTACT_DETAILS = {
  phone: '+91 93240 76994',
  displayPhone: '+91 93240 76994',
  headOffice: 'Virar, Maharashtra',
  email: 'franchise@iranikoylashawarma.com',
  website: 'www.iranikoylashawarma.com',
  instagram: '@irani_koyla_shawarma',
  instagramUrl: 'https://instagram.com/irani_koyla_shawarma',
  notice: 'Limited franchises available per city.',
};

export const FAQS: FaqItem[] = [
  {
    category: 'INVESTMENT',
    question: 'How much is the franchise fee and monthly royalty?',
    answer: 'The one-time Franchise Fee is ₹8,00,000. There is a low 5% monthly royalty for ongoing brand support and marketing. The agreement is valid for a lifetime.',
  },
  {
    category: 'INVESTMENT',
    question: 'What is the starting price for shawarma?',
    answer: 'Our Irani Koyla Shawarma starts from ₹80 for classic wraps, up to ₹150–₹200 for jumbo cheese wraps and platters. It sells fast because it is affordable and tastes amazing.',
  },
  {
    category: 'INVESTMENT',
    question: 'What shop size do I need?',
    answer: 'You only need a 200 to 500 Sq. Ft. shop. This is enough for the live charcoal burner, prep counter, and customer takeaway counter.',
  },
  {
    category: 'SUPPORT',
    question: 'What support do you provide to setup the shop?',
    answer: 'We help you with everything: 3D shop designs, equipment supply, staff training, recipe manuals, launch marketing, and ongoing business guidance.',
  },
  {
    category: 'LOCATION',
    question: 'Where can I open an outlet?',
    answer: 'Good locations include busy main roads, near train/metro stations, college areas, food streets, and dense residential markets.',
  },
  {
    category: 'BRAND',
    question: 'Is the food 100% Halal and No Beef?',
    answer: 'Yes. 100% Halal certified chicken only. We strictly do not serve beef. All marinades use real charcoal smoke.',
  },
  {
    category: 'SUPPORT',
    question: 'Do I need prior restaurant experience?',
    answer: 'No. Our team trains your staff completely. Standardized spice mixes ensure consistent taste every single day without needing an expensive chef.',
  },
];

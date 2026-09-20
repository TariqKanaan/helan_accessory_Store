import { Car, Crown, Sparkles, Watch, Flower2, HeartHandshake, ShieldCheck, Gem } from 'lucide-react';

/* ==========================================================================
   CENTRALIZED CONFIGURATION & ASSET REPOSITORY
   ========================================================================== */

export const SITE_CONFIG = {
  brand: {
    nameAr: "هيلانة للإكسسوارات",
    nameEn: "Helana Accessories",
    tagline: "دار الفخامة والأناقة للمناسبات والأعراس",
    slogan: "تفاصيل استثنائية لتكتمل أناقة يومك",
    description:
      "دار متخصصة في تجهيز أرقى إكسسوارات الأعراس والمناسبات الفاخرة؛ من التيجان الملكية وتزيين السيارات الفارهة، إلى باقات الورد والطرابيش التراثية الأصيلة.",
    phone: "+963935690208", // International WhatsApp contact format
    phoneDisplay: "0935 690 208",
    email: "info@helana-accessories.com",
    location: "السويداء - غربي مضافة أبو الفضل (مقابل كشكول وألبسة أطيار)",
    googleMapsUrl: "https://maps.app.goo.gl/pREzXWVumtnSxeyf8", // TODO: الصق رابط خرائط جوجل الدقيق هنا
    workHours: "يومياً: 10:00 صباحاً – 11:00 مساءً (طيلة أيام الأسبوع)",
    whatsappMessageDefault: "مرحباً هيلانة للإكسسوارات، أود الاستفسار عن حجز خدمات وتنسيقات مناسبتي القادمة.",
  },

  navLinks: [
    { id: 'home', label: 'الرئيسية', href: '#home' },
    { id: 'services', label: 'خدماتنا', href: '#services' },
    { id: 'portfolio', label: 'معرض الأعمال', href: '#portfolio' },
    { id: 'why-us', label: 'لماذا هيلانة', href: '#why-us' },
    { id: 'testimonials', label: 'آراء العملاء', href: '#testimonials' },
    { id: 'contact', label: 'تواصل معنا', href: '#contact' },
  ],

  // Hero Section Auto-Slider Slides (4 Core Themes)
  heroSlides: [
    {
      id: 1,
      title: "تزيين سيارات العرسان الملكية",
      subtitle: "لمسات فنية متناسقة بالورود الطبيعية والشرائط الحريرية لترافق انطلاقة موكبكم الفخم",
      category: "تزيين سيارات",
      // تم الربط بالصورة الفعلية لتزيين سيارة أودي المرفقة
      image: "/assets/portfolio/WhatsApp Image 2026-09-20 at 16.27.59 (1).jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80",
    },
    {
      id: 2,
      title: "تيجان ملكية وإكسسوارات براقة",
      subtitle: "تصاميم فريدة مرصعة بالزركون والكريستال عالي النقاوة تمنح العروس إشراقة لا تُنسى",
      category: "تيجان وفضيات",
      image: "/assets/portfolio/1000237644.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1546804784-896d0d517245?auto=format&fit=crop&w=1920&q=80",
    },
    {
      id: 3,
      title: "باقات ورد طبيعي ومجفف استثنائية",
      subtitle: "تنسيقات عصرية متناغمة بألوان وأشكال ساحرة تناسب أدق تفاصيل فستان الزفاف",
      category: "باقات ورد",
      image: "/assets/portfolio/1000237647.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1920&q=80",
    },
    {
      id: 4,
      title: "تأجير طرابيش عربية أصيلة",
      subtitle: "أصالة التراث العربي الفاخر بمخمل راقٍ وشراشيب ذهبية مخصصة للأعراس وحفلات الحناء",
      category: "تأجير طرابيش",
      // TODO: Replace with local asset path (e.g., '/assets/hero/traditional-tarboush.jpg')
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1920&q=80",
    }
  ],

  // Services Section (4 Detailed Cards)
  services: [
    {
      id: 'cars',
      title: "تزيين سيارات العرسان",
      shortDesc: "Wedding Car Decoration",
      description: "تصاميم مبتكرة باستخدام باقات الورد الطبيعي الفريش، الأقمشة الحريرية، والإضاءات التعبيرية الفخمة لتزيين مقدمة وخلفية السيارة وأبوابها.",
      icon: Car,
      features: ["ورود طبيعية مستوردة تدوم طويلاً", "تصاميم مخصصة لكافة أنواع السيارات", "دقة متناهية في التثبيت دون خدش الطلاء"],
      badge: "الخدمة الأكثر طلباً"
    },
    {
      id: 'crowns-bouquets',
      title: "باقات ورد وتيجان",
      shortDesc: "Bouquets & Crowns",
      description: "باقات مسكة عروس بتصاميم ملكية تتنوع بين الكلاسيكي والعصري، إلى جانب تشكيلة واسعة من التيجان المرصعة بأحجار سواروفسكي والزركون النقي.",
      icon: Crown,
      features: ["تيجان مرنة مريحة عند الارتداء", "باقات ورد طبيعي أو مجفف دائم", "إكسسوارات شعر متناسقة مع التاج"],
      badge: "إطلالة ملكية"
    },
    {
      id: 'tarboush',
      title: "تأجير طرابيش عربية",
      shortDesc: "Traditional Tarboush Rental",
      description: "توفير وتأجير طرابيش تراثية عربية مصنوعة من أجود أنواع المخمل العنابي ومزينة بالخيوط الذهبية للعروسين ولفرق العراضة واستعراضات الدبكة.",
      icon: Sparkles,
      features: ["مقاسات متعددة تناسب الجميع", "جاهزة ومجهزة بعناية فائقة ونظافة تامة", "أسعار خاصة للمجموعات وفرق الزفة"],
      badge: "أصالة عريقة"
    },
    {
      id: 'watches-silver',
      title: "ساعات وفضيات",
      shortDesc: "Watches & Silverware",
      description: "مجموعات منسقة من صواني تقديم الشبكة والمهور، ساعات يد فخمة للمناسبات، وأطقم فضيات استرلينية عيار 925 تضفي بريقاً ساحراً على مناسبتك.",
      icon: Watch,
      features: ["فضة أصلية ومختومة رسمياً", "صواني تقديم كؤوس وشموع منقوشة", "تنسيق مسبق لحفلات عقد القران"],
      badge: "بريق دائم"
    }
  ],

  // Value Propositions (Why Us)
  values: [
    {
      id: 1,
      title: "جودة لا تضاهى",
      desc: "ننتقي أجود الخامات المستوردة والأحجار النقية لضمان بريق يليق بليلة العمر.",
      icon: Gem
    },
    {
      id: 2,
      title: "دقة في المواعيد",
      desc: "التزام صارم بالجدول الزمني للتحضير والتسليم لراحتكم وهدوء بالكم.",
      icon: ShieldCheck
    },
    {
      id: 3,
      title: "تصاميم حصرية مخصصة",
      desc: "نصمم لك تفاصيل تعبر عن ذوقك الخاص وتنسجم تماماً مع طابع حفل زفافك.",
      icon: HeartHandshake
    }
  ],

  // Portfolio Filters
  portfolioFilters: [
    { id: 'all', label: 'الكل' },
    { id: 'cars', label: 'تزيين سيارات' },
    { id: 'bags', label: 'حقائب نسائية' },
    { id: 'crowns-silver', label: 'تيجان وفضيات' },
    { id: 'bouquets', label: 'باقات ورد' },
    { id: 'tarboush', label: 'تأجير طرابيش' }
  ],

  // Portfolio Items for Masonry Grid
  portfolioItems: [
    // === التيجان والمجوهرات وباقات الورد المضافة حديثاً ===
    {
      id: 401,
      title: "تاج عروس ملكي شاهق مرصع بالزركون والكريستال عالي النقاوة",
      category: "crowns-silver",
      categoryLabel: "تيجان وفضيات",
      image: "/assets/portfolio/1000237644.jpg",
      aspect: "aspect-[4/5]",
      code: "HL-CR-ROYAL-01"
    },
    {
      id: 402,
      title: "كف يد ذهبي شبكي ملكي مع أساور ليرات ذهبية متناسقة",
      category: "crowns-silver",
      categoryLabel: "تيجان وفضيات",
      image: "/assets/portfolio/1000237650.jpg",
      aspect: "aspect-[3/4]",
      code: "HL-JW-HAND-01"
    },
    {
      id: 403,
      title: "إكسسوار كف يد شبكي ذهبي راقٍ مع سوار ليرات وحلقات زركون",
      category: "crowns-silver",
      categoryLabel: "تيجان وفضيات",
      image: "/assets/portfolio/1000237651.jpg",
      aspect: "aspect-[3/4]",
      code: "HL-JW-HAND-02"
    },
    {
      id: 404,
      title: "طقم سنسال وحلق ذهبي مرصع بأحجار الياقوت الأزرق الملكي",
      category: "crowns-silver",
      categoryLabel: "تيجان وفضيات",
      image: "/assets/portfolio/1000237649.jpg",
      aspect: "aspect-[3/4]",
      code: "HL-JW-BLUE-01"
    },
    {
      id: 405,
      title: "طقم سنسال وحلق ذهبي مرصع بأحجار الياقوت الوردي الفاخر",
      category: "crowns-silver",
      categoryLabel: "تيجان وفضيات",
      image: "/assets/portfolio/1000237648.jpg",
      aspect: "aspect-[3/4]",
      code: "HL-JW-PINK-01"
    },
    {
      id: 406,
      title: "مسكة عروس ملكية من زهور الكالا البيضاء الطبيعية وجبسوفيليا محاطة بشريط ساتان",
      category: "bouquets",
      categoryLabel: "باقات ورد",
      image: "/assets/portfolio/1000237647.jpg",
      aspect: "aspect-[3/4]",
      code: "HL-BQ-CALLA-01"
    },
    {
      id: 407,
      title: "باقة عروس فاخرة من الكالا والتوليب الأبيض بمقبض مرصع بالستراس الكريستالي",
      category: "bouquets",
      categoryLabel: "باقات ورد",
      image: "/assets/portfolio/1000237646.jpg",
      aspect: "aspect-square",
      code: "HL-BQ-CALLA-02"
    },
    {
      id: 408,
      title: "مسكة عروس ناعمة من الجبسوفيليا البيضاء الفاخرة بشريط ساتان عاجي",
      category: "bouquets",
      categoryLabel: "باقات ورد",
      image: "/assets/portfolio/1000237645.jpg",
      aspect: "aspect-[3/4]",
      code: "HL-BQ-GYPSO-01"
    },
    {
      id: 409,
      title: "باقات سنابل قمح طبيعية وورد مجفف بألوان الباستيل مع شرائط ساتان",
      category: "bouquets",
      categoryLabel: "باقات ورد",
      image: "/assets/portfolio/1000237642.jpg",
      aspect: "aspect-[3/4]",
      code: "HL-BQ-DRIED-01"
    },
    // === المنتجات الفعلية المضافة حديثاً من معرض هيلانة ===
    {
      id: 301,
      title: "تنسيق إكليل ورد طبيعي أبيض فاخر مع باقة عروس متطابقة على سيارة أودي",
      category: "cars",
      categoryLabel: "تزيين سيارات",
      image: "/assets/portfolio/WhatsApp Image 2026-09-20 at 16.27.59 (1).jpeg",
      aspect: "aspect-[3/4]",
      code: "HL-CAR-AUDI-01"
    },
    {
      id: 302,
      title: "تزيين سيارة زفاف أودي كرزية فارهة بالورد الأبيض والتول الحريري الملكي",
      category: "cars",
      categoryLabel: "تزيين سيارات",
      image: "/assets/portfolio/WhatsApp Image 2026-09-20 at 16.27.59 (2).jpeg",
      aspect: "aspect-[4/3]",
      code: "HL-CAR-AUDI-02"
    },
    {
      id: 303,
      title: "لقطة علوية لمقدمة سيارة العرسان مع تنسيق الجوري وفيونكة التول البيضاء",
      category: "cars",
      categoryLabel: "تزيين سيارات",
      image: "/assets/portfolio/WhatsApp Image 2026-09-20 at 16.27.59.jpeg",
      aspect: "aspect-[3/4]",
      code: "HL-CAR-AUDI-03"
    },
    {
      id: 304,
      title: "حقيبة يد جلدية كلاسيكية - أسود ملكي مع حزام أمامي وإكسسوار ذهبي",
      category: "bags",
      categoryLabel: "حقائب نسائية",
      image: "/assets/portfolio/WhatsApp Image 2026-09-20 at 16.28.01 (2).jpeg",
      aspect: "aspect-[4/5]",
      code: "HL-BAG-01"
    },
    {
      id: 305,
      title: "حقيبة يد راقية - قماش سماوي مميز مع جلد عسلي فاخر وحزام بإبزيم",
      category: "bags",
      categoryLabel: "حقائب نسائية",
      image: "/assets/portfolio/WhatsApp Image 2026-09-20 at 16.28.02.jpeg",
      aspect: "aspect-[4/5]",
      code: "HL-BAG-02"
    },
    {
      id: 306,
      title: "حقيبة يد من القش البيج المنسوج مع حزام وعقدة جلدية عسلية",
      category: "bags",
      categoryLabel: "حقائب نسائية",
      image: "/assets/portfolio/WhatsApp Image 2026-09-20 at 16.28.01 (1).jpeg",
      aspect: "aspect-[4/5]",
      code: "HL-BAG-03"
    },
    {
      id: 307,
      title: "حقيبة يد جلدية عاجية أنيقة مع حزام منقوش بجلد الثعبان الراقي",
      category: "bags",
      categoryLabel: "حقائب نسائية",
      image: "/assets/portfolio/WhatsApp Image 2026-09-20 at 16.28.01.jpeg",
      aspect: "aspect-[4/5]",
      code: "HL-BAG-04"
    },
    {
      id: 308,
      title: "حقيبة يد صيفية منسوجة بألوان متعددة مبهجة مع مقابض جلدية",
      category: "bags",
      categoryLabel: "حقائب نسائية",
      image: "/assets/portfolio/WhatsApp Image 2026-09-20 at 16.28.00.jpeg",
      aspect: "aspect-[4/5]",
      code: "HL-BAG-05"
    },
    {
      id: 201,
      title: "تاج الزمرد والزركون الملكي",
      category: "crowns-silver",
      categoryLabel: "تيجان وفضيات",
      // TODO: Replace with local asset path (e.g., '/assets/portfolio/crown-emerald.jpg')
      image: "https://images.unsplash.com/photo-1546804784-896d0d517245?auto=format&fit=crop&w=800&q=80",
      aspect: "aspect-[4/5]",
      code: "HL-CR-01"
    },
    {
      id: 202,
      title: "تزيين لاند كروزر أبيض بزهور التوليب والجبسوفيليا",
      category: "cars",
      categoryLabel: "تزيين سيارات",
      // TODO: Replace with local asset path (e.g., '/assets/portfolio/car-landcruiser.jpg')
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      aspect: "aspect-[3/2]",
      code: "HL-CAR-01"
    },
    {
      id: 203,
      title: "مسكة عروس كلاسيكية من الجوري الأبيض والأوركيد",
      category: "bouquets",
      categoryLabel: "باقات ورد",
      // TODO: Replace with local asset path (e.g., '/assets/portfolio/bouquet-classic.jpg')
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
      aspect: "aspect-[4/5]",
      code: "HL-BQ-01"
    },
    {
      id: 204,
      title: "طربوش عربي ملكي مخملي مع كركوشة ذهبية",
      category: "tarboush",
      categoryLabel: "تأجير طرابيش",
      // TODO: Replace with local asset path (e.g., '/assets/portfolio/tarboush-gold.jpg')
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      aspect: "aspect-square",
      code: "HL-TR-01"
    },
    {
      id: 205,
      title: "طقم فضة استرليني عيار 925 مع تفاصيل الزركون",
      category: "crowns-silver",
      categoryLabel: "تيجان وفضيات",
      // TODO: Replace with local asset path (e.g., '/assets/portfolio/silver-set.jpg')
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
      aspect: "aspect-[4/3]",
      code: "HL-SL-01"
    },
    {
      id: 206,
      title: "تزيين موكب سيارات زفاف مرسيدس حديثة",
      category: "cars",
      categoryLabel: "تزيين سيارات",
      // TODO: Replace with local asset path (e.g., '/assets/portfolio/car-mercedes.jpg')
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      aspect: "aspect-[4/5]",
      code: "HL-CAR-02"
    },
    {
      id: 207,
      title: "باقة ورد هيدرانجيا وبنفسج هولندي فاخر",
      category: "bouquets",
      categoryLabel: "باقات ورد",
      // TODO: Replace with local asset path (e.g., '/assets/portfolio/bouquet-hydrangea.jpg')
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
      aspect: "aspect-[3/4]",
      code: "HL-BQ-02"
    },
    {
      id: 208,
      title: "ساعة سويسرية كلاسيكية مع إكسسوار فضي رجالي",
      category: "crowns-silver",
      categoryLabel: "تيجان وفضيات",
      // TODO: Replace with local asset path (e.g., '/assets/portfolio/watch-luxury.jpg')
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
      aspect: "aspect-square",
      code: "HL-WT-01"
    },
    {
      id: 209,
      title: "مجموعة طرابيش فاخرة لفرق الزفة والعراضة",
      category: "tarboush",
      categoryLabel: "تأجير طرابيش",
      // TODO: Replace with local asset path (e.g., '/assets/portfolio/tarboush-group.jpg')
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
      aspect: "aspect-[4/5]",
      code: "HL-TR-02"
    }
  ],

  // Social Proof Reviews
  testimonials: [
    {
      id: 1,
      name: "سارة ",
      role: "عروس شهر سبتمبر",
      rating: 5,
      content: "التاج كان قطعة فنية متكاملة وباقة الورد بقيت نضرة طوال الحفل. المعاملة قمة في الرقي والاحترافية، شكراً هيلانة على إكمال فرحتي بأجمل صورة.",
      location: "السويداء"
    },
    {
      id: 2,
      name: "بهاء",
      role: "عريس",
      rating: 5,
      content: "تزيين السيارة كان مبهراً وتجاوز التوقعات تماماً، والطرابيش أضافت طابعاً أصيلاً ومميزاً لزفة العرسان وأعجبت جميع الحاضرين.",
      location: "السويداء"
    },
    {
      id: 3,
      name: "نور  ",
      role: "حفل خطوبة",
      rating: 5,
      content: "الدقة في المواعيد واختيار درجات ألوان الزهور لتتناسق مع الفستان كانت مثالية. قطع الإكسسوارات الفضية لمعانها ملفت وعالي الجودة.",
      location: "السويداء"
    }
  ]
};

/**
 * Format international WhatsApp link with prefilled text
 */
export const buildWhatsAppLink = (phone, customMessage) => {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(customMessage || SITE_CONFIG.brand.whatsappMessageDefault);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
};


import { Product, NavItem } from '@/core/utils/types';

export const PRODUCTS: Product[] = [
    // فئة: ورقيات
    {
        id: "1",
        name: "دفتر ملاحظات مخصص التصميم",
        category: "ورقيات",
        price: 75,
        description: "دفتر ملاحظات بتصميم مخصص حسب طلبك. الطباعة تُسعّر بشكل منفصل.",
        image: "/products/notebook-purple.png",
        rating: 5.0,
        reviews: 45,
        tags: ["ورقيات", "دفاتر", "تصميم مخصص"]
    },
    {
        id: "2",
        name: "آرت جورنال",
        category: "ورقيات",
        price: 120,
        description: "دفتر فني للرسم والكتابة الإبداعية، مثالي للفنانين والمبدعين.",
        image: "/products/notebook-box.png",
        rating: 5.0,
        reviews: 32,
        tags: ["ورقيات", "آرت جورنال", "فن"]
    },
    {
        id: "3",
        name: "قائمة المهام مخصصة التصميم",
        category: "ورقيات",
        price: 45,
        description: "قائمة مهام بتصميم مخصص لتنظيم يومك بأناقة.",
        image: "/products/gift-wrap-2.png",
        rating: 4.9,
        reviews: 28,
        tags: ["ورقيات", "قائمة مهام", "تنظيم"]
    },
    {
        id: "4",
        name: "فواصل الكتب مخصصة التصميم",
        category: "ورقيات",
        price: 25,
        description: "فواصل كتب بتصميم مخصص. متاح التغليف الحراري.",
        image: "/products/bookmark-carrot.png",
        rating: 5.0,
        reviews: 67,
        tags: ["ورقيات", "فواصل كتب", "قراءة"]
    },
    {
        id: "5",
        name: "ألبوم الذكريات",
        category: "ورقيات",
        price: 180,
        description: "ألبوم لحفظ أجمل ذكرياتك بتصميم فريد وأنيق.",
        image: "/products/gift-wrap-1.png",
        rating: 5.0,
        reviews: 41,
        tags: ["ورقيات", "ألبوم", "ذكريات"]
    },
    {
        id: "6",
        name: "ميدالية ورقية بالتغليف الحراري",
        category: "ورقيات",
        price: 35,
        description: "ميدالية ورقية مغلفة حرارياً لحماية دائمة وشكل أنيق.",
        image: "/products/bookmark-grape.png",
        rating: 4.8,
        reviews: 53,
        tags: ["ورقيات", "ميدالية", "تغليف حراري"]
    },

    // فئة: تابلوهات
    {
        id: "7",
        name: "تابلوه خشب مع طباعة (laser-cut)",
        category: "تابلوهات",
        price: 250,
        description: "تابلوه خشبي بقص ليزر دقيق مع طباعة عالية الجودة.",
        image: "/products/trunk-art-mosque.png",
        rating: 5.0,
        reviews: 38,
        tags: ["تابلوهات", "خشب", "ليزر"]
    },
    {
        id: "8",
        name: "تابلوه خشب مع المسامير (String Art)",
        category: "تابلوهات",
        price: 300,
        description: "تابلوه فني مصنوع بتقنية String Art على لوح خشبي.",
        image: "/products/trunk-art-flowers.png",
        rating: 5.0,
        reviews: 29,
        tags: ["تابلوهات", "خشب", "String Art"]
    },
    {
        id: "9",
        name: "تابلوه طباعة مع زجاج",
        category: "تابلوهات",
        price: 220,
        description: "تابلوه مطبوع مع إطار زجاجي. يمكن إضافة خرز أو ورود داخل الإطار.",
        image: "/products/embroidery-hoop.png",
        rating: 4.9,
        reviews: 44,
        tags: ["تابلوهات", "زجاج", "طباعة"]
    },

    // فئة: كانڤاس
    {
        id: "10",
        name: "كانڤاس تصميم مودرن",
        category: "كانڤاس",
        price: 200,
        description: "لوحة كانڤاس بتصميم عصري وأنيق لتزيين منزلك.",
        image: "/products/mandala-1.png",
        rating: 5.0,
        reviews: 56,
        tags: ["كانڤاس", "مودرن", "ديكور"]
    },
    {
        id: "11",
        name: "كانڤاس تطريز",
        category: "كانڤاس",
        price: 280,
        description: "لوحة كانڤاس مطرزة يدوياً بتصاميم فريدة.",
        image: "/products/embroidery-hoop.png",
        rating: 5.0,
        reviews: 34,
        tags: ["كانڤاس", "تطريز", "يدوي"]
    },
    {
        id: "12",
        name: "كانڤاس حبال وخيوط",
        category: "كانڤاس",
        price: 240,
        description: "لوحة كانڤاس مزينة بالحبال والخيوط بتصميم فني مميز.",
        image: "/products/decoration-wreath.png",
        rating: 4.9,
        reviews: 27,
        tags: ["كانڤاس", "حبال", "خيوط"]
    },
    {
        id: "13",
        name: "كانڤاس النصوص",
        category: "كانڤاس",
        price: 180,
        description: "لوحة كانڤاس بنصوص ملهمة أو اقتباسات مفضلة.",
        image: "/products/gift-wrap-3.png",
        rating: 5.0,
        reviews: 48,
        tags: ["كانڤاس", "نصوص", "اقتباسات"]
    },
    {
        id: "14",
        name: "كانڤاس الماندالا",
        category: "كانڤاس",
        price: 260,
        description: "لوحة كانڤاس برسومات ماندالا هادئة وجميلة.",
        image: "/products/mandala-2.png",
        rating: 5.0,
        reviews: 62,
        tags: ["كانڤاس", "ماندالا", "فن"]
    },
    {
        id: "15",
        name: "كانڤاس مجسم (Molding Paste)",
        category: "كانڤاس",
        price: 320,
        description: "لوحة كانڤاس بتأثيرات مجسمة باستخدام معجون التشكيل.",
        image: "/products/mandala-3.png",
        rating: 5.0,
        reviews: 25,
        tags: ["كانڤاس", "مجسم", "Molding Paste"]
    },

    // فئة: جذوع الخشب
    {
        id: "16",
        name: "رسم على جذوع الخشب",
        category: "جذوع الخشب",
        price: 180,
        description: "رسومات فنية فريدة على جذوع الخشب الطبيعية.",
        image: "/products/trunk-art-flowers.png",
        rating: 5.0,
        reviews: 39,
        tags: ["جذوع الخشب", "رسم", "طبيعي"]
    },

    // فئة: مرايات
    {
        id: "17",
        name: "مراية بالحبال والخيوط",
        category: "مرايات",
        price: 220,
        description: "مرآة مزينة بالحبال والخيوط بتصميم بوهيمي أنيق.",
        image: "/products/decoration-wreath.png",
        rating: 5.0,
        reviews: 31,
        tags: ["مرايات", "حبال", "بوهيمي"]
    },
    {
        id: "18",
        name: "مراية بالألوان",
        category: "مرايات",
        price: 200,
        description: "مرآة ملونة بتصميم فني مبهج وعصري.",
        image: "/products/mandala-1.png",
        rating: 4.9,
        reviews: 28,
        tags: ["مرايات", "ألوان", "فن"]
    },
    {
        id: "19",
        name: "مراية بالأصداف",
        category: "مرايات",
        price: 240,
        description: "مرآة مزينة بالأصداف الطبيعية بطابع بحري جميل.",
        image: "/products/gift-wrap-4.png",
        rating: 5.0,
        reviews: 22,
        tags: ["مرايات", "أصداف", "بحري"]
    },

    // فئة: ورد ستان
    {
        id: "20",
        name: "بوكيهات ورد ستان",
        category: "ورد ستان",
        price: 150,
        description: "باقات ورد ستان مصنوعة يدوياً بألوان متنوعة وجميلة.",
        image: "/products/decoration-wreath.png",
        rating: 5.0,
        reviews: 58,
        tags: ["ورد ستان", "بوكيهات", "يدوي"]
    },
    {
        id: "21",
        name: "مجسمات ورد ستان",
        category: "ورد ستان",
        price: 200,
        description: "مجسمات من ورد الستان: حروف، دبدوب، فراشة، وأشكال متنوعة.",
        image: "/products/gift-wrap-1.png",
        rating: 5.0,
        reviews: 43,
        tags: ["ورد ستان", "مجسمات", "حروف"]
    },

    // فئة: مجسمات متنوعة
    {
        id: "22",
        name: "مجسمات تعليمية",
        category: "مجسمات متنوعة",
        price: 120,
        description: "مجسمات تعليمية للأطفال والطلاب بتصاميم مفيدة وممتعة.",
        image: "/products/bookmark-cookie.png",
        rating: 5.0,
        reviews: 36,
        tags: ["مجسمات", "تعليمية", "أطفال"]
    },
    {
        id: "23",
        name: "إطار التصوير (Photo Frame/Booth)",
        category: "مجسمات متنوعة",
        price: 350,
        description: "إطار تصوير للمناسبات والحفلات بتصميم مخصص.",
        image: "/products/gift-wrap-3.png",
        rating: 5.0,
        reviews: 19,
        tags: ["مجسمات", "إطار تصوير", "مناسبات"]
    }
];

export const NAV_ITEMS: NavItem[] = [
    { label: "الرئيسية", path: "/", icon: "home" },
    { label: "المنتجات", path: "/products", icon: "grid_view" },
    { label: "من نحن", path: "/about", icon: "info" },
    { label: "تواصل معنا", path: "/contact", icon: "contact_mail" },
];

export interface HeroSlide {
    id: number;
    backgroundImage: string;
    backgroundType: 'image' | 'gradient';
    mainText: string[];
    mainTextHighlight?: number;
    subText: string;
}

export const HERO_SLIDES: HeroSlide[] = [
    {
        id: 1,
        backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR5zKLu7-1KNNJ9Ho086sqwCDsJQL1ZqRpUeUF6BVjTzRRS3MjpJKXY_Fu4iuhJdkDuT81gdFZSnf5hG6Ujoyx4WrvaLxClErxQmdzGjWevhGynKmqWRHpTc5Cpg_yMTAdZ1y7mFe3fYLOdQrcXNjJPv6MsJm1HvZ20-phfuPxPl9yGH6uNlSW3cmaCiCgpfpE9pXp7QI2YH7BJqocK4ILZcm5uuDzn2dnkIA8gAsAYZU6KmEVP4VsZ_fxZHNfTHjfXmzbWflFo0OM",
        backgroundType: 'image',
        mainText: ["استكشف", "كنوزنا اليدوية", "بلمسة القندس"],
        mainTextHighlight: 1,
        subText: "ادعم الحرفيين المحليين وأضف جمالاً فريداً مصنوعاً بحب. نحن هنا لنجمع لك أفضل ما تنتجه الأيدي المبدعة."
    },
    {
        id: 2,
        backgroundImage: "linear-gradient(135deg, #4A3B32 0%, #D47754 50%, #3C8D89 100%)",
        backgroundType: 'gradient',
        mainText: ["Handmade", "Engineering!"],
        mainTextHighlight: 0,
        subText: "أفضل الهدايا اليدوية على الإطلاق! دع قنادس تصنع لك هديتك المميزة!"
    }
];

export const MASCOT_URL = "/beavers/Image.png";

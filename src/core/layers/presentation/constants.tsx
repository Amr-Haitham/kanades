
import { Product, NavItem } from '@/core/utils/types';

export const PRODUCTS: Product[] = [
    // فئة: الميداليات
    {
        id: "1",
        name: "ميدالية معدنية",
        category: "medals",
        price: 150,
        description: "ميدالية معدنية بتصميم مخصص حسب الطلب، مثالية للمناسبات الرياضية والتكريم.",
        image: "/products/mandala-1.png",
        rating: 4.9,
        reviews: 85,
        tags: ["ميداليات", "معدن", "تصميم مخصص"]
    },
    {
        id: "2",
        name: "ميدالية بلاستيكية",
        category: "medals",
        price: 50,
        description: "ميدالية بلاستيكية عالية الجودة بتصميم مخصص، خفيفة الوزن ومناسبة للأطفال.",
        image: "/products/mandala-2.png",
        rating: 4.7,
        reviews: 120,
        tags: ["ميداليات", "بلاستيك", "تصميم مخصص"]
    },
    {
        id: "3",
        name: "ميدالية قماشية",
        category: "medals",
        price: 75,
        description: "ميدالية قماشية مطرزة بتصميم فريد، ناعمة الملمس ومريحة للارتداء.",
        image: "/products/mandala-3.png",
        rating: 4.8,
        reviews: 95,
        tags: ["ميداليات", "قماش", "تطريز"]
    },

    // فئة: الزينة والهدايا
    {
        id: "4",
        name: "تغليف هدايا راقٍ",
        category: "decoration-gifts",
        price: 80,
        description: "تغليف هدايا راقٍ ومميز باستخدام أجود الخامات، يضفي لمسة أنيقة على هداياك.",
        image: "/products/gift-wrap-1.png",
        rating: 4.9,
        reviews: 150,
        tags: ["تغليف", "هدايا", "أناقة"]
    },
    {
        id: "5",
        name: "باقة ورود صناعية مصنوعة يدويًا",
        category: "decoration-gifts",
        price: 120,
        description: "باقة ورود صناعية مصنوعة يدويًا بعناية فائقة، تدوم طويلاً وتضفي جمالاً دائماً.",
        image: "/products/decoration-wreath.png",
        rating: 5.0,
        reviews: 78,
        tags: ["ورود", "صناعي", "يدوي"]
    },

    // فئة: فنون الرسم
    {
        id: "6",
        name: "الرسم على الجذوع الخشبية",
        category: "painting-arts",
        price: 250,
        description: "رسومات فنية فريدة على الجذوع الخشبية الطبيعية، تضيف لمسة طبيعية وفنية لمنزلك.",
        image: "/products/trunk-art-mosque.png",
        rating: 4.9,
        reviews: 62,
        tags: ["رسم", "خشب", "فن"]
    },
    {
        id: "7",
        name: "تصاميم طباعة على التيشيرتات",
        category: "painting-arts",
        price: 100,
        description: "تصاميم طباعة مخصصة على التيشيرتات بجودة عالية وألوان ثابتة، عبّر عن شخصيتك.",
        image: "/products/tshirt-tiger.png",
        rating: 4.8,
        reviews: 145,
        tags: ["طباعة", "تيشيرت", "تصميم مخصص"]
    },

    // فئة: الورقيات
    {
        id: "8",
        name: "دفتر ملاحظات بتصميم مخصص",
        category: "paperwork",
        price: 60,
        description: "دفتر ملاحظات بتصميم مخصص حسب الطلب، مثالي للهدايا الشخصية والاستخدام اليومي.",
        image: "/products/notebook-purple.png",
        rating: 4.7,
        reviews: 110,
        tags: ["ورقيات", "دفاتر", "تصميم مخصص"]
    },
    {
        id: "9",
        name: "ملاحظات لاصقة",
        category: "paperwork",
        price: 25,
        description: "ملاحظات لاصقة بتصاميم جذابة وألوان متعددة، مثالية للتنظيم والتذكير.",
        image: "/products/gift-wrap-2.png",
        rating: 4.6,
        reviews: 200,
        tags: ["ورقيات", "ملاحظات لاصقة", "تنظيم"]
    },
    {
        id: "10",
        name: "ملصقات",
        category: "paperwork",
        price: 30,
        description: "ملصقات مطبوعة بتصاميم مبتكرة وجذابة، أضف لمسة شخصية لأغراضك.",
        image: "/products/bookmark-carrot.png",
        rating: 4.8,
        reviews: 180,
        tags: ["ورقيات", "ملصقات", "تصميم"]
    },
    {
        id: "11",
        name: "فواصل كتب",
        category: "paperwork",
        price: 20,
        description: "فواصل كتب أنيقة بتصاميم متنوعة، رفيق مثالي لمحبي القراءة.",
        image: "/products/bookmark-grape.png",
        rating: 4.9,
        reviews: 155,
        tags: ["ورقيات", "فواصل كتب", "قراءة"]
    },
    {
        id: "12",
        name: "كروت مناسبات",
        category: "paperwork",
        price: 15,
        description: "كروت تهنئة مخصصة لجميع المناسبات: مولود جديد، تخرج، زواج، وأي مناسبة خاصة. تصاميم راقية تعبر عن أجمل المشاعر.",
        image: "/products/gift-wrap-3.png",
        rating: 4.9,
        reviews: 420,
        tags: ["كروت", "مناسبات", "تهنئة", "مولود", "تخرج", "زواج"]
    },

    // فئة: التابلوهات
    {
        id: "13",
        name: "تابلوه خشبي مع المسامير (String Art)",
        category: "tableaux",
        price: 300,
        description: "تابلوه فني مصنوع بتقنية String Art على لوح خشبي، قطعة فنية فريدة لتزيين منزلك.",
        image: "/products/trunk-art-flowers.png",
        rating: 5.0,
        reviews: 70,
        tags: ["تابلوه", "خشب", "String Art"]
    },
    {
        id: "14",
        name: "تابلوه خشبي مع طباعة",
        category: "tableaux",
        price: 200,
        description: "تابلوه خشبي مطبوع بتصميم عالي الجودة، يضيف لمسة عصرية وأنيقة لديكور منزلك.",
        image: "/products/embroidery-hoop.png",
        rating: 4.9,
        reviews: 85,
        tags: ["تابلوه", "خشب", "طباعة"]
    }
];

export const NAV_ITEMS: NavItem[] = [
    { label: "الرئيسية", path: "/", icon: "home" },
    { label: "المنتجات", path: "/products", icon: "grid_view" },
    { label: "المجموعات", path: "/categories", icon: "category" },
];

export const MASCOT_URL = "/beavers/Image.png";

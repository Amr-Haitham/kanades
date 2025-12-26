
import { Product, NavItem } from '@/core/utils/types';

export const PRODUCTS: Product[] = [
    {
        id: "1",
        name: "لوحة الماندالا الذهبية",
        category: "mandala",
        price: 200,
        description: "لوحة فنية فريدة تجمع بين ألوان الطبيعة الدافئة والتفاصيل الدقيقة لفن الماندالا. مصنوعة يدوياً بحب.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqzIg7j4WDEIAr5GGaC9mbskMA8HPSjBrBW9fkP86ULot9nYcvUMYyUfip9ankLqOYAhnrRwooXW6f3hyDO-UPR1L-mJ9cr7coD0ZlxvuMwlXp8FgzvEnEp_gTv4MRjbCfuDKp2wiWmSU8wOKjBFXRpbDz1fVOBwispLEDAYUQ2yK9xcBeIq2MtUjBokSJPDS1Es2xJnAdFnlnqI2X2c3Qfb9kjM5upMHXlzr3jnUsQqxkh8uCKBj4yAhNgF5D52yYaBPRhEVC_Nh9",
        rating: 5.0,
        reviews: 900,
        tags: ["فنون الماندالا", "يدوي"]
    },
    {
        id: "2",
        name: "تغليف هدايا راقي",
        category: "gift-wrap",
        price: 75,
        description: "تغليف هدايا يدوي يعطي طابعاً خاصاً ومميزاً لكل مناسبة، نستخدم أجود أنواع الورق والخيوط الطبيعية.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6PnoHAhEduKMw58YpB9J3gAceX6O05XGr1WnHnKP2OBh6QdQqMycKoGb7hOjRBKGzVBSIiC7qCttiSI_Of9HRqJv2Bbe4k6Z_va4L2-_z2XCg1IQ3fMjEHSOIpPoTYI1c-pmxwImFoYABjLT8ZbeXnqkCF0MgGlP-pHeyb955f2zyn9WBMEm4u5X0l6JM7bqAugnrOkgIwWXRhMquJlSKRFLd4DUDKExZoJ06eORfW3WxPSOFuzV7jZCPwC1uz_UqhcitIvaVPtAq",
        rating: 4.8,
        reviews: 120,
        tags: ["تغليف", "هدايا"]
    },
    {
        id: "3",
        name: "فنون الألواح الخشبية",
        category: "wood",
        price: 350,
        description: "قطع ديكور خشبية منحوتة بعناية لتضفي لمسة ريفية دافئة على منزلك.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDuBcGl_3N658FenNQG47_DP_N8EGPSnHbAjD5-p8fRYltybVLRh2WSxi3MMUmLksp-DrQTTzq7eBQ29sPAatA7cQB9l-Igqx-7lLTPL6WYphdH09kOAsu5IPDClgNTZTRBz5ANYVdqQmYDbmBlvJ34izNkZFzWKlyG_CB5_2iQM0-LBVsOQu2gOIdly7xI11JrccYZtuClHHacoOG_BVRcEsKJT_qCnjF0_vFsCxippk50Zuwk2Ev2FBAHDsz_JXN-OHdZElaSMra",
        rating: 4.9,
        reviews: 45,
        tags: ["خشب", "ديكور"]
    },
    {
        id: "4",
        name: "زي الجزة للأطفال",
        category: "costumes",
        price: 250,
        description: "أزياء تنكرية للأطفال مصنوعة من خامات ناعمة ومريحة للعب والمرح.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmfNW4Vv2w77kqR03-jZXWeLZNU_rli5Pz8FdwCRrJNzDNwnKlfjemLsmyKOTfrYRjDh_8S3IYO9UkkxQH0LuHxVyyrLN_J4he71KW8nJCs07C3d1x7xuXzo86bmQR5qHRvu8R9umcW1KSbLr9uWaBGsd3NTYXfI_5q-Fr0_mE8bMPUGiccCymCyT-toCuwfmafmUrpYSdPP-cryFhlYl_g3Y7YxpvObsMELLVN90mHJH-guKcUFMjthyhjiR7SElc-FMpGlc2YD9O",
        rating: 4.7,
        reviews: 88,
        tags: ["أطفال", "تنكري"]
    }
];

export const NAV_ITEMS: NavItem[] = [
    { label: "الرئيسية", path: "/", icon: "home" },
    { label: "المنتجات", path: "/products", icon: "grid_view" },
    { label: "المجموعات", path: "/categories", icon: "category" },
    { label: "من نحن", path: "/about", icon: "info" },
];

export const MASCOT_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuDtGFBKnypYBoMr1uclSHxtRYqE6QjOnHbtRwzZaJFH52vzQ1oYt_zF0b8AnPQwuMfu4SsLs5uzXXUZPEBRcK6eLBlXizpAnRkOtSfyFdZ89wAPF5wyeZzMzjlPZIPIgjleDiH5Fqn8Xq71OaZkRxmuetPF4CQAPWoSXM44_49CCU4T9IpoasHju4FmaDpxfGlShXWhvYyGmKj8ru3V4WZvSy3NwimR1dQZ8WGpJUykbB-szylCJTM6uQ818Oqug_aOIo9yH_2Q5ZDu";

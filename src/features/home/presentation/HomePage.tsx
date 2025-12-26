
import React from 'react';
import { Product } from '@/core/utils/types';
import { PRODUCTS } from '@/core/layers/presentation/constants';
import ProductCard from '@/core/layers/presentation/components/ProductCard';

interface HomePageProps {
    onAddToCart: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onAddToCart }) => {
    return (
        <div className="space-y-20 pb-20" dir="rtl">
            {/* Hero */}
            <section className="relative h-[80vh] flex items-center overflow-hidden bg-accent-brown">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR5zKLu7-1KNNJ9Ho086sqwCDsJQL1ZqRpUeUF6BVjTzRRS3MjpJKXY_Fu4iuhJdkDuT81gdFZSnf5hG6Ujoyx4WrvaLxClErxQmdzGjWevhGynKmqWRHpTc5Cpg_yMTAdZ1y7mFe3fYLOdQrcXNjJPv6MsJm1HvZ20-phfuPxPl9yGH6uNlSW3cmaCiCgpfpE9pXp7QI2YH7BJqocK4ILZcm5uuDzn2dnkIA8gAsAYZU6KmEVP4VsZ_fxZHNfTHjfXmzbWflFo0OM"
                        className="w-full h-full object-cover opacity-30"
                        alt="Hero Background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-accent-brown via-transparent to-transparent"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-right">
                    <div className="max-w-2xl mr-auto space-y-6">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                            استكشف <br />
                            <span className="text-primary">كنوز يدوية أصيلة</span> <br />
                            مميزة
                        </h1>
                        <p className="text-lg text-gray-200 leading-relaxed">
                            ادعم الحرفيين المحليين وأضف جمالاً فريداً مصنوعاً بحب إلى حياتك. من فن الماندالا المعقد إلى التصاميم المخصصة والتطريز التقليدي.
                        </p>
                        <div className="flex gap-4 pt-4 justify-start">
                            <button className="bg-primary hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition shadow-lg transform hover:scale-105 flex items-center gap-2">
                                تسوق الآن
                                <span className="material-icons-round">arrow_back</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div className="text-right">
                        <h2 className="text-3xl font-bold text-accent-brown dark:text-white mb-2">إبداعات مميزة</h2>
                        <p className="text-gray-500 dark:text-gray-400">تحف منتقاة من مجتمعنا الموهوب من الحرفيين</p>
                    </div>
                    <button className="text-primary font-bold hover:underline flex items-center gap-1">
                        <span className="material-icons-round text-sm">arrow_back</span>
                        عرض الكل
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PRODUCTS.map(product => (
                        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section className="bg-secondary/10 py-20">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="rounded-[40px] overflow-hidden aspect-video shadow-2xl">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyHB_wlOOOxr-NjMkj23VU49Zh2pottA8KHHwRxi9Btzs93VyhOsv3DFmGAMu0f6sXFZVo7EwVPTsghikGjoYZVt6bKM4gat7meKDp04jGb4x9vUvtkeIyXJwq5P8H8t_feYTZmVbUGsu8XJmGQmy4YRm1G9Z0TsipiYW9KKrSA3nmYvJKeOwFOkBj6uIDkKur_swbPgkc_mP8XAwNWKiSk0DkawV4c22g2amjuOYmGc9IQ0jrqru6DzYKIqhtrpRJRYJwwaqyGzhS"
                                alt="Crafting"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-white dark:bg-zinc-800 p-8 rounded-3xl shadow-xl max-w-xs hidden md:block border border-gray-100 dark:border-zinc-700 text-right">
                            <div className="flex items-center gap-4 mb-4 justify-end">
                                <h4 className="font-bold">جودة مضمونة</h4>
                                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                                    <span className="material-icons-round">verified</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500">نضمن لك أفضل الخامات المصنوعة يدوياً بكل إتقان.</p>
                        </div>
                    </div>
                    <div className="space-y-6 text-right">
                        <h2 className="text-4xl font-bold text-accent-brown dark:text-white">من نحن؟</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            فنانون متخصصون في صناعة المنتجات اليدوية الفريدة والإبداعية. نؤمن بأن الحرف اليدوية ليست مجرد منتجات، بل هي تعبير عن الهوية والإبداع.
                        </p>
                        <div className="grid grid-cols-2 gap-6 pt-6">
                            <div className="p-6 bg-white dark:bg-zinc-800 rounded-3xl shadow-sm">
                                <div className="text-3xl font-bold text-primary mb-1">+10</div>
                                <div className="text-sm text-gray-400">سنوات الخبرة</div>
                            </div>
                            <div className="p-6 bg-white dark:bg-zinc-800 rounded-3xl shadow-sm">
                                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                                <div className="text-sm text-gray-400">صناعة يدوية</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;

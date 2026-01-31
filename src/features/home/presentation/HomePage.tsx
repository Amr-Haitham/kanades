'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/core/utils/types';
import { PRODUCTS } from '@/core/layers/presentation/constants';
import ProductCard from '@/core/layers/presentation/components/ProductCard';
import HeroSlider from './components/HeroSlider';

interface HomePageProps {
    onAddToCart: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onAddToCart }) => {
    return (
        <div className="space-y-20 pb-20 pt-10" dir="rtl">
            {/* Hero Slider */}
            <HeroSlider />

            {/* Featured Products */}
            <section className="container mx-auto px-4 relative">
                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="relative inline-block mb-4">
                        {/* Peeking Beaver */}
                        <div className="absolute -top-[20px] left-1/2 -translate-x-1/2 w-28 h-28 z-10 pointer-events-none">
                            <img src="/beavers/Image-3.png" alt="Peeking beaver" className="w-full h-auto drop-shadow-md" />
                        </div>

                        {/* Pill Box Title */}
                        <div className="bg-[#F9E6E2] dark:bg-zinc-800/80 px-12 py-4 rounded-[32px] shadow-sm border border-white/20 relative z-0 mt-8">
                            <h2 className="text-3xl md:text-4xl font-black flex items-center gap-2">
                                <span className="text-accent-brown dark:text-primary">إبداعات</span>
                                <span className="text-primary dark:text-white">مميزة</span>
                            </h2>
                        </div>

                        {/* Side Illustrations */}
                        <div className="absolute -right-32 top-0 w-32 hidden lg:block">
                            <img src="/beavers/Image-9.png" alt="Crafting beaver" className="w-full h-auto" />
                        </div>
                        <div className="absolute -left-32 top-0 w-32 hidden lg:block">
                            <img src="/beavers/Image-13.png" alt="Artist beaver" className="w-full h-auto scale-x-[-1]" />
                        </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">تحف منتقاة من مجتمعنا الموهوب من الحرفيين المبدعين</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-0">
                    {PRODUCTS.slice(0, 4).map(product => (
                        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <Link href="/products" className="text-primary font-bold hover:underline flex items-center gap-1 group">
                        <span className="material-icons-round text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        عرض كل المنتجات المميزة
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-white dark:bg-zinc-900 py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
                        <div className="text-right flex-1">
                            <div className="relative inline-block mb-6">
                                {/* Peeking Beaver */}
                                <div className="absolute -top-[20px] left-1/2 -translate-x-1/2 w-28 h-28 z-10 pointer-events-none">
                                    <img src="/beavers/Image-3.png" alt="Peeking beaver" className="w-full h-auto drop-shadow-md" />
                                </div>
                                <div className="bg-[#F9E6E2] dark:bg-zinc-800/80 px-12 py-4 rounded-[40px] shadow-sm border border-white/20 relative z-0 mt-8">
                                    <h2 className="text-4xl font-black"><span className="text-accent-brown dark:text-primary">من</span> <span className="text-primary dark:text-white">نحن</span></h2>
                                </div>

                                {/* Side Beavers */}
                                <div className="absolute -right-32 top-0 w-32 hidden lg:block">
                                    <img src="/beavers/Image-6.png" alt="" className="w-full h-auto" />
                                </div>
                                <div className="absolute -left-32 top-0 w-32 hidden lg:block">
                                    <img src="/beavers/Image-11.png" alt="" className="w-full h-auto scale-x-[-1]" />
                                </div>
                            </div>
                            <h3 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-bold leading-relaxed pr-4">فنان متخصص في صناعة المنتجات اليدوية الفريدة والإبداعية</h3>

                            {/* Learn More Button */}
                            <div className="mt-8">
                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105"
                                >
                                    <span>اعرف المزيد عن قنادس</span>
                                    <span className="material-icons-round">arrow_back</span>
                                </Link>
                            </div>
                        </div>

                        <div className="flex-1 w-full max-w-xl">
                            <img src="/beavers/Image.png" alt="Beaver Team" className="w-full h-auto drop-shadow-2xl animate-float" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Qanades at Your Service Section */}
            <section className="bg-[#FFF9F6] dark:bg-zinc-950 py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <div className="relative inline-block mb-4">
                            {/* Peeking Beaver */}
                            <div className="absolute -top-[20px] left-1/2 -translate-x-1/2 w-28 h-28 z-10 pointer-events-none">
                                <img src="/beavers/Image-3.png" alt="Service beaver" className="w-full h-auto drop-shadow-sm" />
                            </div>

                            {/* Pill Box Title */}
                            <div className="bg-[#F9E6E2] dark:bg-zinc-800/80 px-12 py-4 rounded-[40px] shadow-sm border border-white/20 relative z-0 mt-8">
                                <h2 className="text-3xl md:text-4xl font-black">
                                    <span className="text-accent-brown dark:text-primary">قنادس</span> <span className="text-primary dark:text-white">في خدمتك</span>
                                </h2>
                            </div>

                            {/* Side Illustrations */}
                            <div className="absolute -right-32 top-0 w-32 hidden lg:block">
                                <img src="/beavers/Image-10.png" alt="" className="w-full h-auto" />
                            </div>
                            <div className="absolute -left-32 top-0 w-32 hidden lg:block">
                                <img src="/beavers/Image-2.png" alt="" className="w-full h-auto scale-x-[-1]" />
                            </div>
                        </div>
                        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-lg mx-auto font-medium">نحرص على تقديم أفضل تجربة لعملائنا الكرام</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {/* High Quality */}
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-[40px] shadow-xl border border-gray-100 dark:border-zinc-700 text-center space-y-4 hover:translate-y-[-10px] transition-all duration-300">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                                <span className="material-icons-round text-3xl">verified</span>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-black text-accent-brown dark:text-white">جودة عالية</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">أستخدم أجود الخامات وأفضل التقنيات لضمان منتجات بأعلى معايير الجودة</p>
                            </div>
                        </div>

                        {/* Unique Designs Made with Love */}
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-[40px] shadow-xl border border-gray-100 dark:border-zinc-700 text-center space-y-4 hover:translate-y-[-10px] transition-all duration-300">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                                <span className="material-icons-round text-3xl">favorite</span>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-black text-accent-brown dark:text-white">تصاميم فريدة صُنعت بحب</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">كل قطعة أصنعها بيدي تحمل روحي وقصة فريدة من الإبداع والإتقان</p>
                            </div>
                        </div>

                        {/* Happy Customers */}
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-[40px] shadow-xl border border-gray-100 dark:border-zinc-700 text-center space-y-4 hover:translate-y-[-10px] transition-all duration-300">
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto text-secondary">
                                <span className="material-icons-round text-3xl">groups</span>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-black text-accent-brown dark:text-white">+100 عميل سعيد</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">نفتخر بثقة عملائنا ورضاهم عن منتجاتنا وخدماتنا المميزة</p>
                            </div>
                        </div>

                        {/* Delivery Anywhere in Egypt */}
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-[40px] shadow-xl border border-gray-100 dark:border-zinc-700 text-center space-y-4 hover:translate-y-[-10px] transition-all duration-300">
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto text-secondary">
                                <span className="material-icons-round text-3xl">local_shipping</span>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-black text-accent-brown dark:text-white">توصيل لأي مكان في مصر</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">نوصل منتجاتنا اليدوية إلى باب منزلك في أي مكان بمصر</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;

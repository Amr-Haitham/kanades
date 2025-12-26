'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Product } from '@/core/utils/types';
import { PRODUCTS } from '@/core/layers/presentation/constants';
import ProductCard from '@/core/layers/presentation/components/ProductCard';

interface HomePageProps {
    onAddToCart: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onAddToCart }) => {
    const { scrollY } = useScroll();
    const beaverY = useTransform(scrollY, [0, 500], [0, 150]);
    const beaverRotate = useTransform(scrollY, [0, 500], [0, 10]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            }
        }
    };

    const headingVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, 0.05, 0.01, 0.9] as const
            }
        }
    };

    const slideInVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, 0.05, 0.01, 0.9] as const
            }
        }
    };

    return (
        <div className="space-y-20 pb-20 pt-10" dir="rtl">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden bg-accent-brown rounded-[40px] mx-4 shadow-2xl"
            >
                {/* Animated Background Gradient */}
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-l from-accent-brown via-accent-brown/20 to-transparent"
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                </motion.div>

                <div className="absolute inset-0 z-0 text-right">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.3 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR5zKLu7-1KNNJ9Ho086sqwCDsJQL1ZqRpUeUF6BVjTzRRS3MjpJKXY_Fu4iuhJdkDuT81gdFZSnf5hG6Ujoyx4WrvaLxClErxQmdzGjWevhGynKmqWRHpTc5Cpg_yMTAdZ1y7mFe3fYLOdQrcXNjJPv6MsJm1HvZ20-phfuPxPl9yGH6uNlSW3cmaCiCgpfpE9pXp7QI2YH7BJqocK4ILZcm5uuDzn2dnkIA8gAsAYZU6KmEVP4VsZ_fxZHNfTHjfXmzbWflFo0OM"
                        className="w-full h-full object-cover"
                        alt="Hero Background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-accent-brown via-accent-brown/20 to-transparent"></div>

                    {/* Decorative Beaver Team with Parallax */}
                    <motion.div
                        style={{ y: beaverY, rotate: beaverRotate }}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1.2,
                            delay: 0.3,
                            ease: [0.6, 0.05, 0.01, 0.9]
                        }}
                        whileHover={{ scale: 1.05, rotate: -5 }}
                        className="absolute top-1/2 left-8 md:left-20 -translate-y-1/2 w-[220px] md:w-[380px] z-10 pointer-events-none"
                    >
                        <img src="/beavers/Image.png" alt="Beaver team" className="w-full h-auto drop-shadow-2xl" />
                    </motion.div>
                </div>

                <div className="container mx-auto px-4 md:px-12 relative z-10 text-right">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-xl md:max-w-2xl ml-auto space-y-4 md:space-y-6"
                    >
                        <motion.h1
                            variants={headingVariants}
                            className="text-4xl md:text-7xl font-black text-white leading-tight"
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                استكشف
                            </motion.span>
                            <br />
                            <motion.span
                                className="text-primary"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                whileHover={{
                                    scale: 1.05,
                                    textShadow: "0 0 20px rgba(255, 138, 0, 0.5)"
                                }}
                            >
                                كنوزنا اليدوية
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                بلمسة القندس
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            variants={slideInVariants}
                            className="text-sm md:text-lg text-gray-200 leading-relaxed max-w-lg ml-auto"
                        >
                            ادعم الحرفيين المحليين وأضف جمالاً فريداً مصنوعاً بحب. نحن هنا لنجمع لك أفضل ما تنتجه الأيدي المبدعة.
                        </motion.p>


                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.8,
                                ease: [0.6, 0.05, 0.01, 0.9] as const
                            }}
                            className="flex justify-end pt-4"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link
                                    href="/products"
                                    className="bg-primary hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-full shadow-lg flex items-center gap-2 text-lg relative overflow-hidden group"
                                >
                                    <motion.span
                                        className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <span className="relative z-10">تسوق الآن</span>
                                    <motion.span
                                        className="material-icons-round relative z-10"
                                        animate={{ x: [0, -5, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        arrow_back
                                    </motion.span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Featured Products */}
            <section className="container mx-auto px-4 relative">
                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="relative inline-block mb-4">
                        {/* Standardized Peeking Beaver (Holding the title) */}
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
                    {PRODUCTS.map(product => (
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
                                {/* Standardized Peeking Beaver (Holding the title) */}
                                <div className="absolute -top-[20px] left-1/2 -translate-x-1/2 w-28 h-28 z-10 pointer-events-none">
                                    <img src="/beavers/Image-3.png" alt="Peeking beaver" className="w-full h-auto drop-shadow-md" />
                                </div>
                                <div className="bg-[#F9E6E2] dark:bg-zinc-800/80 px-12 py-4 rounded-[40px] shadow-sm border border-white/20 relative z-0 mt-8">
                                    <h2 className="text-4xl font-black"><span className="text-accent-brown dark:text-primary">من</span> <span className="text-primary dark:text-white">نحن</span></h2>
                                </div>

                                {/* Side Sidebeavers */}
                                <div className="absolute -right-32 top-0 w-32 hidden lg:block">
                                    <img src="/beavers/Image-6.png" alt="" className="w-full h-auto" />
                                </div>
                                <div className="absolute -left-32 top-0 w-32 hidden lg:block">
                                    <img src="/beavers/Image-11.png" alt="" className="w-full h-auto scale-x-[-1]" />
                                </div>
                            </div>
                            <h3 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-bold leading-relaxed pr-4">فنان متخصص في صناعة المنتجات اليدوية الفريدة والإبداعية</h3>
                        </div>

                        <div className="flex-1 w-full max-w-xl">
                            <img src="/beavers/Image.png" alt="Beaver Team" className="w-full h-auto drop-shadow-2xl animate-float" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-zinc-800 p-10 rounded-[40px] shadow-xl border border-gray-100 dark:border-zinc-700 text-center space-y-6 hover:translate-y-[-10px] transition-all duration-300">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                                <span className="material-icons-round text-4xl">verified</span>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black text-accent-brown dark:text-white">جودة عالية</h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">أستخدم أجود الخامات وأفضل التقنيات لضمان منتجات بأعلى معايير الجودة</p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-zinc-800 p-10 rounded-[40px] shadow-xl border border-gray-100 dark:border-zinc-700 text-center space-y-6 hover:translate-y-[-10px] transition-all duration-300">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                                <span className="material-icons-round text-4xl">diamond</span>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black text-accent-brown dark:text-white">تصاميم فريدة</h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">أبتكر تصاميم خاصة ومميزة لكل منتج لضمان حصولك على قطعة فنية لا تتكرر</p>
                            </div>
                        </div>

                        <div className="relative bg-white dark:bg-zinc-800 p-10 rounded-[40px] shadow-xl border border-gray-100 dark:border-zinc-700 text-center space-y-6 hover:translate-y-[-10px] transition-all duration-300">
                            <div className="absolute -top-12 -left-4 w-24 h-24 -rotate-12 z-20 pointer-events-none">
                                <img src="/beavers/Image-7.png" alt="Passion beaver" className="w-full h-auto drop-shadow-md" />
                            </div>
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                                <span className="material-icons-round text-4xl">favorite</span>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black text-accent-brown dark:text-white">شغف الحرفة</h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">كل قطعة أصنعها بيدي تحمل روحي وقصة فريدة من الإبداع والإتقان</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Delivery & Pickup Section */}
            <section className="bg-[#FFF9F6] dark:bg-zinc-950 py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-48 opacity-20 pointer-events-none -translate-x-10 -translate-y-10 group">
                    <img src="/beavers/Image-13.png" alt="" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="absolute top-0 right-0 w-48 opacity-20 pointer-events-none translate-x-10 -translate-y-10 group">
                    <img src="/beavers/Image-8.png" alt="" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <div className="relative inline-block mb-4">
                            {/* Standardized Peeking Beaver (Holding the title) */}
                            <div className="absolute -top-[20px] left-1/2 -translate-x-1/2 w-28 h-28 z-10 pointer-events-none">
                                <img src="/beavers/Image-3.png" alt="Delivery beaver" className="w-full h-auto drop-shadow-sm" />
                            </div>

                            {/* Pill Box Title */}
                            <div className="bg-[#F9E6E2] dark:bg-zinc-800/80 px-12 py-4 rounded-[40px] shadow-sm border border-white/20 relative z-0 mt-8">
                                <h2 className="text-3xl md:text-4xl font-black">
                                    <span className="text-accent-brown dark:text-primary">خيارات</span> <span className="text-primary dark:text-white">الاستلام و التوصيل</span>
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
                        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-lg mx-auto font-medium">اختر الطريقة الأكثر ملاءمة لاستلام كنوزك المصنوعة يدوياً</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        <div className="relative group">
                            <div className="absolute -top-12 -right-4 w-24 h-24 z-20 pointer-events-none group-hover:scale-110 transition-transform duration-300">
                                <img src="/beavers/Image-6.png" alt="Delivery" className="w-full h-auto drop-shadow-md" />
                            </div>
                            <div className="bg-white dark:bg-zinc-800 p-10 rounded-[40px] shadow-xl border border-gray-100 dark:border-zinc-700 text-right flex flex-col items-end gap-4 hover:shadow-2xl transition-shadow duration-500">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <span className="material-icons-round text-3xl">local_shipping</span>
                                </div>
                                <h3 className="text-2xl font-black text-accent-brown dark:text-white">توصيل منزلي</h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">نوصل كنوزك المصنوعة يدوياً مباشرة إلى عتبة بابك بكل عناية واهتمام.</p>
                                <div className="pt-4 mt-auto w-full border-t border-gray-50 dark:border-zinc-700">
                                    <span className="text-sm font-bold text-primary italic">2-5 أيام عمل</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -top-12 -left-4 w-24 h-24 z-20 pointer-events-none group-hover:scale-110 transition-transform duration-300">
                                <img src="/beavers/Image-10.png" alt="Pickup" className="w-full h-auto drop-shadow-md" />
                            </div>
                            <div className="bg-white dark:bg-zinc-800 p-10 rounded-[40px] shadow-xl border border-gray-100 dark:border-zinc-700 text-right flex flex-col items-end gap-4 hover:shadow-2xl transition-shadow duration-500">
                                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                                    <span className="material-icons-round text-3xl">storefront</span>
                                </div>
                                <h3 className="text-2xl font-black text-accent-brown dark:text-white">استلام محلي</h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">قم بزيارة ورشتنا واستلم طلبك شخصياً. احصل على نظرة من وراء الكواليس حيث يحدث السحر!</p>
                                <div className="pt-4 mt-auto w-full border-t border-gray-50 dark:border-zinc-700">
                                    <span className="text-sm font-bold text-secondary italic">متاح في نفس اليوم</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;

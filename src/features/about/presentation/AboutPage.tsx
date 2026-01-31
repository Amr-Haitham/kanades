'use client';

import React from 'react';
import Link from 'next/link';

const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen" dir="rtl">
            {/* Hero Section with Styled Title */}
            <section className="bg-gradient-to-b from-[#FFF9F6] to-white dark:from-zinc-900 dark:to-zinc-950 py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center text-center">
                        <div className="relative inline-block mb-4">
                            {/* Peeking Beaver */}
                            <div className="absolute -top-[20px] left-1/2 -translate-x-1/2 w-28 h-28 z-10 pointer-events-none">
                                <img src="/beavers/Image-3.png" alt="Peeking beaver" className="w-full h-auto drop-shadow-md" />
                            </div>

                            {/* Pill Box Title */}
                            <div className="bg-[#F9E6E2] dark:bg-zinc-800/80 px-14 py-5 rounded-[40px] shadow-sm border border-white/20 relative z-0 mt-8">
                                <h1 className="text-4xl md:text-5xl font-black text-primary">
                                    من نحن
                                </h1>
                            </div>

                            {/* Side Illustrations */}
                            <div className="absolute -right-36 top-0 w-32 hidden lg:block">
                                <img src="/beavers/Image-6.png" alt="Beaver" className="w-full h-auto" />
                            </div>
                            <div className="absolute -left-36 top-0 w-32 hidden lg:block">
                                <img src="/beavers/Image-11.png" alt="Beaver" className="w-full h-auto scale-x-[-1]" />
                            </div>
                        </div>
                        <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-2xl text-lg">تعرف على قصتنا ورحلتنا في عالم الحرف اليدوية</p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white dark:bg-zinc-900">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                        <div className="flex-1">
                            <img src="/beavers/Image.png" alt="Qanades Team" className="w-full max-w-md mx-auto drop-shadow-2xl" />
                        </div>
                        <div className="flex-1 text-right space-y-6">
                            <h2 className="text-3xl font-black text-accent-brown dark:text-white">
                                <span className="text-primary">قصتنا</span> مع الإبداع
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                قنادس هي رحلة شغف بدأت من حب الحرف اليدوية والإبداع. نؤمن بأن كل قطعة يدوية تحمل روحاً خاصة وقصة فريدة تميزها عن غيرها.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                نسعى لنقدم لكم منتجات مصنوعة بحب وإتقان، تجمع بين الجمال والجودة العالية. كل تصميم نصنعه يعكس اهتمامنا بأدق التفاصيل ورغبتنا في إسعاد عملائنا.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                هدفنا هو أن نكون وجهتكم المفضلة للهدايا المميزة والمنتجات اليدوية الفريدة التي تترك أثراً جميلاً في قلوب من تحبون.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-[#FFF9F6] dark:bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-accent-brown dark:text-white mb-4">
                            <span className="text-primary">قيمنا</span> ومبادئنا
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">ما يميزنا ويجعلنا نتفرد في عالم الحرف اليدوية</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-[40px] shadow-xl border border-gray-100 dark:border-zinc-700 text-center space-y-4">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                                <span className="material-icons-round text-4xl">palette</span>
                            </div>
                            <h3 className="text-xl font-black text-accent-brown dark:text-white">الإبداع</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">نبتكر تصاميم فريدة تعكس شخصيتك وتميزك عن الآخرين</p>
                        </div>

                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-[40px] shadow-xl border border-gray-100 dark:border-zinc-700 text-center space-y-4">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                                <span className="material-icons-round text-4xl">workspace_premium</span>
                            </div>
                            <h3 className="text-xl font-black text-accent-brown dark:text-white">الجودة</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">نستخدم أفضل الخامات ونهتم بأدق التفاصيل في كل منتج</p>
                        </div>

                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-[40px] shadow-xl border border-gray-100 dark:border-zinc-700 text-center space-y-4">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                                <span className="material-icons-round text-4xl">handshake</span>
                            </div>
                            <h3 className="text-xl font-black text-accent-brown dark:text-white">الثقة</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">نبني علاقات قائمة على الثقة والشفافية مع عملائنا</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-accent-brown">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-4">هل أنت مستعد لاكتشاف منتجاتنا؟</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8">تصفح مجموعتنا المميزة من المنتجات اليدوية واختر هديتك الفريدة</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105"
                        >
                            <span>تصفح المنتجات</span>
                            <span className="material-icons-round">arrow_back</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105 border border-white/20"
                        >
                            <span>تواصل معنا</span>
                            <span className="material-icons-round">contact_mail</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;

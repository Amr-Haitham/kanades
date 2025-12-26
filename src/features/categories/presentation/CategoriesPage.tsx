import React from 'react';
import Link from 'next/link';

const CategoriesPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-20 text-center min-h-[70vh] flex flex-col items-center justify-center relative overflow-hidden" dir="rtl">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>

            <div className="flex flex-col items-center mb-12">
                <div className="relative inline-block">
                    {/* Standardized Peeking Beaver (Holding the title) */}
                    <div className="absolute -top-[25px] left-1/2 -translate-x-1/2 w-32 h-32 z-10 pointer-events-none">
                        <img src="/beavers/Image-3.png" alt="Working beaver" className="w-full h-auto drop-shadow-md" />
                    </div>

                    {/* Pill Box Title */}
                    <div className="bg-[#F9E6E2] dark:bg-zinc-800/80 px-12 py-5 rounded-[40px] shadow-sm border border-white/20 relative z-0 mt-12">
                        <h1 className="text-4xl md:text-6xl font-black text-primary">
                            المجموعات
                        </h1>
                        <div className="absolute -bottom-2 -right-4 bg-white dark:bg-zinc-800 p-2 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-700 -rotate-12">
                            <span className="text-2xl">🚧</span>
                        </div>
                    </div>

                    {/* Side Beavers */}
                    <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-32 hidden md:block">
                        <img src="/beavers/Image-2.png" alt="" className="w-full h-auto scale-x-[-1]" />
                    </div>
                    <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-32 hidden md:block">
                        <img src="/beavers/Image-13.png" alt="" className="w-full h-auto" />
                    </div>
                </div>
            </div>

            <p className="text-xl text-gray-500 max-w-md mx-auto leading-relaxed">
                نقوم حالياً بتنسيق أجمل المجموعات لكم. ترقبوا انطلاق أقسامنا الجديدة قريباً بلمسة إبداعية فريدة.
            </p>

            <Link href="/products" className="mt-10 bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-3 rounded-full transition shadow-lg transform hover:scale-105 inline-block">
                تصفح المنتجات
            </Link>
        </div>
    );
};

export default CategoriesPage;

"use client";

import React, { useState } from 'react';
import { Product, Category } from '@/core/utils/types';
import { PRODUCTS } from '@/core/layers/presentation/constants';
import ProductCard from '@/core/layers/presentation/components/ProductCard';

interface ProductsPageProps {
    onAddToCart: (product: Product) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onAddToCart }) => {
    const [filter, setFilter] = useState<Category>("all");

    const filtered = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

    const categoryLabels: Record<Category, string> = {
        all: "الكل",
        medals: "الميداليات",
        "decoration-gifts": "الزينة والهدايا",
        "painting-arts": "فنون الرسم",
        paperwork: "الورقيات",
        tableaux: "التابلوهات"
    };

    return (
        <div className="container mx-auto px-4 py-20 text-right" dir="rtl">
            <div className="flex flex-col items-center mb-16 text-center">
                <div className="relative inline-block mb-4">
                    {/* Standardized Peeking Beaver (Holding the title) */}
                    <div className="absolute -top-[20px] left-1/2 -translate-x-1/2 w-28 h-28 z-10 pointer-events-none">
                        <img src="/beavers/Image-3.png" alt="Peeking beaver" className="w-full h-auto drop-shadow-md" />
                    </div>

                    {/* Pill Box Title */}
                    <div className="bg-[#F9E6E2] dark:bg-zinc-800/80 px-14 py-5 rounded-[40px] shadow-sm border border-white/20 relative z-0 mt-8">
                        <h1 className="text-4xl md:text-5xl font-black text-primary">
                            منتجاتنا
                        </h1>
                    </div>

                    {/* Side Illustrations */}
                    <div className="absolute -right-36 top-0 w-32 hidden lg:block">
                        <img src="/beavers/Image-9.png" alt="Crafting beaver" className="w-full h-auto" />
                    </div>
                    <div className="absolute -left-36 top-0 w-32 hidden lg:block">
                        <img src="/beavers/Image-2.png" alt="Happy beaver" className="w-full h-auto" />
                    </div>
                </div>
                <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-lg mx-auto">استكشف مجموعتنا من الكنوز الأصيلة المصنوعة يدوياً بكل إتقان وشغف.</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {(["all", "medals", "decoration-gifts", "painting-arts", "paperwork", "tableaux"] as Category[]).map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-3 rounded-2xl font-medium transition ${filter === cat
                            ? 'bg-primary text-white shadow-lg'
                            : 'bg-white dark:bg-zinc-800 text-gray-500 hover:bg-gray-50 dark:hover:bg-zinc-700'
                            }`}
                    >
                        {categoryLabels[cat] || cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filtered.map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;

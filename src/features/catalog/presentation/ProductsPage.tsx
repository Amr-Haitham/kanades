
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
        mandala: "ماندالا",
        wood: "خشب",
        "gift-wrap": "تغليف هدايا",
        "trunk-art": "فن الصناديق",
        costumes: "أزياء",
        custom: "مخصص"
    };

    return (
        <div className="container mx-auto px-4 py-12 text-right" dir="rtl">
            <div className="text-center mb-16 relative">
                <div className="bg-primary/10 inline-block px-12 py-4 rounded-3xl relative z-10">
                    <h1 className="text-4xl font-extrabold text-primary">منتجاتنا</h1>
                </div>
                <p className="mt-4 text-gray-500">استكشف مجموعتنا من الكنوز الأصيلة المصنوعة يدوياً.</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {(["all", "mandala", "wood", "gift-wrap", "costumes"] as Category[]).map((cat) => (
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

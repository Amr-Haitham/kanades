
"use client";

import React, { useState } from 'react';
import { Product } from '@/core/utils/types';

interface ProductDetailPageProps {
    product: Product;
    onAddToCart: (product: Product) => void;
    aiRec: string | null;
    loadingAi: boolean;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, onAddToCart, aiRec, loadingAi }) => {
    const [qty, setQty] = useState(1);

    return (
        <div className="container mx-auto px-4 py-12 text-right" dir="rtl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Gallery */}
                <div className="space-y-4">
                    <div className="aspect-square rounded-[40px] overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-soft">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="aspect-square rounded-2xl overflow-hidden opacity-50 hover:opacity-100 transition cursor-pointer border border-gray-100 dark:border-zinc-800">
                                <img src={product.image} alt="Gallery" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info */}
                <div className="space-y-8">
                    <div>
                        <span className="text-primary font-bold text-sm bg-primary/10 px-4 py-1 rounded-full mb-4 inline-block">
                            {product.tags[0]}
                        </span>
                        <h1 className="text-4xl font-extrabold text-accent-brown dark:text-white mb-4">{product.name}</h1>
                        <div className="flex items-center gap-2 mb-6 justify-end">
                            <span className="text-gray-400 text-sm">({product.reviews}+ تقييم)</span>
                            <span className="font-bold">{product.rating}</span>
                            <div className="flex text-yellow-400">
                                {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-icons-round text-lg">star</span>)}
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            {product.description}
                        </p>
                    </div>

                    {/* AI Helper Card */}
                    <div className="bg-secondary/5 border border-secondary/20 p-6 rounded-3xl relative overflow-hidden group">
                        <div className="flex items-center gap-2 mb-3 text-secondary justify-end">
                            <h4 className="font-bold">رأي خبير قندس الذكي</h4>
                            <span className="material-icons-round">auto_awesome</span>
                        </div>
                        {loadingAi ? (
                            <div className="animate-pulse flex space-y-2 flex-col items-end">
                                <div className="h-2 bg-secondary/10 rounded w-full"></div>
                                <div className="h-2 bg-secondary/10 rounded w-3/4"></div>
                            </div>
                        ) : (
                            <p className="text-sm text-gray-700 dark:text-gray-300 italic">"{aiRec}"</p>
                        )}
                        <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-20 transition">
                            <span className="material-icons-round text-8xl">spa</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between py-6 border-y border-gray-100 dark:border-zinc-800">
                        <span className="text-3xl font-bold text-primary">{product.price} EGP</span>
                        <div className="flex items-center gap-4 bg-white dark:bg-zinc-800 rounded-2xl p-2 border border-gray-100 dark:border-zinc-700">
                            <button
                                onClick={() => setQty(prev => prev + 1)}
                                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-xl font-bold transition"
                            >
                                +
                            </button>
                            <span className="w-8 text-center font-bold text-lg">{qty}</span>
                            <button
                                onClick={() => setQty(prev => Math.max(1, prev - 1))}
                                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-xl font-bold transition"
                            >
                                -
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button
                            onClick={() => onAddToCart(product)}
                            className="w-full bg-primary text-white font-bold py-4 rounded-2xl hover:bg-orange-600 transition shadow-lg flex items-center justify-center gap-2"
                        >
                            <span className="material-icons-round">shopping_cart</span>
                            أضف للسلة
                        </button>
                        <button className="w-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-800 dark:text-white font-bold py-4 rounded-2xl hover:bg-gray-50 transition shadow-sm text-center">
                            شراء الآن
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;

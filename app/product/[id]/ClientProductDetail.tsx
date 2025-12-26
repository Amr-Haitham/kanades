"use client";

import React from 'react';
import ProductDetailPage from "@/features/product-detail/presentation/ProductDetailPage";
import { useCart } from "@/core/layers/presentation/providers/CartProvider";
import { PRODUCTS } from "@/core/layers/presentation/constants";

export default function ClientProductDetail({ id }: { id: string }) {
    const { addToCart } = useCart();
    const product = PRODUCTS.find(p => p.id === id);

    if (!product) return <div className="p-20 text-center">المنتج غير موجود</div>;

    return (
        <ProductDetailPage
            product={product}
            onAddToCart={addToCart}
        />
    );
}

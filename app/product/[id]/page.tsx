
"use client";

import React, { useEffect } from 'react';
import { useParams } from "next/navigation";
import ProductDetailPage from "@/features/product-detail/presentation/ProductDetailPage";
import { useCart } from "@/core/layers/presentation/providers/CartProvider";
import { PRODUCTS } from "@/core/layers/presentation/constants";
import { useGeminiRecommendation } from "@/core/layers/presentation/hooks/useGeminiRecommendation";

export default function ProductDetail() {
    const params = useParams();
    const id = params.id as string;
    const { addToCart } = useCart();
    const { loading, recommendation, fetchRecommendation } = useGeminiRecommendation();

    const product = PRODUCTS.find(p => p.id === id);

    useEffect(() => {
        if (product) {
            fetchRecommendation(product.name, product.description);
        }
    }, [product, fetchRecommendation]);

    if (!product) return <div className="p-20 text-center">المنتج غير موجود</div>;

    return (
        <ProductDetailPage
            product={product}
            onAddToCart={addToCart}
            aiRec={recommendation}
            loadingAi={loading}
        />
    );
}

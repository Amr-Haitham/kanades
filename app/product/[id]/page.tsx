
import React from 'react';
import ProductDetailPage from "@/features/product-detail/presentation/ProductDetailPage";
import { PRODUCTS } from "@/core/layers/presentation/constants";
import ClientProductDetail from "./ClientProductDetail";

export function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        id: product.id,
    }));
}

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <ClientProductDetail id={id} />;
}

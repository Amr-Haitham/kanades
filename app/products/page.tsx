
"use client";

import ProductsPage from "@/features/catalog/presentation/ProductsPage";
import { useCart } from "@/core/layers/presentation/providers/CartProvider";

export default function Products() {
    const { addToCart } = useCart();
    return <ProductsPage onAddToCart={addToCart} />;
}

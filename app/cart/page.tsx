
"use client";

import CartPage from "@/features/cart/presentation/CartPage";
import { useCart } from "@/core/layers/presentation/providers/CartProvider";

export default function Cart() {
    const { cart, updateQty, removeFromCart } = useCart();
    return (
        <CartPage
            cart={cart}
            onUpdateQty={updateQty}
            onRemove={removeFromCart}
        />
    );
}

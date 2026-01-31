"use client";

import CheckoutPage from "@/features/checkout/presentation/CheckoutPage";
import { useCart } from "@/core/layers/presentation/providers/CartProvider";

export default function Checkout() {
    const { cart, clearCart } = useCart();
    return <CheckoutPage cart={cart} onClearCart={clearCart} />;
}

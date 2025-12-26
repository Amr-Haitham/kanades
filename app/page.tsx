
"use client";

import HomePage from "@/features/home/presentation/HomePage";
import { useCart } from "@/core/layers/presentation/providers/CartProvider";

export default function Home() {
  const { addToCart } = useCart();
  return <HomePage onAddToCart={addToCart} />;
}

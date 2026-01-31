
"use client";

import React from 'react';
import Link from 'next/link';
import { CartItem } from '@/core/utils/types';
import { MASCOT_URL } from '@/core/layers/presentation/constants';

interface CartPageProps {
    cart: CartItem[];
    onUpdateQty: (id: string, delta: number) => void;
    onRemove: (id: string) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cart, onUpdateQty, onRemove }) => {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 30;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;

    const handleSendOnWhatsApp = () => {
        let message = 'مرحباً! أود إتمام الطلب التالي:\n\n';

        cart.forEach((item, index) => {
            message += `${index + 1}. *${item.name}*\n`;
            message += `   الكمية: ${item.quantity}\n`;
            message += `   السعر: ${item.price} جنيه\n`;
            message += `   المجموع: ${item.price * item.quantity} جنيه\n\n`;
        });

        message += `📦 عدد المنتجات: ${cart.length}\n`;
        message += `💰 المجموع الفرعي: ${subtotal.toFixed(2)} جنيه\n`;
        message += `🚚 الشحن: ${shipping.toFixed(2)} جنيه\n`;
        message += `📋 الضريبة: ${tax.toFixed(2)} جنيه\n`;
        message += `✅ الإجمالي: ${total.toFixed(2)} جنيه\n\n`;
        message += 'شكراً!';

        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="container mx-auto px-4 py-12 text-right" dir="rtl">
            <div className="flex flex-col items-center mb-16">
                <div className="w-32 mb-[-20px] relative z-10">
                    <img src={MASCOT_URL} alt="Mascot" className="w-full h-auto drop-shadow-lg" />
                </div>
                <div className="bg-primary/10 rounded-3xl px-12 py-6 text-center shadow-sm w-full max-w-lg">
                    <h1 className="text-3xl font-extrabold text-primary">عربة التسوق</h1>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Cart List */}
                <div className="lg:col-span-8 space-y-6">
                    {cart.length === 0 ? (
                        <div className="bg-white dark:bg-zinc-800 rounded-[40px] p-20 text-center shadow-sm">
                            <span className="material-icons-round text-6xl text-gray-200 mb-4">shopping_basket</span>
                            <p className="text-gray-400">سلتك فارغة حالياً</p>
                            <Link href="/products" className="text-primary font-bold mt-4 inline-block hover:underline">ابدأ التسوق</Link>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className="bg-white dark:bg-zinc-800 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-center gap-6 border border-gray-50 dark:border-zinc-700">
                                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-grow text-center sm:text-right">
                                    <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                                    <p className="text-xs text-gray-400 mb-4">{item.tags[0]}</p>
                                    <div className="flex items-center justify-center sm:justify-start gap-4">
                                        <div className="flex items-center bg-gray-50 dark:bg-zinc-900 rounded-xl p-1">
                                            <button onClick={() => onUpdateQty(item.id, 1)} className="w-8 h-8 hover:bg-white dark:hover:bg-zinc-800 rounded-lg transition font-bold">+</button>
                                            <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                                            <button onClick={() => onUpdateQty(item.id, -1)} className="w-8 h-8 hover:bg-white dark:hover:bg-zinc-800 rounded-lg transition font-bold">-</button>
                                        </div>
                                        <button onClick={() => onRemove(item.id)} className="p-2 bg-red-50 text-red-500 hover:bg-red-100 rounded-xl transition">
                                            <span className="material-icons-round text-sm">delete_outline</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="text-lg font-bold text-primary">
                                    {item.price * item.quantity} EGP
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Summary */}
                <div className="lg:col-span-4">
                    <div className="sticky top-28 bg-white dark:bg-zinc-800 rounded-[40px] shadow-xl p-8 border border-gray-100 dark:border-zinc-700">
                        <h2 className="text-2xl font-bold text-accent-brown dark:text-white mb-8 border-b pb-4 text-center">ملخص الطلب</h2>
                        <div className="space-y-4 text-sm mb-8">
                            <div className="flex justify-between text-gray-500">
                                <span>المجموع الفرعي ({cart.length} منتجات)</span>
                                <span className="font-bold text-gray-800 dark:text-white">{subtotal.toFixed(2)} EGP</span>
                            </div>
                            <div className="flex justify-between text-gray-500">
                                <span>الشحن</span>
                                <span className="font-bold text-gray-800 dark:text-white">{shipping.toFixed(2)} EGP</span>
                            </div>
                            <div className="flex justify-between text-gray-500">
                                <span>الضريبة المقدرة (10%)</span>
                                <span className="font-bold text-gray-800 dark:text-white">{tax.toFixed(2)} EGP</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold text-primary pt-4 border-t">
                                <span>الإجمالي المقدر</span>
                                <span>{total.toFixed(2)} EGP</span>
                            </div>
                        </div>
                        <Link
                            href={cart.length === 0 ? "#" : "/checkout"}
                            className={`w-full bg-primary text-white font-bold py-4 rounded-2xl hover:bg-orange-600 transition shadow-lg mb-4 flex items-center justify-center gap-2 ${cart.length === 0 ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
                        >
                            <span className="material-icons-round">shopping_cart_checkout</span>
                            متابعة الطلب
                        </Link>
                        <Link href="/products" className="w-full bg-gray-50 dark:bg-zinc-700 text-gray-600 dark:text-gray-200 font-bold py-4 rounded-2xl hover:bg-gray-100 transition block text-center">
                            متابعة التسوق
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { CartItem } from '@/core/utils/types';

interface CheckoutPageProps {
    cart: CartItem[];
    onClearCart: () => void;
}

interface CustomerInfo {
    name: string;
    phone: string;
    address: string;
    city: string;
    notes: string;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cart, onClearCart }) => {
    const router = useRouter();
    const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
        name: '',
        phone: '',
        address: '',
        city: '',
        notes: ''
    });
    const [errors, setErrors] = useState<Partial<CustomerInfo>>({});

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 30;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCustomerInfo(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof CustomerInfo]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = (): boolean => {
        const newErrors: Partial<CustomerInfo> = {};
        if (!customerInfo.name.trim()) newErrors.name = 'الاسم مطلوب';
        if (!customerInfo.phone.trim()) newErrors.phone = 'رقم الهاتف مطلوب';
        if (!customerInfo.address.trim()) newErrors.address = 'العنوان مطلوب';
        if (!customerInfo.city.trim()) newErrors.city = 'المدينة مطلوبة';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        // Format WhatsApp message
        let message = `*طلب جديد من قنادس* 🎁\n\n`;
        message += `*بيانات العميل:*\n`;
        message += `━━━━━━━━━━━━━━━━\n`;
        message += `👤 الاسم: ${customerInfo.name}\n`;
        message += `📱 الهاتف: ${customerInfo.phone}\n`;
        message += `🏠 العنوان: ${customerInfo.address}\n`;
        message += `🌆 المدينة: ${customerInfo.city}\n`;
        if (customerInfo.notes) {
            message += `📝 ملاحظات: ${customerInfo.notes}\n`;
        }
        message += `\n*المنتجات المطلوبة:*\n`;
        message += `━━━━━━━━━━━━━━━━\n`;
        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name}\n`;
            message += `   الكمية: ${item.quantity} | السعر: ${item.price * item.quantity} جنيه\n`;
        });
        message += `\n*ملخص الطلب:*\n`;
        message += `━━━━━━━━━━━━━━━━\n`;
        message += `💰 المجموع الفرعي: ${subtotal.toFixed(2)} جنيه\n`;
        message += `🚚 الشحن: ${shipping.toFixed(2)} جنيه\n`;
        message += `📋 الضريبة: ${tax.toFixed(2)} جنيه\n`;
        message += `✅ *الإجمالي: ${total.toFixed(2)} جنيه*\n`;

        // Open WhatsApp (placeholder number - to be replaced)
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        // Clear cart and redirect to confirmation
        onClearCart();
        router.push('/order-confirmation');
    };

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center" dir="rtl">
                <div className="max-w-lg mx-auto">
                    <span className="material-icons-round text-6xl text-gray-200 mb-4">shopping_basket</span>
                    <h1 className="text-2xl font-bold text-accent-brown dark:text-white mb-4">سلة التسوق فارغة</h1>
                    <p className="text-gray-500 mb-8">لا يوجد منتجات في سلة التسوق</p>
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105"
                    >
                        <span>تصفح المنتجات</span>
                        <span className="material-icons-round">arrow_back</span>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FFF9F6] dark:bg-zinc-950" dir="rtl">
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="flex flex-col items-center mb-12">
                    <div className="w-24 h-24 bg-white dark:bg-zinc-800 rounded-3xl flex items-center justify-center p-2 border border-gray-100 dark:border-zinc-700 shadow-xl mb-6 overflow-hidden">
                        <img src="/logo.svg" alt="قنادس" className="w-full h-full object-contain" />
                    </div>
                    <h1 className="text-3xl font-black text-accent-brown dark:text-white">إتمام الطلب</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">أدخل بياناتك لإتمام الطلب</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
                    {/* Form */}
                    <div className="lg:col-span-7">
                        <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-800 rounded-[40px] shadow-xl p-8 border border-gray-100 dark:border-zinc-700">
                            <h2 className="text-xl font-bold text-accent-brown dark:text-white mb-6">بيانات التوصيل</h2>

                            <div className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                        الاسم الكامل *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={customerInfo.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-2xl border ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-zinc-600'} bg-white dark:bg-zinc-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition`}
                                        placeholder="أدخل اسمك الكامل"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                        رقم الهاتف *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={customerInfo.phone}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-2xl border ${errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-zinc-600'} bg-white dark:bg-zinc-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition`}
                                        placeholder="01xxxxxxxxx"
                                        dir="ltr"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>

                                {/* City */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                        المدينة *
                                    </label>
                                    <select
                                        name="city"
                                        value={customerInfo.city}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-2xl border ${errors.city ? 'border-red-500' : 'border-gray-200 dark:border-zinc-600'} bg-white dark:bg-zinc-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition`}
                                    >
                                        <option value="">اختر المدينة</option>
                                        <option value="القاهرة">القاهرة</option>
                                        <option value="الجيزة">الجيزة</option>
                                        <option value="الإسكندرية">الإسكندرية</option>
                                        <option value="الدقهلية">الدقهلية</option>
                                        <option value="الشرقية">الشرقية</option>
                                        <option value="الغربية">الغربية</option>
                                        <option value="المنوفية">المنوفية</option>
                                        <option value="القليوبية">القليوبية</option>
                                        <option value="البحيرة">البحيرة</option>
                                        <option value="الفيوم">الفيوم</option>
                                        <option value="بني سويف">بني سويف</option>
                                        <option value="المنيا">المنيا</option>
                                        <option value="أسيوط">أسيوط</option>
                                        <option value="سوهاج">سوهاج</option>
                                        <option value="قنا">قنا</option>
                                        <option value="الأقصر">الأقصر</option>
                                        <option value="أسوان">أسوان</option>
                                        <option value="البحر الأحمر">البحر الأحمر</option>
                                        <option value="الوادي الجديد">الوادي الجديد</option>
                                        <option value="مطروح">مطروح</option>
                                        <option value="شمال سيناء">شمال سيناء</option>
                                        <option value="جنوب سيناء">جنوب سيناء</option>
                                        <option value="بورسعيد">بورسعيد</option>
                                        <option value="السويس">السويس</option>
                                        <option value="الإسماعيلية">الإسماعيلية</option>
                                        <option value="دمياط">دمياط</option>
                                        <option value="كفر الشيخ">كفر الشيخ</option>
                                    </select>
                                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                                </div>

                                {/* Address */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                        العنوان التفصيلي *
                                    </label>
                                    <textarea
                                        name="address"
                                        value={customerInfo.address}
                                        onChange={handleChange}
                                        rows={3}
                                        className={`w-full px-4 py-3 rounded-2xl border ${errors.address ? 'border-red-500' : 'border-gray-200 dark:border-zinc-600'} bg-white dark:bg-zinc-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition resize-none`}
                                        placeholder="الشارع، المبنى، الطابق، الشقة..."
                                    />
                                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                                </div>

                                {/* Notes */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                        ملاحظات إضافية (اختياري)
                                    </label>
                                    <textarea
                                        name="notes"
                                        value={customerInfo.notes}
                                        onChange={handleChange}
                                        rows={2}
                                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                                        placeholder="أي تعليمات خاصة للتوصيل أو الطلب..."
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                            >
                                <span className="material-icons-round">chat</span>
                                إرسال الطلب عبر واتساب
                            </button>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-28 bg-white dark:bg-zinc-800 rounded-[40px] shadow-xl p-8 border border-gray-100 dark:border-zinc-700">
                            <h2 className="text-xl font-bold text-accent-brown dark:text-white mb-6">ملخص الطلب</h2>

                            {/* Items */}
                            <div className="space-y-4 max-h-64 overflow-y-auto mb-6">
                                {cart.map(item => (
                                    <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-zinc-900 rounded-2xl">
                                        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-sm text-accent-brown dark:text-white">{item.name}</h4>
                                            <p className="text-xs text-gray-500">الكمية: {item.quantity}</p>
                                        </div>
                                        <div className="text-primary font-bold">
                                            {item.price * item.quantity} جنيه
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Totals */}
                            <div className="space-y-3 text-sm border-t border-gray-100 dark:border-zinc-700 pt-6">
                                <div className="flex justify-between text-gray-500">
                                    <span>المجموع الفرعي</span>
                                    <span className="font-bold text-gray-800 dark:text-white">{subtotal.toFixed(2)} جنيه</span>
                                </div>
                                <div className="flex justify-between text-gray-500">
                                    <span>الشحن</span>
                                    <span className="font-bold text-gray-800 dark:text-white">{shipping.toFixed(2)} جنيه</span>
                                </div>
                                <div className="flex justify-between text-gray-500">
                                    <span>الضريبة (10%)</span>
                                    <span className="font-bold text-gray-800 dark:text-white">{tax.toFixed(2)} جنيه</span>
                                </div>
                                <div className="flex justify-between text-xl font-black text-primary pt-4 border-t border-gray-100 dark:border-zinc-700">
                                    <span>الإجمالي</span>
                                    <span>{total.toFixed(2)} جنيه</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;

'use client';

import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen" dir="rtl">
            {/* Hero Section with Styled Title */}
            <section className="bg-gradient-to-b from-[#FFF9F6] to-white dark:from-zinc-900 dark:to-zinc-950 py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center text-center">
                        <div className="relative inline-block mb-4">
                            {/* Peeking Beaver */}
                            <div className="absolute -top-[20px] left-1/2 -translate-x-1/2 w-28 h-28 z-10 pointer-events-none">
                                <img src="/beavers/Image-3.png" alt="Peeking beaver" className="w-full h-auto drop-shadow-md" />
                            </div>

                            {/* Pill Box Title */}
                            <div className="bg-[#F9E6E2] dark:bg-zinc-800/80 px-14 py-5 rounded-[40px] shadow-sm border border-white/20 relative z-0 mt-8">
                                <h1 className="text-4xl md:text-5xl font-black text-primary">
                                    تواصل معنا
                                </h1>
                            </div>

                            {/* Side Illustrations */}
                            <div className="absolute -right-36 top-0 w-32 hidden lg:block">
                                <img src="/beavers/Image-10.png" alt="Beaver" className="w-full h-auto" />
                            </div>
                            <div className="absolute -left-36 top-0 w-32 hidden lg:block">
                                <img src="/beavers/Image-2.png" alt="Beaver" className="w-full h-auto scale-x-[-1]" />
                            </div>
                        </div>
                        <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-2xl text-lg">نحن هنا لمساعدتك والإجابة على جميع استفساراتك</p>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="py-20 bg-white dark:bg-zinc-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-black text-accent-brown dark:text-white mb-6">معلومات التواصل</h2>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                                    يسعدنا تواصلكم معنا في أي وقت. نحن نرحب بجميع الاستفسارات والطلبات الخاصة.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-center gap-4 p-4 bg-[#FFF9F6] dark:bg-zinc-800 rounded-2xl">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                        <span className="material-icons-round text-2xl">email</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-accent-brown dark:text-white">البريد الإلكتروني</h3>
                                        <a href="mailto:qanades@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-primary transition">
                                            qanades@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-4 p-4 bg-[#FFF9F6] dark:bg-zinc-800 rounded-2xl">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                        <span className="material-icons-round text-2xl">phone</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-accent-brown dark:text-white">الهاتف</h3>
                                        <a href="tel:+201234567890" className="text-gray-600 dark:text-gray-300 hover:text-primary transition">
                                            +20 123 456 789
                                        </a>
                                    </div>
                                </div>

                                {/* WhatsApp */}
                                <div className="flex items-center gap-4 p-4 bg-[#FFF9F6] dark:bg-zinc-800 rounded-2xl">
                                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500">
                                        <span className="material-icons-round text-2xl">chat</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-accent-brown dark:text-white">واتساب</h3>
                                        <a
                                            href="https://wa.me/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition"
                                        >
                                            تواصل معنا عبر واتساب
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-4 p-4 bg-[#FFF9F6] dark:bg-zinc-800 rounded-2xl">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                                        <span className="material-icons-round text-2xl">location_on</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-accent-brown dark:text-white">الموقع</h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            مصر
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="pt-6">
                                <h3 className="font-bold text-accent-brown dark:text-white mb-4">تابعنا على</h3>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 rounded-xl border border-gray-200 dark:border-zinc-700 flex items-center justify-center hover:bg-primary hover:text-white transition text-gray-600 dark:text-gray-300">
                                        <span className="material-icons-round">facebook</span>
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-xl border border-gray-200 dark:border-zinc-700 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition text-gray-600 dark:text-gray-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-xl border border-gray-200 dark:border-zinc-700 flex items-center justify-center hover:bg-black hover:text-white transition text-gray-600 dark:text-gray-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Image/Illustration */}
                        <div className="flex items-center justify-center">
                            <div className="relative">
                                <div className="w-80 h-80 bg-[#F9E6E2] dark:bg-zinc-800 rounded-[60px] flex items-center justify-center">
                                    <img src="/beavers/Image-6.png" alt="Contact" className="w-64 h-64 object-contain drop-shadow-xl" />
                                </div>
                                {/* Decorative Elements */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full" />
                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-[#FFF9F6] dark:bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-accent-brown dark:text-white mb-4">أسئلة شائعة</h2>
                        <p className="text-gray-500 dark:text-gray-400">إجابات على أكثر الأسئلة شيوعاً</p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700">
                            <h3 className="font-bold text-accent-brown dark:text-white mb-2">كيف يمكنني الطلب؟</h3>
                            <p className="text-gray-600 dark:text-gray-300">يمكنك تصفح المنتجات وإضافتها للسلة ثم إتمام الطلب عبر واتساب.</p>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700">
                            <h3 className="font-bold text-accent-brown dark:text-white mb-2">ما هي مدة التوصيل؟</h3>
                            <p className="text-gray-600 dark:text-gray-300">تتراوح مدة التوصيل من 3-7 أيام عمل حسب موقعك.</p>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700">
                            <h3 className="font-bold text-accent-brown dark:text-white mb-2">هل يمكنني طلب تصميم مخصص؟</h3>
                            <p className="text-gray-600 dark:text-gray-300">نعم! نحب التصاميم المخصصة. تواصل معنا وأخبرنا بفكرتك.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;

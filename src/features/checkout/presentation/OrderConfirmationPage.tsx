'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const OrderConfirmationPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#FFF9F6] to-white dark:from-zinc-900 dark:to-zinc-950 flex items-center justify-center" dir="rtl">
            <div className="container mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-lg mx-auto text-center"
                >
                    {/* Success Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-32 h-32 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="material-icons-round text-6xl text-green-500"
                        >
                            check_circle
                        </motion.span>
                    </motion.div>

                    {/* Message */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl md:text-4xl font-black text-accent-brown dark:text-white mb-4"
                    >
                        تم استلام طلبك!
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-500 dark:text-gray-400 text-lg mb-8"
                    >
                        شكراً لك على ثقتك بنا! سنتواصل معك قريباً عبر واتساب لتأكيد الطلب وتفاصيل التوصيل.
                    </motion.p>

                    {/* Beaver Illustration */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mb-8"
                    >
                        <img
                            src="/beavers/Image-7.png"
                            alt="Happy Beaver"
                            className="w-48 h-48 mx-auto drop-shadow-xl"
                        />
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105"
                        >
                            <span className="material-icons-round">home</span>
                            <span>العودة للرئيسية</span>
                        </Link>
                        <Link
                            href="/products"
                            className="inline-flex items-center justify-center gap-2 bg-white dark:bg-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-700 text-accent-brown dark:text-white font-bold px-8 py-4 rounded-full shadow-lg border border-gray-200 dark:border-zinc-600 transition-all hover:scale-105"
                        >
                            <span className="material-icons-round">grid_view</span>
                            <span>تصفح المنتجات</span>
                        </Link>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700"
                    >
                        <h3 className="font-bold text-accent-brown dark:text-white mb-3">ماذا بعد؟</h3>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 text-right">
                            <li className="flex items-center gap-2">
                                <span className="material-icons-round text-green-500 text-lg">check</span>
                                سنتواصل معك خلال 24 ساعة لتأكيد الطلب
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-icons-round text-green-500 text-lg">check</span>
                                سنرسل لك تفاصيل الشحن والدفع
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-icons-round text-green-500 text-lg">check</span>
                                التوصيل خلال 3-7 أيام عمل
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default OrderConfirmationPage;

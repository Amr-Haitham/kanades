
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, MASCOT_URL } from '../constants';
import { useCart } from '../providers/CartProvider';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const pathname = usePathname();
    const { cartCount } = useCart();

    return (
        <div className="min-h-screen flex flex-col font-sans bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300" dir="rtl">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-gray-100 dark:border-zinc-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo & Account */}
                        <div className="flex items-center gap-6">
                            <Link href="/" className="flex items-center gap-2 group">
                                <div className="w-10 h-10 bg-accent-brown rounded-full flex items-center justify-center text-white font-bold text-xl overflow-hidden group-hover:scale-105 transition">
                                    <span className="material-icons-round">spa</span>
                                </div>
                                <span className="text-xl font-bold text-accent-brown dark:text-white hidden sm:block">قندس</span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8 font-medium">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`flex items-center gap-1 hover:text-primary transition ${pathname === item.path ? 'text-primary' : 'text-gray-600 dark:text-gray-300'
                                        }`}
                                >
                                    <span className="material-icons-round text-lg">{item.icon}</span>
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <Link href="/cart" className="relative group text-gray-600 dark:text-gray-300 hover:text-primary">
                                <span className="material-icons-round text-2xl">shopping_cart</span>
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white dark:ring-zinc-900">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                            <ThemeToggle />
                            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition text-gray-600 dark:text-gray-300">
                                <span className="material-icons-round">account_circle</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="md:col-span-1">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 bg-accent-brown rounded-full flex items-center justify-center text-white font-bold text-xl">ق</div>
                                <span className="text-xl font-bold text-accent-brown dark:text-white">قنادس</span>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                شكراً لك على دعم فني الأصيل. شراؤك يغذي مواهبي ويجعلني قادرة على تكريس المزيد من الوقت للحرفة التي أحبها.
                            </p>
                            <div className="flex gap-4 mt-6">
                                {['facebook', 'camera_alt', 'public'].map(icon => (
                                    <a key={icon} href="#" className="w-10 h-10 rounded-xl border border-gray-200 dark:border-zinc-700 flex items-center justify-center hover:bg-primary hover:text-white transition group">
                                        <span className="material-icons-round text-lg">{icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-accent-brown dark:text-white">روابط سريعة</h4>
                            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                                {NAV_ITEMS.map(item => (
                                    <li key={item.path}>
                                        <Link href={item.path} className="hover:text-primary flex items-center gap-2">
                                            {item.label}
                                            <span className="material-icons-round text-xs">{item.icon}</span>
                                        </Link>
                                    </li>
                                ))}
                                <li><a href="#" className="hover:text-primary flex items-center gap-2">معلومات التوصيل <span className="material-icons-round text-xs">local_shipping</span></a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-accent-brown dark:text-white">تواصل معنا</h4>
                            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                                <li className="flex items-center gap-2"> qanades@gmail.com <span className="material-icons-round text-xs">email</span></li>
                                <li className="flex items-center gap-2" dir="ltr"><span className="material-icons-round text-xs">phone</span> +123 4456 789</li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center justify-center md:items-end">
                            <img src={MASCOT_URL} alt="Mascot" className="w-32 h-32 object-contain opacity-50 grayscale hover:grayscale-0 transition" />
                        </div>
                    </div>
                    <div className="border-t border-gray-100 dark:border-zinc-800 pt-8 text-center text-xs text-gray-400">
                        © 2025 قنادس (Kandoos). جميع الحقوق محفوظة. صُنع بحب.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;

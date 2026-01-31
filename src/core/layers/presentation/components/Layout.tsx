
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '../constants';
import { useCart } from '../providers/CartProvider';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
    children: React.ReactNode;
}

const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
);

const TikTokIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
);

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const pathname = usePathname();
    const { cartCount } = useCart();

    return (
        <div className="min-h-screen flex flex-col font-sans bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300" dir="rtl">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-gray-100 dark:border-zinc-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-6">
                            <Link href="/" className="flex items-center gap-2 group">
                                <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center p-1 border border-gray-100 dark:border-zinc-700 shadow-sm group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                    <img src="/logo.svg" alt="قنادس" className="w-full h-full object-contain" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-black text-accent-brown dark:text-white leading-none">قنادس</span>
                                    <span className="text-[10px] text-primary font-bold uppercase tracking-wider">Qanades</span>
                                </div>
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
                                <div className="w-10 h-10 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center p-1 border border-gray-100 dark:border-zinc-700 shadow-sm overflow-hidden">
                                    <img src="/logo.svg" alt="قنادس" className="w-full h-full object-contain" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-black text-accent-brown dark:text-white leading-none">قنادس</span>
                                    <span className="text-[10px] text-primary font-bold uppercase tracking-wider">Qanades</span>
                                </div>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                شكراً لك على دعم فني الأصيل. شراؤك يغذي مواهبي ويجعلني قادرة على تكريس المزيد من الوقت للحرفة التي أحبها.
                            </p>
                            <div className="flex gap-4 mt-6">
                                <a href="#" className="w-10 h-10 rounded-xl border border-gray-200 dark:border-zinc-700 flex items-center justify-center hover:bg-primary hover:text-white transition text-gray-600 dark:text-gray-300">
                                    <span className="material-icons-round text-lg">facebook</span>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-xl border border-gray-200 dark:border-zinc-700 flex items-center justify-center hover:bg-primary hover:text-white transition text-gray-600 dark:text-gray-300">
                                    <InstagramIcon />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-xl border border-gray-200 dark:border-zinc-700 flex items-center justify-center hover:bg-primary hover:text-white transition text-gray-600 dark:text-gray-300">
                                    <TikTokIcon />
                                </a>
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
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-accent-brown dark:text-white">تواصل معنا</h4>
                            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                                <li className="flex items-center gap-2 justify-end">
                                    <span>qanades@gmail.com</span>
                                    <span className="material-icons-round text-lg">email</span>
                                </li>
                                <li className="flex items-center gap-2 justify-end">
                                    <span>+20 123 456 789</span>
                                    <span className="material-icons-round text-lg">phone</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center justify-center md:items-end">
                            <div className="w-24 h-24 bg-white dark:bg-zinc-800 rounded-3xl flex items-center justify-center p-2 border border-gray-100 dark:border-zinc-700 shadow-sm opacity-50 hover:opacity-100 transition overflow-hidden">
                                <img src="/logo.svg" alt="قنادس" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-100 dark:border-zinc-800 pt-8 text-center text-xs text-gray-400">
                        © 2025 قنادس | Qanades. جميع الحقوق محفوظة. صُنع بحب.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;

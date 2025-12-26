"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';
import Link from 'next/link';

interface Toast {
    id: string;
    message: string;
    type: 'success' | 'error' | 'info';
    action?: {
        label: string;
        href: string;
    };
}

interface ToastContextType {
    showToast: (message: string, type?: 'success' | 'error' | 'info', action?: { label: string; href: string }) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within ToastProvider');
    }
    return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = useCallback((message: string, type: 'success' | 'error' | 'info' = 'success', action?: { label: string; href: string }) => {
        const id = Math.random().toString(36).substr(2, 9);
        const newToast: Toast = { id, message, type, action };

        setToasts(prev => [...prev, newToast]);

        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 5000);
    }, []);

    const removeToast = (id: string) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}

            {/* Toast Container */}
            <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none" dir="rtl">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className="pointer-events-auto bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-zinc-700 p-4 min-w-[320px] max-w-md animate-slide-in-right"
                        style={{
                            animation: 'slideInRight 0.3s ease-out'
                        }}
                    >
                        <div className="flex items-start gap-3">
                            {/* Icon */}
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${toast.type === 'success' ? 'bg-green-100 text-green-600' :
                                    toast.type === 'error' ? 'bg-red-100 text-red-600' :
                                        'bg-blue-100 text-blue-600'
                                }`}>
                                <span className="material-icons-round text-xl">
                                    {toast.type === 'success' ? 'check_circle' :
                                        toast.type === 'error' ? 'error' : 'info'}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-1">
                                <p className="text-sm font-bold text-gray-900 dark:text-white mb-2">
                                    {toast.message}
                                </p>

                                {toast.action && (
                                    <Link
                                        href={toast.action.href}
                                        className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-primary/80 transition"
                                    >
                                        {toast.action.label}
                                        <span className="material-icons-round text-sm">arrow_back</span>
                                    </Link>
                                )}
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={() => removeToast(toast.id)}
                                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition"
                            >
                                <span className="material-icons-round text-lg">close</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx global>{`
                @keyframes slideInRight {
                    from {
                        transform: translateX(-100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </ToastContext.Provider>
    );
};

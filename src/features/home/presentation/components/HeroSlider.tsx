'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { HERO_SLIDES } from '@/core/layers/presentation/constants';

const HeroSlider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, []);

    // Auto-advance slides every 6 seconds
    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const slide = HERO_SLIDES[currentSlide];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden bg-accent-brown rounded-[40px] mx-4 shadow-2xl"
        >
            {/* Background */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 z-0"
                >
                    {slide.backgroundType === 'image' ? (
                        <>
                            <img
                                src={slide.backgroundImage}
                                className="w-full h-full object-cover opacity-30"
                                alt="Hero Background"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-accent-brown via-accent-brown/20 to-transparent" />
                        </>
                    ) : (
                        <div
                            className="w-full h-full"
                            style={{ background: slide.backgroundImage }}
                        />
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Decorative Beaver */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 1.2,
                    delay: 0.3,
                    ease: [0.6, 0.05, 0.01, 0.9]
                }}
                className="absolute top-1/2 left-8 md:left-20 -translate-y-1/2 w-[180px] md:w-[300px] z-10 pointer-events-none"
            >
                <img src="/beavers/Image.png" alt="Beaver team" className="w-full h-auto drop-shadow-2xl" />
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-12 relative z-10 text-right">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slide.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-xl md:max-w-2xl ml-auto space-y-4 md:space-y-6"
                    >
                        <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
                            {slide.mainText.map((text, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                                    className={index === slide.mainTextHighlight ? 'text-primary' : ''}
                                >
                                    {text}
                                    {index < slide.mainText.length - 1 && <br />}
                                </motion.span>
                            ))}
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-sm md:text-lg text-gray-200 leading-relaxed max-w-lg ml-auto"
                        >
                            {slide.subText}
                        </motion.p>
                    </motion.div>
                </AnimatePresence>

                {/* Fixed Button - Outside AnimatePresence */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.8,
                        ease: [0.6, 0.05, 0.01, 0.9]
                    }}
                    className="flex justify-end pt-8"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link
                            href="/products"
                            className="bg-primary hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-full shadow-lg flex items-center gap-2 text-lg relative overflow-hidden group"
                        >
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <span className="relative z-10">اختر هديتك المميزة</span>
                            <motion.span
                                className="material-icons-round relative z-10"
                                animate={{ x: [0, -5, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                arrow_back
                            </motion.span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {HERO_SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide
                                ? 'bg-primary w-8'
                                : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition z-20"
                aria-label="Previous slide"
            >
                <span className="material-icons-round">chevron_right</span>
            </button>
            <button
                onClick={nextSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition z-20"
                aria-label="Next slide"
            >
                <span className="material-icons-round">chevron_left</span>
            </button>
        </motion.section>
    );
};

export default HeroSlider;

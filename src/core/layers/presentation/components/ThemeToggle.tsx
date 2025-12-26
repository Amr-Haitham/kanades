
"use client";

import React from 'react';
import { useTheme } from '../providers/ThemeProvider';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={() => {
                console.log("Theme toggle clicked! Current:", theme);
                toggleTheme();
            }}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition text-gray-600 dark:text-gray-300 cursor-pointer relative z-50"
            aria-label="Toggle theme"
            type="button"
        >
            <span className="material-icons-round">
                {theme === 'light' ? 'dark_mode' : 'light_mode'}
            </span>
        </button>
    );
};

export default ThemeToggle;

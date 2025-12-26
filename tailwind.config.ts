import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D47754",
        secondary: "#3C8D89",
        "bg-cream": "#FDFBF7",
        "surface-dark": "#2d2d2d",
        "accent-brown": "#4A3B32",
        "background-light": "#FAFAFA",
        "background-dark": "#1A1A1A",
        "text-light": "#333333",
        "text-dark": "#E5E5E5",
      },
      fontFamily: {
        sans: ["Tajawal", "Cairo", "sans-serif"],
        display: ["Tajawal", "Cairo", "sans-serif"],
        body: ["Tajawal", "Cairo", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;

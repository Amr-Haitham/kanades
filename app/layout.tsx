
import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/core/layers/presentation/providers/CartProvider";
import { ThemeProvider } from "@/core/layers/presentation/providers/ThemeProvider";
import Layout from "@/core/layers/presentation/components/Layout";

export const metadata: Metadata = {
  title: "قنادس - منتجات يدوية أصيلة",
  description: "اكتشف مجموعة فريدة من المنتجات اليدوية الأصيلة المصنوعة بحب وإتقان",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />
      </head>
      <body className="transition-colors duration-300">
        <ThemeProvider>
          <CartProvider>
            <Layout>
              {children}
            </Layout>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

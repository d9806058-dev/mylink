import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minjun Kim | Profile",
  description: "Data-driven developer, finance student, and DIY crafter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className={`${outfit.variable} antialiased min-h-screen relative`}>
        <div className="animated-gradient-bg" />
        <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20">
          {children}
        </main>
      </body>
    </html>
  );
}

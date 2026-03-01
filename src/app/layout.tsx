import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tibbiy Malaka | Professional Malaka Oshirish Markazi",
  description: "Tibbiyot va farmatsevtika xodimlari uchun professional malaka oshirish markazi. 26 turdagi o'quv dasturlari, davlat litsenziyasi va zamonaviy infratuzilma.",
  keywords: ["tibbiyot", "malaka oshirish", "hamshiralik ishi", "farmatsevtika", "o'quv markazi", "toshkent"],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

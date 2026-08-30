import type { Metadata } from "next";
import { Geist, Hanken_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samir Navas - Portfolio",
  description: "Graphic Designer & Freelancer — Crafting identity-focused logos and striking posters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${hankenGrotesk.variable} antialiased`}
    >
      <body className="bg-surface text-on-surface min-h-screen flex flex-col font-body-md text-body-md selection:bg-primary selection:text-on-primary">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

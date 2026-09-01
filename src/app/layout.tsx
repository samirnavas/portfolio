import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samir Navas - Graphic Designer & Freelancer",
  description: "Graphic Designer & Freelancer — Crafting identity-focused logos and striking posters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-surface text-on-surface min-h-screen flex flex-col font-body-md text-body-md selection:bg-primary selection:text-on-primary">
        <SmoothScroll>{children}</SmoothScroll>
        <SpeedInsights />
      </body>
    </html>
  );
}


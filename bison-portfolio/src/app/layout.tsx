import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Dominik Grzelak | Data & AI Executive",
  description: "Portfolio of high-performance CTO, delivering business impact through AI and data.",
  openGraph: {
    images: ["/og-image.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans min-h-full flex flex-col bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}

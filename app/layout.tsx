import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gbana-market.vercel.app"),
  title: "Gbana Market – The Liberian Trust-First Marketplace",
  description:
    "Buy and sell used & new items in Liberia. Trusted, affordable, and mobile-friendly.",
  keywords: [
    "gbana market",
    "liberia marketplace",
    "buy and sell in liberia",
    "monrovia marketplace",
    "used items liberia",
    "liberia classified ads",
    "whatsapp marketplace",
    "mobile money liberia",
  ],
  authors: [{ name: "Butty Saylee" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gbana Market – The Liberian Trust-First Marketplace",
    description:
      "Buy and sell used & new items in Liberia. Trusted, affordable, and mobile-friendly.",
    url: "https://gbana-market.vercel.app",
    siteName: "Gbana Market",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gbana Market",
    description:
      "Buy and sell used & new items in Liberia. Trusted, affordable, and mobile-friendly.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased min-h-screen bg-slate-50`}>
        {children}
      </body>
    </html>
  );
}

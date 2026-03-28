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
  title: "SoulMap – Astrologie Integrativă | Ședințe Online & Față în Față",
  description:
    "Descoperă cine ești cu adevărat prin astrologie natală, relațională și karmică. Programează o ședință personalizată cu SoulMap, online sau în persoană.",
  metadataBase: new URL("https://soulmap-landing-page.vercel.app"),
  alternates: {
    canonical: "https://soulmap-landing-page.vercel.app",
  },
  openGraph: {
    title: "SoulMap – Astrologie Integrativă | Ședințe Online & Față în Față",
    description:
      "Descoperă cine ești cu adevărat prin astrologie natală, relațională și karmică. Programează o ședință personalizată cu SoulMap, online sau în persoană.",
    url: "https://soulmap-landing-page.vercel.app",
    siteName: "SoulMap",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/design-nou/logo/logo-dark.png",
        width: 1200,
        height: 630,
        alt: "SoulMap – Astrologie Integrativă",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoulMap – Astrologie Integrativă",
    description:
      "Astrologie natală, relațională, karmică și previzională. Programează o ședință personalizată.",
    images: ["/design-nou/logo/logo-dark.png"],
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CelestialParallax from "@/components/CelestialParallax";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CelestialParallax />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}

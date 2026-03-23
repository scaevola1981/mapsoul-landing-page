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
  title: "MapSoul – Astrologie Integrativă | Ședințe Online & Față în Față",
  description:
    "Descoperă cine ești cu adevărat prin astrologie natală, relațională și karmică. Programează o ședință personalizată cu MapSoul, online sau în persoană.",
  metadataBase: new URL("https://mapsoul-landing-page.vercel.app"),
  alternates: {
    canonical: "https://mapsoul-landing-page.vercel.app",
  },
  openGraph: {
    title: "MapSoul – Astrologie Integrativă | Ședințe Online & Față în Față",
    description:
      "Descoperă cine ești cu adevărat prin astrologie natală, relațională și karmică. Programează o ședință personalizată cu MapSoul, online sau în persoană.",
    url: "https://mapsoul-landing-page.vercel.app",
    siteName: "MapSoul",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "MapSoul – Astrologie Integrativă",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MapSoul – Astrologie Integrativă",
    description:
      "Astrologie natală, relațională, karmică și previzională. Programează o ședință personalizată.",
    images: ["/logo.png"],
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SoulMap - Astrologie Integrativă",
  "url": "https://soulmap-astrology.vercel.app",
  "sameAs": [],
  "description": "Descoperă cine ești cu adevărat prin astrologie natală, relațională și karmică. Ședințe online sau față în față cu Marilena, astrolog acreditat.",
  "provider": {
    "@type": "Person",
    "name": "Marilena",
    "jobTitle": "Astrolog",
    "email": "ghermac_marilena@yahoo.com",
    "description": "Astrolog acreditat și student la psihologie, specializat în interpretarea hărților natale și karmice."
  },
  "areaServed": {
    "@type": "Country",
    "name": "Romania"
  },
  "serviceType": ["Astrologie Natală", "Astrologie Relațională", "Astrologie Karmică", "Astrologie Previzională"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicii de Consiliere Astrologică",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Analiză Hartă Natală",
          "description": "Descifrarea potențialului personal și a drumului vieții prin prisma hărții cerului la momentul nașterii."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sinastrie și Relații",
          "description": "Studiul compatibilității și dinamicii dintre două persoane pentru o înțelegere mai profundă a relației."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Astrologie Karmică",
          "description": "Explorarea lecțiilor din trecut și a misiunii sufletului în această existență."
        }
      }
    ]
  }
};

export const metadata: Metadata = {
  title: "SoulMap – Astrologie Integrativă | Ședințe Online & Față în Față",
  description:
    "Descoperă cine ești cu adevărat prin astrologie natală, relațională și karmică. Programează o ședință personalizată cu SoulMap, online sau în persoană.",
  metadataBase: new URL("https://soulmap-astrology.vercel.app"),
  alternates: {
    canonical: "https://soulmap-astrology.vercel.app",
  },
  openGraph: {
    title: "SoulMap – Astrologie Integrativă | Ședințe Online & Față în Față",
    description:
      "Descoperă cine ești cu adevărat prin astrologie natală, relațională și karmică. Programează o ședință personalizată cu SoulMap, online sau în persoană.",
    url: "https://soulmap-astrology.vercel.app",
    siteName: "SoulMap",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "https://soulmap-astrology.vercel.app/design-nou/logo/logo-restilizat.png",
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
    images: ["https://soulmap-astrology.vercel.app/design-nou/logo/logo-restilizat.png"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CelestialParallax />
        <Navbar />
        {children}
        
        {/* SVG filter for removing dark backgrounds from logos */}
        <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
          <filter id="remove-dark">
            <feColorMatrix 
              type="matrix" 
              values="1 0 0 0 0 
                      0 1 0 0 0 
                      0 0 1 0 0 
                      40 40 40 0 -11.5"
            />
          </filter>
        </svg>

        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}

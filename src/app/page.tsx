"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Hero from "@/components/Hero";
import Image from "next/image";
import JungQuote from "@/components/JungQuote";
import SpecializationsCarousel from "@/components/SpecializationsCarousel";
import MethodSteps from "@/components/MethodSteps";
import { PersonalPlanets } from "@/components/PlanetaryCards";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";
import FAQ from "@/components/FAQ";


function PortalSection({
  id,
  bgImage,
  bgBlur,
  className = "min-h-[100vh]",
  innerPadding = "py-12 md:py-20", // Am adăugat acest prop pentru controlul spațiului
  children
}: {
  id: string;
  bgImage?: string;
  bgBlur?: string;
  className?: string;
  innerPadding?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.99]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative w-full flex flex-col justify-center bg-transparent ${className}`} // Am scos overflow-hidden de aici pentru a permite suprapunerea
    >
      {bgImage && (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className={`absolute inset-0 portal-bg ${bgBlur ? bgBlur : ""}`}
            style={{
              scale: bgBlur ? 1.05 : 1
            }}
          >
            <Image
              src={bgImage.startsWith('/') ? bgImage : `/photo_transitions/${bgImage}`}
              alt=""
              fill
              className="object-cover"
              priority={id === "HeroAboutSection"}
              sizes="100vw"
            />
          </motion.div>
        </div>
      )}

      {/* Foreground Content */}
      <div className={`relative z-10 w-full h-full ${innerPadding}`}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ scale: contentScale }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="bg-transparent flex flex-col m-0 p-0 gap-0"
    >
      {/* SECTION 1: HERO + QUOTE */}
      <PortalSection id="HeroAboutSection" innerPadding="p-0"> 
        <div className="absolute inset-x-0 top-0 bottom-0 z-0 pointer-events-none">
          <Image
            src="/design-nou/foto/foto-hero.png"
            alt="SoulMap Hero Background"
            fill
            priority
            className="object-cover object-[70%_center] md:object-center opacity-80"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0213] via-[#0D0213]/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0b0e14] via-[#0b0e14]/40 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col pt-20 md:pt-32">
          <Hero />
          <div className="pb-20 md:pb-32 pt-10">
            <JungQuote />
          </div>
        </div>
      </PortalSection>

      {/* SECTION 2: CAROUSEL */}
      <PortalSection 
        id="CarouselSection" 
        className="min-h-0" 
        innerPadding="py-6 md:py-10"
      >
        <SpecializationsCarousel />
      </PortalSection>

      {/* SECTION 3: METHOD STEPS */}
      <PortalSection 
        id="MethodSection" 
        className="min-h-0" 
        innerPadding="py-6 md:py-10"
      >
        <MethodSteps />
      </PortalSection>

      {/* SECTION 4: ATLAS PLANETAR */}
      <PortalSection 
        id="PersonalPlanetsSection" 
        className="min-h-0"
        innerPadding="py-6 md:py-10"
      >
        <PersonalPlanets />
      </PortalSection>

      {/* SECTION 5: CONTACT & INFO */}
      <PortalSection id="contact" className="min-h-[100vh] pb-32">
        <Certifications />
        <Testimonials />
        <FAQ />
      </PortalSection>
    </motion.main>
  );
}
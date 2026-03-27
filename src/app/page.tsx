"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Hero from "@/components/Hero";
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
  isHero = false,
  children
}: {
  id: string;
  bgImage?: string;
  bgBlur?: string;
  className?: string;
  isHero?: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const contentScaleRange = prefersReducedMotion ? [1, 1] : [1, 0.99];
  const contentScale = useTransform(scrollYProgress, [0, 1], contentScaleRange);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative w-full overflow-hidden flex flex-col justify-center bg-transparent ${className}`}
    >
      {/* Background Layer without Mask Image so photos bleed fully to the edge */}
      {bgImage && (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat portal-bg ${bgBlur ? bgBlur : ""}`}
            style={{
              backgroundImage: bgImage.startsWith('/') ? `url('${bgImage}')` : `url('/photo_transitions/${bgImage}')`,
              scale: bgBlur ? 1.05 : 1 // Slight scale to hide blur bleeding edges
            }}
          />
        </div>
      )}

      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full py-12 md:py-20">
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
  const isAutoSnapping = useRef(false);
  const lastScrollY = useRef(0);

  // Custom Javascript Engine for strictly snapping sections after crossing 20%
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (typeof window === 'undefined') return;
    lastScrollY.current = window.scrollY;

    /* Snapping disabled as requested
    const handleScroll = () => {
      if (isAutoSnapping.current) return;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => snapLogic(), 150); // wait 150ms after user stops scrolling
    };

    const snapLogic = () => {
      // Logic removed for natural scroll
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
    */
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="bg-transparent flex flex-col m-0 p-0 gap-0"
    >
      <PortalSection id="HeroAboutSection" isHero>
        {/* Background Image (New Design) covering both Hero and Quote */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-[position:70%_center] md:bg-center bg-no-repeat opacity-80"
            style={{ backgroundImage: "url('/design-nou/foto/foto-hero.png')" }}
          />
          {/* Horizontal gradient for Hero text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0213] via-[#0D0213]/60 to-transparent" />
          
          {/* Vertical gradient to smoothly fade the bottom edge into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0D0213] via-[#0D0213]/70 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col">
          <Hero />
          <div className="pb-24 pt-10">
            <JungQuote />
          </div>
        </div>
      </PortalSection>

      <PortalSection id="CarouselSection">
        <SpecializationsCarousel />
      </PortalSection>

      <PortalSection id="PersonalPlanetsSection">
        <MethodSteps />
        <PersonalPlanets />
      </PortalSection>

      <PortalSection id="contact" className="min-h-[100vh] pb-32">
        <Certifications />
        <Testimonials />
        <FAQ />

      </PortalSection>
    </motion.main>
  );
}

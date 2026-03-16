"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import Hero from "@/components/Hero";
import JungQuote from "@/components/JungQuote";
import SpecializationsCarousel from "@/components/SpecializationsCarousel";
import MethodSteps from "@/components/MethodSteps";
import { PersonalPlanets, EvolutionPlanets } from "@/components/PlanetaryCards";
import Testimonials from "@/components/Testimonials";

function PortalSection({
  id,
  bgImage,
  className = "min-h-[100vh]",
  isHero = false,
  children
}: {
  id: string;
  bgImage: string;
  className?: string;
  isHero?: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Force constant opacity as requested
  const opacity = 1;
  
  // Subtle parallax strictly localized to this background layer
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  
  // Zoom parallax redus cu ~50% față de setarea anterioară
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.18, 0.82]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  // Disable background blur as requested
  const bgBlur = 0;
  const bgFilter = useMotionTemplate`blur(${bgBlur}px)`;

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative w-full overflow-hidden flex flex-col justify-center bg-transparent ${className}`}
    >
      {/* Background Layer with Mask Image to erase hard lines */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/photo_transitions/${bgImage}')`,
            y: bgY,
            scale: bgScale,
            filter: bgFilter,
            // SMOOTH TRANSITION: This creates a tighter fade to avoid expansive "shadows"
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)"
          }}
          initial={isHero ? { scale: 1.06, filter: "blur(16px)" } : { scale: 1.04, filter: "blur(14px)" }}
          animate={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </div>

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
      <PortalSection id="HeroAboutSection" bgImage="HeroAboutSection.png" isHero>
        <div className="pt-20">
          <Hero />
          <JungQuote />
        </div>
      </PortalSection>

      <PortalSection id="CarouselSection" bgImage="CarouselSection.png">
        <SpecializationsCarousel />
      </PortalSection>

      <PortalSection id="PersonalPlanetsSection" bgImage="PersonalPlanetsSection.png">
        <MethodSteps />
        <PersonalPlanets />
      </PortalSection>

      <PortalSection id="EvolutionPlanetsSection" bgImage="EvolutionPlanetsSection.png">
        <EvolutionPlanets />
      </PortalSection>

      <PortalSection id="ContactFooterSection" bgImage="ContactFooterSection.png" className="min-h-[100vh] pb-32">
        <Testimonials />
      </PortalSection>
    </motion.main>
  );
}

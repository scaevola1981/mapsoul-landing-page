"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  animate,
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

  // Fade both content and background gracefully to black near the edges
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.2, 1, 1, 0.2]);
  
  // Subtle parallax strictly localized to this background layer
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  
  // Aggressive zoom out effect on the wallpaper when scrolling down (and zoom in when scrolling up)
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.35, 0.65]);
  const bgBlur = useTransform(scrollYProgress, [0, 0.15, 1], [15, 5, 0]);
  const bgFilter = useMotionTemplate`blur(${bgBlur}px)`;

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{ opacity }}
      className={`relative w-full overflow-hidden flex flex-col justify-center ${className}`}
    >
      {/* Background Layer with Mask Image to erase hard lines */}
      <div className="absolute inset-0 -z-10 bg-black">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/photo_transitions/${bgImage}')`,
            y: bgY,
            scale: bgScale,
            filter: bgFilter,
            // TOP SECRET: This makes the top and bottom of the image fade out purely to transparent! 
            // It completely eliminates the "inconsistent hard box lines" between sections!
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
          }}
          initial={isHero ? { scale: 1.12, filter: "blur(16px)" } : { scale: 1.08, filter: "blur(14px)" }}
          animate={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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

    const handleScroll = () => {
      if (isAutoSnapping.current) return;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => snapLogic(), 150); // wait 150ms after user stops scrolling
    };

    const snapLogic = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      lastScrollY.current = currentScrollY;
      
      const sections = Array.from(document.querySelectorAll('section'));
      if (sections.length === 0) return;

      let targetSection: HTMLElement | null = null;
      const windowHeight = window.innerHeight;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.max(0, Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top));
        if (visibleHeight / windowHeight >= 0.95) return; // Ignore if almost perfectly centered already

        if (scrollingDown) {
           // Detect if the top of next section enters >20% into viewport from bottom
           if (rect.top > 0 && rect.top < windowHeight * 0.8) {
              targetSection = section;
              break;
           }
        } else {
           // Detect if the bottom of previous section enters >20% into viewport from top
           if (rect.bottom < windowHeight && rect.bottom > windowHeight * 0.2) {
              targetSection = section;
              break;
           }
        }
      }

      // Fallback: which section is currently the most visible?
      if (!targetSection) {
         let maxVisible = 0;
         for (const section of sections) {
            const rect = section.getBoundingClientRect();
            const visibleHeight = Math.max(0, Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top));
            if (visibleHeight > maxVisible) {
               maxVisible = visibleHeight;
               targetSection = section;
            }
         }
      }

      if (targetSection) {
         const rect = targetSection.getBoundingClientRect();
         const targetTop = (windowHeight / 2) - (rect.height / 2);
         // If we are more than 10 pixels away from perfect center
         if (Math.abs(rect.top - targetTop) > 10) {
            isAutoSnapping.current = true;
            const targetScrollY = currentScrollY + rect.top - targetTop;
            
            // Use Framer Motion's incredibly smooth physical spring animation instead of native jank
            animate(currentScrollY, targetScrollY, {
              type: "spring",
              stiffness: 70,
              damping: 15,
              mass: 0.8,
              onUpdate: (latest) => window.scrollTo(0, latest),
              onComplete: () => {
                isAutoSnapping.current = false;
                lastScrollY.current = window.scrollY;
              }
            });
         }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="bg-black flex flex-col m-0 p-0 gap-0"
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

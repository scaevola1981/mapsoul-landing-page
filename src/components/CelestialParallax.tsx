"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CelestialParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Gentle parallax: the background moves at about 15% of the scroll speed
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  
  return (
    <div 
      className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        style={{ 
          y,
          backgroundImage: "url('/images/hero_bg_celestial.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "120%", // Extra height to allow for translation without white gaps
          width: "100%",
          top: "-10%", // Centered initially
        }}
        className="absolute inset-0 opacity-80"
      >
        {/* Base Gradient Overlay for blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e14]/40 via-transparent to-[#0b0e14]/60" />
      </motion.div>
      
      {/* Static Subtle Color Accents */}
      <div className="absolute inset-0 bg-radial-gradient(circle at 30% 30%, rgba(199,138,167,0.1), transparent 50%)" />
    </div>
  );
}

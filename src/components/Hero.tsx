"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Connect to the page scroll to control hero parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Fade out and translate the indicator after scrolling 25% of the hero
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const indicatorY = useTransform(scrollYProgress, [0, 0.25], [0, 50]);

  // Parallax the right card (moves up slightly as you scroll down) and scales down
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full overflow-hidden px-6 pb-12 pt-20 md:pt-24"
    >
      {/* Animated Gradient Overlay moving on X */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(109,40,217,0.15) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Dark overlay to improve contrast against bright background areas */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[#0b0e14]/30" />
      {/* Background handled by global transitions */}

      {/* ── Split-screen grid ── */}
      <div className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col items-center justify-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* ─── LEFT: Text ─── */}
        <div className="z-10 flex-1 text-center lg:text-left">
          {/* Badge */}

          {/* Headline */}
          <motion.h1
            initial={{ clipPath: "inset(100% 0 0 0)", y: 20 }}
            animate={{ clipPath: "inset(0 0 0 0)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 font-serif text-[41px] sm:text-[55px] lg:text-[69px] font-light leading-[1.05] tracking-wide"
            style={{
              backgroundImage: "linear-gradient(90deg, #000338ff, #8bbeb1, #8bbeb2)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Astrologie integrativă,{" "}
            <span className="relative inline-block overflow-hidden align-baseline">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block font-bold"
                style={{
                  backgroundImage: "linear-gradient(90deg, #0D0630, #8bbeb2)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                personalizată
              </motion.span>
            </span>{" "}
            <span className="whitespace-nowrap">pentru tine</span>
          </motion.h1>

          {/* Personal intro */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mb-6 space-y-4 text-[16px] leading-relaxed text-[#A5F3FC]/90 md:text-[17px]"
          >
            <p>
              Dacă ai ajuns aici, probabil ești un căutător de sensuri și de răspunsuri,un om care vrea să înțeleagă mai mult decât aparențele.
            </p>
            <p>
              La un moment dat în viață începem să ne punem întrebări:
            </p>
            <ul className="ml-1 space-y-2 text-[15px] lg:ml-4">
              {[
                "De ce trec prin aceste experiențe?",
                "Când se vor îmbunătăți lucrurile?",
                "Când voi câștiga mai mult?",
                "Care este scopul meu în viață?",
              ].map((q) => (
                <li key={q} className="flex items-start gap-2 font-bold italic text-[#A5F3FC]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9A4EAE]" />
                  {q}
                </li>
              ))}
            </ul>
            <p>
              Astrologia integrativă poate aduce lumină asupra acestor întrebări, oferind perspective prin interpretarea <strong>hărții natale</strong>, a <strong>hărții karmice</strong>, a <strong>tranzitelor</strong> și a <strong>revoluțiilor solare</strong>.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <motion.div whileHover={{ scale: 1.02, rotate: -1 }} whileTap={{ scale: 0.98 }}>
              <a
                href="https://wa.me/40752102281?text=Bun%C4%83%2C%20a%C8%99%20dori%20o%20programare%20(MapSoul)%20pentru%20..."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#9A4EAE] to-[#b066c9] px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-lg shadow-[#9A4EAE]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#9A4EAE]/40 hover:brightness-110"
              >
                Programează pe WhatsApp
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                <motion.span
                  className="absolute inset-0 z-10 w-full -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
              </a>

            </motion.div>
          </motion.div>

          {/* Micro-line */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 text-xs font-light tracking-widest text-[#ededed]/35"
          >

          </motion.p>
        </div>

        {/* ─── RIGHT: Visual ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          style={{ y: cardY, scale: cardScale }}
          className="relative z-10 w-full max-w-sm shrink-0 lg:max-w-md"
        >
          {/* Continuous Floating Container */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full relative"
          >
            {/* Organic shape container */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg h-[520px] sm:h-[560px]">
              {/* Background logo watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
                <Image
                  src="/logo.png"
                  alt=""
                  width={320}
                  height={320}
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>

              {/* Glass-blur frame with organic shape */}
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/[0.1] shadow-2xl shadow-[#6d28d9]/10">
                {/* Inner glass effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-[#6d28d9]/[0.04]" />

                {/* Main Client Photo - Marilena, Astrolog */}
                <Image
                  src="/foto-client/foto-client.png"
                  alt="MapSoul — Marilena, Astrolog"
                  fill
                  className="object-cover object-top opacity-100"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />

                {/* Bottom gradient fade */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0b0e14]/60 to-transparent" />
              </div>

              {/* Decorative glow ring */}

              <div
                className="pointer-events-none absolute -bottom-8 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full blur-[60px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(109,40,217,0.3) 0%, transparent 70%)",
                }}

              />

            </div>
          </motion.div>

          {/* Gold accent quote */}
          <div className="pointer-events-none absolute -inset-4 rounded-[3rem] border border-[#6d28d9]/10 opacity-50" />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-6 text-center text-sm font-medium italic text-[#A5F3FC]/70"
          >
            Sunt astrolog acreditat și student la psihologie. MapSoul este harta  sufletului tău, iar experiența mea te-ar putea ghida spre răspunsurile care aduc sens și direcție vieții tale.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-6 text-center text-sm  font-bold italic text-[#A5F3FC]/70"
          >
            &ldquo;Fiecare hartă este o poveste care merită ascultată cu
            răbdare și respect.&rdquo;
          </motion.p>
        </motion.div>
      </div>

      {/* ─── SCROLL INDICATOR ─── */}
      <motion.div
        style={{ opacity: indicatorOpacity, y: indicatorY }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#fff]/40">Scroll to discover</span>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-[#ededed]/20 p-1">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-[#E0AB76]"
          />
        </div>
        <motion.div
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={14} className="text-[#ededed]/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

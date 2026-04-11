"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const indicatorY = useTransform(scrollYProgress, [0, 0.25], [0, 50]);

  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="hero relative flex w-full items-center justify-center overflow-hidden px-4 pb-10 md:min-h-screen md:px-6 md:pb-12"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[#0b0e14]/40" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:gap-12 lg:flex-row lg:items-center">
          {/* ─── LEFT: Text Content ─── */}
          <div className="relative z-10 w-full text-center lg:max-w-xl lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="mb-3 inline-block text-[10px] font-bold tracking-[0.3em] text-[var(--npul-gold)] uppercase md:mb-4 md:text-[11px]">
                Înțelegere • Claritate • Direcție
              </span>
              <h1 className="font-serif font-medium tracking-tight text-[#f7f3ff] text-[clamp(30px,7vw,42px)] leading-[1.15] md:text-[72px] md:leading-[1.1] lg:text-[84px]">
                Hărți pentru <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--npul-gold)] via-[var(--npul-accent)] to-[#D47AFE] italic">
                  Sufletul Tău
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="mt-5 space-y-4 text-[14px] leading-relaxed text-[#ededed]/80 md:mt-8 md:space-y-6 md:text-[17px]"
            >
              <p>
                Există momente în care ai nevoie de o busolă interioară care să îți arate drumul.
              </p>
              <ul className="ml-1 space-y-1.5 text-[14px] md:space-y-2 md:text-[15px] lg:ml-4">
                {[
                  "De ce trec prin aceste experiențe?",
                  "Care este scopul meu în viață?",
                  "Când se vor îmbunătăți lucrurile?",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-2 font-bold italic text-[#A5F3FC]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--npul-accent)]" />
                    {q}
                  </li>
                ))}
              </ul>
              <p>
                Astrologia integrativă poate aduce lumină asupra acestor întrebări, oferind perspective prin interpretarea <strong>hărții tale unice</strong>.
              </p>
            </motion.div>

            {/* CTAs — stacked on mobile, row on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 flex flex-col items-stretch gap-3 md:mt-10 md:flex-row md:items-center md:gap-4 lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full md:w-auto">
                <a
                  href="https://wa.me/40752102281?text=Bun%C4%83%2C%20a%C8%99%20dori%20o%20programare%20(SoulMap)%20pentru%20..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--npul-accent)] px-8 py-4 text-base font-semibold tracking-wide text-white shadow-lg shadow-[var(--npul-accent)]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--npul-accent)]/40 hover:brightness-110 md:inline-flex md:w-auto md:text-sm md:min-h-[48px]"
                >
                  Programează pe WhatsApp
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* ─── RIGHT: Visual ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            style={{ y: cardY, scale: cardScale }}
            className="relative z-10 w-full max-w-xs shrink-0 sm:max-w-sm lg:max-w-md"
          >
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg h-[380px] sm:h-[480px] md:h-[520px] lg:h-[560px]">
              {/* Background logo watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
                <Image
                  src="/design-nou/logo/logo-restilizat.png"
                  alt=""
                  width={320}
                  height={320}
                  className="object-contain opacity-60"
                  style={{ filter: 'url(#remove-dark) contrast(1.1) brightness(1.1)' }}
                  aria-hidden="true"
                />
              </div>

              {/* Glass frame */}
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/[0.1] shadow-2xl md:rounded-[2.5rem]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-[#6d28d9]/[0.04]" />
                <Image
                  src="/design-nou/foto/foto-client.png"
                  alt="SoulMap — Marilena, Astrolog"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 80vw, 400px"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0b0e14]/60 to-transparent" />
              </div>

              <div className="absolute -right-6 -top-6 p-4 md:-right-8 md:-top-8">
                <Sparkles className="h-8 w-8 text-[var(--npul-gold)] opacity-20 md:h-12 md:w-12" />
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-4 text-center text-xs font-medium italic text-[#A5F3FC]/70 px-4 md:mt-8 md:text-sm"
            >
              Sunt astrolog acreditat si student la psihologie.SoulChart este harta sufletului tau, iar experienta mea te-ar putea ghida spre raspunsurile  care aduc sens si directie vietii tale            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-4 text-center text-xs font-medium italic text-[#A5F3FC]/70 px-4 md:mt-8 md:text-sm"
            >
              &ldquo;Fiecare hartă este o poveste care merită ascultată cu răbdare și respect.&rdquo;
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* ─── SCROLL INDICATOR (hidden on mobile) ─── */}
      <motion.div
        style={{ opacity: indicatorOpacity, y: indicatorY }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 pointer-events-none md:flex"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-[#ededed]/20 p-1">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-[#E0AB76]"
          />
        </div>
        <ChevronDown size={14} className="text-[#ededed]/40" />
      </motion.div>
    </section>
  );
}

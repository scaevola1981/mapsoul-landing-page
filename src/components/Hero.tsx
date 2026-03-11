"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[75vh] items-center justify-center overflow-hidden px-4 pb-4 pt-24 md:min-h-[80vh]">
      <div className="z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <Image
            src="/logo.png"
            alt="MapSoul Logo"
            width={150}
            height={150}
            className="object-contain"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 font-serif text-5xl font-light tracking-widest text-[#ededed] md:text-7xl lg:text-8xl"
          style={{ textShadow: "0 2px 10px rgba(255, 255, 255, 0.1)" }}
        >
          ASTROLOGIE INTEGRATIVĂ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-12 max-w-2xl text-lg font-light leading-relaxed text-[#ededed]/80 md:text-xl lg:text-2xl"
        >
          Combină tradiția astrologică cu psihologia și dezvoltarea personală
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <button className="glass-card group relative overflow-hidden rounded-full border border-[rgba(255,255,255,0.2)] bg-transparent px-8 py-4 font-medium tracking-wide text-[#ededed] transition-all duration-300 hover:border-[#e0ab76]/50 hover:bg-[#e0ab76]/10">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#e0ab76]">
              Descoperă-ți sinele autentic
            </span>
            <div className="absolute inset-0 -z-10 bg-[#e0ab76] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

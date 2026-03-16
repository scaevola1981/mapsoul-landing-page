"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function JungQuote() {
  return (
    <section className="relative w-full overflow-hidden px-6 py-6 md:py-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px", amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col items-center gap-6 rounded-2xl border border-[#e0ab76]/20 glass-card p-8 shadow-2xl shadow-black/30 sm:flex-row sm:gap-8 md:p-10"
        >
          {/* Soft glow */}
          <div
            className="pointer-events-none absolute -top-8 left-1/2 h-24 w-72 -translate-x-1/2 rounded-full opacity-30 blur-[60px]"
            style={{
              background:
                "radial-gradient(circle, rgba(224,171,118,0.4) 0%, transparent 70%)",
            }}
          />

          {/* Jung photo — circular */}
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-[#e0ab76]/30 shadow-lg sm:h-28 sm:w-28">
            <Image
              src="/foto carl jung/Carl-Jung.png"
              alt="Carl Jung"
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>

          {/* Quote */}
          <div className="relative text-center sm:text-left">
            <p className="mb-6 font-serif text-xl italic leading-relaxed md:text-2xl">
              &ldquo;În viziunea astrologiei integrative, cerul și psihicul uman se întâlnesc în simbolurile astrelor, deschizând o cale de cunoaștere și înțelegere de sine.&rdquo;
            </p>
            <p className="text-sm font-medium tracking-[0.2em] uppercase opacity-70">
              — Viziunea MapSoul
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

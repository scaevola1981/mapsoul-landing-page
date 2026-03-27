"use client";

import { motion } from "framer-motion";
import { Moon, Sun, Star, Orbit, Sparkles } from "lucide-react";

export function PersonalPlanets() {
  return (
    <div className="relative w-full px-6 py-6 md:py-10">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-4 font-serif text-[33px] font-bold text-[var(--npul-purple)] md:text-[53px] opacity-100">
            Planetele Personale — Fundamentul Identității
          </h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl leading-relaxed font-semibold text-[var(--npul-purple)] opacity-100"
            style={{
              backgroundImage: "linear-gradient(to right, var(--npul-accent), var(--npul-gold))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Nu sunt predicții, ci oglinzi simbolice care invită la reflecție.
          </p>
        </motion.div>

        {/* Cards grid — Bento Grid Layout with new photos */}
        <div className="grid-bento-layout mx-auto max-w-5xl">
          
          {/* Card 1: Natala (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            className="glass-card [grid-area:natala] flex flex-col items-center justify-center p-8 rounded-[32px] overflow-hidden relative min-h-[300px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"
              style={{ backgroundImage: "url('/design-nou/foto/astrologie-natala.png')" }}
            />
            <div className="relative z-10 text-center">
              <h3 className="mb-2 font-serif text-3xl font-bold">Astrologie Natală</h3>
              <p className="text-[#ededed]/90 max-w-sm mx-auto">
                Harta sufletului tău la momentul nașterii. Descoperă-ți potențialul, darurile și provocările fundamentale ale existenței tale.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Karmica */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            className="glass-card [grid-area:karmica] flex flex-col items-center justify-center p-8 rounded-[32px] overflow-hidden relative min-h-[300px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"
              style={{ backgroundImage: "url('/design-nou/foto/karma-sign.png')" }}
            />
            <div className="relative z-10 text-center">
              <h3 className="mb-2 font-serif text-2xl font-bold">Astrologie Karmică</h3>
              <p className="text-[#ededed]/90">
                Înțelege tiparele din trecut care îți modelează prezentul și misiunea în această viață.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Previzionala (Spans 2 columns on bottom) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            className="glass-card [grid-area:previzionala] flex flex-col items-center justify-center p-8 rounded-[32px] overflow-hidden relative min-h-[300px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"
              style={{ backgroundImage: "url('/design-nou/foto/astrologie-previzionala.png')" }}
            />
            <div className="relative z-10 text-center">
              <h3 className="mb-2 font-serif text-3xl font-bold">Astrologie Previzională</h3>
              <p className="text-[#ededed]/90 max-w-sm mx-auto">
                Anticipează ciclurile vieții și pregătește-te pentru tranzitele care urmează, folosind energia astrală în favoarea ta.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Revolutii Solare */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            className="glass-card [grid-area:revolutii] flex flex-col items-center justify-center p-8 rounded-[32px] overflow-hidden relative min-h-[300px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"
              style={{ backgroundImage: "url('/design-nou/foto/revolutii-solare.png')" }}
            />
            <div className="relative z-10 text-center">
              <h3 className="mb-2 font-serif text-2xl font-bold">Revoluții Solare</h3>
              <p className="text-[#ededed]/90">
                Află tema principală a anului tău personal de la o zi de naștere la alta.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

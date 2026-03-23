"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Cât durează o ședință și cum are loc?",
    a: "45–60 de minute, online pe Zoom sau față în față, în funcție de preferință.",
  },
  {
    q: "Ce primesc după ședință?",
    a: "Un rezumat cu principalele insight-uri și repere calendaristice discutate.",
  },
  {
    q: "Pot pune întrebări punctuale (carieră, relații)?",
    a: "Da, putem lucra pe întrebări specifice folosind harta natală, tranzite și, la nevoie, astrologie orară.",
  },
  {
    q: "Este astrologia predictivă?",
    a: "Nu în sens fatalist; lucrăm cu potențiale și momente oportune, nu cu verdicte.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(faqs[0].q);

  return (
    <section className="relative w-full px-6 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 font-serif text-[28px] md:text-[40px] font-bold text-[#9A4EAE]">
          Întrebări frecvente
        </h2>
        <div className="space-y-3">
          {faqs.map((item) => {
            const active = open === item.q;
            return (
              <div
                key={item.q}
                className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3"
              >
                <button
                  className="flex w-full items-center justify-between gap-3 text-left"
                  onClick={() => setOpen(active ? null : item.q)}
                  aria-expanded={active}
                >
                  <span className="font-semibold text-[#FFF]">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#FFF]/100 font-bold transition-transform ${active ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-2 text-sm text-[#ededed]/80 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

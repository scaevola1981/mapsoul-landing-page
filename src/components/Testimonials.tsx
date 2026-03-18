"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Claritate asupra direcției mele este mult mai mare. Știu ce pași să fac pentru a-mi urma intențiile și a crește.",
    name: "Andreea M.",
    city: "Cluj-Napoca",
  },
  {
    text: "Am primit claritate asupra energiei și oportunităților din viața mea. Acum știu cum să le privesc și să le folosesc în avantajul meu.",
    name: "Radu P.",
    city: "București",
  },
  {
    text: "O ședință de astrologie caldă și primitoare, unde am primit claritate, empatie și direcție — exact ce aveam nevoie",
    name: "Elena V.",
    city: "Ramnicu Valcea",
  },
  {
    text: "Mă așteptam la termeni greu de înțeles, dar totul a fost simplu, clar și prezentat ca o poveste. Pasiunea cu care Marilena explică face totul ușor și plăcut.",
    name: "Mihai D.",
    city: "Iași",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-serif text-[33px] font-bold text-[#9A4EAE] md:text-[53px] opacity-100">
            Experiente reale, in cuvintele lor
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px", amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-2xl border border-white/[0.07] glass-card p-6 transition-all duration-500 hover:border-[#e0ab76]/25 hover:bg-white/[0.05]"
            >
              {/* Quote icon */}
              <Quote
                size={20}
                className="mb-4 text-[#fff]/100"
                strokeWidth={1.5}
              />

              {/* Text */}
               <p className="mb-5 flex-1 text-[14px] leading-relaxed opacity-90">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-white/[0.06] pt-4">
                <p className="text-sm font-semibold opacity-90">
                  {t.name}
                </p>
                <p className="text-xs opacity-75">{t.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

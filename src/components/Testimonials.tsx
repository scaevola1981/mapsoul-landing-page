"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Am primit un calendar clar de acțiune, nu predicții vagi. Acum știu ce pași să fac și când să-i fac.",
    name: "Andreea M.",
    city: "Cluj-Napoca",
  },
  {
    text: "Marilena mi-a explicat tiparele fără fatalism. Am plecat cu un plan concret și o perspectivă nouă asupra relațiilor.",
    name: "Radu P.",
    city: "București",
  },
  {
    text: "Prima ședință de astrologie în care nu m-am simțit judecată. Claritate, empatie, direcție — exact ce aveam nevoie.",
    name: "Elena V.",
    city: "Timișoara",
  },
  {
    text: "Mi-a plăcut abordarea practică: nu \"ce se va întâmpla\", ci \"ce poți face\". Am aplicat sfaturile imediat.",
    name: "Mihai D.",
    city: "Iași",
  },
  {
    text: "Am regăsit în hartă exact acele răspunsuri pe care sufletul meu le căuta. O experiență de o profunzime rară.",
    name: "Monica R.",
    city: "Râmnicu Vâlcea",
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
          <h2 className="mb-3 font-serif text-[33px] font-light text-[#BC8F8F] md:text-[53px] opacity-100">
            Ce Spun Cei Care Au Fost
          </h2>
          <p className="mx-auto max-w-xl text-base text-[#0b0e14]/60">
            Experiențe reale, în cuvintele lor.
          </p>
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
                className="mb-4 text-[#9A4EAE]/40"
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

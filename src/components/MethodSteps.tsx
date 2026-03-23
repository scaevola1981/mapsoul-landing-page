"use client";

import { motion } from "framer-motion";
import { MessageCircle, Map, Compass } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Consultare & Intenție",
    icon: MessageCircle,
    description:
      "Pornim de la întrebările tale reale. Stabilim împreună intenția ședinței și contextul pe care vrei să-l clarifici, fără grabă.",
  },
  {
    number: "02",
    title: "Hartă & Sinteză",
    icon: Map,
    description:
      "Descifrăm harta sufletului tău și evidențiem mesajele esențiale.",
  },
  {
    number: "03",
    title: "Integrare & Plan",
    icon: Compass,
    description:
      "Transformăm interpetarea în pași concreți pentru claritate și evoluție.",
  },
];

export default function MethodSteps() {
  return (
    <section
      id="metoda"
      className="relative w-full px-6 py-12 md:py-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center opacity-100"
        >
          <h2
            className="mb-4 font-serif text-[33px] font-bold md:text-[53px] opacity-100"
            style={{
              backgroundImage: "linear-gradient(to right, #9A4EAE, #D47AFE)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Metoda Mea
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg md:text-xl leading-relaxed font-semibold opacity-100"
            style={{
              backgroundImage: "linear-gradient(to right, #3a0446ff, #028ee6ff)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Trei pași simpli spre claritate și direcție.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px", amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative flex flex-col rounded-2xl border border-white/[0.08] glass-card p-7 transition-all duration-500 hover:border-[#6d28d9]/40 hover:bg-white/[0.06]"
              >
                {/* Glow on hover */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 0%, rgba(109,40,217,0.1) 0%, transparent 65%)",
                  }}
                />

                {/* Step number + icon row */}
                <div className="relative mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6d28d9]/15 text-[#e0ab76] transition-all duration-300 group-hover:bg-[#6d28d9]/25 group-hover:shadow-[0_0_24px_rgba(109,40,217,0.2)]">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-widest opacity-60">
                    PAS {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="relative mb-3 font-serif text-xl font-lg  tracking-wide text-[ #FFF] opacity-100 font-bold">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="relative text-sm leading-relaxed opacity-85">
                  {step.description}
                </p>

                {/* Decorative connector line (not on last card) */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-[#6d28d9]/30 to-transparent md:block" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

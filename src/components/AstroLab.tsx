"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronUp, Bell, ArrowRight, X } from "lucide-react";

/* ── Daily tip data (static for now — could become API-driven) ── */
const dailyTip = {
  planet: "Venus în Pești",
  tip: "O zi ideală pentru conexiuni autentice — lasă intuiția să te ghideze, nu rațiunea.",
  date: new Date().toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
  }),
};

export default function AstroLab() {
  const [isOpen, setIsOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <>
      {/* ─── Desktop: Sticky card, right side ─── */}
      <div className="fixed bottom-8 right-8 z-40 hidden md:block w-[300px]">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="astro-lab-glass relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0b0e14]/80 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl"
        >
          {/* Close button */}
          <button
            onClick={() => setDismissed(true)}
            className="absolute right-3 top-3 rounded-full p-1 text-[#ededed]/30 transition-colors hover:bg-white/[0.06] hover:text-[#ededed]/60"
            aria-label="Închide"
          >
            <X size={14} />
          </button>

          {/* Glow accent */}
          <div
            className="pointer-events-none absolute -top-12 left-1/2 h-24 w-48 -translate-x-1/2 rounded-full opacity-40 blur-[60px]"
            style={{
              background:
                "radial-gradient(circle, rgba(109,40,217,0.5) 0%, transparent 70%)",
            }}
          />

          {/* Header */}
          <div className="relative mb-4 flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#6d28d9]/20 text-[#e0ab76]">
              <Sparkles size={18} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-[#ededed]">
                Astro Lab
              </h4>
              <p className="text-[11px] text-[#ededed]/40">
                Sfatul zilei · {dailyTip.date}
              </p>
            </div>
          </div>

          {/* Daily tip */}
          <div className="relative mb-4 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3.5">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#6d28d9]/70">
              {dailyTip.planet}
            </p>
            <p className="text-[13px] leading-relaxed text-[#ededed]/70">
              {dailyTip.tip}
            </p>
          </div>

          {/* Actions */}
          <div className="relative flex items-center gap-3">
            <a
              href="#specializari"
              className="group inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#6d28d9] to-[#7c3aed] px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-[#6d28d9]/20 transition-all hover:brightness-110"
            >
              Vezi detalii
              <ArrowRight
                size={12}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <button className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#e0ab76]/70 transition-colors hover:text-[#e0ab76]">
              <Bell size={12} />
              Setează memento
            </button>
          </div>
        </motion.div>
      </div>

      {/* ─── Mobile: Fixed bottom bar ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden border-t border-white/[0.06] bg-[#0b0e14]/95 astro-lab-glass-mobile px-5 pb-5 pt-4"
            >
              {/* Tip */}
              <div className="mb-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
                <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#6d28d9]/70">
                  {dailyTip.planet}
                </p>
                <p className="text-[12px] leading-relaxed text-[#ededed]/70">
                  {dailyTip.tip}
                </p>
              </div>
              {/* Actions */}
              <div className="flex items-center gap-3">
                <a
                  href="#specializari"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#6d28d9] to-[#7c3aed] px-4 py-2.5 text-xs font-semibold text-white"
                >
                  Vezi detalii
                  <ArrowRight size={12} />
                </a>
                <button className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#e0ab76]/70">
                  <Bell size={12} />
                  Memento
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle bar */}
        <motion.button
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between border-t border-white/[0.08] bg-[#0b0e14]/95 astro-lab-glass-mobile px-5 py-3"
        >
          <div className="flex items-center gap-2.5">
            <Sparkles size={16} className="text-[#e0ab76]" />
            <span className="text-xs font-semibold tracking-wide text-[#ededed]">
              Astro Lab
            </span>
            <span className="text-[10px] text-[#ededed]/40">
              · Sfatul zilei
            </span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronUp size={16} className="text-[#ededed]/40" />
          </motion.div>
        </motion.button>
      </div>

      {/* ── Glass fallback for low-end mobile (no backdrop-blur support) ── */}
      <style jsx>{`
        @supports not ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px))) {
          .astro-lab-glass,
          .astro-lab-glass-mobile {
            background-color: rgba(11, 14, 20, 0.97) !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }
        }
      `}</style>
    </>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Heart, Infinity, Calendar, User, Eye, ChevronDown } from "lucide-react";

interface Specialization {
  id: string;
  title: string;
  icon: React.ElementType;
  shortDesc: string;
  longDesc: string;
}

const specializations: Specialization[] = [
  {
    id: "natala",
    title: "Astrologie Natală",
    icon: Star,
    shortDesc: "Harta natală - descrierea a cine ești tu cu adevărat.",
    longDesc:
      "Astrologia natală îți oferă ghidajul spre sinele tău autentic. Prin studiul hărții natale, înțelegi tiparele personalității, punctele forte și blocajele inconștiente. Este primul pas în dezvoltarea personală, oferindu-ți o oglindă clară asupra potențialului cu care ai venit în această lume.",
  },
  {
    id: "relationala",
    title: "Astrologie Relațională",
    icon: Heart,
    shortDesc: "Dinamica conexiunilor tale cu ceilalți.",
    longDesc:
      "Înțelege cum interacționezi cu partenerul, familia sau asociații de afaceri. Astrologia relațională (Sinastria și Harta Compusă) îți dezvăluie unde există armonie, de ce apar conflicte și cum puteți evolua împreună, transformând provocările în lecții de creștere comună.",
  },
  {
    id: "karmica",
    title: "Astrologie Karmică",
    icon: Infinity,
    shortDesc: "Bagajul sufletului și lecțiile neîncheiate.",
    longDesc:
      "Harta karmică, cu un focus pe Nodurile Lunare și planetele retrograde, îți arată de unde vine sufletul tău și încotro se îndreaptă. Descoperi tiparele repetitive din viețile trecute și misiunea pe care trebuie să o îndeplinești în viața actuală pentru a-ți elibera karma.",
  },
  {
    id: "previzionala",
    title: "Astrologie Previzională",
    icon: Calendar,
    shortDesc: "Tranzite, revoluții solare și cicluri temporale.",
    longDesc:
      "Această metodă nu ghicește viitorul, ci te ajută să navighezi conștient prin el. Analizând tranzitele curente și revoluția solară (harta anului tău), înțelegi ce tip de energie este activată în viața ta, când este momentul să acționezi și când este înțelept să ai răbdare.",
  },
  {
    id: "arhetipuri",
    title: "Arhetipuri",
    icon: User,
    shortDesc: "Modelele universale care îți modelează psyché-ul.",
    longDesc:
      "Inspirată de psihologia jungiană, această ramură decodează arhetipurile dominante din structura ta (Eroul, Înțeleptul, Magicianul etc.). Prin înțelegerea lor, înveți să integrezi fațetele umbrei și să activezi lumina fiecărui arhetip pentru o viață echilibrată și plină de sens.",
  },
  {
    id: "fizionomie",
    title: "Fizionomie (Face Keys)",
    icon: Eye,
    shortDesc: "Cunoașterea caracterului prin trăsăturile feței.",
    longDesc:
      "Fizionomia este arta de a 'citi' fața umană. Fiecare trăsătură poartă o informație despre personalitate, modul în care procesezi informațiile și felul în care comunici. În combinare cu astrologia, oferă un instrument puternic pentru autocunoaștere și îmbunătățirea relațiilor.",
  },
];

export default function SpecializationsGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="specializari" className="relative w-full px-6 pt-4 pb-24 md:pt-8 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-serif text-3xl font-light text-[#ededed] md:text-5xl">
            Sisteme de Cunoaștere
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#ededed]/70">
            Alege domeniul care te ghidează cel mai bine spre transformarea ta interioară.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specializations.map((spec, index) => {
            const isExpanded = expandedId === spec.id;
            const Icon = spec.icon;

            return (
              <motion.div
                key={spec.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card flex h-fit flex-col overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:border-[#6d28d9]/40"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6d28d9]/20 text-[#e0ab76]">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl font-medium tracking-wide text-[#ededed]">
                    {spec.title}
                  </h3>
                </div>

                <p className="mb-6 text-[15px] leading-relaxed text-[#ededed]/80">
                  {spec.shortDesc}
                </p>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto", marginBottom: 24 },
                        collapsed: { opacity: 0, height: 0, marginBottom: 0 },
                      }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-[rgba(255,255,255,0.1)] pt-4 text-[15px] leading-relaxed text-[#ededed]/70">
                        {spec.longDesc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => toggleExpand(spec.id)}
                  className="mt-auto flex w-full items-center justify-between rounded-lg bg-[rgba(255,255,255,0.05)] px-4 py-3 text-sm font-medium text-[#ededed] transition-colors hover:bg-[rgba(255,255,255,0.1)]"
                >
                  <span className="text-[#e0ab76]">{isExpanded ? "Închide detaliile" : "Citește mai mult"}</span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={18} className="text-[#ededed]/50" />
                  </motion.div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

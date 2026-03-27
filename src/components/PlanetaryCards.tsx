"use client";

import { motion } from "framer-motion";
import { Sun, Moon, Heart, Zap, ArrowUpDown, Shield, Waves, Leaf, ArrowRight } from "lucide-react";

const planetsData = [
  {
    categoryName: "Planete Personale",
    catNumber: "01",
    title: "Soarele",
    role: "Identitate",
    icon: Sun,
    desc: "Reprezintă esența vitală, egoul conștient și voința de a fi. Este nucleul în jurul căruia se organizează restul personalității.",
    action: "DETALII ARHETIPALE",
  },
  {
    categoryName: "Planete Personale",
    catNumber: "01",
    title: "Luna",
    role: "Emoție",
    icon: Moon,
    desc: "Guvernează instinctele, reacțiile emoționale și nevoia de securitate. Reflectă lumea interioară și amintirile subconștiente.",
  },
  {
    categoryName: "Planete Personale",
    catNumber: "01",
    title: "Venus",
    role: "Valori",
    icon: Heart,
    desc: "Arhetipul iubirii, al frumosului și al armoniei. Indică modul în care ne raportăm la relații și ce anume prețuim.",
  },
  {
    categoryName: "Planete Personale",
    catNumber: "01",
    title: "Marte",
    role: "Acțiune",
    icon: Zap,
    desc: "Forța motrice, curajul și dorința. Reprezintă modul în care ne afirmăm și cum ne luptăm pentru obiectivele noastre.",
  },
  {
    categoryName: "Planete Sociale",
    catNumber: "02",
    title: "Jupiter",
    role: "Expansiune",
    icon: ArrowUpDown,
    desc: "Marele benefic. Simbolizează creșterea, optimismul, credința și căutarea sensului suprem. Este busola noastră morală și spirituală.",
    bullets: ["NOROC ȘI ABUNDENȚĂ", "FILOZOFIE DE VIAȚĂ"],
    highlight: true,
  },
  {
    categoryName: "Planete Sociale",
    catNumber: "02",
    title: "Saturn",
    role: "Structură",
    icon: Shield,
    desc: "Lordul Karmei. Reprezintă disciplina, responsabilitatea, limitele și lecțiile de viață necesare pentru maturizarea sufletului.",
  },
  {
    categoryName: "Transpersonale",
    catNumber: "03",
    title: "Uranus",
    role: "Inovație",
    icon: Zap,
    desc: "Scânteia geniului și a revoltei. Guvernează schimbările bruște, originalitatea și eliberarea de sub rigorile tradiției.",
  },
  {
    categoryName: "Transpersonale",
    catNumber: "03",
    title: "Neptun",
    role: "Transcendență",
    icon: Waves,
    desc: "Lumea viselor, a misticismului și a dizolvării granițelor. Reprezintă compasiunea universală și inspirația artistică divină.",
  },
  {
    categoryName: "Transpersonale",
    catNumber: "03",
    title: "Pluto",
    role: "Transformare",
    icon: Leaf,
    desc: "Moartea și renașterea. Guvernează procesele profunde de alchimie interioară, puterea personală și eliminarea a ceea ce este perimat.",
  },
];

export function PersonalPlanets() {
  return (
    <div className="relative w-full px-6 py-12 md:py-20 bg-transparent">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h2 className="mb-4 font-serif text-[32px] md:text-[42px] font-medium text-[#F8FAFC]" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
            Atlasul Planetar
          </h2>
          <p className="max-w-xl text-[13px] md:text-[14px] leading-relaxed text-[#F8FAFC]/80">
            Fiecare corp ceresc reprezintă o funcție psihologică specifică. Înțelegerea lor
            este cheia către o viață trăită conștient.
          </p>
        </div>

        {/* 3x3 Flat Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {planetsData.map((planet, index) => (
            <Card key={planet.title} {...planet} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({
  title,
  role,
  icon: Icon,
  desc,
  action,
  bullets,
  highlight,
  categoryName,
  catNumber,
  index,
}: {
  title: string;
  role: string;
  icon: any;
  desc: string;
  action?: string;
  bullets?: string[];
  highlight?: boolean;
  categoryName: string;
  catNumber: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.01 }}
      className={`glass-card relative flex flex-col rounded-xl p-6 transition-all duration-300 ${
        highlight
          ? "border-[var(--npul-gold)]/30 shadow-[0_0_20px_rgba(233,195,73,0.08)] bg-[#2a1b38]/40"
          : "border-white/[0.04] hover:border-white/[0.08] bg-[#1a1124]/40"
      }`}
    >
      <div className="mb-5 flex items-start justify-between">
        <Icon size={18} className="text-[var(--npul-gold)]" strokeWidth={2.5} />
        <span className="text-[9px] uppercase tracking-[0.15em] text-[#F8FAFC]/50">
          {role}
        </span>
      </div>
      
      <div className="mb-3">
        <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--npul-gold)]/80 flex items-center gap-1.5 mb-1.5">
          <span className="opacity-50">{catNumber}</span> {categoryName}
        </span>
        <h4 className="font-serif text-[20px] tracking-wide text-[#F8FAFC]" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
          {title}
        </h4>
      </div>
      
      <p className="text-[12px] flex-1 leading-[1.6] text-[#F8FAFC]/70">
        {desc}
      </p>

      {bullets && (
        <ul className="mt-4 space-y-2.5">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-[8px] tracking-[0.1em] text-[var(--npul-gold)] uppercase font-semibold">
              <div className="h-1 w-1 rounded-full bg-[var(--npul-gold)]/80" />
              {b}
            </li>
          ))}
        </ul>
      )}

      {action && (
        <div className="mt-5 flex items-center gap-1.5 text-[8.5px] font-bold tracking-[0.15em] text-[var(--npul-accent)] hover:text-[var(--npul-accent)]/80 transition-colors uppercase w-fit cursor-pointer">
          {action}
          <ArrowRight size={10} strokeWidth={2.5} />
        </div>
      )}
    </motion.div>
  );
}

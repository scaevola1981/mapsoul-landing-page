"use client";

import { motion } from "framer-motion";
import { Sun, Moon, Heart, Zap, ArrowUpDown, Shield, Waves, Leaf, ArrowRight } from "lucide-react";

export function PersonalPlanets() {
  return (
    <div className="relative w-full px-6 py-12 md:py-20 bg-transparent">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h2 className="mb-4 font-serif text-[32px] md:text-[42px] font-medium text-[var(--npul-purple)]">
            Atlasul Planetar
          </h2>
          <p className="max-w-xl text-[13px] md:text-[14px] leading-relaxed text-[var(--npul-purple)]/80">
            Fiecare corp ceresc reprezintă o funcție psihologică specifică. Înțelegerea lor
            este cheia către o viață trăită conștient.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Column 1: Planete Personale */}
          <div className="flex flex-col gap-4">
            <h3 className="mb-4 font-serif text-[22px] font-medium text-[var(--npul-accent)] flex items-center gap-3">
              <span className="text-[12px] text-[var(--npul-gold)] font-sans">01</span>
              Planete Personale
            </h3>
            <Card
              title="Soarele"
              role="Identitate"
              icon={Sun}
              desc="Reprezintă esența vitală, egoul conștient și voința de a fi. Este nucleul în jurul căruia se organizează restul personalității."
              action="DETALII ARHETIPALE"
            />
            <Card
              title="Luna"
              role="Emoție"
              icon={Moon}
              desc="Guvernează instinctele, reacțiile emoționale și nevoia de securitate. Reflectă lumea interioară și amintirile subconștiente."
            />
            <Card
              title="Venus"
              role="Valori"
              icon={Heart}
              desc="Arhetipul iubirii, al frumosului și al armoniei. Indică modul în care ne raportăm la relații și ce anume prețuim."
            />
            <Card
              title="Marte"
              role="Acțiune"
              icon={Zap}
              desc="Forța motrice, curajul și dorința. Reprezintă modul în care ne afirmăm și cum ne luptăm pentru obiectivele noastre."
            />
          </div>

          {/* Column 2: Planete Sociale */}
          <div className="flex flex-col gap-4 mt-8 md:mt-0">
            <h3 className="mb-4 font-serif text-[22px] font-medium text-[var(--npul-accent)] flex items-center gap-3">
              <span className="text-[12px] text-[var(--npul-gold)] font-sans">02</span>
              Planete Sociale
            </h3>
            <Card
              title="Jupiter"
              role="Expansiune"
              icon={ArrowUpDown}
              desc="Marele benefic. Simbolizează creșterea, optimismul, credința și căutarea sensului suprem. Este busola noastră morală și spirituală."
              bullets={["NOROC ȘI ABUNDENȚĂ", "FILOZOFIE DE VIAȚĂ"]}
              highlight
            />
            <Card
              title="Saturn"
              role="Structură"
              icon={Shield}
              desc="Lordul Karmei. Reprezintă disciplina, responsabilitatea, limitele și lecțiile de viață necesare pentru maturizarea sufletului."
            />
          </div>

          {/* Column 3: Transpersonale */}
          <div className="flex flex-col gap-4 mt-8 md:mt-0">
            <h3 className="mb-4 font-serif text-[22px] font-medium text-[var(--npul-accent)] flex items-center gap-3">
              <span className="text-[12px] text-[var(--npul-gold)] font-sans">03</span>
              Transpersonale
            </h3>
            <Card
              title="Uranus"
              role="Inovație"
              icon={Zap}
              desc="Scânteia geniului și a revoltei. Guvernează schimbările bruște, originalitatea și eliberarea de sub rigorile tradiției."
            />
            <Card
              title="Neptun"
              role="Transcendență"
              icon={Waves}
              desc="Lumea viselor, a misticismului și a dizolvării granițelor. Reprezintă compasiunea universală și inspirația artistică divină."
            />
            <Card
              title="Pluto"
              role="Transformare"
              icon={Leaf}
              desc="Moartea și renașterea. Guvernează procesele profunde de alchimie interioară, puterea personală și eliminarea a ceea ce este perimat."
            />
          </div>
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
}: {
  title: string;
  role: string;
  icon: any;
  desc: string;
  action?: string;
  bullets?: string[];
  highlight?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className={`glass-card relative flex flex-col rounded-xl p-6 transition-all duration-300 ${
        highlight
          ? "border-[var(--npul-gold)]/30 shadow-[0_0_20px_rgba(233,195,73,0.08)] bg-[#2a1b38]/40"
          : "border-white/[0.04] hover:border-white/[0.08] bg-[#1a1124]/40"
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <Icon size={18} className="text-[var(--npul-gold)]" strokeWidth={2.5} />
        <span className="text-[9px] uppercase tracking-[0.15em] text-[var(--npul-purple)]/50">
          {role}
        </span>
      </div>
      <h4 className="mb-3 font-serif text-[20px] tracking-wide text-[var(--npul-purple)]">
        {title}
      </h4>
      <p className="text-[12px] leading-[1.6] text-[var(--npul-purple)]/70">
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

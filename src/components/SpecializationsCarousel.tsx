"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Search,
  Users,
  Calendar,
  UserCircle,
  Eye,
  ArrowRight,
  Sun,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

/* ── data ── */

interface Specialization {
  id: string;
  title: string;
  icon: React.ElementType;
  image: string;
  shortDesc: string;
  quote?: string;
  author?: string;
  /** CSS grid-area name for the bento layout */
  area: string;
}

const specializations: Specialization[] = [
  {
    id: "natala",
    title: "Astrologie Natală",
    icon: Sparkles,
    image: "/design-nou/foto/astrologie-natala.png",
    shortDesc: "La naștere, poziția planetelor formează o configurație unică: Harta natală. Ea nu stabilește destinul, ci arată potențialul, tiparele vieții și ne ajută să privim experiențele cu mai multă conștientizare.",
    quote: "Cine privește în afară, visează; cine privește înăuntru, se trezește.",
    author: "Carl Jung",
    area: "natala",
  },

  {
    id: "karmica",
    title: "Astrologie Karmică",
    icon: Search,
    image: "/design-nou/foto/karma-sign.png",
    shortDesc:
      "Harta karmică îți arată tiparele și lecțiile pe care le porți din viețile trecute și darurile ascunse care te pot ghida acum. Este un ghid al sufletului, care te ajută să înțelegi cine ești cu adevărat și cum să trăiești mai liber, mai autentic și mai conștient.",
    quote: "Până nu vei aduce în conștient ceea ce este inconștient, acesta îți va ghida viața, iar tu îl vei numi destin.",
    author: "Carl Jung",
    area: "karmica",
  },
  {
    id: "previzionala",
    title: "Astrologie Previzională",
    icon: Calendar,
    image: "/design-nou/foto/astrologie-previzionala.png",
    shortDesc:
      "Harta previzionala  arată cum mișcarea planetelor în prezent influențează energiile din harta ta natală. Este ca un ghid al valurilor universului: unele perioade aduc oportunități și inspirație, altele provocări care te ajută să crești.",
    quote: "Ceea ce ignorăm persistă, iar ceea ce îmbrățișăm se transformă",
    author: "Carl Jung",
    area: "previzionala",
  },
  {
    id: "revolutii",
    title: "Revoluții solare",
    shortDesc: "Revoluția solară releva  aspectele și direcțiile importante pentru anul ce urmează. Calculată la revenirea Soarelui în poziția natală, ea evidențiază temele majore ale anului, schimbările, oportunitățile și provocările care te așteaptă între două aniversări. ",
    quote: "Eu nu sunt ceea ce mi s-a intamplat,sunt ceea ce aleg sa devin.",
    author: "Carl Jung",
    icon: Sun,
    image: "/design-nou/foto/revolutii-solare.png",
    area: "revolutii",
  },
];

/* ── single tile ── */

function BentoTile({
  spec,
  index,
}: {
  spec: Specialization;
  index: number;
}) {
  const Icon = spec.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px", amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.02 }}
      className="bento-tile group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl border border-white/[0.08] glass-card transition-all duration-500 hover:border-[var(--npul-purple)]/50"
      style={{ gridArea: spec.area }}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${spec.image})` }}
      />

      {/* Glass overlay on hover */}
      <div className="absolute inset-0 backdrop-blur-[0px] transition-all duration-500 group-hover:backdrop-blur-[4px]" />

      {/* Content */}
      <div className="relative z-10 p-5 md:p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-white/20">
            <Icon size={20} strokeWidth={1.5} />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg font-bold tracking-wide md:text-xl text-[var(--npul-purple)]">
          {spec.title}
        </h3>

        {/* Short desc */}
        <p className="mb-4 text-[13px] leading-relaxed md:text-sm font-semibold text-[var(--npul-purple)]">
          {spec.shortDesc}
        </p>

        {spec.quote && (
          <div className="mt-2 border-l-2 border-[var(--npul-gold)]/40 pl-3 italic">
            <p className="text-[12px] leading-tight text-[var(--npul-purple)]/90 md:text-[13px]">
              &ldquo;{spec.quote}&rdquo;
            </p>
            {spec.author && (
              <span className="mt-1 block text-[10px] not-italic opacity-60">
                — {spec.author}
              </span>
            )}
          </div>
        )}


      </div>
    </motion.div>
  );
}

export default function SpecializationsCarousel() {
  return (
    <section id="specializari" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image for the section */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-lighten"
        style={{ backgroundImage: "url('/design-nou/foto/foto-coperta.png')" }}
      />
      {/* Gradient mask to gracefully fade top and bottom edges into the main theme color */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0b0e14] via-transparent to-[#0b0e14]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center font-bold md:mb-20">
          <motion.h2
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 font-serif text-[33px] md:text-[53px]"
            style={{
              backgroundImage: "linear-gradient(to right, var(--npul-purple), var(--npul-accent))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Harti ale Sufletului
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl font-bold md:text-xl leading-relaxed font-semibold"
            style={{
              backgroundImage: "linear-gradient(to right, var(--npul-gold), var(--npul-accent))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              filter: "drop-shadow(0 4px 15px rgba(16, 16, 17, 0.4))",
            }}
          >
            Alege harta care te ghidează cel mai bine spre transformarea ta
            interioară.
          </motion.p>
        </div>

        {/* Bento Grid (Desktop) */}
        <div className="hidden md:grid-bento-layout md:grid bg-transparent">
          {specializations.map((spec, i) => (
            <BentoTile key={spec.id} spec={spec} index={i} />
          ))}
        </div>

        {/* Carousel (Mobile) */}
        <div className="block md:hidden font-bold text-[#2E4057]">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.2}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination]}
            className="pb-12"
          >
            {specializations.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <SwiperSlide key={spec.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="relative flex h-[340px] flex-col justify-end overflow-hidden rounded-2xl border border-white/[0.08] glass-card"
                  >
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${spec.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="relative z-10 p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08] text-white backdrop-blur-md">
                          <Icon size={40} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif text-lg font-medium">
                          {spec.title}
                        </h3>
                      </div>
                      <p className="mb-3 text-[13px] leading-relaxed">
                        {spec.shortDesc}
                      </p>

                      {spec.quote && (
                        <div className="mb-4 border-l-2 border-[var(--npul-gold)]/40 pl-3 italic">
                          <p className="text-[12px] leading-tight text-[var(--npul-gold)]/90">
                            &ldquo;{spec.quote}&rdquo;
                          </p>
                          {spec.author && (
                            <span className="mt-1 block text-[10px] not-italic opacity-60">
                              — {spec.author}
                            </span>
                          )}
                        </div>
                      )}
                      {/* <button className="mt-1 inline-flex w-fit items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-white">
                        Detalii
                        <ArrowRight size={13} />
                      </button> */}
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

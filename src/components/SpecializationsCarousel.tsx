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
  /** CSS grid-area name for the bento layout */
  area: string;
}

const specializations: Specialization[] = [
  {
    id: "natala",
    title: "Astrologie Natală",
    icon: Sparkles,
    image: "/cards-foto/astrologie-natala.png",
    shortDesc:
      "Harta natală dezvăluie cine ești cu adevărat — tipare, puncte forte și potențialul tău unic, pas esențial spre autocunoaștere.",
    area: "natala",
  },
  {
    id: "relationala",
    title: "Astrologie Relațională",
    icon: Users,
    image: "/cards-foto/astrologie-relationala.png",
    shortDesc:
      "Înțelege dinamica relațiilor tale prin analiză astrală: compatibilitate, conflicte ascunse și lecții de creștere în cuplu sau parteneriat.",
    area: "relationala",
  },
  {
    id: "karmica",
    title: "Astrologie Karmică",
    icon: Search,
    image: "/cards-foto/karmic-astrology.png",
    shortDesc:
      "Descoperă tiparele karmice și misiunea sufletului tău prin Nodurile Lunare, retrograde și lecțiile din viețile anterioare.",
    area: "karmica",
  },
  {
    id: "previzionala",
    title: "Astrologie Previzională",
    icon: Calendar,
    image: "/cards-foto/astrologie-previzionala.png",
    shortDesc:
      "Navighează conștient prin tranzite și revoluții solare — află când să acționezi și când să ai răbdare în ciclurile vieții.",
    area: "previzionala",
  },
  {
    id: "revolutii",
    title: "Revoluții solare",
    shortDesc: "Revoluția solară este harta anului tău personal. Ea oferă perspective asupra energiei și temelor care pot apărea.",
    icon: Sun,
    image: "/cards-foto/RevolutiiSoalre.png",
    area: "revolutii",
  },
  {
    id: "orara",
    title: "Astrologia Orară",
    shortDesc: "Răspunsuri precise la întrebări punctuale prin harta momentului exact pentru decizii importante din viață.",
    icon: Eye,
    image: "/cards-foto/astrology-orara.png",
    area: "orara",
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
      className="bento-tile group relative flex h-full min-h-[260px] flex-col justify-end overflow-hidden rounded-2xl border border-white/[0.08] glass-card transition-all duration-500 hover:border-[#6d28d9]/50"
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
        <h3 className="font-serif text-lg font-medium tracking-wide md:text-xl">
          {spec.title}
        </h3>

        {/* Short desc */}
        <p className="text-[13px] leading-relaxed md:text-sm">
          {spec.shortDesc}
        </p>

       
      </div>
    </motion.div>
  );
}

export default function SpecializationsCarousel() {
  return (
    <section id="specializari" className="relative py-20 md:py-32">
      <div className="container relative mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 font-serif text-[33px] md:text-[53px] font-medium tracking-tight text-[#BC8F8F] opacity-100"
          >
            Sisteme de Cunoaștere
          </motion.h2>
          <motion.p
            initial={{ opacity: 100, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-sm leading-relaxed text-[#0b0e14]/70 md:text-base"
          >
            Alege domeniul care te ghidează cel mai bine spre transformarea ta
            interioară.
          </motion.p>
        </div>

        {/* Bento Grid (Desktop) */}
        <div className="hidden md:grid-bento-layout md:grid">
          {specializations.map((spec, i) => (
            <BentoTile key={spec.id} spec={spec} index={i} />
          ))}
        </div>

        {/* Carousel (Mobile) */}
        <div className="block md:hidden">
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
                          <Icon size={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif text-lg font-medium">
                          {spec.title}
                        </h3>
                      </div>
                      <p className="text-[13px] leading-relaxed">
                        {spec.shortDesc}
                      </p>
                      <button className="mt-1 inline-flex w-fit items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-white">
                        Detalii
                        <ArrowRight size={13} />
                      </button>
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

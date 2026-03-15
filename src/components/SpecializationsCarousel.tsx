"use client";

import { motion } from "framer-motion";
import {
  Star,
  Heart,
  Infinity,
  Calendar,
  User,
  Eye,
  ArrowRight,
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
    icon: Star,
    image: "/cards-foto/astrologie-natala.png",
    shortDesc:
      "Harta natală dezvăluie cine ești cu adevărat — tipare, puncte forte și potențialul tău unic, pas esențial spre autocunoaștere.",
    area: "natala",
  },
  {
    id: "relationala",
    title: "Astrologie Relațională",
    icon: Heart,
    image: "/cards-foto/astrologie-relationala.png",
    shortDesc:
      "Înțelege dinamica relațiilor tale prin analiză astrală: compatibilitate, conflicte ascunse și lecții de creștere în cuplu sau parteneriat.",
    area: "relationala",
  },
  {
    id: "karmica",
    title: "Astrologie Karmică",
    icon: Infinity,
    image: "/cards-foto/astrologie-karmica.png",
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
    id: "arhetipuri",
    title: "Arhetipuri",
    icon: User,
    image: "/cards-foto/astrologie-arhetipuri.png",
    shortDesc:
      "Decodifică arhetipurile dominante din structura ta psihică — Eroul, Înțeleptul, Magicianul — și integrează umbra cu lumina.",
    area: "arhetipuri",
  },
  {
    id: "orara",
    title: "Astrologia Orară",
    icon: Eye,
    image: "/cards-foto/fizionomie.png",
    shortDesc:
      "Răspunsuri precise la întrebări punctuale prin harta momentului exact — claritate imediată pentru decizii importante din viață.",
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px", amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.02 }}
      className="bento-tile group relative flex h-full min-h-[260px] flex-col justify-end overflow-hidden rounded-2xl border border-white/[0.08] transition-all duration-500 hover:border-[#6d28d9]/50"
      style={{ gridArea: spec.area }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute inset-0 z-0"
      >
        {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url('${spec.image}')` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 transition-colors duration-500 group-hover:from-black/85 group-hover:via-black/55" />

      {/* Glow effect on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(109,40,217,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Glass overlay on hover */}
      <div className="absolute inset-0 backdrop-blur-[0px] transition-all duration-500 group-hover:backdrop-blur-[3px]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3 p-5 md:p-6">
        {/* Icon */}
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.08] text-[#e0ab76] shadow-inner backdrop-blur-md transition-all duration-300 group-hover:bg-[#6d28d9]/25 group-hover:shadow-[0_0_20px_rgba(109,40,217,0.2)]">
          <Icon size={22} strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg font-medium tracking-wide text-[#ededed] md:text-xl">
          {spec.title}
        </h3>

        {/* Description */}
        <p className="text-[13px] leading-relaxed text-[#ededed]/70 md:text-sm">
          {spec.shortDesc}
        </p>

        {/* Details button */}
        <button className="mt-1 inline-flex w-fit items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#e0ab76] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
          Detalii
          <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}

/* ── main section ── */

export default function SpecializationsCarousel() {
  return (
    <section
      id="specializari"
      className="relative w-full px-6 py-12 md:py-16 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 font-serif text-3xl font-light text-[#ededed] md:text-5xl">
            Sisteme de Cunoaștere
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#ededed]/60">
            Alege domeniul care te ghidează cel mai bine spre transformarea ta
            interioară.
          </p>
        </motion.div>

        {/* ── Desktop: Bento Grid ── */}
        <div
          className="hidden md:grid gap-4"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "auto auto auto",
            gridTemplateAreas: `
              "natala       natala       relationala  karmica"
              "previzionala arhetipuri   relationala  karmica"
              "previzionala arhetipuri   orara        orara"
            `,
          }}
        >
          {specializations.map((spec, i) => (
            <BentoTile key={spec.id} spec={spec} index={i} />
          ))}
        </div>

        {/* ── Mobile: Horizontal Swiper ── */}
        <div className="md:hidden">
          <Swiper
            slidesPerView={1.25}
            spaceBetween={14}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination]}
            className="!pb-12"
          >
            {specializations.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <SwiperSlide key={spec.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="relative flex h-[340px] flex-col justify-end overflow-hidden rounded-2xl border border-white/[0.08]"
                  >
                    {/* BG wrapper for float */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 z-0"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${spec.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col gap-3 p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08] text-[#e0ab76] backdrop-blur-md">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-lg font-medium text-[#ededed]">
                        {spec.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-[#ededed]/70">
                        {spec.shortDesc}
                      </p>
                      <button className="mt-1 inline-flex w-fit items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#e0ab76]">
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

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    shortDesc: "Harta karmică îți arată tiparele și lecțiile pe care le porți din viețile trecute și darurile ascunse care te pot ghida acum. Este un ghid al sufletului, care te ajută să înțelegi cine ești cu adevărat și cum să trăiești mai liber, mai autentic și mai conștient.",
    quote: "Până nu vei aduce în conștient ceea ce este inconștient, acesta îți va ghida viața, iar tu îl vei numi destin.",
    author: "Carl Jung",
    area: "karmica",
  },
  {
    id: "previzionala",
    title: "Astrologie Previzională",
    icon: Calendar,
    image: "/design-nou/foto/astrologie-previzionala.png",
    shortDesc: "Harta previzionala  arată cum mișcarea planetelor în prezent influențează energiile din harta ta natală. Este ca un ghid al valurilor universului: unele perioade aduc oportunități și inspirație, altele provocări care te ajută să crești.",
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
      className="bento-tile group relative flex h-full flex-col overflow-hidden rounded-[40px] border border-white/[0.08] glass-card transition-all duration-500 hover:border-[var(--npul-purple)]/50 shadow-2xl"
    >
      {/* Image background for card */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40"
        style={{ backgroundImage: `url(${spec.image})` }}
      />
      
      {/* Dark overlay for text visibility - blur handled by glass-card utility */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent transition-all duration-500 group-hover:h-full group-hover:bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-5 md:p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-white/20">
            <Icon size={20} strokeWidth={1.5} />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg font-bold tracking-wide md:text-xl text-[#F8FAFC]" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
          {spec.title}
        </h3>

        {/* Short desc */}
        <p className="mb-4 text-[13px] leading-relaxed md:text-sm font-semibold text-[#F8FAFC]/90" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}>
          {spec.shortDesc}
        </p>

        {spec.quote && (
          <div className="mt-auto border-l-2 border-[var(--npul-gold)]/40 pl-3 italic">
            <p className="text-[12px] leading-tight text-[#F8FAFC]/80 md:text-[13px]" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}>
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
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const nebulaY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const nebulaScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1.4, 1.2]);
  const stardustY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  return (
    <section
      id="specializari"
      ref={sectionRef}
      className="relative pt-12 md:pt-20 pb-12 md:pb-20 overflow-hidden"
    >


      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6 flex flex-col items-center">
        {/* Header */}
        <div className="mb-12 text-center font-bold md:mb-20">
          <motion.h2
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 font-serif text-[33px] md:text-[53px]"
            style={{
              backgroundImage: "linear-gradient(to right, #F8FAFC, var(--npul-accent))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.3))"
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
              backgroundImage: "linear-gradient(to right, #F8FAFC, var(--npul-gold))",
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
        <div className="hidden md:flex justify-center w-full">
          <div className="grid-bento-layout grid bg-transparent w-full max-w-7xl">
            {specializations.map((spec, i) => (
              <BentoTile key={spec.id} spec={spec} index={i} />
            ))}
          </div>
        </div>

        {/* Carousel (Mobile) */}
        <div className="block md:hidden w-full overflow-hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={"auto"}
            centeredSlides={false}
            grabCursor={true}
            observer={true}
            observeParents={true}
            modules={[FreeMode, Pagination]}
            pagination={{ clickable: true }}
            className="mobile-swiper w-full pb-14"
          >
            {specializations.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <SwiperSlide key={spec.id} style={{ width: "85%", maxWidth: "340px" }}>
                  <div
                    className="relative flex h-[380px] flex-col overflow-hidden rounded-[40px] border border-white/[0.08] glass-card shadow-2xl"
                  >
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center opacity-40"
                      style={{ backgroundImage: `url(${spec.image})` }}
                    />
                    {/* Dark overlay for text visibility - blur handled by glass-card utility */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

                    <div className="relative z-10 flex h-full flex-col p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08] text-white backdrop-blur-md">
                          <Icon size={40} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif text-lg font-medium text-[#F8FAFC]">
                          {spec.title}
                        </h3>
                      </div>
                      <p className="mb-3 text-[13px] leading-relaxed text-[#F8FAFC]/90">
                        {spec.shortDesc}
                      </p>

                      {spec.quote && (
                        <div className="mb-4 mt-auto border-l-2 border-[var(--npul-gold)]/40 pl-3 italic">
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
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

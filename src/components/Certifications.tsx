"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, ArrowRight } from "lucide-react";

const certificates = [
  {
    file: "/certificates/natala.jpeg",
    title: "Astrologie Natală",
    issuer: "Școala de Științe Spirituale Barbara Băcăuanu",
    date: "01.07.2024",
  },
  {
    file: "/certificates/relationala.jpeg",
    title: "Astrologie Relațională",
    issuer: "Școala de Științe Spirituale Barbara Băcăuanu",
    date: "01.07.2024",
  },
  {
    file: "/certificates/karmica.jpg",
    title: "Astrologie Karmică",
    issuer: "Școala de Științe Spirituale Barbara Băcăuanu",
    date: "01.07.2024",
  },
  {
    file: "/certificates/previzionala.jpeg",
    title: "Astrologie Previzională",
    issuer: "Școala de Științe Spirituale Barbara Băcăuanu",
    date: "01.07.2024",
  },
  {
    file: "/certificates/arhetipuri.jpeg",
    title: "Arhetipuri & Linii de destin ",
    issuer: "Școala de Științe Spirituale",
    date: "2024",
  },
];

export default function Certifications() {
  return (
    <section className="relative w-full px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h2 className="font-serif text-[30px] md:text-[44px] font-bold text-[#9A4EAE]">
              Certificări & Formări
            </h2>
            <p className="text-sm md:text-base text-[#b9d8f9ff]">
              Diplome reale, formare acreditată – transparență pentru clienți.
            </p>
          </div>
          <BadgeCheck className="hidden md:block h-10 w-10 text-[#E0AB76]" />
        </div>

        <div className="flex flex-wrap justify-center gap-6 pb-4">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.file}
              className="w-[280px] md:w-[320px] rounded-2xl border border-white/[0.08] glass-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="relative aspect-[4/3] w-full bg-black/30">
                <Image
                  src={cert.file}
                  alt={cert.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 320px"
                  onError={(e) => {
                    // fallback to logo if imaginea lipsă
                    (e.currentTarget as HTMLImageElement).src = "/logo.png";
                  }}
                />
              </div>
              <div className="p-4 space-y-2 text-sm">
                <p className="font-semibold text-[#b9d8f9ff]">{cert.title}</p>
                <p className="text-[#ededed]/80">{cert.issuer}</p>
                <div className="flex items-center gap-2 text-xs text-[#ededed]/60">
                  <ArrowRight size={14} /> {cert.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

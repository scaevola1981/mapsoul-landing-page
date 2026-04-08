"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Sparkles } from "lucide-react";

export default function Certifications() {
  return (
    <section className="relative w-full px-6 py-16 md:py-24 bg-transparent">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 block text-[10px] font-bold tracking-[0.2em] text-[var(--npul-gold)] uppercase">
            Excelență Academică și Spirituală
          </span>
          <h2 className="mb-6 font-serif text-[32px] md:text-[46px] font-medium text-[var(--npul-purple)]">
            Certificări & Formări
          </h2>
          <p className="mx-auto max-w-2xl text-[13px] md:text-[14px] leading-relaxed text-[var(--npul-purple)]/80">
            O călătorie de studiu continuu, integrând psihologia profunzimilor cu 
            înțelepciunea ancestrală a astrelor pentru a oferi o ghidare de o precizie impecabilă.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-16 md:gap-y-20">
          {/* Card Wrapper for grid consistency */}
          {[
            { title: "ASTROLOGIE NATALĂ", delay: 0.1, img: "natala.png", stars: true },
            { title: "ASTROLOGIE KARMICĂ", delay: 0.2, img: "astrologie-karmica.png", stars: true },
            { title: "ASTROLOGIE PREVIZIONALĂ", delay: 0.3, img: "previzionala.png", stars: false },
            { title: "ASTROLOGIE RELAȚIONALĂ", delay: 0.4, img: "relationala.png", stars: false },
            { title: "ASTROLOGIA ORARĂ", delay: 0.6, img: "orara.png", stars: true },
            { title: "ARHETIPURI ȘI LINII DE DESTIN", delay: 0.5, img: "arhetipuri.png", stars: true },
            { title: "ASTROLOGIA KARMICĂ", delay: 0.7, img: "karmica1.png", stars: true },
          ].map((cert, idx) => (
            <div key={idx} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] text-center">
              <CertCard 
                className="h-[280px] sm:h-[240px] md:h-[260px] mb-6 md:mb-8" 
                delay={cert.delay}
                style={{ backgroundImage: `url('/certificates/${cert.img}')` }}
                hasStars={cert.stars}
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: cert.delay + 0.2 }}
                className="flex flex-col gap-1.5"
              >
                <h3 className="font-serif text-[12px] md:text-[12px] font-bold leading-[1.4] text-[var(--npul-gold)]">
                  {cert.title}
                </h3>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Garantia Calitatii */}
        <div className="mt-28">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[var(--npul-gold)]/10">
              <BadgeCheck className="h-8 w-8 text-[var(--npul-gold)]" fill="currentColor" stroke="#1a1124" />
            </div>
            <h3 className="font-serif text-[28px] md:text-[32px] font-medium text-[var(--npul-purple)] mb-14">
              Garanția Calității
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Feature 
              title="ACREDITARE" 
              desc="Formări recunoscute și studii aprofundate în cadrul unor școli de renume, oferind o bază solidă interpretărilor oferite." 
            />
            <Feature 
              title="ETICĂ" 
              desc="Confidențialitate deplină și o abordare empatică, ghidată de principii de integritate și profesionalism în fiecare sesiune." 
            />
            <Feature 
              title="DEDICARE" 
              desc="Studiu permanent al dinamicii planetare și perfecționarea continuă a metodelor de analiză pentru a asigura o interpretare precisă și pertinentă." 
            />
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-24 text-center">
          <p className="font-serif text-[18px] md:text-[20px] italic text-[var(--npul-purple)]/90 font-light">
            "Cunoașterea fără metodă este rătăcire, iar metoda fără suflet este ariditate."
          </p>
        </div>
      </div>
    </section>
  );
}

function CertCard({
  className = "",
  style,
  overlay,
  delay = 0,
  hasStars = false,
}: {
  className?: string;
  style?: React.CSSProperties;
  overlay?: string;
  delay?: number;
  hasStars?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      className={`group relative w-full overflow-hidden rounded-[32px] md:rounded-[40px] glass-card-solid border border-white/10 transition-all duration-500 shadow-2xl ${className}`}
    >
      {/* Gloss Reflection Layer */}
      <div className="absolute inset-0 z-[5] bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Bottom Contrast Gradient */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

      {/* Background Image Layer with scale effect */}
      {style && (
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center opacity-90" 
          style={style} 
        />
      )}
      
      {overlay && <div className={`absolute inset-0 z-[1] ${overlay}`} />}
      
      {hasStars && (
        <div className="absolute inset-0 z-[3] flex items-center justify-center pointer-events-none">
           <Sparkles className="h-24 w-24 text-[var(--npul-gold)] opacity-10 group-hover:opacity-20 transition-opacity duration-700" strokeWidth={0.5} />
        </div>
      )}

      {/* Hover Border Glow */}
      <div className="absolute inset-0 z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[40px] border-2 border-[var(--npul-gold)]/20 pointer-events-none" />
    </motion.div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex flex-col text-center md:text-left">
      <h4 className="mb-3 text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[var(--npul-accent)] uppercase">
        {title}
      </h4>
      <p className="text-[12px] md:text-[13px] leading-relaxed text-[var(--npul-purple)]">
        {desc}
      </p>
    </div>
  );
}

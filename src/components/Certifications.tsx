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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:grid-rows-3 gap-6 auto-rows-[220px]">
          {/* ASTROLOGIE NATALĂ - 1x1 */}
          <div className="md:col-span-1 md:row-span-1">
            <CertCard 
              title="ASTROLOGIE NATALĂ" 
              className="h-full bg-cover" 
              contentClass="items-end text-left justify-between flex-row px-10"
              textColor="text-[#fef503c0]"
              delay={0.1}
              style={{ backgroundImage: "url('/certificates/natala.png')" }}
              hasStars
              level="PROFESIONAL"
            />
          </div>

          {/* ASTROLOGIE KARMICĂ - 2x2 CENTERPIECE */}
          <div className="sm:col-span-2 md:row-span-3">
            <CertCard 
              title='ASTROLOGIE KARMICĂ' 
              className="h-full bg-cover" 
              delay={0.3}
              style={{ backgroundImage: "url('/certificates/karmica.png')" }}
              hasStars
              level="AVANSAT & SPIRITUAL"
              contentClass="items-end text-left justify-center p-10"
              textColor="text-[#fef503c0]"
              titleClass="text-[26px] md:text-[16px]"
            />
          </div>

          {/* ASTROLOGIE PREVIZIONALĂ - 1x1 */}
          <div className="sm:col-span-1 md:col-span-1 md:row-span-1">
            <CertCard 
              title="ASTROLOGIE PREVIZIONALĂ" 
              className="h-full bg-cover" 
              contentClass="items-end text-left justify-between flex-row px-12"
              textColor="text-[#fef503c0]"
              delay={0.4}
              style={{ backgroundImage: "url('/certificates/previzionala.png')" }}
              level="TEHNIC"
            />
          </div>

          {/* ASTROLOGIE RELAȚIONALĂ - 1x1 */}
          <div className="sm:col-span-1 md:col-span-1 md:row-span-2">
            <CertCard 
              title="ASTROLOGIE RELAȚIONALĂ" 
              className="h-full bg-cover" 
              contentClass="items-end text-left justify-between flex-row px-12"
              textColor="text-[#fef503c0]"
              delay={0.2}
              style={{ backgroundImage: "url('/certificates/relationala.png')" }}
              level="SINESTRIC"
            />
          </div>

          {/* ARHETIPURI ȘI LINII DE DESTIN - 1x1 */}
          <div className="sm:col-span-1 md:col-span-1 md:row-span-2">
            <CertCard 
              title='ARHETIPURI ȘI LINII DE DESTIN' 
              className="h-full bg-cover" 
              contentClass="items-end text-left justify-between flex-row px-12"
              textColor="text-[#fef503c0]"
              delay={0.5}
              style={{ backgroundImage: "url('/certificates/arhetipuri.png')" }}
              hasStars
              level="DESTIN"
            />
          </div>

          {/* ASTROLOGIA ORARĂ - 4x1 WIDE FOOTER */}
          <div className="sm:col-span-2 md:col-span-4 md:row-span-2">
            <CertCard 
              title='ASTROLOGIA ORARĂ'
              className="h-full bg-cover"
              textColor="text-[#fef503c0]"
              delay={0.6}
              hasStars
              contentClass="items-end text-left justify-between flex-row px-12"
              titleClass="text-[24px] md:text-[32px] text-left"
              style={{ backgroundImage: "url('/certificates/orara.png')" }}
              level="PRECIS"
            />
          </div>
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
  title,
  className = "",
  style,
  overlay,
  delay = 0,
  contentClass = "items-end text-left",
  titleClass = "text-[19px] md:text-[21px]",
  textColor = "text-[#F8FAFC]",
  hasStars = false,
  level = "",
}: {
  title: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  overlay?: string;
  delay?: number;
  contentClass?: string;
  titleClass?: string;
  textColor?: string;
  hasStars?: boolean;
  level?: string;
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
      className={`group relative h-full w-full overflow-hidden rounded-[32px] md:rounded-[40px] glass-card-solid border border-white/10 transition-all duration-500 shadow-2xl ${className}`}
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

      <div className={`relative z-10 flex h-full p-8 ${contentClass}`}>
        <div className="flex flex-col gap-2">
          {level && (
            <span className="text-[9px] font-bold tracking-[0.25em] text-[var(--npul-gold)]/80 uppercase mb-1">
              {level}
            </span>
          )}
          <h4 className={`font-serif font-medium leading-[1.2] ${textColor} ${titleClass}`} 
              style={{ textShadow: "0 4px 12px rgba(0,0,0,0.8)" }}>
            {title}
          </h4>
        </div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[40px] border-2 border-[var(--npul-gold)]/20 pointer-events-none" />
    </motion.div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex flex-col text-center md:text-left">
      <h5 className="mb-3 text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[var(--npul-accent)] uppercase">
        {title}
      </h5>
      <p className="text-[12px] md:text-[13px] leading-relaxed text-[var(--npul-purple)]">
        {desc}
      </p>
    </div>
  );
}

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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <CertCard 
              title="ASTROLOGIE NATALA " 
              className="h-[320px] bg-cover "
              textColor="text-[#c1b703ff]"
              style={{ backgroundImage: "url('/design-nou/foto/astrologie-natala-certificari.png')" }}
              overlay="bg-[#1a1124]/40"
              delay={0}
              contentClass="items-end text-left pb-8 pl-8"
            />
            {/* Card 4 */}
            <CertCard 
              title="ASTROLOGIE RELATIONALA" 
              className="h-[300px] bg-cover"
              textColor="text-[#c1b703ff]"
              style={{ backgroundImage: "url('/design-nou/foto/astrologie-relationala.png')" }}
              delay={0.1}
              contentClass="items-end text-left pb-8 pl-8"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 mt-6 md:mt-0">
            {/* Card 2 */}
            <CertCard 
              title= 'ASTROLOGIE KARMICA'
              className="h-[460px] bg-cover"
              textColor="text-[#c1b703ff]"
              style={{ backgroundImage: "url('/design-nou/foto/astrologie-karmica.png')" }}
              delay={0.2}
              contentClass="items-end justify-center text-center "
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 mt-6 md:mt-0">
            {/* Card 3 */}
            <CertCard 
              title="ASTROLOGIE PREVIZIONALA" 
              className="h-[240px] bg-cover"
              textColor="text-[#c1b703ff]"
              delay={0.3}
              contentClass="items-end text-center justify-center pb-8"
              style={{ backgroundImage: "url('/design-nou/foto/astrologie-previzionala-certificari.png')" }}
            />
            {/* Card 5 */}
            <CertCard 
              title='ARHETIPURI SI LINII DE DESTIN'
              className="h-[240px] bg-cover"
              textColor="text-[#c1b703ff]"
              delay={0.4}
              hasStars
              contentClass="items-center justify-center text-center "
              style={{ backgroundImage: "url('/design-nou/foto/astrologie-arhetipuri.png')" }}
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
              desc="Toate formările sunt recunoscute la nivel internațional de forurile profesionale de psihologie și astrologie." 
            />
            <Feature 
              title="ETICĂ" 
              desc="Practică bazată pe codul deontologic al Federației Europene a Psihologilor (EFPA)." 
            />
            <Feature 
              title="EVOLUȚIE" 
              desc="Peste 500 de ore de supervizare și formare continuă realizate anual pentru menținerea standardelor." 
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
  textColor = "text-[var(--npul-gold)]",
  hasStars = false,
}: {
  title: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  overlay?: string;
  delay?: number;
  contentClass?: string;
  textColor?: string;
  hasStars?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4 }}
      style={style}
      className={`relative w-full overflow-hidden rounded-xl glass-card border border-white/5 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.3)] ${className}`}
    >
      {overlay && <div className={`absolute inset-0 z-0 ${overlay}`} />}
      
      {hasStars && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <Sparkles className="h-20 w-20 text-[var(--npul-accent)] opacity-20" strokeWidth={1} />
        </div>
      )}

      <div className={`relative z-10 flex h-full p-6 ${contentClass}`}>
        <h4 className={`font-serif text-[19px] md:text-[21px] font-medium leading-[1.3] ${textColor}`}>
          {title}
        </h4>
      </div>
    </motion.div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex flex-col text-center md:text-left">
      <h5 className="mb-3 text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[var(--npul-accent)] uppercase">
        {title}
      </h5>
      <p className="text-[12px] md:text-[13px] leading-relaxed text-[var(--npul-purple)]/70">
        {desc}
      </p>
    </div>
  );
}

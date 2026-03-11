"use client";

import { motion } from "framer-motion";
import { Moon, Sun, Star } from "lucide-react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="despre-mine" className="relative w-full px-6 py-24 md:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute left-0 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-[#6d28d9]/10 blur-[100px]"></div>
      <div className="absolute right-0 top-3/4 h-96 w-96 translate-x-1/2 rounded-full bg-[#e0ab76]/10 blur-[100px]"></div>

      <div className="mx-auto max-w-6xl">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h2 className="mb-8 font-serif text-4xl font-light text-[#ededed] md:text-5xl">
            Despre Mine și Astrologia
          </h2>
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-[#ededed]/80">
            <p>
              Dacă ai ajuns aici, probabil ești un căutător de sensuri și de răspunsuri – un om care
              vrea să înțeleagă mai mult decât aparențele. 💫
            </p>
            <p>
              Memoria nu este doar o arhivă a trecutului. Ea păstrează experiențele care ne-au
              format – emoții, alegeri și tipare. Uneori, aceste tipare se repetă, iar noi ne
              întrebăm de ce. Din perspectivă astrologică, putem privi viața ca pe un proces de
              învățare și evoluție, în care experiențele au un sens și ne conduc spre o mai bună
              înțelegere a propriei naturi.
            </p>
            <p>
              Înțelegând memoria și simbolurile care ne influențează, putem descoperi sensuri, putem
              privi viața cu mai multă conștientizare și deveni mai conștienți de noi înșine.
            </p>
          </div>
        </motion.div>

        {/* The Planets Grid */}
        <div className="mb-32 grid gap-8 md:grid-cols-2">
          {/* Personal Planets */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card flex flex-col rounded-3xl p-8"
          >
            <h3 className="mb-6 flex items-center gap-3 font-serif text-2xl text-[#e0ab76]">
              <Sun className="h-6 w-6" /> Planete Personale
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="mb-2 font-medium text-[#ededed] flex items-center gap-2">
                  <Moon className="h-4 w-4 text-[#6d28d9]" /> Luna
                </h4>
                <ul className="list-inside list-disc space-y-1 text-[15px] text-[#ededed]/70">
                  <li>vorbește despre lumea interioară și emoții</li>
                  <li>arată nevoia de siguranță și felul în care simțim</li>
                  <li>reflectă tiparele din trecut care ne influențează</li>
                  <li>relația cu mama</li>
                </ul>
              </div>
              
              <div>
                <h4 className="mb-2 font-medium text-[#ededed] flex items-center gap-2">
                  <Sun className="h-4 w-4 text-[#e0ab76]" /> Soarele
                </h4>
                <ul className="list-inside list-disc space-y-1 text-[15px] text-[#ededed]/70">
                  <li>simbolizează identitatea și lumina personală</li>
                  <li>arată cine suntem și cum ne exprimăm</li>
                  <li>ne ajută să ne descoperim potențialul</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-[#ededed] flex items-center gap-2">
                  <Star className="h-4 w-4 text-[#6d28d9]" /> Venus
                </h4>
                <ul className="list-inside list-disc space-y-1 text-[15px] text-[#ededed]/70">
                  <li>vorbește despre relații și armonie</li>
                  <li>arată cum valorizăm iubirea și resursele</li>
                  <li>ne influențează felul în care ne conectăm cu ceilalți</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 border-t border-[rgba(255,255,255,0.1)] pt-4 text-sm italic text-[#ededed]/50">
              Aceste simboluri nu oferă verdicte, ci ne pot invita la reflecție asupra experiențelor și asupra modului în care ne raportăm la noi și la ceilalți.
            </p>
          </motion.div>

          {/* Social Planets */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card flex flex-col rounded-3xl p-8"
          >
            <h3 className="mb-6 flex items-center gap-3 font-serif text-2xl text-[#6d28d9]">
              <Star className="h-6 w-6" /> Planete de Evoluție
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="mb-2 font-medium text-[#ededed]">Jupiter</h4>
                <ul className="list-inside list-disc space-y-1 text-[15px] text-[#ededed]/70">
                  <li>simbolizează creșterea și expansiunea</li>
                  <li>ne inspiră să învățăm și să vedem oportunități</li>
                  <li>ne ajută să ne lărgim orizonturile</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-[#ededed]">Uranus</h4>
                <ul className="list-inside list-disc space-y-1 text-[15px] text-[#ededed]/70">
                  <li>reprezintă schimbarea și libertatea</li>
                  <li>ne scoate din zonele de confort</li>
                  <li>aduce idei noi și perspective diferite</li>
                </ul>
              </div>
            </div>
            <p className="mt-auto border-t border-[rgba(255,255,255,0.1)] pt-4 text-sm italic text-[#ededed]/50">
              Nu sunt predicții, ci simboluri care pot invita la reflecție asupra drumului personal.
            </p>
          </motion.div>
        </div>

        {/* Personal Story & Carl Jung Quote */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 text-lg leading-relaxed text-[#ededed]/80"
          >
            <h3 className="mb-6 font-serif text-3xl font-light text-[#ededed]">Povestea Mea</h3>
            <p>
              Sunt <strong>Marilena</strong>, am 47 de ani și sunt zodia Pești, un semn asociat sensibilității, intuiției și dorinței de a înțelege emoțiile profunde. Pentru mine, aceste trăsături au fost un punct de pornire spre întrebările care m-au însoțit mereu:
            </p>
            <ul className="ml-4 list-disc space-y-1 text-[#ededed]/70 marker:text-[#6d28d9]">
              <li>de ce sunt așa cum sunt?</li>
              <li>de ce trec prin aceste experiențe?</li>
              <li>când se vor îmbunătăți lucrurile?</li>
              <li>care este scopul meu în viață?</li>
              <li>de ce unele relații nu funcționează?</li>
              <li>de ce se întâmplă anumite lucruri?</li>
              <li>ce îmi rezervă acest an?</li>
            </ul>
            <p>
              În jurul vârstei de 35 de ani, viața mi-a scos în cale o doamnă astrolog care mi-a deschis, cu generozitate, ușa către această lume fascinantă. Prin cărțile recomandate și prin experiențele care mi-au ieșit în cale, astrologia a început să capete sens și profunzime pentru mine. De atunci, ceea ce a pornit ca o curiozitate s-a transformat într-o pasiune autentică.
            </p>
            <p>
              Am urmat cursuri și ateliere de astrologie, iar în anul 2023 am obținut calificarea de ASTROLOG la ȘCOALA DE ȘTIINȚE SPIRITUALE BARBARA BĂCĂUANU - școala avizată în obținerea certificării în România. M-am format în astrologie natală, karmică, previzională și relațională.
            </p>
            <p>
              Astrologia, ca știință divinatorie, este o uluitoare și fascinantă oglindă pentru tot ceea ce există în această lume. Este oglinda sufletului, poarta magică ce ne deschide cărări nebănuite ce călăuzesc spre cunoașterea menirii noastre din această viață. Continui să studiez și să aprofundez acest domeniu, pentru că este vast și mereu deschide noi perspective de înțelegere.
            </p>
            <p className="font-medium text-[#e0ab76]">
              Pentru mine, fiecare hartă este o poveste care merită ascultată cu răbdare, respect și dorința de a găsi claritate și înțelegere.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-md shrink-0 lg:sticky lg:top-32 lg:mt-12"
          >
            {/* Carl Jung Photo */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-[rgba(255,255,255,0.1)] bg-[#111]">
              <Image 
                src="/foto carl jung/Carl-Jung.png"
                alt="Portrait of Carl Jung"
                fill
                className="object-cover opacity-90 transition-opacity hover:opacity-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* The Floating Carl Jung Quote */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-card absolute -bottom-12 -left-8 right-8 rounded-2xl border border-[#e0ab76]/30 bg-[#0b0e14]/80 p-6 shadow-2xl backdrop-blur-xl md:-left-16 md:right-16"
            >
              <p
                className="text-2xl leading-snug text-[#ededed]"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                &quot;Astrologia integrativă nu prezice doar evenimentele, ci te ajută să înțelegi cine ești cu adevărat...&quot;
              </p>
              <p className="mt-4 text-right text-sm font-medium tracking-widest text-[#e0ab76] uppercase">
                &mdash; Carl Jung
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

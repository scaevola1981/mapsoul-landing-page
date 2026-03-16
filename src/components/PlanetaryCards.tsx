"use client";

import { motion } from "framer-motion";
import { Moon, Sun, Star, Orbit, Sparkles } from "lucide-react";

export function PersonalPlanets() {
  return (
    <div className="relative w-full overflow-hidden px-6 py-6 md:py-10">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-3 font-serif text-[26px] font-light text-[#BC8F8F] md:text-[33px] opacity-100">
            Planetele Personale — Fundamentul Identității
          </h2>
          <p className="mx-auto max-w-xl text-sm text-[#0b0e14]/50">
            Nu sunt predicții, ci oglinzi simbolice care invită la reflecție.
          </p>
        </motion.div>

        {/* Cards grid — Centered single column for Personal Planets */}
        <div className="mx-auto max-w-md">
          {/* ── Soare / Luna / Venus ── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px", amount: 0.3 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card flex flex-col rounded-2xl p-6 transition-all duration-300"
          >
            <h3 className="mb-5 flex items-center gap-3 font-serif text-xl">
              <Sun className="h-5 w-5" /> Planete Personale
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <h4 className="mb-1.5 flex items-center gap-2 font-medium">
                  <Moon className="h-3.5 w-3.5" /> Luna
                </h4>
                <ul className="list-inside list-disc space-y-0.5 opacity-90">
                  <li>lumea interioară și emoții</li>
                  <li>nevoia de siguranță și felul în care simțim</li>
                  <li>tiparele din trecut care ne influențează</li>
                  <li>relația cu mama</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-1.5 flex items-center gap-2 font-medium">
                  <Sun className="h-3.5 w-3.5" /> Soarele
                </h4>
                <ul className="list-inside list-disc space-y-0.5 opacity-90">
                  <li>identitatea și lumina personală</li>
                  <li>cine suntem și cum ne exprimăm</li>
                  <li>descoperirea potențialului</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-1.5 flex items-center gap-2 font-medium">
                  <Star className="h-3.5 w-3.5" /> Venus
                </h4>
                <ul className="list-inside list-disc space-y-0.5 opacity-90">
                  <li>relații și armonie</li>
                  <li>cum valorizăm iubirea și resursele</li>
                  <li>felul în care ne conectăm cu ceilalți</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-1.5 flex items-center gap-2 font-medium">
                  <Star className="h-3.5 w-3.5" /> Marte
                </h4>
                <ul className="list-inside list-disc space-y-0.5 opacity-90">
                  <li>energia,vointa si actiunea</li>
                  <li>arata cum ne afirmam,cum luam initiativa si cum ne urmam dorintele</li>
                  <li>reflecta modul in care ne folosim forta interioara pentru a depasi provocarile</li>
                  <li>vorbeste despre curaj,determinare si felul in care ne aparam limitele personale</li>
                </ul>
              </div>
            </div>

            <p className="mt-5 border-t border-black/[0.1] pt-3 text-xs italic opacity-60">
              Simboluri care invită la reflecție asupra relațiilor și modului
              în care ne raportăm la noi și la ceilalți.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function EvolutionPlanets() {
  return (
    <div className="relative w-full overflow-hidden px-6 py-6 md:py-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-3 font-serif text-[26px] font-light text-[#BC8F8F] md:text-[33px] opacity-100">
            Planetele Evoluției și Societății
          </h2>
          <p className="mx-auto max-w-xl text-sm text-[#BC8F8F]/50">
            Forțe colective care influențează generații și transformări profunde ale conștiinței.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* ── Planete Sociale ── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px", amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card flex flex-col rounded-2xl p-6 transition-all duration-300"
          >
            <h3 className="mb-5 flex items-center gap-3 font-serif text-xl">
              <Orbit className="h-5 w-5" /> Planete Sociale
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <h4 className="mb-1.5 font-medium">Jupiter</h4>
                <ul className="list-inside list-disc space-y-0.5 opacity-90">
                  <li>simbolizează expansiunea, sensul și căutarea cunoașterii</li>
                  <li>arată unde avem oportunități de creștere și dezvoltare</li>
                  <li>vorbește despre credințe, valori și modul în care ne lărgim orizonturile</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-1.5 font-medium">Saturn</h4>
                <ul className="list-inside list-disc space-y-0.5 opacity-90">
                  <li>simbolizează structura, responsabilitatea și maturizarea</li>
                  <li>arată lecțiile de viață și domeniile unde avem de construit cu răbdare</li>
                  <li>ne învață disciplina, limitele și asumarea responsabilităților</li>
                </ul>
              </div>
            </div>

            <p className="mt-auto border-t border-black/[0.1] pt-3 text-xs italic opacity-60">
              Planetele sociale marchează punctul de trecere între lumea personală și cea colectivă.
            </p>
          </motion.div>

          {/* ── Planete Transpersonale ── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px", amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card flex flex-col rounded-2xl p-6 transition-all duration-300"
          >
            <h3 className="mb-5 flex items-center gap-3 font-serif text-xl">
              <Sparkles className="h-5 w-5" /> Planete Transpersonale
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <h4 className="mb-1.5 font-medium">Uranus</h4>
                <ul className="list-inside list-disc space-y-0.5 opacity-90">
                  <li>simbolizează schimbarea, libertatea și originalitatea</li>
                  <li>arată unde simțim nevoia de independență și de a rupe tipare vechi</li>
                  <li>aduce revelații și perspective noi asupra vieții</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-1.5 font-medium">Neptun</h4>
                <ul className="list-inside list-disc space-y-0.5 opacity-90">
                  <li>vorbește despre sensibilitate, imaginație și dimensiunea spirituală</li>
                  <li>arată unde visăm, idealizăm sau căutăm sensuri mai profunde</li>
                  <li>influențează intuiția și legătura cu planul subtil</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-1.5 font-medium">Pluto</h4>
                <ul className="list-inside list-disc space-y-0.5 opacity-90">
                  <li>simbolizează transformarea profundă și puterea interioară</li>
                  <li>arată procesele de regenerare și schimbările esențiale din viață</li>
                  <li>ne conduce spre confruntarea cu adevărurile profunde și renașterea interioară</li>
                </ul>
              </div>
            </div>

            <p className="mt-auto border-t border-black/[0.1] pt-3 text-xs italic opacity-60">
              Forțe colective care influențează generații și transformări profunde ale conștiinței.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Moon, Sun, Star, Orbit, Sparkles } from "lucide-react";

export default function PlanetaryCards() {
  return (
    <section className="relative w-full overflow-hidden px-6 py-16 md:py-24">
      <div className="absolute left-0 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-[#6d28d9]/8 blur-[90px]" />
      <div className="absolute right-0 bottom-1/4 h-72 w-72 translate-x-1/2 rounded-full bg-[#e0ab76]/8 blur-[90px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-3 font-serif text-2xl font-light text-[#ededed] md:text-3xl">
            Planetele — Simboluri ale Cunoașterii
          </h2>
          <p className="mx-auto max-w-xl text-sm text-[#ededed]/50">
            Nu sunt predicții, ci oglinzi simbolice care invită la reflecție.
          </p>
        </motion.div>

        {/* Cards grid — 3 columns */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* ── Planete Personale ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass-card flex flex-col rounded-2xl p-6"
            style={{ backdropFilter: "blur(44px) saturate(1.4)", WebkitBackdropFilter: "blur(44px) saturate(1.4)" }}
          >
            <h3 className="mb-5 flex items-center gap-3 font-serif text-xl text-[#e0ab76]">
              <Sun className="h-5 w-5" /> Planete Personale
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <h4 className="mb-1.5 flex items-center gap-2 font-medium text-[#ededed]">
                  <Moon className="h-3.5 w-3.5 text-[#6d28d9]" /> Luna
                </h4>
                <ul className="list-inside list-disc space-y-0.5 text-[#ededed]/65">
                  <li>lumea interioară și emoții</li>
                  <li>nevoia de siguranță și felul în care simțim</li>
                  <li>tiparele din trecut care ne influențează</li>
                  <li>relația cu mama</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-1.5 flex items-center gap-2 font-medium text-[#ededed]">
                  <Sun className="h-3.5 w-3.5 text-[#e0ab76]" /> Soarele
                </h4>
                <ul className="list-inside list-disc space-y-0.5 text-[#ededed]/65">
                  <li>identitatea și lumina personală</li>
                  <li>cine suntem și cum ne exprimăm</li>
                  <li>descoperirea potențialului</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-1.5 flex items-center gap-2 font-medium text-[#ededed]">
                  <Star className="h-3.5 w-3.5 text-[#6d28d9]" /> Venus
                </h4>
                <ul className="list-inside list-disc space-y-0.5 text-[#ededed]/65">
                  <li>relații și armonie</li>
                  <li>cum valorizăm iubirea și resursele</li>
                  <li>felul în care ne conectăm cu ceilalți</li>
                </ul>
              </div>
            </div>

            <p className="mt-5 border-t border-white/[0.06] pt-3 text-xs italic text-[#ededed]/40">
              Simboluri care invită la reflecție asupra relațiilor și modului
              în care ne raportăm la noi și la ceilalți.
            </p>
          </motion.div>

          {/* ── Planete Sociale ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card flex flex-col rounded-2xl p-6"
            style={{ backdropFilter: "blur(44px) saturate(1.4)", WebkitBackdropFilter: "blur(44px) saturate(1.4)" }}
          >
            <h3 className="mb-5 flex items-center gap-3 font-serif text-xl text-[#6d28d9]">
              <Orbit className="h-5 w-5" /> Planete Sociale
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <h4 className="mb-1.5 font-medium text-[#ededed]">Jupiter</h4>
                <ul className="list-inside list-disc space-y-0.5 text-[#ededed]/65">
                  <li>simbolizează expansiunea, sensul și căutarea cunoașterii</li>
                  <li>arată unde avem oportunități de creștere și dezvoltare</li>
                  <li>vorbește despre credințe, valori și modul în care ne lărgim orizonturile</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-1.5 font-medium text-[#ededed]">Saturn</h4>
                <ul className="list-inside list-disc space-y-0.5 text-[#ededed]/65">
                  <li>simbolizează structura, responsabilitatea și maturizarea</li>
                  <li>arată lecțiile de viață și domeniile unde avem de construit cu răbdare</li>
                  <li>ne învață disciplina, limitele și asumarea responsabilităților</li>
                </ul>
              </div>
            </div>

            <p className="mt-auto border-t border-white/[0.06] pt-3 text-xs italic text-[#ededed]/40">
              Planetele sociale marchează punctul de trecere între lumea
              personală și cea colectivă.
            </p>
          </motion.div>

          {/* ── Planete Transpersonale ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card flex flex-col rounded-2xl p-6"
            style={{ backdropFilter: "blur(44px) saturate(1.4)", WebkitBackdropFilter: "blur(44px) saturate(1.4)" }}
          >
            <h3 className="mb-5 flex items-center gap-3 font-serif text-xl text-[#e0ab76]">
              <Sparkles className="h-5 w-5" /> Planete Transpersonale
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <h4 className="mb-1.5 font-medium text-[#ededed]">Uranus</h4>
                <ul className="list-inside list-disc space-y-0.5 text-[#ededed]/65">
                  <li>simbolizează schimbarea, libertatea și originalitatea</li>
                  <li>arată unde simțim nevoia de independență și de a rupe tipare vechi</li>
                  <li>aduce revelații și perspective noi asupra vieții</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-1.5 font-medium text-[#ededed]">Neptun</h4>
                <ul className="list-inside list-disc space-y-0.5 text-[#ededed]/65">
                  <li>vorbește despre sensibilitate, imaginație și dimensiunea spirituală</li>
                  <li>arată unde visăm, idealizăm sau căutăm sensuri mai profunde</li>
                  <li>influențează intuiția și legătura cu planul subtil</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-1.5 font-medium text-[#ededed]">Pluto</h4>
                <ul className="list-inside list-disc space-y-0.5 text-[#ededed]/65">
                  <li>simbolizează transformarea profundă și puterea interioară</li>
                  <li>arată procesele de regenerare și schimbările esențiale din viață</li>
                  <li>ne conduce spre confruntarea cu adevărurile profunde și renașterea interioară</li>
                </ul>
              </div>
            </div>

            <p className="mt-auto border-t border-white/[0.06] pt-3 text-xs italic text-[#ededed]/40">
              Forțe colective care influențează generații și transformări
              profunde ale conștiinței.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

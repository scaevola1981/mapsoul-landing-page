"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-lock: prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (href === "#hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setIsMobileMenuOpen(false);
    },
    []
  );

  const navLinks = [
    { name: "Acasă", href: "#hero" },
    { name: "Sisteme de Cunoaștere", href: "#specializari" },
    { name: "Metoda Mea", href: "#metoda" },
  ];

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[150] rounded-2xl border border-[rgba(0, 19, 162, 0.79)] transition-all duration-500 ${
          isScrolled
            ? "bg-[#0a0a23]/80 backdrop-blur-2xl shadow-[0_8px_32px_-1px_rgba(0,0,0,0.5)] py-1"
            : "bg-[#0a0a23]/30 backdrop-blur-xl py-2"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:px-6 md:py-2">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="relative flex h-12 items-center justify-start md:h-16 overflow-visible"
          >
            <Image
              src="/design-nou/logo/logo-restilizat.png"
              alt="SoulMap Logo"
              width={180}
              height={60}
              priority
              className="h-full w-auto object-contain transition-all duration-300"
              style={{ 
                filter: 'url(#remove-dark) contrast(1.1) brightness(1.1)',
                width: 'auto'
              }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center font-light gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium tracking-wide text-[#ededed] transition-colors hover:text-[#DFB0FF] cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/40752102281?text=Bun%C4%83%2C%20a%C8%99%20dori%20o%20programare%20(SoulMap)%20pentru%20..."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--npul-accent)]/30 bg-[var(--npul-accent)] px-5 py-2 text-sm font-medium text-white transition-all hover:bg-[var(--npul-accent)]/90"
            >
              Programează pe WhatsApp
            </a>
          </nav>

          {/* Mobile Burger Button */}
          <button
            aria-label={isMobileMenuOpen ? "Închide meniul" : "Deschide meniul"}
            className="relative z-[200] flex h-10 w-10 items-center justify-center text-[#ededed] md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ─── Mobile Fullscreen Overlay ─── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[140] flex flex-col bg-[#05070a]/95 backdrop-blur-[40px] backdrop-saturate-150 md:hidden"
          >
            {/* Top space for the navbar area */}
            <div className="h-24" />

            {/* Menu Content */}
            <div className="flex flex-1 flex-col items-center justify-center gap-8 px-8">
              {/* Mobile Logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <Image
                  src="/design-nou/logo/logo-restilizat.png"
                  alt="SoulChart Logo"
                  width={140}
                  height={140}
                  className="object-contain"
                  style={{ filter: 'url(#remove-dark) contrast(1.1) brightness(1.1)' }}
                />
              </motion.div>

              {/* Nav Links */}
              <nav className="flex flex-col items-center gap-7">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    className="text-xl font-medium tracking-wide text-[#ededed] transition-colors hover:text-[#DFB0FF] cursor-pointer"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              {/* Full-width CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 w-full max-w-xs"
              >
                <a
                  href="https://wa.me/40752102281?text=Bun%C4%83%2C%20a%C8%99%20dori%20o%20programare%20(SoulMap)%20pentru%20..."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--npul-accent)] px-6 py-4 text-base font-semibold text-white shadow-2xl transition-all hover:brightness-110 active:scale-95"
                >
                  Programează pe WhatsApp
                </a>
              </motion.div>
            </div>

            {/* Bottom decorative line */}
            <div className="px-8 pb-12">
              <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[var(--npul-gold)]/30 to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

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
    <header
      className={`fixed top-0 left-0 w-full z-[150] border-b border-[rgba(255,255,255,0.05)] transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a23]/92 backdrop-blur-lg shadow-[0_4px_24px_-1px_rgba(0,0,0,0.3)]"
          : "bg-[#0D0213]/40 backdrop-blur-md shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2)]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:px-6 md:py-3">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="flex items-center gap-2"
        >
          <Image
            src="/design-nou/logo/logo-dark-transparent.png"
            alt="SoulMap Logo"
            width={160}
            height={160}
            priority
            className="h-8 w-auto object-contain transition-all duration-300 md:h-20"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center font-light gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium tracking-wide text-[#ededed]/80 transition-colors hover:text-[#DFB0FF] cursor-pointer"
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

      {/* ─── Mobile Fullscreen Overlay ─── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[190] flex flex-col bg-[#0a0a23]/70 backdrop-blur-2xl md:hidden border-l border-white/5 shadow-2xl"
            >
            {/* Top space for the navbar */}
            <div className="h-16" />

            {/* Menu Content */}
            <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8">
              {/* Mobile Logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-6"
              >
                <Image
                  src="/design-nou/logo/logo-dark-transparent.png"
                  alt="SoulMap Logo"
                  width={140}
                  height={140}
                  className="object-contain"
                />
              </motion.div>

              {/* Nav Links */}
              <nav className="flex flex-col items-center gap-5">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    className="text-lg font-medium tracking-wide text-[#ededed] transition-colors hover:text-[#DFB0FF] cursor-pointer"
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
                className="mt-6 w-full max-w-xs"
              >
                <a
                  href="https://wa.me/40752102281?text=Bun%C4%83%2C%20a%C8%99%20dori%20o%20programare%20(SoulMap)%20pentru%20..."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--npul-accent)] px-6 py-4 text-base font-semibold text-white shadow-lg transition-all hover:brightness-110"
                >
                  Programează pe WhatsApp
                </a>
              </motion.div>
            </div>

            {/* Bottom decorative line */}
            <div className="px-8 pb-8">
              <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[var(--npul-gold)]/30 to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

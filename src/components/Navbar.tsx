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
      className="fixed top-0 left-0 w-full z-[150] bg-[#0D0213]/40 backdrop-blur-md shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2)] border-b border-[rgba(255,255,255,0.05)] transition-all duration-300"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.png"
            alt="MapSoul Logo"
            width={50}
            height={50}
            className="object-contain transition-all duration-300 rounded-[12px]"
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
            href="https://wa.me/40752102281?text=Bun%C4%83%2C%20a%C8%99%20dori%20o%20programare%20(MapSoul)%20pentru%20..."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--npul-accent)]/30 bg-[var(--npul-accent)] px-5 py-2 text-sm font-medium text-white transition-all hover:bg-[var(--npul-accent)]/90"
          >
            Programează pe WhatsApp
          </a>

        </nav>

        {/* Mobile Menu Button */}
        <button
        aria-label="Deschide meniul"
          className="text-[#ededed] md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 top-full w-full border-b border-[rgba(255,255,255,0.05)] bg-[#0b0e14]/95 px-6 py-6 shadow-2xl backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-medium text-[#ededed] transition-colors hover:text-[#DFB0FF] cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/40752102281?text=Bun%C4%83%2C%20a%C8%99%20dori%20o%20programare%20(MapSoul)%20pentru%20..."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}  
                className="rounded-full border border-[#7E57C2]/30 bg-[#7E57C2] px-5 py-2 text-sm font-medium text-white transition-all hover:bg-[#7E57C2]/90"
              >
                Programează pe WhatsApp
              </a>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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

  const navLinks = [
    { name: "Acasă", href: "#hero" },
    { name: "Sisteme de Cunoaștere", href: "#specializari" },
    { name: "Despre Mine", href: "#despre-mine" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0e14]/80 backdrop-blur-md shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2)] border-b border-[rgba(255,255,255,0.05)]"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="MapSoul Logo"
            width={isScrolled ? 50 : 60}
            height={isScrolled ? 50 : 60}
            className="object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-[#ededed]/80 transition-colors hover:text-[#e0ab76]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="mailto:contact@mapsoul.ro"
            className="rounded-full border border-[#e0ab76]/30 bg-[#e0ab76]/10 px-5 py-2 text-sm font-medium text-[#e0ab76] transition-all hover:bg-[#e0ab76] hover:text-[#0b0e14]"
          >
            Programează o ședință
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
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
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-[#ededed] transition-colors hover:text-[#e0ab76]"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="mailto:contact@mapsoul.ro"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 text-center rounded-full bg-[#e0ab76] px-5 py-3 text-sm font-semibold text-[#0b0e14] transition-all hover:bg-[#e0ab76]/90"
              >
                Programează o ședință
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

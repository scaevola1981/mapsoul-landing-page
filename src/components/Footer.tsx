import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 w-full border-t border-white/[0.07] glass-card backdrop-blur-xl shadow-[0_4px_24px_-1px_rgba(0,0,0,0.3)] px-6 py-12 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 md:flex-row md:items-start">
        {/* Brand / Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="#hero" className="mb-4 inline-block">
            <Image
              src="/logo.png"
              alt="MapSoul Logo"
              width={150}
              height={150}
              className="object-contain"
            />
          </Link>
          <p className="max-w-xs text-center text-sm leading-relaxed text-[#E0AB76]/70 md:text-left">
            Hărțile astrologice sunt instrumente pentru a ajunge la tine, cu claritate și iubire.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="mb-4 font-serif text-lg text-[#BC8F8F]">Navigare</h4>
          <nav className="flex flex-col items-center gap-3 text-sm text-[#E0AB76]/80 md:items-start">
            <Link href="#hero" className="transition-colors hover:text-[#9A4EAE]">Acasă</Link>
            <Link href="#specializari" className="transition-colors hover:text-[#9A4EAE]">Harti ale Sufletului</Link>
            <Link href="#metoda" className="transition-colors hover:text-[#9A4EAE]">Metoda Mea</Link>
          </nav>
        </div>

        {/* Contact/Socials */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="mb-4 font-serif text-lg text-[#BC8F8F]">Conectare</h4>
          <div className="flex gap-4 mb-6">
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] text-[#E0AB76] hover:bg-[#9A4EAE]/20 hover:text-[#9A4EAE] transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] text-[#E0AB76] hover:bg-[#9A4EAE]/20 hover:text-[#9A4EAE] transition-all">
              <Facebook size={20} />
            </a>
            <a href="mailto:contact@mapsoul.ro" className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] text-[#E0AB76] hover:bg-[#9A4EAE]/20 hover:text-[#9A4EAE] transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-[rgba(255,255,255,0.05)] pt-8 text-center text-xs text-[#ededed]/40">
        <p>&copy; {currentYear} MapSoul - Astrologie Integrativă. Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
}

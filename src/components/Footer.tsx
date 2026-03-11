import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[rgba(255,255,255,0.05)] bg-[#05070a] px-6 py-12 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 md:flex-row md:items-start">
        {/* Brand / Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="#hero" className="mb-4 inline-block">
            <Image
              src="/logo.png"
              alt="MapSoul Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </Link>
          <p className="max-w-xs text-center text-sm leading-relaxed text-[#ededed]/60 md:text-left">
            Hărțile astrologice sunt instrumente pentru a ajunge la tine, cu claritate și iubire.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="mb-4 font-serif text-lg text-[#ededed]">Navigare</h4>
          <nav className="flex flex-col items-center gap-3 text-sm text-[#ededed]/70 md:items-start">
            <Link href="#hero" className="transition-colors hover:text-[#e0ab76]">Acasă</Link>
            <Link href="#specializari" className="transition-colors hover:text-[#e0ab76]">Sisteme de Cunoaștere</Link>
            <Link href="#despre-mine" className="transition-colors hover:text-[#e0ab76]">Despre Mine</Link>
          </nav>
        </div>

        {/* Contact/Socials */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="mb-4 font-serif text-lg text-[#ededed]">Conectare</h4>
          <div className="flex gap-4 mb-6">
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] text-[#ededed] hover:bg-[#e0ab76]/20 hover:text-[#e0ab76] transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] text-[#ededed] hover:bg-[#e0ab76]/20 hover:text-[#e0ab76] transition-all">
              <Facebook size={20} />
            </a>
            <a href="mailto:contact@mapsoul.ro" className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] text-[#ededed] hover:bg-[#e0ab76]/20 hover:text-[#e0ab76] transition-all">
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

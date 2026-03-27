import Image from "next/image";
import Link from "next/link";
import { Mail, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 w-full border-t border-white/[0.07] glass-card backdrop-blur-xl shadow-[0_4px_24px_-1px_rgba(0,0,0,0.3)] px-6 py-8 md:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row md:items-start">
        {/* Brand / Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="#hero" className="mb-4 inline-block">
            <Image
              src="/logo.png"
              alt="MapSoul Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </Link>
          <p className="max-w-xs text-center text-sm leading-relaxed text-[var(--npul-gold)]/70 md:text-left">
            Hărțile astrologice sunt instrumente pentru a ajunge la tine, cu claritate și iubire.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="mb-3 font-serif text-lg text-[var(--npul-gold)]">Navigare</h4>
          <nav className="flex flex-col items-center gap-2 text-sm text-[var(--npul-gold)]/80 md:items-start">
            <Link href="#hero" className="transition-colors hover:text-[var(--npul-accent)]">Acasă</Link>
            <Link href="#specializari" className="transition-colors hover:text-[var(--npul-accent)]">Harti ale Sufletului</Link>
            <Link href="#metoda" className="transition-colors hover:text-[var(--npul-accent)]">Metoda Mea</Link>
          </nav>
        </div>

        {/* Contact/Socials */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="mb-3 font-serif text-lg text-[var(--npul-gold)]">Conectare</h4>
          <div className="flex gap-4 mb-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ghermac_marilena@yahoo.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Deschide Gmail pentru a trimite mesaj"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] text-[var(--npul-gold)] hover:bg-[var(--npul-accent)]/20 hover:text-[var(--npul-accent)] transition-all"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61576429971094"
              target="_blank"
              rel="noopener noreferrer"
              title="Vizitează pagina de Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] text-[var(--npul-gold)] hover:bg-[var(--npul-accent)]/20 hover:text-[var(--npul-accent)] transition-all"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-[rgba(255,255,255,0.05)] pt-6 text-center text-xs text-[#ededed]/40">
        <p>&copy; {currentYear} MapSoul - Astrologie Integrativă. Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
}

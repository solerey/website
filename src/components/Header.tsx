"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Accueil" },
  { href: "/histoire", label: "Histoire" },
  { href: "/photos", label: "Photos" },
  { href: "/activites", label: "Activités" },
];

const AIRBNB_URL =
  "https://www.airbnb.fr/rooms/1069918179722628241?source_impression_id=p3_1739355265_P3d9h_GX1pKHREwn";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-chalet-dark/90 backdrop-blur-md border-b border-chalet-gold/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="Le Solerey"
            width={48}
            height={48}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display text-cream text-xl tracking-wide hidden sm:block">
            Le Solerey
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                pathname === item.href
                  ? "text-chalet-gold"
                  : "text-cream/70 hover:text-cream"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={AIRBNB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-2.5 bg-chalet-gold text-chalet-dark text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-chalet-gold/90 transition-colors duration-300"
          >
            Réserver
          </a>
        </nav>

        {/* Contact (desktop) */}
        <a
          href="tel:+33640401107"
          className="hidden lg:flex items-center gap-2 text-cream/60 text-sm hover:text-cream transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          +33 6 40 40 11 07
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-cream p-2"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-chalet-dark/95 backdrop-blur-md border-t border-chalet-gold/10">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm tracking-widest uppercase py-2 ${
                  pathname === item.href
                    ? "text-chalet-gold"
                    : "text-cream/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={AIRBNB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-6 py-3 bg-chalet-gold text-chalet-dark text-sm font-semibold tracking-wider uppercase text-center rounded-sm"
            >
              Réserver
            </a>
            <a href="tel:+33640401107" className="text-cream/60 text-sm mt-2">
              📞 +33 6 40 40 11 07
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

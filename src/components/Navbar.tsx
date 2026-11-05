"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig, whatsappContactLink } from "@/lib/config";

const navLinks = [
  { href: "/", label: "Laman Utama" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/produk", label: "Produk" },
  { href: "/khasiat-cendawan", label: "Khasiat Cendawan" },
  { href: "/galeri", label: "Galeri" },
  { href: "/blog", label: "Blog" },
  { href: "/hubungi-kami", label: "Hubungi Kami" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-card backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex items-center justify-between py-3" aria-label="Navigasi utama">
        <Link href="/" className="group flex items-center gap-2.5" aria-label={siteConfig.name}>
          <Image
            src="/images/logo.jpg"
            alt={`Logo ${siteConfig.name}`}
            width={44}
            height={44}
            className="h-11 w-11 rounded-2xl object-cover shadow-soft"
            priority
          />
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-brand-ink">
              {siteConfig.name}
            </span>
            <span className="hidden text-[11px] font-medium text-brand-muted sm:block">
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                  isActive(link.href)
                    ? "bg-brand-mint text-forest-800"
                    : "text-brand-ink/75 hover:bg-brand-mint/60 hover:text-brand-ink"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.whatsapp}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-brand-ink/70 transition-colors hover:text-brand-ink"
          >
            <Phone className="h-4 w-4 text-brand-green" strokeWidth={2.5} />
            {siteConfig.phoneDisplay}
          </a>
          <Link href="/produk" className="btn-primary px-5 py-2.5 text-sm">
            Tempah Sekarang
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 text-brand-ink shadow-card ring-1 ring-brand-ink/5 backdrop-blur lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-[72px] z-40 bg-brand-bg/95 backdrop-blur-lg transition-all duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-6">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              style={{ transitionDelay: `${i * 40}ms` }}
              className={`transition-all duration-300 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <Link
                href={link.href}
                className={`block rounded-2xl px-4 py-3.5 text-lg font-semibold transition-colors ${
                  isActive(link.href)
                    ? "bg-brand-mint text-forest-800"
                    : "text-brand-ink hover:bg-brand-mint/50"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link href="/produk" className="btn-primary w-full px-6 py-3.5 text-base">
              Tempah Sekarang
            </Link>
          </li>
          <li className="pt-2">
            <a
              href={whatsappContactLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full px-6 py-3.5 text-base"
            >
              Chat WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

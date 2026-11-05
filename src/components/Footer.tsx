import Link from "next/link";
import {
  Sprout,
  Facebook,
  Instagram,
  Music2,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";
import { siteConfig, whatsappContactLink } from "@/lib/config";
import { products } from "@/lib/products";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-forest-950 text-white">
      {/* Dekorasi bentuk organik */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="container-x relative grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-green text-brand-ink">
              <Sprout className="h-6 w-6" strokeWidth={2.2} />
            </span>
            <span className="text-lg font-extrabold">{siteConfig.name}</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex gap-3">
            {siteConfig.socials.facebook && (
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-brand-green hover:text-brand-ink"
              >
                <Facebook className="h-5 w-5" />
              </a>
            )}
            {siteConfig.socials.instagram && (
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-brand-green hover:text-brand-ink"
              >
                <Instagram className="h-5 w-5" />
              </a>
            )}
            {siteConfig.socials.tiktok && (
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-brand-green hover:text-brand-ink"
              >
                <Music2 className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-green">
            Navigasi
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { href: "/", label: "Laman Utama" },
              { href: "/tentang-kami", label: "Tentang Kami" },
              { href: "/produk", label: "Produk" },
              { href: "/khasiat-cendawan", label: "Khasiat Cendawan" },
              { href: "/galeri", label: "Galeri" },
              { href: "/blog", label: "Blog" },
              { href: "/hubungi-kami", label: "Hubungi Kami" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-white/65 transition-colors hover:text-brand-green"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Produk */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-green">
            Produk Kami
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {products.slice(0, 5).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/produk/${p.slug}`}
                  className="text-white/65 transition-colors hover:text-brand-green"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hubungi */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-green">
            Hubungi Kami
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
              {siteConfig.addressDisplay}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-brand-green" />
              {siteConfig.phoneDisplay}
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-brand-green" />
              {siteConfig.email}
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
              <span>
                {siteConfig.hours.map((h) => (
                  <span key={h.days} className="block">
                    <span className="text-white/85">{h.days}:</span> {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
          <a
            href={whatsappContactLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5 w-full px-4 py-2.5 text-sm"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Kami
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. Hak cipta terpelihara.
          </p>
          <p>
            Dibangunkan dengan penuh dedikasi di Malaysia ·{" "}
            <Link href="/hubungi-kami" className="hover:text-brand-green">
              Hubungi kami
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

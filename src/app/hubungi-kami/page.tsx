import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { siteConfig, whatsappContactLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi Cendawan Segar untuk pertanyaan produk, tempahan, bekalan borong atau kerjasama. WhatsApp, emel atau borang hubungi kami.",
};

export default function HubungiPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-950 pb-16 pt-32 text-white lg:pb-20 lg:pt-40">
        <div className="dot-grid absolute inset-0 opacity-10" />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-green/15 blur-3xl" />
        <div className="container-x relative text-center">
          <Reveal>
            <span className="chip bg-white/10 text-brand-green">Hubungi Kami</span>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Kami Sedia Membantu Anda
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              Ada pertanyaan tentang produk, tempahan atau kerjasama? Jangan segan —
              hubungi kami melalui mana-mana saluran yang sesuai.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Maklumat hubungan */}
            <div className="space-y-5 lg:col-span-2">
              <Reveal>
                <div className="card p-6">
                  <h2 className="text-lg font-extrabold text-brand-ink">Maklumat Perhubungan</h2>
                  <ul className="mt-5 space-y-5">
                    <li className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-green/20 text-forest-700">
                        <Phone className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-brand-ink">Telefon / WhatsApp</p>
                        <a
                          href={`tel:${siteConfig.whatsapp}`}
                          className="text-sm text-brand-muted hover:text-forest-700"
                        >
                          {siteConfig.phoneDisplay}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/25 text-forest-800">
                        <Mail className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-brand-ink">Emel</p>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="text-sm text-brand-muted hover:text-forest-700"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-mauve/25 text-forest-800">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-brand-ink">Alamat</p>
                        <p className="text-sm text-brand-muted">{siteConfig.addressDisplay}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-mint text-forest-700">
                        <Clock className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-brand-ink">Waktu Operasi</p>
                        <ul className="mt-1 space-y-0.5">
                          {siteConfig.hours.map((h) => (
                            <li key={h.days} className="text-sm text-brand-muted">
                              <span className="font-medium text-brand-ink">{h.days}:</span> {h.time}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  </ul>

                  <a
                    href={whatsappContactLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-6 w-full px-6 py-3.5"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chat WhatsApp Segera
                  </a>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="card overflow-hidden">
                  <iframe
                    src={siteConfig.mapsEmbedUrl}
                    title="Lokasi ladang Cendawan Segar"
                    className="h-56 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="flex items-center justify-between p-4">
                    <p className="text-xs text-brand-muted">
                      Lokasi anggaran — kemas kini dengan alamat sebenar.
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        siteConfig.addressDisplay
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-bold text-forest-700 hover:text-brand-green"
                    >
                      <Navigation className="h-3.5 w-3.5" />
                      Arah
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Borang */}
            <div className="lg:col-span-3">
              <Reveal delay={150}>
                <SectionHeading
                  align="left"
                  eyebrow="Borang Hubungi"
                  title="Hantar Pertanyaan Anda"
                  description="Isi borang di bawah dan mesej anda akan dihantar terus ke WhatsApp kami untuk respon pantas."
                />
                <div className="mt-8">
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

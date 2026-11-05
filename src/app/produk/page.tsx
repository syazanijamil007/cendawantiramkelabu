import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, Info } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ProductBrowser from "@/components/ProductBrowser";
import { siteConfig, whatsappContactLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Lihat koleksi produk cendawan tiram kami — cendawan segar, pek, kering dan produk olahan. Sesuai untuk kegunaan harian dan perniagaan.",
};

export default function ProdukPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-950 pb-16 pt-32 text-white lg:pb-20 lg:pt-40">
        <div className="dot-grid absolute inset-0 opacity-10" />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-green/15 blur-3xl" />
        <div className="container-x relative text-center">
          <Reveal>
            <span className="chip bg-white/10 text-brand-green">Produk Kami</span>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Koleksi Cendawan Pilihan
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              Semua produk kami ditanam, dipungut dan dibungkus dengan penuh
              perhatian terhadap kebersihan dan kesegaran.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-x">
          <Reveal>
            <ProductBrowser />
          </Reveal>

          {/* Nota harga */}
          <Reveal className="mt-10">
            <div className="flex items-start gap-3 rounded-3xl bg-brand-mint/50 p-5 text-sm text-forest-800">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" />
              <p>{siteConfig.priceNote}</p>
            </div>
          </Reveal>

          {/* CTA borong */}
          <Reveal className="mt-10">
            <div className="card relative overflow-hidden p-8 sm:p-10">
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-xl font-extrabold text-brand-ink">
                    Membeli untuk Restoran, Kafe atau Kedai Runcit?
                  </h2>
                  <p className="mt-2 max-w-xl text-sm text-brand-muted">
                    Kami menawarkan bekalan borong dengan harga istimewa dan jadual
                    penghantaran yang konsisten. Hubungi kami untuk perbincangan.
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-3">
                  <a
                    href={whatsappContactLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-6 py-3 text-sm"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Borong
                  </a>
                  <Link href="/hubungi-kami" className="btn-secondary px-6 py-3 text-sm">
                    Hubungi Kami
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

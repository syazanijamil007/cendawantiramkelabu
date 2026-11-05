import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Package,
  CheckCircle2,
  ChefHat,
  Truck,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import ProductCard, { ProductPrice } from "@/components/ProductCard";
import { products, getProductBySlug, getRelatedProducts } from "@/lib/products";
import { siteConfig, whatsappOrderLink } from "@/lib/config";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDesc,
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description: product.shortDesc,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug);
  const paragraphs = product.description.split("\n\n");

  return (
    <>
      <section className="relative overflow-hidden bg-forest-950 pb-14 pt-32 text-white lg:pt-40">
        <div className="dot-grid absolute inset-0 opacity-10" />
        <div className="container-x relative">
          <nav className="text-sm text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-green">Laman Utama</Link>
            <span className="mx-2">/</span>
            <Link href="/produk" className="hover:text-brand-green">Produk</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-x">
          <Link
            href="/produk"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-muted transition-colors hover:text-forest-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Semua Produk
          </Link>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Imej */}
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-soft">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={900}
                  height={700}
                  priority
                  className="h-auto w-full object-cover"
                />
                <span
                  className={`chip absolute left-5 top-5 ${
                    product.availability === "tersedia"
                      ? "bg-brand-mint text-forest-700"
                      : product.availability === "terhad"
                        ? "bg-brand-blue/30 text-forest-900"
                        : "bg-brand-mauve/30 text-forest-900"
                  }`}
                >
                  {product.availabilityLabel}
                </span>
              </div>
            </Reveal>

            {/* Butiran */}
            <Reveal delay={120}>
              <span className="chip bg-brand-mint text-forest-700">{product.categoryLabel}</span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
                {product.name}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <ProductPrice product={product} className="text-2xl" />
                <span className="flex items-center gap-1.5 text-sm text-brand-muted">
                  <Package className="h-4 w-4" /> {product.packSize}
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {paragraphs.map((para, i) => (
                  <p key={i} className="leading-relaxed text-brand-muted">
                    {para}
                  </p>
                ))}
              </div>

              {/* Ciri */}
              <div className="mt-7">
                <h2 className="text-sm font-bold uppercase tracking-wider text-brand-ink">
                  Ciri-ciri Produk
                </h2>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-brand-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm text-brand-muted">
                <ChefHat className="h-4 w-4 text-brand-green" />
                <span>
                  <strong className="text-brand-ink">Sesuai untuk:</strong> {product.bestFor}
                </span>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={whatsappOrderLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-7 py-3.5"
                >
                  <MessageCircle className="h-5 w-5" />
                  Tempah Sekarang
                </a>
                <Link href="/hubungi-kami" className="btn-secondary px-7 py-3.5">
                  Tanya Kami
                </Link>
              </div>
              <p className="mt-4 flex items-center gap-1.5 text-xs text-brand-muted">
                <Truck className="h-3.5 w-3.5" />
                Penghantaran tersedia ke seluruh Malaysia — sila hubungi untuk butiran.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Produk berkaitan */}
      {related.length > 0 && (
        <section className="bg-white py-16">
          <div className="container-x">
            <h2 className="text-2xl font-extrabold text-brand-ink">Produk Berkaitan</h2>
            <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/produk"
                className="inline-flex items-center gap-2 text-sm font-bold text-forest-700 hover:text-brand-green"
              >
                Lihat semua produk
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Package } from "lucide-react";
import type { Product } from "@/lib/products";
import { whatsappOrderLink } from "@/lib/config";

function priceLabel(p: Product): string {
  if (p.priceRM === null) return "Hubungi kami";
  return `RM ${p.priceRM.toFixed(2)}`;
}

export function ProductPrice({ product, className = "" }: { product: Product; className?: string }) {
  return (
    <p className={`flex items-baseline gap-1.5 ${className}`}>
      {product.priceRM !== null ? (
        <>
          <span className="text-xl font-extrabold text-forest-800">{priceLabel(product)}</span>
          {product.unit && <span className="text-sm text-brand-muted">/ {product.unit}</span>}
        </>
      ) : (
        <span className="text-base font-bold text-forest-700">{priceLabel(product)}</span>
      )}
    </p>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const availabilityStyle =
    product.availability === "tersedia"
      ? "bg-brand-mint text-forest-700"
      : product.availability === "terhad"
        ? "bg-brand-blue/25 text-forest-800"
        : "bg-brand-mauve/25 text-forest-900";

  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
      <Link href={`/produk/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className={`chip absolute left-4 top-4 ${availabilityStyle}`}>
          {product.availabilityLabel}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
          {product.categoryLabel}
        </span>
        <h3 className="mt-1.5 text-lg font-bold text-brand-ink">
          <Link href={`/produk/${product.slug}`} className="hover:text-forest-700">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
          {product.shortDesc}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-brand-muted">
          <Package className="h-4 w-4 text-brand-green" />
          {product.packSize}
        </div>

        <div className="mt-4 flex items-end justify-between gap-3 border-t border-brand-ink/5 pt-4">
          <ProductPrice product={product} />
          <Link
            href={`/produk/${product.slug}`}
            className="inline-flex items-center gap-1 text-sm font-bold text-forest-700 transition-colors hover:text-brand-green"
          >
            Lihat Produk
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <a
          href={whatsappOrderLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary mt-4 w-full px-4 py-2.5 text-sm"
        >
          <MessageCircle className="h-4 w-4 text-[#25D366]" />
          Tempah via WhatsApp
        </a>
      </div>
    </article>
  );
}


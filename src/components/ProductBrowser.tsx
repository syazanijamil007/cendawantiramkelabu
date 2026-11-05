"use client";

import { useMemo, useState } from "react";
import { Search, PackageX } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, productCategories } from "@/lib/products";
import { siteConfig } from "@/lib/config";

export default function ProductBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("semua");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchCat = category === "semua" || p.category === category;
      const matchQ =
        q === "" ||
        p.name.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q) ||
        p.bestFor.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, category]);

  return (
    <div>
      {/* Kawalan carian & penapis */}
      <div className="card flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari produk… (cth: cendawan tiram segar)"
            className="input pl-12"
            aria-label="Cari produk"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {productCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCategory(c.id)}
              className={`chip transition-all ${
                category === c.id
                  ? "bg-brand-green text-brand-ink shadow-soft"
                  : "bg-brand-mint/60 text-forest-700 hover:bg-brand-mint"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Status keputusan */}
      <p className="mt-5 text-sm text-brand-muted" aria-live="polite">
        Menunjukkan <strong className="text-brand-ink">{filtered.length}</strong> produk
        {query && (
          <>
            {" "}untuk carian <strong className="text-brand-ink">&ldquo;{query}&rdquo;</strong>
          </>
        )}
      </p>

      {/* Grid produk */}
      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="card mt-6 flex flex-col items-center p-14 text-center">
          <PackageX className="h-14 w-14 text-brand-muted/50" />
          <h3 className="mt-4 text-lg font-bold text-brand-ink">Tiada Produk Dijumpai</h3>
          <p className="mt-2 max-w-sm text-sm text-brand-muted">
            Cuba carian atau kategori lain. Atau hubungi kami — kami mungkin boleh
            membantu dengan keperluan anda.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
              `Halo ${siteConfig.name}, saya ingin bertanya mengenai produk yang tidak disenaraikan di laman web anda.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 px-6 py-3 text-sm"
          >
            Tanya Kami di WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}

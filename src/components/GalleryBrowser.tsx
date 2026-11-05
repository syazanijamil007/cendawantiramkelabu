"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems, galleryCategories, type GalleryCategory } from "@/lib/gallery";

export default function GalleryBrowser() {
  const [category, setCategory] = useState<GalleryCategory | "semua">("semua");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    category === "semua" ? galleryItems : galleryItems.filter((g) => g.category === category);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, prev, next]);

  const current = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div>
      {/* Penapis kategori */}
      <div className="flex flex-wrap justify-center gap-2">
        {galleryCategories.map((c) => (
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

      {/* Grid galeri */}
      <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4">
        {filtered.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl"
            aria-label={`Lihat gambar: ${item.caption}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={600}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-green">
                {item.categoryLabel}
              </p>
              <p className="mt-0.5 text-sm font-bold text-white">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-brand-muted">
          Tiada gambar dalam kategori ini lagi.
        </p>
      )}

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-950/90 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Tutup"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Gambar sebelumnya"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Gambar seterusnya"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure
            className="max-h-[85vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[75vh] w-auto rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center">
              <p className="font-bold text-white">{current.caption}</p>
              <p className="text-sm text-white/60">
                {current.categoryLabel} · {lightboxIndex !== null ? lightboxIndex + 1 : 0} / {filtered.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}

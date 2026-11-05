"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/lib/posts";

export default function BlogBrowser({ initialPosts = blogPosts }: { initialPosts?: typeof blogPosts }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("semua");

  const categories = useMemo(
    () => ["semua", ...Array.from(new Set(initialPosts.map((p) => p.category)))],
    [initialPosts]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return initialPosts.filter((p) => {
      const matchCat = category === "semua" || p.category === category;
      const matchQ =
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.content.some((s) => s.paragraphs.some((para) => para.toLowerCase().includes(q)));
      return matchCat && matchQ;
    });
  }, [query, category, initialPosts]);

  return (
    <div>
      <div className="card flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari artikel…"
            className="input pl-12"
            aria-label="Cari artikel blog"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`chip transition-all capitalize ${
                category === c
                  ? "bg-brand-green text-brand-ink shadow-soft"
                  : "bg-brand-mint/60 text-forest-700 hover:bg-brand-mint"
              }`}
            >
              {c === "semua" ? "Semua" : c}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-5 text-sm text-brand-muted" aria-live="polite">
        Menunjukkan <strong className="text-brand-ink">{filtered.length}</strong> artikel
        {query && <> untuk carian <strong className="text-brand-ink">&ldquo;{query}&rdquo;</strong></>}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <article
              key={post.slug}
              className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
            >
              <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="chip absolute left-4 top-4 bg-white/90 text-forest-800 backdrop-blur">
                  {post.category}
                </span>
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-4 text-xs text-brand-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(post.date).toLocaleDateString("ms-MY", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="mt-3 text-lg font-bold leading-snug text-brand-ink">
                  <Link href={`/blog/${post.slug}`} className="hover:text-forest-700">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-forest-700 transition-colors hover:text-brand-green"
                >
                  Baca Artikel
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="card mt-6 flex flex-col items-center p-14 text-center">
          <BookOpen className="h-14 w-14 text-brand-muted/50" />
          <h3 className="mt-4 text-lg font-bold text-brand-ink">Tiada Artikel Dijumpai</h3>
          <p className="mt-2 text-sm text-brand-muted">Cuba carian atau kategori lain.</p>
        </div>
      )}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/config";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  return (
    <>
      <section className="relative overflow-hidden bg-forest-950 pb-16 pt-32 text-white lg:pt-40">
        <div className="dot-grid absolute inset-0 opacity-10" />
        <div className="container-x relative">
          <nav className="text-sm text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-green">Laman Utama</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-brand-green">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{post.title}</span>
          </nav>
        </div>
      </section>

      <article className="py-12 lg:py-16">
        <div className="container-x max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-muted transition-colors hover:text-forest-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Blog
          </Link>

          <Reveal>
            <span className="chip bg-brand-mint text-forest-700">{post.category}</span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-5 text-sm text-brand-muted">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("ms-MY", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime} bacaan
              </span>
            </div>
          </Reveal>

          <Reveal className="mt-8">
            <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
              <Image
                src={post.image}
                alt={post.imageAlt}
                width={1200}
                height={675}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal className="mt-10">
            <div className="space-y-8">
              {post.content.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="mb-3 text-xl font-bold text-brand-ink">{section.heading}</h2>
                  )}
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="mb-3 leading-relaxed text-brand-muted last:mb-0">
                      {p}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-3 space-y-2">
                      {section.list.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-brand-muted">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Berkongsi */}
          <Reveal className="mt-12">
            <div className="card flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="font-bold text-brand-ink">Kongsi artikel ini:</p>
              <div className="flex gap-3">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`${post.title} — Baca artikel ini di ${siteConfig.name}: ${siteConfig.url}/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-5 py-2.5 text-sm"
                >
                  WhatsApp
                </a>
                <Link href="/produk" className="btn-primary px-5 py-2.5 text-sm">
                  Lihat Produk
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      {/* Artikel berkaitan */}
      {related.length > 0 && (
        <section className="bg-white py-16">
          <div className="container-x max-w-5xl">
            <h2 className="text-2xl font-extrabold text-brand-ink">Artikel Berkaitan</h2>
            <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <article
                  key={p.slug}
                  className="card group overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  <Link href={`/blog/${p.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                      {p.category}
                    </span>
                    <h3 className="mt-1.5 font-bold leading-snug text-brand-ink">
                      <Link href={`/blog/${p.slug}`} className="hover:text-forest-700">
                        {p.title}
                      </Link>
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

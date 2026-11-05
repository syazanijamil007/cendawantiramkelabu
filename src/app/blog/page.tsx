import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BlogBrowser from "@/components/BlogBrowser";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artikel dan panduan tentang cendawan tiram — resipi, tips menyimpan, proses penanaman dan potensi industri cendawan di Malaysia.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-950 pb-16 pt-32 text-white lg:pb-20 lg:pt-40">
        <div className="dot-grid absolute inset-0 opacity-10" />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-green/15 blur-3xl" />
        <div className="container-x relative text-center">
          <Reveal>
            <span className="chip bg-white/10 text-brand-green">Blog</span>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Pengetahuan tentang Cendawan
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              Resipi, tips, panduan dan artikel menarik tentang cendawan tiram
              untuk anda.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-x">
          <Reveal>
            <BlogBrowser />
          </Reveal>
        </div>
      </section>
    </>
  );
}

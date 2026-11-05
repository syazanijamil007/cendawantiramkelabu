import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  Leaf,
  Sparkles,
  Truck,
  ShieldCheck,
  HeartHandshake,
  Star,
  Quote,
  ChefHat,
  Salad,
  Soup,
  Wheat,
  Flame,
  CalendarCheck,
  PackageCheck,
  Recycle,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { galleryItems } from "@/lib/gallery";
import { siteConfig, whatsappContactLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cendawan Tiram Segar — Ladang Cendawan Tempatan Malaysia",
  description:
    "Cendawan tiram segar ditanam secara tempatan dengan kaedah terkawal dan bersih. Sesuai untuk kegunaan harian, restoran dan pembekal borong. Tempah sekarang!",
};

const marqueeItems = [
  "100% Ditanam Tempatan",
  "Dipetik Segar Setiap Hari",
  "Tanpa Bahan Pengawet",
  "Bekalan Borong & Runcit",
  "Penghantaran Seluruh Malaysia",
  "Amalan Ladang Mesra Alam",
];

const whyUs = [
  {
    icon: Leaf,
    title: "Cendawan Segar",
    desc: "Dipetik terus dari ladang pada hari yang sama — tekstur rangup dan rasa semula jadi terpelihara.",
  },
  {
    icon: ShieldCheck,
    title: "Penanaman Terkawal",
    desc: "Suhu, kelembapan dan kebersihan bilik tanaman dikawal rapi mengikut piawaian agronomi.",
  },
  {
    icon: Sparkles,
    title: "Kebersihan Terjamin",
    desc: "Proses penuaian, pengendalian dan pembungkusan mengikut amalan kebersihan yang ketat.",
  },
  {
    icon: BadgeCheck,
    title: "Kualiti Disahkan",
    desc: "Setiap kelompok cendawan disemak sebelum dihantar — hanya yang terbaik sampai ke pelanggan.",
  },
  {
    icon: Truck,
    title: "Bekalan Tempatan Pantas",
    desc: "Beroperasi di Malaysia dengan rangkaian penghantaran yang pantas dan boleh dipercayai.",
  },
  {
    icon: HeartHandshake,
    title: "Khidmat Pelanggan Mesra",
    desc: "Pasukan kami sedia membantu — daripada soalan kecil hingga tempahan borong besar.",
  },
];

const benefits = [
  {
    icon: Salad,
    title: "Sumber Serat Makanan",
    desc: "Cendawan tiram mengandungi serat yang baik untuk sistem penghadaman dan rasa kenyang yang lebih lama.",
  },
  {
    icon: Wheat,
    title: "Protein Berasaskan Tumbuhan",
    desc: "Mengandungi protein nabati yang menjadikannya pilihan sihat untuk diet vegetarian dan vegan.",
  },
  {
    icon: Flame,
    title: "Rendah Kalori",
    desc: "Kandungan kalori yang rendah menjadikan cendawan pilihan tepat untuk pengurusan pemakanan.",
  },
  {
    icon: Soup,
    title: "Serbaguna dalam Masakan",
    desc: "Sesuai untuk tumis, sup, salad, kari dan pelbagai hidangan kreatif lain.",
  },
];

const mealIdeas = [
  "Tumis bawang putih",
  "Sup telur yang menghangatkan",
  "Salad segar petang",
  "Kari santan yang wangi",
  "Roti panggang & sos",
];

const steps = [
  {
    icon: PackageCheck,
    title: "Penyediaan Medium Tanaman",
    desc: "Medium kompos disediakan dan disterilkan untuk memastikan persekitaran yang bersih.",
  },
  {
    icon: Sparkles,
    title: "Penyediaan Bongkah Bibit",
    desc: "Bongkah spawn berkualiti dimasukkan ke dalam beg medium untuk permulaan penanaman.",
  },
  {
    icon: CalendarCheck,
    title: "Proses Pemeraman",
    desc: "Miselium dibiarkan merebak dalam bilik pemeraman selama 10–14 hari pada suhu optimum.",
  },
  {
    icon: Leaf,
    title: "Penjagaan & Pertumbuhan",
    desc: "Bilik pembentukan buah dikawal untuk kelembapan, cahaya dan pengudaraan yang tepat.",
  },
  {
    icon: ChefHat,
    title: "Penuaian",
    desc: "Cendawan dipetik pada tahap kematangan optimum untuk tekstur dan rasa terbaik.",
  },
  {
    icon: Recycle,
    title: "Pembungkusan & Penghantaran",
    desc: "Produk dibungkus secara higienik dan dihantar dengan cepat kepada pelanggan.",
  },
];

// TESTIMONI CONTOH — GANTIKAN DENGAN TESTIMONI SEBENAR SEBELUM PENERBITAN
const sampleTestimonials = [
  {
    name: "[Nama Pelanggan]",
    role: "Pengguna individu",
    text: "[Contoh testimoni — sila gantikan dengan maklum balas pelanggan sebenar.] Cendawan segar dan selalu ada apabila saya perlukan untuk masakan harian.",
  },
  {
    name: "[Nama Restoran]",
    role: "Restoran / Kafe",
    text: "[Contoh testimoni — sila gantikan dengan maklum balas pelanggan sebenar.] Bekalan konsisten dan kualiti yang boleh dipercayai untuk dapur kami.",
  },
  {
    name: "[Nama Pembekal]",
    role: "Pembekal borong",
    text: "[Contoh testimoni — sila gantikan dengan maklum balas pelanggan sebenar.] Harga borong yang berpatutan dengan penghantaran yang boleh dipercayai.",
  },
];

export default function HomePage() {
  const featured = products.slice(0, 4);
  const galleryPreview = galleryItems.filter((g) => g.category === "produk").slice(0, 6);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-brand-green/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-brand-blue/20 blur-3xl" />

        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="chip bg-brand-mint text-forest-700">
              <Leaf className="h-4 w-4" />
              Ditanam Tempatan di Malaysia
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
              Cendawan Tiram Segar,{" "}
              <span className="relative inline-block text-forest-600">
                Pilihan Bijak
                <svg
                  className="absolute -bottom-2 left-0 w-full text-brand-green"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9C60 3 140 3 198 8"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Untuk Hidangan Anda.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-muted">
              Cendawan tiram segar yang ditanam secara tempatan dengan kaedah terkawal,
              bersih dan mampan. Daripada dapur keluarga kepada dapur restoran — kami
              memastikan setiap kelompok yang sampai ke tangan anda adalah yang terbaik.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/produk" className="btn-primary px-7 py-3.5 text-base">
                Lihat Produk
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={whatsappContactLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-7 py-3.5 text-base"
              >
                Hubungi Kami
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-brand-muted">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-brand-green" />
                Kualiti Terjamin
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-brand-green" />
                Penghantaran Malaysia
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-brand-green" />
                Runcit & Borong
              </div>
            </div>
          </div>

          {/* Imej hero dengan bentuk organik */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="blob absolute -left-6 -top-6 h-40 w-40 bg-brand-mauve/30" />
            <div className="blob-alt absolute -bottom-8 -right-4 h-48 w-48 bg-brand-blue/30" />
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-soft ring-4 ring-white">
              <Image
                src="/images/cluster-07.jpg"
                alt="Kelompok cendawan tiram segar yang dipetik dari ladang"
                width={1200}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="card absolute -bottom-6 -left-4 flex animate-float items-center gap-3 px-5 py-4 sm:-left-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-mint text-forest-700">
                <Leaf className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-brand-ink">100% Semula Jadi</p>
                <p className="text-xs text-brand-muted">Tiada bahan pengawet</p>
              </div>
            </div>
            <div
              className="card absolute -right-3 top-8 flex animate-float items-center gap-3 px-5 py-4 sm:right-6"
              style={{ animationDelay: "1.5s" }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/25 text-forest-800">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-brand-ink">Segar Setiap Hari</p>
                <p className="text-xs text-brand-muted">Penuaian harian</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="overflow-hidden border-y border-brand-ink/5 bg-white py-4">
        <div className="marquee-track flex w-max animate-marquee gap-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap text-sm font-bold uppercase tracking-wider text-forest-700"
            >
              <Leaf className="h-4 w-4 text-brand-green" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ============ ABOUT PREVIEW ============ */}
      <section className="py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-soft">
              <Image
                src="/images/farm-11.jpg"
                alt="Kawasan ladang penanaman cendawan yang dikawal rapi"
                width={1000}
                height={750}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="card absolute -right-4 -top-6 px-6 py-5 sm:right-6">
              <p className="text-3xl font-extrabold text-forest-700">Sejak 2020</p>
              <p className="text-sm text-brand-muted">Membekalkan cendawan segar</p>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Tentang Kami"
              title="Ladang Cendawan Kecil dengan Komitmen Besar"
              description="Cendawan Segar ditubuhkan dengan satu matlamat mudah — untuk membawa cendawan tiram segar, berkualiti dan mesra alam terus ke meja makan rakyat Malaysia."
            />
            <p className="mt-4 leading-relaxed text-brand-muted">
              Kami mengamalkan penanaman terkawal dalam persekitaran bersih, dengan fokus
              terhadap kesegaran, kebersihan dan kelestarian. Setiap kelompok cendawan
              dipantau dari peringkat bibit hingga penuaian, memastikan apa yang sampai
              ke tangan anda adalah yang terbaik.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Penanaman di dalam persekitaran terkawal yang bersih",
                "Amalan pengendalian yang mematuhi piawaian kebersihan",
                "Komitmen kepada produk tempatan dan mampan",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-ink">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/25 text-forest-700">
                    <BadgeCheck className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/tentang-kami" className="btn-primary mt-8 px-7 py-3.5">
              Kenali Kami
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ FEATURED PRODUCTS ============ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Produk Kami"
            title="Cendawan Segar untuk Setiap Keperluan"
            description="Daripada pek segar untuk keluarga hingga bekalan borong untuk perniagaan — kami ada untuk anda."
          />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link href="/produk" className="btn-secondary px-8 py-3.5">
              Lihat Semua Produk
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Kelebihan Kami"
            title="Kenapa Pilih Cendawan Segar?"
            description="Kami tidak sekadar menjual cendawan — kami menjual keyakinan bahawa setiap suapan keluarga anda adalah yang terbaik."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 100}>
                <div className="card group h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-mint text-forest-700 transition-colors group-hover:bg-brand-green">
                    <item.icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-brand-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MUSHROOM BENEFITS ============ */}
      <section className="relative overflow-hidden bg-forest-950 py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />
        <div className="container-x relative">
          <SectionHeading
            dark
            eyebrow="Khasiat Cendawan"
            title="Cendawan Tiram: Ringkas, Sihat & Serbaguna"
            description="Cendawan tiram bukan sahaja sedap — ia juga pilihan pemakanan yang bijak untuk gaya hidup sihat."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 100}>
                <div className="h-full rounded-4xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur transition-colors hover:bg-white/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green/20 text-brand-green">
                    <b.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <div className="card flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:text-left">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-mint text-forest-700">
                <ChefHat className="h-7 w-7" />
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-brand-ink">
                  Mudah Dimasukkan ke dalam Diet Harian
                </h3>
                <p className="mt-1 text-sm text-brand-muted">
                  Cuba cendawan dalam hidangan kegemaran anda — tumis untuk sarapan,
                  sup untuk makan malam, atau salad untuk snek petang.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {mealIdeas.map((m) => (
                  <span key={m} className="chip bg-brand-mint text-forest-700">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-10 text-center">
            <Link href="/khasiat-cendawan" className="btn-primary px-7 py-3.5">
              Ketahui Lebih Lanjut
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ FARMING PROCESS ============ */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Proses Penanaman"
            title="Daripada Bibit ke Meja Anda"
            description="Setiap kelompok cendawan melalui proses yang teliti — berikut adalah perjalanan cendawan kami dari ladang ke pinggan anda."
          />
          <div className="relative mt-16">
            {/* Garis penyambung desktop */}
            <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-gradient-to-r from-brand-green/20 via-brand-blue/40 to-brand-mauve/30 lg:block" />
            <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 80}>
                  <li className="relative flex flex-col items-center text-center">
                    <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-card ring-2 ring-brand-green/30 transition-all duration-300 hover:scale-110 hover:ring-brand-green">
                      <step.icon className="h-8 w-8 text-forest-700" strokeWidth={1.8} />
                    </span>
                    <span className="mt-3 text-xs font-extrabold uppercase tracking-wider text-brand-green">
                      Langkah {i + 1}
                    </span>
                    <h3 className="mt-1 text-sm font-bold leading-snug text-brand-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-brand-muted">
                      {step.desc}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-brand-mint/40 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Testimoni"
            title="Apa Kata Pelanggan Kami"
            description="Kami menghargai setiap maklum balas — inilah antara pengalaman pelanggan kami."
          />
          <div className="mt-6 flex justify-center">
            <p className="chip bg-amber-100 text-amber-800 ring-1 ring-amber-300">
              <Star className="h-4 w-4" />
              Kandungan contoh — akan dikemas kini dengan testimoni sebenar
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sampleTestimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="card flex h-full flex-col p-7">
                  <Quote className="h-8 w-8 text-brand-mauve" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-brand-ink/85">
                    {t.text}
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-brand-ink/5 pt-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-mauve/25 font-bold text-forest-800">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-brand-ink">{t.name}</p>
                      <p className="text-xs text-brand-muted">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GALLERY PREVIEW ============ */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Galeri"
            title="Jejak Perjalanan Cendawan Kami"
            description="Daripada ladang hingga ke meja makan — lihat sendiri kualiti dan kesegaran produk kami."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {galleryPreview.map((g, i) => (
              <Reveal key={g.src} delay={i * 60} className={i === 0 ? "col-span-2 row-span-2" : ""}>
                <Link
                  href="/galeri"
                  className={`group relative block overflow-hidden rounded-3xl ${
                    i === 0 ? "h-full min-h-[280px]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <p className="absolute bottom-3 left-3 right-3 translate-y-2 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {g.caption}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link href="/galeri" className="btn-secondary px-8 py-3.5">
              Lihat Semua Galeri
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="container-x pb-20 lg:pb-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-forest-900 px-8 py-16 text-center text-white sm:px-16 lg:py-20">
            <div className="dot-grid absolute inset-0 opacity-20" />
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-brand-green/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-brand-mauve/20 blur-3xl" />
            <div className="relative">
              <span className="chip bg-white/10 text-brand-green">Hubungi Kami</span>
              <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ingin Mendapatkan Cendawan Tiram Segar?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/75">
                Sama ada anda pelanggan individu, restoran, kedai runcit atau pembekal
                borong — kami sedia membantu memenuhi keperluan cendawan anda.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/hubungi-kami" className="btn-primary px-8 py-3.5 text-base">
                  Hubungi Kami Sekarang
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href={whatsappContactLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-light px-8 py-3.5 text-base"
                >
                  WhatsApp Langsung
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

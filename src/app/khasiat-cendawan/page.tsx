import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Salad,
  Wheat,
  Flame,
  Soup,
  Info,
  Snowflake,
  ShoppingBasket,
  Recycle,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import { siteConfig, whatsappContactLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Khasiat Cendawan Tiram",
  description:
    "Ketahui khasiat dan nilai pemakanan cendawan tiram — sumber serat, protein tumbuhan dan nutrien penting. Tips memasak, menyimpan dan memilih cendawan berkualiti.",
};

const nutrition = [
  { label: "Tenaga", value: "~33 kcal", note: "per 100g (mentah)", color: "bg-brand-green" },
  { label: "Protein", value: "~3.3g", note: "protein nabati", color: "bg-brand-blue" },
  { label: "Serat", value: "~2.0g", note: "membantu penghadaman", color: "bg-brand-mauve" },
  { label: "Karbohidrat", value: "~6.1g", note: "tenaga sihat", color: "bg-forest-400" },
];

const benefits = [
  {
    icon: Wheat,
    title: "Sumber Protein Tumbuhan",
    desc: "Cendawan tiram mengandungi semua asid amino penting dalam kuantiti kecil, menjadikannya alternatif protein yang baik untuk diet vegetarian dan vegan.",
  },
  {
    icon: Salad,
    title: "Kaya Serat Makanan",
    desc: "Serat dalam cendawan membantu mengenyangkan perut lebih lama dan menyokong sistem penghadaman yang sihat.",
  },
  {
    icon: Flame,
    title: "Rendah Kalori & Lemak",
    desc: "Dengan hanya sekitar 33 kalori per 100g, cendawan tiram adalah pilihan ideal untuk pengurusan berat badan dan pemakanan sihat.",
  },
  {
    icon: Recycle,
    title: "Vitamin & Mineral",
    desc: "Mengandungi vitamin B (termasuk B2/riboflavin dan B3/niacin), kalium, zat besi dan fosforus dalam kuantiti yang bermanfaat.",
  },
  {
    icon: Soup,
    title: "Sumber Beta-Glukan",
    desc: "Cendawan mengandungi beta-glukan, sejenis polisakarida yang dikaji untuk sifat sokongan imun dan kesihatan jantung.",
  },
  {
    icon: Leaf,
    title: "Serbaguna & Mudah Disediakan",
    desc: "Tidak perlu dimasak lama — cendawan tiram boleh dimakan mentah dalam salad atau dimasak dalam beberapa minit sahaja.",
  },
];

const cookingMethods = [
  {
    title: "Tumis / Goreng",
    desc: "Kaedah paling popular — tumis dengan bawang putih selama 3–5 minit sehingga layu tetapi masih rangup.",
  },
  {
    title: "Sup & Stew",
    desc: "Cendawan menambah tekstur dan perisa umami pada sup. Rebus bersama sayur-sayuran dan protein pilihan anda.",
  },
  {
    title: "Bakar / Panggang",
    desc: "Salutan sedikit minyak zaitun dan perasa, kemudian bakar — hasilnya rangup di luar dan lembap di dalam.",
  },
  {
    title: "Salad & Hidangan Mentah",
    desc: "Cendawan segar boleh dimakan mentah — hiris nipis dan campur dengan sos salad kegemaran anda.",
  },
];

const storageTips = [
  "Jangan basuh cendawan sebelum disimpan — air mempercepatkan reput",
  "Simpan dalam beg kertas atau tisu dapur (bukan plastik kedap)",
  "Letakkan dalam peti sejuk bahagian sayur-sayuran",
  "Gunakan dalam masa 5–7 hari untuk kesegaran optimum",
  "Koyakkan pada pangkal, bukan potong — cendawan tahan lebih lama",
];

const faqs = [
  {
    question: "Apakah itu cendawan tiram?",
    answer:
      "Cendawan tiram (Pleurotus ostreatus) ialah sejenis kulat yang tumbuh dalam kelompok, bentuknya seperti tiram atau kipas. Ia dikenali dengan daging yang lembap dan rasa yang lembut sedikit manis. Cendawan ini adalah antara spesies cendawan yang paling banyak ditanam di dunia kerana mudah ditanam dan mempunyai nilai pemakanan yang baik.",
  },
  {
    question: "Adakah cendawan tiram sihat untuk dimakan setiap hari?",
    answer:
      "Ya, cendawan tiram boleh dimakan sebagai sebahagian daripada diet seimbang harian. Ia rendah kalori, mengandungi serat dan protein tumbuhan, serta pelbagai vitamin dan mineral. Walau bagaimanapun, seperti semua makanan, ia paling baik dimakan dalam kepelbagaian — bukan bergantung pada satu sumber sahaja.",
  },
  {
    question: "Bolehkah cendawan tiram dimakan mentah?",
    answer:
      "Ya, cendawan tiram segar boleh dimakan mentah dalam salad atau hidangan lain. Namun, sesetengah orang lebih suka memasaknya kerana tekstur dan rasa yang lebih baik. Jika makan mentah, pastikan ia dibasuh dengan bersih terlebih dahulu.",
  },
  {
    question: "Berapa lama cendawan tiram boleh disimpan?",
    answer:
      "Cendawan tiram segar yang disimpan dengan betul dalam peti sejuk boleh kekal segar selama 5–7 hari. Simpan dalam beg kertas atau tisu dapur, dan jangan basuh sehingga sedia untuk dimasak. Cendawan tiram kering boleh disimpan lebih lama dalam bekas kedap udara.",
  },
  {
    question: "Adakah cendawan tiram sesuai untuk vegetarian dan vegan?",
    answer:
      "Ya, cendawan tiram adalah produk berasaskan tumbuhan dan sesuai untuk vegetarian serta vegan. Ia juga sumber protein yang baik untuk mereka yang mengurangkan pengambilan daging.",
  },
  {
    question: "Bagaimana cara membersihkan cendawan tiram?",
    answer:
      "Lap permukaan cendawan dengan tisu dapur kering atau berus lembut untuk membuang habuk. Jika perlu, bilas dengan cepat di bawah air sejuk dan keringkan dengan segera. Jangan rendam dalam air kerana cendawan menyerap air dengan cepat.",
  },
  {
    question: "Adakah cendawan tiram mengandungi bahan berbahaya?",
    answer:
      "Cendawan tiram yang ditanam secara komersial adalah selamat untuk dimakan. Pastikan anda membeli daripada sumber yang dipercayai yang mengamalkan amalan kebersihan dan kualiti yang baik. Cendawan Segar menjamin produk kami ditanam dalam persekitaran terkawal yang bersih.",
  },
];

export default function KhasiatPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-950 pb-16 pt-32 text-white lg:pb-20 lg:pt-40">
        <div className="dot-grid absolute inset-0 opacity-10" />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-green/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="container-x relative text-center">
          <span className="chip bg-white/10 text-brand-green">Edukasi</span>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Khasiat & Nilai Pemakanan Cendawan Tiram
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
            Ketahui lebih lanjut tentang cendawan tiram — makanan yang ringkas,
            berkhasiat dan serbaguna untuk diet harian anda.
          </p>
        </div>
      </section>

      {/* Apa itu cendawan tiram */}
      <section className="py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Pengenalan"
              title="Apa Itu Cendawan Tiram?"
              description="Cendawan tiram (Pleurotus ostreatus) ialah kulat yang tumbuh dalam kelompok, bentuknya menyerupai tiram atau kipas."
            />
            <div className="mt-6 space-y-4 leading-relaxed text-brand-muted">
              <p>
                Cendawan ini dinamakan kerana bentuknya yang menyerupai tiram laut,
                dengan bentuk kipas atau sudu yang lebar. Dagingnya lembap, teksturnya
                rangup dan rasanya lembut sedikit manis — menjadikannya sesuai untuk
                pelbagai jenis masakan.
              </p>
              <p>
                Cendawan tiram adalah antara spesies cendawan yang paling popular di
                Malaysia kerana mudah ditanam, harganya berpatutan dan nilainya
                pemakanannya yang baik. Ia juga dikenali sebagai oyster mushroom,
                grey oyster, dan abalone mushroom dalam bahasa Inggeris.
              </p>
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-brand-blue/15 p-4 text-sm text-forest-800">
              <Info className="mt-0.5 h-5 w-5 shrink-0" />
              <p>
                <strong>Nota:</strong> Maklumat pemakanan di halaman ini adalah panduan
                umum. Untuk nasihat perubatan yang spesifik, sila rujuk pakar kesihatan.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/cluster-08.jpg"
                alt="Kelompok cendawan tiram dengan bentuk kipas yang unik"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Nilai pemakanan */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Nilai Pemakanan"
            title="Apa Yang Ada Dalam Cendawan Tiram?"
            description="Cendawan tiram adalah makanan yang padat nutrien — berikut adalah gambaran nilai pemakanannya."
          />

          {/* Bar pemakanan */}
          <div className="mx-auto mt-12 grid max-w-3xl gap-5">
            {nutrition.map((n, i) => (
              <Reveal key={n.label} delay={i * 80}>
                <div className="card p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-brand-ink">{n.label}</span>
                    <span className="text-lg font-extrabold text-forest-700">{n.value}</span>
                  </div>
                  <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-brand-mint">
                    <div
                      className={`h-full rounded-full ${n.color}`}
                      style={{ width: `${(i + 1) * 20 + 20}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-brand-muted">{n.note} — anggaran per 100g</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Manfaat */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 100}>
                <div className="card h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mint text-forest-700">
                    <b.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-bold text-brand-ink">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cara memasak */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Panduan Masakan"
            title="Pelbagai Cara Memasak Cendawan Tiram"
            description="Cendawan tiram sangat serbaguna — berikut adalah cara-cara popular untuk menikmatinya."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cookingMethods.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="card h-full p-6 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/20 text-forest-800">
                    <Soup className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 font-bold text-brand-ink">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tips simpanan */}
      <section className="bg-brand-mint/40 py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Tips Penyimpanan"
              title="Pastikan Cendawan Anda Kekal Segar"
              description="Dengan penyimpanan yang betul, cendawan tiram anda boleh kekal segar sehingga 5–7 hari."
            />
            <ul className="mt-8 space-y-4">
              {storageTips.map((tip) => (
                <li key={tip} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/25 text-forest-700">
                    <Snowflake className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-brand-ink">{tip}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/mushroom-06.jpg"
                alt="Cendawan tiram segar yang disimpan dengan betul"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Soalan Lazim"
            title="Soalan Yang Kerap Ditanya"
            description="Jawapan kepada soalan-soalan biasa tentang cendawan tiram."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 lg:pb-28">
        <div className="container-x">
          <Reveal>
            <div className="card relative overflow-hidden p-10 text-center sm:p-14">
              <div className="dot-grid absolute inset-0 opacity-30" />
              <div className="relative">
                <ShoppingBasket className="mx-auto h-10 w-10 text-brand-green" />
                <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-brand-ink">
                  Sedia untuk Mencuba Cendawan Tiram?
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-brand-muted">
                  Dapatkan cendawan segar kami untuk hidangan yang lebih sihat dan lazat.
                </p>
                <div className="mt-7 flex flex-wrap justify-center gap-4">
                  <Link href="/produk" className="btn-primary px-8 py-3.5">
                    Lihat Produk
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <a
                    href={whatsappContactLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-8 py-3.5"
                  >
                    WhatsApp Kami
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

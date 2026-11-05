import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Eye,
  Target,
  Sprout,
  ShieldCheck,
  HeartHandshake,
  Recycle,
  Award,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali Cendawan Segar — ladang cendawan tiram tempatan yang mengamalkan penanaman terkawal, kebersihan ketat dan komitmen kepada produk berkualiti di Malaysia.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Kualiti Tanpa Kompromi",
    desc: "Setiap kelompok cendawan diperiksa dengan teliti sebelum sampai ke tangan pelanggan.",
  },
  {
    icon: Sprout,
    title: "Sumber Tempatan",
    desc: "Ditanam dan diproses di Malaysia — menyokong ekonomi tempatan dan mengurangkan jejak karbon.",
  },
  {
    icon: Recycle,
    title: "Lestari & Bertanggungjawab",
    desc: "Kami mengamalkan amalan lestari dalam pengurusan sisa dan sumber ladang.",
  },
  {
    icon: HeartHandshake,
    title: "Komitmen Pelanggan",
    desc: "Kepuasan pelanggan adalah keutamaan — kami sentiasa bersedia membantu.",
  },
];

export default function TentangPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-950 pb-20 pt-32 text-white lg:pb-28 lg:pt-40">
        <div className="dot-grid absolute inset-0 opacity-10" />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-green/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="container-x relative text-center">
          <Reveal>
            <span className="chip bg-white/10 text-brand-green">Tentang Kami</span>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Ladang Cendawan dengan Hati di Malaysia
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              {siteConfig.name} — {siteConfig.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Kisah & Pengenalan */}
      <section className="py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Latar Belakang"
              title="Bermula dengan Satu Minat: Cendawan"
              description="Setiap perniagaan bermula dengan satu idea. Bagi kami, ia bermula dengan minat terhadap cendawan — makanan yang ringkas, berkhasiat dan sering terabai."
            />
            <div className="mt-6 space-y-4 leading-relaxed text-brand-muted">
              <p>
                {siteConfig.name} diasaskan dengan visi untuk menjadikan cendawan tiram —
                yang juga dikenali sebagai oyster mushroom atau {`"`}cendawan susu
                tiram{`"`} — lebih mudah diakses oleh rakyat Malaysia. Kami percaya
                makanan berkualiti tidak semestinya mahal atau sukar didapati.
              </p>
              <p>
                Bermula sebagai ladang kecil, kami telah berkembang menjadi pembekal
                cendawan yang dipercayai oleh pelanggan individu, restoran, kedai
                runcit dan pemborong di seluruh Malaysia. Matlamat kami tetap sama:
                membawa kesegaran alam ke setiap hidangan.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-5">
              <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
                <Image
                  src="/images/farm-12.jpg"
                  alt="Bahagian dalam ladang penanaman cendawan"
                  width={900}
                  height={600}
                  className="h-64 w-full object-cover sm:h-80"
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
                  <Image
                    src="/images/bags-16.jpg"
                    alt="Proses penyediaan medium tanaman cendawan"
                    width={600}
                    height={500}
                    className="h-44 w-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
                  <Image
                    src="/images/harvest-20.jpg"
                    alt="Hasil penuaian cendawan"
                    width={600}
                    height={500}
                    className="h-44 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Visi & Misi"
            title="Ke Mana Kami Heading"
            description="Visi dan misi yang membimbing setiap keputusan yang kami buat."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="card flex h-full flex-col p-8 lg:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green text-brand-ink">
                  <Eye className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-2xl font-extrabold text-brand-ink">Visi Kami</h3>
                <p className="mt-3 leading-relaxed text-brand-muted">
                  Menjadi jenama cendawan tempatan terke hadapan di Malaysia —
                  dikenali kerana kesegaran, kualiti dan komitmen kepada pelanggan
                  serta alam sekitar.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card flex h-full flex-col p-8 lg:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/30 text-forest-800">
                  <Target className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-2xl font-extrabold text-brand-ink">Misi Kami</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Menghasilkan cendawan tiram segar berkualiti tinggi menggunakan kaedah terkawal",
                    "Memastikan kebersihan dan keselamatan makanan pada setiap peringkat",
                    "Menyediakan produk yang berpatutan untuk semua lapisan masyarakat",
                    "Membina hubungan jangka panjang dengan pelanggan dan rakan perniagaan",
                    "Mengamalkan pertanian lestari yang mesra alam",
                  ].map((m) => (
                    <li key={m} className="flex items-start gap-3 text-brand-muted">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-green" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Objektif Perniagaan */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Objektif"
                title="Apa Yang Kami Usahakan"
                description="Objektif perniagaan kami adalah jelas dan boleh diukur."
              />
              <ul className="mt-8 space-y-4">
                {[
                  {
                    icon: Award,
                    title: "Kualiti Produk",
                    desc: "Menetapkan piawaian kualiti yang tinggi dalam setiap kelompok cendawan yang dihasilkan.",
                  },
                  {
                    icon: Users,
                    title: "Kepuasan Pelanggan",
                    desc: "Memastikan setiap pelanggan mendapat produk segar dan perkhidmatan yang memuaskan.",
                  },
                  {
                    icon: Sprout,
                    title: "Pertumbuhan Lestari",
                    desc: "Mengembangkan kapasiti ladang secara mampan tanpa menjejaskan kualiti.",
                  },
                ].map((o) => (
                  <li key={o.title} className="card flex items-start gap-4 p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-mint text-forest-700">
                      <o.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-bold text-brand-ink">{o.title}</h4>
                      <p className="mt-1 text-sm text-brand-muted">{o.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-soft">
                <Image
                  src="/images/farm-13.jpg"
                  alt="Rak tanaman cendawan yang tersusun kemas"
                  width={900}
                  height={700}
                  className="h-full min-h-[380px] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Falsafah & Jaminan Kualiti */}
      <section className="bg-forest-950 py-20 text-white lg:py-28">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <span className="chip bg-white/10 text-brand-green">Falsafah Ladang</span>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Hargai Alam, Hargai Cendawan
              </h2>
              <div className="mt-5 space-y-4 leading-relaxed text-white/75">
                <p>
                  Kami percaya cendawan yang baik datang daripada persekitaran yang baik.
                  Itulah sebabnya kami melabur dalam sistem kawalan alam sekitar yang
                  tepat — suhu, kelembapan, pengudaraan dan kebersihan — kerana cendawan
                  yang sihat hanya tumbuh dalam keadaan optimum.
                </p>
                <p>
                  Kami juga percaya dalam ketelusan. Pelanggan berhak tahu dari mana
                  makanan mereka datang dan bagaimana ia dihasilkan. Itulah sebabnya
                  kami berkongsi proses penanaman kami secara terbuka di laman web ini.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-5">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="flex items-start gap-4 rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur transition-colors hover:bg-white/10"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-green/20 text-brand-green">
                      <v.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-bold">{v.title}</h4>
                      <p className="mt-1 text-sm text-white/65">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <div className="card relative overflow-hidden p-10 text-center sm:p-14">
              <div className="dot-grid absolute inset-0 opacity-30" />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
                  Sedia untuk Mencuba Cendawan Segar Kami?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-brand-muted">
                  Terokai produk kami atau hubungi kami untuk pertanyaan lanjut.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link href="/produk" className="btn-primary px-8 py-3.5">
                    Lihat Produk
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link href="/hubungi-kami" className="btn-secondary px-8 py-3.5">
                    Hubungi Kami
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

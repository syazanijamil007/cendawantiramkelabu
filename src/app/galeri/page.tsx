import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import GalleryBrowser from "@/components/GalleryBrowser";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Lihat galeri foto cendawan tiram kami — produk segar, ladang penanaman, proses pertumbuhan dan aktiviti perniagaan.",
};

export default function GaleriPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-950 pb-16 pt-32 text-white lg:pb-20 lg:pt-40">
        <div className="dot-grid absolute inset-0 opacity-10" />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-green/15 blur-3xl" />
        <div className="container-x relative text-center">
          <Reveal>
            <span className="chip bg-white/10 text-brand-green">Galeri</span>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Jejak Perjalanan Cendawan Kami
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              Daripada ladang hingga ke meja makan — lihat sendiri kualiti,
              kesegaran dan proses di sebalik produk kami.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-x">
          <Reveal>
            <GalleryBrowser />
          </Reveal>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { Sprout } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 pt-24">
      <div className="text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-mint text-forest-700">
          <Sprout className="h-8 w-8" />
        </span>
        <h1 className="mt-6 text-6xl font-extrabold text-brand-ink">404</h1>
        <p className="mt-3 text-lg text-brand-muted">
          Maaf, halaman yang anda cari tidak ditemui.
        </p>
        <Link href="/" className="btn-primary mt-8 px-8 py-3.5">
          Kembali ke Laman Utama
        </Link>
      </div>
    </section>
  );
}

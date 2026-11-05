# Cendawan Segar — Laman Web Perniagaan Cendawan Tiram

Laman web moden untuk perniagaan cendawan tiram (oyster mushroom) di Malaysia.
Dibina dengan **Next.js 15**, **TypeScript**, **Tailwind CSS** dan **Lucide Icons**.

> **Status:** Semua kandungan adalah dalam Bahasa Melayu. Butiran perniagaan,
> harga dan testimoni adalah **placeholder** — sila kemas kini sebelum
> diterbitkan. Lihat bahagian [Konfigurasi](#konfigurasi) di bawah.

---

## Ciri-ciri

- **7 halaman lengkap** — Laman Utama, Tentang Kami, Produk, Khasiat Cendawan, Galeri, Blog (dengan artikel individu), Hubungi Kami
- **Reka bentuk responsif** — desktop, tablet & mudah alih
- **Katalog produk** — carian, penapis kategori, halaman butiran produk
- **Galeri foto** — penapis kategori + lightbox (keyboard navigation)
- **Blog** — 5 artikel dengan carian & penapis
- **Borang hubungi** — pengesahan input, dihantar melalui WhatsApp
- **Integrasi WhatsApp** — butang tempah dihantar dengan nama produk secara automatik
- **SEO** — metadata, Open Graph, breadcrumb, JSON-LD sedia
- **Animasi** — kemasukan scroll, hover effects, marquee, floating buttons
- **Aksesibiliti** — navigasi keyboard, aria-labels, fokus visible

---

## Menjalankan Secara Lokal

### Prasyarat

- Node.js 18+ (disyorkan Node.js 20 LTS atau lebih baharu)
- npm atau pnpm

### Pemasangan

```bash
git clone https://github.com/syazanijamil007/cendawantiramkelabu.git
cd cendawantiramkelabu
npm install
```

### Pembangunan

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### Binaan Produksi

```bash
npm run build
npm start
```

---

## Struktur Projek

```
cendawantiramkelabu/
├── public/
│   └── images/                  # Imej produk, ladang & galeri (32 fail)
├── src/
│   ├── app/                     # Halaman (App Router)
│   │   ├── page.tsx             # Laman Utama
│   │   ├── tentang-kami/
│   │   ├── produk/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx  # Butiran produk
│   │   ├── khasiat-cendawan/
│   │   ├── galeri/
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx  # Artikel blog
│   │   ├── hubungi-kami/
│   │   ├── layout.tsx           # Layout utama (nav, footer, SEO)
│   │   ├── globals.css          # Gaya global & design system
│   │   └── not-found.tsx
│   ├── components/              # Komponen boleh guna semula
│   │   ├── Navbar.tsx           # Navigasi + menu mudah alih
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductBrowser.tsx   # Carian & penapis produk
│   │   ├── BlogBrowser.tsx      # Carian & penapis blog
│   │   ├── GalleryBrowser.tsx   # Galeri + lightbox
│   │   ├── ContactForm.tsx      # Borang dengan pengesahan
│   │   ├── FAQ.tsx              # Akordion FAQ
│   │   ├── Reveal.tsx           # Animasi kemasukan
│   │   ├── SectionHeading.tsx
│   │   ├── WhatsAppFloat.tsx    # Butang WhatsApp terapung
│   │   └── BackToTop.tsx
│   └── lib/
│       ├── config.ts            # ★ KONFIGURASI PERNIAGAAN ★
│       ├── products.ts          # Data produk
│       ├── posts.ts             # Data artikel blog
│       └── gallery.ts           # Data galeri
├── tailwind.config.ts           # Palet warna & tema
├── next.config.mjs
└── package.json
```

---

## Konfigurasi

Semua butiran perniagaan dikawal dari **satu fail**: `src/lib/config.ts`

### Nombor WhatsApp (WAJIB)

```ts
whatsapp: "60123456789",        // Format antarabangsa TANPA "+" atau ruang
whatsappDisplay: "+60 12-345 6789",
```

Gantikan `60123456789` dengan nombor WhatsApp sebenar perniagaan.

### Maklumat Perniagaan

```ts
email: "hello@cendawansegar.com",
phoneDisplay: "+60 12-345 6789",
addressDisplay: "Lot 123, ...",
hours: [...],                   // Waktu operasi
socials: { facebook, instagram, tiktok },
mapsEmbedUrl: "...",            // URL embed Google Maps
url: "https://domain-anda.com", // Untuk SEO & metadata
```

### Harga Produk

Harga produk disimpan dalam `src/lib/products.ts` (`priceRM`).

- Untuk menetapkan harga sebenar: tukar nilai `priceRM` kepada nombor (cth. `12.50`).
- Untuk menyembunyikan harga: tetapkan `priceRM: null` — paparan akan menjadi
  "Hubungi kami".
- Tetapkan `placeholderPrices: false` dalam `config.ts` apabila harga sebenar
  telah dimasukkan untuk mengalih keluar nota harga contoh.

### Testimoni

Testimoni di laman utama adalah **placeholder yang ditanda dengan jelas**.
Gantikan kandungan dalam array `sampleTestimonials` dalam `src/app/page.tsx`
dengan maklum balas pelanggan sebenar sebelum diterbitkan.

### Menambah Produk / Artikel / Gambar

- **Produk baharu** — tambah objek dalam `src/lib/products.ts`.
- **Artikel blog baharu** — tambah objek dalam `src/lib/posts.ts`.
- **Gambar galeri** — tambah fail ke `public/images/` dan entri dalam
  `src/lib/gallery.ts`.

---

## Deploy

### Vercel (disyorkan)

```bash
npm install -g vercel
vercel
```

Atau sambungkan repositori GitHub terus di [vercel.com](https://vercel.com).

### Netlify

```bash
npm run build
# Publish directory: .next
# Build command: npm run build
```

(Gunakan adapter Netlify atau `next-on-netlify` jika perlu.)

### Pelayan Node.js biasa

```bash
npm run build
npm start
# Serves on http://localhost:3000
```

Selepas deploy, **kemas kini `siteConfig.url`** dalam `src/lib/config.ts`
dengan domain sebenar untuk SEO yang optimum.

---

## Palet Warna Jenama

| Token | Warna | Penggunaan |
|---|---|---|
| `brand-green` | `#3DF040` | Warna utama — CTA, aksen |
| `brand-blue` | `#7AD6EB` | Aksen sekunder |
| `brand-mauve` | `#C690AF` | Aksen tersier |
| `brand-bg` | `#FAFCF8` | Latar belakang |
| `brand-ink` | `#243329` | Teks gelap |
| `brand-muted` | `#68766C` | Teks sekunder |
| `forest-*` | Skala hijau gelap | Section gelap, footer |

---

## Nota & Had

- Borang hubungi menghantar mesej melalui WhatsApp (bukan e-mel automatik).
  Untuk borang e-mel sebenar, sambungkan perkhidmatan seperti Formspree,
  Resend, atau API WhatsApp Business.
- Gambar diambil daripada Wikimedia Commons — pastikan lesen yang sesuai
  jika digunakan secara komersial, atau gantikan dengan fotografi sendiri.
- Tiada backend diperlukan — semua halaman dijana secara statik.

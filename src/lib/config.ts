/**
 * ============================================================
 *  KONFIGURASI PERNIAGAAN — CENDawan Segar
 *  Ubah nilai di bawah ini mengikut maklumat sebenar perniagaan.
 * ============================================================
 */

export const siteConfig = {
  /** Nama perniagaan */
  name: "Cendawan Segar",
  /** Nama pendek untuk logo/nav */
  shortName: "CendawanSegar",
  tagline: "Kesegaran Alam, Kebaikan Setiap Hidangan.",
  description:
    "Cendawan tiram segar yang ditanam secara tempatan dengan kaedah terkawal, bersih dan mampan. Sesuai untuk kegunaan harian, restoran, kedai runcit dan pembekal borong.",

  /** URL tapak web — kemas kini dengan domain sebenar selepas deploy */
  url: "https://cendawansegar.example.com",

  /** Nombor WhatsApp dalam format antarabangsa tanpa "+", "+", atau ruang.
   *  Contoh Malaysia: "60123456789". Gantikan dengan nombor sebenar. */
  whatsapp: "60123456789",
  whatsappDisplay: "+60 12-345 6789",

  /** Emel perniagaan */
  email: "hello@cendawansegar.com",
  phoneDisplay: "+60 12-345 6789",

  /** Alamat perniagaan (placeholder — kemas kini dengan alamat sebenar) */
  address: {
    street: "Lot 123, Kawasan Pertanian",
    city: "Sungai Buloh, Selangor",
    postcode: "47000",
    country: "Malaysia",
  },
  addressDisplay: "Lot 123, Kawasan Pertanian, 47000 Sungai Buloh, Selangor, Malaysia",

  /** Waktu operasi */
  hours: [
    { days: "Isnin – Jumaat", time: "8:00 pagi – 6:00 petang" },
    { days: "Sabtu", time: "8:00 pagi – 2:00 petang" },
    { days: "Ahad & Cuti Umum", time: "Tutup" },
  ],

  /** Pautan media sosial (ganti dengan akaun sebenar) */
  socials: {
    facebook: "https://facebook.com/cendawansegar",
    instagram: "https://instagram.com/cendawansegar",
    tiktok: "https://tiktok.com/@cendawansegar",
    youtube: "",
  },

  /** Lokasi Google Maps embed (placeholder).
   *  Dapatkan kod embed dari Google Maps → Kongsi → Benamkan peta. */
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Sungai%20Buloh%2C%20Selangor%2C%20Malaysia&output=embed",

  /** Sama ada harga yang dipaparkan adalah harga contoh.
   *  Tetapkan kepada true sehingga harga sebenar dikemaskini. */
  placeholderPrices: true,
  priceNote:
    "*Harga yang dipaparkan adalah harga contoh bagi tujuan rujukan. Sila hubungi kami untuk harga semasa dan promosi terkini.",
} as const;

/** Bina pautan WhatsApp dengan mesej pra-isi. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function whatsappOrderLink(productName: string): string {
  return whatsappLink(
    `Halo ${siteConfig.name}, saya berminat untuk menempah produk berikut:\n\n• Produk: ${productName}\n\nBolehkah saya dapatkan maklumat lanjut mengenai harga, kuantiti dan penghantaran? Terima kasih.`
  );
}

export function whatsappContactLink(): string {
  return whatsappLink(
    `Halo ${siteConfig.name}, saya ingin membuat pertanyaan mengenai produk cendawan tiram anda. Bolehkah anda bantu saya? Terima kasih.`
  );
}

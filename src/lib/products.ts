export type ProductCategory = "segar" | "pek" | "kering" | "olahan";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDesc: string;
  description: string;
  /** Berat/pek dalam gram, atau null jika tidak tetap */
  packSize: string;
  /** Harga dalam RM. null = "Hubungi kami" */
  priceRM: number | null;
  unit?: string;
  image: string;
  availability: "tersedia" | "terhad" | "akan-datang";
  availabilityLabel: string;
  features: string[];
  bestFor: string;
}

export const productCategories: { id: ProductCategory | "semua"; label: string }[] = [
  { id: "semua", label: "Semua Produk" },
  { id: "segar", label: "Cendawan Segar" },
  { id: "pek", label: "Cendawan Pek" },
  { id: "kering", label: "Cendawan Kering" },
  { id: "olahan", label: "Produk Olahan" },
];

export const products: Product[] = [
  {
    slug: "cendawan-tiram-segar",
    name: "Cendawan Tiram Segar",
    category: "segar",
    categoryLabel: "Cendawan Segar",
    shortDesc:
      "Cendawan tiram segar yang baru dipetik, rangup dan penuh rasa — pilihan utama untuk masakan harian.",
    description:
      "Cendawan Tiram Segar kami dipetik terus dari ladang dalam keadaan optimum. Teksturnya rangup, rasanya lembut dan sedikit manis semula jadi, menjadikannya sesuai untuk tumis, sup, salad dan pelbagai hidangan lain. Kami mengamalkan amalan penuaian dan pembungkusan yang bersih untuk memastikan kesegaran terpelihara sehingga sampai ke tangan pelanggan.\n\nCocok untuk kegunaan harian keluarga, restoran, kafe dan perniagaan makanan yang memerlukan bekalan segar secara konsisten.",
    packSize: "Pek 200g",
    priceRM: 8.5,
    unit: "pek",
    image: "/images/mushroom-01.jpg",
    availability: "tersedia",
    availabilityLabel: "Tersedia",
    features: [
      "Dipetik segar setiap hari",
      "Tanpa bahan pengawet",
      "Dibungkus secara higienik",
      "Sesuai untuk masakan harian",
    ],
    bestFor: "Masakan harian, tumis, sup, salad",
  },
  {
    slug: "cendawan-tiram-segar-bekal",
    name: "Cendawan Tiram Segar (Bekal Besar)",
    category: "segar",
    categoryLabel: "Cendawan Segar",
    shortDesc:
      "Bekal cendawan tiram segar dalam kuantiti lebih besar — ideal untuk restoran, kafe dan pemborong.",
    description:
      "Pilihan tepat untuk perniagaan makanan yang memerlukan bekalan cendawan secara tetap. Dapatkan cendawan tiram segar dalam kuantiti besar dengan harga lebih menjimatkan. Bekalan boleh diatur mengikut keperluan harian, mingguan atau bulanan.\n\nHubungi kami untuk perbincangan bekalan borong, harga volum dan jadual penghantaran yang konsisten.",
    packSize: "Bekal 1kg",
    priceRM: 38,
    unit: "bekal",
    image: "/images/cluster-07.jpg",
    availability: "tersedia",
    availabilityLabel: "Tersedia",
    features: [
      "Kuantiti borong untuk perniagaan",
      "Bekalan tetap dan konsisten",
      "Harga volum lebih menjimatkan",
      "Penghantaran ke lokasi anda",
    ],
    bestFor: "Restoran, kafe, kedai runcit, pemborong",
  },
  {
    slug: "cendawan-tiram-pek",
    name: "Cendawan Tiram Pek",
    category: "pek",
    categoryLabel: "Cendawan Pek",
    shortDesc:
      "Cendawan tiram pek yang telah diperapkan dengan perasa khas — sedia dimasak, jimat masa dan rasa terjamin.",
    description:
      "Cendawan Tiram Pek kami disediakan melalui proses pengpekan yang teliti dengan perasa pilihan. Cendawan kekal rangup dan berperisa, menjadikannya mudah untuk dimasak terus tanpa persediaan tambahan.\n\nSesuai untuk pelanggan yang mahukan kemudahan dan kepantasan tanpa mengorbankan kualiti. Tersedia dalam pek saiz keluarga.",
    packSize: "Pek 500g",
    priceRM: 14,
    unit: "pek",
    image: "/images/mushroom-05.jpg",
    availability: "terhad",
    availabilityLabel: "Bekalan Terhad",
    features: [
      "Sedia dimasak — jimat masa",
      "Perasa pilihan terkawal",
      "Kekal rangup selepas dimasak",
      "Sesuai untuk hidangan ringkas",
    ],
    bestFor: "Masakan segera, hidangan keluarga",
  },
  {
    slug: "cendawan-tiram-kering",
    name: "Cendawan Tiram Kering",
    category: "kering",
    categoryLabel: "Cendawan Kering",
    shortDesc:
      "Cendawan tiram kering yang ringkas dan tahan lama — mudah disimpan dan digunakan bila-bila masa.",
    description:
      "Cendawan Tiram Kering dihasilkan melalui proses pengeringan yang berhati-hati bagi mengekalkan rasa dan khasiat semula jadi. Ringkas, ringan dan tahan lama — sesuai untuk simpanan jangka panjang.\n\nSebelum dimasak, rendam dalam air suam selama 15–20 minit sehingga mengembang semula. Sesuai untuk sup, masakan kering dan produk berasaskan cendawan.",
    packSize: "Pek 100g",
    priceRM: 12,
    unit: "pek",
    image: "/images/mushroom-06.jpg",
    availability: "tersedia",
    availabilityLabel: "Tersedia",
    features: [
      "Tahan lama dan mudah disimpan",
      "Kaya rasa umami semula jadi",
      "Ringan untuk dihantar",
      "Sesuai untuk sup & masakan kering",
    ],
    bestFor: "Sup, masakan kering, simpanan jangka panjang",
  },
  {
    slug: "serbuk-cendawan-tiram",
    name: "Serbuk Cendawan Tiram",
    category: "olahan",
    categoryLabel: "Produk Olahan",
    shortDesc:
      "Serbuk cendawan tiram semula jadi untuk menambah perisa umami pada pelbagai hidangan.",
    description:
      "Serbuk Cendawan Tiram kami dikisar daripada cendawan berkualiti untuk menghasilkan perisa umami semula jadi yang pekat. Sesuai dijadikan perasa masakan, campuran sup, perapan atau bahan masakan harian.\n\nProduk olahan ini sedang dalam peringkat pembangunan produk. Sila hubungi kami untuk maklumat ketersediaan dan tempahan awal.",
    packSize: "Pek 50g",
    priceRM: null,
    image: "/images/mushroom-04.jpg",
    availability: "akan-datang",
    availabilityLabel: "Akan Datang",
    features: [
      "Perisa umami semula jadi",
      "Serbaguna untuk pelbagai masakan",
      "Produk tempatan yang dibangunkan",
      "Tiada perasa tiruan",
    ],
    bestFor: "Perasa masakan, campuran sup, perapan",
  },
  {
    slug: "cendawan-tiram-goreng",
    name: "Cendawan Tiram Goreng / Celup Tepung",
    category: "olahan",
    categoryLabel: "Produk Olahan",
    shortDesc:
      "Snek cendawan goreng rangup — hidangan popular untuk jamuan dan jualan kecil-kecilan.",
    description:
      "Cendawan tiram yang digoreng rangup dengan perapan pilihan. Hidangan ini popular di kalangan pelanggan yang mencari snek sihat dan lazat.\n\nProduk ini ditawarkan secara terhad bergantung pada permintaan dan kapasiti pengeluaran. Hubungi kami untuk maklumat tempahan dan tempoh pengeluaran.",
    packSize: "Pek 200g",
    priceRM: null,
    image: "/images/dish-22.jpg",
    availability: "akan-datang",
    availabilityLabel: "Akan Datang",
    features: [
      "Rangup di luar, lembap di dalam",
      "Snek sihat berasaskan cendawan",
      "Sesuai untuk jamuan & jualan",
      "Boleh ditempah mengikut kuantiti",
    ],
    bestFor: "Snek, jamuan, jualan kecil-kecilan",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  const current = getProductBySlug(slug);
  if (!current) return products.slice(0, count);
  const same = products.filter((p) => p.slug !== slug && p.category === current.category);
  const rest = products.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...same, ...rest].slice(0, count);
}

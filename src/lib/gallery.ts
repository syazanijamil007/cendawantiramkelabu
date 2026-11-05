export type GalleryCategory = "produk" | "ladang" | "proses" | "penuaian" | "perniagaan";

export interface GalleryItem {
  src: string;
  alt: string;
  category: GalleryCategory;
  categoryLabel: string;
  caption: string;
}

export const galleryCategories: { id: GalleryCategory | "semua"; label: string }[] = [
  { id: "semua", label: "Semua" },
  { id: "produk", label: "Produk" },
  { id: "ladang", label: "Ladang" },
  { id: "proses", label: "Proses Penanaman" },
  { id: "penuaian", label: "Penuaian" },
  { id: "perniagaan", label: "Aktiviti Perniagaan" },
];

export const galleryItems: GalleryItem[] = [
  // Produk
  { src: "/images/mushroom-01.jpg", alt: "Cendawan tiram segar berkumpul", category: "produk", categoryLabel: "Produk", caption: "Cendawan tiram segar pilihan" },
  { src: "/images/cluster-07.jpg", alt: "Kelompok cendawan tiram", category: "produk", categoryLabel: "Produk", caption: "Kumpulan cendawan tiram yang subur" },
  { src: "/images/cluster-08.jpg", alt: "Cendawan tiram di atas medium", category: "produk", categoryLabel: "Produk", caption: "Cendawan hasil penuaian harian" },
  { src: "/images/mushroom-02.jpg", alt: "Cendawan tiram putih segar", category: "produk", categoryLabel: "Produk", caption: "Cendawan tiram putih berkualiti" },
  { src: "/images/mushroom-04.jpg", alt: "Cendawan tiram muda", category: "produk", categoryLabel: "Produk", caption: "Cendawan muda yang lembut" },
  { src: "/images/dish-101.jpg", alt: "Hidangan brokoli dengan cendawan tiram", category: "produk", categoryLabel: "Produk", caption: "Cendawan tiram dalam hidangan sihat" },
  { src: "/images/cook-103.jpg", alt: "Shakshuka dengan cendawan tiram", category: "produk", categoryLabel: "Produk", caption: "Cendawan tiram sebagai bahan masakan kreatif" },

  // Ladang
  { src: "/images/farm-11.jpg", alt: "Kawasan penanaman cendawan", category: "ladang", categoryLabel: "Ladang", caption: "Kawasan penanaman terkawal" },
  { src: "/images/farm-12.jpg", alt: "Bilik penanaman cendawan", category: "ladang", categoryLabel: "Ladang", caption: "Persekitaran ladang yang bersih" },
  { src: "/images/farm-13.jpg", alt: "Rak tanaman cendawan", category: "ladang", categoryLabel: "Ladang", caption: "Susun atur tanaman yang teratur" },
  { src: "/images/farm-14.jpg", alt: "Ladang cendawan mini", category: "ladang", categoryLabel: "Ladang", caption: "Pembangunan ladang berperingkat" },

  // Proses Penanaman
  { src: "/images/bags-15.jpg", alt: "Beg tanaman cendawan", category: "proses", categoryLabel: "Proses Penanaman", caption: "Medium tanaman yang disediakan" },
  { src: "/images/bags-16.jpg", alt: "Proses penanaman cendawan", category: "proses", categoryLabel: "Proses Penanaman", caption: "Penyediaan bongkah bibit" },
  { src: "/images/grow-105.jpg", alt: "Cendawan dalam proses pertumbuhan", category: "proses", categoryLabel: "Proses Penanaman", caption: "Pemeraman dan pertumbuhan miselium" },
  { src: "/images/grow-107.jpg", alt: "Cendawan yang sedang membesar", category: "proses", categoryLabel: "Proses Penanaman", caption: "Peringkat pertumbuhan cendawan" },

  // Penuaian
  { src: "/images/mushroom-03.jpg", alt: "Cendawan tiram matang", category: "penuaian", categoryLabel: "Penuaian", caption: "Cendawan sedia untuk dipetik" },
  { src: "/images/harvest-19.jpg", alt: "Aktiviti menuai cendawan", category: "penuaian", categoryLabel: "Penuaian", caption: "Penuaian dilakukan dengan teliti" },
  { src: "/images/harvest-20.jpg", alt: "Cendawan hasil penuaian", category: "penuaian", categoryLabel: "Penuaian", caption: "Hasil penuaian yang segar" },
  { src: "/images/mushroom-05.jpg", alt: "Cendawan tiram berkualiti", category: "penuaian", categoryLabel: "Penuaian", caption: "Kriteria penuaian yang optimum" },

  // Aktiviti Perniagaan
  { src: "/images/market-29.jpg", alt: "Cendawan di pasar raya", category: "perniagaan", categoryLabel: "Aktiviti Perniagaan", caption: "Cendawan segar di pasaran" },
  { src: "/images/market-30.jpg", alt: "Sayur-sayuran dan cendawan segar", category: "perniagaan", categoryLabel: "Aktiviti Perniagaan", caption: "Produk segar untuk pengguna" },
  { src: "/images/dish-22.jpg", alt: "Hidangan tumis cendawan", category: "perniagaan", categoryLabel: "Aktiviti Perniagaan", caption: "Cendawan dalam hidangan harian" },
  { src: "/images/cluster-09.jpg", alt: "Cendawan untuk pembungkusan", category: "perniagaan", categoryLabel: "Aktiviti Perniagaan", caption: "Persediaan pembungkusan produk" },
];

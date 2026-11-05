export interface PostSection {
  heading?: string;
  paragraphs: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  content: PostSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "5-resipi-mudah-cendawan-tiram",
    title: "5 Resipi Mudah Menggunakan Cendawan Tiram",
    excerpt:
      "Cendawan tiram ialah antara bahan masakan paling serbaguna. Ketahui 5 resipi mudah yang boleh anda sediakan di rumah menggunakan cendawan tiram segar.",
    category: "Resipi",
    date: "2026-10-15",
    readTime: "5 minit",
    image: "/images/dish-22.jpg",
    imageAlt: "Hidangan tumis dengan cendawan tiram",
    content: [
      {
        paragraphs: [
          "Cendawan tiram mempunyai tekstur yang rangup dan rasa yang lembut sedikit manis, menjadikannya bahan yang sangat fleksibel dalam masakan harian. Sama ada anda seorang suri rumah yang sibuk atau seorang chef di rumah, resipi-resipi berikut mudah disediakan dan pasti menggembirakan keluarga.",
        ],
      },
      {
        heading: "1. Tumis Cendawan Tiram Bawang Putih",
        paragraphs: [
          "Resipi paling mudah namun paling lazat. Tumis cendawan tiram dengan bawang putih, sedikit kicap dan sos tiram. Hidangan ini sesuai dimakan dengan nasi panas atau sebagai lauk ringkas.",
        ],
        list: [
          "Cendawan tiram segar — 200g, koyakkan pada pangkal",
          "Bawang putih — 3 ulas, cincang",
          "Kicap dan sos tiram — secukup rasa",
          "Minyak masak dan sedikit gula",
          "Daun bawang untuk taburan",
        ],
      },
      {
        heading: "2. Sup Cendawan Tiram Telur",
        paragraphs: [
          "Sup hangat ini sesuai untuk hari hujan atau bila anda memerlukan hidangan yang mengenyangkan dengan cepat. Kuahnya jernih namun penuh perisa dari cendawan yang baru dipetik.",
        ],
      },
      {
        heading: "3. Cendawan Tiram Goreng Tepung",
        paragraphs: [
          "Cendawan yang dilumurkan tepung dan digoreng rangup adalah snek yang popular di kalangan kanak-kanak mahupun dewasa. Hidangan ini juga sesuai dijual sebagai produk kecil-kecilan.",
        ],
      },
      {
        heading: "4. Salad Cendawan Tiram Segar",
        paragraphs: [
          "Untuk hidangan sejuk, cuba salad cendawan tiram dengan tomato ceri, timun dan sos Italian ringan. Cendawan segar tidak perlu dimasak — cukup dicuci bersih dan dihiris.",
        ],
      },
      {
        heading: "5. Kari Cendawan Tiram",
        paragraphs: [
          "Kari cendawan dengan santan yang pekat adalah hidangan yang memuaskan. Cendawan tiram menyerap perisa kari dengan sangat baik, menjadikannya lauk yang hebat untuk nasi lemak atau roti canai.",
        ],
      },
      {
        paragraphs: [
          "Ingin mencuba resipi ini? Dapatkan cendawan tiram segar kami melalui WhatsApp untuk tempahan mudah dan cepat.",
        ],
      },
    ],
  },
  {
    slug: "cara-menyimpan-cendawan-segar",
    title: "Cara Menyimpan Cendawan Supaya Kekal Segar",
    excerpt:
      "Cendawan segar mudah rosak jika disimpan dengan salah. Ikuti tips penyimpanan ini untuk memastikan cendawan anda kekal segar lebih lama.",
    category: "Tips",
    date: "2026-10-08",
    readTime: "4 minit",
    image: "/images/mushroom-02.jpg",
    imageAlt: "Cendawan tiram putih segar",
    content: [
      {
        paragraphs: [
          "Cendawan adalah produk segar yang memerlukan penjagaan rapi. Dengan penyimpanan yang betul, cendawan tiram anda boleh kekal segar selama 5–7 hari dalam peti sejuk.",
        ],
      },
      {
        heading: "Jangan Basuh Sebelum Disimpan",
        paragraphs: [
          "Air adalah musuh utama cendawan segar. Jangan basuh cendawan sebelum disimpan — kelembapan berlebihan akan mempercepatkan reput. Cuci hanya sebelum dimasak.",
        ],
      },
      {
        heading: "Gunakan Kertas Tisu atau Beg Kertas",
        paragraphs: [
          "Simpan cendawan dalam beg kertas atau balut dengan kertas tisu. Elakkan bekas plastik kedap udara kerana ia memerangkap wap air.",
        ],
        list: [
          "Letakkan cendawan dalam beg kertas berlubang",
          "Atau balut longgar dengan tisu dapur",
          "Simpan dalam peti sejuk bahagian sayur-sayuran",
          "Jangan sesakkan — biarkan udara mengalir",
        ],
      },
      {
        heading: "Elakkan Cahaya Matahari Langsung",
        paragraphs: [
          "Cahaya matahari mempercepatkan penguraian cendawan. Simpan dalam peti sejuk dan keluarkan hanya bila hendak digunakan.",
        ],
      },
      {
        heading: "Tanda-tanda Cendawan Sudah Tidak Segar",
        paragraphs: [
          "Perhatikan tanda-tanda ini: permukaan menjadi lembap atau berlendir, bau tidak sedap, atau warna berubah menjadi coklat gelap. Jika nampak tanda-tanda ini, lebih baik buang cendawan tersebut.",
        ],
      },
    ],
  },
  {
    slug: "proses-penanaman-cendawan-tiram",
    title: "Proses Penanaman Cendawan Tiram — Dari Bibit hingga Penuaian",
    excerpt:
      "Pernah terfikir bagaimana cendawan tiram ditanam? Ketahui proses penanaman cendawan tiram langkah demi langkah di ladang kami.",
    category: "Perniagaan",
    date: "2026-09-28",
    readTime: "6 minit",
    image: "/images/bags-15.jpg",
    imageAlt: "Beg tanaman cendawan",
    content: [
      {
        paragraphs: [
          "Penanaman cendawan tiram adalah proses yang menarik dan memerlukan perhatian terhadap butiran. Berikut adalah gambaran proses penanaman yang kami amalkan di ladang kami.",
        ],
      },
      {
        heading: "Langkah 1: Penyediaan Medium Tanaman",
        paragraphs: [
          "Medium tanaman (substrat) biasanya terdiri daripada habuk gergaji, sekam padi dan bahan organik lain yang telah dikomposkan. Medium ini mesti disterilkan untuk menghapuskan mikroorganisma perosak sebelum digunakan.",
        ],
      },
      {
        heading: "Langkah 2: Penyediaan Bongkah Bibit",
        paragraphs: [
          "Bongkah bibit (spawn) mengandungi miselium cendawan yang telah ditumbuhkan dalam medium bijirin. Bongkah ini kemudiannya dimasukkan ke dalam beg medium tanaman.",
        ],
      },
      {
        heading: "Langkah 3: Proses Pemeraman",
        paragraphs: [
          "Beg tanaman dibiarkan dalam bilik pemeraman pada suhu sekitar 24–28°C selama 10–14 hari. Semasa tempoh ini, miselium merebak dan memenuhi medium.",
        ],
      },
      {
        heading: "Langkah 4: Induksi Buah & Penuaian",
        paragraphs: [
          "Apabila miselium telah matang, beg dipindahkan ke bilik pembentukan buah dengan kelembapan dan cahaya yang dikawal. Cendawan mula muncul dalam masa 3–5 hari dan boleh dipetik selepas 5–7 hari.",
        ],
      },
      {
        paragraphs: [
          "Proses ini diulang setiap kitaran (kira-kira 30–40 hari) — satu beg medium boleh menghasilkan 2–3 kali tuai sebelum perlu diganti. Inilah kelebihan cendawan tiram: produktiviti yang tinggi dalam ruang yang terhad.",
        ],
      },
    ],
  },
  {
    slug: "tips-memilih-cendawan-berkualiti",
    title: "Tips Memilih Cendawan Tiram Berkualiti",
    excerpt:
      "Bagaimana anda tahu cendawan tiram yang anda beli berkualiti? Ikuti panduan mudah ini untuk memilih cendawan yang segar dan terbaik.",
    category: "Tips",
    date: "2026-09-20",
    readTime: "4 minit",
    image: "/images/mushroom-05.jpg",
    imageAlt: "Cendawan tiram berkualiti tinggi",
    content: [
      {
        paragraphs: [
          "Tidak semua cendawan tiram di pasaran mempunyai kualiti yang sama. Berikut adalah petunjuk untuk membantu anda memilih cendawan yang segar dan berkualiti.",
        ],
      },
      {
        heading: "Lihat Warna dan Tekstur",
        paragraphs: [
          "Cendawan tiram berkualiti mempunyai permukaan yang licin, warna putih hingga krim yang sekata, dan tiada tompokan coklat atau hitam. Elakkan cendawan yang kelihatan layu atau basah.",
        ],
      },
      {
        heading: "Semak Kesegaran",
        paragraphs: [
          "Cendawan yang baru dipetik mempunyai bau segar yang ringan seperti tanah atau kayu. Bau masam atau tidak sedap adalah tanda cendawan sudah lama.",
        ],
      },
      {
        heading: "Perhatikan Saiz dan Bentuk",
        paragraphs: [
          "Cendawan bersaiz sederhana biasanya lebih rangup dan berperisa. Cendawan yang terlalu besar mungkin sudah tua dan teksturnya liat.",
        ],
      },
      {
        heading: "Sumber yang Boleh dipercayai",
        paragraphs: [
          "Beli daripada pembekal yang mengamalkan amalan kebersihan dan kualiti yang baik. Cendawan Segar menjamin cendawan ditanam dan dikendalikan mengikut piawaian kebersihan yang ketat.",
        ],
      },
    ],
  },
  {
    slug: "potensi-industri-cendawan-malaysia",
    title: "Potensi Industri Cendawan di Malaysia",
    excerpt:
      "Industri cendawan di Malaysia semakin berkembang pesat. Ketahui peluang dan potensi yang ditawarkan oleh industri ini untuk usahawan dan pengguna.",
    category: "Industri",
    date: "2026-09-10",
    readTime: "5 minit",
    image: "/images/farm-11.jpg",
    imageAlt: "Kawasan penanaman cendawan",
    content: [
      {
        paragraphs: [
          "Industri cendawan di Malaysia menunjukkan pertumbuhan yang memberangsangkan dalam beberapa tahun kebelakangan ini. Dengan permintaan pengguna yang semakin meningkat, industri ini menawarkan peluang besar untuk usahawan baharu.",
        ],
      },
      {
        heading: "Permintaan yang Meningkat",
        paragraphs: [
          "Kesedaran tentang pemakanan sihat dan diet berasaskan tumbuhan telah meningkatkan permintaan terhadap cendawan. Cendawan tiram, khususnya, digemari kerana harganya yang berpatutan dan ketersediaan yang luas.",
        ],
      },
      {
        heading: "Peluang untuk Usahawan",
        paragraphs: [
          "Penanaman cendawan memerlukan modal yang rendah berbanding tanaman lain. Satu banglo atau stor kecil pun boleh dijadikan ladang cendawan. Hasilnya pula tinggi — satu petak boleh menghasilkan berpuluh kilogram cendawan setiap kitaran.",
        ],
        list: [
          "Penanaman di rumah — sesuai untuk sampingan",
          "Ladang komersial — bekalan ke restoran dan pasar",
          "Produk bernilai tambah — cendawan kering, serbuk, sos",
          "Agro-pelancongan — lawatan ladang & bengkel",
        ],
      },
      {
        heading: "Cabaran dan Penyelesaian",
        paragraphs: [
          "Cabaran utama termasuk pengurusan suhu dan kelembapan, kawalan perosak, dan jaminan kualiti. Penyelesaian moden seperti sistem automasi dan amalan kebersihan yang ketat telah membantu petani mengatasi cabaran ini dengan berkesan.",
        ],
      },
      {
        paragraphs: [
          "Di Cendawan Segar, kami percaya industri cendawan tempatan mempunyai potensi besar untuk berkembang. Kami komited untuk menyokong pertumbuhan industri ini melalui produk berkualiti dan perkhidmatan yang boleh dipercayai.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  return blogPosts.filter((p) => p.slug !== slug).slice(0, count);
}

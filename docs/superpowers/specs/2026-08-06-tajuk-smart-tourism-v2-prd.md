# PRD — Tajuk Smart Tourism v2

**Tanggal:** 6 Agustus 2026
**Status:** Disetujui untuk diturunkan menjadi spec per subsistem
**Dokumen ini adalah PRD payung.** Setiap fase pada Bagian 11 akan memperoleh spec dan rencana implementasinya sendiri.

---

## 1. Ringkasan

Tajuk Smart Tourism v2 adalah pembangunan ulang situs Desa Wisata Tajuk (Getasan, Kabupaten Semarang) dengan tiga tujuan: **konten dapat dikelola sendiri oleh perangkat desa**, **permintaan pemesanan paket wisata tercatat dalam sistem**, dan **situs layak dipublikasikan secara resmi**.

Versi sekarang adalah brosur digital yang seluruh isinya tertanam di dalam kode, memiliki lubang keamanan yang memungkinkan siapa pun memperoleh akses admin, dan dua formulir utamanya tidak berfungsi sama sekali.

v2 dibangun di atas basis kode yang ada (Laravel 10 + Inertia + React + Filament) melalui perombakan menyeluruh di tempat, bukan penulisan ulang dari nol.

---

## 2. Latar belakang

### 2.1 Keadaan versi sekarang

| Aspek | Keadaan |
|---|---|
| Stack | Laravel 10, Inertia.js, React 18, Tailwind + DaisyUI, Filament 3, Breeze |
| Isi | 11 profil dusun, 4 destinasi, 3 paket Live In, berita, galeri, produk UMKM, halaman AR |
| Ukuran | ~300 berkas terlacak, ~6.500 baris JSX |
| Riwayat | 79 commit; 73 di antaranya dari satu kontributor |
| Hosting | cPanel shared hosting melalui `.cpanel.yml` |
| Pemakaian | Belum dipakai publik secara nyata — bebas dibongkar tanpa kendala downtime |

### 2.2 Temuan yang mendorong v2

**Keamanan**

1. Route `/register` terbuka untuk publik dan `User::canAccessPanel()` selalu mengembalikan `true`. Siapa pun dapat mendaftar lalu memperoleh akses penuh panel `/admin`.
2. `/Informasi/Berita/{id}` dan `/api/articles` tidak memfilter `is_published`, sehingga artikel draft dapat dibaca publik.
3. `.cpanel.yml` menyalin seluruh isi proyek (`app/`, `config/`, `storage/`, `vendor/`) ke dalam docroot.
4. `Article::$guarded = []` membuka mass assignment tanpa batas.

**Fitur yang tidak berfungsi**

5. Formulir kontak gagal karena tiga sebab sekaligus: `action="{{ route('submit.message') }}"` ditulis sebagai sintaks Blade di dalam JSX sehingga menjadi string literal; tidak ada token CSRF; migration `contact_messages` hanya berisi `id` dan `timestamps` tanpa kolom `name`, `email`, `message`; serta model `ContactMessage` tidak memiliki `$fillable` dan justru berisi method `up()` hasil salah tempel dari berkas migration.
6. Tiga formulir Live In mengirim data ke `/submit-form` yang tidak terdaftar di routes. Tidak ada data pemesanan yang pernah tersimpan.
7. `ContactMessageResource` pada Filament memiliki definisi form dan tabel yang kosong, sehingga pesan masuk tidak dapat dilihat admin.
8. Filament menyimpan berkas ke disk `local` sementara tampilan membacanya melalui `url('storage/...')`, sehingga gambar artikel yang diunggah lewat panel tidak muncul.

**Struktur**

9. Seluruh konten tertanam di JSX. 11 halaman dusun dan 4 halaman destinasi berupa salinan berulang sepanjang 130–210 baris.
10. 90 gambar ditautkan langsung dari Google Drive.
11. Riwayat git berukuran 272 MB untuk 300 berkas, akibat foto berukuran 7–15 MB yang pernah di-commit lalu dihapus.
12. `web.php` berisi 30+ closure tanpa nama route, sehingga `route:cache` tidak dapat dipakai.
13. Terdapat dua sistem CRUD artikel yang berjalan berdampingan: Filament dan `ArticleController` beserta view Blade-nya.
14. Kode mati: model `News` dan `paketWisata` yang kosong, `NewsController` kosong, migration `paket_wisatas` tanpa kolom, berkas `admin.blade copy.php`, sisa penanda merge conflict di `web.php`, serta route `/AR` beserta 15 MB aset `resources/views/ARv1/` yang tidak tertaut dari mana pun.
15. `@inertiaHead` tanpa SSR tidak menghasilkan meta tag apa pun pada HTML awal. Prop `description` dikirim ke setiap route tetapi tidak pernah dirender. Crawler WhatsApp dan Facebook hanya membaca `<title>{{ config('app.name') }}</title>`, dan `APP_NAME` masih bernilai "Laravel".
16. Tidak ada pengujian untuk fitur sendiri; sebelas berkas di `tests/` seluruhnya bawaan Breeze.

### 2.3 Catatan mengenai AR

Fitur AR yang aktif dipakai pengunjung berada di GitHub Pages terpisah (`https://feby-akliji23.github.io/AR-BETA_V01/`), ditautkan dari `Navbar.jsx:388`. Fitur ini berfungsi dan tidak terpengaruh v2. Yang bermasalah adalah sisa lama di dalam repo: route `/AR` beserta aset `resources/views/ARv1/` yang tidak tertaut dari mana pun.

---

## 3. Visi

Situs resmi Desa Wisata Tajuk yang dikelola sendiri oleh perangkat desa, menampilkan profil desa dan dusun secara kredibel, serta menerima permintaan pemesanan paket wisata yang tercatat rapi.

---

## 4. Pengguna

| Peran | Kebutuhan |
|---|---|
| **Calon wisatawan** (utama) | Menemukan desa melalui Google dan WhatsApp, menilai kelayakan kunjungan, mengetahui harga paket, mengirim permintaan pemesanan |
| **Admin desa** — satu orang, non-teknis | Mengubah seluruh konten dan harga tanpa bantuan developer; melihat dan menindaklanjuti permintaan pemesanan serta pesan masuk |
| **Pengunjung institusional** | Rombongan sekolah, kampus, atau instansi yang mencari paket Live In |

Tidak ada peran lain. Sistem role bertingkat, akun per dusun, dan alur persetujuan berada di luar ruang lingkup.

---

## 5. Ruang lingkup

### 5.1 Termasuk

1. CMS penuh untuk berita, 11 dusun, 4 destinasi, paket dan harga, galeri, produk UMKM, serta pengaturan kontak
2. Permintaan pemesanan paket yang tersimpan, disertai notifikasi ke admin
3. Penutupan empat lubang keamanan pada Bagian 2.2
4. Formulir kontak yang berfungsi
5. SEO dan pratinjau berbagi tautan
6. Pembersihan kode mati dan duplikasi
7. Unggah gambar lokal dengan batas ukuran, berdampingan dengan tautan Drive yang sudah ada

### 5.2 Tidak termasuk

| Di luar ruang lingkup | Alasan |
|---|---|
| Pembayaran online / payment gateway | Membutuhkan badan hukum dan rekening usaha; risiko dan kompleksitas tidak sepadan pada tahap ini |
| Multi-bahasa | Belum ada kebutuhan yang teridentifikasi |
| Pengembangan AR | Tetap dikelola terpisah di GitHub Pages |
| Sistem role bertingkat dan multi-user | Hanya ada satu admin |
| Migrasi massal gambar dari Google Drive | Tautan yang sudah ada dibiarkan; penggantian dilakukan bertahap dan opsional |
| Perampingan riwayat git 272 MB | Dicatat sebagai utang teknis pada Bagian 13 |
| Kuota, kalender ketersediaan, dan pelacakan pesanan oleh pengunjung | Pemesanan berhenti pada tahap permintaan |
| Pengujian E2E berbasis browser | Tidak sepadan untuk skala ini |

---

## 6. Kriteria sukses

1. Admin desa berhasil menerbitkan berita dan mengubah harga paket sendiri, tanpa bantuan, dalam sekali percobaan.
2. Permintaan pemesanan yang dikirim pengunjung sampai ke admin dan tersimpan — nol kehilangan data.
3. Tautan yang dibagikan ke WhatsApp menampilkan judul, deskripsi, dan gambar yang benar.
4. Tidak ada jalan bagi publik untuk memperoleh akses admin.

Kriteria 1 diukur dari admin yang benar-benar menerbitkan konten, bukan dari selesainya pembangunan panel.

---

## 7. Keputusan yang telah diambil

| # | Keputusan | Alasan |
|---|---|---|
| D1 | Perombakan di tempat, mempertahankan Inertia + React tanpa SSR | Perubahan paling sedikit dan paling cepat sampai berjalan. Kelemahan SEO ditambal melalui D2 |
| D2 | Meta tag dirender server-side dari `$page['props']` di `app.blade.php` | Menyelesaikan masalah pratinjau WhatsApp tanpa menjalankan proses SSR Node, sehingga jalan ke cPanel tetap terbuka |
| D3 | Pemesanan berhenti pada permintaan; konfirmasi dan pembayaran manual via WhatsApp | Sesuai kapasitas pengelola desa; menghindari kompleksitas payment gateway |
| D4 | Gambar baru diunggah ke disk `public`; tautan Drive yang sudah ada dibiarkan | Mengunggah jauh lebih mudah bagi admin non-teknis daripada menempel tautan Drive, tetapi migrasi massal tidak sepadan |
| D5 | Railway Volume di-mount ke `storage/app/public` | Filesystem Railway bersifat ephemeral; tanpa volume, foto unggahan hilang pada setiap redeploy |
| D6 | Penamaan tabel dan kolom dalam bahasa Inggris; seluruh label panel dalam bahasa Indonesia | Kode konsisten dengan konvensi Laravel, admin tetap membaca bahasa Indonesia |
| D7 | AR tetap eksternal; route `/AR` dan aset `ARv1` dihapus | Kode mati yang tidak tertaut dari mana pun |
| D8 | Nomor KTP dihapus dari formulir pemesanan | Tidak dipakai untuk keputusan apa pun pada tahap permintaan, tetapi menaikkan risiko penyimpanan data pribadi secara signifikan |
| D9 | Filament dipertahankan sebagai satu-satunya panel admin; `ArticleController` dan view Blade-nya dihapus | Menghapus duplikasi CRUD artikel |
| D10 | Situs dibangun tanpa kendala downtime | Versi sekarang belum dipakai publik secara nyata |

**Hosting:** Railway pada tahap awal, dengan kemungkinan pindah ke cPanel di kemudian hari. Seluruh perbedaan lingkungan ditangani melalui variabel env, tanpa kode khusus platform.

---

## 8. Model data

Sembilan tabel. Seluruh konten yang kini tertanam di kode menjadi baris data.

| Tabel | Kolom utama | Menggantikan |
|---|---|---|
| `hamlets` | slug, nama, headline hero, gambar hero, isi (rich text), gambar kartu, urutan, `is_published` | 11 berkas JSX dan array di `Dusun.jsx` |
| `destinations` | sama seperti `hamlets`, ditambah koordinat lat/lng untuk peta Leaflet | 4 berkas JSX dan array di `Destinasi.jsx` |
| `tour_packages` | nama, slug, harga, durasi, fasilitas (list), gambar, deskripsi, urutan, `is_published` | array `packages` di `Paket.jsx:9` |
| `articles` | *sudah ada*; ditambah slug dan ringkasan. Kolom `category` diluruskan menjadi kategori sungguhan | — |
| `gallery_photos` | judul, gambar, keterangan, urutan | `Gallery.jsx` |
| `products` | nama, deskripsi, gambar, kategori (olahan/kerajinan), tautan eksternal | `Produk.jsx` |
| `settings` | satu baris: nama situs, deskripsi default, alamat, nomor WhatsApp, tautan Instagram/TikTok/YouTube, tautan AR, gambar OG default | teks tertanam di `Footer.jsx` dan `Navbar.jsx` |
| `booking_requests` | lihat Bagian 10 | formulir Live In yang tidak menyimpan apa pun |
| `contact_messages` | *diperbaiki*: nama, email, pesan, status dibaca | migration kosong yang menyebabkan formulir gagal |

**Pelurusan kolom `articles.category`.** Saat ini `ArticleResource` mengisi `category` dengan pilihan `draft`, `reviewing`, dan `published` — itu status, bukan kategori, dan bertabrakan dengan kolom `is_published` yang sudah ada. Status ditangani sepenuhnya oleh `is_published`; `category` diisi kategori editorial yang sebenarnya.

**Pemindahan konten lama dilakukan melalui seeder,** bukan diketik ulang oleh admin. Teks 11 dusun dan 4 destinasi yang sudah ada diekstrak ke seeder sehingga v2 berisi penuh sejak hari pertama.

---

## 9. Arsitektur

### 9.1 Routing

Seluruh closure di `web.php` diganti controller tipis dengan route berparameter bernama:

```
/                                 HomeController@index
/dusun/{hamlet:slug}              HamletController@show
/destinasi/{destination:slug}     DestinationController@show
/paket                            PackageController@index
/paket/{package:slug}             PackageController@show
/paket/{package:slug}/pesan       BookingController@create | @store
/informasi/berita                 ArticleController@index
/informasi/berita/{article:slug}  ArticleController@show
/informasi/galeri                 GalleryController@index
/informasi/produk                 ProductController@index
/tentang-kami/profil-desa         PageController@profile
/tentang-kami/geografi            PageController@geography
/kontak                           ContactController@create | @store
```

Route model binding menggunakan slug agar URL terbaca manusia dan baik untuk SEO. Hilangnya seluruh closure membuat `php artisan route:cache` dapat dipakai. URL lama seperti `/Dusun/DusunBanaran` diarahkan permanen (301) ke URL baru agar tautan yang sudah tersebar tidak mati.

15 berkas JSX halaman dusun dan destinasi runtuh menjadi dua template — `Dusun/Show.jsx` dan `Destinasi/Show.jsx` — yang menerima data melalui props.

### 9.2 Meta tag dan SEO

Setiap controller mengirim props `title`, `description`, dan `image`. `app.blade.php` merender `<title>`, `meta description`, serta tag Open Graph langsung dari `$page['props']`, sehingga crawler membacanya tanpa menjalankan JavaScript. `sitemap.xml` dibangkitkan dari data. `APP_NAME` diperbaiki dari nilai bawaan "Laravel".

### 9.3 Keamanan

1. Route `register`, `forgot-password`, dan `reset-password` dinonaktifkan. Akun admin dibuat melalui perintah artisan.
2. `canAccessPanel()` memeriksa kolom `is_admin`, tidak lagi mengembalikan `true`.
3. Seluruh query publik memfilter `is_published` melalui scope `published()` pada model, sehingga tidak bergantung pada kedisiplinan di tiap controller. Berlaku untuk halaman web maupun `/api/articles`.
4. `Article::$guarded = []` diganti `$fillable` eksplisit. Berlaku juga untuk seluruh model baru.
5. `.cpanel.yml` diperbaiki agar hanya `public/` yang menjadi docroot.
6. `APP_DEBUG=false` dan `APP_ENV=production` pada lingkungan produksi.

### 9.4 Media

**Field gambar bermode ganda.** Setiap kolom gambar menerima dua bentuk nilai:

- **Berkas terunggah** — jalur relatif, contoh `images/hamlets/banaran.jpg`
- **URL eksternal** — tautan Drive yang sudah ada, disimpan apa adanya

Sebuah accessor pada model memutuskan cara merender: nilai yang diawali `http` dipakai langsung, selain itu dibungkus `Storage::url()`. Konten Drive yang ada tidak perlu disentuh, tetap tampil, dan dapat diganti menjadi unggahan kapan pun secara bertahap. Tidak ada migrasi massal.

**Batas unggahan:**

| Aturan | Nilai | Alasan |
|---|---|---|
| Ukuran berkas | maksimal 2 MB | Sama dengan validasi yang sudah dipakai `ArticleController` |
| Format | JPG, PNG, WebP | Menolak berkas kamera berukuran belasan MB seperti pada riwayat git |
| Lebar maksimum | 1920 px, diperkecil otomatis | Filament memperkecil di browser sebelum unggah; hasil akhir umumnya 300–600 KB dan tidak membutuhkan ekstensi PHP tambahan |
| Kuota volume | 1 GB | Cukup untuk sekitar 2.000 foto pada ukuran tersebut |

Validasi diterapkan **di dua tempat**: pada panel Filament dan pada aturan validasi backend. Batas di browser saja tidak cukup karena dapat dilewati.

**Disk.** Satu disk `public` dipakai konsisten di seluruh aplikasi, dengan `storage:link` dijalankan saat deploy. Ini sekaligus menutup temuan nomor 8 pada Bagian 2.2.

### 9.5 Deployment

Railway melalui Nixpacks, dengan Railway Volume di-mount ke `storage/app/public`. Seluruh perbedaan lingkungan ditangani melalui env agar perpindahan ke cPanel di kemudian hari hanya berupa perubahan konfigurasi.

`QUEUE_CONNECTION=sync` dipertahankan. Pada volume permintaan sebesar ini, proses antrian terpisah menambah komponen yang harus dirawat tanpa manfaat yang sepadan.

### 9.6 Pembersihan

Dihapus dari basis kode: route `/AR` beserta 15 MB `resources/views/ARv1/`; `ArticleController` dan tiga view Blade artikel; model `News` dan `paketWisata`; `NewsController`; migration `paket_wisatas`; `admin.blade copy.php`; sisa penanda merge conflict di `web.php`. `vite.config.js` yang menunjuk folder `app/Livewire` yang tidak ada diperbaiki.

---

## 10. Alur pemesanan

### 10.1 Alur

Pengunjung membuka halaman paket, menekan "Ajukan Pemesanan", mengisi formulir, memperoleh kode pemesanan, lalu diarahkan ke WhatsApp desa dengan pesan yang sudah terisi kode tersebut. Admin melanjutkan negosiasi dan pembayaran seperti biasa.

Pengalihan ke WhatsApp sekaligus menjadi mekanisme notifikasi utama. Cara ini tidak membutuhkan API WhatsApp berbayar, sesuai kebiasaan admin desa, dan datanya tetap tersimpan sehingga permintaan tidak ikut hilang bila percakapan tenggelam. Email ke admin dipasang sebagai cadangan.

### 10.2 Data yang dikumpulkan

| Field | Wajib | Catatan |
|---|---|---|
| Nama pemesan | ya | |
| Instansi / rombongan | tidak | Sekolah, kampus, komunitas |
| Nomor WhatsApp | ya | Jalur komunikasi utama |
| Email | tidak | Cadangan |
| Paket dipilih | ya | Terisi otomatis dari halaman paket |
| Tanggal rencana kunjungan | ya | Divalidasi tidak boleh tanggal lampau |
| Jumlah peserta | ya | Bilangan bulat, minimal 1 |
| Catatan / permintaan khusus | tidak | |

Nomor KTP tidak dikumpulkan (keputusan D8). Bila dibutuhkan untuk administrasi menginap, data tersebut dikumpulkan saat tamu tiba, bukan melalui formulir publik.

Tiga formulir Live In yang ada dihapus dan diganti satu formulir yang paketnya diisi dari data. Menambah paket baru cukup dilakukan lewat panel.

### 10.3 Status dan kode

Status dibuat seminimal mungkin. Mengikuti keputusan D6, nilainya disimpan dalam bahasa Inggris dan ditampilkan dalam bahasa Indonesia: `new` → "Baru", `in_progress` → "Ditindaklanjuti", `done` → "Selesai", `cancelled` → "Batal". Tanpa ini panel hanya menjadi tumpukan yang tidak terbaca. Tidak ada kuota, kalender ketersediaan, maupun pembayaran.

Kode pemesanan berformat `TST-2026-0001`, dipakai sebagai rujukan dalam percakapan WhatsApp.

### 10.4 Perlindungan formulir

Berlaku untuk formulir pemesanan dan formulir kontak:

- Honeypot berupa field tersembunyi yang hanya diisi bot
- Pembatasan laju maksimal 5 pengiriman per IP per jam
- Validasi di backend, tidak hanya di browser
- CSRF otomatis melalui `useForm` Inertia — komponen inilah yang selama ini hilang dan menyebabkan formulir kontak gagal

### 10.5 Penanganan error

Kegagalan validasi ditampilkan di bawah field terkait tanpa reload dan tanpa menghilangkan isian. Kegagalan penyimpanan menampilkan pesan yang mengarahkan pengunjung menghubungi WhatsApp langsung; permintaan tidak boleh hilang secara diam-diam. Kegagalan pengiriman email tidak menggagalkan pemesanan dan hanya dicatat di log, karena WhatsApp merupakan jalur utama.

---

## 11. Tahapan

Enam subsistem. Setiap fase memperoleh spec dan rencana implementasinya sendiri.

| Fase | Isi | Alasan urutan |
|---|---|---|
| **0. Fondasi & keamanan** | Menutup registrasi, `is_admin`, scope `published`, menghapus kode mati dan aset ARv1, memperbaiki `.cpanel.yml` dan env, deploy pertama ke Railway | Lubang keamanan tidak menunggu fitur. Deploy dilakukan awal agar masalah lingkungan terdeteksi saat taruhannya masih kecil |
| **1. Fondasi CMS** | Tabel `settings`, field gambar bermode ganda, Railway Volume, panel Filament berbahasa Indonesia, artikel dirapikan | Seluruh fase berikutnya memakai field gambar dan pola panel yang sama |
| **2. Konten inti** | `hamlets` dan `destinations`, dua template, seeder dari konten lama, redirect URL lama | Bagian terbesar dan paling menentukan |
| **3. Paket & pemesanan** | `tour_packages`, `booking_requests`, formulir, WhatsApp, email | Bergantung pada fondasi CMS |
| **4. Konten pendukung** | Galeri, produk UMKM, perbaikan formulir kontak | Dapat dikerjakan kapan saja setelah Fase 1 |
| **5. SEO & pemolesan** | Meta tag server-side, `sitemap.xml`, performa | Terakhir, karena membutuhkan URL dan konten final |

Fase 0 dan 1 wajib berurutan. Sisanya dapat disesuaikan bila ada kebutuhan mendesak.

---

## 12. Pengujian

Pengujian difokuskan pada hal yang mahal bila salah, bukan pada cakupan menyeluruh.

| Yang diuji | Bentuk |
|---|---|
| Keamanan | `/register` mengembalikan 404; pengguna non-admin ditolak `/admin`; artikel dengan `is_published=false` tidak muncul di halaman publik maupun `/api/articles` |
| Pemesanan | Data tersimpan lengkap; validasi menolak tanggal lampau dan jumlah peserta 0; honeypot menolak bot; pembatasan laju bekerja |
| Formulir kontak | Data tersimpan — uji regresi wajib, karena inilah yang selama ini gagal total |
| Meta tag | HTML awal berisi `og:title`, `og:description`, dan `og:image` tanpa menjalankan JavaScript |
| Media | URL Drive dirender apa adanya; berkas terunggah dirender melalui `Storage::url()`; berkas di atas 2 MB ditolak backend |

Tidak ada pengujian E2E berbasis browser. Pemeriksaan tampilan dilakukan manual dengan daftar periksa.

**Konsekuensi yang perlu diketahui sejak awal:** menutup registrasi membuat `RegistrationTest`, `PasswordResetTest`, dan `EmailVerificationTest` bawaan Breeze gagal. Berkas pengujian tersebut dihapus bersama fiturnya, tidak dibiarkan merah.

---

## 13. Risiko

| # | Risiko | Dampak | Mitigasi |
|---|---|---|---|
| R1 | Railway Volume tidak memiliki backup otomatis | Foto hilang permanen bila volume terhapus | Unduh isi folder secara berkala; pertimbangkan object storage bila jumlah foto bertambah banyak |
| R2 | Tautan Google Drive dapat mati sewaktu-waktu | Gambar hilang dari halaman publik | Ganti bertahap menjadi unggahan lokal |
| R3 | **Admin desa tidak jadi memakai panelnya** | Fase 1–4 sia-sia — ini risiko terbesar proyek | Panduan satu halaman berbahasa Indonesia dan satu sesi pendampingan; keberhasilan diukur dari konten yang benar-benar diterbitkan admin |
| R4 | Riwayat git 272 MB | Clone lambat pada koneksi terbatas | Sengaja tidak digarap di v2; lihat Bagian 14 |
| R5 | Ekstraksi konten lama ke seeder tidak akurat | Kehilangan tulisan yang sudah dibuat | Verifikasi per halaman terhadap berkas JSX asli sebelum berkas lama dihapus |
| R6 | Kesinambungan pemeliharaan — 73 dari 79 commit berasal dari satu orang | Proyek berhenti setelah kontributor utama selesai | Perlu kejelasan penerus sebelum v2 dinyatakan selesai |

---

## 14. Utang teknis yang sengaja ditunda

1. **Riwayat git 272 MB.** Merampingkannya membutuhkan `git filter-repo` atau BFG dan penulisan ulang riwayat, yang berdampak pada semua salinan repo. Ditunda hingga ada kebutuhan nyata.
2. **Gambar Google Drive.** Diganti bertahap seiring admin memperbarui konten, bukan melalui migrasi massal.
3. **Antrian dan pekerja latar.** `QUEUE_CONNECTION=sync` dipertahankan hingga volume permintaan menuntut sebaliknya.

---

## 15. Langkah berikutnya

Menyusun rencana implementasi Fase 0 melalui skill `writing-plans`. Setiap fase berikutnya menyusul dengan siklus spec dan rencana tersendiri.

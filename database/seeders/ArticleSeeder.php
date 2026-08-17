<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        foreach ($this->articles() as $article) {
            Article::updateOrCreate(
                ['title' => $article['title']],
                [...$article, 'is_published' => true]
            );
        }
    }

    private function articles(): array
    {
        return [
            [
                'title' => 'Kunjungan Wisatawan ke Desa Tajuk Terus Meningkat',
                'excerpt' => 'Jumlah kunjungan wisatawan ke Desa Wisata Tajuk terus bertambah setiap tahun, didorong oleh paket Live In dan keindahan alam lereng Gunung Merbabu.',
                'category' => 'berita',
                'content' => '<p>Desa Wisata Tajuk di Kecamatan Getasan, Kabupaten Semarang, mencatat peningkatan jumlah kunjungan wisatawan dari tahun ke tahun. Paket wisata Live In yang menawarkan pengalaman tinggal bersama warga menjadi daya tarik utama bagi rombongan sekolah, kampus, dan instansi.</p><p>Selain Live In, wisatawan juga datang untuk menikmati keindahan alam, kebun kopi, dan keramahan warga desa. Pemerintah desa terus berbenah dengan menyediakan fasilitas pendukung dan melatih warga sebagai tuan rumah wisata.</p>',
                'image_url' => 'https://drive.google.com/thumbnail?id=1O9gpHAuUlifxq1rS9aL72-RtFqrfENOn&sz=w2000',
            ],
            [
                'title' => 'Panen Kopi Damalung, Komoditas Andalan Warga Tajuk',
                'excerpt' => 'Musim panen kopi Damalung tiba. Kopi khas Dusun Gedong ini menjadi komoditas andalan dan oleh-oleh favorit wisatawan.',
                'category' => 'kegiatan',
                'content' => '<p>Memasuki musim panen, warga Dusun Gedong sibuk memetik buah kopi yang telah matang. Kopi Damalung, yang dinamai sesuai kawasan Damalung di lereng Gunung Merbabu, dikenal dengan cita rasa khas dataran tinggi.</p><p>Kopi ini diolah secara sederhana oleh kelompok tani setempat dan dijual dalam bentuk biji maupun bubuk. Wisatawan yang berkunjung dapat membeli langsung sebagai oleh-oleh sekaligus mendukung perekonomian warga.</p>',
                'image_url' => 'https://drive.google.com/thumbnail?id=1IQVcUtU6T7AgX-B56ZNtH6a1Sb4FGEyj&sz=w2000',
            ],
            [
                'title' => 'Serunya Kegiatan Live In di Dusun Ngaduman',
                'excerpt' => 'Rombongan siswa mengikuti kegiatan Live In di Dusun Ngaduman: ikut bertani, beternak, dan merasakan keseharian warga desa.',
                'category' => 'kegiatan',
                'content' => '<p>Rombongan siswa dari berbagai sekolah kembali mengikuti kegiatan Live In di Dusun Ngaduman. Selama beberapa hari, para peserta tinggal di rumah warga dan mengikuti keseharian mereka — mulai dari berkebun, memberi pakan ternak, hingga memasak bersama keluarga asuh.</p><p>Kegiatan ini tidak hanya memberi pengalaman berharga bagi peserta, tetapi juga menghidupkan ekonomi warga melalui homestay dan konsumsi lokal.</p>',
                'image_url' => 'https://drive.google.com/thumbnail?id=1eYfKksQqODA5k5508mlHcVtnnl4Z1DRM&sz=w2000',
            ],
            [
                'title' => 'Pesona Embung Dung Kluruk, Spot Foto Favorit',
                'excerpt' => 'Embung Dung Kluruk dengan latar Gunung Merbabu menjadi salah satu destinasi favorit wisatawan untuk bersantai dan berfoto.',
                'category' => 'wisata',
                'content' => '<p>Embung Dung Kluruk di Desa Tajuk menawarkan pemandangan air danau yang tenang dengan latar Gunung Merbabu yang megah. Tempat ini menjadi favorit wisatawan untuk bersantai, berpiknik, dan berburu foto saat matahari terbit maupun terbenam.</p><p>Akses menuju lokasi cukup mudah dan area parkir tersedia. Pemerintah desa terus menata kawasan ini agar semakin nyaman bagi pengunjung.</p>',
                'image_url' => 'https://drive.google.com/thumbnail?id=1dXSVeGFo9NrQj26nyn-q3CWSndRB0acC&sz=w2000',
            ],
            [
                'title' => 'Jadwal Gotong Royong dan Kegiatan Desa Bulan Ini',
                'excerpt' => 'Berikut jadwal kegiatan rutin desa: gotong royong, kerja bakti jalan usaha tani, dan persiapan penyambutan rombongan wisata.',
                'category' => 'pengumuman',
                'content' => '<p>Pemerintah Desa Tajuk mengumumkan jadwal kegiatan rutin bulan ini. Gotong royong lingkungan dilaksanakan setiap Minggu pagi di masing-masing dusun, diikuti kerja bakti perbaikan jalan usaha tani menjelang musim panen.</p><p>Warga yang terlibat dalam kelompok sadar wisata dimohon hadir pada rapat persiapan penyambutan rombongan wisata yang dijadwalkan akhir bulan. Informasi lebih lanjut dapat menghubungi perangkat desa setempat.</p>',
                'image_url' => 'https://drive.google.com/thumbnail?id=1gRiDFq3coLxJ5K5g2_GixOD-0hXw41yZ&sz=w2000',
            ],
        ];
    }
}

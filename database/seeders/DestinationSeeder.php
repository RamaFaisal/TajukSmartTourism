<?php

namespace Database\Seeders;

use App\Models\Destination;
use Illuminate\Database\Seeder;

class DestinationSeeder extends Seeder
{
    public function run(): void
    {
        foreach ($this->destinations() as $order => $destination) {
            Destination::updateOrCreate(
                ['slug' => $destination['slug']],
                [...$destination, 'sort_order' => $order, 'is_published' => true]
            );
        }
    }

    private function destinations(): array
    {
        return [
            [
                'slug' => 'dungkluruk',
                'name' => 'Dungkluruk',
                'hero_headline' => 'Selamat Datang di Dungkluruk',
                'hero_image_url' => 'https://drive.google.com/thumbnail?id=1tkS1gi8WDwDTXSOlzDkJrI2cvFKT173J&sz=w2000',
                'card_image_url' => 'https://drive.google.com/thumbnail?id=1_J3VAXJ5anX7IdwBPsvbI6kNDGV9CQXg&sz=w2000',
                'lat' => -7.396035596890162,
                'lng' => 110.45180818000935,
                'hours' => 'Setiap hari, pukul 08:00–17:00',
                'price' => 'Rp 5.000,00',
                'price_note' => null,
                'facilities' => [
                    'Mushola',
                    'Tempat Istirahat dan Bersantai',
                    'Area Piknik',
                    'Toilet Umum',
                    'Area Parkir',
                    'Area Camping',
                ],
                'body' => '<p>Dung Kluruk menjadi destinasi wisata alam yang instragamable dan siap memanjakan mata kamu.</p>'
                    .'<p>Anda seorang pecinta alam yang selalu mencari tempat-tempat wisata alam yang baru untuk dijelajahi? Jika ya, maka Wisata alam Dung Kluruk bisa menjadi destinasi pilihan yang sempurna untuk anda jelajahi. Dung Kluruk adalah salah satu destinasi wisata yang terletak di Kecamatan Getasan dan memiliki pesona alam yang siap memanjakan mata dan hati anda.</p>'
                    .'<p><strong>Tentang Destinasi:</strong> Wisata G-Pass dibuka mulai pukul 08.00-18.00 WIB saat weekdays (Senin-Jumat). Lalu saat weekend (Sabtu dan Minggu), wisata ini dibuka mulai dari jam 12.00 WIB dan tidak ditutup di malam hari sehingga sering dibuat camping oleh para pengunjung. Harga tiket masuk yang ditetapkan untuk mengunjungi wisata ini sebesar Rp 5.000,00. Pada saat kamu sampai di lokasi, kamu akan bertemu penjaga area G-Pass yang sangat ramah dan informatif yang akan menjelaskan tentang wisata elok satu ini.</p>'
                    .'<p><strong>Daya Tarik Utama:</strong> Bagi kamu yang ingin menikmati berenang di dengan sensasi dingin dan sejuk, Dung Kluruk menawarkan pengalaman berenang yang menarik dan asyik. Menikmati sensasi berenang dengan air yang sejuk dan pemandangan pegunungan yang indah.</p>',
            ],
            [
                'slug' => 'sokowolu',
                'name' => 'Sokowolu',
                'hero_headline' => 'Selamat Datang di Sokowolu',
                'hero_image_url' => 'https://drive.google.com/thumbnail?id=1uoahO7LaBHukk-zJtdjOmKK1yPnmWW5-&sz=w2000',
                'card_image_url' => 'https://drive.google.com/thumbnail?id=16iw8d-XWlKrucOoEJotZj7gvqdP_ocAy&sz=w2000',
                'lat' => -7.405295566315285,
                'lng' => 110.45791989350344,
                'hours' => 'Setiap hari, pukul 06:00–19:00',
                'price' => 'Rp 5.000,00',
                'price_note' => 'Biaya parkir juga berlaku, dengan tarif Rp 2.000,00 untuk sepeda motor dan Rp 5.000,00 untuk mobil',
                'facilities' => [
                    'Air Mengalir',
                    'Toilet',
                    'Area Camping',
                    'Penyewaan Peralatan Camping',
                ],
                'body' => '<p>Eksplorasi Keindahan Alam Hutan Pinus Tiamo Sokowolu Getasan Semarang.</p>'
                    .'<p>Ketika kamu berkunjung ke Kabupaten Semarang, pengalaman liburan Anda akan terasa kurang lengkap tanpa mengeksplorasi destinasi wisata alam yang populer di daerah kabupaten Semarang. Salah satunya adalah Hutan Pinus Tiamo yang terletak di Dusun Sokowolu. Destinasi ini terkenal dengan keindahan alamnya, menawarkan area rekreasi yang dikelilingi oleh hutan pinus yang memukau.</p>'
                    .'<p><strong>Tentang Destinasi:</strong> Hutan Pinus Tiamo berada di Dusun Sokowolu, Tajuk, Kecamatan Getasan, Kabupaten Semarang, Jawa Tengah. Sebelum memutuskan untuk berkunjung, pastikan kendaraan Anda dalam kondisi optimal. Untuk merasakan suasana yang lebih tenang dan udara yang lebih segar, disarankan datang pada pagi atau sore hari, saat cuaca lebih sejuk dan tidak terlalu panas.</p>'
                    .'<p><strong>Daya Tarik Utama:</strong></p>'
                    .'<ul>'
                    .'<li><strong>Hutan Pinus:</strong> Keberadaan pohon pinus menjadi salah satu daya tarik utama di tempat wisata alam terbuka ini. Dikelilingi pepohonan hijau yang tinggi, kamu dapat merasakan ketenangan dan kedamaian yang sulit ditemukan di kota.</li>'
                    .'<li><strong>Tiamo Waterfall:</strong> Selain menyuguhkan pemandangan hutan pinus yang luas, kawasan ini juga memiliki air terjun yang menawan bernama Tiamo Waterfall. Meskipun air terjun ini tidak begitu tinggi dan alirannya tidak terlalu deras, kejernihan airnya tetap memukau.</li>'
                    .'<li><strong>Camping Ground:</strong> Di Hutan Pinus Tiamo, ada daya tarik lain yang tak kalah menarik berupa camping ground yang luas dan nyaman. Kamu akan dimanjakan dengan pemandangan spektakuler dari gunung dan bukit yang mengelilingi tempat ini.</li>'
                    .'<li><strong>Photo Spot:</strong> Hal yang paling diincar wisatawan adalah spot foto yang cantik. Di sini, ada tulisan “Tiamo” yang dapat dijadikan sebagai spot foto tambahan.</li>'
                    .'</ul>',
            ],
            [
                'slug' => 'ngaduman',
                'name' => 'Ngaduman',
                'hero_headline' => 'Selamat Datang di Ngaduman',
                'hero_image_url' => 'https://drive.google.com/thumbnail?id=1WutfgpyKpbV_y5AYGRNrRFQvAEzRzriW&sz=w2000',
                'card_image_url' => 'https://drive.google.com/thumbnail?id=1YgVxJSZrXVHYyYM1UoOyGbi9jNhMQkKG&sz=w2000',
                'lat' => -7.417724367829767,
                'lng' => 110.44035079535077,
                'hours' => null,
                'price' => null,
                'price_note' => null,
                'facilities' => [
                    'Akomodasi',
                    'Transportasi Tradisional',
                    'Makanan dan Minuman',
                    'Toilet',
                    'Kegiatan Terstruktur',
                    'Downhill',
                    'Kopi Khas Ngaduman',
                ],
                'body' => '<p>Nikmati pengalaman tinggal di Dusun Ngaduman dan mengikuti keseharian warga melalui program Live in Dusun Ngaduman.</p>'
                    .'<p>Tinggal di lingkungan sejuk dengan sambutan hangat penduduk yang menerimamu untuk mengikuti keseharian mereka akan menjadi pengalaman tak terlupakan. Hal ini bisa kamu dapatkan melalui paket wisata ‘Live in’ Dusun Ngaduman.</p>'
                    .'<p><strong>Tentang Destinasi:</strong> Dusun Ngaduman merupakan salah satu dusun yang ada di Desa Tajuk, Kecamatan Getasan, Kabupaten Semarang. Berada di pemukiman tertinggi lereng Gunung Merbabu, program wisata \'Live in\' Dusun Ngaduman menjadi destinasi yang sempurna untuk menepi dari hiruk-pikuk perkotaan. Melalui program ini, kamu akan mendapat kesempatan untuk merasakan langsung keseharian warga dusun. Inilah yang menjadi daya tarik utama dari program \'Live in\' Dusun Ngaduman.</p>'
                    .'<p><strong>Daya Tarik Utama:</strong></p>'
                    .'<ul>'
                    .'<li><strong>Pengalaman Tinggal dengan Keluarga Asuh:</strong> Kamu akan tinggal bersama keluarga asuh, yang memungkinkan kamu untuk merasakan kehidupan sehari-hari warga Dusun Ngaduman secara langsung. Serta, Berpartisipasi dalam aktivitas sehari-hari seperti berkebun, memasak, dan kegiatan budaya lainnya.</li>'
                    .'<li><strong>Pembelajaran Berkebun Kopi:</strong> Dusun ini dikelilingi oleh kebun kopi yang luas, dan kamu akan diajarkan cara berkebun kopi secara langsung oleh penduduk setempat.</li>'
                    .'<li><strong>Kegiatan Budaya:</strong> Berpartisipasi dalam kegiatan budaya, termasuk tarian selamat datang dan prosesi pembukaan yang hangat saat pertama kali tiba.</li>'
                    .'<li><strong>Fleksibilitas Durasi Program:</strong> Program menawarkan fleksibilitas dalam memilih durasi tinggal, mulai dari 2 hari 1 malam hingga 4 hari 3 malam.</li>'
                    .'<li><strong>Sambutan Tradisional:</strong> Saat pertama kali tiba, kamu akan disambut dengan minuman, makanan ringan, tarian selamat datang, dan prosesi sambutan yang melibatkan perwakilan dusun dan pengunjung.</li>'
                    .'</ul>',
            ],
            [
                'slug' => 'gpass',
                'name' => 'Gedong Pass',
                'hero_headline' => 'Selamat Datang di Gedong Pass',
                'hero_image_url' => 'https://drive.google.com/thumbnail?id=1No5U00Ne0uaBYNwoV0QhuUo97Gp5XNHr&sz=w2000',
                'card_image_url' => 'https://drive.google.com/thumbnail?id=1Utm9pGSR5mqXXOZGNjwgvdxOYajma_Hy&sz=w2000',
                'lat' => -7.415801910724171,
                'lng' => 110.44408678000971,
                'hours' => 'Setiap hari. Pukul 08:00–18:00 WIB saat weekdays (Senin–Jumat), pukul 12:00 - Senin saat weekend (Sabtu–Minggu)',
                'price' => 'Rp 5.000,00',
                'price_note' => null,
                'facilities' => [
                    'Lampu di Area Campsite',
                    'Lampu di Area Toilet',
                    'Air Mengalir',
                    'Tempat Sampah Terkelola',
                    'Tempat Ibadah',
                    'Api Unggun',
                    'Warung',
                    'Spot Foto',
                    'Paket Home Stay',
                ],
                'body' => '<p>Wisata G-Pass memiliki beragam spot foto, camping, hingga layanan homestay.</p>'
                    .'<p>Salah satu keindahan alam yang tidak boleh kamu lewatkan ketika berkunjung ke Desa Tajuk adalah wisata G-Pass atau Gedong Pass yang berada di Dusun Gedong, Desa Tajuk, Kecamatan Getasan. Wisata yang menawarkan ketenangan dan keindahan alam yaitu view Gunung Telomoyo, Gunung Ungaran, Gunung Waduk, Gunung Andong, Gunung Lawu, Gunung Muria (jika cuaca sedang cerah), Gunung Merbabu, hutan pinus sepanjang mata memandang, citylight ketika malam hari, dan tentunya ikon Kota Semarang yaitu Rawa Pening tentunya menjadi spot wisata yang sangat memikat untuk segera dikunjungi.</p>'
                    .'<p><strong>Tentang Destinasi:</strong> Wisata G-Pass dibuka mulai pukul 08.00-18.00 WIB saat weekdays (Senin-Jumat). Lalu saat weekend (Sabtu dan Minggu), wisata ini dibuka mulai dari jam 12.00 WIB dan tidak ditutup di malam hari sehingga sering dibuat camping oleh para pengunjung. Harga tiket masuk yang ditetapkan untuk mengunjungi wisata ini sebesar Rp 5.000,00. Pada saat kamu sampai di lokasi, kamu akan bertemu penjaga area G-Pass yang sangat ramah dan informatif yang akan menjelaskan tentang wisata elok satu ini.</p>'
                    .'<p><strong>Daya Tarik Utama:</strong> Wisata G-Pass adalah kombinasi dari pemandangan alam yang spektakuler dan pengalaman budaya yang otentik. Dengan panorama menakjubkan dari gunung-gunung seperti Gunung Telomoyo, Gunung Merbabu, dan Rawa Pening, serta spot foto ikonik seperti kapal yang memberikan sensasi melayang di antara awan, G-Pass menawarkan keindahan yang sulit ditemukan di tempat lain. Selain itu, pengunjung dapat menikmati pengalaman camping di malam hari, bersantai sambil menikmati secangkir kopi panas, dan merasakan kehidupan desa melalui paket homestay yang memungkinkan interaksi langsung dengan masyarakat Dusun Gedong.</p>',
            ],
        ];
    }
}

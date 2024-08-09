import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Dusun from "@/Components/Dusun";

export default function DusunTajuk(props) {
    return (
        <div className="w-full h-full bg-color1 text-xs lg:text-base flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25">
            <Head title={props.title} />
            <Navbar />

            <div className="w-full relative">
                <img
                    className="w-full h-[250px] md:h-full lg:h-[500px] object-cover"
                    src="/imgDusun/dsnPulihan/Pulihan.jpg"
                    alt="Pemandangan Dusun Pulihan"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full text-center">
                    <h1 className="lg:text-4xl text-3xl font-serif font-bold">
                        Harmoni Keindahan dan Keseruan di Dusun Tajuk
                    </h1>
                </div>
            </div>

            <div className="w-full px-8 md:px-40 text-justify space-y-6 leading-relaxed">
                <p>
                    Bayangkan betapa seru dan menyenangkannya hidup di{" "}
                    <strong>Dusun Tajuk</strong> yang terkenal dengan
                    keaktifannya dalam berpartisipasi di berbagai kegiatan desa.
                    Bahkan, warga dusun ini juga berpatisipasi aktif dalam
                    kelompok desa. Misalnya menjadi anggota BUMDES dan Karang
                    Taruna.
                </p>
                <p>
                    Dusun Tajuk menjadi salah satu bagian Desa Tajuk yang
                    terletak di Kecamatan Getasan, Kabupaten Semarang. Dusun ini
                    dihuni oleh 124 Kepala Keluarga (KK). Selain aktif dalam
                    kegiatan di desa, Dusun Tajuk juga memiliki keindahan dan
                    kesejukan alam yang asri. Dusun ini memiliki perkebunan yang
                    dan terdapat peternakan sapi sebagai salah satu sumber mata
                    pencarian warga mengingat sebagian besar warga berprofesi
                    sebagai peternak dan petani sayur. Hasil pertanian dari
                    dusun ini biasanya berupa kol, cabai, dan tembakau. Namun,
                    untuk tanaman tembakau hanya bisa ditemukan di bulan-bulan
                    tertentu. Misalnya di bulan Agustus dan September.
                </p>
                <p>
                    Secara geografis, jarak Dusun Tajuk ke Kecamatan Getasan
                    sekitar 5 KM. Dusun yang paling berdekatan dengan Dusun
                    Tajuk adalah Dusun Ngroto. Selain hasil pertanian, potensi
                    lain yang dimiliki oleh dusun ini adalah peternakan.
                    Terdapat hasil susu dari sapi perah yang juga dapat diolah.
                    Hasil pertanian dan peternakan ini biasanya dijual ke pasar
                    ataupun juragan.
                </p>
                <p>
                    Selain itu, terdapat 1 UMKM yang masih aktif yaitu UMKM yang
                    bergerak untuk mengolah tempe. UMKM Tempe di dusun tajuk
                    sangat aktif karena usaha dari warga desa yang memanfaatkan
                    potensi ini dengan maksimal. semua hasil olahan kedelai
                    mulai dari proses hingga produksi, dilakukan sendiri oleh
                    warga dengan kerja sama dan gotong royong.
                </p>
                <p>
                    Mayoritas penduduk beragama Islam dan sebagian lagi beragama
                    Kristen. Di dusun ini, warganya juga masih menerapkan
                    kalender jawa. .Ada tradisi Saparan yang berbeda-beda
                    tanggal pelaksanannya di masing-masing dusun. Di Dusun Tajuk
                    sendiri tradisi ini diperingati oleh warga pada tanggal 30
                    Agustus. Biasanya dilaksanakan di minggu legi dengan
                    mengikuti kalender jawa. Tradisi Saparan ini masih dilakukan
                    karena warga percaya bahwa tradisi ini merupakan wujud
                    syukur dengan tujuan agar diberikan keselamatan hidup dunia
                    akhirat. Selain itu juga memanjatkan harapan agar
                    mendapatkan banyak berkah dan rezeki, serta jauh dari
                    malapetaka. Ketika mengunjungi Dusun Tajuk, kamu juga akan
                    disambut dengan hangat oleh warganya. Mau tau bagaimana
                    euforia kehidupan yang menyenangkan lainnya di Mau tau
                    bagaimana euforia kehidupan yang menyenangkan lainnya di
                    Dusun Tajuk? Yuk, kunjungi Dusun Tajuk, Desa Tajuk,
                    Kecamatan Getasan, Kabupaten Semarang, Jawa Tengah.
                </p>
            </div>

            <div className="w-[370px] lg:w-[1100px] h-auto lg:h-44 relative overflow-hidden rounded-lg">
                <img
                    className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover transform transition-transform duration-500 hover:scale-110"
                    src="/Paket.jpg"
                    alt="Beautiful Landscape"
                />

                <div className="absolute top-0 left-0 w-full h-auto lg:h-44 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg p-4">
                    <span className="text-white text-center text-xs lg:text-2xl mb-4 font-serif">
                        Langit yang biru, gunung yang megah, dan hutan yang
                        mempesona menanti Anda untuk dijelajahi
                    </span>
                    <Link
                        href="/Paket"
                        className="btn bg-white text-black text-xs py-1 px-2 sm:text-sm sm:py-2 sm:px-4 rounded hover:scale-105 transition duration-200 font-sans"
                    >
                        Lihat Paket
                    </Link>
                </div>
            </div>

            <div className="w-full h-full">
                {/* w-[1190px] */}
                <Dusun />
            </div>

            <Footer />
        </div>
    );
}

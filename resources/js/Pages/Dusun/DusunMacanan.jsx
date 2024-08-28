import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Dusun from "@/Components/Dusun";

export default function DusunTajuk(props) {
    return (
        <div className="w-full h-full bg-white text-lg lg:text-xl flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25">
            <Head title={props.title} />
            <Navbar />

            <div className="w-full relative">
                <img
                    className="w-full h-[250px] md:h-full lg:h-[500px] object-cover"
                    src="https://drive.google.com/thumbnail?id=1x3SUpKByO8n2FToEQm9LS6-YeQ7Ukm9U&sz=w2000"
                    alt="Pemandangan Dusun Macanan"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full text-center">
                    <h1 className="lg:text-4xl text-xl font-serif font-bold">
                        Potret Kehidupan Dusun Macanan yang Harmonis dan
                        Potensinya
                    </h1>
                </div>
            </div>

            <div className="w-full px-8 md:px-52 text-justify space-y-6 leading-relaxed text-black">
                <p>
                    Dusun Macanan adalah salah satu bagian dusun di Desa Tajuk,
                    Kecamatan Getasan, Kabupaten Semarang Tengah yang mayoritas
                    penduduknya bekerja sebagai petani. Meskipun berada di
                    daerah yang agak terpencil, kehidupan di dusun ini penuh
                    dengan keceriaan dan kebersamaan. Mari kita jelajahi
                    bagaimana kehidupan di Dusun Macanan dan apa saja potensi
                    yang mereka miliki.
                </p>
                <p>
                    Mayoritas warga Dusun Macanan adalah petani. Di sini, mereka
                    menanam tembakau sebagai tanaman utama, terutama di musim
                    kemarau. Tanah di Macanan memang agak berbeda dan lebih
                    cocok untuk menanam tembakau dibanding sayuran. Mereka tetap
                    semangat menjalani hari-hari sebagai petani. Selain
                    tembakau, warga di sini juga menanam pohon sengon dan suren
                    di lahan yang kurang subur. Beberapa warga juga beternak
                    sapi perah dan sapi daging yang setiap rumah beternak
                    sendiri-sendiri. Selain itu, uniknya di Dusun Macanan juga
                    terdapat cukup banyak monyet. Meskipun begitu, binatang ini
                    tidak mengganggu keselamatan warga.
                </p>
                <p>
                    Tidak hanya dalam kegiatan pertanian dan tradisi, warga
                    Dusun Macanan juga terkenal dengan solidaritas dan
                    kekompakannya. Misalnya, saat ada masalah yang harus
                    diselesaikan, mereka selalu berkumpul untuk bermusyawarah
                    dan mencari solusi bersama. Bahkan, dalam kehidupan
                    sehari-hari, rasa kekeluargaan dan kebersamaan sangat
                    terasa. Mereka saling mendukung dan membantu satu sama lain,
                    membuat kehidupan di dusun ini menjadi lebih hangat dan
                    menyenangkan.
                </p>
                <p>
                    Kehidupan sosial di Dusun Macanan sangat aktif. Tradisi
                    gotong royong masih sangat kental di sini. Warga selalu
                    bekerja sama dalam berbagai kegiatan, seperti kerja bakti
                    untuk memperbaiki jalan pertanian dan pembangunan
                    infrastruktur dusun. Dengan semangat kebersamaan, banyak hal
                    bisa dicapai oleh warga dusun.
                </p>
                <p>
                    Organisasi Karang Taruna di dusun ini juga sangat aktif.
                    Mereka rutin mengadakan arisan setiap Sabtu malam dan
                    lomba-lomba dalam rangka peringatan 17 Agustus, warga selalu
                    bersemangat mengikuti berbagai lomba dan acara yang
                    diadakan. Ketua Karang Taruna bersama wakilnya selalu
                    berkoordinasi untuk mengadakan berbagai acara yang
                    melibatkan semua lapisan masyarakat.
                </p>
                <p>
                    Dusun Macanan juga memiliki potensi lain yang menarik.
                    Produksi teh sangrai menjadi peluang yang menjanjikan dan
                    menjadi keunggulan di dusun ini. Meski saat ini produksinya
                    masih untuk konsumsi sendiri, Infrastruktur jalan di Dusun
                    Macanan berupa jalan-jalan setapak, digunakan sebagai akses
                    pertanian. Ini bukanlah jalur utama dan tidak bisa dilalui
                    oleh kendaraan besar. Misalnya mobil atau truk. Oleh karena
                    itu, ketika kamu berkunjung ke dusun ini, kamu tidak bisa
                    menjelajah dusun menggunakan mobil.
                </p>
                <p>
                    Meskipun menghadapi banyak tantangan, semangat gotong royong
                    di Dusun Macanan sangat kuat. Tradisi kerja bakti dan saling
                    membantu dalam membangun rumah masih kental di sini.
                    Masyarakatnya ramah dan selalu siap membantu satu sama lain.
                    Selain itu, kegiatan Karang Taruna yang aktif juga menjadi
                    bukti bahwa kehidupan sosial di Dusun Macanan sangat dinamis
                    dan solid. Sambutan hangat dan keceriaan warga menjadi salah
                    satu alasan kamu perlu mengunjungi Dusun Macanan dan rasakan
                    kenyamanannya.
                </p>
            </div>

            <div className="w-[330px] lg:w-[1100px] h-auto lg:h-44 relative overflow-hidden rounded-lg">
                <img
                    className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover transform transition-transform duration-500 hover:scale-110"
                    src="https://drive.google.com/thumbnail?id=1XBEW_Q-5DtOiEYmfDFHe6-4oA2peGJt-&sz=w2000"
                    alt="Beautiful Landscape"
                />

                <div className="absolute top-0 left-0 w-full h-auto lg:h-44 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg p-4">
                    <span className="text-white text-center text-xs lg:text-2xl mb-4 font-serif tracking-wide">
                        Langit yang biru, gunung yang megah, dan dusun kaya
                        budaya menanti Anda untuk dijelajahi
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

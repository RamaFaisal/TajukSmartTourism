import React from "react";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head, Link } from "@inertiajs/react";

export default function Ngaduman(props) {
    return (
        <>
            <Head title={props.title} />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            />
            <Navbar />

            <div className="w-full">
                <div className="absolute inset-0 flex items-center justify-center z-10 h-[350px] md:h-[400px] bg-black bg-opacity-45">
                    <div className="text-center text-white font-serif px-10 md:px-0">
                        <h1 className="text-xl md:text-5xl font-bold mb-4">
                            Selamat Datang di Ngaduman
                        </h1>
                        <p className="text-md md:text-2xl">
                            Nikmati pengalaman tinggal di Dusun Ngaduman dan
                            mengikuti keseharian warga melalui program Live in
                            Dusun Ngaduman.
                        </p>
                    </div>
                </div>
                <img
                    className="w-full h-[350px] md:h-full lg:h-[400px] object-cover"
                    src="https://drive.google.com/thumbnail?id=1WutfgpyKpbV_y5AYGRNrRFQvAEzRzriW&sz=w2000"
                    alt="Wisata DungKluruk"
                />
            </div>

            <div className="w-full h-full bg-white text-white flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25 pt-10">
                <div className="w-full flex flex-col lg:flex-row items-center justify-center px-5 md:px-52">
                    <div className="w-full lg:w-1/2 max-w-[1127px] text-center lg:text-left mb-8 lg:mb-0 lg:mr-8">
                        <p className="text-black text-lg lg:text-xl font-sans mt-4">
                            Tinggal di lingkungan sejuk dengan sambutan hangat
                            penduduk yang menerimamu untuk mengikuti keseharian
                            mereka akan menjadi pengalaman tak terlupakan. Hal
                            ini bisa kamu dapatkan melalui paket wisata ‘Live
                            in’ Dusun Ngaduman.
                        </p>
                    </div>
                    <div className="w-full lg:w-[550px] flex justify-center items-center">
                        <div className="w-full max-w-[1127px] px-4 lg:px-0">
                            <div className="w-full lg:h-80 relative overflow-hidden">
                                <img
                                    className="w-full h-auto lg:h-80 object-cover rounded-[20px]"
                                    src="https://drive.google.com/thumbnail?id=1YgVxJSZrXVHYyYM1UoOyGbi9jNhMQkKG&sz=w2000"
                                    alt="Wisata DungKluruk"
                                />
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-2 px-4 rounded-full flex items-center space-x-2">
                                    <Link
                                        className="text-black font-semibold font-sans text-xs md:text-lg"
                                        href="/Informasi/Gallery"
                                    >
                                        Lihat Semua Galeri
                                    </Link>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-4 h-4 text-black"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[350px] lg:w-[1100px] h-auto lg:h-44 relative overflow-hidden rounded-lg">
                    <img
                        className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover transform transition-transform duration-500 hover:scale-110"
                        src="https://drive.google.com/thumbnail?id=1XBEW_Q-5DtOiEYmfDFHe6-4oA2peGJt-&sz=w2000"
                        alt="Beautiful Landscape"
                    />

                    <div className="absolute top-0 left-0 w-full h-auto lg:h-44 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg p-4">
                        <span className="text-white text-center text-xs lg:text-2xl mb-4 font-serif">
                            Langit yang biru, gunung yang megah, dan hutan yang
                            mempesona menanti Anda untuk dijelajahi.
                        </span>
                        <Link
                            href="/Paket"
                            className="btn bg-white text-black text-xs py-1 px-2 sm:text-sm sm:py-2 sm:px-4 rounded hover:scale-105 transition duration-200"
                        >
                            Lihat Paket
                        </Link>
                    </div>
                </div>

                <div className="w-full px-8 md:px-52 bg-transparent font-sans text-black text-xl">
                    <h1 className="text-4xl lg:text-7xl text-center font-bold mb-5 lg:mb-20 font-serif text-hijauNew">
                        Ngaduman
                    </h1>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-2">
                        Tentang Destinasi:
                    </h2>
                    <p className="mb-4">
                        Dusun Ngaduman merupakan salah satu dusun yang ada di
                        Desa Tajuk, Kecamatan Getasan, Kabupaten Semarang.
                        Berada di pemukiman tertinggi lereng Gunung Merbabu,
                        program wisata 'Live in' Dusun Ngaduman menjadi
                        destinasi yang sempurna untuk menepi dari hiruk-pikuk
                        perkotaan. Melalui program ini, kamu akan mendapat
                        kesempatan untuk merasakan langsung keseharian warga
                        dusun. Inilah yang menjadi daya tarik utama dari program
                        'Live in' Dusun Ngaduman.
                    </p>
                    <br />

                    <h2 className="text-xl lg:text-2xl font-semibold mb-2">
                        Daya Tarik Utama:
                    </h2>
                    <ul className="list-disc list-inside mb-4">
                        <li className="mt-2">
                            <strong>
                                Pengalaman Tinggal dengan Keluarga Asuh:
                            </strong>
                            Kamu akan tinggal bersama keluarga asuh, yang
                            memungkinkan kamu untuk merasakan kehidupan
                            sehari-hari warga Dusun Ngaduman secara langsung.
                            Serta, Berpartisipasi dalam aktivitas sehari-hari
                            seperti berkebun, memasak, dan kegiatan budaya
                            lainnya.
                        </li>
                        <li className="mt-2">
                            <strong>Pembelajaran Berkebun Kopi:</strong> Dusun
                            ini dikelilingi oleh kebun kopi yang luas, dan kamu
                            akan diajarkan cara berkebun kopi secara langsung
                            oleh penduduk setempat.
                        </li>
                        <li className="mt-2">
                            <strong>Kegiatan Budaya:</strong> Berpartisipasi
                            dalam kegiatan budaya, termasuk tarian selamat
                            datang dan prosesi pembukaan yang hangat saat
                            pertama kali tiba.
                        </li>
                        <li className="mt-2">
                            <strong>Fleksibilitas Durasi Program:</strong>{" "}
                            Program menawarkan fleksibilitas dalam memilih
                            durasi tinggal, mulai dari 2 hari 1 malam hingga 4
                            hari 3 malam.
                        </li>
                        <li className="mt-2">
                            <strong>Sambutan Tradisional:</strong> Saat pertama
                            kali tiba, kamu akan disambut dengan minuman,
                            makanan ringan, tarian selamat datang, dan prosesi
                            sambutan yang melibatkan perwakilan dusun dan
                            pengunjung
                        </li>
                    </ul>
                    <br />

                    <h2 className="text-xl lg:text-2xl font-semibold mb-2">
                        Fasilitas:
                    </h2>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center">
                            <i className="fa-solid fa-bed mr-7"></i>
                            Akomodasi
                        </div>
                        <div className="flex items-center">
                            <i className="fa-solid fa-shuttle-van mr-7"></i>
                            Transportasi Tradisional
                        </div>
                        <div className="flex items-center">
                            <i className="fa-solid fa-utensils mr-7"></i>
                            Makanan dan Minuman
                        </div>
                        <div className="flex items-center">
                            <i className="fa-solid fa-restroom mr-7"></i>
                            Toilet
                        </div>
                        <div className="flex items-center">
                            <i className="fa-solid fa-list-alt mr-7"></i>
                            Kegiatan Terstruktur
                        </div>
                        <div className="flex items-center">
                            <i className="fa-solid fa-mountain mr-7"></i>
                            Downhill
                        </div>
                        <div className="flex items-center">
                            <i className="fa-solid fa-mug-hot mr-7"></i>
                            Kopi Khas Ngaduman
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}

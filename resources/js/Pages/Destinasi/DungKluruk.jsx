import React from "react";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head, Link } from "@inertiajs/react";

export default function DungKluruk(props) {
    return (
        <>
            <Head title={props.title}>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                />
            </Head>
            <Navbar />

            <div className="w-full">
                <div className="absolute inset-0 flex items-center justify-center z-10 h-[350px] md:h-[400px] bg-black bg-opacity-45">
                    <div className="text-center text-white font-serif px-10 md:px-0">
                        <h1 className="text-xl md:text-5xl font-bold mb-4">
                            Selamat Datang di DungKluruk
                        </h1>
                        <p className="text-md md:text-2xl">
                            Dung Kluruk menjadi destinasi wisata alam yang
                            instragamable dan siap memanjakan mata kamu.
                        </p>
                    </div>
                </div>
                <img
                    className="w-full h-[350px] md:h-full lg:h-[400px] object-cover"
                    src="https://drive.google.com/thumbnail?id=1tkS1gi8WDwDTXSOlzDkJrI2cvFKT173J&sz=w2000"
                    alt="Wisata Gedong Pass"
                />
            </div>

            <div className="w-full h-full bg-white text-white flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25 pt-10">
                <div className="w-full flex flex-col lg:flex-row items-center justify-center px-5 md:px-52">
                    <div className="w-full lg:w-1/2 max-w-[1127px] text-center lg:text-left mb-8 lg:mb-0 lg:mr-8">
                        <p className="text-black text-lg md:text-xl font-sans mt-4">
                            Anda seorang pecinta alam yang selalu mencari
                            tempat-tempat wisata alam yang baru untuk
                            dijelajahi? Jika ya, maka Wisata alam Dung Kluruk
                            bisa menjadi destinasi pilihan yang sempurna untuk
                            anda jelajahi. Dung Kluruk adalah salah satu
                            destinasi wisata yang terletak di Kecamatan Getasan
                            dan memiliki pesona alam yang siap memanjakan mata
                            dan hati anda.
                        </p>
                    </div>
                    <div className="w-full lg:w-[550px] flex justify-center items-center">
                        <div className="w-full max-w-[1127px] px-4 lg:px-0">
                            <div className="w-full lg:h-80 relative overflow-hidden">
                                <img
                                    className="w-full h-auto lg:h-80 object-cover rounded-[20px]"
                                    src="https://drive.google.com/thumbnail?id=1_J3VAXJ5anX7IdwBPsvbI6kNDGV9CQXg&sz=w2000"
                                    alt="Wisata DungKluruk"
                                />
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-2 px-4 rounded-full flex items-center space-x-2">
                                    <Link
                                        className="font-semibold text-black text-xs md:text-lg"
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
                            className="btn bg-white text-black text-xs md:px-2 px-1 rounded hover:scale-105 transition duration-200"
                        >
                            Lihat Paket
                        </Link>
                    </div>
                </div>

                <div className="w-full px-8 md:px-52 bg-transparent font-sans text-black text-xl">
                    <h1 className="text-4xl lg:text-7xl text-center font-bold mb-5 lg:mb-20 font-serif text-hijauNew">
                        Dungkluruk
                    </h1>
                    <p className="mb-4 mt-10 lg:mt-20">
                        Buka: Setiap Hari
                        <br />
                        Waktu: 08:00 - 17:00
                    </p>
                    <br />
                    <h2 className="text-xl lg:text-2xl font-semibold mb-2">
                        Harga Tiket Masuk: Rp 5.000,00
                    </h2>
                    <br />

                    <h2 className="text-xl lg:text-2xl font-semibold mb-2">
                        Tentang Destinasi:
                    </h2>
                    <p className="mb-4">
                        Wisata G-Pass dibuka mulai pukul 08.00-18.00 WIB saat
                        weekdays (Senin-Jumat). Lalu saat weekend (Sabtu dan
                        Minggu), wisata ini dibuka mulai dari jam 12.00 WIB dan
                        tidak ditutup di malam hari sehingga sering dibuat
                        camping oleh para pengunjung. Harga tiket masuk yang
                        ditetapkan untuk mengunjungi wisata ini sebesar Rp
                        5.000,00. Pada saat kamu sampai di lokasi, kamu akan
                        bertemu penjaga area G-Pass yang sangat ramah dan
                        informatif yang akan menjelaskan tentang wisata elok
                        satu ini.
                    </p>
                    <br />

                    <h2 className="text-xl lg:text-2xl font-semibold mb-2">
                        Daya Tarik Utama:
                    </h2>
                    <p className="mb-4">
                        Bagi kamu yang ingin menikmati berenang di dengan
                        sensasi dingin dan sejuk, Dung Kluruk menawarkan
                        pengalaman berenang yang menarik dan asyik. Menikmati
                        sensasi berenang dengan air yang sejuk dan pemandangan
                        pegunungan yang indah
                    </p>
                    <br />

                    <h2 className="text-xl lg:text-2xl font-semibold mb-2">
                        Fasilitas:
                    </h2>
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center">
                            <i className="fa-solid fa-mosque mr-6"></i>
                            Mushola
                        </div>
                        <div className="flex items-center">
                            <i className="fa-solid fa-couch mr-6"></i>
                            Tempat Istirahat dan Bersantai
                        </div>
                        <div className="flex items-center">
                            <i className="fa-solid fa-tree mr-6"></i>
                            Area Piknik
                        </div>
                        <div className="flex items-center">
                            <i className="fa-solid fa-restroom mr-6"></i>
                            Toilet Umum
                        </div>
                        <div className="flex items-center">
                            <i className="fa-solid fa-car mr-6"></i>
                            Area Parkir
                        </div>
                        <div className="flex items-center">
                            <i className="fa-solid fa-campground mr-6"></i>
                            Area Camping
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}

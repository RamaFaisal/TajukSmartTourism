import React from "react";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function DungKluruk(props) {
    return (
        <div className="w-full h-full bg-white flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25">
            <Head title={props.title} />
            <Navbar />

            <div className="w-full">
                <img
                    className="w-full h-[550px] md:h-full lg:h-full object-cover"
                    src="https://i.pinimg.com/736x/9c/95/75/9c95751f1620f261ccc81d9373c94a0b.jpg"
                    alt="Beautiful Landscape"
                />
                <div className="w-full h-auto bg-blue-500 text-white p-4">
                    <div className="px-[68px]">
                        <nav className="text-sm">
                            <span className="text-red-300"> Home</span> /
                            <span className="text-white"> Destinasi & Event</span> /
                            <span className="text-white"> DungKlurk</span>
                        </nav>
                        <h1 className="text-3xl font-bold">DungKluruk</h1>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row items-center justify-center px-5 lg:px-20">
                <div className="w-full lg:w-1/2 max-w-[1127px] text-center lg:text-left mb-8 lg:mb-0 lg:mr-8">
                    <h1 className="text-black text-4xl md:text-6xl lg:text-7xl font-bold font-['Roboto']">
                        Selamat Datang di{" "}
                        <span className="text-green-500">Dung Kluruk</span>
                    </h1>
                    <p className="text-black text-lg md:text-xl lg:text-2xl font-normal font-['Roboto'] mt-8 lg:indent-16">
                        Dung-Kluruk merupakan taman wisata yang desain untuk
                        wisata keluarga. Terdapat taman, embung dan aneka
                        bermain untuk anak. Disamping taman dung-kluruk terdapat
                        lapangan, yang sering digunakan untuk berbagai macam
                        acara. Saat kita berada di taman wisata ini, kita dapat
                        melihat dengan jelas view gunung merbabu.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className="w-full max-w-[1127px] px-4 lg:px-0">
                        <div className="w-full h-auto overflow-hidden relative">
                            <img
                                className="w-full h-auto lg:h-[450px] object-cover rounded-[20px]"
                                src="https://i.pinimg.com/564x/e5/78/77/e5787760f17f6a0ce9f541b4e1e8cfb4.jpg"
                                alt="Mobil"
                            />
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-2 px-4 rounded-full flex items-center space-x-2 text-xs sm:text-base md:text-lg lg:text-xl">
                                <span className="text-black font-semibold">
                                    Lihat Semua Galeri
                                </span>
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

            <div className="w-full relative overflow-hidden">
                <div className="">
                    <img
                        className="w-full h-32 sm:h-20 md:h-28 lg:h-40 xl:h-56 object-cover transform transition-transform duration-500 hover:scale-110"
                        src="https://i.pinimg.com/564x/0a/65/7b/0a657b4d8f3ef4fe41977f115b067ae4.jpg"
                        alt="Beautiful Landscape"
                    />

                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg p-4">
                        <span className="text-white text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold mb-4">
                            Langit yang biru, gunung yang megah, dan hutan yang
                            mempesona menanti Anda untuk dijelajahi. Nikmati
                            keindahan alam yang menakjubkan.
                        </span>
                        <a
                            href="#"
                            className="btn bg-white text-black font-bold py-2 px-4 rounded hover:scale-100"
                        >
                            Lihat Paket
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full px-10 lg:px-20 bg-white rounded-md">
                <h1 className="text-3xl font-bold mb-2">Dungkluruk</h1>
                <p className="text-gray-700 mb-4">
                    Buka: Setiap Hari
                    <br />
                    Waktu: 06:00 - 19:00
                    <br />
                    Lokasi: -
                </p>
                <h2 className="text-xl font-semibold mb-2">
                    Harga Tiket Masuk:
                </h2>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                    <li>Dewasa: Rp 100.000</li>
                    <li>Anak-anak (3-12 tahun): Rp 50.000</li>
                    <li>Balita (di bawah 3 tahun): Gratis</li>
                </ul>

                <h2 className="text-xl font-semibold mb-2">
                    Tentang Destinasi:
                </h2>
                <p className="text-gray-700 mb-4">
                    Dungkluruk, sebuah kawasan pegunungan yang terletak jauh
                    dari keramaian kota, adalah destinasi ideal bagi para
                    petualang dan pecinta alam. Dengan pemandangan pegunungan
                    yang dramatis, hutan yang lebat, dan air terjun yang
                    memukau, Dungkluruk menawarkan berbagai kegiatan luar
                    ruangan yang menantang dan memuaskan. Destinasi ini terkenal
                    dengan keasliannya yang masih terjaga, menawarkan pengalaman
                    otentik bagi para pengunjung yang ingin menikmati keindahan
                    alam yang murni.
                </p>
                <h2 className="text-xl font-semibold mb-2">
                    Daya Tarik Utama:
                </h2>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                    <li>
                        <strong>Gunung Dungkluruk:</strong> Puncak gunung yang
                        menawarkan pemandangan panorama yang menakjubkan, jalur
                        pendakian yang menantang, dan udara pegunungan yang
                        segar. Pemandangan dari puncak gunung ini sangat
                        memukau, terutama saat matahari terbit dan terbenam.
                    </li>
                    <li>
                        <strong>Air Terjun Seribu Bidadari:</strong> Air terjun
                        yang megah dan indah, dikelilingi oleh hutan lebat,
                        ideal untuk berenang dan berfoto. Air terjun ini
                        menawarkan suasana yang tenang dan pemandangan yang
                        mempesona.
                    </li>
                    <li>
                        <strong>Lembah Hijau:</strong> Lembah yang subur dengan
                        hamparan padang rumput hijau dan bunga-bunga liar,
                        sempurna untuk piknik dan rekreasi. Lembah ini menjadi
                        tempat yang ideal untuk berjalan santai dan menikmati
                        keindahan alam.
                    </li>
                    <li>
                        <strong>Desa Tradisional Dungkluruk:</strong> Desa yang
                        mempertahankan cara hidup tradisional, di mana
                        pengunjung dapat belajar tentang budaya dan tradisi
                        lokal. Desa ini juga menawarkan penginapan homestay yang
                        memberikan pengalaman hidup bersama penduduk setempat.
                    </li>
                </ul>
                <h2 className="text-xl font-semibold mb-2">Fasilitas:</h2>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                    <li>Jalur Trekking</li>
                    <li>Pemandu Wisata</li>
                    <li>Tempat Istirahat dan Bersantai</li>
                    <li>Area Piknik</li>
                    <li>Tikar dan Selimut</li>
                    <li>Toilet Umum</li>
                    <li>Area Parkir</li>
                    <li>Area Camping</li>
                </ul>
            </div>

            <Footer />
        </div>
    );
}

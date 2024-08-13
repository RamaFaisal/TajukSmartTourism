import React from "react";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head, Link } from "@inertiajs/react";

export default function Ngaduman(props) {
    return (
        <>
            <Head title={props.title} />
            <Navbar />

            <div className="w-full">
                <img
                    className="w-full h-[250px] md:h-full lg:h-[400px] object-cover"
                    src="/imgSokowolu/sokowoluHead.jpg"
                    alt="Wisata DungKluruk"
                />
            </div>

            <div className="w-full h-full bg-white text-white flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25 pt-10">
                <div className="w-full flex flex-col lg:flex-row items-center justify-center px-5 lg:px-40">
                    <div className="w-full lg:w-1/2 max-w-[1127px] text-center lg:text-left mb-8 lg:mb-0 lg:mr-8">
                        <h1 className="text-black text-4xl md:text-4xl lg:text-6xl font-bold font-serif">
                            Selamat Datang di{" "}
                            <span className="text-tajuk">Ngaduman</span>
                        </h1>
                        <p className="text-black text-lg lg:text-xl font-normal mt-4 lg:indent-16">
                            Dung-Kluruk merupakan taman wisata yang desain untuk
                            wisata keluarga. Terdapat taman, embung dan aneka
                            bermain untuk anak. Disamping taman dung-kluruk
                            terdapat lapangan, yang sering digunakan untuk
                            berbagai macam acara.
                        </p>
                    </div>
                    <div className="w-full lg:w-[550px] flex justify-center items-center">
                        <div className="w-full max-w-[1127px] px-4 lg:px-0">
                            <div className="w-full lg:h-80 relative overflow-hidden">
                                <img
                                    className="w-full h-auto lg:h-80 object-cover rounded-[20px]"
                                    src="/imgDungKluruk/dungKluruk.jpg"
                                    alt="Wisata DungKluruk"
                                />
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-2 px-4 rounded-full flex items-center space-x-2 text-xs sm:text-base lg:text-lg">
                                    <Link
                                        className="text-black font-semibold font-sans"
                                        href="/Gallery"
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
                        src="/Paket.jpg"
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

                <div className="w-full px-8 lg:px-40 bg-transparent font-sans text-black">
                    <h1 className="text-4xl lg:text-7xl text-center font-bold mb-5 lg:mb-20 font-serif text-tajuk">
                        Ngaduman
                    </h1>
                    <img
                        className="w-auto h-[210px] lg:h-[650px] object-cover mx-auto rounded-xl"
                        src="/imgDungKluruk/templateAr.jpg"
                        alt="Deskripsi Gambar"
                    />

                    <p className="mb-4 mt-10 lg:mt-20">
                        Buka: Setiap Hari
                        <br />
                        Waktu: 06:00 - 19:00
                        <br />
                        Lokasi: -
                    </p>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-2">
                        Harga Tiket Masuk:
                    </h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Dewasa: Rp 100.000</li>
                        <li>Anak-anak (3-12 tahun): Rp 50.000</li>
                        <li>Balita (di bawah 3 tahun): Gratis</li>
                    </ul>

                    <h2 className="text-xl lg:text-2xl font-semibold mb-2">
                        Tentang Destinasi:
                    </h2>
                    <p className="mb-4">
                        Dungkluruk, sebuah kawasan pegunungan yang terletak jauh
                        dari keramaian kota, adalah destinasi ideal bagi para
                        petualang dan pecinta alam. Dengan pemandangan
                        pegunungan yang dramatis, hutan yang lebat, dan air
                        terjun yang memukau, Dungkluruk menawarkan berbagai
                        kegiatan luar ruangan yang menantang dan memuaskan.
                        Destinasi ini terkenal dengan keasliannya yang masih
                        terjaga, menawarkan pengalaman otentik bagi para
                        pengunjung yang ingin menikmati keindahan alam yang
                        murni.
                    </p>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-2">
                        Daya Tarik Utama:
                    </h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            <strong>Gunung Dungkluruk:</strong> Puncak gunung
                            yang menawarkan pemandangan panorama yang
                            menakjubkan, jalur pendakian yang menantang, dan
                            udara pegunungan yang segar. Pemandangan dari puncak
                            gunung ini sangat memukau, terutama saat matahari
                            terbit dan terbenam.
                        </li>
                        <li>
                            <strong>Air Terjun Seribu Bidadari:</strong> Air
                            terjun yang megah dan indah, dikelilingi oleh hutan
                            lebat, ideal untuk berenang dan berfoto. Air terjun
                            ini menawarkan suasana yang tenang dan pemandangan
                            yang mempesona.
                        </li>
                        <li>
                            <strong>Lembah Hijau:</strong> Lembah yang subur
                            dengan hamparan padang rumput hijau dan bunga-bunga
                            liar, sempurna untuk piknik dan rekreasi. Lembah ini
                            menjadi tempat yang ideal untuk berjalan santai dan
                            menikmati keindahan alam.
                        </li>
                        <li>
                            <strong>Desa Tradisional Dungkluruk:</strong> Desa
                            yang mempertahankan cara hidup tradisional, di mana
                            pengunjung dapat belajar tentang budaya dan tradisi
                            lokal. Desa ini juga menawarkan penginapan homestay
                            yang memberikan pengalaman hidup bersama penduduk
                            setempat.
                        </li>
                    </ul>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-2">
                        Fasilitas:
                    </h2>
                    <ul className="list-disc list-inside">
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
        </>
    );
}

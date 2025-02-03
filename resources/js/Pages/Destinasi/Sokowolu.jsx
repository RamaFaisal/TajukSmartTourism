import React from "react";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head, Link } from "@inertiajs/react";

export default function Sokowolu(props) {
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
                    <div className="text-center text-white  px-10 md:px-0">
                        <h1 className="text-xl md:text-5xl font-bold mb-4">
                            Selamat Datang di Sokowolu
                        </h1>
                        <p className="text-sm lg:text-xl text-center">
                            Eksplorasi Keindahan Alam Hutan Pinus Tiamo Sokowolu
                            Getasan Semarang.
                        </p>
                    </div>
                </div>
                <img
                    className="w-full h-[350px] md:h-full lg:h-[400px] object-cover"
                    src="https://drive.google.com/thumbnail?id=1uoahO7LaBHukk-zJtdjOmKK1yPnmWW5-&sz=w2000"
                    alt="Wisata DungKluruk"
                />
            </div>

            <div className="w-full h-full bg-white text-white flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25 pt-10">
                <div className="w-full flex flex-col lg:flex-row items-center justify-center px-5 md:px-52">
                    <div className="w-full lg:w-1/2 max-w-[1127px] text-center lg:text-left mb-8 lg:mb-0 lg:mr-8">
                        <p className="text-black text-sm lg:text-xl mt-4 font-sans">
                            Ketika kamu berkunjung ke Kabupaten Semarang,
                            pengalaman liburan Anda akan terasa kurang lengkap
                            tanpa mengeksplorasi destinasi wisata alam yang
                            populer di daerah kabupaten Semarang. Salah satunya
                            adalah Hutan Pinus Tiamo yang terletak di Dusun
                            Sokowolu. Destinasi ini terkenal dengan keindahan
                            alamnya, menawarkan area rekreasi yang dikelilingi
                            oleh hutan pinus yang memukau.
                        </p>
                    </div>
                    <div className="w-full lg:w-[550px] flex justify-center items-center">
                        <div className="w-full max-w-[1127px] px-4 lg:px-0">
                            <div className="w-full lg:h-80 relative overflow-hidden">
                                <img
                                    className="w-full h-40 lg:h-80 object-cover rounded-[20px]"
                                    src="https://drive.google.com/thumbnail?id=16iw8d-XWlKrucOoEJotZj7gvqdP_ocAy&sz=w2000"
                                    alt="Wisata DungKluruk"
                                />
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-2 px-4 rounded-full flex items-center space-x-2">
                                    <Link
                                        className="text-black font-semibold font-sans text-xs md:text-lg w-auto"
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

                <div className="w-[330px] lg:w-[1100px] h-auto lg:h-44 relative overflow-hidden rounded-lg">
                    <img
                        className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover transform transition-transform duration-500 hover:scale-110"
                        src="https://drive.google.com/thumbnail?id=1XBEW_Q-5DtOiEYmfDFHe6-4oA2peGJt-&sz=w2000"
                        alt="Beautiful Landscape"
                    />

                    <div className="absolute top-0 left-0 w-full h-auto lg:h-44 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg p-4">
                        <span className="text-white text-center text-sm lg:text-xl mb-4  tracking-wide">
                            Langit yang biru, gunung yang megah, dan dusun kaya
                            budaya menanti Anda untuk dijelajahi.
                        </span>
                        <Link
                            href="/Paket"
                            className="btn bg-white text-black text-base py-1 px-2 sm:text-sm sm:py-2 sm:px-4 rounded hover:scale-105 transition duration-200"
                        >
                            Lihat Paket
                        </Link>
                    </div>
                </div>

                <div className="w-full px-8 md:px-52 bg-transparent font-sans text-black text-sm lg:text-xl">
                    <h1 className="text-4xl lg:text-7xl text-center font-bold mb-5 lg:mb-20  text-hijauNew">
                        Sokowolu
                    </h1>
                    <p className="mb-4 mt-10 lg:mt-20">
                        Buka: Setiap Hari
                        <br />
                        Waktu: 06:00 - 19:00
                    </p>
                    <br />

                    <h2 className="text-xl lg:text-2xl font-semibold mb-2">
                        Harga Tiket Masuk: Rp 5.000,00
                    </h2>
                    <p className="mb-4">
                        Biaya parkir juga berlaku, dengan tarif Rp 2.000,00
                        untuk sepeda motor dan Rp 5.000,00 untuk mobil
                    </p>
                    <br />

                    <h2 className="text-xl lg:text-2xl font-semibold mb-2">
                        Tentang Destinasi:
                    </h2>
                    <p className="mb-4">
                        Hutan Pinus Tiamo berada di Dusun Sokowolu, Tajuk,
                        Kecamatan Getasan, Kabupaten Semarang, Jawa Tengah.
                        Sebelum memutuskan untuk berkunjung, pastikan kendaraan
                        Anda dalam kondisi optimal. Untuk merasakan suasana yang
                        lebih tenang dan udara yang lebih segar, disarankan
                        datang pada pagi atau sore hari, saat cuaca lebih sejuk
                        dan tidak terlalu panas.
                    </p>
                    <br />

                    <h2 className="text-xl lg:text-2xl font-semibold mb-2">
                        Daya Tarik Utama:
                    </h2>
                    <ul className="list-disc list-inside mb-4">
                        <li className="mt-2">
                            <strong>Hutan Pinus:</strong> Keberadaan pohon pinus
                            menjadi salah satu daya tarik utama di tempat wisata
                            alam terbuka ini. Dikelilingi pepohonan hijau yang
                            tinggi, kamu dapat merasakan ketenangan dan
                            kedamaian yang sulit ditemukan di kota.
                        </li>
                        <li className="mt-2">
                            <strong>Tiamo Waterfall:</strong> Selain menyuguhkan
                            pemandangan hutan pinus yang luas, kawasan ini juga
                            memiliki air terjun yang menawan bernama Tiamo
                            Waterfall. Meskipun air terjun ini tidak begitu
                            tinggi dan alirannya tidak terlalu deras, kejernihan
                            airnya tetap memukau.
                        </li>
                        <li className="mt-2">
                            <strong>Camping Ground:</strong> Di Hutan Pinus
                            Tiamo, ada daya tarik lain yang tak kalah menarik
                            berupa camping ground yang luas dan nyaman. Kamu
                            akan dimanjakan dengan pemandangan spektakuler dari
                            gunung dan bukit yang mengelilingi tempat ini.
                            Dengan suasana yang begitu memikat, kamu pasti akan
                            merasa betah untuk berkemah bersama teman atau
                            sekeluarga selama beberapa hari disini.
                        </li>
                        <li className="mt-2">
                            <strong>Photo Spot:</strong> Hal yang paling diincar
                            wisatawan adalah spot foto yang cantik. Di sini, ada
                            tulisan “Tiamo” yang dapat dijadikan sebagai spot
                            foto tambahan. Di area ini, Anda akan menemukan
                            berbagai latar belakang menarik lainnya yang cocok
                            untuk mempercantik foto Anda.
                        </li>
                    </ul>
                    <br />

                    <h2 className="text-xl lg:text-2xl font-semibold mb-2">
                        Fasilitas:
                    </h2>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center">
                            <i className="fa-solid fa-faucet mr-6"></i>
                            Air Mengalir
                        </div>
                        <div className="flex items-center">
                            <i className="fa-solid fa-restroom mr-6"></i>
                            Toilet
                        </div>
                        <div className="flex items-center">
                            <i className="fa-solid fa-campground mr-6"></i>
                            Area Camping
                        </div>
                        <div className="flex items-center">
                            <i className="fa-solid fa-toolbox mr-6"></i>
                            Penyewaan Peralatan Camping
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}

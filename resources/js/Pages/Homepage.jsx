import React, { useRef, useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Carousel from "@/Components/Carousel";
import Footer from "@/Components/Footer";
import Dusun from "@/Components/Dusun";
import Article from "@/Components/Article";
import VideoCarousel from "@/Components/VideoCarousel";

export default function Homepage(props) {
    return (
        <div className="w-full h-full bg-color1 flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25">
            <Head title={props.title} />
            <Navbar />
            <Carousel />

            <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 text-center">
                <span className="text-black text-3xl sm:text-4xl md:text-5xl font-roboto font-bold">
                    Selamat Datang di{" "}
                    <span className="md:hidden">
                        <br />
                    </span>
                    <span className="text-color2">Desa Wisata Tajuk</span>
                </span>
                <br />
                <span className="text-black text-sm sm:text-sm md:text-base lg:text-lg font-roboto font-normal mt-4 block">
                    <b>Desa Wisata Tajuk</b> adalah surga tersembunyi yang
                    menawarkan keindahan alam, kekayaan budaya, dan keramahan
                    penduduk lokal. Terletak di jantung Jawa Tengah, desa kami
                    adalah destinasi yang sempurna untuk Anda yang mencari
                    ketenangan, petualangan, dan pengalaman autentik yang tak
                    terlupakan.
                </span>
                <div className="mt-8">
                    <VideoCarousel />
                </div>
            </div>

            <div className="bg-color2 w-11/12 p-2 lg:p-5 rounded-xl border-4 border-black">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/2">
                            <img
                                src="https://i.pinimg.com/564x/87/66/00/87660081be9c389e8d309c881f1204aa.jpg"
                                alt="Hot Air Balloon"
                                className="rounded-lg w-full h-auto"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-between">
                            <div className="bg-white shadow-md rounded-lg mb-4">
                                <div className="rounded-t-lg pt-4 px-4">
                                    <h2 className="text-2xl font-bold">
                                        Tiamo
                                    </h2>
                                </div>
                                <div className="p-4">
                                    <p>
                                        Hutan Pinus Tiamo, menyuguhkan nuansa
                                        alam teduh dan pemandangan hijau yang
                                        akan membuat kamu menjadi tenang dan
                                        tentram. Untuk ketempat ini kamu cuma
                                        harus membayar biaya parkir saja sebesar
                                        Rp. 2000 per motor dan Rp. 5000 per
                                        mobil saja.
                                    </p>
                                    <Link
                                        href="/Tiamo"
                                        className="mt-2 inline-block w-full text-center bg-white text-black font-semibold py-2 px-4 rounded border border-black hover:bg-black hover:text-white transition duration-300"
                                    >
                                        Lihat Detail
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white shadow-md rounded-lg">
                                <div className="rounded-t-lg pt-4 px-4">
                                    <h2 className="text-2xl font-bold">
                                        Dung Kluruk
                                    </h2>
                                </div>
                                <div className="p-4">
                                    <p>
                                        Dung-Kluruk merupakan taman wisata yang
                                        desain untuk wisata keluarga. Terdapat
                                        taman, embung dan aneka bermain untuk
                                        anak. Disamping taman dung-kluruk
                                        terdapat lapangan, yang sering digunakan
                                        untuk berbagai macam acara. Saat kita
                                        berada di taman wisata ini, kita dapat
                                        melihat dengan jelas view gunung
                                        merbabu.
                                    </p>
                                    <Link
                                        href="/DungKluruk"
                                        className="mt-2 inline-block w-full text-center bg-white text-black font-semibold py-2 px-4 rounded border border-black hover:bg-black hover:text-white transition duration-300"
                                    >
                                        Lihat Detail
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full relative overflow-hidden">
                <img
                    className="w-full h-32 sm:h-40 md:h-56 lg:h-72 xl:h-80 object-cover transform transition-transform duration-500 hover:scale-110"
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
                        className="btn bg-white text-black font-bold py-2 px-4 rounded hover:scale-105 transition-transform"
                    >
                        Lihat Paket
                    </a>
                </div>
            </div>

            <Dusun />

            <div className="w-full h-full flex flex-col items-center bg-stone-100">
                <Article />
            </div>

            <Footer />
        </div>
    );
}

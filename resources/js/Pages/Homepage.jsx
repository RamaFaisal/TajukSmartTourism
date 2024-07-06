import React, { useRef, useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Carousel from "@/Components/Carousel";
import Footer from "@/Components/Footer";
import Dusun from "@/Components/Dusun";
import Article from "@/Components/Article";
import VideoCarousel from "@/Components/VideoCarousel";
import Destinasi from "@/Components/Destinasi";

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

            <div className="w-full h-full ">
                <Destinasi />
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

import React from "react";
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
        <>
            <Head title={props.title} />
            <Navbar />

            <div className="relative w-full h-[490px] sm:h-[500px] md:h-[600px] lg:h-[710px] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center text-white">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
                            Selamat Datang di Desa Wisata Tajuk
                        </h1>
                        <p className="text-md md:text-lg lg:text-2xl text-center">
                            Nikmati keindahan alam dan budaya lokal yang
                            mempesona
                        </p>
                    </div>
                </div>
                <Carousel />
            </div>

            <div className="relative w-full bg-white text-xs lg:text-base flex flex-col justify-start items-center gap-16 sm:gap-24 md:gap-24 lg:gap-28 object-cover rounded-t-[20px] lg:rounded-t-[50px]">
                <div className="relative flex flex-col items-center md:items-start md:flex-row pt-10 md:pt-32 md:px-32 z-10 text-black">
                    <div className="text-3xl lg:text-4xl font-bold text-center md:text-right mb-8 md:mb-0">
                        <div>DIMENSI BARU</div>
                        <div>WISATA TAJUK</div>
                    </div>

                    <div className="md:ml-8 text-lg md:text-xl lg:text-3xl font-sans md:border-l-4 md:border-black px-12 text-center md:text-left md:px-8">
                        <p>
                            Desa Wisata Tajuk adalah surga tersembunyi yang
                            menawarkan keindahan alam, kekayaan budaya, dan
                            keramahan penduduk lokal. Terletak di jantung Jawa
                            Tengah, desa kami adalah destinasi yang sempurna
                            untuk Anda yang mencari ketenangan, petualangan, dan
                            pengalaman autentik yang tak terlupakan.
                        </p>
                    </div>
                </div>

                <div className="w-full h-full">
                    <Dusun />
                </div>

                <div className="w-[375px] lg:w-[1100px] border border-zinc-400"></div>

                <div className="w-full md:w-[900px] lg:w-[1000px] h-full px-3 lg:px-0 overflow-hidden">
                    <Destinasi />
                </div>

                <div className="w-[375px] lg:w-[1127px] border border-zinc-400"></div>

                <div className="w-full md:w-[800px] lg:w-[1400px] rounded-lg z-10 relative px-5">
                    <VideoCarousel />
                </div>

                <div className="w-[330px] lg:w-[1100px] h-auto lg:h-44 relative overflow-hidden rounded-lg">
                    <img
                        className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover transform transition-transform duration-500 hover:scale-110"
                        src="https://drive.google.com/thumbnail?id=1XBEW_Q-5DtOiEYmfDFHe6-4oA2peGJt-&sz=w2000"
                        alt="Beautiful Landscape"
                    />

                    <div className="absolute top-0 left-0 w-full h-auto lg:h-44 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg p-4">
                        <span className="text-white text-center text-xs lg:text-2xl mb-4">
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

                <div className="w-[375px] lg:w-[1100px] border border-zinc-400"></div>

                <div className="w-[370px] lg:w-[1100px] h-full items-center">
                    <Article />
                </div>
                <Footer />
            </div>
        </>
    );
}

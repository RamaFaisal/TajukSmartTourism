import React, { useRef, useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Carousel from "@/Components/Carousel";
import Footer from "@/Components/Footer";
import Dusun from "@/Components/Dusun";

export default function Homepage(props) {
    const [currentVideo, setCurrentVideo] = useState(0);
    const videoRefs = [useRef(null), useRef(null), useRef(null)];

    const handleNextVideo = () => {
        setCurrentVideo((prev) => (prev + 1) % videoRefs.length);
    };

    const handlePrevVideo = () => {
        setCurrentVideo(
            (prev) => (prev - 1 + videoRefs.length) % videoRefs.length
        );
    };

    useEffect(() => {
        // Pause all videos initially
        videoRefs.forEach((ref) => {
            ref.current.contentWindow.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                "*"
            );
        });
    }, []);

    return (
        <div className="w-full h-full bg-white flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25">
            <Head title={props.title} />
            <Navbar />
            <Carousel />

            <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 text-center">
                <span className="text-black text-3xl sm:text-4xl md:text-5xl font-roboto font-bold">
                    Selamat Datang di{" "}
                    <span className="text-green-500">Desa Wisata Tajuk</span>
                </span>
                <br />
                <span className="text-black text-xs sm:text-sm md:text-base lg:text-lg font-roboto font-normal mt-4 block">
                    <b>Desa Wisata Tajuk</b> adalah surga tersembunyi yang
                    menawarkan keindahan alam, kekayaan budaya, dan keramahan
                    penduduk lokal. Terletak di jantung Jawa Tengah, desa kami
                    adalah destinasi yang sempurna untuk Anda yang mencari
                    ketenangan, petualangan, dan pengalaman autentik yang tak
                    terlupakan.
                </span>

                <div className="relative w-full max-w-[1200px] mt-10 sm:mt-14 md:mt-20 flex justify-center items-center">
                    <div className="w-full p-0 flex justify-center items-center">
                        <div className="relative w-full flex justify-center">
                            {[
                                "https://www.youtube.com/embed/Q63MY4_Mjps?enablejsapi=1",
                                "https://www.youtube.com/embed/yiF5Y3Eszgg?enablejsapi=1",
                                "https://www.youtube.com/embed/6rz5LNbQFAQ?enablejsapi=1",
                            ].map((video, index) => (
                                <div
                                    key={index}
                                    className={`relative w-full flex justify-center ${
                                        index === currentVideo
                                            ? "block"
                                            : "hidden"
                                    }`}
                                >
                                    <iframe
                                        ref={videoRefs[index]}
                                        className="w-full max-w-[1000px] h-full aspect-video rounded-lg"
                                        src={video}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    <button
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded-full"
                                        onClick={handlePrevVideo}
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 19l-7-7 7-7"
                                            ></path>
                                        </svg>
                                    </button>
                                    <button
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded-full"
                                        onClick={handleNextVideo}
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            ></path>
                                        </svg>
                                    </button>
                                    <button
                                        className="absolute bottom-4 bg-gray-800 bg-opacity-75 hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-full"
                                        onClick={() =>
                                            videoRefs[
                                                index
                                            ].current.contentWindow.postMessage(
                                                '{"event":"command","func":"playVideo","args":""}',
                                                "*"
                                            )
                                        }
                                    >
                                        Tonton video
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-yellow-400 p-4">
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
                            <div className="bg-white shadow-md rounded-lg mb-4 h-2/4">
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
                                    <a
                                        href="#"
                                        className="mt-2 md:mt-20 inline-block w-full text-center bg-white text-black font-semibold py-2 px-4 rounded border border-black hover:bg-black hover:text-white transition duration-300"
                                    >
                                        Lihat Detail
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white shadow-md rounded-lg h-2/4">
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
                                    <a
                                        href="#"
                                        className="mt-2 md:mt-20 inline-block w-full text-center bg-white text-black font-semibold py-2 px-4 rounded border object-bottom border-black hover:bg-black hover:text-white transition duration-300"
                                    >
                                        Lihat Detail
                                    </a>
                                </div>
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
                        <span className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-4">
                            Langit yang biru, gunung yang megah, dan hutan yang
                            mempesona menanti Anda untuk dijelajahi. Nikmati
                            keindahan alam yang menakjubkan.
                        </span>
                        <a
                            href=""
                            className="btn bg-white text-black font-bold py-2 px-4 rounded hover:scale-100"
                        >
                            Lihat Paket
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <Dusun />
            </div>

            <Footer />
        </div>
    );
}

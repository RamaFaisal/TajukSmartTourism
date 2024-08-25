import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Carousel from "@/Components/Carousel";
import Footer from "@/Components/Footer";
import Destinasi from "@/Components/Destinasi";

export default function Paket(props) {
    return (
        <>
            <Head title={props.title} />
            <Navbar />
            <div className="relative w-full h-[490px] sm:h-[500px] md:h-[600px] lg:h-[710px] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center text-white font-serif">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 px-10">
                            Pengalaman Berkesan Telah Menunggu Anda
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl">
                            Nikmati keindahan alam dan budaya lokal yang
                            mempesona
                        </p>
                    </div>
                </div>
                <Carousel />
            </div>

            <div className="relative w-full bg-white text-black text-xs lg:text-base flex flex-col justify-start items-center gap-16 sm:gap-24 md:gap-24 lg:gap-28 rounded-t-[20px] lg:rounded-t-[150px]">
                <div className="w-full max-w-[1440px] flex flex-col items-center px-4 md:px-8 lg:px-16">
                    <div className="w-full max-w-[1127px] text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pt-10 lg:pt-32 font-serif">
                            Pesona Alam dan Budaya Desa Tajuk
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl mt-4 font-sans text-justify">
                            Nikmati pesona alam dan budaya Desa Tajuk dengan
                            paket wisata istimewa kami. Temukan keindahan yang
                            memukau dan pengalaman tak terlupakan hanya di sini.
                            Pesan sekarang dan mulailah petualangan Anda!
                        </p>
                    </div>

                    <div className="w-full max-w-[1127px] border border-zinc-400 mt-10"></div>

                    <div className="w-full max-w-[1127px] h-auto relative mt-10 border border-white p-4 md:p-8">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-serif text-center">
                            Tingkatkan Petualangan Anda
                        </h2>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="w-full h-auto p-4 border border-gray-300 rounded-lg">
                                <a href="/Paket/Family">
                                    <img
                                        src="imgPaket/halfDay.jpg"
                                        alt="Paket Pelajar - Fild Trip One Day"
                                        className="rounded-lg transform hover:scale-105 transition-transform duration-300"
                                    />
                                    <h3 className="text-xl font-bold font-sans mt-2">
                                        Paket Pelajar - Fild Trip One Day
                                    </h3>
                                </a>
                            </div>

                            <div className="w-full h-auto p-4 border border-gray-300 rounded-lg">
                                <a href="/Paket/Family">
                                    <img
                                        src="imgPaket/halfDay.jpg"
                                        alt="Paket Pelajar - Fild Trip One Day"
                                        className="rounded-lg transform hover:scale-105 transition-transform duration-300"
                                    />
                                    <h3 className="text-xl font-bold font-sans mt-2">
                                        Paket Pelajar - Fild Trip One Day
                                    </h3>
                                </a>
                            </div>

                            <div className="w-full h-auto p-4 border border-gray-300 rounded-lg">
                                <a href="/Paket/Family">
                                    <img
                                        src="imgPaket/halfDay.jpg"
                                        alt="Paket Pelajar - Fild Trip One Day"
                                        className="rounded-lg transform hover:scale-105 transition-transform duration-300"
                                    />
                                    <h3 className="text-xl font-bold font-sans mt-2">
                                        Paket Pelajar - Fild Trip One Day
                                    </h3>
                                </a>
                            </div>

                            <div className="w-full h-auto p-4 border border-gray-300 rounded-lg">
                                <a href="/Paket/Family">
                                    <img
                                        src="imgPaket/halfDay.jpg"
                                        alt="Paket Pelajar - Fild Trip One Day"
                                        className="rounded-lg transform hover:scale-105 transition-transform duration-300"
                                    />
                                    <h3 className="text-xl font-bold font-sans mt-2">
                                        Paket Pelajar - Fild Trip One Day
                                    </h3>
                                </a>
                            </div>

                            <div className="w-full h-auto p-4 border border-gray-300 rounded-lg">
                                <a href="/Paket/Family">
                                    <img
                                        src="imgPaket/halfDay.jpg"
                                        alt="Paket Pelajar - Fild Trip One Day"
                                        className="rounded-lg transform hover:scale-105 transition-transform duration-300"
                                    />
                                    <h3 className="text-xl font-bold font-sans mt-2">
                                        Paket Pelajar - Fild Trip One Day
                                    </h3>
                                </a>
                            </div>

                            <div className="w-full h-auto p-4 border border-gray-300 rounded-lg">
                                <a href="/Paket/Family">
                                    <img
                                        src="imgPaket/halfDay.jpg"
                                        alt="Paket Pelajar - Fild Trip One Day"
                                        className="rounded-lg transform hover:scale-105 transition-transform duration-300"
                                    />
                                    <h3 className="text-xl font-bold font-sans mt-2">
                                        Paket Pelajar - Fild Trip One Day
                                    </h3>
                                </a>
                            </div>
                        </div>
                        <div className="relative justify-self-center w-full left-1/2 transform -translate-x-1/2 text-sm lg:text-xl  text-center">
                            <span className="justify-items-end mt-4">
                                Ada yang Ingin Ditanyakan?{" "}
                                <span className="underline">
                                    Kami Siap Membantu, Hubungi Kami
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="w-full max-w-[1127px] border border-zinc-400"></div>

                    <div className="w-full md:w-[900px] lg:w-[1000px] h-full lg:mt-10">
                        <Destinasi />
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}

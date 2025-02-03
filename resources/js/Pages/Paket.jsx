import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Carousel from "@/Components/Carousel";
import Footer from "@/Components/Footer";
import Destinasi from "@/Components/Destinasi";

export default function Paket(props) {
    const packages = [
        {
            title: "Paket Live in 1",
            price: "IDR 150.000",
            perks: [
                "Welcome drink & Welcome Dance",
                "Kamar kaps 2-3 Orang",
                "Makan 3x",
                "Snack 2x",
                "Listrik & Air",
                "Outbond / Game",
                "Family Activity",
            ],
            jls: "1 hari / org",
            image: "https://drive.google.com/thumbnail?id=1XUqqWIBY0KOpjkOY-nt-5juLs4CKVwa1&sz=w2000",
            link: "https://wa.me/6283831597088?text=Halo,%20Apakah%20paket%20Live%20In%201%20masih%20ada?",
        },
        {
            title: "Paket Live in 2",
            price: "IDR 250.000",
            perks: [
                "Welcome drink & Welcome Dance",
                "Kamar kaps 2-3 orang",
                "Makan 6x",
                "Snack 4x",
                "Listrik & Air",
                "Outbond / Game",
                "Senam",
                "Family Activity",
            ],
            jls: "2 hari / org",
            image: "https://drive.google.com/thumbnail?id=1iGxBfaMWVQj90a3eT5VigasU5rTfZWxm&sz=w2000",
            link: "https://wa.me/6283831597088?text=Halo,%20Apakah%20paket%20Live%20In%202%20masih%20ada?",
        },
        {
            title: "Paket Live in 3",
            price: "IDR 350.000",
            perks: [
                "Welcome drink & Welcome Dance",
                "Kamar kaps 2-3 orang sesuai kondisi",
                "Makan 9x",
                "Snack 6x",
                "Listrik & Air",
                "Outbond / Game",
                "Senam",
                "Family Activity",
            ],
            jls: "3 hari / org",
            image: "https://drive.google.com/thumbnail?id=10R_wkLV2tSs2OoytjDRQpHLzmLjF-l1b&sz=w2000",
            link: "https://wa.me/6283831597088?text=Halo,%20Apakah%20paket%20Live%20In%203%20masih%20ada?",
        },
    ];

    return (
        <>
            <Head title={props.title} />
            <Navbar />
            <div className="relative w-full h-[490px] sm:h-[500px] md:h-[600px] lg:h-[710px] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 px-10">
                            Pengalaman Berkesan Telah Menunggu Anda
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-center">
                            Nikmati keindahan alam dan budaya lokal yang
                            mempesona
                        </p>
                    </div>
                </div>
                <Carousel />
            </div>

            <div className="relative w-full bg-white text-black text-xs lg:text-base flex flex-col justify-start items-center gap-16 sm:gap-24 md:gap-24 lg:gap-28 rounded-t-[20px] lg:rounded-t-[50px]">
                <div className="w-full max-w-[1440px] flex flex-col items-center px-4 md:px-8 lg:px-16">
                    <div className="w-full max-w-[1127px] text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pt-10 lg:pt-32">
                            Pesona Alam dan Budaya Desa Tajuk
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl mt-4 text-justify">
                            Nikmati pesona alam dan budaya Desa Tajuk dengan
                            paket wisata istimewa kami. Temukan keindahan yang
                            memukau dan pengalaman tak terlupakan hanya di sini.
                            Pesan sekarang dan mulailah petualangan Anda!
                        </p>
                    </div>

                    <div className="w-full max-w-[1127px] border border-zinc-400 mt-10"></div>

                    <div className="w-full max-w-[1127px] h-auto relative mt-10 border border-white p-4 md:p-8">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold  text-center">
                            Tingkatkan Petualangan Anda
                        </h2>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {packages.map((pkg, index) => (
                                <div key={index} className="w-full h-auto p-4">
                                    <img
                                        src={pkg.image}
                                        alt={pkg.title}
                                        className="rounded-lg w-full h-[200px] object-cover"
                                    />
                                    <div className="p-4 bg-white rounded-lg border border-gray-300 transform transition duration-300 group hover:-translate-y-2 hover:drop-shadow-2xl mt-4">
                                        <h3 className="text-xl font-bold font-sans mt-2">
                                            {pkg.title}
                                        </h3>
                                        <ul className="mt-4 text-gray-600">
                                            {pkg.perks.map((perk, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center"
                                                >
                                                    <span className="mr-2 text-green-600">
                                                        ✔
                                                    </span>
                                                    {perk}
                                                </li>
                                            ))}
                                        </ul>
                                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                            <a href={pkg.link} target="_blank">
                                                Book Now
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="relative justify-self-center w-full left-1/2 transform -translate-x-1/2 text-sm lg:text-xl text-center mt-10">
                            <span className="justify-items-end">
                                Ada yang Ingin Ditanyakan?{" "}
                                <span className="underline">
                                    <a href="https://wa.me/6283831597088?text=Halo,%20Apakah%20Anda%20bisa%20membantu%20saya?">
                                        Kami Siap Membantu, Hubungi Kami
                                    </a>
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

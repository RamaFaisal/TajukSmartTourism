import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";
import { Head } from "@inertiajs/react";

export default function Geografi(props) {
    return (
        <>
            <Head title={props.title} />
            <Navbar />

            <div className="relative w-full h-[300px] md:h-[600px] overflow-hidden">
                <img
                    className="fixed w-full h-[600px] md:h-full lg:h-[730px] object-cover top-0 left-0 z-0"
                    src="/imgTentangKami/Geografi.jpg"
                    alt="Profile Desa"
                />
            </div>

            <div className="relative w-full bg-white text-lg lg:text-xl flex flex-col justify-start items-center gap-16 sm:gap-24 md:gap-24 lg:gap-28 object-cover rounded-t-[20px] rounded-t-[150px] text-black">
                <div className="container mx-auto mt-10 pt-10 lg:w-[1280px] px-5 md:px-8 lg:px-16 pt-10 text-center z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif">
                        Geografi Desa Tajuk
                    </h1>
                </div>

                <div className="flex w-44 lg:w-full justify-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63302.4604088227!2d110.41287407255805!3d-7.420487038692551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7ba0ef395db1%3A0x9231614ff5e99988!2sTajuk%2C%20Kec.%20Getasan%2C%20Kabupaten%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1722264748241!5m2!1sid!2sid"
                        width="800"
                        height="600"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="w-full lg:w-[1160px] h-auto text-base md:text-lg lg:text-xl mt-2 px-4 z-10">
                    <p className="font-bold text-3xl text-center font-serif">
                        Geografi Desa Tajuk
                    </p>
                    <br />
                    <p className="px-5 text-lg md:text-xl lg:text-2xl text-justify font-sans">
                        Desa Tajuk terletak pada koordinat lintang
                        -7.413031826174547 dan bujur 110.44805136276523,
                        menjadikannya salah satu destinasi wisata yang menarik
                        di wilayah tersebut. Desa ini dikenal dengan pemandangan
                        alam yang indah, budaya lokal yang kaya, serta berbagai
                        aktivitas wisata yang bisa dinikmati oleh pengunjung.
                        Terletak di daerah pegunungan, Desa Tajuk menawarkan
                        udara segar dan pemandangan yang menakjubkan,
                        menjadikannya tempat yang ideal untuk berlibur dan
                        menikmati keindahan alam. Selain itu, desa ini juga
                        memiliki sejumlah situs bersejarah dan warisan budaya
                        yang menarik untuk dieksplorasi. Koordinat geografisnya
                        memudahkan wisatawan untuk menemukan lokasi ini dan
                        merencanakan perjalanan mereka dengan lebih mudah.
                    </p>
                </div>

                <Footer />
            </div>
        </>
    );
}

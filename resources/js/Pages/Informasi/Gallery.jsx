import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";
import Carousel from "@/Components/Carousel";
import { Head, Link } from "@inertiajs/react";

export default function Gallery(props) {
    // Data gambar dan link Instagram untuk kartu
    const cards = [
        {
            src: "https://drive.google.com/thumbnail?id=1SmHb-j86cV82xilSCoWAc_p7okhWI_8e&sz=w2000",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "https://drive.google.com/thumbnail?id=1fmeLTVY00RD0p1SJ8yn44J2CM3XJxZQP&sz=w2000",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "https://drive.google.com/thumbnail?id=1mb13jMebgns5zuesZ-cAbZ-kxSarWbEe&sz=w2000",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "https://drive.google.com/thumbnail?id=1ebZTNZGlaX2bhB9m-Tc2lILHZ43ZwHKm&sz=w2000",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "https://drive.google.com/thumbnail?id=1O9gpHAuUlifxq1rS9aL72-RtFqrfENOn&sz=w2000",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "https://drive.google.com/thumbnail?id=1eYfKksQqODA5k5508mlHcVtnnl4Z1DRM&sz=w2000",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "https://drive.google.com/thumbnail?id=1dXSVeGFo9NrQj26nyn-q3CWSndRB0acC&sz=w2000",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "https://drive.google.com/thumbnail?id=1Q9kLspp6GEoJ7UWMPuCI8RzIrt2vSPVT&sz=w2000",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "https://drive.google.com/thumbnail?id=1LPlybj-9twx280NhTKxASZve-eIQY085&sz=w2000",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "https://drive.google.com/thumbnail?id=1jYrU29jPA0NAx6EMYkYCsT0KKmVWaaJb&sz=w2000",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "https://drive.google.com/thumbnail?id=17Yj6RwuB_Br3CD3lUn7OhK1a_n903Anm&sz=w2000",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "https://drive.google.com/thumbnail?id=1pI7DHqRkHdKSt-HfywBcYd_MHRi7FbdA&sz=w2000",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "https://drive.google.com/thumbnail?id=1fwBvy_ELwBg8lCoNzUb8SYYlZdaVPuDD&sz=w2000",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "https://drive.google.com/thumbnail?id=1gRiDFq3coLxJ5K5g2_GixOD-0hXw41yZ&sz=w2000",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "https://drive.google.com/thumbnail?id=1-w5gW_LdypMGNmWHYbv96vQORzLpJuRM&sz=w2000",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "https://drive.google.com/thumbnail?id=1yuIVcKgKTkDAsZxfiLlsUkeyttyv8sTx&sz=w2000",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "https://drive.google.com/thumbnail?id=1iglTMYZR7meXv_aFcBa4JoaAXXwbK_x9&sz=w2000",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "https://drive.google.com/thumbnail?id=1KWTb3xH957jB5-o3ULIYjF_jF1NqWYLa&sz=w2000",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "https://drive.google.com/thumbnail?id=1Z4FgxS1opvwIzuRZ3pHa1jF-Z3gW5ZSv&sz=w2000",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "https://drive.google.com/thumbnail?id=1Rsb1BlnbvmsETtrIuZfzwrD0edyzwLxj&sz=w2000",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
    ];

    return (
        <>
            <Head title={props.title} />
            <Navbar />

            <div className="relative w-full h-[300px] sm:h-[300px] md:h-[500px] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center text-white font-serif">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Galeri Desa Wisata Tajuk
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl">
                            --------
                        </p>
                    </div>
                </div>
                <Carousel />
            </div>

            <div className="relative w-full bg-white text-xs lg:text-base flex flex-col justify-start items-center gap-16 sm:gap-24 md:gap-24 lg:gap-28 object-cover rounded-t-[20px] lg:rounded-t-[150px]">
                <div className="w-full max-w-[1127px] text-center px-4 md:px-8">
                    <h1 className="text-black font-serif text-3xl md:text-4xl lg:text-[55px] font-bold pt-10 lg:pt-32">
                        Berbagai Galeri Desa Tajuk
                    </h1>
                    <p className="text-black font-sans text-base md:text-lg lg:text-[25px] pt-8">
                        Selamat datang di Menu Galeri kami. Di sini, Anda dapat
                        menemukan berbagai foto keragaman yang berkaitan dengan
                        desa Tajuk.
                    </p>
                </div>
                <div className="w-full max-w-[1141px] h-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 md:px-8">
                    {cards.map((card, index) => (
                        <a
                            key={index}
                            href={card.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative bg-zinc-300 rounded-lg overflow-hidden aspect-w-1 aspect-h-1"
                        >
                            <img
                                src={card.src}
                                alt={`Informasi ${index + 1}`}
                                className="rounded-lg object-cover w-full h-full"
                            />
                            <img
                                src="/font&icon/instagram2.svg"
                                alt="Instagram"
                                className="absolute top-2 right-2 w-6 h-6 color-white"
                            />
                        </a>
                    ))}
                </div>
                <Footer />
            </div>
        </>
    );
}

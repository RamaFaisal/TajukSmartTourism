import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";
import Carousel from "@/Components/Carousel";
import { Head, Link } from "@inertiajs/react";

export default function Gallery(props) {
    // Data gambar dan link Instagram untuk kartu
    const cards = [
        {
            src: "/imgGaleri/1.jpg",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "/imgGaleri/2.jpg",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "/imgGaleri/3.jpg",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "/imgGaleri/4.jpg",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "/imgGaleri/5.jpg",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "/imgGaleri/6.jpg",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "/imgGaleri/7.jpg",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "/imgGaleri/8.jpg",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "/imgGaleri/9.png",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "/imgGaleri/10.jpg",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "/imgGaleri/11.png",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "/imgGaleri/12.png",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "/imgGaleri/13.jpg",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "/imgGaleri/14.png",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "/imgGaleri/15.jpg",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "/imgGaleri/16.jpg",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "/imgGaleri/17.png",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "/imgGaleri/18.jpg",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "/imgGaleri/19.jpg",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
        {
            src: "/imgGaleri/20.jpg",
            link: "https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3",
        },
    ];

    return (
        <>
            <Head title={props.title} />
            <Navbar />

            <div className="relative w-full h-[490px] sm:h-[500px] md:h-[600px] lg:h-[710px] overflow-hidden">
                <Carousel />
            </div>

            <div className="relative w-full bg-bgTajuk text-xs lg:text-base flex flex-col justify-start items-center gap-16 sm:gap-24 md:gap-24 lg:gap-28 object-cover rounded-t-[20px] lg:rounded-t-[50px]">
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

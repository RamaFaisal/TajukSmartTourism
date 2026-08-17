import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";
import Carousel from "@/Components/Carousel";
import { Head } from "@inertiajs/react";

export default function Gallery(props) {
    const photos = props.photos ?? [];

    return (
        <>
            <Head title={props.title} />
            <Navbar />

            <div className="relative w-full h-[300px] sm:h-[300px] md:h-[500px] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Galeri Desa Wisata Tajuk
                        </h1>
                    </div>
                </div>
                <Carousel />
            </div>

            <div className="relative w-full bg-white text-xs lg:text-base flex flex-col justify-start items-center gap-16 sm:gap-24 md:gap-24 lg:gap-28 object-cover rounded-t-[20px] lg:rounded-t-[50px]">
                <div className="w-full max-w-[1127px] text-center px-4 md:px-8">
                    <p className="text-black font-sans text-xl md:text-4xl pt-10 lg:pt-32">
                        Selamat datang di Menu Galeri kami. Di sini, Anda dapat
                        menemukan berbagai foto keragaman yang berkaitan dengan
                        desa Tajuk.
                    </p>
                </div>
                {photos.length === 0 ? (
                    <p className="text-gray-400">Belum ada foto galeri.</p>
                ) : (
                    <div className="w-full max-w-[1141px] h-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 md:px-8">
                        {photos.map((photo, index) => {
                            const content = (
                                <>
                                    <img
                                        src={photo.src}
                                        alt={photo.title || `Informasi ${index + 1}`}
                                        className="rounded-lg object-cover w-full h-full"
                                    />
                                    <img
                                        src="/font&icon/instagram2.svg"
                                        alt="Instagram"
                                        className="absolute top-2 right-2 w-6 h-6 color-white"
                                    />
                                </>
                            );
                            const classes =
                                "relative bg-zinc-300 rounded-lg overflow-hidden aspect-w-1 aspect-h-1";

                            return photo.link ? (
                                <a
                                    key={index}
                                    href={photo.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes}
                                >
                                    {content}
                                </a>
                            ) : (
                                <div key={index} className={classes}>
                                    {content}
                                </div>
                            );
                        })}
                    </div>
                )}
                <Footer />
            </div>
        </>
    );
}

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React, { useCallback, useState } from "react";
import Carousel from "@/Components/Carousel";
import Lightbox from "@/Components/Lightbox";
import { Head } from "@inertiajs/react";

const PAGE_SIZE = 7;

// Repeats every 8 photos: index 0 is a big feature tile, index 3 is tall,
// index 5 is wide, the rest are plain squares — gives the grid a bento look
// without needing a masonry library.
const TILE_SPAN = [
    "col-span-2 row-span-2",
    "",
    "",
    "row-span-2",
    "",
    "col-span-2",
    "",
    "",
];

export default function Gallery(props) {
    const photos = props.photos ?? [];
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const [openIndex, setOpenIndex] = useState(null);
    const visiblePhotos = photos.slice(0, visibleCount);

    const navigate = useCallback(
        (direction) => {
            setOpenIndex((current) =>
                current === null
                    ? current
                    : (current + direction + photos.length) % photos.length
            );
        },
        [photos.length]
    );

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
                <div className="w-full max-w-6xl text-center px-4 md:px-8">
                    <p className="text-black font-sans text-xl md:text-4xl pt-10 lg:pt-32">
                        Selamat datang di Menu Galeri kami. Di sini, Anda dapat
                        menemukan berbagai foto keragaman yang berkaitan dengan
                        desa Tajuk.
                    </p>
                </div>
                {photos.length === 0 ? (
                    <p className="text-gray-400">Belum ada foto galeri.</p>
                ) : (
                    <div className="w-full max-w-[1141px] px-4 md:px-8">
                        <div className="grid grid-flow-dense grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 auto-rows-[110px] sm:auto-rows-[130px] md:auto-rows-[150px] gap-3">
                            {visiblePhotos.map((photo, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setOpenIndex(index)}
                                    className={`group relative overflow-hidden rounded-lg bg-zinc-300 ${TILE_SPAN[index % TILE_SPAN.length]}`}
                                >
                                    <img
                                        src={photo.src}
                                        alt={photo.title || `Informasi ${index + 1}`}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/30">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="h-7 w-7 text-white opacity-0 transition duration-300 group-hover:opacity-100"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                                            />
                                        </svg>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {visibleCount < photos.length && (
                            <div className="flex justify-center mt-8">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setVisibleCount(
                                            (count) => count + PAGE_SIZE
                                        )
                                    }
                                    className="px-6 py-2 rounded-full bg-primary text-white font-semibold hover:opacity-90 transition"
                                >
                                    Muat lebih banyak
                                </button>
                            </div>
                        )}
                    </div>
                )}

                <Lightbox
                    photos={photos}
                    index={openIndex}
                    onClose={() => setOpenIndex(null)}
                    onNavigate={navigate}
                />

                <Footer />
            </div>
        </>
    );
}

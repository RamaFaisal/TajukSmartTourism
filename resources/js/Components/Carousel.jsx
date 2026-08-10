import React, { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const SLIDES = [
    {
        src: "https://drive.google.com/thumbnail?id=1iUFsaecxCYEbc60h9l6Sm2VOJuKy_tnE&sz=w2000",
        alt: "Pemandangan pegunungan Desa Tajuk",
    },
    {
        src: "https://drive.google.com/thumbnail?id=12_5kV2kbcMarszeGgDiLv7dDX3UVeBK_&sz=w2000",
        alt: "Keindahan alam Desa Tajuk",
    },
    {
        src: "https://drive.google.com/thumbnail?id=114fGKGqQf6djYIP-JL2Ks-3DzSRLovn9&sz=w2000",
        alt: "Hamparan sawah hijau di Desa Tajuk",
    },
    {
        src: "https://drive.google.com/thumbnail?id=1k9vBYV43kBww9T_NSgxFdfd7hzEnXRdZ&sz=w2000",
        alt: "Matahari terbenam di Desa Tajuk",
    },
];

const AUTOPLAY_MS = 6000;

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const timerRef = useRef(null);
    const total = SLIDES.length;

    const restartTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(
            () => setCurrent((prev) => (prev + 1) % total),
            AUTOPLAY_MS
        );
    };

    const goTo = (index) => {
        setCurrent(((index % total) + total) % total);
        restartTimer();
    };

    useEffect(() => {
        restartTimer();
        return () => clearInterval(timerRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handlers = useSwipeable({
        onSwipedLeft: () => goTo(current + 1),
        onSwipedRight: () => goTo(current - 1),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div
            {...handlers}
            className="absolute inset-0 overflow-hidden"
            onMouseEnter={() => {
                setPaused(true);
                clearInterval(timerRef.current);
            }}
            onMouseLeave={() => {
                setPaused(false);
                restartTimer();
            }}
        >
            {/* Slide gambar — crossfade + Ken Burns */}
            {SLIDES.map((slide, index) => (
                <div
                    key={index}
                    aria-hidden={index !== current}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === current ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <img
                        src={slide.src}
                        alt={slide.alt}
                        loading={index === 0 ? "eager" : "lazy"}
                        className={`h-full w-full object-cover ${
                            index === current ? "kenburns" : ""
                        }`}
                    />
                </div>
            ))}

            {/* Gradient agar teks hero tetap terbaca */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/45" />

            {/* Titik indikator */}
            <div className="absolute bottom-14 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
                {SLIDES.map((slide, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => goTo(index)}
                        aria-label={`Ke slide ${index + 1}`}
                        aria-current={index === current}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            index === current
                                ? "w-7 bg-accent"
                                : "w-2 bg-white/50 hover:bg-white/80"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;

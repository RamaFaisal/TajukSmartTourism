import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Carousel from "@/Components/Carousel";
import Footer from "@/Components/Footer";
import Dusun from "@/Components/Dusun";
import Article from "@/Components/Article";
import VideoCarousel from "@/Components/VideoCarousel";
import Destinasi from "@/Components/Destinasi";
import PromoBanner from "@/Components/PromoBanner";

const SectionHeading = ({ kicker, title, subtitle }) => (
    <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary ring-1 ring-primary/10 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.18em]">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
            {kicker}
        </span>
        <h2 className="mt-3 text-xl font-bold text-primary sm:mt-4 sm:text-2xl md:text-3xl lg:text-4xl">
            {title}
        </h2>
        {subtitle && (
            <p className="mt-2 text-xs leading-relaxed text-gray-500 sm:mt-3 sm:text-sm md:text-base">
                {subtitle}
            </p>
        )}
    </div>
);

const Divider = () => (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
);

const IconMountain = () => (
    <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
);

const IconLandmark = () => (
    <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M3 22h18" />
        <path d="M6 18v-7" />
        <path d="M10 18v-7" />
        <path d="M14 18v-7" />
        <path d="M18 18v-7" />
        <path d="m12 2 10 6H2l10-6z" />
    </svg>
);

const IconHeart = () => (
    <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
);

const INTRO_FEATURES = [
    { icon: <IconMountain />, label: "Alam Menawan" },
    { icon: <IconLandmark />, label: "Budaya Kaya" },
    { icon: <IconHeart />, label: "Keramahan Warga" },
];

export default function Homepage(props) {
    return (
        <>
            <Head title={props.title} />
            <Navbar />

            {/* Hero */}
            <div className="relative h-[460px] w-full overflow-hidden sm:h-[540px] md:h-[620px] lg:h-[710px]">
                <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-5 text-center text-white sm:px-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80 sm:text-sm sm:tracking-[0.3em] md:text-base">
                        Selamat Datang di
                    </p>
                    <h1 className="mt-2 max-w-4xl text-[28px] font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]">
                        Desa Wisata Tajuk
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed sm:mt-4 sm:text-base md:text-lg lg:text-2xl [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">
                        Nikmati keindahan alam dan budaya lokal yang mempesona
                    </p>
                    <div className="mt-6 flex w-full max-w-xs flex-col items-stretch gap-3 sm:mt-8 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
                        <a
                            href="#dusun"
                            className="pointer-events-auto rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition duration-200 hover:scale-105 hover:bg-accent md:text-base"
                        >
                            Jelajahi Dusun
                        </a>
                        <a
                            href="/Paket"
                            className="pointer-events-auto rounded-full border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-200 hover:bg-white hover:text-primary md:text-base"
                        >
                            Lihat Paket Wisata
                        </a>
                    </div>
                </div>
                <Carousel />
                <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/70 sm:bottom-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 sm:h-8 sm:w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>

            <div className="relative isolate w-full rounded-t-[20px] bg-white lg:rounded-t-[50px]">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-14 px-4 pb-14 text-sm sm:gap-20 sm:px-6 sm:pb-20 lg:gap-28 lg:px-8 lg:pb-28 lg:text-base">
                    {/* Intro */}
                    <div className="relative z-10 flex w-full flex-col gap-8 pt-10 sm:gap-10 md:pt-16 lg:flex-row lg:items-center lg:gap-16">
                        <div className="flex-1">
                            <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary ring-1 ring-primary/10 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.18em]">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                                Selamat Datang
                            </span>
                            <h2 className="mt-4 text-2xl font-bold leading-tight text-primary sm:mt-5 sm:text-3xl md:text-4xl lg:text-5xl">
                                Dimensi Baru
                                <br />
                                <span className="relative inline-block">
                                    Wisata Tajuk
                                    <svg
                                        className="absolute -bottom-2 left-0 w-full"
                                        viewBox="0 0 200 9"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M2 7C60 2 140 2 198 7"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            className="text-primary/30"
                                        />
                                    </svg>
                                </span>
                            </h2>
                            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-600 sm:mt-7 sm:text-base md:text-lg">
                                Desa Wisata Tajuk adalah surga tersembunyi yang
                                menawarkan keindahan alam, kekayaan budaya, dan
                                keramahan penduduk lokal. Terletak di jantung
                                Jawa Tengah, desa kami adalah destinasi yang
                                sempurna untuk Anda yang mencari ketenangan,
                                petualangan, dan pengalaman autentik yang tak
                                terlupakan.
                            </p>
                            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-5">
                                {INTRO_FEATURES.map((feature) => (
                                    <div
                                        key={feature.label}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-primary ring-1 ring-primary/10">
                                            {feature.icon}
                                        </span>
                                        <span className="text-sm font-semibold text-gray-700 md:text-base">
                                            {feature.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full shrink-0 lg:w-[400px]">
                            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[#0c3d0c] p-6 text-white shadow-xl shadow-primary/20 sm:p-8 lg:p-10 lg:shadow-2xl lg:shadow-primary/25">
                                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10" />
                                <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/5" />
                                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent sm:text-xs sm:tracking-[0.25em]">
                                    Jelajahi
                                </p>
                                <p className="mt-2 text-xl font-bold leading-snug sm:mt-3 sm:text-2xl md:text-[28px]">
                                    “Surga tersembunyi di jantung Jawa Tengah.”
                                </p>
                                <div className="mt-6 grid grid-cols-3 gap-3 sm:mt-8 sm:gap-4">
                                    <div>
                                        <p className="text-2xl font-bold text-accent sm:text-3xl">
                                            {props.hamlets?.length ?? 0}
                                        </p>
                                        <p className="mt-1 text-[11px] leading-tight text-white/70 sm:text-xs">
                                            Dusun Wisata
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-accent sm:text-3xl">
                                            {props.destinations?.length ?? 0}
                                        </p>
                                        <p className="mt-1 text-[11px] leading-tight text-white/70 sm:text-xs">
                                            Destinasi Pilihan
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-accent sm:text-3xl">
                                            100%
                                        </p>
                                        <p className="mt-1 text-[11px] leading-tight text-white/70 sm:text-xs">
                                            Keramahan Warga
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dusun */}
                    <div
                        id="dusun"
                        className="flex w-full scroll-mt-20 flex-col items-center gap-6 sm:scroll-mt-24 sm:gap-10"
                    >
                        <SectionHeading
                            kicker="Eksplorasi"
                            title="Jelajahi Dusun Kami"
                            subtitle="Geser untuk menjelajahi setiap dusun dengan karakter dan pesonanya masing-masing."
                        />
                        <div className="w-screen self-start ml-[calc(50%-50vw)]">
                            <Dusun hamlets={props.hamlets ?? []} />
                        </div>
                    </div>

                    {/* Destinasi */}
                    <div className="flex w-full flex-col items-center gap-6 sm:gap-10">
                        <SectionHeading
                            kicker="Wisata"
                            title="Destinasi Pilihan"
                            subtitle="Temukan lokasi destinasi favorit Anda pada peta, lalu jelajahi keindahannya."
                        />
                        <div className="w-full">
                            <Destinasi destinations={props.destinations ?? []} />
                        </div>
                    </div>

                    <Divider />

                    {/* Video */}
                    <div className="flex w-full flex-col items-center gap-6 sm:gap-10">
                        <SectionHeading
                            kicker="Multimedia"
                            title="Video Desa Tajuk"
                            subtitle="Simak suasana dan aktivitas Desa Tajuk lewat video berikut."
                        />
                        <div className="w-full">
                            <VideoCarousel videos={props.videos ?? []} />
                        </div>
                    </div>

                    <PromoBanner />

                    <Divider />

                    {/* Berita */}
                    <div className="flex w-full flex-col items-center gap-6 sm:gap-10">
                        <SectionHeading
                            kicker="Informasi"
                            title="Berita Terbaru"
                            subtitle="Ikuti kabar terbaru seputar Desa Wisata Tajuk."
                        />
                        <Article />
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}

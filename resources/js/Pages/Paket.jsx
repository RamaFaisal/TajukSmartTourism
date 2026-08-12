import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Carousel from "@/Components/Carousel";
import Footer from "@/Components/Footer";
import Destinasi from "@/Components/Destinasi";
import { FaWhatsapp } from "react-icons/fa";
import { MdCheck, MdOutlineSchedule } from "react-icons/md";

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

const driveSrcSet = (image) => {
    if (!image || !image.includes("drive.google.com/thumbnail")) {
        return undefined;
    }

    const base = image.replace(/[?&]sz=w\d+/, "");

    return [800, 1200, 2000]
        .map((width) => `${base}&sz=w${width} ${width}w`)
        .join(", ");
};

const PackageCard = ({ pkg, bookLink }) => (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-primary/5 ring-1 ring-black/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/15">
        <div className="relative aspect-[16/10] overflow-hidden bg-surface">
            {pkg.image ? (
                <img
                    src={pkg.image}
                    srcSet={driveSrcSet(pkg.image)}
                    sizes="(min-width: 1152px) 341px, (min-width: 1024px) calc((100vw - 8rem) / 3), (min-width: 640px) calc((100vw - 5rem) / 2), calc(100vw - 2rem)"
                    alt={pkg.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center px-4">
                    <span className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary/50">
                        Desa Wisata Tajuk
                    </span>
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            {pkg.duration && (
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-primary shadow-md backdrop-blur sm:text-xs">
                    <MdOutlineSchedule size={14} />
                    {pkg.duration}
                </span>
            )}
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
            <h3 className="text-lg font-bold text-primary sm:text-xl">
                {pkg.title}
            </h3>
            {pkg.description && (
                <p className="mt-2 text-[13px] leading-relaxed text-gray-500 sm:text-sm">
                    {pkg.description}
                </p>
            )}

            <div
                className={`mt-4 flex items-end gap-3 border-t border-dashed border-gray-200 pt-4 ${
                    pkg.perks?.length > 0 ? "" : "mb-6"
                }`}
            >
                <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                        Harga
                    </p>
                    <p className="mt-0.5 text-xl font-bold text-primary sm:text-2xl">
                        {pkg.price}
                    </p>
                </div>
                {pkg.price && (
                    <span className="pb-1 text-xs font-medium text-gray-400">
                        /orang
                    </span>
                )}
            </div>

            {pkg.perks?.length > 0 && (
                <div className="mt-5 mb-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                        Fasilitas
                    </p>
                    <ul className="mt-3 space-y-2.5">
                        {pkg.perks.map((perk, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-2.5 text-[13px] leading-snug text-gray-600 sm:text-sm"
                            >
                                <span
                                    aria-hidden="true"
                                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-primary"
                                >
                                    <MdCheck size={12} />
                                </span>
                                {perk}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <a
                href={bookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/25 transition duration-200 hover:bg-[#1ebe5b] hover:shadow-lg"
            >
                <FaWhatsapp aria-hidden="true" size={18} />
                Pesan via WhatsApp
            </a>
        </div>
    </article>
);

export default function Paket(props) {
    const packages = props.packages ?? [];
    const whatsapp = props.whatsapp;

    const bookLink = (pkg) =>
        `https://wa.me/${whatsapp}?text=${encodeURIComponent(
            `Halo, apakah paket ${pkg.title} masih tersedia? Saya ingin memesan.`
        )}`;

    const helpLink = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
        "Halo, saya ingin bertanya tentang paket wisata Desa Tajuk."
    )}`;

    return (
        <>
            <Head title={props.title} />
            <Navbar />

            {/* Hero */}
            <div className="relative h-[460px] w-full overflow-hidden sm:h-[540px] md:h-[620px] lg:h-[710px]">
                <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-5 text-center text-white sm:px-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80 sm:text-sm sm:tracking-[0.3em] md:text-base">
                        Paket Wisata
                    </p>
                    <h1 className="mt-2 max-w-4xl text-[28px] font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]">
                        Pengalaman Berkesan Telah Menunggu Anda
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed sm:mt-4 sm:text-base md:text-lg lg:text-2xl [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">
                        Pilih paket Live In yang paling sesuai dengan rombongan
                        Anda dan rasakan keramahan warga Desa Tajuk.
                    </p>
                    <a
                        href="#paket"
                        className="pointer-events-auto mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition duration-200 hover:scale-105 hover:bg-accent sm:mt-8 md:text-base"
                    >
                        Lihat Paket
                    </a>
                </div>
                <Carousel />
            </div>

            <div className="relative isolate w-full rounded-t-[20px] bg-white lg:rounded-t-[50px]">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-14 px-4 pb-14 text-sm sm:gap-20 sm:px-6 sm:pb-20 lg:gap-28 lg:px-8 lg:pb-28 lg:text-base">
                    {/* Paket */}
                    <div
                        id="paket"
                        className="flex w-full scroll-mt-20 flex-col items-center gap-8 pt-10 sm:scroll-mt-24 sm:gap-10 md:pt-16"
                    >
                        <SectionHeading
                            kicker="Pilihan Kami"
                            title="Paket Wisata Live In"
                            subtitle="Tinggal bersama warga, ikuti keseharian mereka, dan rasakan kehangatan desa — semua sudah termasuk dalam satu paket."
                        />

                        {packages.length === 0 ? (
                            <div className="w-full rounded-3xl border border-dashed border-gray-300 bg-surface/40 px-6 py-16 text-center">
                                <p className="text-lg font-semibold text-primary">
                                    Paket segera hadir
                                </p>
                                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-gray-500">
                                    Saat ini belum ada paket yang ditampilkan.
                                    Hubungi kami untuk informasi lebih lanjut.
                                </p>
                                <a
                                    href={helpLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-[#1ebe5b]"
                                >
                                    <FaWhatsapp aria-hidden="true" size={18} />
                                    Hubungi Kami
                                </a>
                            </div>
                        ) : (
                            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                                {packages.map((pkg) => (
                                    <PackageCard
                                        key={pkg.id}
                                        pkg={pkg}
                                        bookLink={bookLink(pkg)}
                                    />
                                ))}
                            </div>
                        )}

                        <p className="text-center text-xs leading-relaxed text-gray-400 sm:text-sm">
                            Harga dapat disesuaikan untuk rombongan dalam jumlah
                            besar. Silakan hubungi kami untuk penawaran khusus.
                        </p>
                    </div>

                    <Divider />

                    {/* Bantuan WhatsApp */}
                    <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[#0c3d0c] px-6 py-10 text-center text-white shadow-xl shadow-primary/20 sm:px-10 sm:py-14">
                        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10" />
                        <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/5" />
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent sm:text-xs sm:tracking-[0.25em]">
                            Butuh Bantuan?
                        </p>
                        <h3 className="mx-auto mt-2 max-w-xl text-xl font-bold leading-snug sm:mt-3 sm:text-2xl md:text-3xl">
                            Ada yang Ingin Ditanyakan?
                        </h3>
                        <p className="mx-auto mt-3 max-w-lg text-xs leading-relaxed text-white/75 sm:text-sm md:text-base">
                            Tim kami siap membantu Anda memilih paket yang paling
                            sesuai dengan kebutuhan rombongan.
                        </p>
                        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                            <a
                                href={helpLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition duration-200 hover:scale-105 hover:bg-accent md:text-base"
                            >
                                <FaWhatsapp aria-hidden="true" size={18} />
                                Konsultasi via WhatsApp
                            </a>
                            <span className="text-xs font-medium text-white/60 sm:text-sm">
                                Nomor WhatsApp: +{whatsapp}
                            </span>
                        </div>
                    </div>

                    <Divider />

                    {/* Destinasi */}
                    <div className="flex w-full flex-col items-center gap-6 sm:gap-10">
                        <SectionHeading
                            kicker="Wisata"
                            title="Destinasi Pilihan"
                            subtitle="Lengkapi kunjungan Anda dengan menjelajahi destinasi alam sekitar Desa Tajuk."
                        />
                        <div className="w-full">
                            <Destinasi destinations={props.destinations ?? []} />
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}

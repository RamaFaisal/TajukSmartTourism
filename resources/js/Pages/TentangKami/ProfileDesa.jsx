import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";
import { Head } from "@inertiajs/react";
import VideoCarousel from "@/Components/VideoCarousel";

export default function ProfileDesa(props) {
    return (
        <>
            <Head title={props.title} />
            <Navbar />

            <div className="relative w-full h-[300px] md:h-[600px] overflow-hidden">
                <img
                    className="fixed w-full h-[600px] md:h-full lg:h-[730px] object-cover top-0 left-0 z-0"
                    src="https://drive.google.com/thumbnail?id=17S_quDNkAiFvw9p6hqyaY-gaFrfdApM8&sz=w2000"
                    alt="Profile Desa"
                />
            </div>

            <div className="relative w-full bg-white text-lg lg:text-xl flex flex-col justify-start items-center gap-16 sm:gap-24 md:gap-24 lg:gap-28 object-cover text-black rounded-t-[20px] rounded-t-[50px]">
                <div className="container mx-auto mt-10 pt-10 lg:w-[1280px] px-5 md:px-8 lg:px-16 pt-10 text-center z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif">
                        Profile Desa Tajuk
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-12 font-sans">
                        Selamat datang di Menu Informasi kami. Di sini, Anda
                        dapat menemukan berbagai informasi penting yang
                        berkaitan dengan layanan kami, kebijakan, dan hal-hal
                        terkait lainnya. Kami siap membantu menjawab pertanyaan
                        Anda dan memberikan panduan yang diperlukan.
                    </p>
                </div>

                <div className="w-full md:w-[800px] lg:w-[1400px] rounded-lg z-10 relative px-5">
                    <VideoCarousel />
                </div>

                <div className="w-full lg:w-[1160px] h-auto text-justify text-base md:text-lg lg:text-xl lg:mt-2 px-5 z-10">
                    <p>
                        Desa Tajuk adalah sebuah destinasi wisata yang
                        menggabungkan keindahan alam dengan kekayaan budaya yang
                        khas. Terletak di tengah-tengah pegunungan yang hijau
                        dan dikelilingi oleh panorama yang memukau, Desa Tajuk
                        menawarkan pengalaman wisata yang tak terlupakan bagi
                        setiap pengunjung.
                    </p>
                    <p className="mt-4">
                        Desa Tajuk dikenal karena keunikan budayanya yang masih
                        kental terjaga, mulai dari tarian tradisional hingga
                        kerajinan tangan yang indah. Dalam setiap sudut desa,
                        Anda dapat menemukan cerita dan kekayaan budaya yang
                        melekat pada masyarakatnya.
                    </p>
                </div>

                <div className="lg:w-[1120px] w-[380px] h-auto relative mt-2 p-3 bg-white bg-opacity-50 border border-black z-10 rounded-lg">
                    <div className="text-justify px-2">
                        <h2 className="text-black text-xl md:text-2xl lg:text-3xl font-serif">
                            Visi:
                        </h2>
                        <p className="text-black text-base md:text-lg lg:text-xl mt-2 font-sans">
                            "Menjadi destinasi wisata unggulan yang
                            menggabungkan keindahan alam dengan kekayaan budaya,
                            memberikan pengalaman wisata yang berkesan dan
                            memberdayakan masyarakat lokal."
                        </p>
                        <h2 className="text-black text-xl md:text-2xl lg:text-3xl mt-4 font-serif">
                            Misi:
                        </h2>
                        <ul className="text-black text-base md:text-lg lg:text-xl list-disc ml-5 font-sans">
                            <li>
                                Mempromosikan keindahan alam Desa Tajuk sebagai
                                daya tarik utama destinasi wisata.
                            </li>
                            <li>
                                Melestarikan dan mengembangkan kekayaan budaya
                                Desa Tajuk melalui program pendidikan dan
                                kegiatan budaya.
                            </li>
                            <li>
                                Memberikan pengalaman wisata yang berkesan dan
                                bermakna bagi pengunjung dengan menjaga keaslian
                                dan kualitas layanan.
                            </li>
                            <li>
                                Mengembangkan infrastruktur wisata yang ramah
                                lingkungan dan berkelanjutan.
                            </li>
                            <li>
                                Mendorong partisipasi dan kesejahteraan
                                masyarakat lokal melalui pemberdayaan ekonomi
                                dan sosial.
                            </li>
                        </ul>
                    </div>
                </div>

                <img
                    className="w-[370px] h-56 lg:w-[1127px] lg:h-[500px] z-10"
                    src="https://drive.google.com/thumbnail?id=1ULlvhv57GV9uHrJeKTEL06R6zahCKmQ5&sz=w2000"
                    alt="Gambar Profile Desa"
                />

                <div className="w-full lg:w-[1160px] h-auto text-justify text-base md:text-lg lg:text-xl mt-2 px-5 z-10">
                    <h1 className="text-4xl font-bold text-center pb-10 font-serif">
                        Potensi Desa
                    </h1>
                    <p className="font-sans">
                        Potensi terbesar Desa Tajuk terdapat di bidang pertanian
                        dan peternakan. Bidang pertanian meliputi produksi sayur
                        mayur (brokoli, kubis, kol, terong belanda dan labu
                        siam) dan tembakau. Bidang peternakan meliputi sapi
                        perah, sapi potong, kambing dan domba. Hasil produksi
                        sebagian digunakan untuk memenuhui kebutuhan masyarakat
                        dan sisanya dijual ke luar daerah. Terdapat 14 KTT
                        (Kelompok Tani Ternak) yang tersebar di setiap dusun di
                        Desa Tajuk. 2 di antaranya adalah Kelompok Krida Tani
                        (untuk pemuda pemudi desa) dan Kelompok Tani Ternak
                        Wanita.
                    </p>
                </div>

                <Footer />
            </div>
        </>
    );
}

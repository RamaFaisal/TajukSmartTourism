import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Carousel from "@/Components/Carousel";
import React from "react";
import { Head } from "@inertiajs/react";

export default function Produk(props) {
    return (
        <>
            <Head title={props.title} />
            <Navbar />

            <div className="relative w-full h-[300px] sm:h-[300px] md:h-[500px] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center text-white font-serif">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Produk Desa Wisata Tajuk
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl">
                            -------
                        </p>
                    </div>
                </div>
                <Carousel />
            </div>

            <div className="relative w-full bg-white text-lg md:text-xl flex flex-col justify-start items-center gap-16 sm:gap-24 md:gap-24 lg:gap-28 object-cover rounded-t-[20px] lg:rounded-t-[150px] text-black">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center pt-20">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        Berbagai Produk Desa Tajuk
                    </h1>
                    <p className="mt-4 text-base md:text-lg lg:text-xl font-normal">
                        Selamat datang di Menu Informasi kami. Di sini, Anda
                        dapat menemukan berbagai informasi penting yang
                        berkaitan dengan layanan kami, kebijakan, dan hal-hal
                        terkait lainnya. Kami siap membantu menjawab pertanyaan
                        Anda dan memberikan panduan yang diperlukan.
                    </p>
                </div>

                <div className="w-full max-w-7xl mx-auto px-4">
                    {/* Header */}
                    <div className="flex justify-center my-8">
                        <div className="text-center">
                            <h1 className="text-2xl lg:text-6xl font-bold">
                                Produk Wisata
                            </h1>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="bg-transparent p-8 rounded">
                        {/* Main Image and Description */}
                        <div className="mb-8">
                            <div className="flex w-full h-36 lg:h-64 rounded mb-4 overflow-hidden gap-5 justify-center">
                                <img
                                    src="https://via.placeholder.com/600x400"
                                    alt="Gambar Utama"
                                    className="w-full h-36 lg:h-64 object-cover"
                                />
                            </div>
                            <div className="text-center">
                                <p>
                                    Deskripsi utama produk atau informasi
                                    terkait.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Images and Descriptions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-4 rounded">
                                <div className="w-full h-40 bg-red-600 rounded mb-4 overflow-hidden">
                                    <img
                                        src="https://via.placeholder.com/300x200"
                                        alt="Gambar Tambahan 1"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <p>
                                        Deskripsi tambahan produk atau informasi
                                        terkait.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded">
                                <div className="w-full h-40 bg-red-600 rounded mb-4 overflow-hidden">
                                    <img
                                        src="https://via.placeholder.com/300x200"
                                        alt="Gambar Tambahan 2"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <p>
                                        Deskripsi tambahan produk atau informasi
                                        terkait.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded">
                                <div className="w-full h-40 bg-red-600 rounded mb-4 overflow-hidden">
                                    <img
                                        src="https://via.placeholder.com/300x200"
                                        alt="Gambar Tambahan 3"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <p>
                                        Deskripsi tambahan produk atau informasi
                                        terkait.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded">
                                <div className="w-full h-40 bg-red-600 rounded mb-4 overflow-hidden">
                                    <img
                                        src="https://via.placeholder.com/300x200"
                                        alt="Gambar Tambahan 4"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <p>
                                        Deskripsi tambahan produk atau informasi
                                        terkait.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Header Produk Olahan */}
                    <div className="flex justify-center my-10">
                        <div className="text-center">
                            <h1 className="text-2xl lg:text-6xl font-bold">
                                Produk Olahan
                            </h1>
                        </div>
                    </div>

                    {/* Main Content Produk Olahan */}
                    <div className="p-8 rounded mt-10">
                        {/* Main Image and Description */}
                        <div className="mb-8">
                            <div className="flex w-full h-36 lg:h-64 rounded mb-4 overflow-hidden gap-5 justify-center">
                                <img
                                    src="https://via.placeholder.com/600x400"
                                    alt="Gambar Utama"
                                    className="w-full h-36 lg:h-64 object-cover"
                                />
                            </div>
                            <div className="text-center">
                                <p>
                                    Deskripsi utama produk atau informasi
                                    terkait.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Images and Descriptions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-4 rounded">
                                <div className="w-full h-40 bg-red-600 rounded mb-4 overflow-hidden">
                                    <img
                                        src="https://via.placeholder.com/300x200"
                                        alt="Gambar Tambahan 1"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <p>
                                        Deskripsi tambahan produk atau informasi
                                        terkait.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded">
                                <div className="w-full h-40 bg-red-600 rounded mb-4 overflow-hidden">
                                    <img
                                        src="https://via.placeholder.com/300x200"
                                        alt="Gambar Tambahan 2"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <p>
                                        Deskripsi tambahan produk atau informasi
                                        terkait.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded">
                                <div className="w-full h-40 bg-red-600 rounded mb-4 overflow-hidden">
                                    <img
                                        src="https://via.placeholder.com/300x200"
                                        alt="Gambar Tambahan 3"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <p>
                                        Deskripsi tambahan produk atau informasi
                                        terkait.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded">
                                <div className="w-full h-40 bg-red-600 rounded mb-4 overflow-hidden">
                                    <img
                                        src="https://via.placeholder.com/300x200"
                                        alt="Gambar Tambahan 4"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <p>
                                        Deskripsi tambahan produk atau informasi
                                        terkait.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

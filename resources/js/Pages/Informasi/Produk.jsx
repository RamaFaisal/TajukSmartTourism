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
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Produk Desa Wisata Tajuk
                        </h1>
                    </div>
                </div>
                <Carousel />
            </div>

            <div className="relative w-full bg-white text-lg md:text-xl flex flex-col justify-start items-center gap-16 sm:gap-24 md:gap-24 lg:gap-28 object-cover rounded-t-[20px] lg:rounded-t-[50px] text-black">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center pt-20">
                    <p className="text-black font-sans text-xl md:text-4xl pt-10 lg:pt-10">
                        Selamat datang di Menu Produk kami. Di sini, Anda dapat
                        melihat berbagai produk yang ada di Desa kami.
                    </p>
                </div>

                <div className="w-full max-w-7xl mx-auto px-4">
                    {/* Main Content Produk Olahan */}
                    <div className="p-8 rounded ">
                        {/* Main Image and Description */}
                        <div className="mb-8">
                            <div className="flex w-full h-36 lg:h-64 rounded mb-4 overflow-hidden gap-5 justify-center">
                                <img
                                    src="https://drive.google.com/thumbnail?id=1tTJG7FhbMLdITzWCuH0DAZ_kAaAPmdmK&sz=w2000"
                                    alt="Bermacam Produk Olahan Desa Tajuk"
                                    className="w-full h-36 lg:h-64 object-cover"
                                />
                            </div>
                        </div>

                        {/* Bottom Images and Descriptions */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="p-4 rounded">
                                <a
                                    href="https://www.instagram.com/damalung_kopi/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="w-full h-32 md:h-44 rounded mb-4 overflow-hidden">
                                        <img
                                            src="https://drive.google.com/thumbnail?id=1IQVcUtU6T7AgX-B56ZNtH6a1Sb4FGEyj&sz=w2000"
                                            https:alt="Kopi Damalung"
                                            className="w-full h-44 md:h-56 object-cover"
                                        />
                                    </div>
                                    <div className="text-center text-lg">
                                        <p>Kopi Damalung</p>
                                    </div>
                                </a>
                            </div>

                            <div className="p-4 rounded">
                                <a
                                    href="https://shopee.co.id/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="w-full h-32 md:h-44 rounded mb-4 overflow-hidden">
                                        <img
                                            src="https://drive.google.com/thumbnail?id=1U5N5XTRC6TUo6PSK_5rN7zVNVFyyMxvi&sz=w2000"
                                            https:alt="Teh dan Kripik"
                                            className="w-full h-44 object-cover"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <p>Teh dan Kripik</p>
                                    </div>
                                </a>
                            </div>

                            <div className="p-4 rounded">
                                <a
                                    href="https://shopee.co.id/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="w-full h-32 md:h-44 rounded mb-4 overflow-hidden">
                                        <img
                                            src="https://drive.google.com/thumbnail?id=1wyLZ2boUq5HQZKbt_ySoR3mXNp0cJ0kc&sz=w2000"
                                            https:alt="Ampyang Coklat"
                                            className="w-full h-44 object-cover"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <p>Ampyang Coklat</p>
                                    </div>
                                </a>
                            </div>

                            <div className="p-4 rounded">
                                <a
                                    href="https://shopee.co.id/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="w-full h-32 md:h-44 rounded mb-4 overflow-hidden">
                                        <img
                                            src="https://drive.google.com/thumbnail?id=1wY4hrXrnjdRGvShJBCy7tYIegQJfvN-9&sz=w2000"
                                            alt="Youghrt"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <p>Youghrt</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <div className="flex justify-center my-8">
                        <div className="text-center">
                            <h1 className="text-2xl lg:text-6xl font-bold">
                                Produk Wisata
                            </h1>
                        </div>
                    </div>
                    <div className="bg-transparent p-8 rounded">
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
                    </div> */}
                </div>
                <Footer />
            </div>
        </>
    );
}

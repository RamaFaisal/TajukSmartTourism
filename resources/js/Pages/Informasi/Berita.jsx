import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Carousel from "@/Components/Carousel";
import { Head, Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

export default function Gallery(props) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Function to fetch articles from the API
        const fetchArticles = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/articles");
                const data = await response.json();
                setArticles(data.data);
            } catch (error) {
                console.error("Failed to fetch articles:", error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <>
            <Head title={props.title} />
            <Navbar />

            <div className="relative w-full h-[300px] sm:h-[300px] md:h-[500px] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center text-white font-serif">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Berita di Desa Wisata Tajuk
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl">
                            Nikmati keindahan alam dan budaya lokal yang
                            mempesona
                        </p>
                    </div>
                </div>
                <Carousel />
            </div>
            
            <div className="relative w-full bg-white text-xs lg:text-base flex flex-col justify-start items-center gap-16 sm:gap-24 md:gap-24 lg:gap-28 object-cover rounded-t-[20px] lg:rounded-t-[150px]">
                <div className="w-full max-w-[1127px] text-center px-4 md:px-8">
                    <p className="text-black font-sans text-xl md:text-2xl pt-10 lg:pt-32">
                        Selamat datang di menu berita kami. Di sini, Anda dapat
                        menemukan berbagai berita terbaru mengenai desa Tajuk.
                    </p>
                </div>
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {articles.map((article) => (
                            <div
                                key={article.id}
                                className="bg-white shadow-md rounded-lg overflow-hidden"
                            >
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-bold mb-2">
                                        {article.title}
                                    </h2>
                                    <p className="text-gray-600 mb-2">
                                        {new Date(
                                            article.created_at
                                        ).toLocaleDateString()}
                                    </p>
                                    <div
                                        className="text-gray-600 mb-4"
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                article.content.substring(
                                                    0,
                                                    100
                                                ) + "...",
                                        }}
                                    />
                                    <Link
                                        href={`/Informasi/Berita/${article.id}`}
                                        className="text-blue-500 hover:underline"
                                    >
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

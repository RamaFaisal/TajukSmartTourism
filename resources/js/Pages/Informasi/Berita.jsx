import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Carousel from "@/Components/Carousel";
import { Head } from "@inertiajs/react";
import { truncateText } from "@/lib/text";
import React, { useState, useEffect } from "react";

const PAGE_SIZE = 3;

export default function Berita(props) {
    const [articles, setArticles] = useState([]);
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

    useEffect(() => {
        // Function to fetch articles from the API
        const fetchArticles = async () => {
            try {
                const response = await fetch(
                    "/api/articles"
                );
                const data = await response.json();

                // Sort articles by created_at date in descending order
                const sortedArticles = data.data.sort(
                    (a, b) => new Date(b.created_at) - new Date(a.created_at)
                );

                setArticles(sortedArticles);
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
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Berita Desa Wisata Tajuk
                        </h1>
                    </div>
                </div>
                <Carousel />
            </div>

            <div className="relative w-full bg-white text-xs lg:text-base flex flex-col justify-start items-center gap-16 sm:gap-24 md:gap-24 lg:gap-28 object-cover rounded-t-[20px] lg:rounded-t-[50px]">
                <div className="w-full max-w-6xl text-center px-4 md:px-8">
                    <p className="text-black font-sans text-sm lg:text-3xl pt-10 lg:pt-32">
                        Selamat datang di menu berita kami. Di sini, Anda dapat
                        menemukan berbagai berita terbaru mengenai desa Tajuk.
                    </p>
                </div>
                <div className="container max-w-6xl mx-auto p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-4">
                        {articles.slice(0, visibleCount).map((article) => (
                            <div
                                key={article.id}
                                className="bg-white shadow-md rounded-lg overflow-hidden"
                            >
                                <a href={`/Informasi/Berita/${article.id}`}>
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-48 object-cover"
                                    />
                                </a>
                                <div className="p-4">
                                    <a href={`/Informasi/Berita/${article.id}`}>
                                        <h2 className="text-base lg:text-2xl text-black font-bold mb-2">
                                            {article.title}
                                        </h2>
                                    </a>
                                    <p className="text-gray-600 mb-2">
                                        {new Date(
                                            article.created_at
                                        ).toLocaleDateString()}
                                    </p>
                                    <p className="mb-4 text-sm leading-relaxed text-gray-600 lg:text-base">
                                        {truncateText(article.content)}
                                    </p>
                                    <a
                                        href={`/Informasi/Berita/${article.id}`}
                                        className="font-semibold text-primary hover:underline"
                                    >
                                        Baca selengkapnya
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    {visibleCount < articles.length && (
                        <div className="flex justify-center mt-10">
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
                <Footer />
            </div>
        </>
    );
}

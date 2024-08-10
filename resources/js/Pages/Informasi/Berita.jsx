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

            <div className="relative w-full h-[490px] sm:h-[500px] md:h-[600px] lg:h-[710px] overflow-hidden">
                <Carousel />
            </div>
            <div className="relative w-full bg-bgTajuk text-xs lg:text-base flex flex-col justify-start items-center gap-16 sm:gap-24 md:gap-24 lg:gap-28 object-cover rounded-t-[20px] lg:rounded-t-[50px]">
                <div className="w-full max-w-[1127px] text-center px-4 md:px-8">
                    <h1 className="text-black font-serif text-3xl md:text-4xl lg:text-[55px] font-bold pt-10 lg:pt-32">
                        Berita Terbaru dari Desa Tajuk
                    </h1>
                    <p className="text-black font-sans text-base md:text-lg lg:text-[25px] pt-8">
                        Selamat datang di menu berita kami. Di sini, Anda dapat menemukan berbagai berita terbaru mengenai desa Tajuk.
                    </p>
                </div>
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {articles.map(article => (
                            <div key={article.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                                    <p className="text-gray-600 mb-2">{new Date(article.created_at).toLocaleDateString()}</p>
                                    <p className="text-gray-600 mb-4">{article.content.substring(0, 100)}...</p>
                                    <Link href={`/Informasi/Berita/${article.id}`} className="text-blue-500 hover:underline">Read more</Link>
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

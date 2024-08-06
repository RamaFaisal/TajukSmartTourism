import React, { useState } from "react";

export default function Article() {
    const [currentArticle, setCurrentArticle] = useState(0);

    const articles = [
        {
            image: "/imgDungKluruk/Tulisan.jpg",
            title: "Artikel Tajuk",
            text: "Dari pesisir pantai yang memikat hingga pegunungan yang megah, Pulau Jawa menawarkan pesona alam yang tak terlupakan. Air terjun yang menawan, danau yang tenang, dan kebun-kebun hijau yang subur menjadi saksi bisu keajaiban alamnya.",
        },
        {
            image: "/mnt/data/image.png",
            title: "Artikel Smart",
            text: "Dari pesisir pantai yang memikat hingga pegunungan yang megah, Pulau Jawa menawarkan pesona alam yang tak terlupakan. Air terjun yang menawan, danau yang tenang, dan kebun-kebun hijau yang subur menjadi saksi bisu keajaiban alamnya.",
        },
        {
            image: "/mnt/data/image.png",
            title: "Artikel Tourism",
            text: "Dari pesisir pantai yang memikat hingga pegunungan yang megah, Pulau Jawa menawarkan pesona alam yang tak terlupakan. Air terjun yang menawan, danau yang tenang, dan kebun-kebun hijau yang subur menjadi saksi bisu keajaiban alamnya.",
        },
    ];

    const nextArticle = () => {
        setCurrentArticle((prev) => (prev + 1) % articles.length);
    };

    const prevArticle = () => {
        setCurrentArticle(
            (prev) => (prev - 1 + articles.length) % articles.length
        );
    };

    return (
        <div className="w-full h-full bg-transparent flex items-center justify-center p-4 lg:p-0 py-8">
            <div className="relative bg-white p-6 border border-gray-300 rounded-md shadow-md max-w-6xl w-full lg:w-[1090px] lg:h-[335px]">
                <div className="absolute top-4 right-4 flex space-x-2">
                    <button
                        onClick={prevArticle}
                        className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
                    >
                        &#8592;
                    </button>
                    <button
                        onClick={nextArticle}
                        className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
                    >
                        &#8594;
                    </button>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
                        <div className="text-red-600 text-lg font-bold underline cursor-pointer mb-4">
                            Lihat Semua
                        </div>
                        <p className="text-black lg:text-xl text-base">
                            {articles[currentArticle].text}
                        </p>
                        <div className="mt-4 text-black text-sm">
                            {articles[currentArticle].title}
                        </div>
                        <div className="mt-4 border-t border-gray-400 pt-2">
                            <div className="text-black text-lg font-bold cursor-pointer flex items-center">
                                Baca Selengkapnya
                                <span className="ml-2">&#8594;</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            className="w-full h-auto rounded-md"
                            src={articles[currentArticle].image}
                            alt="Article"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

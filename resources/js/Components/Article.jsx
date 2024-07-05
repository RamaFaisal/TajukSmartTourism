import React, { useState } from "react";

export default function Article() {
    const [currentArticle, setCurrentArticle] = useState(0);

    const articles = [
        {
            title: "Artikel Tajuk",
            text: "Dari pesisir pantai yang memikat hingga pegunungan yang megah, Pulau Jawa menawarkan pesona alam yang tak terlupakan. Air terjun yang menawan, danau yang tenang, dan kebun-kebun hijau yang subur menjadi saksi bisu keajaiban alamnya.",
        },
        // Tambahkan lebih banyak artikel jika diperlukan
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
        <div className="w-full h-full bg-color1 flex items-center justify-center py-8">
            <div className="relative bg-color2 p-6 border border-gray-300 rounded-md shadow-md max-w-4xl w-full">
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
                            Lihat semua
                        </div>
                        <p className="text-black text-base">
                            {articles[currentArticle].text}
                        </p>
                        <div className="mt-4 text-white text-sm">
                            {articles[currentArticle].title}
                        </div>
                        <div className="mt-4 border-t border-gray-400 pt-2">
                            <div className="text-white text-lg font-bold cursor-pointer flex items-center">
                                Baca Selengkapnya
                                <span className="ml-2">&#8594;</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            className="w-full h-auto rounded-md"
                            src="https://via.placeholder.com/384x422"
                            alt="Article"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

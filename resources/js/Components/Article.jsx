import React, { useState, useEffect } from "react";

export default function Article() {
    const [articles, setArticles] = useState([]);
    const [currentArticle, setCurrentArticle] = useState(null);

    useEffect(() => {
        
        const fetchArticles = async () => {
            try {
                const response = await fetch(
                    "/api/articles"
                );
                const data = await response.json();
                setArticles(data.data);

                if (data.data.length > 0) {
                    const randomIndex = Math.floor(
                        Math.random() * data.data.length
                    );
                    setCurrentArticle(randomIndex);
                }
            } catch (error) {
                console.error("Failed to fetch articles:", error);
            }
        };

        fetchArticles();
    }, []);

    const nextArticle = () => {
        if (articles.length === 0) return;
        setCurrentArticle((prev) => (prev + 1) % articles.length);
    };

    const prevArticle = () => {
        if (articles.length === 0) return;
        setCurrentArticle(
            (prev) => (prev - 1 + articles.length) % articles.length
        );
    };

    if (articles.length === 0 || currentArticle === null) {
        return <div className="text-center">Memuat Berita...</div>; // Handle loading state
    }

    const article = articles[currentArticle]; // Use the current article

    // Properly substring the content without cutting off words
    const maxLength = 200;
    let content = article.content.substring(0, maxLength);

    let lastSpace = content.lastIndexOf(" ");
    if (lastSpace > 0) {
        content = content.substring(0, lastSpace);
    }

    content += "...";

    return (
        <div className="w-full h-full bg-transparent flex items-center justify-center p-4 lg:p-0 py-8">
            <div className="relative bg-white p-6 border border-gray-300 rounded-md shadow-md max-w-6xl w-full lg:w-[1090px] lg:h-[335px]">
                <div className="absolute top-4 right-4 md:top-7 md:right-7 flex space-x-2">
                    <button
                        onClick={prevArticle}
                        className="z-5 w-8 h-8 bg-green-600 hover:bg-green-800 shadow-4xl text-white rounded-full flex items-center justify-center"
                    >
                        &#8592;
                    </button>
                    <button
                        onClick={nextArticle}
                        className="z-1 w-8 h-8 bg-green-600 hover:bg-green-800 shadow-4xl text-white rounded-full flex items-center justify-center"
                    >
                        &#8594;
                    </button>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
                        <div className="bg-transparent rounded-lg overflow-hidden">
                            <div className="p-4">
                                <h2 className="text-lg md:text-xl text-black font-bold mb-2">
                                    {article.title}
                                </h2>
                                <p className="text-gray-200 mb-2">
                                    {new Date(
                                        article.created_at
                                    ).toLocaleDateString()}
                                </p>
                                <div
                                    className="text-black mb-4 text-md md:text-lg"
                                    dangerouslySetInnerHTML={{
                                        __html: content,
                                    }}
                                />
                                <a
                                    href={`/Informasi/Berita/${article.id}`}
                                    className="text-blue-500 hover:underline"
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            className="w-full md:max-h-72 rounded-md object-cover"
                            src={article.image}
                            alt="Article"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

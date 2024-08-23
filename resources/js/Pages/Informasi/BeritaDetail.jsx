import React, { useEffect, useState } from "react";
import { Head, usePage } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const BeritaDetail = ({ article }) => {
    return (
        <>
            <Head title={article.title} />
            <Navbar />
            <img
                src={article.image}
                alt={article.title}
                className="w-full h-[500px] object-cover"
            />
            <div className="container mx-auto px-20 mt-10">
                <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
                <p className="text-gray-600 mb-4">
                    By {article.author || "Admin"} |{" "}
                    {new Date(article.created_at).toLocaleDateString()}
                </p>
                <div
                    className="text-lg"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
            </div>
            <Footer />
        </>
    );
};

export default BeritaDetail;

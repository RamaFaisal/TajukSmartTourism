import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/NavbarBerita";
import Footer from "@/Components/Footer";

const BeritaDetail = ({ article }) => {
    return (
        <>
            <Head title={article.title} />
            <Navbar />
            <div className="container mx-auto p-4 mt-20">
                <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
                <p className="text-gray-600 mb-4">By {article.author || "Admin"} | {new Date(article.created_at).toLocaleDateString()}</p>
                <img src={article.image} alt={article.title} className="w-full h-full object-cover mb-4" />
                <div className="text-lg" dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
            <Footer />
        </>
    );
};

export default BeritaDetail;

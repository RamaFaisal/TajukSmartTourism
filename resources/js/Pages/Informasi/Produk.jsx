import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Carousel from "@/Components/Carousel";
import React from "react";
import { Head } from "@inertiajs/react";

const CATEGORY_LABELS = {
    olahan: "Produk Olahan",
    kerajinan: "Produk Kerajinan",
};

const ProductCard = ({ product }) => {
    const content = (
        <>
            <div className="w-full h-32 md:h-44 rounded mb-4 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-44 md:h-56 object-cover"
                />
            </div>
            <div className="text-center">
                <p className="text-lg">{product.name}</p>
                {product.description && (
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        {product.description}
                    </p>
                )}
            </div>
        </>
    );

    return product.link ? (
        <a href={product.link} target="_blank" rel="noopener noreferrer" className="p-4 rounded block">
            {content}
        </a>
    ) : (
        <div className="p-4 rounded">{content}</div>
    );
};

export default function Produk(props) {
    const products = props.products ?? [];

    const categories = Object.keys(CATEGORY_LABELS)
        .map((category) => ({
            category,
            label: CATEGORY_LABELS[category],
            items: products.filter((product) => product.category === category),
        }))
        .filter((group) => group.items.length > 0);

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
                    <div className="p-8 rounded">
                        <div className="mb-8">
                            <div className="flex w-full h-36 lg:h-64 rounded mb-4 overflow-hidden gap-5 justify-center">
                                <img
                                    src="https://drive.google.com/thumbnail?id=1tTJG7FhbMLdITzWCuH0DAZ_kAaAPmdmK&sz=w2000"
                                    alt="Bermacam Produk Olahan Desa Tajuk"
                                    className="w-full h-36 lg:h-64 object-cover"
                                />
                            </div>
                        </div>

                        {categories.length === 0 ? (
                            <p className="text-center text-gray-400 py-10">
                                Belum ada produk.
                            </p>
                        ) : (
                            categories.map((group) => (
                                <div key={group.category} className="mb-12">
                                    <h2 className="text-2xl font-bold text-center mb-8">
                                        {group.label}
                                    </h2>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                        {group.items.map((product, index) => (
                                            <ProductCard
                                                key={`${product.name}-${index}`}
                                                product={product}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

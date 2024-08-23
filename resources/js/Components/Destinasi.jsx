import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const destinations = [
    {
        title: "DungKluruk",
        lat: -7.396035596890162,
        lng: 110.45180818000935,
        image: "/imgDungKluruk/Tulisan.jpg",
        description:
            "Di tengah gemerlapnya Indonesia, Pulau Jawa berdiri kokoh sebagai pusat kekayaan budaya dan keindahan alam yang memikat.",
        link: "/Destinasi/DungKluruk",
    },
    {
        title: "Sokowolu",
        lat: -7.405295566315285,
        lng: 110.45791989350344,
        image: "https://i.pinimg.com/564x/96/ee/0c/96ee0c7260a3a6b9d0965c25d1ed82a6.jpg",
        description:
            "Kepulauan Raja Ampat yang menakjubkan dengan keindahan bawah lautnya.",
        link: "/Destinasi/Sokowolu",
    },
    {
        title: "Ngaduman",
        lat: -7.417724367829767,
        lng: 110.44035079535077,
        image: "https://i.pinimg.com/564x/60/a8/4d/60a84dfeb33be58cf208d52ea990e580.jpg",
        description:
            "Gunung Bromo yang megah dengan pemandangan matahari terbit yang spektakuler.",
        link: "/Destinasi/Ngaduman",
    },
    {
        title: "G-Pass",
        lat: -7.415801910724171,
        lng: 110.44408678000971,
        image: "https://i.pinimg.com/564x/60/a8/4d/60a84dfeb33be58cf208d52ea990e580.jpg",
        description:
            "Gunung Bromo yang megah dengan pemandangan matahari terbit yang spektakuler.",
        link: "/Destinasi/GPass",
    },
];

const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + "...";
};

const Destinasi = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
    const maxDescriptionLength = 100; // Panjang maksimal deskripsi yang diinginkan
    const intervalTime = 5000; // Interval untuk otomatis berpindah slide (dalam milidetik)

    const updateScreenSize = () => {
        setIsDesktop(window.innerWidth >= 1024);
    };

    useEffect(() => {
        updateScreenSize();
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    useEffect(() => {
        const interval = setInterval(nextSlide, intervalTime);
        return () => clearInterval(interval); // Membersihkan interval saat komponen dibongkar
    }, [currentSlide]);

    const resetInterval = () => {
        clearInterval(interval);
        setInterval(nextSlide, intervalTime);
    };

    // Membagi destinasi menjadi grup 1 atau 2 tergantung ukuran layar
    const itemsPerGroup = isDesktop ? 2 : 1;
    const groupedDestinations = [];
    for (let i = 0; i < destinations.length; i += itemsPerGroup) {
        groupedDestinations.push(destinations.slice(i, i + itemsPerGroup));
    }

    const nextSlide = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide + 1) % groupedDestinations.length
        );
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prevSlide) =>
                (prevSlide - 1 + groupedDestinations.length) %
                groupedDestinations.length
        );
    };

    return (
        <div className="w-full lg:w-full lg:h-auto rounded-xl mx-auto">
            {/* Peta Utama */}
            <div className="relative w-full h-96 mb-10 overflow-hidden z-0 px-3 lg:px-2">
                <MapContainer
                    center={[-7.405443964245397, 110.44818385903196]}
                    zoom={14}
                    style={{ height: "100%", width: "100%" }}
                    className="rounded-lg relative overflow-hidden"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {destinations.map((destination, index) => (
                        <Marker
                            key={index}
                            position={[destination.lat, destination.lng]}
                        >
                            <Popup>
                                <div>
                                    <h3>{destination.title}</h3>
                                    <p>
                                        {truncateDescription(
                                            destination.description,
                                            maxDescriptionLength
                                        )}
                                    </p>
                                    <Link
                                        href={destination.link}
                                        className="text-blue-500 hover:text-blue-700"
                                    >
                                        Lihat Detail
                                    </Link>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
            {/* Slide */}
            <div className="relative overflow-hidden w-full">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {groupedDestinations.map((group, groupIndex) => (
                        <div
                            key={groupIndex}
                            className="flex w-full"
                            style={{ minWidth: "100%" }}
                        >
                            {group.map((destination, i) => (
                                <div
                                    key={i}
                                    className={`w-full p-2 ${
                                        isDesktop ? "lg:w-1/2" : ""
                                    }`}
                                >
                                    <div className="bg-white w-auto justify-center items-center rounded-lg shadow-lg overflow-hidden">
                                        <img
                                            src={destination.image}
                                            alt={destination.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-4 text-center">
                                            <h3 className="text-lg font-semibold mb-2 font-serif">
                                                {destination.title}
                                            </h3>
                                            <p className="text-gray-700 text-sm font-sans">
                                                {truncateDescription(
                                                    destination.description,
                                                    maxDescriptionLength
                                                )}
                                            </p>
                                            <Link
                                                href={destination.link}
                                                className="text-blue-500 hover:text-blue-700 mt-2 block"
                                            >
                                                Lihat Detail
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                {/* Tombol Navigasi */}
                <button
                    onClick={() => {
                        prevSlide();
                        resetInterval();
                    }}
                    className="w-10 h-10 absolute top-1/2 transform -translate-y-1/2 left-0 bg-black bg-opacity-50 text-white p-2 rounded-xl"
                >
                    &lt;
                </button>
                <button
                    onClick={() => {
                        nextSlide();
                        resetInterval();
                    }}
                    className="w-10 h-10 absolute top-1/2 transform -translate-y-1/2 right-0 bg-black bg-opacity-50 text-white p-2 rounded-xl"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Destinasi;

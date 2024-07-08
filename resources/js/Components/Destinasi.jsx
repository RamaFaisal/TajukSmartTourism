import { Link } from "@inertiajs/react";
import React, { useState } from "react";

const destinations = [
    {
        title: "DungKluruk",
        image: "https://i.pinimg.com/564x/14/fd/c0/14fdc0b3ae2d83444c585324609070b8.jpg",
        description:
            "Di tengah gemerlapnya Indonesia, Pulau Jawa berdiri kokoh sebagai pusat kekayaan budaya dan keindahan alam yang memikat.bbbbbbbbbbbbbbbbbbbbbbbbbbb",
        link: "/DungKluruk"
    },
    {
        title: "Tiamo",
        image: "https://i.pinimg.com/564x/67/6e/39/676e398b18fc63c87cdb44ffcfde20c3.jpg",
        description:
            "Pulau Bali yang eksotis dengan pantainya yang indah dan budayanya yang kaya. bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    },
    {
        title: "G-Pass",
        image: "https://i.pinimg.com/564x/96/ee/0c/96ee0c7260a3a6b9d0965c25d1ed82a6.jpg",
        description:
            "Kepulauan Raja Ampat yang menakjubkan dengan keindahan bawah lautnya. bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    },
    {
        title: "Sokowolu",
        image: "https://i.pinimg.com/564x/60/a8/4d/60a84dfeb33be58cf208d52ea990e580.jpg",
        description:
            "Gunung Bromo yang megah dengan pemandangan matahari terbit yang spektakuler. bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    },
];

const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + "...";
};

const Destinasi = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxDescriptionLength = 150; // Set your desired max length

    const handleButtonClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="bg-color2 w-11/12 lg:max-h-screen max-h-full p-5 rounded-xl border-4 border-black mx-auto my-5">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 pb-5 lg:pb-0">
                    <img
                        src="https://i.pinimg.com/564x/87/66/00/87660081be9c389e8d309c881f1204aa.jpg"
                        alt="Hot Air Balloon"
                        className="rounded-lg w-full h-full"
                    />
                </div>
                <div className="md:w-1/2 p-4 flex flex-col bg-gray-800 text-white rounded-lg md:ml-4 gap-7">
                    <div>
                        <h4 className="text-5xl font-bold text-center">
                            {destinations[currentIndex].title}
                        </h4>
                        <img
                            src={destinations[currentIndex].image}
                            alt={destinations[currentIndex].title}
                            className="rounded-lg w-full max-h-96 mt-4"
                        />
                        <p
                            className="my-4 text-justify"
                            style={{ maxHeight: "4.5rem", overflow: "hidden" }}
                        >
                            {truncateDescription(
                                destinations[currentIndex].description,
                                maxDescriptionLength
                            )}
                        </p>
                        <Link
                            href={destinations[currentIndex].link}
                            className="mt-2 inline-block w-full text-center bg-white text-black font-semibold py-2 px-4 rounded border border-black hover:bg-black hover:text-white transition duration-300"
                        >
                            Lihat Detail
                        </Link>
                    </div>
                    <div className="flex justify-center mt-auto gap-4">
                        {destinations.map((_, index) => (
                            <button
                                key={index}
                                className={`btn btn-md flex items-center justify-center ${
                                    currentIndex === index
                                        ? "bg-black text-white"
                                        : "bg-white text-black"
                                }`}
                                style={{
                                    height: "10px",
                                    borderRadius: "10%",
                                    outline: "none",
                                }}
                                onClick={() => handleButtonClick(index)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destinasi;

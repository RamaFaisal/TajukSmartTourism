import React, { useState } from "react";

const destinations = [
    {
        title: "Jawa",
        description:
            "Di tengah gemerlapnya Indonesia, Pulau Jawa berdiri kokoh sebagai pusat kekayaan budaya dan keindahan alam yang memikat.",
    },
    {
        title: "Bali",
        description:
            "Pulau Bali yang eksotis dengan pantainya yang indah dan budayanya yang kaya.",
    },
    {
        title: "Raja Ampat",
        description:
            "Kepulauan Raja Ampat yang menakjubkan dengan keindahan bawah lautnya.",
    },
    {
        title: "Bromo",
        description:
            "Gunung Bromo yang megah dengan pemandangan matahari terbit yang spektakuler.",
    },
    {
        title: "Lombok",
        description:
            "Pulau Lombok dengan pantai-pantai yang indah dan Gunung Rinjani yang megah.",
    },
];

const Destinasi = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleButtonClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="bg-green-300 w-11/12 p-5 rounded-xl border-4 border-black mx-auto my-5">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img
                        src="https://i.pinimg.com/564x/87/66/00/87660081be9c389e8d309c881f1204aa.jpg"
                        alt="Hot Air Balloon"
                        className="rounded-lg w-full h-full"
                    />
                </div>
                <div className="md:w-1/2 p-4 flex flex-col bg-gray-800 text-white rounded-lg md:ml-4">
                    <div>
                        <h4 className="text-5xl font-bold text-center">
                            {destinations[currentIndex].title}
                        </h4>
                        <p className="my-4 text-justify">
                            {destinations[currentIndex].description}
                        </p>
                        <button className="mt-2 inline-block w-full text-center bg-white text-black font-semibold py-2 px-4 rounded border border-black hover:bg-black hover:text-white transition duration-300">
                            Lihat Detail
                        </button>
                    </div>
                    <div className="flex justify-center mt-auto gap-4">
                        {destinations.map((_, index) => (
                            <button
                                key={index}
                                className={`btn btn-lg flex items-center justify-center ${
                                    currentIndex === index
                                        ? "bg-black text-white"
                                        : "bg-white text-black"
                                }`}
                                style={{
                                    width: "40px", // Lebar tombol bulat
                                    height: "40px", // Tinggi tombol bulat
                                    borderRadius: "40%", // Membuat tombol bulat
                                    outline: "none", // Menghapus outline default saat focus
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

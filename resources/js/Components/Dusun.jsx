import { Link } from "@inertiajs/react";
import React from "react";

// Komponen Card
const Card = ({ imageUrl, title, link }) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-b from-black to-black transition-transform transform hover:scale-105 w-48 h-64 sm:w-52 sm:h-72">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
            </div>
        </div>
    );
};

const Dusun = () => {
    const cards = [
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
        },
    ];

    return (
        <div className="bg-color1 sm:px-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-4">
                <Card imageUrl={cards[0].imageUrl} title={cards[0].title} />
                <Card imageUrl={cards[1].imageUrl} title={cards[1].title} />
                <Card imageUrl={cards[2].imageUrl} title={cards[2].title} />
                <Card imageUrl={cards[3].imageUrl} title={cards[3].title} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-4">
                <Card imageUrl={cards[4].imageUrl} title={cards[4].title} />
                <Card imageUrl={cards[5].imageUrl} title={cards[5].title} />
                <Card imageUrl={cards[6].imageUrl} title={cards[6].title} />
                <Card imageUrl={cards[7].imageUrl} title={cards[7].title} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 lg:px-32 gap-4 sm:gap-8 mt-4">
                <Card imageUrl={cards[8].imageUrl} title={cards[8].title} />
                <Card imageUrl={cards[9].imageUrl} title={cards[9].title} />
                <div className="col-span-2 sm:col-span-2 lg:col-span-1 flex justify-center">
                    <Card
                        imageUrl={cards[10].imageUrl}
                        title={cards[10].title}
                    />
                </div>
            </div>
        </div>
    );
};

export default Dusun;

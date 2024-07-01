import React from "react";

// Komponen Card
const Card = ({ imageUrl, title, link }) => {
    return (
        <a
            href={link}
            className="card overflow-hidden rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105"
        >
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-56 object-cover"
            />
            <div className="p-4">
                <h2 className="text-center font-bold text-xl">{title}</h2>
            </div>
        </a>
    );
};

const Dusun = () => {
    const cards = [
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
            link: "https://example.com/page1",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
            link: "https://example.com/page2",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
            link: "https://example.com/page3",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
            link: "https://example.com/page4",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
            link: "https://example.com/page5",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
            link: "https://example.com/page6",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
            link: "https://example.com/page7",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
            link: "https://example.com/page8",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
            link: "https://example.com/page9",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
            link: "https://example.com/page10",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaya",
            link: "https://example.com/page11",
        },
    ];

    return (
        <div className="bg-white p-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
                {cards.slice(0, 4).map((card, index) => (
                    <Card
                        key={index}
                        imageUrl={card.imageUrl}
                        title={card.title}
                        link={card.link}
                    />
                ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
                {cards.slice(7, 11).map((card, index) => (
                    <Card
                        key={index}
                        imageUrl={card.imageUrl}
                        title={card.title}
                        link={card.link}
                    />
                ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 lg:px-32 py-5 gap-8 mt-4">
                {cards.slice(4, 7).map((card, index) => (
                    <Card
                        key={index}
                        imageUrl={card.imageUrl}
                        title={card.title}
                        link={card.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dusun;

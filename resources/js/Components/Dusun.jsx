import { Link } from "@inertiajs/react";
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// Komponen Card
const Card = ({ imageUrl, title, link }) => {
    return (
        <div className="relative w-[300px] h-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded">
            {link ? (
                <Link href={link} className="block h-full relative">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-[210px] object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center p-2">
                        <h2 className="text-lg sm:text-base font-bold">
                            {title}
                        </h2>
                    </div>
                </Link>
            ) : (
                <>
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center p-2">
                        <h2 className="text-lg sm:text-base font-bold">
                            {title}
                        </h2>
                    </div>
                </>
            )}
        </div>
    );
};

// Komponen Dusun
const Dusun = () => {
    const cards = [
        {
            imageUrl: "/imgDusun/dsnPulihan/pulihanThumb.jpg",
            title: "Dusun Pulihan",
            link: "/Dusun/DusunPulihan",
        },
        {
            imageUrl: "/imgDusun/dsnTajuk/tajukThumb.jpg",
            title: "Dusun Tajuk",
            link: "/Dusun/DusunTajuk",
        },
        {
            imageUrl: "/imgDusun/dsnPuyang/puyangThumb.jpg",
            title: "Dusun Puyang",
            link: "/Dusun/DusunPuyang",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Cingklok",
            link: "/Dusun/DusunCingklok",
        },
        {
            imageUrl:
                "/imgDusun/dsnMacanan/macananThumb.png",
            title: "Dusun Macanan",
            link: "/DsnPulihan",
        },
        {
            imageUrl:
                "/imgDusun/dsnMacanan/macananThumb.png",
            title: "Dusun Ngroto",
            link: "/DsnPulihan",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Banaran",
            link: "/DsnPulihan",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Sokowolu",
            link: "/DsnPulihan",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Ngaduman",
            link: "/Dusun/DusunNgaduman",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Gedong",
            link: "/DsnPulihan",
        },
        {
            imageUrl:
                "https://i.pinimg.com/564x/7b/45/48/7b4548cfcb1a023e3a1cacae29f58df3.jpg",
            title: "Dusun Kaliajeng",
            link: "/DsnPulihan",
        },
    ];

    const slideLeft = () => {
        const slider = document.getElementById("slider");
        if (slider) {
            slider.scrollLeft -= 500;
        }
    };

    const slideRight = () => {
        const slider = document.getElementById("slider");
        if (slider) {
            slider.scrollLeft += 500;
        }
    };

    return (
        <div className="relative flex items-center font-serif">
            <MdChevronLeft
                className="opacity-50 text-black cursor-pointer hover:opacity-100"
                onClick={slideLeft}
                size={40}
            />
            <div
                id="slider"
                className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        imageUrl={card.imageUrl}
                        title={card.title}
                        link={card.link}
                    />
                ))}
            </div>
            <MdChevronRight
                className="opacity-50 text-black cursor-pointer hover:opacity-100"
                onClick={slideRight}
                size={40}
            />
        </div>
    );
};

export default Dusun;

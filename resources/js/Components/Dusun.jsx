import { Link } from "@inertiajs/react";
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// Komponen Card
const Card = ({ imageUrl, title, link }) => {
    return (
        <div className="relative md:w-[360px] w-[290px] h-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded overflow-hidden">
            {link ? (
                <Link href={link} className="block h-full relative">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-[210px] object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center p-2">
                        <h2 className="text-lg sm:text-base font-bold text-center">
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
            imageUrl:
                "https://drive.google.com/thumbnail?id=15UyvgzCAypJvNbifsIaQVR4wGX52Bfv9&sz=w2000",
            title: "Dusun Pulihan",
            link: "/Dusun/DusunPulihan",
        },
        {
            imageUrl:
                "https://drive.google.com/thumbnail?id=1fDVeccjF7_hk9-OauHOJNVsdwM0VRO1A&sz=w2000",
            title: "Dusun Tajuk",
            link: "/Dusun/DusunTajuk",
        },
        {
            imageUrl:
                "https://drive.google.com/thumbnail?id=10b8L8YDm5jkXiFGP1ZWsXBYhLpj6A6ZY&sz=w2000",
            title: "Dusun Puyang",
            link: "/Dusun/DusunPuyang",
        },
        {
            imageUrl:
                "https://drive.google.com/thumbnail?id=18waK4Tmk1flYIHvJN3IqF6dOHpm960DP&sz=w2000",
            title: "Dusun Cingklok",
            link: "/Dusun/DusunCingklok",
        },
        {
            imageUrl:
                "https://drive.google.com/thumbnail?id=1x3SUpKByO8n2FToEQm9LS6-YeQ7Ukm9U&sz=w2000",
            title: "Dusun Macanan",
            link: "/Dusun/DusunMacanan",
        },
        {
            imageUrl:
                "https://drive.google.com/thumbnail?id=1q7I_6FQLKUCzeuAB304j5Mx73G62jYwv&sz=w2000",
            title: "Dusun Ngroto",
            link: "/Dusun/DusunNgroto",
        },
        {
            imageUrl:
                "https://drive.google.com/thumbnail?id=1_GAOlMWVmPq7s_rfKoqZ1DYGpgWycRgs&sz=w2000",
            title: "Dusun Banaran",
            link: "/Dusun/DusunBanaran",
        },
        {
            imageUrl:
                "https://drive.google.com/thumbnail?id=1cOYIPZ-ON2HP1okUehIbxOVdhD84LMS8&sz=w2000",
            title: "Dusun Sokowolu",
            link: "/Dusun/DusunSokowolu",
        },
        {
            imageUrl:
                "https://drive.google.com/thumbnail?id=1Z5BuANxo0CHH4HMrGWQdXKyMah9rCGah&sz=w2000",
            title: "Dusun Ngaduman",
            link: "/Dusun/DusunNgaduman",
        },
        {
            imageUrl:
                "https://drive.google.com/thumbnail?id=16eppZkBAkD4HS1Bp-bli4ORfWYkF9ALN&sz=w2000",
            title: "Dusun Gedong",
            link: "/Dusun/DusunGedong",
        },
        {
            imageUrl:
                "https://drive.google.com/thumbnail?id=1bNrDW8Xtw9f_yG4Uwu8WjXI435u7IKSc&sz=w2000",
            title: "Dusun Kaliajeng",
            link: "/Dusun/DusunKaliajeng",
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

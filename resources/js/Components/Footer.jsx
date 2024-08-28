import React from "react";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faTiktok,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="w-full font-sans">
            <footer className="flex text-white flex-wrap justify-between bg-hijauNew">
                <div className="flex flex-col items-start w-full md:w-1/3 p-5 lg:pl-20">
                    <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start w-full mb-10 lg:mb-2">
                        <img
                            className="w-auto h-20 mb-4"
                            src="/Logo.png"
                            alt="TajukSmartTourismLogo"
                        />
                        <h1 className="text-xl text-center">
                            Tajuk Smart Tourism - Tajuk
                        </h1>
                    </div>

                    <p className="text-sm lg:text-lg mb-2">
                        <strong>Alamat: </strong>Tajuk Kec. Getasan, Kabupaten
                        Semarang Jawa Tengah 50774
                    </p>
                    <p className="text-sm lg:text-lg mb-2">
                        <strong>Telepon:</strong>
                        <a href="https://wa.me/6283831597088" target="_blank">
                            {" "}
                            083831597088
                        </a>
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-start justify-start w-full md:w-1/3 lg:w-1/4 p-5">
                    <p className="text-lg lg:text-4xl font-bold text-center md:text-left">
                        Jelajahi Keindahan Temukan Ketenangan
                    </p>
                    <br />
                    <h4 className="text-sm lg:text-lg mb-3">Ikuti Kami</h4>
                    <div className="flex space-x-3 lg:space-x-5">
                        <a href="https://www.instagram.com/tajuksmarttourism.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="text-white cursor-pointer hover:text-aqua text-xl lg:text-2xl"
                            />
                        </a>
                        <a href="https://www.tiktok.com/@tstbemfik?is_from_webapp=1&sender_device=pc" target="_blank">
                            <FontAwesomeIcon
                                icon={faTiktok}
                                className="text-white cursor-pointer hover:text-aqua text-xl lg:text-2xl"
                            />
                        </a>
                        <a href="https://www.youtube.com/@TajukSmartTourism" target="_blank">
                            <FontAwesomeIcon
                                icon={faYoutube}
                                className="text-white cursor-pointer hover:text-aqua text-xl lg:text-2xl"
                            />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center lg:justify-start md:items-end lg:items-start mb-5 w-full md:w-1/3 lg:w-1/4 p-5 text-center md:text-right lg:text-left">
                    <div className="flex flex-row md:flex-col flex-wrap justify-center md:justify-start space-x-4 md:space-x-0 md:space-y-4">
                        <Link
                            className="text-sm lg:text-lg mb-2 md:mb-0 hover:text-color1"
                            href="/ProfileDesa"
                        >
                            Tentang Kami
                        </Link>
                        <span className="block md:hidden"> /</span>
                        <Link
                            className="text-sm lg:text-lg mb-2 lg:mb-5 md:mb-0 hover:text-color1"
                            href="404.html"
                        >
                            Informasi
                        </Link>
                        <span className="block md:hidden"> /</span>
                        <Link
                            className="text-sm lg:text-lg mb-2 lg:mb-5 md:mb-0 hover:text-color1"
                            href="/DungKluruk"
                        >
                            Destinasi
                        </Link>
                        <span className="block md:hidden"> /</span>
                        <a
                            className="text-sm lg:text-lg mb-2 lg:mb-5 md:mb-0 hover:text-color1"
                            href="/PasarJawi"
                        >
                            Event
                        </a>
                        <span className="block md:hidden"> /</span>
                        <a
                            className="text-sm lg:text-lg mb-2 lg:mb-5 md:mb-0 hover:text-color1"
                            href="/Paket"
                        >
                            Paket
                        </a>
                        <span className="block md:hidden"> /</span>
                        <a
                            className="text-sm lg:text-lg mb-2 lg:mb-5 md:mb-0 hover:text-color1"
                            href="/admin"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Login
                        </a>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center bg-black bg-opacity-20 p-4">
                    <p className="text-sm text-center text-white">
                        © 2024, Tajuk Smart Tourism - Tajuk X Udinus
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

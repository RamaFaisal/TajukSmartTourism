import React, { useState, useEffect, useRef } from "react";
import { Link } from "@inertiajs/react";

export default function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {isDropdownOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={() => setDropdownOpen(false)}
                ></div>
            )}
            <div
                className={`navbar-main fixed top-0 w-full z-50 shadow-outline transition-colors duration-1 ${
                    isScrolled ? "bg-color2 shadow-lg" : "bg-transparent"
                }`}
            >
                <div className="navbar lg:px-20">
                    <div className="navbar-start">
                        <div className="dropdown" ref={dropdownRef}>
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                                onClick={toggleDropdown}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className={`menu menu-2xl dropdown-content z-50 shadow w-52 h-screen bg-white ${
                                    isDropdownOpen ? "block" : "hidden"
                                }`}
                                style={{ left: "0", top: "4rem" }}
                            >
                                <li>
                                    <Link className="font-bold" href="/Homepage">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <details>
                                        <summary className="whitespace-normal break-words font-bold">
                                            Destinasi & Event
                                        </summary>
                                        <ul className="p-2">
                                            <p className="whitespace-normal break-words font-bold">
                                                Destinasi
                                            </p>
                                            <li>
                                                <Link href="/DungKluruk">
                                                    DungKluruk
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/Tiamo">Tiamo</Link>
                                            </li>
                                            <p className="font-bold">Event</p>
                                            <li>
                                                <a
                                                    className="whitespace-normal break-words"
                                                    href="#"
                                                >
                                                    Pasar Jawi
                                                </a>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <a
                                        className="whitespace-normal break-words font-bold"
                                        href="#"
                                    >
                                        Paket
                                    </a>
                                </li>
                                <li>
                                    <details>
                                        <summary className="whitespace-normal break-words font-bold">
                                            Informasi
                                        </summary>
                                        <ul className="p-2">
                                            <li>
                                                <a
                                                    className="whitespace-normal break-words"
                                                    href="#"
                                                >
                                                    Berita
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="whitespace-normal break-words"
                                                    href="#"
                                                >
                                                    Galeri
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="whitespace-normal break-words"
                                                    href="#"
                                                >
                                                    Produk
                                                </a>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary className="whitespace-normal break-words font-bold">
                                            Tentang Kami
                                        </summary>
                                        <ul className="p-2">
                                            <li>
                                                <a
                                                    className="whitespace-normal break-words px-4"
                                                    href="#"
                                                >
                                                    <span>Profil Desa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="whitespace-normal break words"
                                                    href="#"
                                                >
                                                    Potensi Desa
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="whitespace-normal break words"
                                                    href="#"
                                                >
                                                    Geografi
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="whitespace-normal break words"
                                                    href="#"
                                                >
                                                    Peta Tajuk
                                                </a>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <a
                                        className="whitespace-normal break-words font-bold"
                                        href="#"
                                    >
                                        Kontak Kami
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">LOGO TAJUK</a>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li
                                className={`hover:text-white font-bold ${
                                    hoveredMenu === "home" ? "text-white" : ""
                                }`}
                                onMouseEnter={() => setHoveredMenu("home")}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <Link href="/Homepage">Home</Link>
                            </li>

                            <li
                                className={` ${
                                    hoveredMenu === "destinasi"
                                        ? "text-white"
                                        : ""
                                }`}
                                onMouseEnter={() => setHoveredMenu("destinasi")}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <details open={hoveredMenu === "destinasi"}>
                                    <summary className="hover:text-white font-bold">
                                        Destinasi & Event
                                    </summary>
                                    <ul className="w-40 top-5 left-5 bg-green-100 rounded-none">
                                        <p className="font-bold py-2 px-4 text-black">
                                            Destinasi
                                        </p>
                                        <ul className="text-black">
                                            <li>
                                                <Link href="/DungKluruk">
                                                    - DungKluruk
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/Tiamo">
                                                    - Tiamo
                                                </Link>
                                            </li>
                                        </ul>
                                        <p className="font-bold py-2 px-4 text-black">
                                            Event
                                        </p>
                                        <ul className="text-black">
                                            <li>
                                                <a
                                                    className="whitespace-normal break-words"
                                                    href="#"
                                                >
                                                    - Pasar Jawi
                                                </a>
                                            </li>
                                        </ul>
                                    </ul>
                                </details>
                            </li>
                            <li
                                onMouseEnter={() => setHoveredMenu("paket")}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <a
                                    href="#"
                                    className="font-bold hover:text-white"
                                >
                                    Paket
                                </a>
                            </li>
                            <li
                                className={` ${
                                    hoveredMenu === "informasi"
                                        ? "text-white"
                                        : ""
                                }`}
                                onMouseEnter={() => setHoveredMenu("informasi")}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <details open={hoveredMenu === "informasi"}>
                                    <summary className="whitespace-normal break-words font-bold">
                                        Informasi
                                    </summary>
                                    <ul className="w-auto bg-green-100 top-5 left-5 rounded-none text-black">
                                        <li>
                                            <a
                                                className="whitespace-normal break-words"
                                                href="#"
                                            >
                                                Berita
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="whitespace-normal break-words"
                                                href="#"
                                            >
                                                Galeri
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="whitespace-normal break-words"
                                                href="#"
                                            >
                                                Produk
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li
                                className={` ${
                                    hoveredMenu === "tentangKami"
                                        ? "text-white"
                                        : ""
                                }`}
                                onMouseEnter={() =>
                                    setHoveredMenu("tentangKami")
                                }
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <details open={hoveredMenu === "tentangKami"}>
                                    <summary className="font-bold hover:text-white">
                                        Tentang Kami
                                    </summary>
                                    <ul className="w-40 top-5 left-5 bg-green-100 rounded-none text-black">
                                        <li>
                                            <a
                                                className="whitespace-normal break-words"
                                                href="#"
                                            >
                                                Profil Desa
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="whitespace-normal break-words"
                                                href="#"
                                            >
                                                Potensi Desa
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="whitespace-normal break-words"
                                                href="#"
                                            >
                                                Geografi
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="whitespace-normal break-words"
                                                href="#"
                                            >
                                                Peta Tajuk
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li
                                onMouseEnter={() =>
                                    setHoveredMenu("kontakKami")
                                }
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <a
                                    className="font-bold hover:text-white"
                                    href="#"
                                >
                                    Kontak Kami
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">AR</a>
                    </div>
                </div>
            </div>
        </>
    );
}

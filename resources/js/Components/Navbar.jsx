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
                    className="fixed inset-0 bg-white opacity-50 z-40"
                    onClick={() => setDropdownOpen(false)}
                ></div>
            )}
            <div
                className={`navbar-main fixed top-0 w-full z-50 shadow-outline transition-colors duration-1 ${
                    isScrolled
                        ? "bg-hijauNew shadow-lg"
                        : "bg-hijauNew opacity-85 shadow-lg"
                }`}
            >
                <div className="navbar lg:px-20 text-black fontFamily-sans">
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
                                    stroke="white"
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
                                className={`menu menu-2xl dropdown-content z-50 shadow w-52 h-screen bg-colorBg ${
                                    isDropdownOpen ? "block" : "hidden"
                                }`}
                                style={{ left: "-1rem", top: "3.5rem" }}
                            >
                                <li>
                                    <Link
                                        className="font-bold text-black"
                                        href="/"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <details>
                                        <summary className="whitespace-normal break-words font-bold text-black">
                                            Destinasi
                                        </summary>
                                        <ul className="p-2">
                                            <li>
                                                <Link href="/Destinasi/DungKluruk">
                                                    DungKluruk
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/Destinasi/Sokowolu">
                                                    Sokowolu
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/Destinasi/Ngaduman">
                                                    Ngaduman
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/Destinasi/GPass">
                                                    G-Pass
                                                </Link>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <Link
                                        className="whitespace-normal break-words font-bold"
                                        href="/Paket"
                                    >
                                        Paket
                                    </Link>
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
                                                    href="/Informasi/Berita"
                                                >
                                                    Berita
                                                </a>
                                            </li>
                                            <li>
                                                <Link
                                                    className="whitespace-normal break-words"
                                                    href="/Informasi/Gallery"
                                                >
                                                    Galeri
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="whitespace-normal break-words"
                                                    href="/Informasi/Produk"
                                                >
                                                    Produk
                                                </Link>
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
                                                <Link
                                                    className="whitespace-normal break-words px-4"
                                                    href="/TentangKami/ProfileDesa"
                                                >
                                                    <span>Profil Desa</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <a
                                                    className="whitespace-normal break words"
                                                    href="/TentangKami/Geografi"
                                                >
                                                    Geografi
                                                </a>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <Link
                                        className="whitespace-normal break-words font-bold"
                                        href="/Contacts"
                                    >
                                        Kontak Kami
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link className="text-xl" href="/">
                            <img
                                src="/Logo.png"
                                alt="Logo Tajuk"
                                className="h-8 md:h-10 lg:h-12"
                            />
                        </Link>
                    </div>

                    <div className="navbar-center hidden text-white lg:flex font-serif">
                        <ul className="menu menu-horizontal px-1">
                            <li
                                className={`font-bold ${
                                    hoveredMenu === "home" ? "" : ""
                                }`}
                                onMouseEnter={() => setHoveredMenu("home")}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <Link
                                    className="hover:bg-putih hover:text-black"
                                    href="/"
                                >
                                    Home
                                </Link>
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
                                    <summary className="hover:text-black hover:bg-putih font-bold">
                                        Destinasi
                                    </summary>
                                    <ul className="w-auto top-5 left-5 bg-green-100 rounded-none text-black">
                                        <li>
                                            <Link
                                                className="hover:bg-putih"
                                                href="/Destinasi/DungKluruk"
                                            >
                                                DungKluruk
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="hover:bg-putih"
                                                href="/Destinasi/Sokowolu"
                                            >
                                                Sokowolu
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="hover:bg-putih"
                                                href="/Destinasi/Ngaduman"
                                            >
                                                Ngaduman
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="hover:bg-putih"
                                                href="/Destinasi/GPass"
                                            >
                                                G-Pass
                                            </Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li
                                className={`font-bold ${
                                    hoveredMenu === "paket" ? "text-white" : ""
                                }`}
                                onMouseEnter={() => setHoveredMenu("paket")}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <Link
                                    className="hover:bg-putih hover:text-black"
                                    href="/Paket"
                                >
                                    Paket
                                </Link>
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
                                    <summary className="whitespace-normal break-words font-bold hover:bg-putih hover:text-black">
                                        Informasi
                                    </summary>
                                    <ul className="w-auto bg-green-100 top-5 left-5 rounded-none text-black">
                                        <li>
                                            <a
                                                className="hover:bg-putih whitespace-normal break-words"
                                                href="/Informasi/Berita"
                                            >
                                                Berita
                                            </a>
                                        </li>
                                        <li>
                                            <Link
                                                className="hover:bg-putih whitespace-normal break-words"
                                                href="/Informasi/Gallery"
                                            >
                                                Galeri
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="hover:bg-putih whitespace-normal break-words"
                                                href="/Informasi/Produk"
                                            >
                                                Produk
                                            </Link>
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
                                    <summary className="hover:bg-putih hover:text-black font-bold">
                                        Tentang Kami
                                    </summary>
                                    <ul className="w-auto top-5 left-5 bg-green-100 rounded-none text-black">
                                        <li>
                                            <Link
                                                className="hover:bg-putih whitespace-normal break-words"
                                                href="/TentangKami/ProfileDesa"
                                            >
                                                Profil Desa
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                className="hover:bg-putih whitespace-normal break-words"
                                                href="/TentangKami/Geografi"
                                            >
                                                Geografi
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
                                <Link
                                    className="hover:bg-putih font-bold hover:text-black"
                                    href="/Contacts"
                                >
                                    Kontak Kami
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a
                            className="btn"
                            href="https://feby-akliji23.github.io/AR-BETA_V01/"
                        >
                            AR
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

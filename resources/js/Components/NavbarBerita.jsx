import React, { useState, useEffect, useRef } from "react";
import { Link } from "@inertiajs/react";

export default function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
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
            <div className="navbar-main fixed top-0 w-full z-50 bg-green-500 shadow-none">
                <div className="navbar lg:px-20 text-white fontFamily-sans">
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
                                className={`menu menu-2xl dropdown-content z-50 shadow w-52 h-screen bg-green-500 ${isDropdownOpen ? "block" : "hidden"
                                    }`}
                                style={{ left: "-1rem", top: "3.5rem" }}
                            >
                                <li>
                                    <Link
                                        className="font-bold text-white"
                                        href="/Homepage"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <details>
                                        <summary className="whitespace-normal break-words font-bold text-white">
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
                                        className="whitespace-normal break-words font-bold text-white"
                                        href="/Paket"
                                    >
                                        Paket
                                    </Link>
                                </li>
                                <li>
                                    <details>
                                        <summary className="whitespace-normal break-words font-bold text-white">
                                            Informasi
                                        </summary>
                                        <ul className="p-2">
                                            <li>
                                                <a
                                                    className="whitespace-normal break-words text-white"
                                                    href="/Informasi/Berita"
                                                >
                                                    Berita
                                                </a>
                                            </li>
                                            <li>
                                                <Link
                                                    className="whitespace-normal break-words text-white"
                                                    href="/Informasi/Gallery"
                                                >
                                                    Galeri
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="whitespace-normal break-words text-white"
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
                                        <summary className="whitespace-normal break-words font-bold text-white">
                                            Tentang Kami
                                        </summary>
                                        <ul className="p-2">
                                            <li>
                                                <Link
                                                    className="whitespace-normal break-words px-4 text-white"
                                                    href="/TentangKami/ProfileDesa"
                                                >
                                                    <span>Profil Desa</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <a
                                                    className="whitespace-normal break-words text-white"
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
                                        className="whitespace-normal break-words font-bold text-white"
                                        href="/Contacts"
                                    >
                                        Kontak Kami
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link className="text-xl" href="/Homepage">
                            <img
                                src="/Logo.png"
                                alt="Logo Tajuk"
                                className="h-8 md:h-10 lg:h-12"
                            />
                        </Link>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li
                                className="font-bold"
                                onMouseEnter={() => setHoveredMenu("home")}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <Link
                                    className="hover:bg-green-600 hover:text-white"
                                    href="/Homepage"
                                >
                                    Home
                                </Link>
                            </li>

                            <li
                                className=""
                                onMouseEnter={() => setHoveredMenu("destinasi")}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <details open={hoveredMenu === "destinasi"}>
                                    <summary className="hover:bg-green-600 hover:text-white font-bold">
                                        Destinasi
                                    </summary>
                                    <ul className="w-auto bg-green-600 text-white rounded-none">
                                        <li>
                                            <Link
                                                className="hover:bg-green-700"
                                                href="/Destinasi/DungKluruk"
                                            >
                                                DungKluruk
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="hover:bg-green-700"
                                                href="/Destinasi/Sokowolu"
                                            >
                                                Sokowolu
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="hover:bg-green-700"
                                                href="/Destinasi/Ngaduman"
                                            >
                                                Ngaduman
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="hover:bg-green-700"
                                                href="/Destinasi/GPass"
                                            >
                                                G-Pass
                                            </Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li
                                className="font-bold"
                                onMouseEnter={() => setHoveredMenu("paket")}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <Link
                                    className="hover:bg-green-600 hover:text-white"
                                    href="/Paket"
                                >
                                    Paket
                                </Link>
                            </li>
                            <li
                                className=""
                                onMouseEnter={() => setHoveredMenu("informasi")}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <details open={hoveredMenu === "informasi"}>
                                    <summary className="whitespace-normal break-words font-bold hover:bg-green-600 hover:text-white">
                                        Informasi
                                    </summary>
                                    <ul className="w-auto bg-green-600 text-white rounded-none">
                                        <li>
                                            <a
                                                className="hover:bg-green-700"
                                                href="/Informasi/Berita"
                                            >
                                                Berita
                                            </a>
                                        </li>
                                        <li>
                                            <Link
                                                className="hover:bg-green-700"
                                                href="/Informasi/Gallery"
                                            >
                                                Galeri
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="hover:bg-green-700"
                                                href="/Informasi/Produk"
                                            >
                                                Produk
                                            </Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li
                                className=""
                                onMouseEnter={() => setHoveredMenu("tentangKami")}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <details open={hoveredMenu === "tentangKami"}>
                                    <summary className="hover:bg-green-600 hover:text-white font-bold">
                                        Tentang Kami
                                    </summary>
                                    <ul className="w-auto bg-green-600 text-white rounded-none">
                                        <li>
                                            <Link
                                                className="hover:bg-green-700"
                                                href="/TentangKami/ProfileDesa"
                                            >
                                                Profil Desa
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                className="hover:bg-green-700"
                                                href="/TentangKami/Geografi"
                                            >
                                                Geografi
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li
                                onMouseEnter={() => setHoveredMenu("kontakKami")}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <Link
                                    className="hover:bg-green-600 font-bold hover:text-white"
                                    href="/Contacts"
                                >
                                    Kontak Kami
                                </Link>
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

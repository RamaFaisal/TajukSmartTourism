import React, { useEffect, useState } from "react";
import { Link, usePage } from "@inertiajs/react";

const AR_URL = "https://feby-akliji23.github.io/AR-BETA_V01/";

const MENU = [
    {
        label: "Home",
        href: "/",
        exact: true,
    },
    {
        label: "Destinasi",
        children: [
            { label: "DungKluruk", href: "/Destinasi/DungKluruk" },
            { label: "Sokowolu", href: "/Destinasi/Sokowolu" },
            { label: "Ngaduman", href: "/Destinasi/Ngaduman" },
            { label: "G-Pass", href: "/Destinasi/GPass" },
        ],
    },
    {
        label: "Paket",
        href: "/Paket",
    },
    {
        label: "Informasi",
        children: [
            { label: "Berita", href: "/Informasi/Berita" },
            { label: "Galeri", href: "/Informasi/Gallery" },
            { label: "Produk", href: "/Informasi/Produk" },
        ],
    },
    {
        label: "Tentang Kami",
        children: [
            { label: "Profil Desa", href: "/TentangKami/ProfileDesa" },
            { label: "Geografi", href: "/TentangKami/Geografi" },
        ],
    },
    {
        label: "Kontak Kami",
        href: "/Contacts",
    },
];

const ChevronDown = ({ className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
        />
    </svg>
);

const ChevronRight = ({ className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
        />
    </svg>
);

const BoxIcon = ({ className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
);

const DesktopDropdown = ({ item, active, currentPath }) => (
    <div className="group relative">
        <button
            type="button"
            className={`inline-flex h-9 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-3 font-medium transition-colors duration-200 ${
                active
                    ? "bg-white/15 font-semibold text-white"
                    : "text-white/85 group-hover:bg-white/10 group-hover:text-white"
            }`}
        >
            {item.label}
            <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 ${
                    active ? "text-accent" : "text-white/60"
                }`}
            />
        </button>

        <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            <div className="relative rounded-2xl bg-primary p-2 shadow-xl shadow-black/30 ring-1 ring-white/10">
                <span className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-[2px] border-l border-t border-white/10 bg-primary" />
                <p className="px-4 pb-1 pt-2 text-[11px] font-bold uppercase tracking-[0.15em] text-white/50">
                    {item.label}
                </p>
                <ul className="space-y-0.5">
                    {item.children.map((child) => (
                        <li key={child.href}>
                            <Link
                                href={child.href}
                                className={`group/item flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                                    currentPath.startsWith(child.href)
                                        ? "bg-white/15 font-semibold text-accent"
                                        : "text-white/85 hover:bg-white/10 hover:text-white"
                                }`}
                            >
                                <span>{child.label}</span>
                                <ChevronRight className="h-4 w-4 -translate-x-1 text-current opacity-0 transition-all duration-150 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const { url } = usePage();
    const currentPath = url.split("?")[0];

    const isActive = (item) => {
        if (item.children) {
            return item.children.some((child) =>
                currentPath.startsWith(child.href)
            );
        }
        return item.exact
            ? currentPath === item.href
            : currentPath.startsWith(item.href);
    };

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setDropdownOpen(false);
    }, [currentPath]);

    useEffect(() => {
        if (!isDropdownOpen) {
            return undefined;
        }

        const previousOverflow = document.body.style.overflowY;
        document.body.style.overflowY = "hidden";

        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                setDropdownOpen(false);
            }
        };
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflowY = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isDropdownOpen]);

    return (
        <>
            {isDropdownOpen && (
                <div
                    className="fade-in fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
                    onClick={() => setDropdownOpen(false)}
                />
            )}

            <header
                className={`fixed inset-x-0 top-0 z-50 font-sans text-white transition-all duration-300 ${
                    isDropdownOpen
                        ? "bg-primary shadow-lg shadow-black/20"
                        : isScrolled
                        ? "bg-primary/95 shadow-lg shadow-black/20 backdrop-blur-md"
                        : "bg-gradient-to-b from-primary/90 via-primary/40 to-transparent"
                }`}
            >
                <div className="navbar px-4 lg:px-10 xl:px-16">
                    <div className="navbar-start">
                        <button
                            type="button"
                            onClick={() => setDropdownOpen((v) => !v)}
                            aria-label={
                                isDropdownOpen ? "Tutup menu" : "Buka menu"
                            }
                            aria-expanded={isDropdownOpen}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 [@media(hover:hover)]:hover:bg-white/10 lg:hidden"
                        >
                            <span className="relative block h-3.5 w-5">
                                <span
                                    className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                                        isDropdownOpen ? "top-1.5 rotate-45" : ""
                                    }`}
                                />
                                <span
                                    className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                                        isDropdownOpen ? "opacity-0" : ""
                                    }`}
                                />
                                <span
                                    className={`absolute left-0 top-3 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                                        isDropdownOpen
                                            ? "top-1.5 -rotate-45"
                                            : ""
                                    }`}
                                />
                            </span>
                        </button>

                        <Link
                            href="/"
                            className="ml-2 shrink-0 transition-transform duration-200 hover:scale-105"
                        >
                            <img
                                src="/Logo.png"
                                alt="Logo Tajuk"
                                className="h-10 lg:h-12"
                            />
                        </Link>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <nav aria-label="Menu utama" className="flex items-center gap-1">
                            {MENU.map((item) =>
                                item.children ? (
                                    <DesktopDropdown
                                        key={item.label}
                                        item={item}
                                        active={isActive(item)}
                                        currentPath={currentPath}
                                    />
                                ) : (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className={`flex h-9 items-center justify-center whitespace-nowrap rounded-full px-3 font-medium transition-colors duration-200 ${
                                            isActive(item)
                                                ? "bg-white/15 font-semibold text-white"
                                                : "text-white/85 hover:bg-white/10 hover:text-white"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            )}
                        </nav>
                    </div>

                    <div className="navbar-end">
                        <a
                            href={AR_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Fitur AR"
                            className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white hover:bg-white hover:text-primary"
                        >
                            <BoxIcon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                            <span className="hidden sm:inline">AR</span>
                        </a>
                    </div>
                </div>

                {isDropdownOpen && (
                    <div className="mobile-menu-panel absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto rounded-b-2xl border-t border-white/10 bg-primary text-white shadow-2xl shadow-black/30 lg:hidden">
                        <ul className="divide-y divide-white/10 py-2">
                            {MENU.map((item) =>
                                item.children ? (
                                    <li key={item.label}>
                                        <details open={isActive(item)}>
                                            <summary
                                                className={`flex cursor-pointer items-center justify-between px-6 py-4 text-base transition-colors hover:bg-white/10 ${
                                                    isActive(item)
                                                        ? "font-semibold text-accent"
                                                        : "font-medium text-white/85"
                                                }`}
                                            >
                                                {item.label}
                                                <ChevronDown className="nav-chevron h-4 w-4 text-white/60" />
                                            </summary>
                                            <ul className="bg-black/15 pb-2">
                                                {item.children.map((child) => (
                                                    <li key={child.href}>
                                                        <Link
                                                            href={child.href}
                                                            onClick={() =>
                                                                setDropdownOpen(
                                                                    false
                                                                )
                                                            }
                                                            className={`flex items-center px-8 py-3 text-[15px] transition-colors ${
                                                                currentPath.startsWith(
                                                                    child.href
                                                                )
                                                                    ? "bg-white/15 font-semibold text-accent"
                                                                    : "font-medium text-white/75 hover:bg-white/10 hover:text-white"
                                                            }`}
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </details>
                                    </li>
                                ) : (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            onClick={() =>
                                                setDropdownOpen(false)
                                            }
                                            className={`flex items-center justify-between px-6 py-4 text-base transition-colors ${
                                                isActive(item)
                                                    ? "bg-white/15 font-semibold text-accent"
                                                    : "font-medium text-white/85 hover:bg-white/10 hover:text-white"
                                            }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                        <div className="border-t border-white/10 p-4">
                            <a
                                href={AR_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent"
                            >
                                <BoxIcon className="h-4 w-4" />
                                Coba Fitur AR
                            </a>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}

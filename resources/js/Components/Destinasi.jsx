import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import { useSwipeable } from "react-swipeable";
import { MdChevronLeft, MdChevronRight, MdPlace } from "react-icons/md";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

const MAP_CENTER = [-7.405443964245397, 110.44818385903196];

const Destinasi = ({ destinations = [] }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mapInteractive, setMapInteractive] = useState(false);
    const [paused, setPaused] = useState(false);
    const intervalTime = 6000;
    const total = destinations.length;

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % total);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + total) % total);
    };

    useEffect(() => {
        if (paused || total === 0) {
            return;
        }

        const interval = setInterval(nextSlide, intervalTime);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSlide, paused, total]);

    const handleMapClick = () => {
        setMapInteractive(true);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: nextSlide,
        onSwipedRight: prevSlide,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    if (total === 0) {
        return (
            <p className="py-10 text-center text-gray-400">
                Belum ada data destinasi.
            </p>
        );
    }

    return (
        <div className="w-full">
            <div className="grid w-full grid-cols-1 items-stretch gap-6 sm:gap-8 lg:grid-cols-[1.1fr_1fr]">
                {/* Peta */}
                <div className="relative isolate z-0 h-56 min-w-0 overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 sm:h-80 md:h-96 lg:h-auto lg:min-h-[460px]">
                    <MapContainer
                        center={MAP_CENTER}
                        zoom={14}
                        style={{ height: "100%", width: "100%" }}
                        className="relative overflow-hidden rounded-2xl"
                        scrollWheelZoom={mapInteractive}
                        dragging={mapInteractive}
                        touchZoom={mapInteractive}
                        doubleClickZoom={mapInteractive}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {destinations
                            .filter(
                                (destination) =>
                                    typeof destination.lat === "number" &&
                                    typeof destination.lng === "number"
                            )
                            .map((destination, index) => (
                            <Marker
                                key={index}
                                position={[destination.lat, destination.lng]}
                                icon={L.icon({
                                    iconUrl: markerIconPng,
                                    shadowUrl: markerShadowPng,
                                    iconSize: [25, 41],
                                    iconAnchor: [15, 41],
                                })}
                            >
                                <Popup>
                                    <div className="min-w-[150px] max-w-[220px] text-black">
                                        <h3 className="text-base font-bold">
                                            {destination.title}
                                        </h3>
                                        <p className="mt-1 text-sm">
                                            {destination.description.length > 90
                                                ? destination.description.substring(
                                                      0,
                                                      90
                                                  ) + "…"
                                                : destination.description}
                                        </p>
                                        <Link
                                            href={destination.link}
                                            className="mt-1 inline-block text-sm font-semibold text-primary hover:underline"
                                        >
                                            Lihat Detail
                                        </Link>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>

                    {/* Overlay kunci peta — harus di atas panes Leaflet */}
                    <div
                        className={`absolute inset-0 z-[1100] flex cursor-pointer items-center justify-center bg-black/40 transition-colors duration-300 ${
                            mapInteractive
                                ? "pointer-events-none opacity-0"
                                : "opacity-100 hover:bg-black/30"
                        }`}
                        onClick={handleMapClick}
                    >
                        <span className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-primary shadow-xl backdrop-blur sm:px-5 sm:py-2.5 sm:text-sm">
                            <MdPlace size={18} />
                            Ketuk untuk menjelajahi peta
                        </span>
                    </div>
                </div>

                {/* Slider kartu destinasi + kontrol di bawahnya */}
                <div
                    className="flex w-full min-w-0 flex-col"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <div
                        {...swipeHandlers}
                        className="relative flex-1 touch-pan-y select-none overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5"
                    >
                        <div
                            className="flex h-full transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentSlide * 100}%)`,
                            }}
                        >
                            {destinations.map((destination, index) => (
                                <div
                                    key={destination.title}
                                    className="flex h-full w-full shrink-0 flex-col md:flex-row lg:flex-col"
                                >
                                    <div className="relative h-40 shrink-0 sm:h-52 md:h-auto md:w-5/12 lg:h-52 lg:w-full">
                                        <img
                                            src={destination.image}
                                            alt={destination.title}
                                            loading="lazy"
                                            draggable={false}
                                            className="h-full w-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                                        <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur sm:left-4 sm:top-4 sm:px-3 sm:text-xs">
                                            Destinasi {index + 1}
                                        </span>
                                    </div>
                                    <div className="flex min-w-0 flex-1 flex-col bg-white p-4 sm:p-6">
                                        <h3 className="text-lg font-bold text-primary sm:text-xl md:text-2xl">
                                            {destination.title}
                                        </h3>
                                        {typeof destination.lat === "number" &&
                                            typeof destination.lng ===
                                                "number" && (
                                                <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-gray-400 sm:text-xs">
                                                    <MdPlace size={14} />
                                                    {destination.lat.toFixed(
                                                        4
                                                    )}
                                                    ,{" "}
                                                    {destination.lng.toFixed(
                                                        4
                                                    )}
                                                </p>
                                            )}
                                        <p className="mb-4 mt-2 text-[13px] leading-relaxed text-gray-600 sm:mt-3 sm:text-sm">
                                            {destination.description}
                                        </p>
                                        <Link
                                            href={destination.link}
                                            className="mt-auto inline-flex items-center justify-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90 md:w-fit lg:w-auto"
                                        >
                                            Lihat Detail →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Kontrol: prev + thumbnail tiap destinasi + next — selebar kartu */}
                    <div className="mt-4 flex w-full items-center justify-center gap-2 sm:mt-5 sm:gap-3">
                        <button
                            type="button"
                            onClick={prevSlide}
                            aria-label="Destinasi sebelumnya"
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-md ring-1 ring-black/5 transition hover:bg-primary hover:text-white"
                        >
                            <MdChevronLeft size={24} />
                        </button>

                        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
                            {destinations.map((destination, index) => (
                                <button
                                    key={destination.title}
                                    type="button"
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Ke destinasi ${destination.title}`}
                                    aria-pressed={index === currentSlide}
                                    className={`group relative flex min-w-0 flex-1 items-center justify-center overflow-hidden rounded-lg py-4 transition-all duration-300 sm:h-14 sm:py-0 sm:ring-2 ${
                                        index === currentSlide
                                            ? "sm:shadow-lg sm:shadow-primary/25 sm:ring-primary"
                                            : "sm:opacity-70 sm:ring-transparent sm:hover:opacity-100"
                                    }`}
                                >
                                    <span
                                        className={`h-1.5 w-full rounded-full transition-colors sm:hidden ${
                                            index === currentSlide
                                                ? "bg-primary"
                                                : "bg-primary/25"
                                        }`}
                                    />
                                    <img
                                        src={destination.image}
                                        alt={destination.title}
                                        loading="lazy"
                                        className="hidden h-full w-full object-cover sm:block"
                                    />
                                    <span className="absolute inset-0 hidden bg-black/30 transition-colors group-hover:bg-black/15 sm:block" />
                                </button>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={nextSlide}
                            aria-label="Destinasi berikutnya"
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-md ring-1 ring-black/5 transition hover:bg-primary hover:text-white"
                        >
                            <MdChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destinasi;

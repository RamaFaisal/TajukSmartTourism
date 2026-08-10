import React, { useState } from "react";
import { MdPlayCircleOutline } from "react-icons/md";

const VideoCarousel = ({ videos = [] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const safeIndex = Math.min(activeIndex, videos.length - 1);
    const active = videos[safeIndex];

    if (videos.length === 0) {
        return (
            <p className="py-10 text-center text-gray-400">
                Belum ada video.
            </p>
        );
    }

    return (
        <div className="w-full">
            {/* Pemutar utama */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl shadow-black/20 ring-1 ring-black/10">
                {videos.map((video, index) => (
                    <iframe
                        key={video.id}
                        title={video.title}
                        className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
                            index === safeIndex ? "opacity-100" : "opacity-0"
                        }`}
                        src={
                            index === safeIndex
                                ? `https://www.youtube.com/embed/${video.id}`
                                : ""
                        }
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ))}
            </div>

            {/* Judul video aktif + tautan YouTube */}
            <div className="mt-3 flex flex-col gap-2 sm:mt-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-bold leading-snug text-primary sm:text-xl">
                    {active.title}
                </h3>
                <a
                    href={`https://www.youtube.com/watch?v=${active.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary/70 transition hover:text-primary"
                >
                    Tonton di YouTube
                    <span aria-hidden="true">↗</span>
                </a>
            </div>

            {/* Pemilih video */}
            <div className="scrollbar-hide mt-3 flex snap-x snap-mandatory gap-2.5 overflow-x-auto pb-1 sm:mt-4 sm:gap-4">
                {videos.map((video, index) => (
                    <button
                        key={video.id}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-pressed={index === safeIndex}
                        aria-label={`Putar: ${video.title}`}
                        className={`group relative w-32 shrink-0 snap-start overflow-hidden rounded-xl ring-2 transition-all duration-300 sm:w-44 lg:w-48 ${
                            index === activeIndex
                                ? "ring-primary shadow-lg shadow-primary/20"
                                : "ring-transparent opacity-70 hover:opacity-100"
                        }`}
                    >
                        <img
                            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                            alt={video.title}
                            loading="lazy"
                            className="aspect-video w-full object-cover"
                        />
                        <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/20">
                            <MdPlayCircleOutline
                                className={`h-8 w-8 text-white drop-shadow-lg transition-transform duration-300 ${
                                    index === activeIndex
                                ? "scale-110"
                                : "group-hover:scale-110"
                                }`}
                            />
                        </span>
                        <span className="absolute inset-x-0 bottom-0 truncate bg-gradient-to-t from-black/80 to-transparent px-2 pb-1.5 pt-4 text-left text-[11px] font-semibold text-white sm:text-xs">
                            {video.title}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default VideoCarousel;

import React, { useState, useRef, useEffect } from "react";

const VideoCarousel = () => {
    const videos = [
        {
            url: "https://www.youtube.com/embed/DN3IuwHTcoc?si=5oe0kOJ9tlrMxNme",
            title: "Video 1",
        },
        {
            url: "https://www.youtube.com/embed/gWzAhfV-k6o?si=lbOkwG7WQQG_plep",
            title: "Video 2",
        },
        {
            url: "https://www.youtube.com/embed/pnSJKx2nLv4?si=pr_eXeyNU9QrUCaz",
            title: "Video 3",
        },
    ];

    const [currentVideo, setCurrentVideo] = useState(0);
    const videoRefs = useRef([]);

    useEffect(() => {
        videoRefs.current = videoRefs.current.slice(0, videos.length);
    }, [videos]);

    const handleNextVideo = () => {
        setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
    };

    const handlePrevVideo = () => {
        setCurrentVideo(
            (prevVideo) => (prevVideo - 1 + videos.length) % videos.length
        );
    };

    return (
        <div className="relative w-full h-full flex justify-center items-center">
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-full h-full flex justify-center overflow-hidden">
                    <div
                        className="w-full h-full flex transition-transform duration-500"
                        style={{
                            transform: `translateX(-${currentVideo * 100}%)`,
                        }}
                    >
                        {videos.map((video, index) => (
                            <div
                                key={index}
                                className="w-full h-[210px] lg:h-[650px] flex-shrink-0 flex flex-col items-center"
                            >
                                <iframe
                                    ref={(el) =>
                                        (videoRefs.current[index] = el)
                                    }
                                    className="w-full lg:w-[1100px] h-full lg:h-[620px] rounded-lg"
                                    src={video.url}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={video.title}
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button
                className="absolute left-1 lg:left-12 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded-full"
                onClick={handlePrevVideo}
            >
                <svg
                    className="w-7 h-7 lg:w-6 lg:h-10 stroke-white md:stroke-black"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="11"
                        className="stroke-white md:stroke-black"
                        strokeWidth="2"
                        fill="none"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            <button
                className="absolute right-1 lg:right-12 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 font-bold py-2 px-4 rounded-full"
                onClick={handleNextVideo}
            >
                <svg
                    className="w-7 h-7 lg:w-6 lg:h-10 stroke-white md:stroke-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="11"
                        className="stroke-white md:stroke-black"
                        strokeWidth="2"
                        fill="none"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </div>
    );
};

export default VideoCarousel;

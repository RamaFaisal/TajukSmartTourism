import React, { useState, useRef } from "react";

const VideoCarousel = () => {
    const videos = [
        {
            url: "https://www.youtube.com/embed/Q63MY4_Mjps?enablejsapi=1",
            title: "Video 1",
        },
        {
            url: "https://www.youtube.com/embed/yiF5Y3Eszgg?enablejsapi=1",
            title: "Video 2",
        },
        {
            url: "https://www.youtube.com/embed/6rz5LNbQFAQ?enablejsapi=1",
            title: "Video 3",
        },
    ];

    const [currentVideo, setCurrentVideo] = useState(0);
    const videoRefs = useRef(videos.map(() => React.createRef()));

    const handleNextVideo = () => {
        setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
    };

    const handlePrevVideo = () => {
        setCurrentVideo(
            (prevVideo) => (prevVideo - 1 + videos.length) % videos.length
        );
    };

    return (
        <div className="relative w-full mt-10 sm:mt-14 md:mt-20 flex justify-center items-center">
            <div className="w-full p-0 flex justify-center items-center">
                <div className="w-full flex justify-center overflow-hidden">
                    <div
                        className="w-full flex justify-center transition-transform duration-500"
                        style={{
                            transform: `translateX(-${currentVideo * 100}%)`,
                        }}
                    >
                        {videos.map((video, index) => (
                            <div
                                key={index}
                                className="w-full flex-shrink-0 flex flex-col items-center"
                            >
                                <iframe
                                    ref={videoRefs.current[index]}
                                    className="w-full max-w-[1000px] h-full aspect-video rounded-lg"
                                    src={video.url}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <h1 className="text-center mt-4">
                                    {video.title}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button
                className="absolute left-4 lg:left-40 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded-full"
                onClick={handlePrevVideo}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            <button
                className="absolute right-4 lg:right-40 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded-full"
                onClick={handleNextVideo}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </div>
    );
};

export default VideoCarousel;

import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";

const images = [
    "/imgHomepage/dungKluruk.jpg",
    "/imgHomepage/Pinus.jpg",
    "/imgHomepage/dungKluruk2.jpg",
    "/imgHomepage/dungKluruk3.jpg",
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = images.length;
    const slideIntervalRef = useRef(null);

    const goToPreviousSlide = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides
        );
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            goToNextSlide();
            resetSlideInterval();
        },
        onSwipedRight: () => {
            goToPreviousSlide();
            resetSlideInterval();
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    const startSlideInterval = () => {
        slideIntervalRef.current = setInterval(goToNextSlide, 5000);
    };

    const resetSlideInterval = () => {
        clearInterval(slideIntervalRef.current);
        startSlideInterval();
    };

    useEffect(() => {
        startSlideInterval();
        return () => clearInterval(slideIntervalRef.current);
    }, []);

    return (
        <div
            {...handlers}
            className="fixed w-full h-full flex flex-col overflow-hidden"
        >
            {/* Background hitam yang menutupi carousel */}
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

            {/* Carousel */}
            <div
                className="flex transition-transform duration-1000 ease-in-out z-0"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-full h-[550px] md:h-full lg:h-[790px] md:h-[750px] flex-shrink-0"
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
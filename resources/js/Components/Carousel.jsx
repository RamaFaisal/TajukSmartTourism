import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";

const images = [
    "https://i.pinimg.com/564x/3b/53/48/3b5348481d3358be950b2e8275951ece.jpg",
    "https://i.pinimg.com/736x/4f/61/b6/4f61b6fc47af877d42d397a479ffebf4.jpg",
    "https://i.pinimg.com/564x/24/03/9f/24039f3d3a65ab8a80565769ef344b71.jpg",
    "https://i.pinimg.com/564x/2a/fd/7b/2afd7bf2d7040d54ca3e81566b1dd02b.jpg",
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
        <div {...handlers} className="relative w-full h-full flex flex-col overflow-hidden">
            <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
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

import { Link } from "@inertiajs/react";
import React, { useEffect, useRef } from "react";
import { MdPlace } from "react-icons/md";

const FALLBACK_IMAGE =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23115311'/%3E%3Cstop offset='1' stop-color='%230a3d0a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23g)'/%3E%3C/svg%3E";

const SCROLL_SPEED = 100;
const DRAG_THRESHOLD = 5;
const MAX_FRAME_MS = 100;

const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = FALLBACK_IMAGE;
};

const Card = ({ imageUrl, title, link, tabIndex = 0 }) => {
    const content = (
        <>
            <div className="aspect-[4/3] w-full overflow-hidden bg-surface">
                <img
                    src={imageUrl}
                    alt={title}
                    decoding="async"
                    loading="lazy"
                    draggable={false}
                    onError={handleImageError}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3 text-center sm:p-4">
                <h3 className="flex items-center justify-center gap-1.5 text-sm font-bold text-white sm:text-base lg:text-lg">
                    <MdPlace className="h-4 w-4 shrink-0 text-accent" />
                    {title}
                </h3>
                <p className="mt-1 text-xs font-medium text-white/70 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Jelajahi →
                </p>
            </div>
        </>
    );

    const classes =
        "group relative block w-56 shrink-0 overflow-hidden rounded-2xl shadow-md shadow-black/10 ring-1 ring-black/5 transition-transform duration-300 hover:z-10 hover:scale-105 hover:shadow-lg hover:shadow-black/25 sm:w-64 lg:w-72";

    return link ? (
        <Link href={link} className={classes} tabIndex={tabIndex}>
            {content}
        </Link>
    ) : (
        <div className={classes} tabIndex={tabIndex}>
            {content}
        </div>
    );
};

const Dusun = ({ hamlets = [] }) => {
    const trackRef = useRef(null);
    const pausedRef = useRef(false);
    const dragRef = useRef(null);
    const draggedRef = useRef(false);

    const total = hamlets.length;

    useEffect(() => {
        const track = trackRef.current;
        if (!track || total === 0) {
            return undefined;
        }

        let frame;
        let previous;
        let offset = track.scrollLeft;
        let written = offset;

        const step = (now) => {
            const elapsed =
                previous === undefined
                    ? 0
                    : Math.min(now - previous, MAX_FRAME_MS);
            previous = now;

            const current = track.scrollLeft;
            if (Math.abs(current - written) > 1) {
                offset = current;
            }

            const before = offset;

            if (!pausedRef.current) {
                offset += (SCROLL_SPEED * elapsed) / 1000;
            }

            const half = track.scrollWidth / 2;
            if (half > 0) {
                if (offset >= half) {
                    offset -= half;
                } else if (offset < 0) {
                    offset += half;
                }
            }

            if (offset !== before) {
                track.scrollLeft = offset;
                written = track.scrollLeft;
            }

            frame = requestAnimationFrame(step);
        };

        frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
    }, [total]);

    if (total === 0) {
        return (
            <p className="py-10 text-center text-gray-400">
                Belum ada data dusun.
            </p>
        );
    }

    const pause = () => {
        pausedRef.current = true;
    };

    const resume = () => {
        pausedRef.current = false;
    };

    const handlePointerDown = (event) => {
        pause();
        draggedRef.current = false;

        if (event.pointerType !== "mouse") {
            return;
        }

        dragRef.current = {
            pointerId: event.pointerId,
            startX: event.clientX,
            startScroll: trackRef.current.scrollLeft,
        };
    };

    const handlePointerMove = (event) => {
        const drag = dragRef.current;
        if (!drag || drag.pointerId !== event.pointerId) {
            return;
        }

        const distance = event.clientX - drag.startX;
        if (Math.abs(distance) > DRAG_THRESHOLD) {
            draggedRef.current = true;
        }

        trackRef.current.scrollLeft = drag.startScroll - distance;
    };

    const handlePointerUp = () => {
        dragRef.current = null;
    };

    const handleClickCapture = (event) => {
        if (draggedRef.current) {
            event.preventDefault();
            event.stopPropagation();
        }
    };

    return (
        <div
            ref={trackRef}
            role="region"
            aria-label="Daftar dusun wisata"
            className="scrollbar-hide flex w-full cursor-grab select-none overflow-x-auto overscroll-x-contain active:cursor-grabbing"
            onPointerEnter={pause}
            onPointerLeave={() => {
                dragRef.current = null;
                resume();
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onFocusCapture={pause}
            onBlurCapture={resume}
            onDragStart={(event) => event.preventDefault()}
            onClickCapture={handleClickCapture}
        >
            {[0, 1].map((copy) => (
                <div
                    key={copy}
                    aria-hidden={copy === 1}
                    className="flex shrink-0 items-stretch gap-3 py-6 pr-3 sm:gap-4 sm:py-8 sm:pr-4"
                >
                    {hamlets.map((card, index) => (
                        <Card
                            key={`${card.link ?? index}-${copy}`}
                            imageUrl={card.imageUrl}
                            title={card.title}
                            link={card.link}
                            tabIndex={copy === 1 ? -1 : 0}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Dusun;

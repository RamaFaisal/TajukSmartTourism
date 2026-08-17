import { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Lightbox({ photos, index, onClose, onNavigate }) {
    const open = index !== null;
    const photo = open ? photos[index] : null;

    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (event) => {
            if (event.key === "ArrowRight") onNavigate(1);
            if (event.key === "ArrowLeft") onNavigate(-1);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [open, onNavigate]);

    return (
        <Transition show={open} as={Fragment} leave="duration-200">
            <Dialog as="div" className="fixed inset-0 z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/90" />
                </Transition.Child>

                <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-8">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="relative flex max-h-full max-w-4xl flex-col items-center">
                            <button
                                type="button"
                                onClick={onClose}
                                className="absolute -top-10 right-0 text-3xl leading-none text-white/80 hover:text-white sm:-top-2 sm:-right-10"
                                aria-label="Tutup"
                            >
                                &times;
                            </button>

                            {photos.length > 1 && (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => onNavigate(-1)}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-2xl text-white hover:bg-black/60 sm:-left-14"
                                        aria-label="Foto sebelumnya"
                                    >
                                        &#8249;
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => onNavigate(1)}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-2xl text-white hover:bg-black/60 sm:-right-14"
                                        aria-label="Foto berikutnya"
                                    >
                                        &#8250;
                                    </button>
                                </>
                            )}

                            {photo && (
                                <img
                                    src={photo.src}
                                    alt={photo.title || "Foto galeri"}
                                    className="max-h-[80vh] max-w-full rounded-lg object-contain"
                                />
                            )}

                            {(photo?.title || photo?.link) && (
                                <div className="mt-3 flex flex-col items-center gap-1 text-center text-white">
                                    {photo.title && (
                                        <p className="text-sm sm:text-base">
                                            {photo.title}
                                        </p>
                                    )}
                                    {photo.link && (
                                        <a
                                            href={photo.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-white/70 hover:text-white hover:underline"
                                        >
                                            Lihat di Instagram
                                        </a>
                                    )}
                                </div>
                            )}
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
}

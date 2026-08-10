import { Link } from "@inertiajs/react";

const IMAGE_ID = "1XBEW_Q-5DtOiEYmfDFHe6-4oA2peGJt-";

const imageUrl = (width) =>
    `https://drive.google.com/thumbnail?id=${IMAGE_ID}&sz=w${width}`;

export default function PromoBanner() {
    return (
        <Link
            href="/Paket"
            className="group relative flex min-h-[11rem] w-full items-center justify-center overflow-hidden rounded-2xl transition-shadow duration-300 hover:shadow-xl hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:min-h-[13rem] md:min-h-[15rem] lg:min-h-[16rem]"
        >
            <img
                src={imageUrl(2000)}
                srcSet={`${imageUrl(800)} 800w, ${imageUrl(1200)} 1200w, ${imageUrl(2000)} 2000w`}
                sizes="(min-width: 1152px) 1088px, calc(100vw - 2rem)"
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />

            <div className="relative flex flex-col items-center gap-3 px-5 py-10 text-center sm:gap-4 sm:px-8 sm:py-12">
                <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl">
                    Siap Menjelajah Tajuk?
                </h2>
                <p className="max-w-xl text-xs leading-relaxed text-white/85 sm:text-sm md:text-base lg:max-w-2xl">
                    Langit yang biru, gunung yang megah, dan dusun kaya budaya
                    menanti Anda untuk dijelajahi
                </p>
                <span className="mt-1 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-lg transition-colors duration-200 group-hover:bg-accent sm:px-6 sm:py-3">
                    Lihat Paket
                </span>
            </div>
        </Link>
    );
}

import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import PromoBanner from "@/Components/PromoBanner";
import Destinasi from "@/Components/Destinasi";

const InfoCard = ({ label, children }) => (
    <div className="rounded-2xl bg-surface p-5 ring-1 ring-primary/10">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary/60">
            {label}
        </p>
        <div className="mt-1.5 text-sm leading-relaxed text-black sm:text-base">
            {children}
        </div>
    </div>
);

export default function DestinationLayout({
    title,
    heroImage,
    heroHeadline,
    body,
    hours,
    price,
    priceNote,
    facilities = [],
    destinations,
}) {
    return (
        <>
            <Head title={title} />
            <Navbar />

            {/* Hero */}
            <div className="relative h-[380px] w-full overflow-hidden sm:h-[440px] md:h-[500px] lg:h-[560px]">
                <img
                    src={heroImage}
                    alt={heroHeadline}
                    loading="eager"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />
                <div className="absolute inset-0 flex items-center justify-center px-5 text-center text-white sm:px-6">
                    <h1 className="max-w-3xl text-2xl font-bold leading-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.45)] sm:text-4xl md:text-5xl">
                        {heroHeadline}
                    </h1>
                </div>
            </div>

            <div className="relative isolate w-full rounded-t-[20px] bg-white lg:rounded-t-[50px]">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-14 px-4 pb-14 pt-10 text-sm sm:gap-20 sm:px-6 sm:pb-20 sm:pt-14 lg:gap-24 lg:px-8 lg:pb-24 lg:pt-16 lg:text-base">
                    <div className="w-full max-w-6xl text-justify">
                        {(hours || price) && (
                            <div className="mb-8 grid w-full gap-3 sm:mb-10 sm:grid-cols-2">
                                {hours && (
                                    <InfoCard label="Jam Buka">
                                        <p>{hours}</p>
                                    </InfoCard>
                                )}
                                {price && (
                                    <InfoCard label="Harga Tiket">
                                        <p>{price}</p>
                                        {priceNote && (
                                            <p className="mt-1 text-xs text-black sm:text-sm">
                                                {priceNote}
                                            </p>
                                        )}
                                    </InfoCard>
                                )}
                            </div>
                        )}

                        <div
                            className="space-y-4 leading-relaxed text-black [&_strong]:text-black [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5"
                            dangerouslySetInnerHTML={{ __html: body }}
                        />

                        {facilities.length > 0 && (
                            <div className="mt-10 sm:mt-12">
                                <h3 className="text-lg font-bold text-primary sm:text-xl">
                                    Fasilitas
                                </h3>
                                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                                    {facilities.map((facility) => (
                                        <div
                                            key={facility}
                                            className="rounded-xl bg-surface px-3 py-2.5 text-center ring-1 ring-primary/10"
                                        >
                                            <span className="text-xs font-medium text-black sm:text-sm">
                                                {facility}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <PromoBanner />

                    <Destinasi destinations={destinations} />
                </div>

                <Footer />
            </div>
        </>
    );
}

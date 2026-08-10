import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import PromoBanner from "@/Components/PromoBanner";
import Dusun from "@/Components/Dusun";

export default function Show({ title, hamlet, hamlets }) {
    return (
        <div className="w-full h-full bg-white text-lg lg:text-xl flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25">
            <Head title={title} />
            <Navbar />

            <div className="w-full relative">
                <img
                    className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                    src={hamlet.heroImage}
                    alt={`Pemandangan ${hamlet.name}`}
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full text-center">
                    <h1 className="lg:text-4xl text-xl font-bold">
                        {hamlet.heroHeadline}
                    </h1>
                </div>
            </div>

            <div
                className="w-full max-w-6xl mx-auto px-6 md:px-8 text-justify space-y-6 leading-relaxed text-black"
                dangerouslySetInnerHTML={{ __html: hamlet.body }}
            />

            <div className="w-full px-6 md:px-8">
                <PromoBanner />
            </div>

            <div className="w-full h-full">
                <Dusun hamlets={hamlets} />
            </div>

            <Footer />
        </div>
    );
}

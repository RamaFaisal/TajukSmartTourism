import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";
import { Head, useForm, usePage } from "@inertiajs/react";

export default function Contacts(props) {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        message: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("submit.message"), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <div className="w-full h-full bg-white flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-0">
            <Head title={props.title} />
            <div className="bg-white w-full h-[70px]">
                <Navbar />
            </div>

            <div className="w-full flex flex-col lg:flex-row items-center justify-center pt-0 lg:pt-20 px-5 lg:px-20">
                <div className="w-full lg:w-1/2 max-w-6xl text-center lg:mr-8">
                    <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold">
                        Butuh Bantuan? Jangan ragu untuk{" "}
                        <span className="text-primary">Menghubungi kami!</span>
                    </h1>
                </div>
            </div>

            <div className="w-full px-5 lg:px-0">
                <div className="max-w-6xl border-t border-zinc-400 mx-auto my-5 lg:my-20"></div>
            </div>

            <div className="w-full px-5 lg:px-0">
                <div className="max-w-6xl bg-white bg-opacity-50 border border-black p-6 rounded-lg relative mx-auto flex flex-col lg:flex-row">
                    <img
                        className="w-80 h-80 lg:w-[600px] lg:h-[600px] rounded-[10px] object-cover mb-4 lg:mb-0"
                        src="https://drive.google.com/thumbnail?id=17S_quDNkAiFvw9p6hqyaY-gaFrfdApM8&sz=w2000"
                        alt="Gambar Balai Desa Tajuk"
                    />
                    <div className="lg:ml-[50px]">
                        <h3 className="text-black text-base">
                            Bantuan & Dukungan
                        </h3>
                        <h2 className="text-black text-lg lg:text-xl font-bold">
                            Kami senang mendengar dari Anda
                        </h2>
                        {flash?.success && (
                            <div className="mt-4 rounded-[10px] bg-green-100 p-3 text-green-800">
                                {flash.success}
                            </div>
                        )}

                        <form className="mt-4" onSubmit={submit}>
                            <div className="bg-neutral-100 rounded-[10px] p-4 mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-neutral-500 text-base mb-1 font-sans"
                                >
                                    Nama Anda
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    required
                                />
                                {errors.name && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div className="bg-neutral-100 rounded-[10px] p-4 mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-neutral-500 text-base mb-1 font-sans"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    required
                                />
                                {errors.email && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div className="bg-neutral-100 rounded-[10px] p-4 mb-4 h-[220px]">
                                <label
                                    htmlFor="message"
                                    className="block text-neutral-500 text-base mb-1 font-sans"
                                >
                                    Pesan Anda
                                </label>
                                <textarea
                                    id="message"
                                    value={data.message}
                                    onChange={(e) =>
                                        setData("message", e.target.value)
                                    }
                                    className="w-full border border-gray-300 rounded-lg h-40"
                                    required
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-primary rounded-[10px] p-3 text-center cursor-pointer text-white text-xl w-full disabled:opacity-60"
                            >
                                {processing ? "Mengirim..." : "Kirim"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="pt-28">
                <Footer />
            </div>
        </div>
    );
}

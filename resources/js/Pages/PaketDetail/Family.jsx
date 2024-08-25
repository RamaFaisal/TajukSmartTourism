import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function Family(props) {
    return (
        <>
            <Head title={props.title} />
            <Navbar />
            <div className="relative w-full">
                <img
                    src="https://drive.google.com/thumbnail?id=1k9vBYV43kBww9T_NSgxFdfd7hzEnXRdZ&sz=w2000"
                    alt=""
                    className="w-full h-[400px] object-cover"
                />
            </div>

            <div className="flex flex-col md:flex-row w-full p-4 bg-white">
                {/* Bagian Kiri - Itinerary */}
                <div className="md:w-1/2 w-full bg-gray-100 p-4 rounded-lg">
                    <div className="flex flex-col">
                        {/* Header Tabs */}
                        <div className="flex space-x-4">
                            {["ITINERARY"].map((tab, index) => (
                                <button
                                    key={index}
                                    className={`py-2 px-4 rounded-t-lg ${
                                        tab === "ITINERARY"
                                            ? "bg-green-600 text-white"
                                            : "bg-gray-200 text-gray-700"
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        {/* Itinerary Content */}
                        <div className="bg-white p-4 border border-gray-300 rounded-b-lg">
                            {/* Item Itinerary */}
                            {[
                                {
                                    icon: "🕒",
                                    label: "Duration",
                                    detail: "1 Hari",
                                },
                                {
                                    icon: "🗣",
                                    label: "Interpreter",
                                    detail: "Local Guide",
                                    description:
                                        "Dipandu dalam English / Indonesian",
                                },
                                {
                                    icon: "✅",
                                    label: "Activity 1",
                                    detail: "09.00 – 09.30",
                                    description: "Peserta Datang",
                                },
                                {
                                    icon: "✅",
                                    label: "Activity 2",
                                    detail: "09.30 – 10.00",
                                    description: "Pembagian Grup",
                                },
                                {
                                    icon: "✅",
                                    label: "Activity 3",
                                    detail: "10.00 – 13.00",
                                    description: "Cycling Tour",
                                },
                                {
                                    icon: "✅",
                                    label: "Activity 4",
                                    detail: "13.00 – 14.00",
                                    description: "Lunch At Pendopo",
                                },
                                {
                                    icon: "✅",
                                    label: "Activity 5",
                                    detail: "14.00 – 15.00",
                                    description: "Kesenian Tradisional",
                                },
                                {
                                    icon: "✅",
                                    label: "Activity 6",
                                    detail: "15.00",
                                    description: "See You Soon",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4 mb-4"
                                >
                                    <div className="text-green-600 text-2xl">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            {item.label}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {item.detail}
                                        </div>
                                        {item.description && (
                                            <div className="text-sm">
                                                {item.description}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bagian Kanan - Form Pemesanan */}
                <div className="md:w-1/2 w-full p-4">
                    <div className="bg-white p-4 border border-gray-300 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">
                            PESAN SEKARANG
                        </h3>
                        <form className="space-y-4">
                            {/* Input Fields */}
                            {[
                                { label: "Tanggal Tour", type: "date" },
                                {
                                    label: "Jam Kedatangan (wajib diisi)",
                                    type: "time",
                                },
                                { label: "Jumlah Dewasa", type: "number" },
                                { label: "Jumlah Anak", type: "number" },
                                { label: "Jumlah Laki-laki", type: "number" },
                                { label: "Jumlah Perempuan", type: "number" },
                                { label: "Nama (wajib diisi)", type: "text" },
                                { label: "Email (wajib diisi)", type: "email" },
                                { label: "Kota Asal", type: "text" },
                                { label: "Negara", type: "text" },
                            ].map((field, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-2"
                                >
                                    <label className="w-1/3 font-medium">
                                        {field.label}
                                    </label>
                                    <input
                                        type={field.type}
                                        className="w-2/3 p-2 border border-gray-300 rounded-lg"
                                        required={field.label
                                            .toLowerCase()
                                            .includes("wajib")}
                                    />
                                </div>
                            ))}
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

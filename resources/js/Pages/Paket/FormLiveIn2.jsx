import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function FormLiveIn2(props) {
    return (
        <>
            <Head title={props.title} />
            <Navbar />
            <div className="bg-gray-100">
                <div className="text-center mb-8">
                    <img
                        src="https://drive.google.com/thumbnail?id=1-UlILGifqQvgUKkQIfMPYsDFd-3pT2_y&sz=w2000"
                        alt="Paket Wisata"
                        className="h-96 md:h-[500px] w-full object-cover rounded-xl"
                    />
                    <h1 className="text-4xl font-bold text-gray-800 mt-20">
                        Paket Wisata Live In 2
                    </h1>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mb-20">
                    <form method="post" action="/submit-form">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label
                                    htmlFor="namaLengkap"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Nama Lengkap *
                                </label>
                                <input
                                    type="text"
                                    id="namaLengkap"
                                    name="namaLengkap"
                                    className="w-full border rounded-lg p-3 text-gray-700"
                                    placeholder="Nama Lengkap"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="alamat"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Alamat *
                                </label>
                                <input
                                    type="text"
                                    id="alamat"
                                    name="alamat"
                                    className="w-full border rounded-lg p-3 text-gray-700"
                                    placeholder="Alamat Tempat Tinggal"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="noKtp"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Nomor KTP *
                                </label>
                                <input
                                    type="text"
                                    id="noKtp"
                                    name="noKtp"
                                    className="w-full border rounded-lg p-3 text-gray-700"
                                    placeholder="No KTP"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="noTelepon"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    No Telepon *
                                </label>
                                <input
                                    type="text"
                                    id="noTelepon"
                                    name="noTelepon"
                                    className="w-full border rounded-lg p-3 text-gray-700"
                                    placeholder="+62 8xx-xxx-xxx"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Alamat Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full border rounded-lg p-3 text-gray-700"
                                    placeholder="contoh@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="tanggalBooking"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Tanggal Booking *
                                </label>
                                <input
                                    type="date"
                                    id="tanggalBooking"
                                    name="tanggalBooking"
                                    className="w-full border rounded-lg p-3 text-gray-700"
                                    defaultValue="2024-08-25"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="block text-gray-700 font-semibold mb-2">
                                Paket
                            </p>
                            <p className="text-gray-600">
                                Paket Live In 1
                                <br />
                                Rp. ,000.00 /Pax
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-700 font-semibold mb-2">
                                Total
                            </p>
                            <p className="text-gray-600">Rp. 0,00</p>
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="catatan"
                                className="block text-gray-700 font-semibold mb-2"
                            >
                                Catatan
                            </label>
                            <textarea
                                id="catatan"
                                name="catatan"
                                className="w-full border rounded-lg p-3 text-gray-700"
                                rows="4"
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="recaptcha"
                                    className="mr-2"
                                    required
                                />
                                <label htmlFor="recaptcha">
                                    Saya bukan robot
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold p-3 rounded-lg transition duration-300"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

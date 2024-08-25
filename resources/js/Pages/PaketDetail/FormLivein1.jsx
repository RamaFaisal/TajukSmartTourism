import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function FormLivein1(props) {
    return (
        <>
            <Head title={props.title} />
            <Navbar />
            <div className="max-w-lg mx-auto bg-white p-8 shadow-lg mt-10">
                <form method="post" action="/submit-form">
                    <div className="mb-4">
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
                    <div className="mb-4">
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
                    <div className="mb-4">
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
                    <div className="mb-4">
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
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">
                            Jenis Kelamin *
                        </label>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="lakiLaki"
                                name="jenisKelamin"
                                className="mr-2"
                                value="Laki-laki"
                                required
                            />
                            <label htmlFor="lakiLaki" className="mr-6">
                                Laki-laki
                            </label>
                            <input
                                type="radio"
                                id="perempuan"
                                name="jenisKelamin"
                                className="mr-2"
                                value="Perempuan"
                            />
                            <label htmlFor="perempuan">Perempuan</label>
                        </div>
                    </div>
                    <div className="mb-4">
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
                    <div className="mb-4">
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
                    <div className="mb-4">
                        <label
                            htmlFor="jumlahPeserta"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Jumlah Peserta *
                        </label>
                        <input
                            type="number"
                            id="jumlahPeserta"
                            name="jumlahPeserta"
                            className="w-full border rounded-lg p-3 text-gray-700"
                            defaultValue="1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <p className="block text-gray-700 font-semibold mb-2">
                            Paket
                        </p>
                        <p className="text-gray-600">
                            The Authentic Tista Tourism Village Trekking
                            <br />
                            Rp. 560,000.00 /Pax
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
                            <label htmlFor="recaptcha">Saya bukan robot</label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white font-semibold p-3 rounded-lg"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}

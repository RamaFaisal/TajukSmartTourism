import React from "react";

const Footer = () => {
    return (
        <div className="w-full bg-gray-100">
            <footer className="flex flex-wrap justify-between px-40 py-10 bg-white">
                <div className="flex flex-col items-start mb-5 w-full md:w-auto">
                    <img
                        className="w-20 h-20 mb-6"
                        src="img/BackGround/logo.png"
                        alt="LUKI BATIK Logo"
                    />
                    <h4 className="text-sm mb-5">LUKI BATIK</h4>
                    <p className="text-xs mb-2">
                        <strong>Alamat: </strong>Jl. Imam Bonjol No.207,
                        Pendrikan Kidul, Kec. Semarang Tengah, Kota Semarang,
                        Jawa Tengah 50131
                    </p>
                    <p className="text-xs mb-2">
                        <strong>Telepon:</strong> (024) 3517261
                    </p>
                    <p className="text-xs mb-2">
                        <strong>Jam:</strong> 08:00 - 21:00, Senin - Minggu
                    </p>
                    <div className="mt-5">
                        <h4 className="text-sm mb-3">Ikuti Kami</h4>
                        <div className="flex space-x-2">
                            <i className="fab fa-facebook-f text-gray-700 cursor-pointer hover:text-aqua"></i>
                            <i className="fab fa-twitter text-gray-700 cursor-pointer hover:text-aqua"></i>
                            <i className="fab fa-instagram text-gray-700 cursor-pointer hover:text-aqua"></i>
                            <i className="fab fa-pinterest-p text-gray-700 cursor-pointer hover:text-aqua"></i>
                            <i className="fab fa-youtube text-gray-700 cursor-pointer hover:text-aqua"></i>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start mb-5 w-full md:w-auto">
                    <h4 className="text-sm mb-5">Tentang</h4>
                    <a className="text-xs mb-2 hover:text-aqua" href="about.html">
                        Tentang Kami
                    </a>
                    <a className="text-xs mb-2 hover:text-aqua" href="404.html">
                        Kebijakan Privasi
                    </a>
                    <a className="text-xs mb-2 hover:text-aqua" href="syarat.html">
                        Syarat Dan Ketentuan
                    </a>
                    <a className="text-xs mb-2 hover:text-aqua" href="contact.html">
                        Hubungi Kami
                    </a>
                </div>
                <div className="flex flex-col items-start mb-5 w-full md:w-auto">
                    <h4 className="text-sm mb-5">Akun</h4>
                    <a className="text-xs mb-2 hover:text-aqua" href="login.html">
                        Akun Anda
                    </a>
                    <a className="text-xs mb-2 hover:text-aqua" href="404.html">
                        Bantuan
                    </a>
                </div>

                <div className="w-full text-center mt-5">
                    <p className="text-xs">
                        © 2022, Chandra Lukita B - Website Serius
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

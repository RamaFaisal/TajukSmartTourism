const Footer = () => {
    return (
        <footer className="w-full bg-white py-10">
            <div className="container mx-auto px-4">
                <div className="border-b border-gray-400 pb-10 mb-10">
                    <div className="flex flex-wrap justify-between items-start">
                        <div className="w-full md:w-1/4 mb-8 md:mb-0">
                            <img
                                src="https://via.placeholder.com/222x78"
                                alt="Logo"
                                className="mb-4"
                            />
                            <p className="text-xl font-normal">Tajuk</p>
                            <p className="text-xl font-normal">
                                Kec. Getasan, Kabupaten Semarang
                                <br />
                                Jawa Tengah 50774
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 mb-8 md:mb-0">
                            <h2 className="text-4xl font-bold mb-4">
                                Jelajahi Inspirasi
                            </h2>
                            <h2 className="text-4xl font-bold mb-4">
                                Temukan Potensi
                            </h2>
                            <ul className="space-y-2">
                                <li className="text-xl font-normal">
                                    <a href="#tentang">Tentang Kami</a>
                                </li>
                                <li className="text-xl font-normal">
                                    <a href="#informasi">Informasi</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/4 mb-8 md:mb-0">
                            <ul className="space-y-2">
                                <li className="text-xl font-normal">
                                    <a href="#destinasi">Destinasi</a>
                                </li>
                                <li className="text-xl font-normal">
                                    <a href="#event">Event</a>
                                </li>
                                <li className="text-xl font-normal">
                                    <a href="#paket">Paket Wisata</a>
                                </li>
                                <li className="text-xl font-normal">
                                    <a href="#hubungi">Hubungi Kami</a>
                                </li>
                                <li className="text-xl font-normal">
                                    <a href="#privasi">Privasi</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-light">
                        © Desa Wisata Desa Tajuk - Destinasi Wisata Alam dan
                        Budaya yang Memukau.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="#facebook"
                            className="bg-black w-12 h-12 rounded-full flex items-center justify-center"
                        >
                            <img
                                src="https://via.placeholder.com/48x48"
                                alt="Facebook"
                            />
                        </a>
                        <a
                            href="#instagram"
                            className="bg-black w-12 h-12 rounded-full flex items-center justify-center"
                        >
                            <img
                                src="https://via.placeholder.com/48x48"
                                alt="Instagram"
                            />
                        </a>
                        <a
                            href="#youtube"
                            className="bg-black w-12 h-12 rounded-full flex items-center justify-center"
                        >
                            <img
                                src="https://via.placeholder.com/48x48"
                                alt="YouTube"
                            />
                        </a>
                        <a
                            href="#tiktok"
                            className="bg-black w-12 h-12 rounded-full flex items-center justify-center"
                        >
                            <img
                                src="https://via.placeholder.com/48x48"
                                alt="TikTok"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

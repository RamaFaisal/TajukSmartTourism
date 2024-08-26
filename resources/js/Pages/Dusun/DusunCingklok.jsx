import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Dusun from "@/Components/Dusun";

export default function DusunCingklok(props) {
    return (
        <div className="w-full h-full bg-white text-lg lg:text-xl flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25">
            <Head title={props.title} />
            <Navbar />

            <div className="w-full relative">
                <img
                    className="w-full h-[250px] md:h-full lg:h-[500px] object-cover"
                    src="https://drive.google.com/thumbnail?id=1gePUgAUMCqOACcfkq8KsNELgcaN6ZB92&sz=w2000"
                    alt="Pemandangan Dusun Pulihan"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full text-center">
                    <h1 className="lg:text-4xl text-3xl font-serif font-bold">
                        Dusun Cingklok Surga Oleh-Oleh Sayuran Organik Desa
                        Tajuk
                    </h1>
                </div>
            </div>

            <div className="w-full px-8 md:px-52 text-justify space-y-6 leading-relaxed">
                <p>
                    Saat berwisata tidak lengkap rasanya jika tidak membawa
                    oleh-oleh untuk teman, saudara, ataupun orang terdekat
                    lainnya. Oleh-oleh ini ada beragam bentuknya. Bahkan, hasil
                    pertanian seperti sayuran segar juga bisa menjadi oleh-oleh
                    loh. Maka dari itu, sebelum pulang dari Desa Tajuk, ada
                    baiknya kamu berkunjung ke Dusun Cingklok untuk membawa
                    oleh-oleh.
                </p>
                <p>
                    Dusun Cingklok menjadi salah satu bagian dusun yang terletak
                    di Desa Tajuk, Kecamatan Getasan, Kabupaten Semarang. Dusun
                    yang dihuni oleh sebanyak 88 Kepala Keluarga (KK) ini
                    memiliki luas lahan sekitar 1,67 Ha. Mayoritas pekerjaan
                    warga dusun adalah petani dan peternak. Kehidupan di dusun
                    ini sangat kental dengan aktivitas pertanian, dimana sayuran
                    dan susu segar menjadi hasil bumi warta setempat.
                </p>
                <p>
                    Di Dusun Cingklok, terdapat sekelompok warga yang tergabung
                    dalam Kelompok Wanita Tani (KWT) bernama ‘Mekar Asih’.
                    Kelompok ini terdiri dari sekumpulan ibu-ibu yang berinovasi
                    menghasilkan produk pertanian organik. Produk sayuran Dusun
                    Cingklok memiliki keunggulan. Hal yang paling menonjol
                    adalah bebas dari bahaya zat kimia. Hal ini dikarenakan
                    mereka memfokuskan pada upaya pembuatan pupuk dan pestisida
                    organik.
                </p>
                <p>
                    Selain itu, sayuran ini juga memiliki tingkat keawetan yang
                    cukup lama. Sayuran yang kamu bawa dari Dusun Cingklok bisa
                    bertahan 1-2 minggu. Tentunya, ini jadi pilihan oleh-oleh
                    yang ideal bagi kamu setelah berwisata di Desa Tajuk untuk
                    dibagikan kepada orang-orang terdekat.
                </p>
                <p>
                    Mengunjungi Dusun Cingklok bukan hanya tentang menikmati
                    hasil pertanian yang berkualitas. Bukan juga sekadar membeli
                    oleh-oleh untuk bekal kembali ke rumah dan dibagikan ke
                    orang-orang. Lebih daripada itu, di dusun ini kamu juga akan
                    merasakan semangat warga dusun dalam menyiapkan oleh-oleh
                    yang berkesan dan berkualitas untuk wisatawan. Terlebih,
                    semangat dari para wanita pekerja keras yang tergabung dalam
                    Kelompok Wanita Tani Mekar Asih.
                </p>
                <p>
                    Kelompok Wanita Tani Mekar Asih di Dusun Cingklok, dipimpin
                    oleh seorang tokoh yang sangat bersemangat dan penuh
                    dedikasi. Bu Darsih sapaan akrabnya. Dari yang hanya
                    beranggotakan 5-6 orang, kini kelompok tersebut sudah
                    menggaet puluhan orang untuk aktif memproduksi hasil
                    pertanian yang berkualitas. Di sini, kamu juga bisa belajar
                    lebih banyak tentang proses pertanian organik hingga
                    berdiskusi dengan para warga dusun. Khususnya yang tergabung
                    dalam kelompok tani.
                </p>
                <p>
                    Jadi, ketika kamu berkunjung ke Desa Tajuk, jangan lupa
                    untuk bersinggah di Dusun Cingklok ya. Kamu akan disambut
                    panorama alam yang menakjubkan, warga dusun yang penuh
                    keramahan, dan bawalah oleh-oleh dari dusun ini untuk
                    orang-orang tersayang.
                </p>
            </div>

            <div className="w-[370px] lg:w-[1100px] h-auto lg:h-44 relative overflow-hidden rounded-lg">
                <img
                    className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover transform transition-transform duration-500 hover:scale-110"
                    src="https://drive.google.com/thumbnail?id=1XBEW_Q-5DtOiEYmfDFHe6-4oA2peGJt-&sz=w2000"
                    alt="Beautiful Landscape"
                />

                <div className="absolute top-0 left-0 w-full h-auto lg:h-44 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg p-4">
                    <span className="text-white text-center text-xs lg:text-2xl mb-4 font-serif">
                        Langit yang biru, gunung yang megah, dan hutan yang
                        mempesona menanti Anda untuk dijelajahi
                    </span>
                    <Link
                        href="/Paket"
                        className="btn bg-white text-black text-xs py-1 px-2 sm:text-sm sm:py-2 sm:px-4 rounded hover:scale-105 transition duration-200 font-sans"
                    >
                        Lihat Paket
                    </Link>
                </div>
            </div>

            <div className="w-full h-full">
                {/* w-[1190px] */}
                <Dusun />
            </div>

            <Footer />
        </div>
    );
}

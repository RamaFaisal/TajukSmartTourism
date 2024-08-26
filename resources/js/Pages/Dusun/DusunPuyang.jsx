import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Dusun from "@/Components/Dusun";

export default function DusunPuyang(props) {
    return (
        <div className="w-full h-full bg-white text-lg lg:text-xl flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25">
            <Head title={props.title} />
            <Navbar />

            <div className="w-full relative">
                <img
                    className="w-full h-[250px] md:h-full lg:h-[500px] object-cover"
                    src="https://drive.google.com/thumbnail?id=10b8L8YDm5jkXiFGP1ZWsXBYhLpj6A6ZY&sz=w2000"
                    alt="Pemandangan Dusun Pulihan"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full text-center">
                    <h1 className="lg:text-4xl text-xl font-serif font-bold">
                        Pesona Dusun Puyang Terkait Keunikan Tradisi serta
                        Sejarah
                    </h1>
                </div>
            </div>

            <div className="w-full px-8 md:px-52 text-justify space-y-6 leading-relaxed">
                <p>
                    Pernahkah kamu mendengar tentang prasasti Matu Lawang?
                    Peninggalan sejarah tersebut bisa kamu lihat di Dusun Puyang
                    loh! Untuk menjaga kelestariannya, sesuai saran dari para
                    arkeolog, prasasti tersebut kini dikelilingi oleh pagar.
                    Dusun Puyang adalah salah satu bagian dusun di Desa Tajuk,
                    Kecamatan Getasan, Kabupaten Semarang, Jawa Tengah. Dusun
                    Puyang memiliki 11 dan Dusun Puyang termasuk dalam jumlah
                    penduduk yang paling rendah. Dusun Puyang memiliki jumlah
                    penduduk sekitar 73 Kepala Keluarga (KK)
                </p>
                <p>
                    Sebagian penduduk Dusun Puyang yang berusia sekitar 40 tahun
                    bermata pencaharian petani dan peternakan. Namun, untuk usia
                    produktif sekitar 18 tahun bekerja di suatu perusahaan
                    swasta seperti PT atau pabrik. Jaraknya kurang lebih 15
                    menit dari dusun. Terdapat berbagai hasil pertanian seperti
                    cabai, sayur kol, sayur labu siem yang didistribusikan ke
                    Pasar Kembangsari dan Ngablak, dan untuk hasil susu akan
                    didistribusikan ke koperasi desa. Pada pengambilan hasil
                    panen tidak memiliki jadwal tertentu dan tidak dapat
                    dipastikan. Hal ini dikarenakan, panen tidaknya menyesuaikan
                    kondisi musim. Misalnya, hasil panen cabai dapat diambil
                    sekitar 1 minggu sekali, berbeda dengan tembakau yang
                    hasilnya nanti dihubungkan dengan Mitra seperti Djarum
                    fertila yang berada di Magelang.
                </p>
                <p>
                    Selain pertanian ada juga aktivitas peternakan yang banyak
                    dilakukan. Ada peternakan kambing dan sapi perah. Di dusun
                    ini, aktivitas peternakan juga banyak dilakukan. Ada
                    peternakan kambing dan sapi perah. Apabila dilihat dari
                    perbandingan jumlah yang berternak, ternak kambing lebih
                    banyak dibandingkan ternak sapi perah.
                </p>
                <p>
                    Mayoritas penduduk di Dusun Puyang 90% menganut agama
                    Kristen. Penduduk yang beragama Islam dapat dikatakan
                    sedikit. Terdapat 4 gereja yang lokasinya dekat dari dusun
                    ini, yaitu GIA, GKJTU, GPDI dan GKA. Pada desa tersebut
                    memiliki organisasi PGDT atau dapat disebut dengan
                    Persekutuan Gereja Desa Tajuk. Organisasi ini bergerak untuk
                    mengadakan ibadah gabungan antara gereja-gereja yang ada di
                    desa wisata ini.
                </p>
                <p>
                    Karena mayoritas warga beragama Kristen, di Dusun Puyang
                    tidak mengikuti tradisi Saparan seperti dusun-dusun lain di
                    Desa Tajuk. Perayaan yang digelar pada dusun ini adalah
                    Natal. Ketika Natal tiba, warga merayakannya dengan penuh
                    sukacita, saling mengunjungi dari rumah ke rumah untuk
                    mempererat tali silaturahmi. Tradisi ini mencerminkan
                    kuatnya ikatan sosial di antara penduduk.
                </p>
                <p>
                    Dalam sektor ekonomi, pertanian tetap menjadi andalan warga.
                    Tembakau yang ditanam dijual ke perusahaan besar seperti
                    Djarum, tetapi ada juga pembeli lain yang menawarkan harga
                    lebih tinggi. Selain itu, hasil pertanian seperti cabai dan
                    kol dijual kepada pengepul dari luar dusun, yang kadang
                    menawarkan harga yang lebih baik. Fakta menarik lainnya, di
                    dusun ini memiliki 3 sumber utama mata air yang dikelola
                    oleh kelompok-kelompok lokal loh.
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

import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Dusun from "@/Components/Dusun";

export default function DusunSokowolu(props) {
    return (
        <div className="w-full h-full bg-white text-lg lg:text-xl flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25">
            <Head title={props.title} />
            <Navbar />

            <div className="w-full relative">
                <img
                    className="w-full h-[250px] md:h-full lg:h-[500px] object-cover"
                    src="https://drive.google.com/thumbnail?id=1cOYIPZ-ON2HP1okUehIbxOVdhD84LMS8&sz=w2000"
                    alt="Pemandangan Dusun Sokowolu"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full text-center">
                    <h1 className="lg:text-4xl text-xl font-bold">
                        Dusun Sokowolu Hadirkan Banyak Spot Wisata yang
                        Mengagumkan
                    </h1>
                </div>
            </div>

            <div className="w-full px-8 md:px-52 text-justify space-y-6 leading-relaxed text-black">
                <p>
                    Jika kamu berkunjung ke Desa Tajuk, tak lengkap jika kalian
                    tidak mampir ke Dusun Sokowolu. Dusun yang masih kental
                    dengan kearifan lokal yang jarang ditemui di perkotaan ini
                    memiliki keunikan ragam budaya. Tak hanya itu, sambutan
                    hangat dari warganya mampu memberikan energi positif bagi
                    siapapun yang datang. Dusun Sokowolu memiliki luas wilayah
                    10 Ha dan berada pada ketinggian 1200-1500 mdpl, tepatnya di
                    lereng Gunung Merbabu. Dusun ini menawarkan berbagai spot
                    wisata yang menarik untuk dikunjungi. Mulai dari wisata
                    sejarah, wisata alam, hingga oleh-oleh khasnya.
                </p>
                <p>
                    Saat pertama kali menginjakkan kaki memasuki dusun ini, kamu
                    akan merasakan keramahtamahan warga menyambut setiap
                    wisatawan yang datang untuk berkunjung. Suasana asri
                    pedesaan ditambah dengan kehangatan penduduk lokal dapat
                    menghipnotismu untuk ingin segera berkenalan dan mengetahui
                    seluk beluk dusun elok ini. Bahkan, tak jarang penyambutan
                    besar dilakukan untuk menyambut para turis asing, seperti
                    pagelaran reog yang menjadi daya tarik dari Dusun Sokowolu.
                </p>
                <p>
                    Memasuki wilayah ini lebih dalam, kamu akan menemukan para
                    penduduk lokal yang sedang beternak, bertani, berkebun, juga
                    berwirausaha yang merupakan mata pencaharian masyarakat
                    dusun ini. Mereka memiliki kebiasaan unik yaitu menanam teh
                    di antara tanaman yang lain. Teh yang dinamakan teh tiamo
                    ini memiliki ciri khas rasa yang sepet dan warna hijau
                    kekuningan. Masyarakat biasanya mengonsumsi teh ini tanpa
                    gula agar keunikan rasanya tidak hilang. Teh ini menjadi
                    oleh-oleh khas Dusun Sokowolu. Selain teh, dusun ini juga
                    menghasilkan berbagai komoditi lain, yaitu sayuran, cabai,
                    tembakau, dan beberapa jenis umbi-umbian.
                </p>
                <p>
                    Dalam sisi sejarah, Dusun Sokowolu juga memiliki bukti
                    sejarah yang masih dilestarikan oleh masyarakat, yaitu
                    Kalidrimas dan Candi Sokowolu. Jika kamu ingin mengunjungi
                    candi ini, kamu akan melewati jalan yang naik turun. Namun
                    selama perjalanan itu, kamu akan disuguhi pemandangan indah
                    Gunung Merbabu pada setiap langkah yang dilewati. Candi
                    Sokowolu terdiri dari dua reruntuhan batu Candi, dua
                    reruntuhan batu Umpak berbentuk persegi, sebuah Ratna
                    berukuran besar dan sebuah sendang atau mata air.
                </p>
                <p>
                    Tidak hanya itu, kamu masih akan dimanjakan dengan spot
                    wisata lain di dusun ini. Menghadirkan keindahan dan
                    keasrian alam yang masih terjaga, Wisata Hutan Pinus Tiamo
                    menjanjikan kesejukan dan ketenangan ketika kalian berada di
                    dalamnya. Selain pemandangan pepohonan dan langit yang
                    menawan, terdapat juga air terjun atau grojogan yang airnya
                    sangat jernih. Kamu bisa berkemah di tempat ini karena
                    kawasan ini juga merupakan kawasan perkemahan. Bayangkan
                    ketika kamu membuka mata, mendapati pepohonan rindang dan
                    suara gemericik air serta pemandangan indah dari gunung dan
                    bukit yang luas, mungkin memori kalian akan penuh dengan
                    dokumentasi di dusun ini.
                </p>
                <p>
                    Dalam bidang kewirausahaan dan seni, Dusun Sokowolu memiliki
                    Tiamo Fest: Sokowolu Culture Exhibition yang dilaksanakan
                    tahun 2023 dan TERAS (Teater Rakyat Sokowolu). Tiamo Fest
                    menyuguhkan berbagai pameran seni berupa pertunjukan seni
                    seperti seni tari, ketoprak, hingga seni pertunjukkan yang
                    telah dikemas modern yakni teater rakyat, juga terdapat
                    pameran barang-barang seni yang memiliki nilai estetika dan
                    makna simbolis tersendiri. TERAS sendiri merupakan pagelaran
                    teater atau seni yang telah dikemas menjadi teater modern
                    dan menggandeng masyarakat Dusun Sokowolu sebagai pameran.
                </p>
            </div>

            <div className="w-[330px] lg:w-[1100px] h-auto lg:h-44 relative overflow-hidden rounded-lg">
                <img
                    className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover transform transition-transform duration-500 hover:scale-110"
                    src="https://drive.google.com/thumbnail?id=1XBEW_Q-5DtOiEYmfDFHe6-4oA2peGJt-&sz=w2000"
                    alt="Beautiful Landscape"
                />

                <div className="absolute top-0 left-0 w-full h-auto lg:h-44 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg p-4">
                    <span className="text-white text-center text-xs lg:text-2xl mb-4 tracking-wide">
                        Langit yang biru, gunung yang megah, dan dusun kaya
                        budaya menanti Anda untuk dijelajahi
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

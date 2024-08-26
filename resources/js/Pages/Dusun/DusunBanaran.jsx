import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Dusun from "@/Components/Dusun";

export default function DusunBanaran(props) {
    return (
        <div className="w-full h-full bg-white text-lg lg:text-xl flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25">
            <Head title={props.title} />
            <Navbar />

            <div className="w-full relative">
                <img
                    className="w-full h-[250px] md:h-full lg:h-[500px] object-cover"
                    src="https://drive.google.com/thumbnail?id=1_GAOlMWVmPq7s_rfKoqZ1DYGpgWycRgs&sz=w2000"
                    alt="Pemandangan Dusun Banaran"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full text-center">
                    <h1 className="lg:text-4xl text-xl font-serif font-bold">
                        Dusun Banaran dengan pesona kekayaan alam dan juga
                        kelestarian budaya yang berdampingan
                    </h1>
                </div>
            </div>

            <div className="w-full px-8 md:px-52 text-justify space-y-6 leading-relaxed">
                <p>
                    Dusun Banaran, sebuah tempat yang seakan menyimpan pesona
                    tersendiri di Desa Tajuk. Dengan latar belakang struktur
                    tanah yang didominasi batuan, desa ini menjadi saksi bisu
                    betapa kerasnya kehidupan para penduduknya. Namun, di balik
                    itu semua, Dusun Banaran menyimpan kekayaan alam dan budaya
                    yang siap untuk dieksplorasi.
                </p>
                <p>
                    Mata pencaharian utama warga Dusun Banaran terbagi menjadi
                    tiga, yaitu petani sayur, buruh pabrik, dan peternak.
                    Meskipun struktur tanah yang didominasi batuan membuat
                    produksi tembakau tidak begitu maksimal, namun warga desa
                    tetap memanfaatkan lahan yang ada untuk menanam
                    sayur-sayuran sesuai dengan musim.
                </p>
                <p>
                    Selain bertani, warga Dusun Banaran juga banyak yang bekerja
                    sebagai buruh di pabrik-pabrik yang ada di sekitar desa.
                    Namun, tidak sedikit juga warga yang memilih untuk menjadi
                    peternak, khususnya peternak sapi. Sapi yang dipelihara oleh
                    warga Dusun Banaran kurang lebih sekitar 300 ekor sapi.
                </p>
                <p>
                    Salah satu yang menarik dari Dusun Banaran adalah kegiatan
                    peternakan sapinya. Pak Yetno dan Pak Samian, dua orang
                    tokoh di bidang pariwisata, menceritakan bagaimana para
                    peternak di desa ini bekerja keras untuk memelihara
                    sapi-sapi mereka.
                </p>
                <p>
                    Menurut Pak Yetno dan Pak Samian, para peternak di Dusun
                    Banaran menjual hasil susu sapi mereka melalui para
                    pengepul, mitra, dan juga dikirim ke pabrik susu nasional.
                    Terdapat tiga orang peternak yang memproduksi susu sapi
                    paling banyak di desa ini.
                </p>
                <p>
                    Selain itu, para peternak di Dusun Banaran juga memanfaatkan
                    kotoran sapi sebagai pupuk organik untuk lahan pertanian
                    mereka. Hal ini menunjukkan betapa erat hubungan antara
                    sektor peternakan dan pertanian di desa ini.
                </p>
                <p>
                    Dusun Banaran tidak hanya menawarkan kegiatan pertanian dan
                    peternakan, namun juga menyimpan potensi wisata yang
                    menarik. Salah satunya adalah Dungkluruk, sebuah tempat
                    rekreasi alam yang bisa dinikmati oleh warga desa maupun
                    pengunjung dari luar kota. Dungkluruk sendiri cocok untuk
                    keluarga yang ingin menikmati ketenangan dan juga kesejukan
                    alam dengan membawa anak-anak.
                </p>
                <p>
                    Selain itu, Dusun Banaran juga memiliki tradisi tari-tarian
                    yang masih dilestarikan hingga saat ini. Tari Gambyong dan
                    Tari Topeng Ireng adalah dua tarian yang sering dipentaskan
                    saat ada acara atau event di desa ini. Tempat latihan
                    tari-tarian ini berada di sebelah rumah Pak Kadus, yang juga
                    berfungsi sebagai tempat untuk mengadakan musyawarah warga.
                </p>
                <p>
                    Pak Kadus sendiri merupakan sosok yang sangat penting di
                    Dusun Banaran. Selain sebagai pemimpin desa, Pak Kadus juga
                    bertugas untuk mengantar-jemput anak-anak sekolah dari SDN
                    Tajuk. Hal ini menunjukkan betapa dekatnya hubungan antara
                    warga desa dengan pemimpinnya.
                </p>
                <p>
                    Menariknya, Dusun Banaran juga memiliki beberapa tradisi
                    unik, seperti Saparan dan Kenduren. Saparan adalah sebuah
                    acara adat yang dilakukan setiap tahun seperti di
                    dusun-dusun lainnya yang ada di Desa Tajuk, sementara
                    Kenduren merupakan kegiatan makan bersama yang
                    diselenggarakan di rumah Pak Kadus.
                </p>
                <p>
                    Meskipun Dusun Banaran memiliki banyak potensi, baik di
                    sektor pertanian, peternakan, maupun pariwisata, namun tak
                    dapat dipungkiri juga ada beberapa tantangan yang dihadapi
                    oleh warga desa.
                </p>
                <p>
                    Dengan segala potensi dan tantangan yang ada, Dusun Banaran
                    siap menjadi salah satu destinasi yang menarik untuk
                    dieksplorasi. Keindahan alam, kekayaan budaya, serta
                    semangat kerja keras warganya menjadikan desa ini sebagai
                    tempat yang layak untuk dikunjungi dan dinikmati.
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

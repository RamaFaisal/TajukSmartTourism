import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Dusun from "@/Components/Dusun";

export default function DusunNgroto(props) {
    return (
        <div className="w-full h-full bg-white text-lg lg:text-xl flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25">
            <Head title={props.title} />
            <Navbar />

            <div className="w-full relative">
                <img
                    className="w-full h-[250px] md:h-full lg:h-[500px] object-cover"
                    src="https://drive.google.com/thumbnail?id=1q7I_6FQLKUCzeuAB304j5Mx73G62jYwv&sz=w2000"
                    alt="Pemandangan Dusun Ngroto"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full text-center">
                    <h1 className="lg:text-4xl text-xl  font-bold">
                        Potensi Wisata Dan Keindahan Di Desa Ngroto
                    </h1>
                </div>
            </div>

            <div className="w-full px-8 md:px-52 text-justify space-y-6 leading-relaxed text-black">
                <p>
                    Pemandangan asri nan indah yang memanjakan mata, serta
                    kesejukan dan kesegaran udara pegunungan bisa menjadi
                    pilihanmu untuk beristirahat dari hiruk pikuk sibuknya
                    kehidupan di kota. Di Dusun Ngroto, kamu bisa menikmati
                    keindahan ini.
                </p>
                <p>
                    Dusun Ngroto merupakan salah satu bagian dari Desa Tajuk,
                    ,Kecamatan Getasan, Kabupaten Semarang. Desa yang berada di
                    pegunungan ini berbatasan langsung dengan Dusun Banaran dan
                    Dusun Macanan. Letaknya cukup strategis dan menyuguhkan
                    pemandangan area lereng pegunungan yang dipenuhi pepohonan
                    dengan udara yang sejuk yang tentunya memanjakan mata anda.
                </p>
                <p>
                    Berjumlah sekitar 50 KK, dusun yang mayoritas warganya
                    bermata pencaharian sebagai petani ini pastinya akan banyak
                    ditemukannya pemandangan kebun yang asri nan indah,serta
                    kondisi udaranya yang segar yang dapat melepas penat dari
                    sibuknya kepadatan kota.
                </p>
                <p>
                    Dusun ini berorientasi pada sistem Agrowisata mengingat
                    mayoritas mata pencaharian warganya adalah petani. Namun,
                    selain dari agrowisata,dusun ini juga dapat dijadikan
                    sebagai tempat untuk Trail Running, dimana kamu dapat
                    menyalurkan hobi sambil menyatu dengan alam. Menikmati
                    pemandangan pegunungan yang asri dan indah yang bermayoritas
                    adalah perkebunan dan hutan khas di pedesaan yang tidak
                    dapat kamu temui di perkotaan. Udaranya yang sejuk pula
                    dapat kamu nikmati, bersih dan bebas dari polusi. Selain
                    itu, Dusun Ngroto ini juga memiliki banyak spot untuk
                    menikmati sunset maupun sunrise yang selalu memanjakan mata.
                </p>
                <p>
                    Dusun ini juga berinovasi membuat obat-obatan alami dari
                    buah dan daun-daun yang membusuk. Hal ini dijadikan sebagai
                    obat untuk penyubur tanaman dan pembasmi hama serta lalat
                    ala warga dusun Ngroto. Berkunjung di dusun ini, kamu akan
                    mendapatkan insight baru loh seputar pertanian dari para
                    petaninya langsung.
                </p>
                <p>
                    Selain itu,ketika berkunjung ke dusun Ngroto ini,kamu bisa
                    membeli sayur-mayur dari para pengepul dan pedagang di Dusun
                    Ngroto. Harganya tentu lebih terjangkau serta kualitas dan
                    kesegaran dari sayur-mayur ini dapat bersaing dari yang
                    biasa kamu beli di supermarket maupun pasar di kota.. Selain
                    lebih segar karena langsung dipanen dari kebun para
                    petani,kualitasnya juga tak kalah jauh dari sayur-mayur yang
                    diimpor dari luar negeri.
                </p>
                <p>
                    Di Dusun Ngroto ini, juga terdapat beberapa tradisi yang
                    masih dilestarikan,yakni saparan. Dalam prakteknya sendiri,
                    para warga biasanya saling berkunjung dan bersilaturahmi
                    dari rumah satu ke rumah lain. Serta dengan beberapa kerabat
                    jauh mengunjungi dan datang menuju Dusun Ngroto. Biasanya,
                    Saparan ini diadakan tiap minggu legi ataupun senin legi.
                    Selain saparan, ada juga penampilan tradisional warok siswo
                    budoyo manunggal, sebuah kesenian budaya yang berada di
                    Jawa, yang menampilkan tarian kuda lumping dan reog klasik
                    ini dapat kamu nikmati ketika berkunjung ke Dusun Ngroto
                    ini.
                </p>
                <p>
                    Nah, bagaimana? Tertarik mencoba keindahan alam yang
                    bagaikan surga kecil di pedesaan lereng merbabu? Dusun
                    Ngroto bisa menjadi salah satu pilihan untuk menikmati
                    pemandangan alam beserta isinya.
                </p>
            </div>

            <div className="w-[330px] lg:w-[1100px] h-auto lg:h-44 relative overflow-hidden rounded-lg">
                <img
                    className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover transform transition-transform duration-500 hover:scale-110"
                    src="https://drive.google.com/thumbnail?id=1XBEW_Q-5DtOiEYmfDFHe6-4oA2peGJt-&sz=w2000"
                    alt="Beautiful Landscape"
                />

                <div className="absolute top-0 left-0 w-full h-auto lg:h-44 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg p-4">
                    <span className="text-white text-center text-xs lg:text-2xl mb-4  tracking-wide">
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

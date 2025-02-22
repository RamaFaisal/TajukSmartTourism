import { Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Dusun from "@/Components/Dusun";

export default function DusunGedong(prop) {
    return (
        <div className="w-full h-full bg-white text-lg lg:text-xl flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25">
            <Navbar />

            <div className="w-full relative">
                <img
                    className="w-full h-[250px] md:h-full lg:h-[500px] object-cover"
                    src="https://drive.google.com/thumbnail?id=16eppZkBAkD4HS1Bp-bli4ORfWYkF9ALN&sz=w2000"
                    alt="Pemandangan Dusun Gedong"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full text-center">
                    <h1 className="lg:text-4xl text-3xl  font-bold">
                        Dusun Gedong dengan Keindahan Alam dan Wisata Menariknya
                    </h1>
                </div>
            </div>

            <div className="w-full px-8 md:px-52 text-justify space-y-6 leading-relaxed text-black">
                <p>
                    Rasakan keindahan dan kenyamanan tinggal di sebuah desa yang
                    hijau dan sejuk, dengan latar belakang pegunungan yang megah
                    dan mempesona. Dikelilingi oleh kebun sayuran yang subur,
                    kebun kopi yang luas, dan susu perah yang berkualitas tinggi
                    dari sapi-sapi perah yang dirawat dengan baik. Kamu akan
                    disambut dengan ramah dan hangat oleh penduduk setempat yang
                    sangat bersahabat dan penuh perhatian. Pengalaman hidup yang
                    tenang, damai dan mempesona seperti itu bisa kamu alami di
                    dusun gedong, yang sudah ada sejak lama dan kaya akan
                    sejarah.
                </p>
                <p>
                    Dusun Gedong merupakan salah satu bagian dari dusun dari
                    Desa Tajuk, Kecamatan Getasan, Kabupaten Semarang, Jawa
                    Tengah. Dusun ini terletak di lereng gunung merbabu dengan
                    ketinggian 1.700 meter di atas permukaan laut, menjadikannya
                    sebagai pemukiman tertinggi kedua di Desa Tajuk setelah
                    Dusun Ngaduman. Dusun Gedong berada di bawah kawasan
                    Cingklok, memberikan pemandangan yang menakjubkan.
                </p>
                <p>
                    Mayoritas penduduk Dusun Gedong bekerja sebagai petani dan
                    peternak sapi perah. Sebagian besar petani di dusun ini
                    menanam berbagai jenis sayuran seperti kentang, brokoli,
                    wortel, dan buncis. Biasanya para petani berangkat ke sawah
                    pada pagi hari yang masih dingin. Hasil panen mereka dikirim
                    ke pasar-pasar di Bandungan dan Ambarawa. Sementara itu
                    hasil perahan sapi dikirimkan ke Sumogawe untuk diproses
                    lebih lanjut. Dengan cara ini, hasil kerja keras para petani
                    dan peternak tidak hanya memenuhi kebutuhan lokal tetapi
                    juga memberikan kontribusi penting terhadap perekonomian
                    daerah.
                </p>
                <p>
                    Selain pesona alamnya, Dusun Gedong juga menawarkan
                    keindahan objek wisata yang menarik. Ada satu objek wisata
                    air terjun yang tersembunyi di kawasan ini, menawarkan
                    pesona alam yang menakjubkan. Air terjun ini memiliki aliran
                    air jernih yang mengalir deras dari ketinggian dan
                    dikelilingi oleh vegetasi yang rimbun. Air terjun ini
                    menjadi tempat yang ideal untuk menikmati ketenangan alam.
                    Suasana yang tenang dan sepi memungkinkan pengunjung untuk
                    benar-benar meresapi keindahan alam tanpa gangguan, serta
                    menjadi latar belakang foto yang sangat menakjubkan.
                </p>
                <p>
                    Meskipun dusun ini memiliki jalan yang curam dan menantang
                    serta medan yang berbukit, tempat ini menawarkan wisata
                    andalan dengan pemandangan alam yang sangat memukau dan
                    menakjubkan. Wisata tersebut yaitu Gedong Pass yang juga
                    dikenal dengan sebutan Gpass. Di sini, kamu dapat menemukan
                    menara pandang bertingkat yang dirancang dengan indah. Dari
                    menara ini, kamu bisa mengambil foto dengan latar belakang
                    deretan gunung kecil dan tentu saja ikon Semarang yang
                    terkenal, yaitu Rawa Pening. Gardu pandang di Gedong Pass
                    sangat fotogenik karena memiliki desain menyerupai perahu
                    besar. Tentunya, tempat ini sangat cocok untuk dijadikan
                    latar foto yang menarik dan spektakuler. Bayangkan saja, ada
                    sebuah perahu yang terletak di ketinggian yang memungkinkan
                    kamu untuk naik dan merasakannya! Rasanya seperti melayang
                    di atas awan, memberikan pengalaman visual yang sangat
                    mempesona dan tak terlupakan
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
                <Dusun />
            </div>

            <Footer />
        </div>
    );
}

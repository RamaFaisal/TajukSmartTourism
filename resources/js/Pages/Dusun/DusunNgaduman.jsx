import { Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Dusun from "@/Components/Dusun";

export default function DusunNgaduman(prop) {
    return (
        <div className="w-full h-full bg-white text-lg lg:text-xl flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25">
            <Navbar />

            <div className="w-full relative">
                <img
                    className="w-full h-[250px] md:h-full lg:h-[500px] object-cover"
                    src="/imgDusun/dsnPulihan/Pulihan.jpg"
                    alt="Pemandangan Dusun Pulihan"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full text-center">
                    <h1 className="lg:text-4xl text-3xl font-serif font-bold">
                        Menikmati Sensasi Petik Sayur di Desa Pulihan
                    </h1>
                </div>
            </div>

            <div className="w-full px-8 md:px-44 text-justify space-y-6 leading-relaxed">
                <p>
                    Jika kamu mengunjungi <strong>Dusun Pulihan</strong>, kamu
                    akan menemukan keindahan alam yang tidak pernah ditemukan di
                    perkotaan. Terlebih lagi dusun yang dihuni kurang lebih
                    sebanyak <strong>42 Kepala Keluarga (KK)</strong> ini
                    dikelilingi oleh hutan dan pemandangan alam Gunung Merbabu.
                    Dusun yang berada di ketinggian{" "}
                    <strong>1500-1737 mdpl</strong> ini menjadi pusat aktivitas
                    kegiatan warga Desa Tajuk. Hal ini karena, di Dusun Pulihan
                    terdapat kantor kelurahan dan balai desa.
                </p>
                <p>
                    Dusun Pulihan ini memiliki suhu udara yang dingin, sehingga
                    memiliki potensi untuk pertanian. Salah satu hasil pertanian
                    yang ditonjolkan yaitu <strong>tembakau dan sayuran</strong>
                    . Aneka sayur dari hasil panen Dusun Pulihan, Kecamatan
                    Getasan ini sebagian dikonsumsi pribadi oleh warganya.
                    Namun, sebagian lagi dijual ke juragan sayur atau langsung
                    ke pasar.
                </p>
                <p>
                    Mengunjungi Dusun Pulihan ini bukan hanya untuk menikmati
                    keindahan alam ataupun membeli sayur di pasar. Namun tak ada
                    salahnya, untuk kamu mencoba petik sayur sendiri. Kamu akan
                    mendapat menemukan keseruan yang berbeda. Lain lagi, jika
                    sayur mayur yang ada baru memasuki musim tanam. Kamu juga
                    dapat merasakan untuk menanam dan merawat sayur mulai dari
                    bibit. Seru sekali bukan!
                </p>
                <p>
                    Mayoritas warga di Dusun Pulihan ini masih menganut{" "}
                    <strong>kalender Jawa</strong>. Hal itulah yang membuat
                    tradisi Jawa di dusun tersebut sangat kental dengan adanya
                    kegiatan seperti <em>malam satu suro, saparan</em>, dan lain
                    sebagainya.
                </p>
                <p>
                    Jika kamu mengunjungi Desa Tajuk di bulan September, kamu
                    dapat melihat bagaimana tradisi saparan itu digelar. Namun
                    setiap dusun memiliki penanggalan Jawa yang berbeda. Oleh
                    karena itu, untuk Dusun Pulihan sendiri mengadakan acara
                    saparan di tanggal <strong>28 September</strong>.
                </p>
                <p>
                    Warga Dusun Pulihan memiliki{" "}
                    <strong>jiwa sosial yang tinggi</strong>. Terlebih lagi, di
                    desa ini rasa saling tolong menolong dan empati antar warga
                    sangatlah tinggi. Apalagi jika ada warga yang terkena
                    musibah. Bisa dibayangkan bukan betapa tingginya empati yang
                    dimiliki oleh warga di dusun ini? Kamu juga akan merasakan
                    keramahan dan sambutan hangat para warga ketika berkunjung
                    ke sini.
                </p>
                <p>
                    Selain menawarkan keindahan alam dan beberapa tradisi, di
                    Dusun Pulihan ini juga terdapat kesenian{" "}
                    <strong>rebana</strong> yang patut diunggulkan. Di desa ini
                    mayoritas warganya beragama muslim. Oleh karena itu,
                    terdapat kegiatan keberagamaan seperti{" "}
                    <strong>TPA (Tempat Pembelajaran Al-Quran)</strong> yang
                    diperuntukan anak-anak usia 5-10 tahun dalam memperdalam
                    ilmu Al-Quran.
                </p>
                <p>
                    Jika kamu mengunjungi Desa Tajuk ini, tak ada salahnya
                    mengunjungi Dusun Pulihan juga. Kamu akan disambut dengan{" "}
                    <strong>view Gunung Merbabu</strong> yang sangat indah.
                    Selain itu kamu juga akan dapat merasakan kehangatan warga
                    lokal yang memiliki profesi sebagi petani sayur. Yuk
                    kunjungi Dusun Pulihan dan rasakan pengalaman untuk memetik
                    sayur sendiri.
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
                <Dusun />
            </div>

            <Footer />
        </div>
    );
}

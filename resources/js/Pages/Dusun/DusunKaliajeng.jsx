import { Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Dusun from "@/Components/Dusun";

export default function DusunKaliajeng(prop) {
    return (
        <div className="w-full h-full bg-white text-lg lg:text-xl flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25">
            <Navbar />

            <div className="w-full relative">
                <img
                    className="w-full h-[250px] md:h-full lg:h-[500px] object-cover"
                    src="https://drive.google.com/thumbnail?id=1bNrDW8Xtw9f_yG4Uwu8WjXI435u7IKSc&sz=w2000"
                    alt="Pemandangan Dusun Kaliajeng"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full text-center">
                    <h1 className="lg:text-4xl text-3xl font-serif font-bold">
                        Dusun Kaliajeng Oasis dengan Olahan Susu Segar yang
                        Memikat
                    </h1>
                </div>
            </div>

            <div className="w-full px-8 md:px-52 text-justify space-y-6 leading-relaxed">
                <p>
                    Betapa menyejukkan berlibur di sebuah dusun yang rindang
                    dengan kesejukan alam pegunungan. Dikelilingi oleh ladang
                    tembakau dan sayur sayuran segar, dengan kandang-kandang
                    sapi perah yang menjadi komoditas utama. Disambut dengan
                    ramah oleh penduduk lokal yang sangat bersahabat. Sensasi
                    kehidupan yang tenang dan damai seperti itu dapat kamu
                    rasakan di Dusun Kaliajeng.
                </p>
                <p>
                    Dusun Kaliajeng merupakan salah satu dusun yang berada di
                    Desa Tajuk, Kecamatan Getasan, Kabupaten Semarang, Jawa
                    Tengah yang menyimpan pesona alam dan kehangatan warganya.
                    Terletak di kaki Gunung Merbabu, dusun ini menjadi penghasil
                    susu yang dilestarikan di Desa Tajuk.
                </p>
                <p>
                    Dusun Kaliajeng memiliki total 159 kepala keluarga dengan
                    total rumah 119 rumah. Degan mayoritas penduduk disini
                    bekerja sebagai peternak sapi dan juga petani sayur.
                    Penduduk Dusun Kaliajeng melestarikan alam dan potensi dalam
                    dusun nya dengan mengelola dan mengembangkan potensi yang
                    ada menjadi sebuah ide yang cemerlang.
                </p>
                <p>
                    Kamu perlu mengetahui jika Dusun Kaliajeng memiliki produk
                    unggulan yang mereka olah dan kembangkan dari kreatifitas
                    penduduknya, yaitu susu sapi yang dijadikan yogurt dan
                    permen. Tidak hanya diolah oleh penduduk setempat Dusun
                    Kaliajeng juga mengirimkan hasil susu sapi perah nya kepada
                    pengepul, Susu Nasional, dan juga UMKM.
                </p>
                <p>
                    Namun tidak semudah itu menghasilkan susu yang berkualitas.
                    Para penduduk sangat menjaga sekali kualitas pakan sapi.
                    Karena jika pakan sapi yang diberikan kepada para sapi perah
                    itu dengan kualitas yang baik, maka susu yang dihasilkan pun
                    susu yang memiliki kualitas yang baik juga. Para penduduk
                    Dusun Kaliajeng menggunakan alat pengukur susu untuk melihat
                    kualitas dari susu yang sudah diperah.
                </p>
                <p>
                    Selain susu Dusun Kaliajeng menghasilkan sayur organik yang
                    dipasokkan ke supermarket. Supermarket yang sudah
                    bekerjasama dengan Dusun Kaliajeng sudah menyediakan
                    transportasi untuk memudahkan pengantaran sayur sayuran yang
                    akan dipasokkan. Tidak hanya sayuran Dusun Kaliajeng juga
                    memiliki hasil tani lain, yaitu Tembakau. Tembakau yang
                    dihasilkan dengan kualitas baik, maka dari itu penduduk
                    setempat memasok hasil taninya kepada perusahaan rokok,
                    salah satunya Djarum.
                </p>
                <p>
                    Di dusun tersebut memiliki kelompok tani yang aktif dalam
                    mendukung kegiatan pertanian dan peternakan penduduk
                    setempat. Di Desa Tajuk sendiri Dusun Kaliajeng dikenal
                    sebagai dusun penghasil susu terbesar di wilayah Desa
                    setempat.
                </p>
                <p>
                    Di Desa Tajuk memiliki tradisi setiap tahunnya yaitu
                    ‘Saparan’ yang diperingati oleh masyarakat muslim di desa
                    tersebut. Dusun Kaliajeng adalah salah satu dusun yang
                    memperingati tradisi Saparan, karena mayoritas penduduk di
                    Dusun Kaliajeng beragama muslim.
                </p>
                <p>
                    Saparan merupakan tradisi silaturahmi yang sudah turun
                    temurun dilakukan di Desa Tajuk, saparan sendiri biasanya
                    dilakukan di bulan Safar. Bulan safar merupakan bagian dari
                    dua belas bulan dalam satu tahun hijriah. Bulan safar
                    merupakan bukan kedua dalam kalender Qamariyah, yang dimana
                    sesudah bulan Muharram dan sebelum bulan Rabiul Awwal.
                    Aktivitas penduduk ketika sedang memperingati Saparan yaitu
                    dengan mengundang tamu dari luar dusun bahkan sampai luar
                    kota untuk datang dan bersilaturahmi setiap rumah. Saparan
                    sendiri biasanya dilakukan dalam satu hari di setiap dusun
                    nya.
                </p>
                <p>
                    Bagi kamu yang ingin berkunjung di Dusun Kaliajeng, selain
                    menikmati keindahan alam dan kehangatan warganya, kamu juga
                    dapat belajar langsung mengenai proses produksi susu dan
                    sayur organik dengan penduduk setempat. Keramahan penduduk
                    Dusun Kaliajeng akan membuat kamu merasa benar-benar
                    diterima dengan baik dan merasa nyaman untuk berlama-lama di
                    sini. Susun ini akan menjadi pengalaman yang tidak
                    terlupakan bagi kamu.
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

import { Carousel } from "flowbite-react";
import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
} from "@heroicons/react/20/solid";

import React from 'react'

const Hero = () => {
    const slides = [
        "/images/timnas6.jpg",
        "/images/timnas5.jpg",
        "/images/timnas0.png",
        "/images/timnas14.jpeg",
        "/images/timnaswp1.jpg",
        "/images/timnaswp5.jpg",
        "/images/timnaswp4.jpg",
        "/images/timnas5.jpg",
        "/images/timnas0.png",
        "/images/timnas14.jpeg",
    ];

    const features = [
        {
            name: "Push to deploy.",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
            icon: CloudArrowUpIcon,
        },
        {
            name: "SSL certificates.",
            description:
                "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
            icon: LockClosedIcon,
        },
        {
            name: "Database backups.",
            description:
                "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
            icon: ServerIcon,
        },
    ];

    return (
        <main className="w-full h-screen bg-gray-300">
            {/* konten 1 */}
            <div className="mx-auto max-w-7xl flex max-md:flex-col gap-4 px-4 py-6 sm:px-6 lg:px-8 bg-red">
                <div className="h-40 sm:h-[62dvh] w-full">
                    <Carousel>
                        {slides.map((s, index) => (
                            <img
                                key={index}
                                src={s}
                                alt={`Slide ${index + 1}`}
                                className="h-full w-full"
                            />
                        ))}
                    </Carousel>
                </div>
                <div className="w-full md:w-96">
                    <div className="grid gap-2 w-full justify-center">
                        <div className="grid shadow-lg items-center justify-center">
                            <div className="bg-white text-center rounded-sm p-2">
                                <span className="text-xs font-extrabold">ASEAN MITSHUBISHI ELECTRIC CUP 2024</span>
                                <div className="flex gap-4 items-center justify-center">
                                    <div className="grid">
                                        <img src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2" alt="indonesia" className="w-14" />
                                        <span className="text-xs">Indonesia</span>
                                    </div>
                                    <span>VS</span>
                                    <div className="grid">
                                        <img src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/23/59edf22dda948/philippine-_x70.jpg?token=6f0f401cd03391706437fe12fbeafbad" alt="philipine" className="w-14" />
                                        <span className="text-xs">Phillippines</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center bg-slate-200 p-2">
                                <div className="flex justify-center gap-2 items-center">
                                    <div className="flex items-center">
                                        <span className="font-extrabold text-3xl text-slate-500">21</span>
                                        <span className="grid text-[.7rem]">
                                            <span className="font-light leading-none">DEC</span>
                                            <span className="font-light leading-none">2024</span>
                                        </span>
                                    </div>
                                    <div className="h-full w-px bg-black"></div>
                                    <span className="line-clamp-1 text-nowrap">MANAHAN STADIUM, SURAKARTA</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white text-center rounded-sm shadow-lg">
                            <span className="text-red-500 font-bold p-2">HASIL PERTANDINGAN</span>
                            <div className="grid bg-slate-200 p-2">
                                <div className="flex items-center justify-center gap-2">
                                    <div className="flex gap-2 items-center">
                                        <span>Vietnam</span>
                                        <img src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/24/59ef31c0eab98/vietnam-_x70.png?token=9a194cfd99c17d37c71ff8e89e6e14cf" alt="vietnam" className="w-5 h-4" />
                                    </div>
                                    <div className="border border-black flex gap-1 px-2">
                                        <span>1</span>
                                        <span>vs</span>
                                        <span>0</span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <span>Indonesia</span>
                                        <img src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2" alt="indonesia" className="w-5 h-4" />
                                    </div>
                                </div>
                                <span className="text-xs text-red-500">ASEAN Mitshubishi Electric Cup 2024</span>
                            </div>
                            <div className="grid bg-whitep p-2">
                                <div className="flex items-center justify-center gap-2">
                                    <div className="flex gap-2 items-center">
                                        <span>Vietnam</span>
                                        <img src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/24/59ef31c0eab98/vietnam-_x70.png?token=9a194cfd99c17d37c71ff8e89e6e14cf" alt="vietnam" className="w-5 h-4" />
                                    </div>
                                    <div className="border flex gap-1 px-2">
                                        <span>1</span>
                                        <span>vs</span>
                                        <span>0</span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <span>Indonesia</span>
                                        <img src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2" alt="indonesia" className="w-5 h-4" />
                                    </div>
                                </div>
                                <span className="text-xs text-red-500">ASEAN Mitshubishi Electric Cup 2024</span>
                            </div>
                            <div className="grid bg-slate-200 p-2">
                                <div className="flex items-center justify-center gap-2">
                                    <div className="flex gap-2 items-center">
                                        <span>Vietnam</span>
                                        <img src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/24/59ef31c0eab98/vietnam-_x70.png?token=9a194cfd99c17d37c71ff8e89e6e14cf" alt="vietnam" className="w-5 h-4" />
                                    </div>
                                    <div className="border border-black flex gap-1 px-2">
                                        <span>1</span>
                                        <span>vs</span>
                                        <span>0</span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <span>Indonesia</span>
                                        <img src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2" alt="indonesia" className="w-5 h-4" />
                                    </div>
                                </div>
                                <span className="text-xs text-red-500">ASEAN Mitshubishi Electric Cup 2024</span>
                            </div>
                            <div className="grid bg-whitep p-2">
                                <div className="flex items-center justify-center gap-2">
                                    <div className="flex gap-2 items-center">
                                        <span>Vietnam</span>
                                        <img src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/24/59ef31c0eab98/vietnam-_x70.png?token=9a194cfd99c17d37c71ff8e89e6e14cf" alt="vietnam" className="w-5 h-4" />
                                    </div>
                                    <div className="border flex gap-1 px-2">
                                        <span>1</span>
                                        <span>vs</span>
                                        <span>0</span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <span>Indonesia</span>
                                        <img src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2" alt="indonesia" className="w-5 h-4" />
                                    </div>
                                </div>
                                <span className="text-xs text-red-500">ASEAN Mitshubishi Electric Cup 2024</span>
                            </div>
                            <div className="grid bg-slate-200 p-2">
                                <div className="flex items-center justify-center gap-2">
                                    <div className="flex gap-2 items-center">
                                        <span>Vietnam</span>
                                        <img src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/24/59ef31c0eab98/vietnam-_x70.png?token=9a194cfd99c17d37c71ff8e89e6e14cf" alt="vietnam" className="w-5 h-4" />
                                    </div>
                                    <div className="border border-black flex gap-1 px-2">
                                        <span>1</span>
                                        <span>vs</span>
                                        <span>0</span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <span>Indonesia</span>
                                        <img src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2" alt="indonesia" className="w-5 h-4" />
                                    </div>
                                </div>
                                <span className="text-xs text-red-500">ASEAN Mitshubishi Electric Cup 2024</span>
                            </div>
                            <div className="grid bg-whitep p-2">
                                <div className="flex items-center justify-center gap-2">
                                    <div className="flex gap-2 items-center">
                                        <span>Vietnam</span>
                                        <img src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/24/59ef31c0eab98/vietnam-_x70.png?token=9a194cfd99c17d37c71ff8e89e6e14cf" alt="vietnam" className="w-5 h-4" />
                                    </div>
                                    <div className="border flex gap-1 px-2">
                                        <span>1</span>
                                        <span>vs</span>
                                        <span>0</span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <span>Indonesia</span>
                                        <img src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2" alt="indonesia" className="w-5 h-4" />
                                    </div>
                                </div>
                                <span className="text-xs text-red-500">ASEAN Mitshubishi Electric Cup 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* konten2 */}
            <div className="bg-gray-300 py-1 sm:pt-0 sm:pb-5">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold text-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300 sm:text-5xl">
                BERITA TERBARU
            </p>
            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        <div className="relative lg:row-span-1 h-96 hover:scale-105 transform transition duration-300 ease-in-out">
            <div className="absolute inset-px lg:rounded-tl-[2rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-25"></div>
            <div className="bg-white relative flex h-full flex-col overflow-hidden lg:rounded-tl-[calc(2rem+1px)] hover:shadow-xl hover:shadow-gray-500 transition-shadow duration-300">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                    <img className="w-full h-38 object-cover rounded-lg" src="https://www.pssi.org/files/uploads/news/image/2024/Dec/14/675d826f6b838/pssi-vietnam-240x170.jpg?token=6de6056bfc2bbbfee9ba5ed2f3cbefe6" alt="Shin Tae-yong" />
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center hover:text-indigo-600">
                        Shin Tae-yong: Timnas Indonesia Siap Berjuang Maksimal
                    </p>
                    <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center hover:text-gray-700 overflow-hidden text-ellipsis">
                        Pelatih Timnas Indonesia, Shin Tae-yong, memastikan timnya akan memberikan yang terbaik saat menghadapi Vietnam di pertandingan ketiga Grup B ASEAN Mitsubishi Electric Cup (AMEC) 2024.

                        Pertandingan ini akan berlangsung pada Minggu, 15 Desember 2024, di Stadion Viet Tri, Vietnam.

                        Saat konferensi pers sebelum pertandingan, Shin Tae-yong mengakui bahwa padatnya jadwal menjadi tantangan besar bagi skuad Garuda. Setelah menang tipis 1-0 atas Myanmar di laga perdana, Timnas harus kembali ke Indonesia sebelum bermain imbang melawan Laos di laga kedua. Kini, tim kembali menjalani pertandingan tandang ke Vietnam dalam waktu singkat.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative max-lg:row-start-1 h-96 hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="absolute inset-px bg-white max-lg:rounded-t-[2rem]"></div>
        <div className="relative flex h-full flex-col overflow-hidden">
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <img
                    className="w-full h-38"
                    src="https://www.pssi.org/files/uploads/news/image/2024/Dec/14/675d69395fa9c/dsc08126-240x170.jpg?token=a11889e11e953332ca967ff44501adbc"
                    alt=""
                />
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    PSSI Gembira Kenaikan Peringkat Timnas Putri Indonesia di FIFA
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Ketua Umum PSSI, Erick Thohir, senang kepada hasil tim nasional putri Indonesia yang berhasil menaikkan peringkat FIFA menjadi 97 dalam kurun waktu kurang dari satu tahun. Kenaikan peringkat ini menunjukkan kemajuan yang signifikan bagi sepak bola wanita Indonesia dan membuktikan bahwa kerja keras PSSI, pelatih Satoru Mochizuki (Mochi), pemain dan semua pihak yang percaya sepak bola putri ada dan nyata.

                    Erick Thohir, "Kami di PSSI terus bekerja keras untuk membuat program yang baik, para pemain yang dipilih juga baik, pelatih melakukan persiapan yang baik dan semua yang terlibat dalam perjalanan timnas putri. Kenaikan peringkat ini adalah hasil dari sinergi yang solid."
                </p>
            </div>
            <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                    className="w-full max-lg:max-w-xs"
                    src=""
                    alt=""
                />
            </div>
            </div>
     
    
                            <div className="pointer-events-none absolute inset-px shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                        </div>
                        <div className="relative max-lg:row-start-3 lg:col-start-2 h-96 lg:row-start-2 hover:shadow-lg hover:scale-105 hover:bg-gray-100 transition-transform duration-300 ease-in-out">
        <div className="absolute inset-px bg-white"></div>
        <div className="relative flex h-full flex-col overflow-hidden">
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <img
                    className="w-full h-38"
                    src="https://www.pssi.org/files/uploads/news/image/2024/Dec/14/675d69f636edb/day-1-11-240x170.jpg?token=ba66522fb2f59e5bbab09424bdb1740d"
                    alt=""
                />
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Indonesia Jadi Sorotan di Forum Sepakbola eSports AFC Perdana di Kuala Lumpur
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Prestasi gemilang Indonesia dalam dunia eSports kembali menjadi perhatian dalam Forum Sepak Bola eSports pertama yang digelar oleh Konfederasi Sepak Bola Asia (AFC) pada 11-12 Desember 2024 di Hotel Hyatt Place, Kuala Lumpur, Malaysia. Acara ini mengumpulkan pakar eSports dan perwakilan anggota AFC untuk membahas pengembangan ekosistem eSports sepakbola di Asia.

                    Indonesia, yang sukses meraih gelar juara pada AFC eAsian Cup 2023, menjadi salah satu pembicara utama dalam forum ini. Wakil dari PSSI, Rahmatul Aufa dan Surya Binanga mendapat kesempatan mempresentasikan program kerja yang menjadi kunci sukses Indonesia menjuarai AFC eAsian Cup 2023 dan FIFAe World Cup 2024 eFootball kategori console. Program ini dijadikan percontohan bagi federasi sepakbola lain tentang bagaimana mengelola eSports secara efektif untuk mencetak prestasi internasional.
                </p>
            </div>
            <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <img
                    className="h-[min(152px,40cqw)] object-cover"
                    src=""
                    alt=""
                />
            </div>
        </div>
    
                            <div className="pointer-events-none absolute inset-px shadow ring-1 ring-black/5"></div>
                        </div>
                        <div className="relative lg:row-span-1 h-96 hover:shadow-lg hover:scale-105 hover:bg-gray-100 transition-transform duration-300 ease-in-out">
        <div className="absolute inset-px lg:rounded-tr-[2rem]"></div>
        <div className="bg-white relative flex h-full flex-col overflow-hidden lg:rounded-tr-[calc(2rem+1px)]">
            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <img
                    className="w-full h-38"
                    src="https://www.pssi.org/files/uploads/news/image/2024/Dec/15/675e559215ba2/whatsapp-image-2024-12-13-at-00-08-24-240x170.jpeg?token=62e0169c60c65f0e72f2cfa0ea8a2d9d"
                    alt=""
                />
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Timnas Esports Indonesia Juara FIFAe World Cup 2024 Kategori Console
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Timnas Esports Indonesia berhasil meraih gelar juara FIFAe World Cup 2024 kategori console yang digelar di Riyadh, Arab Saudi.

                    Keberhasilan ini dicapai berkat penampilan gemilang Rizky Faidan, Elga Cahya, dan M Akbar Paudie yang mengalahkan wakil Brasil dalam dua game.

                    Pada pertandingan pertama, Indonesia berhasil meraih kemenangan dramatis 2-1 atas Brasil, dengan dua gol tercipta pada menit-menit akhir yang membuat para pendukung Indonesia semakin bersorak.

                    Di game kedua, Indonesia kembali menunjukkan dominasi dengan kemenangan yang sama, 2-1, dan memastikan trofi FIFAe World Cup edisi perdana untuk Indonesia.

                    Pada babak penyisihan grup, wakil Indonesia untuk kategori console tampil impresif dengan mengumpulkan 19 poin dari 8 pertandingan. Hasil memastikan Indonesia lolos ke perempat final dan bertemu Maroko.
                </p>
            </div>
        </div>
                            <div className="pointer-events-none absolute inset-px shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]"></div>
                        </div>
                        <div className="relative lg:row-span-1 h-96 hover:shadow-lg hover:scale-105 hover:bg-gray-100 transition-all duration-300 ease-in-out">
        <div className="absolute inset-px bg-white max-lg:rounded-b-[2rem] lg:rounded-bl-[2rem]"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-l-[calc(2rem+1px)]">
            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <img
                    className="w-full h-38"
                    src="https://www.pssi.org/files/uploads/news/image/2024/Dec/10/675865e1ca13d/ben00357-240x170.jpg?token=873d82c169b33a7c5e1292cc1a82e7c4"
                    alt=""
                />
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    PSSI melalui PT. GSI dan Erspo Libatkan Garuda Fans dalam Sayembara Jersey Baru Timnas Indonesia
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Jakarta, 10 Desember 2024 – Persatuan Sepakbola Seluruh Indonesia (PSSI) melalui PT. Garuda Sepak Bola Indonesia (GSI) bersama Erspo, mitra resmi apparel Timnas Indonesia, secara resmi mengumumkan pelaksanaan sayembara untuk desain jersey terbaru Timnas Indonesia. Inisiatif ini melibatkan para Garuda Fans secara aktif, mulai dari proses pembuatan desain hingga pemilihan melalui mekanisme polling online.

                    Pengumuman ini disampaikan dalam konferensi pers yang digelar di kantor Erspo, FX Lantai 7, Jakarta. Dalam kesempatan tersebut, Anggota Komite Eksekutif (Exco) PSSI, Arya Sinulingga menegaskan bahwa langkah ini merupakan kali pertama PSSI melakukan proses pembuatan Jersey Timnas Indonesia yang melibatkan para fans dalam upaya memajukan sepakbola nasional.
                </p>
            </div>
        </div>
    
                            <div className="pointer-events-none absolute inset-px shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-bl-[2rem]"></div>
                        </div>
                        <div className="relative lg:row-span-1 h-96 hover:shadow-lg hover:scale-105 hover:bg-gray-100 transition-all duration-300 ease-in-out">
        <div className="absolute inset-px bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <img
                    className="w-full h-38"
                    src="https://www.pssi.org/files/uploads/news/image/2024/Dec/12/675a510806602/ysp08650-240x170.jpg?token=0941bce9dfab907a594b9f14158bef77"
                    alt=""
                />
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Marselino: Bermain di Kandang Jadi Motivasi Tambahan untuk Garuda
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Gelandang Timnas Indonesia, Marselino Ferdinan, mengungkapkan perasaannya menjelang pertandingan kedua Piala ASEAN Mitsubishi Electric Cup (AMEC) 2024 melawan Laos.

                    Dalam konferensi pers jelang pertandingan, Marselino mengakui tantangan yang dirasakan tim setelah perjalanan jauh dari Myanmar usai laga perdana.

                    “Kami kembali dari Myanmar, memang pertama kali saya travel seperti ini. Biasanya waktu AFF sebelumnya kita stay di Jakarta. Jadi saya sendiri merasa sedikit lelah,” ujar Marselino.

                    Namun, pemain berusia 20 tahun tersebut menegaskan bahwa bermain di kandang memberikan energi dan motivasi tambahan bagi dirinya dan rekan-rekan. Ia menyebut bahwa dukungan langsung dari suporter di Stadion Manahan Solo akan menjadi dorongan penting untuk memberikan performa maksimal.
                </p>
            </div>
        </div>
    
    
                            <div className="pointer-events-none absolute inset-px shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4 hover:scale-105 transform transition-transform duration-300">
                    <div className="lg:max-w-lg">
                        <h2 className="text-base/7 font-semibold text-red-700">
                            SEMUA MOMEN PENTING
                        </h2>
                        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            MOMEN PENTING TERBARU
                        </p>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit.
                            Maiores impedit perferendis suscipit
                            eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </p>
                        <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                            {features.map((feature) => (
                                <div
                                    key={feature.name}
                                    className="relative pl-9"
                                >
                                    <dt className="inline font-semibold text-gray-900">
                                        <feature.icon
                                            aria-hidden="true"
                                            className="absolute left-1 top-1 size-5 text-indigo-600"
                                        />
                                        {feature.name}
                                    </dt>{" "}
                                    <dd className="inline">
                                        {feature.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
                <img
                    alt="Product screenshot"
                    src="/images/timnaswp4.jpg"
                    width={2432}
                    height={1442}
                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 hover:scale-105 transform transition-transform duration-300"
                />
            </div>
        </div>
    </div>


            {/* footer */}
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>© 2024 GarudaZone. All rights reserved.</p>
                    <div className="mt-2">
                        <a
                            href="https://www.example.com"
                            className="text-gray-400 hover:text-white mx-2"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="https://www.example.com"
                            className="text-gray-400 hover:text-white mx-2"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    )
}
  
export default Hero
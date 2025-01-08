import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";
import { useState } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Menu } from "react-feather";
import { usePage } from "@inertiajs/react";

const navigation = [
    { name: "HOME", href: "/", current: false },
    { name: "KABAR BOLA", href: "/kabar-bola", current: true },
    { name: "SEJARAH", href: "/sejarah", current: false },
    { name: "PERTANDINGAN", href: "/pertandingan", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const userNavigation = [
    { name: "Logout", href: "#" },
];

const user = {
    name: "RancaGp",
    email: "tom@example.com",
    imageUrl: "/images/ranca.jpg",
};

export default function Match() {
    const { auth } = usePage().props || {};
    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            <div className="w-full">
                <Disclosure
                    as="nav"
                    className="bg-red-700 sticky z-10 top-0 w-full"
                >
                    <div className="max-w-7xl pr-4 sm:pr-6 lg:pr-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="skew-x-12 origin-bottom-left bg-white w-20">
                                    <img
                                        alt="GarudaZone"
                                        src="/images/garudazone.png"
                                        className="h-16 mx-auto"
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                aria-current={
                                                    item.current
                                                        ? "page"
                                                        : undefined
                                                }
                                                className={classNames(
                                                    item.current
                                                        ? "bg-red-900 text-black"
                                                        : "text-gray-300 hover:bg-red-900 hover:text-black",
                                                    "rounded-md px-3 py-2 text-sm font-medium"
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            {auth?.user ? (
                                                <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <img
                                                        alt=""
                                                        src={user.imageUrl}
                                                        className="h-8 w-8 rounded-full"
                                                    />
                                                </MenuButton>
                                            ) : (
                                                <>
                                                    <a
                                                        href="/register"
                                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-red-900 hover:text-black uppercase"
                                                    >
                                                        Register
                                                    </a>
                                                    <a
                                                        href="/login"
                                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-red-900 hover:text-black uppercase"
                                                    >
                                                        Login
                                                    </a>
                                                </>
                                            )}
                                        </div>
                                        <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                                            {userNavigation.map((item) => (
                                                <MenuItem key={item.name}>
                                                    <a
                                                        href={item.href}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    >
                                                        {item.name}
                                                    </a>
                                                </MenuItem>
                                            ))}
                                            <MenuItem>
                                                <button
                                                    onClick={() =>
                                                        router.post("/logout")
                                                    }
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-start"
                                                >
                                                    Logout
                                                </button>
                                            </MenuItem>
                                        </MenuItems>
                                    </Menu>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <DisclosureButton className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    <Bars3Icon
                                        className="block h-6 w-6"
                                        aria-hidden="true"
                                    />
                                    <XMarkIcon
                                        className="hidden h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-black"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-black",
                                        "block rounded-md px-3 py-2 text-base font-medium"
                                    )}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </DisclosurePanel>
                </Disclosure>
            </div>

            {/* Container Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 mx-auto w-full sm:w-10/12 lg:w-9/12 xl:w-8/12">
                {/* Isi Berita */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Shin Tae-yong: Timnas Indonesia Siap Berjuang Maksimal
                    </h1>
                    <img
                        src="https://www.pssi.org/files/uploads/news/image/2024/Dec/14/675d826f6b838/pssi-vietnam-_x600.jpg?token=2f634388119272750865ec65219a10d9"
                        alt="Image Berita"
                        className="w-full object-contain mb-4"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mb-6">
                        <span>15 Desember 2024</span>
                        <span>Penulis: John Doe</span>
                    </div>
                </div>

                {/* Isi Berita */}
                <div className="mb-8">
                    <p className="text-lg text-gray-700 mb-4">
                        Pelatih Timnas Indonesia, Shin Tae-yong, memastikan
                        timnya akan memberikan yang terbaik saat menghadapi
                        Vietnam di pertandingan ketiga Grup B ASEAN Mitsubishi
                        Electric Cup (AMEC) 2024. Pertandingan ini akan
                        berlangsung pada Minggu, 15 Desember 2024, di Stadion
                        Viet Tri, Vietnam. Saat konferensi pers sebelum
                        pertandingan, Shin Tae-yong mengakui bahwa padatnya
                        jadwal menjadi tantangan besar bagi skuad Garuda.
                        Setelah menang tipis 1-0 atas Myanmar di laga perdana,
                        Timnas harus kembali ke Indonesia sebelum bermain imbang
                        melawan Laos di laga kedua. Kini, tim kembali menjalani
                        pertandingan tandang ke Vietnam dalam waktu singkat.
                        "Pertandingan besok akan sangat sulit. Jadwal yang padat
                        membuat tim kami kelelahan. Tim kami rata-rata berusia
                        di bawah 20 tahun, sehingga dari segi pengalaman dan
                        kompetisi internasional, kami sedikit kurang
                        dibandingkan dengan Vietnam," ujar Shin Tae-yong. Meski
                        begitu, pelatih berusia 54 tahun tersebut tetap
                        optimistis. Ia menegaskan bahwa pertandingan ini akan
                        menjadi pembelajaran berharga bagi para pemain muda dan
                        menyatakan bahwa Timnas akan berjuang maksimal. “Kami
                        berharap pertandingan ini memberikan pengalaman penting
                        bagi para pemain. Meski berat, kami akan tetap berusaha
                        semaksimal mungkin,” tambahnya. Saat ini, Indonesia
                        telah mengoleksi empat poin dari dua pertandingan. Hasil
                        pertandingan melawan Vietnam akan menjadi penentu
                        peluang Garuda untuk melaju ke babak semifinal.
                    </p>
                </div>

                {/* Rekomendasi Berita Lainnya */}
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Rekomendasi Berita
                    </h2>
                    {/* Grid untuk Rekomendasi Berita */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Berita 1 */}
                        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                            <img
                                src="https://www.pssi.org/files/uploads/news/image/2024/Nov/12/673376ec422e2/whatsapp-image-2024-11-12-at-22-37-31-_x600.jpeg?token=e93c5c2f49cc7cf41eb6a5df8d8b84b0"
                                alt="Image Berita 1"
                                className="w-full h-40 object-cover mb-4"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    STY Matangkan Persiapan Indonesia Jelang
                                    Lawan Jepang
                                </h3>
                                <p className="text-sm text-gray-600">
                                    15 Desember 2024
                                </p>
                                <a
                                    href="/kabar-bola/slug"
                                    className="text-red-700 hover:text-red-900 mt-2 inline-block"
                                >
                                    Baca Selengkapnya
                                </a>
                            </div>
                        </div>

                        {/* Berita 2 */}
                        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                            <img
                                src="https://www.pssi.org/files/uploads/news/image/2024/Nov/02/6725ab47a6c26/fai00093-_x600.jpg?token=fb64d2711cbac8e936cbbfc94081bfe3"
                                alt="Image Berita 2"
                                className="w-full h-40 object-cover mb-4"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Hadapi Jepang dan Arab Saudi, Timnas
                                    Indonesia Panggil 27 Pemain
                                </h3>
                                <p className="text-sm text-gray-600">
                                    14 Desember 2024
                                </p>
                                <a
                                    href="/kabar-bola/slug"
                                    className="text-red-700 hover:text-red-900 mt-2 inline-block"
                                >
                                    Baca Selengkapnya
                                </a>
                            </div>
                        </div>

                        {/* Berita 3 */}
                        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                            <img
                                src="https://www.pssi.org/files/uploads/news/image/2024/Nov/16/67382be8ce748/whatsapp-image-2024-11-16-at-12-21-05-_x600.jpeg?token=81a75e0ddcee18bfc40817c70a3b9a6a"
                                alt="Image Berita 3"
                                className="w-full h-40 object-cover mb-4"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Motivasi Keras Erick Thohir di Ruang Ganti,
                                    Minta Seluruhnya Lakukan Introspeksi
                                </h3>
                                <p className="text-sm text-gray-600">
                                    13 Desember 2024
                                </p>
                                <a
                                    href="/kabar-bola/slug"
                                    className="text-red-700 hover:text-red-900 mt-2 inline-block"
                                >
                                    Baca Selengkapnya
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tombol Kembali */}
                <div className="text-center">
                    <a
                        href="/kabar-bola"
                        className="inline-block bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-800"
                    >
                        Kembali ke Daftar Berita
                    </a>
                </div>
            </div>
        </>
    );
}

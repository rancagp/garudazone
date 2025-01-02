import Footer from "@/Components/Button";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const navigation = [
    { name: "HOME", href: "/", current: false },
    { name: "KABAR BOLA", href: "/kabar-bola", current: true },
    { name: "SEJARAH", href: "/sejarah", current: false },
    { name: "PERTANDINGAN", href: "/pertandingan", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Match() {
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

            <div className="w-full">
                <div className="flex flex-wrap justify-center p-6 gap-6">
                    {/* Cards 1 */}
                    <div className="bg-white shadow-md rounded-lg w-80 sm:w-80 flex-shrink-0 group transition-transform duration-300 transform hover:scale-105">
                        <div className="overflow-hidden rounded-t-lg">
                            <img
                                src="https://www.pssi.org/files/uploads/news/image/2024/Dec/14/675d826f6b838/pssi-vietnam-_x600.jpg?token=2f634388119272750865ec65219a10d9"
                                alt="Timnas Senior"
                                className="rounded-t-lg w-full h-56 sm:h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-4">
                            <a
                                href="/kabar-bola/slug"
                                className="bg-white shadow-md rounded-md"
                            >
                                <h3 className="font-bold text-lg mb-2 text-black group-hover:text-red-500 transition-colors duration-300">
                                    Shin Tae-yong: Timnas Indonesia Siap
                                    Berjuang Maksimal
                                </h3>
                            </a>
                            <p className="text-gray-600 mb-4">14/12/2024</p>
                        </div>
                    </div>

                    {/* Cards 2 */}
                    <div className="bg-white shadow-md rounded-lg w-80 sm:w-80 flex-shrink-0 group transition-transform duration-300 transform hover:scale-105">
                        <div className="overflow-hidden rounded-t-lg">
                            <img
                                src="https://www.pssi.org/files/uploads/news/image/2024/Dec/14/675d69395fa9c/dsc08126-_x600.jpg?token=12f31af58b571e252d1044d8e6966a82"
                                alt="Timnas Senior"
                                className="rounded-t-lg w-full h-56 sm:h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-4">
                            <a
                                href="/kabar-bola/slug"
                                className="bg-white shadow-md rounded-md"
                            >
                                <h3 className="font-bold text-lg mb-2 text-black group-hover:text-red-500 transition-colors duration-300">
                                    PSSI Gembira Kenaikan Peringkat Timnas Putri
                                </h3>
                            </a>
                            <p className="text-gray-600 mb-4">14/12/2024</p>
                        </div>
                    </div>

                    {/* Cards 3 */}
                    <div className="bg-white shadow-md rounded-lg w-80 sm:w-80 flex-shrink-0 group transition-transform duration-300 transform hover:scale-105">
                        <div className="overflow-hidden rounded-t-lg">
                            <img
                                src="https://www.pssi.org/files/uploads/news/image/2024/Dec/14/675d69f636edb/day-1-11-_x600.jpg?token=65329ed10aa4da8dc01d62dfb21651bc"
                                alt="Timnas Senior"
                                className="rounded-t-lg w-full h-56 sm:h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-4">
                            <a
                                href="/kabar-bola/slug"
                                className="bg-white shadow-md rounded-md"
                            >
                                <h3 className="font-bold text-lg mb-2 text-black group-hover:text-red-500 transition-colors duration-300">
                                    Indonesia Jadi Sorotan di Forum Sepakbola
                                    eSports AFC Perdana di Kuala Lumpur
                                </h3>
                            </a>
                            <p className="text-gray-600 mb-4">14/12/2024</p>
                        </div>
                    </div>

                    {/* Cards 4 */}
                    <div className="bg-white shadow-md rounded-lg w-80 sm:w-80 flex-shrink-0 group transition-transform duration-300 transform hover:scale-105">
                        <div className="overflow-hidden rounded-t-lg">
                            <img
                                src="https://www.pssi.org/files/uploads/news/image/2024/Dec/15/675e559215ba2/whatsapp-image-2024-12-13-at-00-08-24-_x600.jpeg?token=5ac5607ade351fd893985baf9c6a822b"
                                alt="Timnas Senior"
                                className="rounded-t-lg w-full h-56 sm:h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-4">
                            <a
                                href="/kabar-bola/slug"
                                className="bg-white shadow-md rounded-md"
                            >
                                <h3 className="font-bold text-lg mb-2 text-black group-hover:text-red-500 transition-colors duration-300">
                                    Timnas Esports Indonesia Juara FIFAe World
                                    Cup 2024 Kategori Console
                                </h3>
                            </a>
                            <p className="text-gray-600 mb-4">14/12/2024</p>
                        </div>
                    </div>

                    {/* Cards 5 */}
                    <div className="bg-white shadow-md rounded-lg w-80 sm:w-80 flex-shrink-0 group transition-transform duration-300 transform hover:scale-105">
                        <div className="overflow-hidden rounded-t-lg">
                            <img
                                src="https://www.pssi.org/files/uploads/news/image/2024/Dec/10/675865e1ca13d/ben00357-_x600.jpg?token=3f513ef130ce71e2ad1a3b98ff057816"
                                alt="Timnas Senior"
                                className="rounded-t-lg w-full h-56 sm:h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-4">
                            <a
                                href="/kabar-bola/slug"
                                className="bg-white shadow-md rounded-md"
                            >
                                <h3 className="font-bold text-lg mb-2 text-black group-hover:text-red-500 transition-colors duration-300">
                                    PSSI melalui PT. GSI dan Erspo Libatkan
                                    Garuda Fans dalam Sayembara Jersey Baru
                                    Timnas Indonesia
                                </h3>
                            </a>
                            <p className="text-gray-600 mb-4">14/12/2024</p>
                        </div>
                    </div>

                    {/* Cards 6 */}
                    <div className="bg-white shadow-md rounded-lg w-80 sm:w-80 flex-shrink-0 group transition-transform duration-300 transform hover:scale-105">
                        <div className="overflow-hidden rounded-t-lg">
                            <img
                                src="https://www.pssi.org/files/uploads/news/image/2024/Dec/14/675d6899a0d2f/whatsapp-image-2024-12-14-at-16-07-09-_x600.jpeg?token=3742de6ebe5f477d0aff9bb78b56ef89"
                                alt="Timnas Senior"
                                className="rounded-t-lg w-full h-56 sm:h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-4">
                            <a
                                href="/kabar-bola/slug"
                                className="bg-white shadow-md rounded-md"
                            >
                                <h3 className="font-bold text-lg mb-2 text-black group-hover:text-red-500 transition-colors duration-300">
                                    Resmi Dibuka, 146 Pertandingan PNM Liga
                                    Nusantara 2024/25 Disiarkan Live
                                </h3>
                            </a>
                            <p className="text-gray-600 mb-4">14/12/2024</p>
                        </div>
                    </div>

                    {/* Cards 7 */}
                    <div className="bg-white shadow-md rounded-lg w-80 sm:w-80 flex-shrink-0 group transition-transform duration-300 transform hover:scale-105">
                        <div className="overflow-hidden rounded-t-lg">
                            <img
                                src="https://www.pssi.org/files/uploads/news/image/2024/Dec/11/67597fbe7ef8e/whatsapp-image-2024-12-11-at-18-05-11-_x600.jpeg?token=47f8017d8a59f5dd797caab5a889685a"
                                alt="Timnas Senior"
                                className="rounded-t-lg w-full h-56 sm:h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-4">
                            <a
                                href="/kabar-bola/slug"
                                className="bg-white shadow-md rounded-md"
                            >
                                <h3 className="font-bold text-lg mb-2 text-black group-hover:text-red-500 transition-colors duration-300">
                                    26 Pemain Dipanggil, Timnas U20 Siap
                                    Bertarung di Piala Asia 2025
                                </h3>
                            </a>
                            <p className="text-gray-600 mb-4">14/12/2024</p>
                        </div>
                    </div>

                    {/* Cards 8 */}
                    <div className="bg-white shadow-md rounded-lg w-80 sm:w-80 flex-shrink-0 group transition-transform duration-300 transform hover:scale-105">
                        <div className="overflow-hidden rounded-t-lg">
                            <img
                                src="https://www.pssi.org/files/uploads/news/image/2024/Dec/12/675a510806602/ysp08650-_x600.jpg?token=b331a7ef3c366649c948a4a373a92a6d"
                                alt="Timnas Senior"
                                className="rounded-t-lg w-full h-56 sm:h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-4">
                            <a
                                href="/kabar-bola/slug"
                                className="bg-white shadow-md rounded-md"
                            >
                                <h3 className="font-bold text-lg mb-2 text-black group-hover:text-red-500 transition-colors duration-300">
                                    Marselino: Bermain di Kandang Jadi Motivasi
                                    Tambahan untuk Garuda
                                </h3>
                            </a>
                            <p className="text-gray-600 mb-4">14/12/2024</p>
                        </div>
                    </div>

                    {/* Cards 9 */}
                    <div className="bg-white shadow-md rounded-lg w-80 sm:w-80 flex-shrink-0 group transition-transform duration-300 transform hover:scale-105">
                        <div className="overflow-hidden rounded-t-lg">
                            <img
                                src="https://www.pssi.org/files/uploads/news/image/2024/Dec/12/675a50bbb8823/ysp08635-_x600.jpg?token=45b8caa8528e4d79da3d4d2d5877df02"
                                alt="Timnas Senior"
                                className="rounded-t-lg w-full h-56 sm:h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-4">
                            <a
                                href="/kabar-bola/slug"
                                className="bg-white shadow-md rounded-md"
                            >
                                <h3 className="font-bold text-lg mb-2 text-black group-hover:text-red-500 transition-colors duration-300">
                                    Jelang Hadapi Laos, Shin Tae-yong Minta
                                    Dukungan Garuda Fans
                                </h3>
                            </a>
                            <p className="text-gray-600 mb-4">14/12/2024</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination under cards */}
            <div className="w-full">
                <div className="flex flex-wrap justify-center p-6 gap-6">
                    {/* Pagination */}
                    <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                        <div className="flex sm:flex-1 sm:items-center sm:justify-center">
                            <div>
                                <nav
                                    aria-label="Pagination"
                                    className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                >
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-red-200 focus:z-20 focus:outline-offset-0"
                                    >
                                        <span className="sr-only">
                                            Previous
                                        </span>
                                        <ChevronLeftIcon
                                            aria-hidden="true"
                                            className="size-5"
                                        />
                                    </a>
                                    <a
                                        href="#"
                                        aria-current="page"
                                        className="relative z-10 inline-flex items-center bg-red-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 hover:bg-red-700"
                                    >
                                        1
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-red-200 focus:z-20 focus:outline-offset-0"
                                    >
                                        2
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-red-200 focus:z-20 focus:outline-offset-0"
                                    >
                                        3
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-red-200 focus:z-20 focus:outline-offset-0"
                                    >
                                        4
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-red-200 focus:z-20 focus:outline-offset-0"
                                    >
                                        5
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-red-200 focus:z-20 focus:outline-offset-0"
                                    >
                                        <span className="sr-only">Next</span>
                                        <ChevronRightIcon
                                            aria-hidden="true"
                                            className="size-5"
                                        />
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 GarudaZone. All rights reserved.</p>
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
        </>
    );
}

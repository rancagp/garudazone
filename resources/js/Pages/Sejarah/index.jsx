import {
    Button,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";
import React, { useRef, useState } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePage } from "@inertiajs/react";
import { Menu } from "react-feather";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../css/style.css";
import { Pagination } from "swiper/modules";

const navigation = [
    { name: "HOME", href: "/", current: false },
    { name: "KABAR BOLA", href: "/kabar-bola", current: false },
    { name: "SEJARAH", href: "/sejarah", current: true },
    { name: "PERTANDINGAN", href: "/pertandingan", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const user = {
    name: "RancaGp",
    email: "tom@example.com",
    imageUrl: "/images/ranca.jpg",
};

const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
];

export default function Match() {
    const { auth } = usePage().props;
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
                                        className="w-16 h-16 mx-auto"
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
                                            {auth.user ? (
                                                <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="absolute -inset-1.5" />
                                                    <img
                                                        alt=""
                                                        src={user.imageUrl}
                                                        className="w-8 h-8 rounded-full"
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
                                        <MenuItems
                                            transition
                                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none"
                                        >
                                            {userNavigation.map((item) => (
                                                <MenuItem key={item.name}>
                                                    <a
                                                        href={item.href}
                                                        className="block px-4 py-2 text-sm text-gray-700"
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
                                                    className="block px-4 py-2 text-sm text-gray-700 w-full text-start"
                                                >
                                                    Logout
                                                </button>
                                            </MenuItem>
                                        </MenuItems>
                                    </Menu>
                                </div>
                            </div>

                            <div className="-mr-2 flex md:hidden">
                                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    <Bars3Icon
                                        aria-hidden="true"
                                        className="block w-6 h-6 group-data-[open]:hidden"
                                    />
                                    <XMarkIcon
                                        aria-hidden="true"
                                        className="hidden w-6 h-6 group-data-[open]:block"
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
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
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
                        <div className="border-t border-gray-700 pb-3 pt-4">
                            <div className="flex items-center px-5">
                                <div className="shrink-0">
                                    <img
                                        alt=""
                                        src={user.imageUrl}
                                        className="w-10 h-10 rounded-full"
                                    />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-black">
                                        {user.name}
                                    </div>
                                    <div className="text-sm font-medium text-gray-400">
                                        {user.email}
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">
                                        View notifications
                                    </span>
                                    <BellIcon
                                        aria-hidden="true"
                                        className="w-6 h-6"
                                    />
                                </button>
                            </div>
                            <div className="mt-3 space-y-1 px-2">
                                {userNavigation.map((item) => (
                                    <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-black"
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))}
                            </div>
                        </div>
                    </DisclosurePanel>
                </Disclosure>

                <Swiper
                    direction={"vertical"}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <h1>Piala Dunia 1938</h1>
                        <p>
                            Hindia-Belanda yang kemudian menjadi Indonesia
                            merupakan negara Asia pertama yang ikut serta dalam
                            Piala Dunia FIFA pada tahun 1938.
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Piala Asia Pertama 1996</h1>
                        <p>
                            Timnas Indonesia kali pertama lolos dari kualifikasi
                            Piala Asia pada edisi 1996. Tergabung di Grup 4
                            bersama India dan tuan rumah Malaysia, Ansyari Lubis
                            dan kolega meraih tiket ke putaran final di Uni
                            Emirat Arab. Indonesia lolos setelah unggul selisih
                            gol dengan Malaysia yang sama-sama meraup poin 4.
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Pencetak Gol Terbanyak</h1>
                        <p>
                            Abdul kadir adalah pemain timnas indonesia dengan
                            gol terbanyak. Torehan dengan 70 gol dari 111 laga
                            menjadikan Abdul Kadir sebagai Pencetak Goal
                            Terbanyak Timnas jauh diatas Soetjipto Soentoro
                            dengan torehan 57 goal.
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Kemenangan Terbesar</h1>
                        <p>
                            Indonesia mencatatkan kemenangan terbesar di Piala
                            AFF saat menggunduli Filipina 13-1 pada 2022.
                            Pertandingan itu berlangsung di Stadion Utama Gelora
                            Bung Karno pada 23 Desember 2002.
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Lolos Piala Asia 2027</h1>
                        <p>
                            Timnas Indonesia tidak perlu manjalani Kualifikasi
                            piala asia 2027, karena timnas indonesia berhasil
                            masuk putaran ketiga piala dunia 2026, ini pertama
                            kalinya Indonesia lolos piala asia tanpa harus
                            menjalani kualifikasi piala asia 2027.
                        </p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

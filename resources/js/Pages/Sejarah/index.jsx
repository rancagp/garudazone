import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";
import React, { useState } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePage } from "@inertiajs/react";
import { Menu } from "react-feather";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../css/style.css";
import { Pagination } from "swiper/modules";
import Navbar from "@/Components/navbar";

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
                <Navbar />

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

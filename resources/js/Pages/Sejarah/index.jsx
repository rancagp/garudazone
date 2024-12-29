import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../css/style.css";
import { Pagination } from "swiper/modules";
import Navbar from "@/Components/navbar";

export default function Match() {

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

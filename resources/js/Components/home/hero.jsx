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
        </main>
    )
}

export default Hero
import {
    Button,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";
import { useState } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePage } from "@inertiajs/react";
import { Menu } from "react-feather";
import Navbar from "@/Components/navbar";

const navigation = [
    { name: "HOME", href: "/", current: false },
    { name: "KABAR BOLA", href: "/kabar-bola", current: false },
    { name: "SEJARAH", href: "/sejarah", current: false },
    { name: "PERTANDINGAN", href: "/pertandingan", current: true },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const user = {
    name: "RancaGp",
    email: "tom@example.com",
    imageUrl: "/images/ranca.jpg", // Ganti dengan path relatif ke file gambar lokal
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
            <Navbar />
            <div className="grid w-3/4 shadow-lg mx-auto mt-4">
                <div className="grid text-center gap-4 p-5 font-extrabold">
                    <p>ASEAN MITSHUBISHI ELECTRIC CUP 2024</p>
                    <div className="grid grid-cols-3 items-center">
                        <div className="flex flex-col justify-between items-center">
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-140x92.png?token=0ba48f74da007fa4bfaf996bb0559131"
                                alt="indo"
                                className="w-20"
                            />
                            <span>Indonesia</span>
                        </div>
                        <div className="flex flex-col items-center justify-between gap-5">
                            <span className="text-xl font-bold">VS</span>
                            <Button
                                className={
                                    "border border-red-500 w-max mx-auto px-4 py-2"
                                }
                            >
                                Beli Tiket
                            </Button>
                        </div>
                        <div className="flex flex-col items-center justify-between">
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/29/59f5fbc952d55/laos-140x92.png?token=03cc59fd1d26595996b8aa160d3fdf74"
                                alt="laos"
                                className="w-20"
                            />
                            <span>Laos</span>
                        </div>
                    </div>
                </div>
                <div className="grid border p-4 bg-slate-100/50">
                    <div className="flex items-center justify-center gap-1">
                        <span className="text-4xl font-extrabold">12</span>
                        <div className="grid">
                            <span>DEC</span>
                            <span className="-mt-2">2024</span>
                        </div>
                    </div>
                    <p className="text-center font-extrabold">
                        MANAHAN STADIUM, SURAKARTA
                    </p>
                </div>
                <div className="grid text-center p-4">
                    <p>Thursday, 20 March 2025 | 07.00 PM</p>
                </div>
                <div className="grid text-center bg-slate-100/50 p-4 border gap-4">
                    <p className="text-red-500 text-center font-extrabold">
                        FIFA World Cup Qualifiers
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <span>Australia</span>
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2019/Oct/21/5dad7e3b61d3f/australia-_x70.png?token=0fab09662d1165ec7ee4ca6cb3013133"
                                alt="australia"
                                className="w-10"
                            />
                        </div>
                        <div className="border flex gap-2 px-4 py-2">
                            <span>{/* score home */}</span>
                            <span>-</span>
                            <span>{/* score away */}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2"
                                alt="indonesia"
                                className="w-10"
                            />
                            <span>Indonesia</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <img
                            src="https://www.pssi.org/assets/img/stadion.png"
                            alt="stadion"
                            className="w-5"
                        />
                        <span className="text-xs">TBA</span>
                    </div>
                </div>
                <div className="grid text-center p-4">
                    <p>Thursday, 25 March 2025 | 07.00 PM</p>
                </div>
                <div className="grid text-center bg-slate-100/50 p-4 border gap-4">
                    <p className="text-red-500 text-center font-extrabold">
                        FIFA World Cup Qualifiers
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <span>Indonesia</span>
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2"
                                alt="indonesia"
                                className="w-10"
                            />
                        </div>
                        <div className="border flex gap-2 px-4 py-2">
                            <span>{/* score home */}</span>
                            <span>-</span>
                            <span>{/* score away */}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2018/Apr/02/5ac217744d919/bahrain-_x70.png?token=a78a26e15fcadca21e2a95398c74059e"
                                className="w-10"
                            />
                            <span>Bahrain</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <img
                            src="https://www.pssi.org/assets/img/stadion.png"
                            alt="stadion"
                            className="w-5"
                        />
                        <span className="text-xs">TBA</span>
                    </div>
                </div>
                <div className="grid text-center p-4">
                    <p>Thursday, 5 June 2025 | 07.00 PM</p>
                </div>
                <div className="grid text-center bg-slate-100/50 p-4 border gap-4">
                    <p className="text-red-500 text-center font-extrabold">
                        FIFA World Cup Qualifiers
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <span>Indonesia</span>
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2"
                                alt="indonesia"
                                className="w-10"
                            />
                        </div>
                        <div className="border flex gap-2 px-4 py-2">
                            <span>{/* score home */}</span>
                            <span>-</span>
                            <span>{/* score away */}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/23/59edfc54506b0/china-_x70.png?token=c96a49b24299b33978012669cc9e1095"
                                alt="china pr"
                                className="w-10"
                            />
                            <span>China PR</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <img
                            src="https://www.pssi.org/assets/img/stadion.png"
                            alt="stadion"
                            className="w-5"
                        />
                        <span className="text-xs">TBA</span>
                    </div>
                </div>
                <div className="grid text-center p-4">
                    <p>Thursday,10 June 2025 | 01.00 PM</p>
                </div>
                <div className="grid text-center bg-slate-100/50 p-4 border gap-4">
                    <p className="text-red-500 text-center font-extrabold">
                        FIFA World Cup Qualifiers
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <span>Jepan</span>
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2023/Nov/28/6565912548407/japan-_x70.png?token=bd8d111e7db03d8ed98fb50e472660dc"
                                alt="jepan"
                                className="w-10"
                            />
                        </div>
                        <div className="border flex gap-2 px-4 py-2">
                            <span>{/* score home */}</span>
                            <span>-</span>
                            <span>{/* score away */}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2"
                                alt="indonesia"
                                className="w-10"
                            />
                            <span>Indonesia</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <img
                            src="https://www.pssi.org/assets/img/stadion.png"
                            alt="stadion"
                            className="w-5"
                        />
                        <span className="text-xs">TBA</span>
                    </div>
                </div>
            </div>
            <div className="grid w-3/4 shadow-lg mx-auto my-4">
                <div className="grid text-center gap-4 p-5">
                    <p className="font-extrabold">HASIL PERTANDINGAN</p>
                    <div className="grid text-center p-4">
                        <p>Thursday,10 June 2025 | 01.00 PM</p>
                    </div>
                </div>
                <div className="grid text-center bg-slate-100/50 p-4 border gap-4">
                    <p className="text-red-500 text-center font-extrabold">
                        FIFA World Cup Qualifiers
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <span>Australia</span>
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2019/Oct/21/5dad7e3b61d3f/australia-_x70.png?token=0fab09662d1165ec7ee4ca6cb3013133"
                                alt="australia"
                                className="w-10"
                            />
                        </div>
                        <div className="border flex gap-2 px-4 py-2">
                            <span>1</span>
                            <span>-</span>
                            <span>10</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2"
                                alt="indonesia"
                                className="w-10"
                            />
                            <span>Indonesia</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <img
                            src="https://www.pssi.org/assets/img/stadion.png"
                            alt="stadion"
                            className="w-5"
                        />
                        <span className="text-xs">TBA</span>
                    </div>
                </div>
                <div className="grid text-center p-4">
                    <p>Thursday,10 June 2025 | 01.00 PM</p>
                </div>
                <div className="grid text-center bg-slate-100/50 p-4 border gap-4">
                    <p className="text-red-500 text-center font-extrabold">
                        FIFA World Cup Qualifiers
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <span>Australia</span>
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2019/Oct/21/5dad7e3b61d3f/australia-_x70.png?token=0fab09662d1165ec7ee4ca6cb3013133"
                                alt="australia"
                                className="w-10"
                            />
                        </div>
                        <div className="border flex gap-2 px-4 py-2">
                            <span>1</span>
                            <span>-</span>
                            <span>10</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2"
                                alt="indonesia"
                                className="w-10"
                            />
                            <span>Indonesia</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <img
                            src="https://www.pssi.org/assets/img/stadion.png"
                            alt="stadion"
                            className="w-5"
                        />
                        <span className="text-xs">TBA</span>
                    </div>
                </div>
                <div className="grid text-center p-4">
                    <p>Thursday,10 June 2025 | 01.00 PM</p>
                </div>
                <div className="grid text-center bg-slate-100/50 p-4 border gap-4">
                    <p className="text-red-500 text-center font-extrabold">
                        FIFA World Cup Qualifiers
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <span>Australia</span>
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2019/Oct/21/5dad7e3b61d3f/australia-_x70.png?token=0fab09662d1165ec7ee4ca6cb3013133"
                                alt="australia"
                                className="w-10"
                            />
                        </div>
                        <div className="border flex gap-2 px-4 py-2">
                            <span>1</span>
                            <span>-</span>
                            <span>10</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2"
                                alt="indonesia"
                                className="w-10"
                            />
                            <span>Indonesia</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <img
                            src="https://www.pssi.org/assets/img/stadion.png"
                            alt="stadion"
                            className="w-5"
                        />
                        <span className="text-xs">TBA</span>
                    </div>
                </div>
                <div className="grid text-center p-4">
                    <p>Thursday,10 June 2025 | 01.00 PM</p>
                </div>
                <div className="grid text-center bg-slate-100/50 p-4 border gap-4">
                    <p className="text-red-500 text-center font-extrabold">
                        FIFA World Cup Qualifiers
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <span>Australia</span>
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2019/Oct/21/5dad7e3b61d3f/australia-_x70.png?token=0fab09662d1165ec7ee4ca6cb3013133"
                                alt="australia"
                                className="w-10"
                            />
                        </div>
                        <div className="border flex gap-2 px-4 py-2">
                            <span>1</span>
                            <span>-</span>
                            <span>10</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2"
                                alt="indonesia"
                                className="w-10"
                            />
                            <span>Indonesia</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <img
                            src="https://www.pssi.org/assets/img/stadion.png"
                            alt="stadion"
                            className="w-5"
                        />
                        <span className="text-xs">TBA</span>
                    </div>
                </div>
                <div className="grid text-center p-4">
                    <p>Thursday,10 June 2025 | 01.00 PM</p>
                </div>
                <div className="grid text-center bg-slate-100/50 p-4 border gap-4">
                    <p className="text-red-500 text-center font-extrabold">
                        FIFA World Cup Qualifiers
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <span>Australia</span>
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2019/Oct/21/5dad7e3b61d3f/australia-_x70.png?token=0fab09662d1165ec7ee4ca6cb3013133"
                                alt="australia"
                                className="w-10"
                            />
                        </div>
                        <div className="border flex gap-2 px-4 py-2">
                            <span>1</span>
                            <span>-</span>
                            <span>10</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2"
                                alt="indonesia"
                                className="w-10"
                            />
                            <span>Indonesia</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <img
                            src="https://www.pssi.org/assets/img/stadion.png"
                            alt="stadion"
                            className="w-5"
                        />
                        <span className="text-xs">TBA</span>
                    </div>
                </div>
                <div className="grid text-center p-4">
                    <p>Thursday,10 June 2025 | 01.00 PM</p>
                </div>
                <div className="grid text-center bg-slate-100/50 p-4 border gap-4">
                    <p className="text-red-500 text-center font-extrabold">
                        FIFA World Cup Qualifiers
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <span>Australia</span>
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2019/Oct/21/5dad7e3b61d3f/australia-_x70.png?token=0fab09662d1165ec7ee4ca6cb3013133"
                                alt="australia"
                                className="w-10"
                            />
                        </div>
                        <div className="border flex gap-2 px-4 py-2">
                            <span>1</span>
                            <span>-</span>
                            <span>10</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2"
                                alt="indonesia"
                                className="w-10"
                            />
                            <span>Indonesia</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <img
                            src="https://www.pssi.org/assets/img/stadion.png"
                            alt="stadion"
                            className="w-5"
                        />
                        <span className="text-xs">TBA</span>
                    </div>
                </div>
                <div className="grid text-center p-4">
                    <p>Thursday,10 June 2025 | 01.00 PM</p>
                </div>
                <div className="grid text-center bg-slate-100/50 p-4 border gap-4">
                    <p className="text-red-500 text-center font-extrabold">
                        FIFA World Cup Qualifiers
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <span>Australia</span>
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2019/Oct/21/5dad7e3b61d3f/australia-_x70.png?token=0fab09662d1165ec7ee4ca6cb3013133"
                                alt="australia"
                                className="w-10"
                            />
                        </div>
                        <div className="border flex gap-2 px-4 py-2">
                            <span>1</span>
                            <span>-</span>
                            <span>10</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2"
                                alt="indonesia"
                                className="w-10"
                            />
                            <span>Indonesia</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <img
                            src="https://www.pssi.org/assets/img/stadion.png"
                            alt="stadion"
                            className="w-5"
                        />
                        <span className="text-xs">TBA</span>
                    </div>
                </div>
                <div className="grid text-center p-4">
                    <p>Thursday,10 June 2025 | 01.00 PM</p>
                </div>
                <div className="grid text-center bg-slate-100/50 p-4 border gap-4">
                    <p className="text-red-500 text-center font-extrabold">
                        FIFA World Cup Qualifiers
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <span>Australia</span>
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2019/Oct/21/5dad7e3b61d3f/australia-_x70.png?token=0fab09662d1165ec7ee4ca6cb3013133"
                                alt="australia"
                                className="w-10"
                            />
                        </div>
                        <div className="border flex gap-2 px-4 py-2">
                            <span>1</span>
                            <span>-</span>
                            <span>10</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2"
                                alt="indonesia"
                                className="w-10"
                            />
                            <span>Indonesia</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <img
                            src="https://www.pssi.org/assets/img/stadion.png"
                            alt="stadion"
                            className="w-5"
                        />
                        <span className="text-xs">TBA</span>
                    </div>
                </div>
                <div className="grid text-center p-4">
                    <p>Thursday,10 June 2025 | 01.00 PM</p>
                </div>
                <div className="grid text-center bg-slate-100/50 p-4 border gap-4">
                    <p className="text-red-500 text-center font-extrabold">
                        FIFA World Cup Qualifiers
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <span>Australia</span>
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2019/Oct/21/5dad7e3b61d3f/australia-_x70.png?token=0fab09662d1165ec7ee4ca6cb3013133"
                                alt="australia"
                                className="w-10"
                            />
                        </div>
                        <div className="border flex gap-2 px-4 py-2">
                            <span>1</span>
                            <span>-</span>
                            <span>10</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2"
                                alt="indonesia"
                                className="w-10"
                            />
                            <span>Indonesia</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <img
                            src="https://www.pssi.org/assets/img/stadion.png"
                            alt="stadion"
                            className="w-5"
                        />
                        <span className="text-xs">TBA</span>
                    </div>
                </div>
                <div className="grid text-center p-4">
                    <p>Thursday,10 June 2025 | 01.00 PM</p>
                </div>
                <div className="grid text-center bg-slate-100/50 p-4 border gap-4">
                    <p className="text-red-500 text-center font-extrabold">
                        FIFA World Cup Qualifiers
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <span>Australia</span>
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2019/Oct/21/5dad7e3b61d3f/australia-_x70.png?token=0fab09662d1165ec7ee4ca6cb3013133"
                                alt="australia"
                                className="w-10"
                            />
                        </div>
                        <div className="border flex gap-2 px-4 py-2">
                            <span>1</span>
                            <span>-</span>
                            <span>10</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2"
                                alt="indonesia"
                                className="w-10"
                            />
                            <span>Indonesia</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <img
                            src="https://www.pssi.org/assets/img/stadion.png"
                            alt="stadion"
                            className="w-5"
                        />
                        <span className="text-xs">TBA</span>
                    </div>
                </div>
                <div className="grid text-center p-4">
                    <p>Thursday,10 June 2025 | 01.00 PM</p>
                </div>
                <div className="grid text-center bg-slate-100/50 p-4 border gap-4">
                    <p className="text-red-500 text-center font-extrabold">
                        FIFA World Cup Qualifiers
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <span>Australia</span>
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2019/Oct/21/5dad7e3b61d3f/australia-_x70.png?token=0fab09662d1165ec7ee4ca6cb3013133"
                                alt="australia"
                                className="w-10"
                            />
                        </div>
                        <div className="border flex gap-2 px-4 py-2">
                            <span>1</span>
                            <span>-</span>
                            <span>10</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2"
                                alt="indonesia"
                                className="w-10"
                            />
                            <span>Indonesia</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <img
                            src="https://www.pssi.org/assets/img/stadion.png"
                            alt="stadion"
                            className="w-5"
                        />
                        <span className="text-xs">TBA</span>
                    </div>
                </div>
                <div className="grid text-center p-4">
                    <p>Thursday,10 June 2025 | 01.00 PM</p>
                </div>
                <div className="grid text-center bg-slate-100/50 p-4 border gap-4">
                    <p className="text-red-500 text-center font-extrabold">
                        FIFA World Cup Qualifiers
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <span>Australia</span>
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2019/Oct/21/5dad7e3b61d3f/australia-_x70.png?token=0fab09662d1165ec7ee4ca6cb3013133"
                                alt="australia"
                                className="w-10"
                            />
                        </div>
                        <div className="border flex gap-2 px-4 py-2">
                            <span>1</span>
                            <span>-</span>
                            <span>10</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://www.pssi.org/files/uploads/club/logo_url/2017/Oct/09/59db3b8bc9256/id-_x70.png?token=186559410932fb7c8b06c08c67bde4e2"
                                alt="indonesia"
                                className="w-10"
                            />
                            <span>Indonesia</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <img
                            src="https://www.pssi.org/assets/img/stadion.png"
                            alt="stadion"
                            className="w-5"
                        />
                        <span className="text-xs">TBA</span>
                    </div>
                </div>
                <div className="grid text-center p-4">
                    <Button
                        className={
                            "bg-red-500 w-max text-white rounded-sm px-4 py-2 mx-auto"
                        }
                    >
                        Selengkapnya
                    </Button>
                </div>
            </div>
        </>
    );
}

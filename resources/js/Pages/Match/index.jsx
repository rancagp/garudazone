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
                                        className="size-16 mx-auto"
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
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            {auth.user ? (
                                                <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="absolute -inset-1.5" />
                                                    <img
                                                        alt=""
                                                        src={user.imageUrl}
                                                        className="size-8 rounded-full"
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
                                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            {userNavigation.map((item) => (
                                                <MenuItem key={item.name}>
                                                    <a
                                                        href={item.href}
                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
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
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none w-full text-start"
                                                >
                                                    Logout
                                                </button>
                                            </MenuItem>
                                        </MenuItems>
                                    </Menu>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                {/* Mobile menu button */}
                                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    <Bars3Icon
                                        aria-hidden="true"
                                        className="block size-6 group-data-[open]:hidden"
                                    />
                                    <XMarkIcon
                                        aria-hidden="true"
                                        className="hidden size-6 group-data-[open]:block"
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
                                        className="size-10 rounded-full"
                                    />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base/5 font-medium text-black">
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
                                        className="size-6"
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
            </div>
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

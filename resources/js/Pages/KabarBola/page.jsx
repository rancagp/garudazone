import Footer from "@/Components/Button";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Menu } from "react-feather";
import { usePage, Link } from "@inertiajs/react";
 import { Head } from "@inertiajs/react";

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

const formatDate = (dateString) => {
 const date = new Date(dateString);
 const options = {
   day: '2-digit',
   month: 'long',
   year: 'numeric',
   hour: 'numeric',
   minute: '2-digit',
   hour12: true,
 };
return date.toLocaleDateString('en-US', options).replace(' at ', ', ');
};


export default function Match({ post }) {
    const { auth } = usePage().props || {};
    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
             <Head title={post.title} />
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
                                                        alt="Profile"
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
                    <img
                        src={post.image}
                        alt="Image Berita"
                        className="w-full object-contain mb-4"
                    />
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                        {post.title}
                    </h1>

                    <div className="flex justify-between text-sm text-gray-500 mb-6">
                        <span>{formatDate(post.created_at)} | Author : {post.author.name}</span>
                    </div>

                    {/* Isi Berita */}
                    <p className="text-lg text-gray-800 mb-4">
                        {post.content}
                    </p>


                </div>

                {/* Tombol Kembali */}
                <div className="text-center">
                    <Link
                        href="/kabar-bola"
                        className="inline-block bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-800"
                    >
                        Kembali ke Berita Kabar Bola
                    </Link>
                </div>
            </div>
                {/* Footer */}
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
        </>
    );
}
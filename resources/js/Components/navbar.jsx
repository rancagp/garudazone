import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePage } from '@inertiajs/react';
import React from 'react'

const Navbar = () => {
    const user = {
        name: "RancaGp",
        email: "tom@example.com",
        imageUrl: "/images/ranca.jpg",
    };

    const navigation = [
        { name: "HOME", href: "/" },
        { name: "KABAR BOLA", href: "/kabar-bola" },
        { name: "SEJARAH", href: "/sejarah" },
        { name: "PERTANDINGAN", href: "/pertandingan" },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    const { props, url } = usePage();

    const userNavigation = [
        { name: "Your Profile", href: "#" },
        { name: "Settings", href: "#" },
    ];

    return (
        <Disclosure
            as={'nav'}
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
                                        className={classNames(
                                            url === item.href
                                                ? "bg-red-900 text-white"
                                                : "text-gray-300 hover:bg-red-900 hover:text-white",
                                            "rounded-md px-3 py-2 text-sm font-medium"
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navbar Desktop */}
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    {props.auth.user ? (
                                        <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <img
                                                alt=""
                                                src={user.imageUrl || auth.user.avatar}
                                                className="size-8 rounded-full"
                                            />
                                        </MenuButton>
                                    ) : (
                                        <>
                                            <a
                                                href="/register"
                                                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-red-900 hover:text-white uppercase"
                                            >
                                                Register
                                            </a>
                                            <a
                                                href="/login"
                                                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-red-900 hover:text-white uppercase"
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
                    {/* End Navbar Desktop */}

                    {/* Navbar Mobile Button */}
                    <div className="-mr-2 flex md:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
                    {/* End Navbar Mobile Button */}
                </div>
            </div>

            {/* Navbar Mobile Menu */}
            <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            as='a'
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                url === item.href
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
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
                            <div className="text-base/5 font-medium text-white">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-400">
                                {user.email}
                            </div>
                        </div>
                        <DisclosureButton
                            type="button"
                            className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">
                                View notifications
                            </span>
                            <BellIcon
                                aria-hidden="true"
                                className="size-6"
                            />
                        </DisclosureButton>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                        {userNavigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                </div>
            </DisclosurePanel>
            {/* End Navbar Mobile Menu */}
        </Disclosure>
    )
}

export default Navbar

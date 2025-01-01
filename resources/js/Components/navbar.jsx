import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuItem, MenuItems } from '@headlessui/react';
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

    const guestNavigation = [
        { name: "Login", href: "/login" },
        { name: "Register", href: "/register" },
    ];

    return (
        <Disclosure
            as={'nav'}
            className="sticky top-0 z-10 w-full bg-red-700"
        >
            <div className="pr-4 max-w-7xl sm:pr-6 lg:pr-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="w-20 origin-bottom-left skew-x-12 bg-white">
                            <img
                                alt="GarudaZone"
                                src="/images/garudazone.png"
                                className="mx-auto size-16"
                            />
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-baseline ml-10 space-x-4">
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
                        <div className="flex items-center ml-4 md:ml-6">
                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    {props.auth.user ? (
                                        <MenuButton className="relative flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <img
                                                alt=""
                                                src={user.imageUrl}
                                                className="rounded-full size-8"
                                            />
                                        </MenuButton>
                                    ) : (
                                        <>
                                            <a
                                                href="/register"
                                                className="px-3 py-2 text-sm font-medium text-gray-300 uppercase rounded-md hover:bg-red-900 hover:text-white"
                                            >
                                                Register
                                            </a>
                                            <a
                                                href="/login"
                                                className="px-3 py-2 text-sm font-medium text-gray-300 uppercase rounded-md hover:bg-red-900 hover:text-white"
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
                    <div className="flex -mr-2 md:hidden">
                        <DisclosureButton className="relative inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md group hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
                <div className="pt-4 pb-3 border-t border-gray-700">
                    {
                        props.auth.user && (
                            <div className="flex items-center px-5">
                                <div className="shrink-0">
                                    <img
                                        alt=""
                                        src={user.imageUrl}
                                        className="rounded-full size-10"
                                    />
                                </div>
                                <div className="ml-3">
                                    <div className="font-medium text-white text-base/5">
                                        {user.name}
                                    </div>
                                    <div className="text-sm font-medium text-gray-400">
                                        {user.email}
                                    </div>
                                </div>
                                <DisclosureButton
                                    type="button"
                                    className="relative p-1 ml-auto text-gray-400 bg-gray-800 rounded-full shrink-0 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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
                        )
                    }
                    <div className="px-2 mt-3 space-y-1">
                        {
                            props.auth.user ? (
                                userNavigation.map((item) => (
                                    <DisclosureButton
                                        as='a'
                                        key={item.name}
                                        href={item.href}
                                        className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:bg-gray-700 hover:text-white"
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))
                            ) : (
                                guestNavigation.map((item) => (
                                    <DisclosureButton
                                        as='a'
                                        key={item.name}
                                        href={item.href}
                                        className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:bg-gray-700 hover:text-white"
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))
                            )
                        }
                    </div>
                </div>
            </DisclosurePanel>
            {/* End Navbar Mobile Menu */}
        </Disclosure>
    )
}

export default Navbar

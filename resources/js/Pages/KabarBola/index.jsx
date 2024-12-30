import Navbar from "@/Components/navbar";

export default function Match() {
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

                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            {auth?.user ? (
                                                <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <img
                                                        alt=""
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

            <div className="flex flex-col min-h-screen justify-center items-center pt-15">
                {" "}
                {/* Menambahkan padding top agar tidak tertutup navbar */}
                <div className="flex flex-wrap justify-center p-6 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white shadow-md rounded-md w-56 flex-shrink-0">
                        <img
                            src="https://www.pssi.org/files/uploads/news/image/2024/Dec/14/675d826f6b838/pssi-vietnam-_x600.jpg?token=2f634388119272750865ec65219a10d9"
                            alt="Timnas Senior"
                            className="rounded-t-md w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <a
                                href="/kabar-bola/slug"
                                className="bg-white shadow-md rounded-md w-56 flex-shrink-0"
                            >
                                <h3 className="font-bold text-lg mb-2">
                                    Shin Tae-yong: Timnas Indonesia Siap
                                    Berjuang Maksimal
                                </h3>
                            </a>
                            <p className="text-gray-600 mb-4">14/12/2024</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-md rounded-md w-56 flex-shrink-0">
                        <img
                            src="https://www.pssi.org/files/uploads/news/image/2024/Dec/14/675d69395fa9c/dsc08126-_x600.jpg?token=12f31af58b571e252d1044d8e6966a82"
                            alt="Timnas Senior"
                            className="rounded-t-md w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <a
                                href="/kabar-bola/slug"
                                className="bg-white shadow-md rounded-md w-56 flex-shrink-0"
                            >
                                <h3 className="font-bold text-lg mb-2">
                                    PSSI Gembira Kenaikan Peringkat Timnas Putri
                                    Indonesia di FIFA
                                </h3>
                            </a>
                            <p className="text-gray-600 mb-4">14/12/2024</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-md rounded-md w-56 flex-shrink-0">
                        <img
                            src="https://www.pssi.org/files/uploads/news/image/2024/Dec/14/675d69f636edb/day-1-11-_x600.jpg?token=65329ed10aa4da8dc01d62dfb21651bc"
                            alt="Timnas Senior"
                            className="rounded-t-md w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <a
                                href="/kabar-bola/slug"
                                className="bg-white shadow-md rounded-md w-56 flex-shrink-0"
                            >
                                <h3 className="font-bold text-lg mb-2">
                                    Indonesia Jadi Sorotan di Forum Sepakbola
                                    eSports AFC Perdana di Kuala Lumpur
                                </h3>
                            </a>
                            <p className="text-gray-600 mb-4">14/12/2024</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white shadow-md rounded-md w-56 flex-shrink-0">
                        <img
                            src="https://www.pssi.org/files/uploads/news/image/2024/Dec/15/675e559215ba2/whatsapp-image-2024-12-13-at-00-08-24-_x600.jpeg?token=5ac5607ade351fd893985baf9c6a822b"
                            alt="Timnas Senior"
                            className="rounded-t-md w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <a
                                href="/kabar-bola/slug"
                                className="bg-white shadow-md rounded-md w-56 flex-shrink-0"
                            >
                                <h3 className="font-bold text-lg mb-2">
                                    Timnas Esports Indonesia Juara FIFAe World
                                    Cup 2024 Kategori Console
                                </h3>
                            </a>
                            <p className="text-gray-600 mb-4">14/12/2024</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white shadow-md rounded-md w-56 flex-shrink-0">
                        <img
                            src="https://www.pssi.org/files/uploads/news/image/2024/Dec/10/675865e1ca13d/ben00357-_x600.jpg?token=3f513ef130ce71e2ad1a3b98ff057816"
                            alt="Timnas Senior"
                            className="rounded-t-md w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <a
                                href="/kabar-bola/slug"
                                className="bg-white shadow-md rounded-md w-56 flex-shrink-0"
                            >
                                <h3 className="font-bold text-lg mb-2">
                                    PSSI melalui PT. GSI dan Erspo Libatkan
                                    Garuda Fans dalam Sayembara Jersey Baru
                                    Timnas Indonesia
                                </h3>
                            </a>
                            <p className="text-gray-600 mb-4">14/12/2024</p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white shadow-md rounded-md w-56 flex-shrink-0">
                        <img
                            src="https://www.pssi.org/files/uploads/news/image/2024/Dec/14/675d69395fa9c/dsc08126-_x600.jpg?token=12f31af58b571e252d1044d8e6966a82"
                            alt="Timnas Senior"
                            className="rounded-t-md w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <a
                                href="/kabar-bola/slug"
                                className="bg-white shadow-md rounded-md w-56 flex-shrink-0"
                            >
                                <h3 className="font-bold text-lg mb-2">
                                    PSSI Gembira Kenaikan Peringkat Timnas Putri
                                    Indonesia di FIFA
                                </h3>
                            </a>
                            <p className="text-gray-600 mb-4">14/12/2024</p>
                        </div>
                    </div>

                    {/* Card 7 */}
                    <div className="bg-white shadow-md rounded-md w-56 flex-shrink-0">
                        <img
                            src="https://www.pssi.org/files/uploads/news/image/2024/Dec/11/67597fbe7ef8e/whatsapp-image-2024-12-11-at-18-05-11-_x600.jpeg?token=47f8017d8a59f5dd797caab5a889685a"
                            alt="Timnas Senior"
                            className="rounded-t-md w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <a
                                href="/kabar-bola/slug"
                                className="bg-white shadow-md rounded-md w-56 flex-shrink-0"
                            >
                                <h3 className="font-bold text-lg mb-2">
                                    26 Pemain Dipanggil, Timnas U20 Siap
                                    Bertarung di Piala Asia 2025
                                </h3>
                            </a>
                            <p className="text-gray-600 mb-4">14/12/2024</p>
                        </div>
                    </div>

                    {/* Card 8 */}
                    <div className="bg-white shadow-md rounded-md w-56 flex-shrink-0">
                        <img
                            src="https://www.pssi.org/files/uploads/news/image/2024/Dec/12/675a510806602/ysp08650-_x600.jpg?token=b331a7ef3c366649c948a4a373a92a6d"
                            alt="Timnas Senior"
                            className="rounded-t-md w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <a
                                href="/kabar-bola/slug"
                                className="bg-white shadow-md rounded-md w-56 flex-shrink-0"
                            >
                                <h3 className="font-bold text-lg mb-2">
                                    Marselino: Bermain di Kandang Jadi Motivasi
                                    Tambahan untuk Garuda
                                </h3>
                            </a>
                            <p className="text-gray-600 mb-4">14/12/2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

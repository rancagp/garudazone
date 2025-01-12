import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Head, router, usePage } from "@inertiajs/react";
import { Carousel } from "flowbite-react";
import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
} from "@heroicons/react/20/solid";

const user = {
    name: "RancaGp",
    email: "tom@example.com", // Corrected the email
    imageUrl: "/images/ranca.jpg",
};

const navigation = [
    { name: "HOME", href: "/", current: true },
    { name: "KABAR BOLA", href: "/kabar-bola", current: false },
    { name: "SEJARAH", href: "/sejarah", current: false },
    { name: "PERTANDINGAN", href: "/pertandingan", current: false },
];

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

const videoHighlights = [
    {
        title: "Highlight 1",
        link: "https://www.youtube.com/embed/4F2oOGDyWeY?si=XJ8eVmyP4vwdUgMb&rel=0&autoplay=0&mute=1",
    },
    {
        title: "Highlight 2",
        link: "https://www.youtube.com/embed/eEy6cR3zIgg?si=5U4WoS8KQt1qBow7&rel=0&autoplay=0&mute=1",
    },
    {
        title: "Highlight 3",
        link: "https://www.youtube.com/embed/To8cGxmSTiE?si=gxvWFVNHoXfcvvhu&rel=0&autoplay=0&mute=1",
    },
    {
        title: "Highlight 4",
        link: "https://www.youtube.com/embed/h2Rs6u41nIg?si=glKyv22E2aqBxWIW&rel=0&autoplay=0&mute=1",
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example(props) {
    const { auth, liveMatch, completedMatches, latestPosts } = usePage().props;

    const userNavigation = [
        { name: "Your Profile", href: "#" },
        { name: "Settings", href: "#" },
    ];

    return (
        <>
            <Head title="Home" />
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
                                                        src={props.auth.user.avatar}
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
                            <div className="-mr-2 flex md:hidden">
                                {/* Mobile menu button */}
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
                                <button
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
                                </button>
                            </div>
                            <div className="mt-3 space-y-1 px-2">
                                {userNavigation.map((item) => (
                                    <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))}
                            </div>
                        </div>
                    </DisclosurePanel>
                </Disclosure>

                {/* MainContent */}
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
                                    {liveMatch ? (
                                        <>
                                            <span className="text-xs font-extrabold">{liveMatch.competition}</span>
                                            <div className="flex gap-4 items-center justify-center">
                                                <div className="grid">
                                                    <img src={liveMatch.home_team_flag} alt={liveMatch.home_team_name} className="w-14" />
                                                    <span className="text-xs">{liveMatch.home_team_name}</span>
                                                </div>
                                                <span>VS</span>
                                                <div className="grid">
                                                    <img src={liveMatch.away_team_flag} alt={liveMatch.away_team_name} className="w-14" />
                                                    <span className="text-xs">{liveMatch.away_team_name}</span>
                                                </div>
                                            </div>
                                        </>
                                     ) : (
                                        <div>No Match found</div>
                                        )}
                                    </div>
                                    {liveMatch && (
                                        <div className="flex items-center justify-center bg-slate-200 p-2">
                                        <div className="flex justify-center gap-2 items-center">
                                            <div className="flex items-center">
                                                <span className="font-extrabold text-3xl text-slate-500">{liveMatch.formatted_date?.split(" ")[0]}</span>
                                                <span className="grid text-[.7rem]">
                                                    <span className="font-light leading-none">{liveMatch.formatted_date?.split(" ")[1]}</span>
                                                    <span className="font-light leading-none">{liveMatch.formatted_year}</span>
                                                </span>
                                            </div>
                                            <div className="h-full w-px bg-black"></div>
                                            <span className="line-clamp-1 text-nowrap">{liveMatch.stadium}, {liveMatch.location}</span>
                                        </div>
                                    </div>
                                    )}
                                </div>
                                <div className="bg-white text-center rounded-sm shadow-lg">
                                     <span className="text-red-500 font-bold p-2">HASIL PERTANDINGAN</span>
                                     {completedMatches && completedMatches.length > 0 ? (
                                        completedMatches.map((match, index) => (
                                            <div key={match.id} className={index % 2 === 0 ? 'grid bg-slate-200 p-2' : 'grid bg-white p-2'}>
                                                  <div className="flex items-center justify-center gap-2">
                                                      <div className="flex gap-2 items-center">
                                                        <span>{match.home_team_name}</span>
                                                          <img src={match.home_team_flag} alt={match.home_team_name} className="w-5 h-4" />
                                                      </div>
                                                      <div className="border border-black flex gap-1 px-2">
                                                          <span>{match.home_score}</span>
                                                          <span>vs</span>
                                                          <span>{match.away_score}</span>
                                                      </div>
                                                    <div className="flex gap-2 items-center">
                                                        <span>{match.away_team_name}</span>
                                                          <img src={match.away_team_flag} alt={match.away_team_name} className="w-5 h-4" />
                                                      </div>
                                                  </div>
                                                  <span className="text-xs text-red-500">{match.competition}</span>
                                              </div>
                                      ))
                                      ) : (
                                            <div>No Completed Match Found</div>
                                      )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* konten2 */}
                    <div className="bg-gray-300 py-1 sm:pt-0 sm:pb-5">
                        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                            <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                                BERITA TERBARU
                            </p>
                            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                             {latestPosts && latestPosts.length > 0 ? (
                                latestPosts.map((post) => (
                                    <div key={post.id} className="relative lg:row-span-1 h-96">
                                        <div className="absolute inset-px lg:rounded-tl-[2rem]"></div>
                                        <div className="bg-white relative flex h-full flex-col overflow-hidden lg:rounded-tl-[calc(2rem+1px)]">
                                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                                <img className="w-full h-38" src={post.image} alt={post.title} />
                                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                                    {post.title}
                                                </p>
                                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                                    {post.body}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                ) : (
                                        <div>No Post Found</div>
                                )}
                                {/* sisa component news*/}

                            </div>
                        </div>
                    </div>


                    <div className="py-24 bg-gray-300">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Highlight Videos</h2>
                    <div className="flex justify-between gap-2 snap-x snap-mandatory">
                        {videoHighlights.map((video, index) => (
                            <div
                                key={index}
                                className="max-w-[280px] bg-white shadow-md rounded-lg snap-start overflow-hidden flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                <div className="w-full h-48">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        className="embed-responsive-item"
                                        src={video.link}
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-700">
                                        {video.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



                    {/* footer */}
                    <footer class="bg-red-700 rounded-lg shadow dark:bg-gray-900 w-full">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/images/garudazone.png" class="h-8" alt="garudazone Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Garudazone</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                        <li>
                            <a href="/kabarbola" class="hover:underline me-4 md:me-6">Kabarbola</a>
                        </li>
                        <li>
                            <a href="/sejarah" class="hover:underline me-4 md:me-6">Sejarah</a>
                        </li>
                        <li>
                            <a href="/pertandingan" class="hover:underline me-4 md:me-6">Pertandingan</a>
                        </li>
                        <li>
                            <a href="https://wa.me/6285864172264" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
                <span class="block text-sm text-white sm:text-center dark:text-white">© 2025 <a href="/" class="hover:underline">GarudaZonee™</a>. All Rights Reserved.</span>
            </div>
        </footer>
                </main>
            </div>
        </>
    );
}
import React, { useState } from 'react';
import { usePage, Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
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
import { Carousel } from "flowbite-react";
import { router } from "@inertiajs/react";



const user = {
    name: "RancaGp",
    email: "tom@example.com",
    imageUrl: "/images/ranca.jpg",
};
const navigation = [
    { name: "HOME", href: "/", current: false },
    { name: "KABAR BOLA", href: "/kabar-bola", current: false },
    { name: "SEJARAH", href: "sejarah", current: false },
    { name: "PERTANDINGAN", href: "/pertandingan", current: true },
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


const MatchStatus = ({status, children}) => {
    const statusColor = status === 'live' ? 'text-green-500' : 'text-gray-800';
    return(
         <p className={`${statusColor} font-extrabold`}>{children}</p>
       )
}

const TeamInfo = ({match}) => {
   return (
         <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
                 <img
                      src={match.home_team_flag ? match.home_team_flag.replace('/storage', '/storage') : '/images/no-image.png'}
                      alt={match.home_team_name}
                      className="w-20"
                    />
                     <span>{match.home_team_name}</span>
                  </div>
             {match.status === 'live' ? (
                <div className="border flex gap-2 px-4 py-2 mx-4">
                     <span>{match.home_score}</span>
                      <span>-</span>
                      <span>{match.away_score}</span>
               </div>
                ) : (<span className="mx-4">vs</span>
              )}
            <div className="flex flex-col items-center">
                <img
                   src={match.away_team_flag ? match.away_team_flag.replace('/storage', '/storage') : '/images/no-image.png'}
                     alt={match.away_team_name}
                     className="w-20"
                  />
                <span>{match.away_team_name}</span>
              </div>
          </div>
     )
}


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


export default function Match({ matches, nearestMatches, scheduledMatches }) {
    const { auth, liveMatch, completedMatches, latestPosts } = usePage().props;
    const [activePage, setActivePage] = useState(1);

     const userNavigation = [
        { name: "Your Profile", href: "#" },
        { name: "Settings", href: "#" },
    ];

    const formatMatchTime = (date, time) => {
        const [hours, minutes, seconds] = time.split(':');
        const matchDate = new Date(date);
        matchDate.setHours(parseInt(hours, 10));
        matchDate.setMinutes(parseInt(minutes, 10));
        matchDate.setSeconds(parseInt(seconds, 10));
        return matchDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    }


    return (
        <>
             <Head title="Match" />
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
                                                        src={user.imageUrl}
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
                <main className="w-full bg-gray-300">

            {/* Card Pertandingan Terdekat (Live/Scheduled Terdekat) */}
            {nearestMatches && nearestMatches.length > 0 && (
                <div className="grid w-3/4 shadow-lg mx-auto mt-4">
                    {nearestMatches.map((match) => (
                        <div key={match.id}>
                             <div className="grid text-center gap-4 p-5 font-extrabold">
                                  <MatchStatus status={match.status}>
                                        {match.competition}
                                   </MatchStatus>
                                   <TeamInfo match={match}/>
                              </div>
                              <div className="grid border p-4 bg-slate-100/50">
                                  <div className="flex items-center justify-center gap-1">
                                       <span className="text-4xl font-extrabold">{new Date(match.match_date).getDate()}</span>
                                         <div className="grid">
                                              <span>{new Date(match.match_date).toLocaleString('default', { month: 'short' })}</span>
                                              <span className="-mt-2">{new Date(match.match_date).getFullYear()}</span>
                                         </div>
                                     </div>
                                      <p className="text-center font-extrabold">
                                          {match.stadium}, {match.location}
                                      </p>
                                  </div>
                                   <div className="grid text-center p-4">
                                      {match.status === 'live' ? (
                                          <p className="text-green-500 font-extrabold">LIVE</p>
                                       ) : (
                                         <p>{new Date(match.match_date).toLocaleString('en-US', { weekday: 'long' })}, {new Date(match.match_date).toLocaleString('default', { month: 'long' })} {new Date(match.match_date).getDate()} {new Date(match.match_date).getFullYear()} | {formatMatchTime(match.match_date, match.match_time)}</p>
                                       )}
                                   </div>
                           </div>
                      ))}
                </div>
           )}

            {/* Card Jadwal Pertandingan (Scheduled Lainnya) */}
             {scheduledMatches && scheduledMatches.length > 0 && (
                    <div className="grid w-3/4 shadow-lg mx-auto mt-4">
                       <div className="grid text-center gap-4 p-5">
                           <p className="font-extrabold">PERTANDINGAN AKAN DATANG</p>
                          </div>
                      {scheduledMatches.map((match) => (
                             <div key={match.id} className="grid text-center bg-slate-100/50 p-4 border gap-4">
                                    <p className="text-red-500 text-center font-extrabold">
                                          {match.competition}
                                        </p>
                                        <div className="flex items-center justify-center">
                                            <div className="flex items-center gap-2">
                                                 <span>{match.home_team_name}</span>
                                                  <img
                                                      src={match.home_team_flag ? match.home_team_flag.replace('/storage', '/storage') : '/images/no-image.png'}
                                                        alt={match.home_team_name}
                                                        className="w-10"
                                                     />
                                               </div>
                                                <div className="border flex gap-2 px-4 py-2">
                                                   <span>VS</span>
                                                </div>
                                            <div className="flex items-center gap-2">
                                                   <img
                                                    src={match.away_team_flag ? match.away_team_flag.replace('/storage', '/storage') : '/images/no-image.png'}
                                                       alt={match.away_team_name}
                                                       className="w-10"
                                                    />
                                               <span>{match.away_team_name}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center gap-2">
                                            <img
                                                src="https://www.pssi.org/assets/img/stadion.png"
                                                alt="stadion"
                                                  className="w-5"
                                            />
                                          <span className="text-xs">{match.stadium}, {match.location}</span>
                                      </div>
                                         <div className="grid text-center p-4">
                                            <p>{new Date(match.match_date).toLocaleString('en-US', { weekday: 'long' })}, {new Date(match.match_date).toLocaleString('default', { month: 'long' })} {new Date(match.match_date).getDate()} {new Date(match.match_date).getFullYear()} | {formatMatchTime(match.match_date, match.match_time)}</p>
                                     </div>
                                </div>
                         ))}
                     </div>
             )}


            {/* Card Hasil Pertandingan (tanpa Pagination) */}
            <div className="grid w-3/4 shadow-lg mx-auto my-4">
                <div className="grid text-center gap-4 p-5">
                    <p className="font-extrabold">HASIL PERTANDINGAN</p>
                </div>
                {matches && matches.map((match) => (
                    <div key={match.id} className="grid text-center bg-slate-100/50 p-4 border gap-4">
                        <p className="text-red-500 text-center font-extrabold">
                            {match.competition}
                        </p>
                         <div className="flex items-center justify-center gap-2">
                            <div className="flex items-center gap-2">
                                <span>{match.home_team_name}</span>
                                 <img
                                     src={match.home_team_flag ? match.home_team_flag.replace('/storage', '/storage') : '/images/no-image.png'}
                                      alt={match.home_team_name}
                                       className="w-10"
                                    />
                                </div>
                                <div className="border flex gap-2 px-4 py-2">
                                    <span>{match.home_score}</span>
                                    <span>-</span>
                                    <span>{match.away_score}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                     <img
                                          src={match.away_team_flag ? match.away_team_flag.replace('/storage', '/storage') : '/images/no-image.png'}
                                        alt={match.away_team_name}
                                           className="w-10"
                                    />
                                    <span>{match.away_team_name}</span>
                                </div>
                             </div>
                            <div className="flex items-center justify-center gap-2">
                                <img
                                    src="https://www.pssi.org/assets/img/stadion.png"
                                    alt="stadion"
                                     className="w-5"
                                />
                                <span className="text-xs">{match.stadium}, {match.location}</span>
                            </div>
                            <div className="grid text-center p-4">
                                <p>{new Date(match.match_date).toLocaleString('en-US', { weekday: 'long' })}, {new Date(match.match_date).toLocaleString('default', { month: 'long' })} {new Date(match.match_date).getDate()} {new Date(match.match_date).getFullYear()} | {formatMatchTime(match.match_date, match.match_time)}</p>
                             </div>
                      </div>
                    ))}
            </div>
                     </main>

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
        </div>
        </>
    );
}
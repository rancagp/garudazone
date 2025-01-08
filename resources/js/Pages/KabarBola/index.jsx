import Footer from "@/Components/Button";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Head, useForm, usePage, Link } from "@inertiajs/react";

const navigation = [    
    { name: "HOME", href: "/", current: false },
    { name: "KABAR BOLA", href: "/kabar-bola", current: true },
    { name: "SEJARAH", href: "/sejarah", current: false },
    { name: "PERTANDINGAN", href: "/pertandingan", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


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

export default function Match({ posts, filters }) {
    const [showDetails, setShowDetails] = useState(false);

   const { data, setData, get } = useForm({
        search: filters.search || '',
   })


    useEffect(() => {
      get(route('kabar-bola'), {
         preserveState: true
      })
    }, [data.search])


    return (
        <>
            <Head title="Kabar Bola" />
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

           <div className="flex flex-col w-full">
               <div className='w-full px-4 mt-4 mb-6'>
                   <input
                       type="text"
                       placeholder="Search posts"
                       value={data.search}
                       onChange={(e) => setData('search', e.target.value)}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                   />
               </div>
               <div className="flex flex-wrap justify-center p-6 gap-6">
               {posts.data.map((post) => (
    <Link key={post.id} href={route('kabar-bola.show', post.id)}>
        <div className="bg-white shadow-md rounded-lg w-80 sm:w-80 flex-shrink-0 group transition-transform duration-300 transform hover:scale-105">
            <div className="overflow-hidden rounded-t-lg">
                <img
                    src={post.image}
                    alt="Timnas Senior"
                    className="rounded-t-lg w-full h-56 sm:h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="p-4">
                <div className="bg-white rounded-md">
                    <h3 className="font-bold text-lg mb-2 text-black group-hover:text-red-500 transition-colors duration-300">
                        {post.title}
                    </h3>
                </div>
                <p className="text-gray-600 mb-4">{formatDate(post.created_at)}</p>
            </div>
        </div>
    </Link>
))}
                </div>
            </div>

            {/* Pagination under cards */}
            <div className="w-full">
                <div className="flex flex-wrap justify-center p-6 gap-6">
                    {/* Pagination */}
                    <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                        <div className="flex sm:flex-1 sm:items-center sm:justify-center">
                            <div>
                              {posts.links && (
                                   <nav
                                      className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                      role="navigation"
                                      aria-label="Pagination Navigation"
                                  >
                                      {posts.links.map((link, index) => {
                                          if (link.label === '...') {
                                            return (
                                                   <span
                                                        key={index}
                                                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300"
                                                   >
                                                    ...
                                                   </span>
                                                )
                                           }
                                          return (
                                            <a
                                                key={index}
                                                href={link.url}
                                                 className={classNames(
                                                    link.active ? "bg-red-600 text-white" : "text-gray-900 hover:bg-red-200",
                                                    "relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                                                 )}
                                                dangerouslySetInnerHTML={{__html:link.label}}

                                            />
                                       );
                                     })}
                                 </nav>
                               )}
                            </div>
                        </div>
                    </div>
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
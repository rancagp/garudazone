// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
// import { Link, usePage, router } from '@inertiajs/react';
// import React from 'react'

// const Navbar = () => {
//      const { props, url } = usePage();
//      const navigation = [
//         { name: "HOME", href: "/" },
//         { name: "KABAR BOLA", href: "/kabar-bola" },
//         { name: "SEJARAH", href: "/sejarah" },
//         { name: "PERTANDINGAN", href: "/pertandingan" },
//     ];

//     function classNames(...classes) {
//         return classes.filter(Boolean).join(" ");
//     }



//     const userNavigation = [
//         { name: "Your Profile", href: "#" },
//         { name: "LogOut", href: "#" },
//     ];

//     return (
//         <Disclosure
//             as={'nav'}
//             className="sticky top-0 z-10 w-full bg-red-700"
//         >
//             <div className="pr-4 max-w-7xl sm:pr-6 lg:pr-8">
//                 <div className="flex items-center justify-between h-16">
//                     <div className="flex items-center">
//                         <div className="w-20 origin-bottom-left skew-x-12 bg-white">
//                             <img
//                                 alt="GarudaZone"
//                                 src="/images/garudazone.png"
//                                 className="mx-auto size-16"
//                             />
//                         </div>
//                         <div className="hidden md:block">
//                             <div className="flex items-baseline ml-10 space-x-4">
//                                 {navigation.map((item) => (
//                                     <Link
//                                         key={item.name}
//                                         href={item.href}
//                                         className={classNames(
//                                             url === item.href
//                                                 ? "bg-red-900 text-white"
//                                                 : "text-gray-300 hover:bg-red-900 hover:text-white",
//                                             "rounded-md px-3 py-2 text-sm font-medium"
//                                         )}
//                                     >
//                                         {item.name}
//                                     </Link>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Navbar Desktop */}
//                     <div className="hidden md:block">
//                         <div className="flex items-center ml-4 md:ml-6">
//                             {/* Profile dropdown */}
//                             <Menu as="div" className="relative ml-3">
//                                 <div>
//                                     {props.auth?.user ? (
//                                         <MenuButton className="relative flex max-w-xs items-center rounded-full bg-indigo-400 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                                             <span className="absolute -inset-1.5" />
//                                              <img
//                                                 alt=""
//                                                src={props.auth.user.imageUrl}
//                                                 className="rounded-full size-8"
//                                               />
//                                         </MenuButton>
//                                    ) : (
//                                         <>
//                                             <a
//                                                 href="/register"
//                                                 className="px-3 py-2 text-sm font-medium text-gray-300 uppercase rounded-md hover:bg-red-900 hover:text-white"
//                                             >
//                                                 Register
//                                             </a>
//                                            <a
//                                                href="/login"
//                                                 className="px-3 py-2 text-sm font-medium text-gray-300 uppercase rounded-md hover:bg-red-900 hover:text-white"
//                                            >
//                                                Login
//                                            </a>
//                                         </>
//                                     )}
//                                 </div>
//                                 <MenuItems
//                                     transition
//                                     className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//                                 >
//                                     {userNavigation.map((item) => (
//                                         <MenuItem key={item.name}>
//                                             <a
//                                                 href={item.href}
//                                                 className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
//                                             >
//                                                 {item.name}
//                                             </a>
//                                         </MenuItem>
//                                     ))}
//                                    <MenuItem>
//                                    <Link
//                                             href={route('logout')}
//                                             method='post'
//                                             className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none w-full text-start"
//                                         >
//                                             Logout
//                                         </Link>
//                                     </MenuItem>
//                                 </MenuItems>
//                            </Menu>
//                         </div>
//                     </div>
//                     {/* End Navbar Desktop */}

//                     {/* Navbar Mobile Button */}
//                     <div className="-mr-2 flex md:hidden">
//                         <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-600 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                             <span className="absolute -inset-0.5" />
//                             <span className="sr-only">
//                                 Open main menu
//                             </span>
//                             <Bars3Icon
//                                 aria-hidden="true"
//                                 className="block size-6 group-data-[open]:hidden"
//                             />
//                             <XMarkIcon
//                                 aria-hidden="true"
//                                 className="hidden size-6 group-data-[open]:block"
//                             />
//                         </DisclosureButton>
//                     </div>
//                     {/* End Navbar Mobile Button */}
//                 </div>
//             </div>

//             {/* Navbar Mobile Menu */}
//             <DisclosurePanel className="md:hidden">
//                 <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                     {navigation.map((item) => (
//                         <DisclosureButton
//                              as='a'
//                              key={item.name}
//                             href={item.href}
//                              className={classNames(
//                                 url === item.href
//                                   ? "bg-gray-600 text-white"
//                                   : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                                "block rounded-md px-3 py-2 text-base font-medium"
//                            )}
//                       >
//                            {item.name}
//                       </DisclosureButton>
//                    ))}
//                 </div>
//                 {props.auth?.user && (
//                   <div className="border-t border-gray-700 pb-3 pt-4">
//                       <div className="flex items-center px-5">
//                           <div className="shrink-0">
//                               <img
//                                  alt=""
//                                   src={props.auth?.user?.imageUrl}
//                                    className="size-10 rounded-full"
//                                 />
//                            </div>
//                             <div className="ml-3">
//                                  <div className="text-base/5 font-medium text-white">
//                                    {props.auth?.user?.name}
//                                   </div>
//                                 <div className="text-sm font-medium text-gray-400">
//                                       {props.auth?.user?.email}
//                                  </div>
//                             </div>

//                         </div>
//                          <div className="mt-3 space-y-1 px-2">
//                              {userNavigation.map((item) => (
//                                  <DisclosureButton
//                                       key={item.name}
//                                      href={item.href}
//                                     className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
//                                    >
//                                       {item.name}
//                                  </DisclosureButton>
//                              ))}
//                         </div>
//                      </div>
//                    )}
//              </DisclosurePanel>
//             {/* End Navbar Mobile Menu */}
//         </Disclosure>
//     )
// }

// export default Navbar
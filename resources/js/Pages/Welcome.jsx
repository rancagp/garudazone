import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Head, router, usePage } from '@inertiajs/react'
import { Carousel } from "flowbite-react";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

const user = {
  name: 'RancaGp',
  email: 'tom@example.com',
  imageUrl: '/images/ranca.jpg',  // Ganti dengan path relatif ke file gambar lokal
}
const navigation = [
  { name: 'HOME', href: '#', current: true },
  { name: 'KABAR BOLA', href: '#', current: false },
  { name: 'SEJARAH', href: '#', current: false },
]

const slides = [
  "/images/timnas6.jpg",
  "/images/timnaswp1.jpg",
  "/images/timnaswp5.jpg",
  "/images/timnaswp4.jpg"
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const { auth } = usePage().props

  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
  ]


  return (
    <>
      <Head title='Home' />
      <div className='w-full'>
        <Disclosure as="nav" className="bg-red-700 sticky z-10 top-0 w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    alt="Your Company"
                    src="/images/garudazone.png"
                    className="size-20"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-red-900 text-white' : 'text-gray-300 hover:bg-red-900 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
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
                      {
                        auth.user ? (
                          <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <img alt="" src={user.imageUrl} className="size-8 rounded-full" />
                          </MenuButton>
                        ) : (
                          <>
                            <a href="/register" className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-red-900 hover:text-white uppercase'>Register</a>
                            <a href="/login" className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-red-900 hover:text-white uppercase'>Login</a>
                          </>
                        )
                      }
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
                        <button onClick={() => router.post('/logout')} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none w-full text-start">Logout</button>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">

                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
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
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
                </div>
                <div className="ml-3">
                  <div className="text-base/5 font-medium text-white">{user.name}</div>
                  <div className="text-sm font-medium text-gray-400">{user.email}</div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
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

        {/* Header */}
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">HOME</h1>
          </div>
        </header>

        {/* Main content */}
        <main className='w-full h-screen bg-gray-300'>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 bg-red">


            {/* konten 1 */}
            <div className="h-56 sm:h-[73dvh] ">
              <Carousel>
                {slides.map((s, index) => (
                  <img key={index} src={s} alt={`Slide ${index + 1}`} className='h-full w-full' />
                ))}
              </Carousel>
            </div>
          </div>

          {/* konten2 */}
          <div className="bg-gray-300 py-1 sm:pt-0 sm:pb-5">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
              <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                BERITA TERBARU
              </p>
              <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                <div className="relative lg:row-span-2">
                  <div className="absolute inset-px rounded-lg  lg:rounded-l-[2rem]"></div>
                  <div className="bg-white relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                    <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                        Berita 1
                      </p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                      </p>
                    </div>
                    <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                      <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-red-950 bg-gray-900 shadow-2xl">
                        <img
                          className="size-full object-cover object-top"
                          src="/images/timnas8.jpg"
                          alt="Description of the image"
                        />

                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                </div>
                <div className="relative max-lg:row-start-1">
                  <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Bertia 2</p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                      </p>
                    </div>
                    <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                      <img
                        className="w-full max-lg:max-w-xs"
                        src=""
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                </div>
                <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                  <div className="absolute inset-px rounded-lg bg-white"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Berita 3</p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                      </p>
                    </div>
                    <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                      <img
                        className="h-[min(152px,40cqw)] object-cover"
                        src=""
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                </div>
                <div className="relative lg:row-span-2">
                  <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                    <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                        Berita 4
                      </p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                      </p>
                    </div>
                    <div className="relative min-h-[30rem] w-full grow">
                      <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                        <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                          <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                            <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                              NotificationSetting.jsx
                            </div>
                            <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                          </div>
                        </div>
                        <div className="px-6 pb-14 pt-6">{/* Your code example */}</div>
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <h2 className="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      A better workflow
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                      iste dolor cupiditate blanditiis ratione.
                    </p>
                    <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                      {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                          <dt className="inline font-semibold text-gray-900">
                            <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-indigo-600" />
                            {feature.name}
                          </dt>{' '}
                          <dd className="inline">{feature.description}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
                <img
                  alt="Product screenshot"
                  src="/images/timnaswp4.jpg"
                  width={2432}
                  height={1442}
                  className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                />
              </div>
            </div>
          </div>

          {/*Footer*/}
          <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
              <p>&copy; 2024 GarudaZone. All rights reserved.</p>
              <div className="mt-2">
                <a href="https://www.example.com" className="text-gray-400 hover:text-white mx-2">
                  Privacy Policy
                </a>
                <a href="https://www.example.com" className="text-gray-400 hover:text-white mx-2">
                  Terms of Service
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  )
}









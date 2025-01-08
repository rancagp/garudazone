import React from 'react'

const Footer = () => {
    return (


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
                <span class="block text-sm text-white sm:text-center dark:text-white">© 2025 <a href="/" class="hover:underline">GarudaZone™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}

export default Footer

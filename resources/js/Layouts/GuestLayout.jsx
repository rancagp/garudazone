import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react'

export default function GuestLayout({ children, processing }) {
    return (
        <div
            className="flex flex-col items-center min-h-screen px-6 pb-6 bg-center bg-cover sm:justify-center sm:pt-0"
            style={{ backgroundImage: 'url(/images/timnas11.jpg)' }}
        >
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 text-gray-500 fill-current" />
                </Link>
            </div>

            <div className="w-full px-6 py-4 overflow-hidden mb-4 bg-white sm:max-w-md sm:rounded-lg"
                style={{
                    boxShadow: '0 20px 50px rgba(0.5, 0.5, 0.5, 0.5)',
                    transition: 'box-shadow 0.3s ease-in-out' // Optional: Adding transition for smooth effect on hover
                }}>
                {children}
            </div>
            <a href='/google/redirect' className="ms-4 bg-white rounded-full " disabled={processing}>
                <img src="/images/googleicon.png" className='w-[50px]' alt="" />
            </a>
        </div>
    );
}





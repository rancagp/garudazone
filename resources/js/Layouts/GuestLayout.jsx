import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react'

export default function GuestLayout({ children }) {
    return (
        <div
            className="flex min-h-screen flex-col items-center bg-cover bg-center pt-6 sm:justify-center sm:pt-0"
            style={{ backgroundImage: 'url(/images/timnas11.jpg)' }}
        >
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 sm:max-w-md sm:rounded-lg"
                style={{
                    boxShadow: '0 20px 50px rgba(0.5, 0.5, 0.5, 0.5)',
                    transition: 'box-shadow 0.3s ease-in-out' // Optional: Adding transition for smooth effect on hover
                }}>
                {children}
            </div>
        </div>
    );
}





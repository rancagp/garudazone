import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 GarudaZone. All rights reserved.</p>
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
    )
}

export default Footer

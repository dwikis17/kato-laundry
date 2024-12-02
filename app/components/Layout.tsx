
'use client'
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Image from 'next/image';
interface LayoutProps {
    children: React.ReactNode;
}

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { href: "/#hero", text: "Home" },
        { href: "/#why-laundry", text: "Why Laundry" },
        { href: "/#why-us", text: "Why Us" },
        { href: "/#our-location", text: "Our Locations" },
        { href: "https://wa.me/+6281211817198", text: "Gabung Kemitraan" },
    ]
    return (
        <nav className="bg-white border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between md:justify-start h-16">
                    <div className="flex-shrink-0">
                        <Link href="/#hero" className="text-xl font-bold">
                            <Image src={'/logo2.jpg'} alt="logo" width={100} height={50} className='object-cover' />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
                                >
                                    {link.text}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                target='_blank'
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
};


const Footer = () => {
    return (
        <footer className=" p-12 flex flex-col justify-center items-center">
            <h1 className="text-5xl md:text-4xl lg:text-[50px]  text-center ] font-bold mb-12">
                Jadi Mitra Sekarang
            </h1>
            <Button className='bg-black' onClick={() => window.open("https://wa.me/+6281211817198", '_blank')}>
                Hubungi Kami
            </Button>
        </footer >
    );
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow w-full">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
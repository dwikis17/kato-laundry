

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface LayoutProps {
    children: React.ReactNode;
}

const Navigation = () => {
    return (
        <nav className="bg-white border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold">
                            Logo
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <Link href="/#hero" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
                                Home
                            </Link>
                            <Link href="/#why-laundry" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
                                Why Laundry
                            </Link>
                            <Link href="/#why-us" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
                                Why Us
                            </Link>
                            <Link href="/#our-location" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
                                Our Locations
                            </Link>
                            <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
                                Join Franchise
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};


const Footer = () => {
    return (
        <footer className=" p-12 flex flex-col justify-center items-center">
            <h1 className="text-5xl md:text-4xl lg:text-[50px]  text-center ] font-bold mb-12">
                Jadi Mitra Sekarang
            </h1>
            <Button className='bg-black'>
                Hubungi Kami
            </Button>
        </footer>
    );
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow max-w-7xl  mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
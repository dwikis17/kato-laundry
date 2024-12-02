'use client'
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

import Link from 'next/link';

export default function HeroSection() {



    return (
        <motion.section
            id="hero"
            className="container mx-auto flex flex-col gap-y-4 py-4 justify-center items-center text-center
      min-h-[400px] sm:min-h-[500px] md:min-h-[600px] px-4 sm:px-6 lg:px-8
      bg-gradient-to-b from-blue-50 to-white"
            initial={{ opacity: 0 }} // Starting opacity
            animate={{ opacity: 1 }} // Ending opacity
            transition={{ duration: 1, ease: 'easeInOut' }} // Smooth transition
        >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold leading-tight">
                Kato Laundry <br />
                <span className="block mt-2">Cucian Rapi, Hidup Lebih Berarti</span>
            </h1>

            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium text-gray-500">
                Gratis Antar dan Jemput
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-3 w-full sm:w-auto">
                <Button className="w-full sm:w-auto">
                    <Link href="/#our-location">Hubungi Kami</Link>
                </Button>
                <Button variant="outline" className="w-full sm:w-auto">
                    Jadi Mitra Sekarang
                </Button>
            </div>
        </motion.section>

    )
}
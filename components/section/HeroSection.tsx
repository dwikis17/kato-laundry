'use client'
import Card from '@/app/components/Card';
import { Highlight } from '@/app/components/Highlight';
import { motion, Variants } from 'framer-motion'
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect'

export default function HeroSection() {

    // const [screenWidth, setScreenWidth] = useState(0);
    // useEffect(() => {
    //     const handleResize = () => {
    //         setScreenWidth(window.innerWidth);
    //     };

    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);
    // const getVariants = (): Variants => {
    //     return {
    //         offscreen: {
    //             y: screenWidth >= 768 ? 450 : 10, // 450 for large screens, 10 for mobile
    //             opacity: 0,
    //         },
    //         onscreen: {
    //             y: 0,
    //             opacity: 1,
    //             transition: {
    //                 duration: 1,
    //                 ease: 'easeOut',
    //             },
    //         },
    //     };
    // };

    return (
        <div className="mx-auto container grid grid-cols-1  md:grid-cols-2 gap-6  min-h-[250px] h-[250px] sm:min-h-[300px] sm:h-[300px]">
            <motion.div animate={{ x: 0, scale: 1 }} initial={{ x: -1000, scale: 0.5 }} transition={{ duration: 1, ease: 'easeInOut', type: 'spring' }} className="flex flex-col gap-y-3 justify-center px-3">
                <h1 className="work-sans-google sm:text-6xl text-5xl bg-gradient-to-r from-[#3854f2] to-green-500 bg-clip-text text-transparent">
                    Kato Laundry. <br></br>
                    Cucian Rapi,<br></br> Hidup Lebih Berarti
                </h1>
                <p className="sm:text-2xl text-2xl text-left font-light open-sans">
                    <span className='font-bold '>Gratis</span> Pick Up dan Delivery.<br></br>

                </p>
            </motion.div >
            <motion.div animate={{ x: 0, scale: 1 }} initial={{ x: 1000, scale: 0.5 }} transition={{ duration: 1, ease: 'easeInOut', type: 'spring' }} className="flex  justify-end items-center relative px-2 lg:py-8 py-6 w-[100%]  min-h-[250px]">
                <Card />
            </motion.div>

        </div>


    )
}
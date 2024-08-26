'use client'
import Card from '@/app/components/Card';
import { Highlight } from '@/app/components/Highlight';
import { motion, Variants } from 'framer-motion'
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect'
import { Button } from '../ui/button';
import { AlertDialogDemo } from '@/app/components/Dialog';

export default function HeroSection() {



    return (
        <div className="mx-auto container  grid grid-cols-1  md:grid-cols-2 gap-6  min-h-[250px] h-[250px] sm:min-h-[300px] sm:h-[300px]">
            <motion.div animate={{ x: 0, scale: 1 }} initial={{ x: -1000, scale: 0.5 }} transition={{ duration: 1, ease: 'easeInOut', type: 'spring' }} className="flex flex-col gap-y-3 justify-center px-3">
                <h1 className="work-sans-google sm:text-6xl text-5xl bg-gradient-to-r from-[#3854f2] to-green-500 bg-clip-text text-transparent">
                    Kato Laundry. <br></br>
                    Cucian Rapi,<br></br> Hidup Lebih Berarti
                </h1>
                <p className="sm:text-2xl text-2xl text-left font-light open-sans">
                    <span className='font-bold '>Gratis</span> Pick Up dan Delivery.<br></br>
                </p>
                <AlertDialogDemo />
            </motion.div >

            <motion.div animate={{ x: 0, scale: 1 }} initial={{ x: 1000, scale: 0.5 }} transition={{ duration: 1, ease: 'easeInOut', type: 'spring' }} className="flex  justify-end items-center relative px-2 lg:py-8 py-6 w-[100%]  min-h-[250px]">
                <Card />
            </motion.div>


        </div>


    )
}
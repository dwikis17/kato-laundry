'use client'

import online_shopping from '@/public/mobile-shopping.png'
import Image from 'next/image'
import trusted from '@/public/trust.png'

import { ComparedCard } from './ComparedCard'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'

export default function WhyUs() {
    const firstRef = useRef(null)
    const secondRef = useRef(null)
    const isInView = useInView(firstRef, { amount: 0.2 })
    const isBarInView = useInView(secondRef, { amount: 0.2 })
    return (
        <div className={` mx-auto container   grid sm:grid-cols-2 grid-cols-1  gap-10 `}>
            <div id='1' className=" flex flex-col  relative text-left gap-10  " ref={firstRef} style={{
                transform: isInView ? 'none' : 'translateX(-200px)',
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
            }}>
                <p className='text-xl font-bold '>Kenapa cuci di Kato Laundry?</p>
                <h2 className='text-3xl font-bold mt-20 mb-20'>Layanan premium kami memastikan cucian Anda bersih sempurna, diantar jemput langsung ke depan rumah anda.</h2>

                <motion.div className='min-h-[120px] rounded-xl flex items-center gap-x-3 ' whileHover={{ scale: 1.1, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)' }}
                    transition={{ duration: 0.3 }}>
                    <Image src={online_shopping} alt='onlineshop' width={75} height={75} className='flex-none ' />
                    <div id='content' className='grow flex flex-col'>
                        <h2 className='text-3xl font-bold '>Praktis</h2>
                        <p>Pesan dari Whatsapp. Jemput. Antar.</p>
                    </div>
                </motion.div>

                <motion.div className='min-h-[120px] rounded-xl flex items-center gap-x-3 ' whileHover={{ scale: 1.1, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)' }}
                    transition={{ duration: 0.3 }}>
                    <Image src={trusted} alt='onlineshop' width={75} height={75} className='flex-none' />
                    <div id='content' className='grow flex flex-col'>
                        <h2 className='text-3xl font-bold'>Terpercaya</h2>
                        <p>Dipercaya oleh ratusan pelanggan, layanan kami selalu tepat waktu dan berkualitas.</p>
                    </div>
                </motion.div>
            </div>
            <div id='1' className=" flex flex-col  justify-center text-left" ref={secondRef} style={{
                transform: isBarInView ? 'none' : 'translateX(200px)',
                opacity: isBarInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
            }}>
                <h1 className='text-2xl font-bold mt-20 mb-20'>Kamu bisa menghemat waktu sampai 50%</h1>
                <p className='text-lg text-center font-light'>Waktu yang dibutuhkan untuk mencuci </p>
                <ComparedCard />
            </div>

        </div >
    )
}
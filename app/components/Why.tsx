import online_shopping from '@/public/mobile-shopping.png'
import Image from 'next/image'
import trusted from '@/public/trust.png'
import { interFont } from '../page'
import { ComparedCard } from './ComparedCard'
import { Highlight } from './Highlight'
export default function WhyUs() {
    return (
        <div className={` ${interFont.className} mx-auto container   grid sm:grid-cols-2 grid-cols-1  gap-10 `}>
            <div id='1' className=" flex flex-col  relative text-left gap-10 ">
                <p className='text-xl font-bold '>Kenapa cuci di Kato Laundry?</p>
                <h2 className='text-3xl font-bold mt-20 mb-20'>Layanan premium kami memastikan cucian Anda bersih sempurna, diantar jemput langsung ke depan rumah anda.</h2>

                <div className='min-h-[120px]  flex items-center gap-x-3 '>
                    <Image src={online_shopping} alt='onlineshop' width={75} height={75} className='flex-none ' />
                    <div id='content' className='grow flex flex-col'>
                        <h2 className='text-3xl font-bold '>Praktis</h2>
                        <p>Pesan dari Whatsapp. Jemput. Antar.</p>
                    </div>
                </div>

                <div className='min-h-[120px]  flex items-center gap-x-3 '>
                    <Image src={trusted} alt='onlineshop' width={75} height={75} className='flex-none' />
                    <div id='content' className='grow flex flex-col'>
                        <h2 className='text-3xl font-bold'>Terpercaya</h2>
                        <p>Dipercaya oleh ratusan pelanggan, layanan kami selalu tepat waktu dan berkualitas.</p>
                    </div>
                </div>
            </div>
            <div id='1' className=" flex flex-col  justify-center text-left">
                <h1 className='text-2xl font-bold mt-20 mb-20'>Kamu bisa menghemat waktu sampai 50%</h1>
                <p className='text-lg text-center font-light'>Waktu yang dibutuhkan untuk mencuci </p>
                <ComparedCard />
            </div>

        </div>
    )
}

'use client'
import Image from "next/image";
import { motion } from 'framer-motion';

interface Benefit {
    title: string;
    description: string;
    image: string;
}



const ItemComponent = ({ title, description, image }: Benefit) => (
    <div className="w-[294px] flex flex-col ">
        <div className="relative w-full aspect-square rounded-xl overflow-hidden">
            <Image
                src={image}
                layout="fill"

                alt="Laundry"
                unoptimized
            />
        </div>
        <h3 className="text-xl font-bold mt-4 text-[#333333]">{title}</h3>
        <p className="text-[#888888]">{description}</p>
    </div>
);

export default function WhySection() {
    const businessBenefits = [
        {
            title: "Bisnis Jangka Panjang",
            description: "Bisnis yang sustainable, mampu beroperasi dalam jangka yang panjang dan membuatnya jadi pilihan investasi yang baik",
            image: '/resesi.jpg'
        },
        {
            title: "Aset Berupa Mesin",
            description: "Aset tangibel berupa alat seperti mesin cuci, pengering, dan lainnya",
            image: '/machine.jpg'
        },
        {
            title: "Bisnis yang Tahan Resesi",
            description: "Bisnis yang esensial dan tahan terhadap resesi. Hal ini terbukti pada saat pandemi COVID-19 di tahun 2020 lalu",
            image: '/longlasting.jpg'
        },


    ];

    return (
        <motion.section
            className="container mx-auto py-6 mt-3"
            id="why"
            initial={{ opacity: 0 }} // Initial opacity
            whileInView={{ opacity: 1 }} // Animate to full opacity when in view
            viewport={{ once: true, amount: 0.6 }} // Trigger animation when 30% is in view
            transition={{ duration: 1, ease: 'easeInOut' }} // Smooth transition
        >
            <h1 className="text-5xl md:text-4xl lg:text-[50px] text-center text-[#333333] font-bold mb-12">
                Kenapa Bisnis Laundry
            </h1>

            <div
                className="flex gap-6 px-4
    md:justify-center
    max-md:overflow-x-auto max-md:pb-6 max-md:snap-x max-md:snap-mandatory
    max-md:scrollbar-thin max-md:scrollbar-thumb-gray-200 max-md:scrollbar-track-transparent"
            >
                {businessBenefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="max-md:snap-center max-md:shrink-0"
                    >
                        <ItemComponent {...benefit} />
                    </div>
                ))}
            </div>
        </motion.section>
    )
}

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
                objectFit="contain"
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
            image: '/laundry.webp'
        },
        {
            title: "Aset Berupa Mesin",
            description: "Aset tangibel berupa alat seperti mesin cuci, pengering, dan lainnya",
            image: '/laundry.webp'
        },
        {
            title: "Bisnis yang Tahan Resesi",
            description: "Bisnis yang esensial dan tahan terhadap resesi. Hal ini terbukti pada saat pandemi COVID-19 di tahun 2020 lalu",
            image: '/laundry.webp'
        },

        {
            title: "Bisnis yang Tahan Resesi",
            description: "Bisnis yang esensial dan tahan terhadap resesi. Hal ini terbukti pada saat pandemi COVID-19 di tahun 2020 lalu",
            image: '/laundry.webp'
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
                className="flex overflow-x-auto gap-6 pb-6 px-4 snap-x snap-mandatory 
          scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent"
            >
                {businessBenefits.map((benefit, index) => (
                    <div key={index} className="snap-center shrink-0">
                        <ItemComponent {...benefit} />
                    </div>
                ))}
            </div>
        </motion.section>
    )
}
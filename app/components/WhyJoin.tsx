'use client'

import Image from "next/image"
import { motion } from "framer-motion"
const ItemComponent = ({ title, description, image }: any) => (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-20 items-start mb-5 ">
        {/* Image container */}
        <div className="relative w-full h-[300px] sm:h-[383px] rounded-md overflow-hidden shadow-xl">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                unoptimized
            />
        </div>

        {/* Text content */}
        <div className="flex flex-col  h-auto lg:h-[383px] text-left gap-3 lg:gap-8">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#333333] leading-tight">{title}</h2>
            <p className="text-[#888888] text-justify text-base sm:text-lg lg:text-2xl leading-relaxed">{description}</p>
        </div>
    </div>
)

export default function WhyJoin() {
    const list = [
        {
            title: "Laundry Business Complete Package",
            description: "Kato Laundry memberikan paket yang sudah dipersiapkan dengan komplit berdasarkan pengalaman kami lebih dari 5 tahun. Dengan kelengkapan yang sudah di berikan, Mitra sudah tidak perlu pusing urusan peralatan dan perlengkapan laundry.",
            image: '/laundry.webp'
        },
        {
            title: "Pendampingan mencari lokasi",
            description: "Lokasi menjadi core dalam usaha laundry, dan akan mendapat pendampingan dalam mencari lokasi yang tepat oleh Team Kato Laundry, Location is the Key in Laundry Businesses.",
            image: '/location.jpg'
        },
        {
            title: "Pendampingan mentoring bisnis",
            description: "Mendapat mentoring dalam bisnis, ketika menjalankan usaha akan sangat sulit jika tanpa pendampingan yang berpengalaman, Team Kato laundry kana memberikan pendampingan dalam menjalankan usaha!",
            image: '/mentor.jpg'
        },
    ]

    return (
        <motion.section
            id="why-us"
            className="container mx-auto flex flex-col px-4 py-8 lg:py-12"
            initial={{ opacity: 0 }} // Start with opacity 0
            whileInView={{ opacity: 1 }} // Animate to opacity 1 when in view
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible
            transition={{ duration: 1, ease: 'easeInOut' }} // Smooth transition
        >
            <div className="text-center text-[#333333] font-bold mb-12">
                <h1 className="text-5xl lg:hidden">
                    Kenapa <br /> Menjadi Mitra <br />Kato Laundry
                </h1>
                <h1 className="hidden lg:block text-5xl">
                    Kenapa Menjadi Mitra Kato Laundry
                </h1>
            </div>

            {list.map((item, index) => (
                <ItemComponent key={index} {...item} />
            ))}
        </motion.section>
    )
}


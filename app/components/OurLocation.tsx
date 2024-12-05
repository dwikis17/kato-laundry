'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from 'framer-motion';

const ItemComponent = ({ title, image, number }: any) => (
    <div className="grid grid-cols-1 shadow-xl rounded-xl w-[300px]">
        <div className="relative w-full h-[240px] rounded-xl overflow-hidden">
            <Image
                src={image}
                alt={title}
                fill

                unoptimized
            />
        </div>
        <div className="flex gap-4 bg-white justify-between items-center p-4 rounded-xl">
            <h3 className="text-[20px] font-semibold text-[#333333]">{title}</h3>
            <Button onClick={() => {
                window.open(`https://wa.me/${number}`, '_blank')
            }}>Hubungi Kami</Button>
        </div>
    </div>
);
export default function OurLocation() {
    const list = [
        {
            title: "Greenlake City",
            number: '+6287745520200',
            image: '/Greenlake_City.jpeg'
        },
        {
            title: "Greenville",
            number: '+628997220800',
            image: '/Greenville.jpeg'
        },
        {
            title: "Taman Permata Palem",
            number: '+6285923227111',
            image: '/taman_permata_palem.jpeg'
        },
        {
            title: "Kelapa Gading",
            number: '+6287726926906',
            image: '/location2.jpg'
        },
        {
            title: "Suvarna Sutera",
            number: '+6287832122010',
            image: '/Suvarna.jpeg'
        },
    ]
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Add a 0.2s delay between each child's animation
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 }, // Start smaller and transparent
        visible: {
            opacity: 1,
            scale: 1, // Animate to full size
            transition: { duration: 0.5, ease: 'easeOut' }, // Smooth transition
        },
    };

    return (
        <motion.section
            id="our-location"
            className="container mx-auto px-4 mb-6"
            initial="hidden" // Start with hidden state
            whileInView="visible" // Trigger visible animation when in view
            viewport={{ once: true, amount: 0.2 }} // Animate when 20% is visible
            variants={containerVariants} // Apply container animation
        >

            <h1 className="text-5xl md:text-4xl lg:text-[50px] text-center text-[#333333] font-bold mb-12">
                Lokasi Kato Laundry
            </h1>
            <motion.div
                className="flex flex-row flex-wrap justify-center gap-8"
                variants={containerVariants} // Apply stagger effect
            >
                {list.map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <ItemComponent {...item} />
                    </motion.div>
                ))}
            </motion.div>

        </motion.section>
    )
}
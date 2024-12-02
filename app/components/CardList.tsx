'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { motion } from 'framer-motion';
export default function CardList() {
    const cards = [
        {
            title: 'Cuci baju sekarang.',
            description: 'Saya ingin layanan laundry antar jemput'
        },
        {
            title: 'Mulai bisnis laundry.',
            description: 'Saya ingin mulai usaha Franchise Laundry'
        },
        {
            title: 'Kerjasama dengan Kato.',
            description: 'Saya ingin melakukan kerjasama dengan Kato Laundry'
        }
    ]

    return (
        <motion.section
            id="why-laundry"
            className="container mx-auto grid sm:grid-cols-3 grid-cols-1 gap-6 p-4"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.2, // Stagger animations for child elements
                    },
                },
            }}
        >
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    className="cursor-pointer"
                    variants={{
                        hidden: { opacity: 0, y: 50 }, // Start below with no opacity
                        visible: { opacity: 1, y: 0 }, // Fade in and slide up
                    }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    <Card className="shadow-md shadow-gray-500">
                        <CardHeader>
                            <CardTitle>{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{card.description}</p>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </motion.section>

    )
}
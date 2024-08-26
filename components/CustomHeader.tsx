import logo from '@/public/logos.png'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
export default function CustomHeader() {
    return (
        <nav className="fixed w-full  top-0 left-0 z-50 bg-transparent backdrop-filter backdrop-blur-lg text-black">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center" >
                <div className="text-2xl font-bold">
                    <Image src={logo} alt='logo kato laundry' width={50} />
                </div>
                <ul className="flex space-x-6">
                    <Button variant="outline">Jadi Mitra</Button>

                </ul>
            </div>
        </nav>
    )
}
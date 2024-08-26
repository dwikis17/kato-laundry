import Image from "next/image";

import image_laundry from '@/public/pexels-tima-miroshnichenko-8774511.jpg'
export default function Card() {
    return (
        <>
            <div className="rounded-xl bg-[#3854f2] xl:w-[75%] h-full w-full p-5 relative">
                <p className={`text-white text-left lg:text-2xl text-xl text-left font-thin font-sans`}>Gabung jadi<br></br>member<br></br>dan hemat</p>
                <p className="absolute bottom-16 text-sm font-thin text-white">hingga</p>
                <p className="absolute bottom-6 text-4xl font-bold text-white">10%</p>
            </div>

            <div className="bg-[#FFFF] border shadow-md rounded-xl absolute z-2 lg:w-[35%] p-2  w-[50%] lg:right-10 right-6 h-full">

                <div className=" relative min-h-[120px] rounded-xl ">
                    <Image src={image_laundry} alt="h" className="shadow-xl rounded xl" fill />
                </div>
                <p className={` mt-12`}>Mulai dari</p>
                <p className={` font-bold text-2xl mt-2`}>Rp. 8.000</p>
            </div>

        </>
    )
}
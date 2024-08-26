import CustomHeader from "@/components/CustomHeader";
import HeroSection from "@/components/section/HeroSection";


import { Work_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import WhyUs from "./components/Why";
import Scroll from "./components/Scroll";



const interFont = Inter({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>

      <div className="flex flex-col ">
        <h1>AH</h1>
        <CustomHeader />
        <section id='hero' className="h-screen sm:h-[40vh] relative  mt-10 md:mt-20 ">
          <HeroSection />
        </section>

        <section id='why-us' className="relative p-3  ">
          <WhyUs />
        </section>
        <section id="footer" className="min-h-[400px] bg-black">

        </section>
      </div>
    </>
  );
}

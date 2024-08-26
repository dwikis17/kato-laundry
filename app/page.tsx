import CustomHeader from "@/components/CustomHeader";
import HeroSection from "@/components/section/HeroSection";
import Head from "next/head";
import Image from "next/image";

import { Work_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import WhyUs from "./components/Why";


export const workSans = Work_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const interFont = Inter({
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
        <section id='hero' className=" relative  my-10 md:my-20 ">
          <HeroSection />
        </section>
        <section id='why-us' className="relative  p-3  my-80 md:my-20 ">
          <WhyUs />
        </section>
      </div>
    </>
  );
}

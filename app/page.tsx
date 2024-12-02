import CustomHeader from "@/components/CustomHeader";
import HeroSection from "@/components/section/HeroSection";


import { Work_Sans } from "next/font/google";
import { Inter } from "next/font/google";

import Layout from "./components/Layout";
import CardList from "./components/CardList";
import WhyUs from "./components/Why";
import WhySection from "./components/WhySection";
import WhyJoin from "./components/WhyJoin";
import OurLocation from "./components/OurLocation";


const interFont = Inter({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Layout>
        <HeroSection />
        <CardList />
        <WhySection />
        <WhyJoin />
        <OurLocation />
      </Layout>
    </>
  );
}

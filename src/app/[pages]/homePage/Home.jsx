" use client";
import ChooseSection from "@/app/HomeComponents/ChooseSection";
import ChooseUs from "@/app/HomeComponents/ChooseUs";
import HeroSection from "@/app/HomeComponents/HeroSection";
import { SuperMarquee } from "@/app/HomeComponents/marquee";
import PricingPlan from "@/app/HomeComponents/PricingPlan";
import SecondSection from "@/app/HomeComponents/SecondSection";
import Trust from "@/app/HomeComponents/Trust";
import React from "react";

function HomePage() {
   const marqueeContent = (
      <>
         <span className="marquee-item">Phishing & Social Engineering Training</span>
         <span className="marquee-item text-[#00a99d]">Interactive Video-Based Learning</span>
         <span className="marquee-item">Real-Time Threat Simulations</span>
         <span className="marquee-item text-[#00a99d]">
            Detailed Analytics & Compliance Reports
         </span>
      </>
   );

   return (
      <>
         <HeroSection />
         <SecondSection />
         <SuperMarquee duration="30s">{marqueeContent}</SuperMarquee>
         {/* <Trust /> */}
         {/* <ChooseUs /> */}
         <PricingPlan />
         {/* <ChooseSection /> */}
         {/* <Price /> */}
      </>
   );
}

export default HomePage;

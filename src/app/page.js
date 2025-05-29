"use client";
import Image from "next/image";
import Whyus from "./components/Whyus/Whyus";
// import HowItWorks from "./components/Howitworks/HowItWorks";
import CoreFeatures from "./components/CoreFeatures/CoreFeatures";
import Integrations from "./components/Integrations/Integrations";
import Sdks from "./components/Sdks/Sdks";
import TrustSection from "./components/TrustSection/TrustSection";
import TestimonialsSection from "./components/Testimonials/Testimonials";
import BlogSection from "./components/BlogSection";
import HeroSection from "./components/HeroSection";
import HyperPersonalization from "./components/HyperPersonalization";
import SetupGoals from "./components/SetupGoals";
import FrequencyScheduling from "./components/FrequencyAndScheduling";
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <HeroSection/>

      <CoreFeatures/>
      <HyperPersonalization/>
      <SetupGoals/>
      <FrequencyScheduling/>
      <Whyus />
      <Integrations/>
      <Sdks/>
      <TestimonialsSection/>
      <TrustSection/>
     
      {/* <HowItWorks/> */}
      <BlogSection/>
    </>
  );
}

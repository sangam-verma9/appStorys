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

export default function Home() {
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

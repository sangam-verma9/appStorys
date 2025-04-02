"use client";
import Image from "next/image";
import LandingPage from "./components/Landingpage/LandingPage";
import Whyus from "./components/Whyus/Whyus";
import HowItWorks from "./components/Howitworks/HowItWorks";
import CoreFeatures from "./components/CoreFeatures/CoreFeatures";
import Integrations from "./components/Integrations/Integrations";
import Sdks from "./components/Sdks/Sdks";

export default function Home() {
  return (
    <>
      {/* <LandingPage /> */}
      <Whyus />
      <CoreFeatures/>
      <Integrations/>
      <Sdks/>
      {/* <HowItWorks/> */}
    </>
  );
}

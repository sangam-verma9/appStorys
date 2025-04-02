"use client";
import Image from "next/image";
import LandingPage from "./components/Landingpage/LandingPage";
import Whyus from "./components/Whyus/Whyus";
import HowItWorks from "./components/Howitworks/HowItWorks";
import CoreFeatures from "./components/CoreFeatures/CoreFeatures";

export default function Home() {
  return (
    <>
      {/* <LandingPage /> */}
      <Whyus />
      <CoreFeatures/>
      {/* <HowItWorks/> */}
    </>
  );
}

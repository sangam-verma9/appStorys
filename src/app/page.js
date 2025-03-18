"use client";
import Image from "next/image";
import LandingPage from "./components/Landingpage/LandingPage";
import Whyus from "./components/Whyus/Whyus";

export default function Home() {
  return (
    <>
      <LandingPage />
      <Whyus />
    </>
  );
}

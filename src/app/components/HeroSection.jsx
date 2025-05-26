

"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveHoverButton from "./InteractiveHoverButton";
import store from "../store/store";

import dynamic from 'next/dynamic';
import Link from "next/link";

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const HeroSection = () => {
  const texts = ["Engagement", "Retention", "Stickiness", " Revenue"];
  const [index, setIndex] = useState(0);
  const textColor = ["#FD5F03", "#03A1FD", "#793BDE", "#F200EA", "#0CB600"];
  const [animationData1, setAnimationData1] = useState(null);
  const [animationData2, setAnimationData2] = useState(null);
  const [animationData3, setAnimationData3] = useState(null);

  const { setRequestDemoClick, openContactModal } = store();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Load animation data
  useEffect(() => {
    const loadAnimation = async () => {
      try {
        // Method 1: Try dynamic import first
        const animData1 = await import('../../assets/Herosection-screen-1.json');
        const animData2 = await import('../../assets/Herosection-screen-2.json');
        const animData3 = await import('../../assets/Herosection-screen-3.json');
        setAnimationData1(animData1.default || animData1);
        setAnimationData2(animData2.default || animData2);
        setAnimationData3(animData3.default || animData3);
      } catch (error) {
        try {
          const response1 = await fetch('/assets/Herosection-screen-1.json');
          const response2 = await fetch('/assets/Herosection-screen-2.json');
          const response3 = await fetch('/assets/Herosection-screen-3.json');
          if (!response1.ok) throw new Error('Network response1 was not ok');
          if (!response2.ok) throw new Error('Network response2 was not ok');
          if (!response3.ok) throw new Error('Network response3 was not ok');
          const data1 = await response1.json();
          const data2 = await response2.json();
          const data3 = await response3.json();
          setAnimationData1(data1);
          setAnimationData2(data2);
          setAnimationData3(data3);
        } catch (fetchError) {
          console.error('Both import and fetch failed:', fetchError);
        }
      }
    };

    loadAnimation();
  }, []);

  return (
    <section className="bg-[#FFF7F3] w-full py-10 md:py-10 lg:py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-center w-full flex justify-center items-center flex-col">
            <span className="text-black font-bold text-5xl md:text-[57px] lg:text-[72px]">
              Increase
            </span>
            <span className="inline-block relative ">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  style={{ color: textColor[index] }}
                  className="font-bold text-5xl md:text-6xl lg:text-[100px] absolute transform left-1/2 -translate-x-1/2"
                >
                  {texts[index]}
                </motion.span>
              </AnimatePresence>
              <span className="invisible font-bold text-4xl md:text-6xl lg:text-[72px]">
                {texts.reduce((a, b) => (a.length > b.length ? a : b))}
              </span>
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-black text-center text-lg md:text-xl lg:text-[28.05px] font-medium mt-5 lg:mt-14">
            For your App & website
          </p>

          {/* Animation container */}
          <div className="w-full mt-0 md:mt-10 flex justify-center">
            <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 ">
              <div>
                {animationData1 && (
                  <div className="relative w-full" style={{ minHeight: "100px" }}>
                    <Lottie
                      animationData={animationData1}
                      loop={false}
                      autoplay={true}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                )}
              </div>
              <div >
                {animationData2 && (
                  <div className="relative w-full" style={{ minHeight: "100px" }}>
                    <Lottie
                      animationData={animationData2}
                      loop={false}
                      autoplay={true}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                )}
              </div>
              <div >
                {animationData3 && (
                  <div className="relative w-full" style={{ minHeight: "100px" }}>
                    <Lottie
                      animationData={animationData3}
                      loop={false}
                      autoplay={true}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Call-to-action button with increased width */}
          <div className="flex justify-center md:mt-8">
            <Link href={"/bookademo"} >
              <InteractiveHoverButton
                className="bg-[#FD5F03] text-white w-[200px] h-[58.61px] font-medium text-xl border-2 border-[#FD5F03]"
              // onClick={() => {
              //   setRequestDemoClick(true);
              //   openContactModal();
              // }}
              >
                Book a Demo
              </InteractiveHoverButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
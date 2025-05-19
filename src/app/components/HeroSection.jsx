

"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveHoverButton from "./InteractiveHoverButton";
import store from "../store/store";

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const HeroSection = () => {
  const texts = ["Engagement", "Retention", "Stickiness", " Revenue"];
  const [index, setIndex] = useState(0);
  const textColor = ["#FD5F03", "#03A1FD", "#793BDE", "#F200EA", "#0CB600"];
  const [animationData, setAnimationData] = useState(null);

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
        const animData = await import('../../assets/heromain.json');
        console.log('Animation data loaded:', animData);
        setAnimationData(animData.default || animData);
      } catch (error) {
        console.log('Dynamic import failed, trying fetch...', error);
        
        // Method 2: Try fetch as fallback
        try {
          const response = await fetch('/assets/heromain.json');
          if (!response.ok) throw new Error('Network response was not ok');
          const data = await response.json();
          console.log('Animation data fetched:', data);
          setAnimationData(data);
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
            <span className="text-black font-bold text-4xl md:text-[57px] lg:text-[72px]">
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
                  className="font-bold text-4xl md:text-6xl lg:text-[100px] absolute transform left-1/2 -translate-x-1/2"
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
          <div className="w-full mt-10 md:mt-16 flex justify-center">
            <div className="relative w-full max-w-6xl">
              {/* Show Lottie animation when data is loaded */}
              {animationData && (
                <div className="relative w-full" style={{minHeight: "400px"}}>
                  {/* <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: 'auto' }}
                    onLoadedData={() => console.log('Lottie animation loaded successfully!')}
                  /> */}
                  <Lottie
  animationData={animationData}
  loop={false}
  autoplay={true}
  style={{ width: '100%', height: 'auto' }}
/>

                </div>
              )}
            </div>
          </div>

          {/* Call-to-action button with increased width */}
          <div className="flex justify-center -mt-40 md:-mt-8">
            <InteractiveHoverButton
              className="bg-[#FD5F03] text-white w-[200px] h-[58.61px] font-medium text-xl"
              onClick={() => {
                setRequestDemoClick(true);
                openContactModal();
              }}
            >
              Schedule a Demo
            </InteractiveHoverButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
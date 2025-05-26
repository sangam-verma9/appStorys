"use client";

import Image from "next/image";
import React from 'react';
import FeatureTicker from "../components/FeatureTicker";
import StepsSection from "../components/StepsSection";
import featurePip from '../../assets/feature_pip.png';
import pipBanner1 from '../../assets/pip_banner_1.png';
import pipBanner2 from '../../assets/pip_banner_2.png';
import pipBanner3 from '../../assets/pip_banner_3.png';
import Link from "next/link";

export default function PiP() {
  const setRequestDemoClick = () => {
    // This will be implemented when we set up the store
    console.log("Request demo clicked");
  };

  return (
    <main className="flex flex-col items-center w-full">
      {/* Hero Section - Full width background with centered content */}
      <section className="w-full bg-gradient-to-b from-[#FFEADD] to-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 py-16">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] w-auto">
                <Image
                  src={featurePip}
                  alt="AppStorys feature pip"
                  width={400}
                  height={539}
                  style={{ objectFit: "contain", width: "auto", height: "100%" }}
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-3">
              <h1 className="text-4xl md:text-5xl lg:text-[65.5px] text-black font-semibold leading-tight md:leading-[0.9]">Increase Engagement</h1>
              <h1 className="text-4xl md:text-5xl lg:text-[65.5px] text-black font-semibold leading-tight md:leading-[1.07]">With PiP Videos</h1>
              <p className="text-black text-base md:text-lg max-w-[500px] mt-6">
                Keep users engaged with floating PiP videos, allowing them to watch content while continuing to browse your app. Enhance multitasking and improve user retention effortlessly.
              </p>
              <Link
                className="rounded-full bg-[#FF5E00] text-white px-8 py-3 text-sm font-bold tracking-wider flex items-center gap-2 mt-8"
                href={"/bookademo"}
              >
                <div className="h-[5px] w-[5px] bg-white rounded-full"></div>
                REQUEST A DEMO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker/Marquee - Full width with centered content */}
      <section className="w-full">
        <div className="mx-auto">
          <FeatureTicker
            number1="24%"
            number2="64%"
            number3="4.2x"
            heading1="increase in views"
            heading2="increase in feature Adoption"
            heading3="Increase In Sales"
          />
        </div>
      </section>

      {/* Feature Section - Full width background with centered content */}
      <section className="w-full bg-[#FFF7F3]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-16">
          <div className="flex flex-col gap-16">
            {/* Feature 1 */}
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-auto">
                  <Image
                    src={pipBanner1}
                    alt="AppStorys pip banner 1"
                    width={400}
                    height={421}
                    style={{ objectFit: "contain", width: "auto", height: "100%" }}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col gap-6 px-5">
                  <h2 className="text-3xl md:text-4xl lg:text-[46px] font-semibold leading-tight">
                    Watch While You Explore
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg ">
                      Watch while you explore: With Picture-in-Picture (PiP) video feature in your App, users can enjoy immersive content without interrupting their app experience.
                    </li>
                    <li className="feature-list text-lg ">
                      Whether they're learning about new features, catching up on tutorials, or watching promotional videos, PiP allows users to keep the video in view while navigating through the app.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col gap-6 px-5">
                  <h2 className="text-3xl md:text-4xl lg:text-[46px] font-semibold leading-tight">
                    Highlight New Deals And Discounts
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg ">
                      Capture user attention by prominently showcasing the latest deals and discounts within your app.
                    </li>
                    <li className="feature-list text-lg ">
                      Use vibrant banners and notifications to ensure users are always informed about exciting offers that enhance their shopping experience.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-auto">
                  <Image
                    src={pipBanner2}
                    alt="AppStorys pip banner 2"
                    width={400}
                    height={421}
                    style={{ objectFit: "contain", width: "auto", height: "100%" }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-auto">
                  <Image
                    src={pipBanner3}
                    alt="AppStorys pip banner 3"
                    width={400}
                    height={421}
                    style={{ objectFit: "contain", width: "auto", height: "100%" }}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col gap-6 px-5">
                  <h2 className="text-3xl md:text-4xl lg:text-[46px] font-semibold leading-tight">
                    Video Glimpse
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg ">
                      By emphasizing limited-time promotions and exclusive discounts, you can drive user engagement, increase conversions, and foster a sense of urgency that encourages immediate action
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section - Already full width in the component */}
      <StepsSection keyword="PiP Videos" />
    </main>
  );
}
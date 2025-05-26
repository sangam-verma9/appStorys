"use client";

import Image from "next/image";
import React from 'react';
import FeatureTicker from "../components/FeatureTicker";
import StepsSection from "../components/StepsSection";
import featureReels from '../../assets/feature_Reels.png';
import reelsBanner1 from '../../assets/reels_banner_1.png';
import reelsBanner2 from '../../assets/reels_banner_2.png';
import reelsBanner3 from '../../assets/reels_banner_3.png';
import Link from "next/link";

export default function Reels() {
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
                  src={featureReels}
                  alt="AppStorys feature reels"
                  width={400}
                  height={502}
                  style={{ objectFit: "contain", width: "auto", height: "100%" }}
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-3">
              <h1 className="text-4xl md:text-5xl lg:text-[59px] text-black font-semibold leading-tight md:leading-[1.1]">Boost Engagement with Reels & Short Videos</h1>
              <p className="text-black text-base md:text-lg max-w-[500px] mt-6">
                Add Instagram like Reels or YouTube like short videos in an endless scrolling fashion to promote content in an all new manner in your App.
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
            number1="3x"
            number2="28%"
            number3="47%"
            heading1="Increase in User Interactions with Visual Conten"
            heading2="Growth in Conversion Rates"
            heading3="Boost in User Engagement"
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
                    src={reelsBanner1}
                    alt="AppStorys reels banner 1"
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
                    Capture Attention Instantly
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg ">
                      Deliver bite-sized, engaging content that grabs users' focus within seconds, keeping them hooked
                    </li>
                    <li className="feature-list text-lg ">
                      Seamless autoplay ensures continuous user engagement without interruption.
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
                    Drive Deeper Engagement
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg ">
                      Encourage interactions with immersive visuals and quick storytelling that keeps users captivated.
                    </li>
                    <li className="feature-list text-lg ">
                      Use intuitive swipe gestures to enhance the storytelling flow and keep users engaged longer
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-auto">
                  <Image
                    src={reelsBanner2}
                    alt="AppStorys reels banner 2"
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
                    src={reelsBanner3}
                    alt="AppStorys reels banner 3"
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
                    Boost Retention and Conversions
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg ">
                      Showcase key features, promotions, or updates through short, easily consumable videos that enhance user understanding and recall.
                    </li>
                    <li className="feature-list text-lg ">
                      Enable seamless sharing options, increasing reach and encouraging users to take desired actions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section - Already full width in the component */}
      <StepsSection keyword="Reels" />
    </main>
  );
}
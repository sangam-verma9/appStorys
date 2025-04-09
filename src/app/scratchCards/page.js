"use client";

import Image from "next/image";
import React from 'react';
import FeatureTicker from "../components/FeatureTicker";
import StepsSection from "../components/StepsSection";
import featureScratchCards from '../../assets/feature_ScratchCards.png';
import scratchCardBanner1 from '../../assets/scratchCard_banner_1.png';
import scratchCardBanner2 from '../../assets/scratchCard_banner_2.png';
import scratchCardBanner3 from '../../assets/scratchCard_banner_3.png';

export default function ScratchCards() {
  const setRequestDemoClick = () => {
    // This will be implemented when we set up the store
    console.log("Request demo clicked");
  };

  return (
    <main className="flex flex-col items-center w-full">
      {/* Hero Section - Full width background with centered content */}
      <section className="w-full bg-gradient-to-b from-[#FFEADD] to-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-20">
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-12 py-16">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] w-auto">
                <Image
                  src={featureScratchCards}
                  alt="AppStorys feature scratch cards"
                  width={400}
                  height={502}
                  style={{ objectFit: "contain", width: "auto", height: "100%" }}
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-3">
              <h1 className="text-4xl md:text-5xl lg:text-[59px] text-black font-semibold leading-tight md:leading-[0.97]">
                Add Surprise Element With Gamified Scratch Cards
              </h1>
              <p className="text-black text-base md:text-lg max-w-[500px] mt-6">
                With Scratch Cards, you can create engaging, gamified experiences right from the dashboard. Add up-to 5 rewards, set conditions, let users be rewarded. Once activated, users are rewarded with personalized incentives like discounts, points, or exclusive offers. Ideal for boosting engagement, conversions, and loyalty, Scratch Cards are commonly used in e-commerce, gaming, and other leading categories.
              </p>
              <button 
                className="rounded-full bg-[#FF5E00] text-white px-8 py-3 text-sm font-bold tracking-wider flex items-center gap-2 mt-8"
                onClick={() => setRequestDemoClick(true)}
              >
                <div className="h-[5px] w-[5px] bg-white rounded-full"></div>
                REQUEST A DEMO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker/Marquee - Full width with centered content */}
      <section className="w-full">
        <div className="mx-auto">
          <FeatureTicker
            number1="3x"
            number2="50%"
            number3="33%"
            heading1="Higher User Engagement with Gamification Elements"
            heading2="Increase in User Loyalty Through Surprise Rewards"
            heading3="Boost in Conversion Rates from Scratch Card Incentives"
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
                    src={scratchCardBanner1}
                    alt="AppStorys scratch card banner 1"
                    width={400}
                    height={421}
                    style={{ objectFit: "contain", width: "auto", height: "100%" }}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col gap-6">
                  <h2 className="text-3xl md:text-4xl lg:text-[46px] font-semibold leading-tight">
                    Enhance Gamification for Higher Engagement
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg md:text-xl">
                      Create immersive scratch card experiences that make user interactions more enjoyable and rewarding.
                    </li>
                    <li className="feature-list text-lg md:text-xl">
                      Offer interactive, personalized features that engage users and simplify their journey.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col gap-6">
                  <h2 className="text-3xl md:text-4xl lg:text-[46px] font-semibold leading-tight">
                    Boost Loyalty with Surprise Rewards
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg md:text-xl">
                      Reward users with personalized surprises that create excitement and keep them coming back
                    </li>
                    <li className="feature-list text-lg md:text-xl">
                      Offer exclusive incentives to foster a sense of exclusivity, enhancing long-term user loyalty.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-auto">
                  <Image
                    src={scratchCardBanner2}
                    alt="AppStorys scratch card banner 2"
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
                    src={scratchCardBanner3}
                    alt="AppStorys scratch card banner 3"
                    width={400}
                    height={421}
                    style={{ objectFit: "contain", width: "auto", height: "100%" }}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col gap-6">
                  <h2 className="text-3xl md:text-4xl lg:text-[46px] font-semibold leading-tight">
                    Drive Conversions with Instant Incentives
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg md:text-xl">
                      Offer instant rewards like discounts, points, or exclusive offers to drive conversions.
                    </li>
                    <li className="feature-list text-lg md:text-xl">
                      Use real-time feedback to ensure users take immediate action, boosting overall satisfaction.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section - Already full width in the component */}
      <StepsSection keyword="Scratch Cards" />
    </main>
  );
}
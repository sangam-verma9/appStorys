"use client";

import Image from "next/image";
import React from 'react';
import FeatureTicker from "../components/FeatureTicker";
import StepsSection from "../components/StepsSection";
import featureCsat from '../../assets/feature_Csat.png';
import csatBanner1 from '../../assets/csat_banner_1.png';
import csatBanner2 from '../../assets/csat_banner_2.png';
import csatBanner3 from '../../assets/csat_banner_3.png';

export default function CSATs() {
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
                  src={featureCsat}
                  alt="AppStorys feature CSAT"
                  width={400}
                  height={502}
                  style={{ objectFit: "contain", width: "auto", height: "100%" }}
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-3">
              <h1 className="text-4xl md:text-5xl lg:text-[59px] text-black font-semibold leading-tight md:leading-[0.97]">
                Transform Feedback into Growth with CSAT Metrics
              </h1>
              <p className="text-black text-base md:text-lg max-w-[500px] mt-6">
                Ask users the right questions and get instant, actionable feedback through surveys.
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
            number1="3.5x"
            number2="30%"
            number3="3.6x"
            heading1="More Accurate Insights"
            heading2="Improvement in feedback response rates"
            heading3="Relevant Insights Gain"
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
                    src={csatBanner1}
                    alt="AppStorys CSAT banner 1"
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
                    Seamless User Experience
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg md:text-xl">
                      In-app surveys appear naturally, ensuring no disruption to the user's experience.
                    </li>
                    <li className="feature-list text-lg md:text-xl">
                      Users can easily share feedback with minimal effort, making participation simple and convenient.
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
                    Contextual and Targeted Feedback
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg md:text-xl">
                      Trigger surveys based on user actions, behaviors, or milestones.
                    </li>
                    <li className="feature-list text-lg md:text-xl">
                      Ask one carefully crafted question at the right moment to capture the most insightful and valuable feedback from users.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-auto">
                  <Image
                    src={csatBanner2}
                    alt="AppStorys CSAT banner 2"
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
                    src={csatBanner3}
                    alt="AppStorys CSAT banner 3"
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
                    Real-Time Analytics for Immediate Action
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg md:text-xl">
                      Access user opinions and preferences instantly.
                    </li>
                    <li className="feature-list text-lg md:text-xl">
                      Use analytics to make data-driven decisions that boost satisfaction and performance.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section - Already full width in the component */}
      <StepsSection keyword="CSATs" />
    </main>
  );
}
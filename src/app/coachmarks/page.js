"use client";

import Image from "next/image";
import React from 'react';
import FeatureTicker from "../components/FeatureTicker";
import StepsSection from "../components/StepsSection";
import featureCoachmark from '../../assets/feature_coachmark.png';
import coachmarkBanner1 from '../../assets/coachmark_banner_1.png';
import coachmarkBanner2 from '../../assets/coachmark_banner_2.png';
import coachmarkBanner3 from '../../assets/coachmark_banner_3.png';
import Link from "next/link";

export default function Coachmarks() {
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
                  src={featureCoachmark}
                  alt="AppStorys feature coachmark"
                  width={400}
                  height={512}
                  style={{ objectFit: "contain", width: "auto", height: "100%" }}
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-3">
              <h1 className="text-4xl md:text-5xl lg:text-[65.5px] text-black font-semibold leading-tight md:leading-[1.2]">
                Highlight Features With Coachmarks
              </h1>
              <p className="text-black text-base md:text-lg max-w-[500px] mt-6">
                Use Cochmark to highlight important features in your app and use feature adoption.
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
            number1="45%"
            number2="40%"
            number3="35%"
            heading1="Increase in feature adoption rate"
            heading2="reduction in time to first user value"
            heading3="Increase in onboarding task completion"
          />
        </div>
      </section>

      {/* Feature Section - Full width background with centered content */}
      <section className="w-full bg-[#FFF7F3]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-16">
          <div className="flex flex-col gap-16">
            {/* Feature 1 */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-auto">
                  <Image
                    src={coachmarkBanner1}
                    alt="AppStorys coachmark banner 1"
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
                    Highlight Important Features
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg ">
                      Use on-screen visual cues to guide, highlight, and inform users about important features
                    </li>
                    <li className="feature-list text-lg ">
                      Draw user attention to key actions and features that they might otherwise overlook
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
                    Attract user Attention
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg ">
                      Grab user attention to direct them to key features and products smoothly.
                    </li>
                    <li className="feature-list text-lg ">
                      Encourage exploration and interaction on your platform for higher user engagement
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-auto">
                  <Image
                    src={coachmarkBanner2}
                    alt="AppStorys coachmark banner 2"
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
                    src={coachmarkBanner3}
                    alt="AppStorys coachmark banner 3"
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
                    Higher Click-through Rate
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg ">
                      Provide users with immediate access to navigate through the platform, and enhance usability
                    </li>
                    <li className="feature-list text-lg ">
                      Guide users to key features or products to enhance interaction and ultimately more clicks.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section - Already full width in the component */}
      <StepsSection keyword="Coachmark" />
    </main>
  );
}
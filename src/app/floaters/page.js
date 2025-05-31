"use client";

import Image from "next/image";
import React from 'react';
import FeatureTicker from "../components/FeatureTicker";
import StepsSection from "../components/StepsSection";
import featureFloater from '../../assets/feature_floater.png';
import floaterBanner1 from '../../assets/floater_banner_1.png';
import floaterBanner2 from '../../assets/floater_banner_2.png';
import floaterBanner3 from '../../assets/floater_banner_3.png';
import Link from "next/link";

export default function Floaters() {
  const setRequestDemoClick = () => {
    // This will be implemented when we set up the store
    console.log("Request demo clicked");
  };

  return (
    <main className="flex flex-col items-center w-full">
      {/* Hero Section - Full width background with centered content */}
      <section className="w-full bg-gradient-to-b from-[#FFEADD] to-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-28">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 py-16">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-3 order-2">
              <h1 className="text-4xl md:text-5xl lg:text-[65.5px] text-black font-semibold leading-tight">
                Guide Users With Floaters
              </h1>
              <p className="text-black text-base md:text-lg max-w-[500px] mt-6">
                Floaters provide non-intrusive guidance and reminders to users, helping them discover key features or promotions.
              </p>
              <Link
                className="rounded-full bg-[#FF5E00] text-white px-8 py-3 text-sm font-bold tracking-wider flex items-center gap-2 mt-8"
                href={"/bookademo"}
              >
                <div className="h-[5px] w-[5px] bg-white rounded-full"></div>
                REQUEST A DEMO
              </Link>
            </div>
            <div className="w-full md:w-1/2 flex justify-center order-1">
              <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] w-auto">
                <Image
                  src={featureFloater}
                  alt="AppStorys feature floater"
                  width={400}
                  height={509}
                  style={{ objectFit: "contain", width: "auto", height: "100%" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker/Marquee - Full width with centered content */}
      <section className="w-full">
        <div className="mx-auto">
          <FeatureTicker
            number1="45%"
            number2="25%"
            number3="30%"
            heading1="Upliftment in feature adoption"
            heading2="Increase in feature CTR"
            heading3="Reduction in time to value"
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
                    src={floaterBanner1}
                    alt="AppStorys floater banner 1"
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
                    Floating Action Button For Maximum Impact
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg ">
                      Utilize floaters to deliver timely messages, special offers, or helpful tips without disrupting the user experience.
                    </li>
                    <li className="feature-list text-lg ">
                      These subtle yet impactful prompts glide into view, guiding users toward important actions or highlighting new features.
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
                    New Feature Adoption
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg ">
                      By strategically placing floaters at key moments, you can guide users to try out new functionalities, ensuring they fully benefit from your app's evolving capabilities
                    </li>
                    <li className="feature-list text-lg ">
                      Boost user engagement and satisfaction by making it easy for them to discover and adopt the innovative features you've introduced.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-auto">
                  <Image
                    src={floaterBanner2}
                    alt="AppStorys floater banner 2"
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
                    src={floaterBanner3}
                    alt="AppStorys floater banner 3"
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
                    Non-Intrusive Feature Discovery
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg ">
                      Help users find the best of features without interrupting their navigation
                    </li>
                    <li className="feature-list text-lg ">
                      Grab user attention and drive them to explore new features.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section - Already full width in the component */}
      <StepsSection keyword="Floater" />
    </main>
  );
}
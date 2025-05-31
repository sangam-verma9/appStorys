"use client";

import Image from "next/image";
import React from 'react';
import FeatureTicker from "../components/FeatureTicker";
import StepsSection from "../components/StepsSection";
import featureStory from '../../assets/feature_story.png';
import storyBanner1 from '../../assets/story_banner_1.png';
import storyBanner2 from '../../assets/story_banner_2.png';
import storyBanner3 from '../../assets/story_banner_3.png';
import Link from "next/link";

export default function Stories() {
  const setRequestDemoClick = () => {

    console.log("Request demo clicked");
  };

  return (
    <main className="flex flex-col items-center w-full">
      {/* Hero Section - Full width background with centered content */}
      <section className="w-full bg-gradient-to-b from-[#FFEADD] to-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 py-16">
            <div className="w-full md:w-1/2 flex justify-center order-1">
              <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] w-auto">
                <Image
                  src={featureStory}
                  alt="AppStorys feature story"
                  width={400}
                  height={557}
                  style={{ objectFit: "contain", width: "auto", height: "100%" }}
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-3 order-2">
              <h1 className="text-4xl md:text-5xl lg:text-[65.5px] text-black font-semibold  ">Boost User <br /> Engagement With Stories</h1>
              <p className="text-black text-base md:text-lg max-w-[500px] mt-6">
                Keep users captivated with immersive Stories that showcase key content in a swipeable, full-screen format. Enable quick, engaging interactions that boost time spent in your app and strengthen user retention naturally.
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
        <div className=" mx-auto">
          <FeatureTicker
            number1="50%"
            number2="37%"
            number3="15%"
            heading1="Increase in feature adoption"
            heading2="Increase in page views"
            heading3="Increase in feature usage"
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
                    src={storyBanner1}
                    alt="AppStorys story banner 1"
                    width={400}
                    height={421}
                    style={{ objectFit: "contain", width: "auto", height: "100%" }}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 sf-pro">
                <div className="flex flex-col gap-6 px-5">
                  <h2 className="text-3xl md:text-4xl lg:text-[46px] font-semibold leading-tight">
                    Add Stories To Your App
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg md:text-xl">
                      Give your platform a personalized touch by adding stories.
                    </li>
                    <li className="feature-list text-lg md:text-xl">
                      Build rapport with users in an interactive way using stories.
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
                    Present Content In An All New Manner
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg md:text-xl">
                      Make experience enjoyable for your users in an innovative way
                    </li>
                    <li className="feature-list text-lg md:text-xl">
                      Offer personalised, shoppable, and authentic content to your users to impact retention
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-auto">
                  <Image
                    src={storyBanner2}
                    alt="AppStorys story banner 2"
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
                    src={storyBanner3}
                    alt="AppStorys story banner 3"
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
                    Introduce Interactive Elements Within Stories
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg md:text-xl">
                      Engage and interact more with users using stories.
                    </li>
                    <li className="feature-list text-lg md:text-xl">
                      Add interactive components like emoji reactions, feedback polls, and quizzes.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section - Already full width in the component */}
      <StepsSection keyword="Stories" />
    </main>
  );
}
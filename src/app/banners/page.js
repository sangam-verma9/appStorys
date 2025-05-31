"use client";

import Image from "next/image";
import React from 'react';
import FeatureTicker from "../components/FeatureTicker";
import StepsSection from "../components/StepsSection";
import featureBanner from '../../assets/feature_banner.png';
import bannerBanner1 from '../../assets/banner_banner_1.png';
import bannerBanner2 from '../../assets/banner_banner_2.png';
import bannerBanner3 from '../../assets/banner_banner_3.png';
import Link from "next/link";

export default function Banners() {
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
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-3 order-2">
              <h1 className="text-4xl md:text-5xl lg:text-[65.5px] text-black font-semibold leading-tight">
                Highlight new deals with Banners
              </h1>
              <p className="text-black text-base md:text-lg max-w-[500px] mt-6">
                Drive engagement by displaying eye-catching banners within your app, promoting key features, offers, or updates.
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
                  src={featureBanner}
                  alt="AppStorys feature banner"
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
            number1="50%"
            number2="20%"
            number3="40%"
            heading1="Increase in feature adoption"
            heading2="Increase in CTR"
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
                    src={bannerBanner1}
                    alt="AppStorys banner banner 1"
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
                    Grab Attention
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg ">
                      Capture user attention at crucial moments with strategically placed banners that enhance user experience without interrupting app flow.
                    </li>
                    <li className="feature-list text-lg ">
                      Easily highlight new deals. Banners help in driving user attention towards new deals, new product launches or maybe a webpage you'd like your users to be redirected to
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
                    Increase Conversions
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg ">
                      Turn app traffic into conversions by highlighting promotions, new features, or limited-time offers directly through interactive banners.
                    </li>
                    <li className="feature-list text-lg ">
                      Since banners are instantly visible, they help in increase conversion and highly click through rates.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-auto">
                  <Image
                    src={bannerBanner2}
                    alt="AppStorys banner banner 2"
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
                    src={bannerBanner3}
                    alt="AppStorys banner banner 3"
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
                    Your Message Unmissable
                  </h2>
                  <ul className="flex flex-col gap-3">
                    <li className="feature-list text-lg ">
                      Deliver personalized content and promotions to specific user segments with dynamic banners tailored to their preferences.
                    </li>
                    <li className="feature-list text-lg ">
                      Integrate with CleverTap and MoEngage to segment your audience. Show different banners on different screens. Show different banners to different users.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section - Already full width in the component */}
      <StepsSection keyword="Banner" />
    </main>
  );
}
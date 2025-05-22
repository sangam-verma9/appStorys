

"use client";
import React, { useState, useEffect } from 'react';
import { Inter, Bricolage_Grotesque, Satisfy } from 'next/font/google';
import "../animateborder.css"
import Image from 'next/image';

// Import all feature images
import sc1 from "../../../assets/sc1.png";
import sc2 from "../../../assets/sc2.png";
import sc3 from "../../../assets/sc3.png";
import sc4 from "../../../assets/sc4.png";
import sc5 from "../../../assets/sc5.png";
import sc6 from "../../../assets/sc6.png";
import sc7 from "../../../assets/sc7.png";
import sc8 from "../../../assets/sc8.gif";
import sc9 from "../../../assets/sc9.png";
import sc10 from "../../../assets/sc10.png";
import sc11 from "../../../assets/sc11.png";
import sc12 from "../../../assets/sc12.png";
import sc13 from "../../../assets/sc13.png";
import sc14 from "../../../assets/sc14.png";


const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'] });


const getFeatureImage = (imageName) => {
  switch (imageName) {
    case "sc1": return sc1;
    case "sc2": return sc2;
    case "sc3": return sc3;
    case "sc4": return sc4;
    case "sc5": return sc5;
    case "sc6": return sc6;
    case "sc7": return sc7;
    case "sc8": return sc8;
    case "sc9": return sc9;
    case "sc10": return sc10;
    case "sc11": return sc11;
    case "sc12": return sc12;
    case "sc13": return sc13;
    case "sc14": return sc14;
    default: return sc1;
  }
};

const FeatureCard = ({ number, title, description, metrics, imageName }) => {
  const featureImage = getFeatureImage(imageName || `sc${number}`);

  return (
    <div className="w-full max-w-[582px] h-[651px] flex-shrink-0 rounded-[12px] border-[2px] border-[#008FFF] bg-white shadow-[4px_8px_32px_0px_rgba(148,114,80,0.18)] p-6 flex flex-col items-center mx-auto overflow-visible">
      {/* Image container with outer positioning for the number */}
      <div className="relative w-full max-w-[527px] mb-6">
        {/* Number indicator positioned absolutely relative to parent */}
        <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-[#008FFF] flex items-center justify-center z-10 text-white text-xl font-bold border-white border-2">
          {number}
        </div>

        {/* Inner box with image */}
        <div className="w-full h-[368px] rounded-[12px] border-[2px] border-solid border-[#008FFF] overflow-hidden ">
          {/* Feature image */}
          <div className="w-full h-full relative">
            <Image
              src={featureImage}
              alt={`${title} feature`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-contain`}
              priority={number <= 3}
              style={{
                marginLeft: number == 13 ? -8 : 0
              }}
            />
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-black font-sf-pro text-[24px] font-medium leading-[19px] capitalize mb-4 w-full text-left">
        {title}
      </h3>

      {/* Description */}
      <p className="w-full max-w-[305px] text-[#2F2F2F] font-sf-pro text-[14px] font-normal leading-[128%] text-left mb-8 h-[50px]">
        {description}
      </p>

      {/* Metrics - Changed from flex to grid for better responsiveness */}
      {/* <div className="w-full grid grid-cols-3 gap-2 mt-auto">
        {metrics && metrics.length > 0 ? metrics.map((metric, index) => (
          <div key={index} className="flex flex-col items-start">
            <p className="text-[#008FFF] text-start font-product-sans text-[32px] md:text-[38px] lg:text-[41px] font-bold leading-[110%] capitalize">
              {metric.value}
            </p>
            <p className="text-[#2F2F2F] text-start font-sf-pro text-[10px] md:text-[11px] lg:text-[12px] font-medium leading-[110%] capitalize max-w-[80px]">
              {metric.label}
            </p>
          </div>
        )) : (
          <div className="flex justify-center w-full col-span-3">
            <p className="text-gray-500">No metrics available</p>
          </div>
        )}
      </div> */}

      <div className="w-full grid grid-cols-3 gap-2">
        {metrics && metrics.length > 0 ? metrics.map((metric, index) => (
          <div key={index} className="flex flex-col items-start">
            <p className="text-[#008FFF] text-start font-product-sans text-[24px] md:text-[28px] lg:text-[34px] font-bold leading-[110%] capitalize">
              {metric.value}
            </p>
            <p className="text-[#2F2F2F] text-start font-sf-pro text-[9px] md:text-[10px] lg:text-[11px] font-medium leading-[110%] capitalize max-w-[80px]">
              {metric.label}
            </p>
          </div>
        )) : (
          <div className="flex justify-center w-full col-span-3">
            <p className="text-gray-500">No metrics available</p>
          </div>
        )}
      </div>
    </div>
  );
};

const FeatureCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Features data
  const features = [
    {
      id: 1,
      title: "Stories",
      description: "Let your brand connect with the audience and elevate your presence through short stories, leave a lasting impression.",
      imageName: "sc1",
      metrics: [
        { value: "5x", label: "More Content Consumption" },
        { value: "23%", label: "Increase In Page Views" },
        { value: "37%", label: "Decrease In Bounce Rate" }
      ]
    },
    {
      id: 2,
      title: "PiP Videos",
      description: "Keep users informed with picture-in-picture videos that deliver updates without interrupting their experience.",
      imageName: "sc2",
      metrics: [
        { value: "24%", label: "Boost In Marketing Engagement" },
        { value: "64%", label: "Increase In Feature Adoption" },
        { value: "0.3x", label: "Decrease In Bounce Rate" }
      ]
    },
    {
      id: 3,
      title: "Reels",
      description: "let your audience engage and interact with the eye-catching videos that get your message across in seconds without disrupting their browsing experience.",
      imageName: "sc3",
      metrics: [
        { value: "7x", label: "More Content Consumption" },
        { value: "60%", label: "Increase In Retention" },
        { value: "15%", label: "Increase In Session Duration" }
      ]
    },
    {
      id: 4,
      title: "Bottom Sheets",
      description: "Rich media bite sized content for immersive user experiences.",
      imageName: "sc4",
      metrics: [
        { value: "3x", label: "Better User Engagement" },
        { value: "45%", label: "Higher Conversion Rate" },
        { value: "18%", label: "Reduced Exit Rate" }
      ]
    },
    {
      id: 5,
      title: "Banner",
      description: "Automatic banner moving with screen for persistent visibility.",
      imageName: "sc5",
      metrics: [
        { value: "4x", label: "Improved CTR" },
        { value: "29%", label: "Higher Brand Recall" },
        { value: "41%", label: `Better Message Delivery ` }
      ]
    },
    {
      id: 6,
      title: "Floaters",
      description: "Small Image/GIF on screen floating with content for subtle engagement.",
      imageName: "sc6",
      metrics: [
        { value: "2.5x", label: "Better Engagement" },
        { value: "37%", label: "Improved Visibility" },
        { value: "15%", label: "Higher Response Rate" }
      ]
    },
    {
      id: 7,
      title: "Widgets",
      description: "Customizable scalable images/animation for enhanced UX.",
      imageName: "sc7",
      metrics: [
        { value: "6x", label: "More Interactions" },
        { value: "52%", label: "Better Feature Discovery" },
        { value: "33%", label: "Higher Session Time" }
      ]
    },
    {
      id: 8,
      title: "Scratch Card",
      description: "Gamification option to engage users and boost interactions.",
      imageName: "sc8",
      metrics: [
        { value: "8x", label: "Higher Engagement" },
        { value: "75%", label: "Increased Participation" },
        { value: "43%", label: "Better Conversion" }
      ]
    },
    {
      id: 9,
      title: "Quiz",
      description: "Ask users questions and engage them in interactive learning.",
      imageName: "sc9",
      metrics: [
        { value: "4.5x", label: "Better Learning Outcome" },
        { value: "68%", label: "Increased Knowledge Retention" },
        { value: "39%", label: "Higher User Satisfaction" }
      ]
    },
    {
      id: 10,
      title: "Survey",
      description: "Get user inputs systematically for improved product development.",
      imageName: "sc10",
      metrics: [
        { value: "3.8x", label: "Better Data Collection" },
        { value: "57%", label: "Increased Response Rate" },
        { value: "41%", label: "Higher Completion Rate" }
      ]
    },
    {
      id: 11,
      title: "CSAT Feedback",
      description: "Measure services via feedback for continuous improvement.",
      imageName: "sc11",
      metrics: [
        { value: "3.2x", label: "Better Service Insights" },
        { value: "43%", label: "Increased Customer Loyalty" },
        { value: "28%", label: "Higher Service Rating" }
      ]
    },
    {
      id: 12,
      title: "Tooltips",
      description: "Onboarding journey for users with helpful contextual information.",
      imageName: "sc12",
      metrics: [
        { value: "2.7x", label: "Better Feature Adoption" },
        { value: "49%", label: "Reduced Support Tickets" },
        { value: "31%", label: "Higher User Proficiency" }
      ]
    },
    {
      id: 13,
      title: "Coachmarks",
      description: "Highlight new features with wrapper for better discoverability.",
      imageName: "sc13",
      metrics: [
        { value: "4.2x", label: "Better Feature Discovery" },
        { value: "56%", label: "Increased User Engagement" },
        { value: "35%", label: "Higher Feature Usage" }
      ]
    },
    {
      id: 14,
      title: "Spotlight",
      description: "Get user attention to specific features for enhanced focus.",
      imageName: "sc14",
      metrics: [
        { value: "5.5x", label: "Better Feature Focus" },
        { value: "65%", label: "Increased Core Feature Usage" },
        { value: "38%", label: "Higher User Satisfaction" }
      ]
    }
  ];

  // Update slides to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesToShow >= features.length
        ? 0
        : prevIndex + slidesToShow
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - slidesToShow < 0
        ? Math.max(0, features.length - slidesToShow)
        : prevIndex - slidesToShow
    );
  };

  const visibleFeatures = features.slice(currentIndex, currentIndex + slidesToShow);

  return (
    <div className="w-full bg-[#FFF7F3]">
      <div className="sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[1200px] py-8 md:py-12 lg:py-16 flex flex-col justify-center mx-auto px-4 sm:px-6 md:px-0">
        <h3 className={`text-[#FD5F03] text-[22px] md:text-[26px] text-center ${satisfy.className}`}>Core Features</h3>
        <h1 className="font-sf-pro text-[32px] font-medium sm:text-[38px] md:text-[46px] lg:text-[56px] capitalize text-center mb-8 md:mb-16 leading-tight -mt-[5px]">
          Incredible User Experiences
        </h1>

        {/* Carousel container */}
        <div className="relative">
          <div className="flex justify-center gap-4 md:gap-6 overflow-hidden">
            {visibleFeatures.map((feature) => (
              <div key={feature.id} className="w-full md:w-1/2 lg:w-1/3 px-2">
                <FeatureCard
                  number={feature.id}
                  title={feature.title}
                  description={feature.description}
                  metrics={feature.metrics}
                  imageName={feature.imageName}
                />
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-16 bg-[#FD5F03] text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-16 bg-[#FD5F03] text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCarousel;

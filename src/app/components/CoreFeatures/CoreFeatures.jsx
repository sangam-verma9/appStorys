// import React, { useState, useEffect } from "react";
// import { Inter, Bricolage_Grotesque, Satisfy } from "next/font/google";
// import pipf from "@/assets/pipf.png";
// import storyf from "@/assets/storyf.png";
// import reelf from "@/assets/reelf.png";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });
// const bricolageGrotesque = Bricolage_Grotesque({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600", "700", "800"],
// });
// const satisfy = Satisfy({ subsets: ["latin"], weight: ["400"] });

// const CoreFeatures = () => {
//   const [activeIndex, setActiveIndex] = useState(1);
//   const [isMobile, setIsMobile] = useState(false);

//   // Track screen size to adjust mobile experience
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 640);
//     };

//     // Initial check
//     handleResize();

//     // Add event listener
//     window.addEventListener('resize', handleResize);

//     // Cleanup
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const features = [
//     {
//       id: 0,
//       title: "Stories",
//       description:
//         "Create easy-to-consume, visually engaging stories that capture user attention instantly.",
//       stats: [
//         { value: "5x", label: "More Content Consumption" },
//         { value: "23%", label: "Increase in Page Views" },
//         { value: "30%", label: "Decrease in Bounce Rate" },
//       ],
//       bgStyle: "bg-gradient-to-b from-[#F3FBFF] to-white",
//       textColor: "text-[#008FFF]",
//       borderColor: "border-[#008FFF]",
//       borderWidth: "border-2",
//       boxShadow: "shadow-[4px_8px_32px_0px_rgba(148,114,80,0.18)]",
//     },
//     {
//       id: 1,
//       title: "PiP Videos",
//       description:
//         "Create easy-to-consume, visually engaging stories that capture user attention instantly.",
//       stats: [
//         { value: "24%", label: "Boost in Multitasking Engagement" },
//         { value: "64%", label: "Increase in Feature Adoption" },
//         { value: "0.3x", label: "Decrease in Bounce Rate" },
//       ],
//       bgStyle: "bg-gradient-to-b from-[#F3ECFF] to-white",
//       textColor: "text-[#008FFF]",
//       borderColor: "border-[#793BDE]",
//       borderWidth: "border-2",
//       boxShadow: "shadow-[4px_8px_38px_0px_rgba(54,51,47,0.18)]",
//     },
//     {
//       id: 2,
//       title: "Reels",
//       description:
//         "Create easy-to-consume, visually engaging stories that capture user attention instantly.",
//       stats: [
//         { value: "60%", label: "Increase in KYC Retention" },
//         { value: "150%", label: "Increase in Session Duration" },
//       ],
//       bgStyle: "bg-gradient-to-b from-[#FFEFFE] to-white",
//       textColor: "text-[#F200EA]",
//       borderColor: "border-[#F200EA]",
//       borderWidth: "border-2",
//       boxShadow: "shadow-[4px_8px_32px_0px_rgba(148,114,80,0.18)]",
//     },
//   ];

//   return (
//     <div className="w-full bg-[#FFF7F3]">
//       <div className="sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[1200px] py-8 md:py-12 lg:py-16 flex flex-col justify-center mx-auto px-4 sm:px-6 md:px-0">
//         <h3
//           className={`${satisfy.className} text-[#FD5F03] text-[22px] md:text-[26px] text-center`}
//         >
//           Core Features
//         </h3>
//         <h1
//           className={`${bricolageGrotesque.className} text-[32px] sm:text-[38px] md:text-[46px] lg:text-[56px] capitalize text-center mb-8 md:mb-14 leading-tight`}
//         >
//           Incredible User Experiences
//         </h1>

//         <div className="relative flex flex-col items-center">
//           {/* Feature cards carousel */}
//           <div className="relative w-full h-[520px] xs:h-[550px] sm:h-[600px] md:h-[650px] flex justify-center overflow-visible">
//             {features.map((feature, index) => (
//               <div
//                 key={feature.id}
//                 className={`absolute transition-all duration-500 w-[90%] xs:w-[90%] sm:w-[85%] md:w-[85%] max-w-[380px] h-auto sm:h-[580px] md:h-[600px] rounded-[32px] ${
//                   feature.borderWidth
//                 } ${feature.borderColor} ${feature.bgStyle} ${
//                   feature.boxShadow
//                 } p-4 sm:p-5 md:p-6 ${
//                   index === activeIndex
//                     ? "z-20 opacity-100 scale-100 transform translate-y-0"
//                     : index === activeIndex - 1 ||
//                       (activeIndex === 0 && index === features.length - 1)
//                     ? "z-10 opacity-80 scale-[0.7] xs:scale-[0.75] sm:scale-[0.8] md:scale-[0.88] -translate-x-[55%] sm:-translate-x-[65%] md:-translate-x-[75%]"
//                     : "z-10 opacity-80 scale-[0.7] xs:scale-[0.75] sm:scale-[0.8] md:scale-[0.88] translate-x-[55%] sm:translate-x-[65%] md:translate-x-[75%]"
//                 }`}
//                 style={{
//                   display:
//                     (isMobile && index !== activeIndex) ||
//                     (!isMobile && Math.abs(index - activeIndex) > 1 &&
//                     !(activeIndex === 0 && index === features.length - 1) &&
//                     !(activeIndex === features.length - 1 && index === 0))
//                       ? "none"
//                       : "block",
//                 }}
//               >
//                 {/* Card Header */}
//                 <div className={`rounded-full inline-block px-4 sm:px-5 md:px-6 py-1 sm:py-2 mb-3 md:mb-4 ${
//                   index === 0
//                     ? "border border-[#008FFF] bg-gradient-to-b from-[#F3FBFF] to-white"
//                     : index === 1
//                       ? "border border-[#793BDE] bg-gradient-to-b from-[#F3ECFF] to-white"
//                       : "border border-[#F200EA] bg-gradient-to-b from-[#FFEFFE] to-white"
//                 }`} style={{
//                   borderRadius: index === 0 ? "28.752px" : index === 1 ? "32px" : "28.774px",
//                   borderWidth: index === 0 || index === 2 ? "0.899px" : "1px"
//                 }}>
//                   <h3 style={{
//                     color: "#000",
//                     fontFamily: "SF Pro, sans-serif",
//                     fontSize: "18px",
//                     fontWeight: "500",
//                     lineHeight: "19.285px",
//                     textTransform: "capitalize"
//                   }} className="text-base sm:text-lg md:text-2xl">
//                     {feature.title}
//                   </h3>
//                 </div>

//                 {/* Description */}
//                 <p
//                   style={{
//                     color: "#2F2F2F",
//                     fontFamily: "Inter, sans-serif",
//                     fontWeight: "400",
//                     lineHeight: "128%",
//                     textTransform: "capitalize",
//                   }}
//                   className="mb-4 md:mb-8 text-xs sm:text-sm md:text-[13.975px]"
//                 >
//                   {feature.description}
//                 </p>

//                 {/* Stats Section */}
//                 <div className="flex flex-wrap justify-around gap-1 sm:gap-2 mb-4 md:mb-8">
//                   {feature.stats.map((stat, i) => (
//                     <div key={i} className="text-center">
//                       <p
//                         style={{
//                           color: index === 2 ? "#F200EA" : "#008FFF",
//                           textAlign: "center",
//                           fontFamily: "'Product Sans', sans-serif",
//                           fontWeight: "700",
//                           lineHeight: "128%",
//                           textTransform: "capitalize",
//                         }}
//                         className="text-2xl sm:text-3xl md:text-[40.841px]"
//                       >
//                         {stat.value}
//                       </p>
//                       <p
//                         style={{
//                           color: "#2F2F2F",
//                           fontFamily: "Outfit, sans-serif",
//                           fontWeight: "400",
//                           lineHeight: "110%",
//                           textTransform: "capitalize",
//                           margin: "0 auto",
//                         }}
//                         className="text-[9px] sm:text-[10px] md:text-[11.669px] max-w-[80px] sm:max-w-[90px] md:max-w-[100px]"
//                       >
//                         {stat.label}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Device Mockup */}
//                 <div className="w-full max-w-[200px] xs:max-w-[220px] sm:max-w-[250px] md:w-[278.828px] h-[220px] xs:h-[250px] sm:h-[290px] md:h-[328px] mx-auto rounded-xl flex items-center justify-center overflow-hidden">
//                   {index === 0 && (
//                     <img
//                       src={storyf.src}
//                       alt="Stories"
//                       className="w-full h-full object-contain"
//                     />
//                   )}
//                   {index === 1 && (
//                     <img
//                       src={pipf.src}
//                       alt="PiP Video Feature"
//                       className="w-full h-full object-contain"
//                     />
//                   )}
//                   {index === 2 && (
//                     <img
//                       src={reelf.src}
//                       alt="Reels Feature"
//                       className="w-full h-full object-contain"
//                     />
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation buttons - repositioned for better mobile experience */}
//           <div
//             className="absolute w-full z-30 flex justify-between top-1/2 -translate-y-1/2 pointer-events-none px-1 xs:px-2 sm:px-3 md:px-4"
//           >
//             <button
//               className="bg-[#FD5F03] text-white w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg pointer-events-auto transform -translate-x-0 sm:-translate-x-1"
//               onClick={() =>
//                 setActiveIndex(
//                   (activeIndex - 1 + features.length) % features.length
//                 )
//               }
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="currentColor"
//                 className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15.75 19.5L8.25 12l7.5-7.5"
//                 />
//               </svg>
//             </button>
//             <button
//               className="bg-[#FD5F03] text-white w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg pointer-events-auto transform translate-x-0 sm:translate-x-1"
//               onClick={() =>
//                 setActiveIndex((activeIndex + 1) % features.length)
//               }
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="currentColor"
//                 className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M8.25 4.5l7.5 7.5-7.5 7.5"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoreFeatures;

import React, { useState, useEffect } from "react";
import { Inter, Bricolage_Grotesque, Satisfy } from "next/font/google";
import pipf from "@/assets/pipf.png";
import storyf from "@/assets/storyf.png";
import reelf from "@/assets/reelf.png";
import banf from "@/assets/banf.png";
import floatf from "@/assets/floatf.png";
import coachf from "@/assets/coachf.png";
import csatf from "@/assets/csatf.png";
import surveyf from "@/assets/surveyf.png";
import toolf from "@/assets/toolf.png";
import scratchf from "@/assets/scratchf.png";
import widgetf from "@/assets/widgetf.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
const satisfy = Satisfy({ subsets: ["latin"], weight: ["400"] });

const CoreFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Track screen size to adjust mobile experience
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide functionality
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000); // Change slide every 3 seconds

    // Clean up the interval when component unmounts
    return () => clearInterval(autoSlideInterval);
  }, []);

  const features = [
    {
      id: 0,
      title: "Stories",
      description: "Add Instagram like stories. Each with dedicated CTA.",
      stats: [
        { value: "5x", label: "More Content Consumption" },
        { value: "23%", label: "Increase in Page Views" },
        { value: "30%", label: "Decrease in Bounce Rate" },
      ],
      bgStyle: "bg-gradient-to-b from-[#F3FBFF] to-white",
      textColor: "text-[#008FFF]",
      borderColor: "border-[#008FFF]",
      borderWidth: "border-2",
      boxShadow: "shadow-[4px_8px_32px_0px_rgba(148,114,80,0.18)]",
    },
    {
      id: 1,
      title: "PiP Videos",
      description: "Movable small video which can be expanded to full screen.",
      stats: [
        { value: "24%", label: "Boost in Multitasking Engagement" },
        { value: "64%", label: "Increase in Feature Adoption" },
        { value: "0.3x", label: "Decrease in Bounce Rate" },
      ],
      bgStyle: "bg-gradient-to-b from-[#F3ECFF] to-white",
      textColor: "text-[#008FFF]",
      borderColor: "border-[#793BDE]",
      borderWidth: "border-2",
      boxShadow: "shadow-[4px_8px_38px_0px_rgba(54,51,47,0.18)]",
    },
    {
      id: 2,
      title: "Reels",
      description: "TikTok style endless scrolling videos.",
      stats: [
        { value: "60%", label: "Increase in KYC Retention" },
        { value: "150%", label: "Increase in Session Duration" },
        { value: "15%", label: "Higher Daily Retention " },
      ],
      bgStyle: "bg-gradient-to-b from-[#FFEFFE] to-white",
      textColor: "text-[#F200EA]",
      borderColor: "border-[#F200EA]",
      borderWidth: "border-2",
      boxShadow: "shadow-[4px_8px_32px_0px_rgba(148,114,80,0.18)]",
    },
    {
      id: 3,
      title: "Banners",
      description:
        "Static or animated strips shown at the top or bottom of the screen. Perfect for announcements, offers, or important updates.",
      stats: [
        { value: "2.1x", label: "Higher CTRs" },
        { value: "1.1x", label: "More In-App Purchases" },
        { value: "55%", label: "Boost in Session Duration" },
      ],
      bgStyle: "bg-gradient-to-b from-[#F0FFEF] to-white",
      textColor: "text-[#0CB600]",
      borderColor: "border-[#0CB600]",
      borderWidth: "border-2",
      boxShadow: "shadow-[4px_8px_32px_0px_rgba(148,114,80,0.18)]",
    },
    {
      id: 4,
      title: "Floater",
      description: "Small image which stays constant side of the screen.",
      stats: [
        { value: "4.2x", label: "Increase In Feature Discovery" },
        { value: "35%", label: "Improve in User Engagement" },
        { value: "3.3x", label: "More Interactions With In-App Offers" },
      ],
      bgStyle: "bg-gradient-to-b from-[#F3FBFF] to-white",
      textColor: "text-[#008FFF]",
      borderColor: "border-[#008FFF]",
      borderWidth: "border-2",
      boxShadow: "shadow-[4px_8px_32px_0px_rgba(148,114,80,0.18)]",
    },
    {
      id: 5,
      title: "Widgets",
      description:
        "Small pop ups that guide users. Great for onboarding and explaining features step-by-step.",
      stats: [
        { value: "8%", label: "Boost 8% CTR" },
        { value: "75%", label: "Higher Response Rate" },
        { value: "2%", label: "Increase in AOV" },
      ],
      bgStyle: "bg-gradient-to-b from-[#FFEBFE] to-white",
      textColor: "text-[#EF13E8]",
      borderColor: "border-[#EF13E8]",
      borderWidth: "border-2",
      boxShadow: "shadow-[4px_8px_38px_0px_rgba(54,51,47,0.18)]",
    },
    {
      id: 6,
      title: "Scratch Cards",
      description:
        "Interactive reward cards users can scratch to reveal offers, points, or surprises. Fun way to boost engagement.",
      stats: [
        { value: "15%", label: "Boost in App Stickness" },
        { value: "5x", label: "Increase in User Engagement" },
        { value: "2x", label: "Increase in User Participation" },
      ],
      bgStyle: "bg-gradient-to-b from-[#F3ECFF] to-white",
      textColor: "text-[#793BDE]",
      borderColor: "border-[#793BDE]",
      borderWidth: "border-[1.797px]",
      boxShadow: "shadow-[4px_8px_32px_0px_rgba(148,114,80,0.18)]",
    },
    {
      id: 7,
      title: "Quizzes",
      description:
        "Levels of different questions with multiple choice with one correct answer",
      stats: [
        { value: "2x", label: "More User Engagement" },
        { value: "30%", label: "Increase In Knowledge Retention" },
        { value: "20%", label: "Growth in Daily Active Users (DAU)" },
      ],
      bgStyle: "bg-gradient-to-b from-[#F0FFEF] to-white",
      textColor: "text-[#0CB600]",
      borderColor: "border-[#0CB600]",
      borderWidth: "border-2",
      boxShadow: "shadow-[4px_8px_32px_0px_rgba(148,114,80,0.18)]",
    },
    {
      id: 8,
      title: "Survey",
      description:
        "Take user input with a short survey. Get deep user insights.",
      stats: [
        {
          value: "15%",
          label: "Customer Feedback-driven Changes Increase Feature Usage",
        },
        { value: "35%", label: "Improvement in NPS Score" },
        { value: "3x", label: "Increase in User Feedback" },
      ],
      bgStyle: "bg-gradient-to-b from-[#F3FBFF] to-white",
      textColor: "text-[#008FFF]",
      borderColor: "border-[#008FFF]",
      borderWidth: "border-2",
      boxShadow: "shadow-[4px_8px_32px_0px_rgba(148,114,80,0.18)]",
    },
    {
      id: 9,
      title: "CSAT Feedback",
      description:
        "Simple rating popup to measure how happy users are with your app. Redirect to App Store or Play Store.",
      stats: [
        { value: "15%", label: "Increase in Customer Retention" },
        { value: "20%", label: "Improvement in CSAT Score" },
        { value: "85%", label: "Higher Response Rate" },
      ],
      bgStyle: "bg-gradient-to-b from-[#FFEBFE] to-white",
      textColor: "text-[#EF13E8]",
      borderColor: "border-[#EF13E8]",
      borderWidth: "border-2",
      boxShadow: "shadow-[4px_8px_38px_0px_rgba(54,51,47,0.18)]",
    },
    {
      id: 10,
      title: "Tooltips",
      description:
        "Small pop ups that guide users. Great for onboarding and explaining features step-by-step.",
      stats: [
        { value: "30%", label: "Increase in Product Adoption" },
        { value: "2x", label: "Users Engage with Feature" },
        { value: "2x", label: "Users Engage with Feature" },
      ],
      bgStyle: "bg-gradient-to-b from-[#F3ECFF] to-white",
      textColor: "text-[#793BDE]",
      borderColor: "border-[#793BDE]",
      borderWidth: "border-[1.797px]",
      boxShadow: "shadow-[4px_8px_32px_0px_rgba(148,114,80,0.18)]",
    },
    {
      id: 11,
      title: "Coachmarks",
      description:
        "Highlight a new feature. Perfect for feature launches and walkthroughs.",
      stats: [
        { value: "3.5x", label: "Faster Feature Adoption" },
        { value: "30%", label: "Improvement In User Onboarding" },
        { value: "35%", label: "Reduction in User Confusion" },
      ],
      bgStyle: "bg-gradient-to-b from-[#F0FFEF] to-white",
      textColor: "text-[#0CB600]",
      borderColor: "border-[#0CB600]",
      borderWidth: "border-2",
      boxShadow: "shadow-[4px_8px_32px_0px_rgba(148,114,80,0.18)]",
    },
    {
      id: 12,
      title: "Spotlight",
      description:
        "Dim the screen to focus on one element. Great for drawing attention to new features or key actions.",
      stats: [
        { value: "3.5x", label: "Faster Feature Adoption" },
        { value: "30%", label: "Improvement In User Onboarding" },
        { value: "35%", label: "Reduction in User Confusion" },
      ],
      bgStyle: "bg-gradient-to-b from-[#FFEFFE] to-white",
      textColor: "text-[#F200EA]",
      borderColor: "border-[#F200EA]",
      borderWidth: "border-2",
      boxShadow: "shadow-[4px_8px_32px_0px_rgba(148,114,80,0.18)]",
    },
  ];

  return (
    <div className="w-full bg-[#FFF7F3]">
      <div className="sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[1200px] py-8 md:py-12 lg:py-16 flex flex-col justify-center mx-auto px-4 sm:px-6 md:px-0">
        <h3
          className={`${satisfy.className} text-[#FD5F03] text-[22px] md:text-[26px] text-center`}
        >
          Core Features
        </h3>
        <h1
          className={` font-sf-pro text-[32px] font-medium sm:text-[38px] md:text-[46px] lg:text-[56px] capitalize text-center mb-8 md:mb-7 leading-tight -mt-[5px]`}
        >
          Incredible User Experiences
        </h1>

        <div className="relative flex flex-col items-center">
          {/* Feature cards carousel */}
          <div className="relative w-full h-[520px] xs:h-[550px] sm:h-[600px] md:h-[650px] flex justify-center overflow-visible">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`absolute transition-all duration-500 w-[90%] xs:w-[90%] sm:w-[85%] md:w-[85%] max-w-[420px] h-auto sm:h-[580px] md:h-[600px] rounded-[32px] ${
                  feature.borderWidth
                } ${feature.borderColor} ${feature.bgStyle} ${
                  feature.boxShadow
                } p-4 sm:p-5 md:p-6 ${
                  index === activeIndex
                    ? "z-20 opacity-100 scale-100 transform translate-y-0"
                    : index === activeIndex - 1 ||
                      (activeIndex === 0 && index === features.length - 1)
                    ? "z-10 opacity-80 scale-[0.7] xs:scale-[0.75] sm:scale-[0.8] md:scale-[0.88] -translate-x-[55%] sm:-translate-x-[65%] md:-translate-x-[75%]"
                    : "z-10 opacity-80 scale-[0.7] xs:scale-[0.75] sm:scale-[0.8] md:scale-[0.88] translate-x-[55%] sm:translate-x-[65%] md:translate-x-[75%]"
                }`}
                style={{
                  display:
                    (isMobile && index !== activeIndex) ||
                    (!isMobile &&
                      Math.abs(index - activeIndex) > 1 &&
                      !(activeIndex === 0 && index === features.length - 1) &&
                      !(activeIndex === features.length - 1 && index === 0))
                      ? "none"
                      : "block",
                }}
              >
                {/* Card Header */}

                <div
                  className={`rounded-full inline-block px-4 sm:px-5 md:px-6 py-1 sm:py-2 mb-3 md:mb-4 ${
                    index === 0
                      ? "border border-[#008FFF] bg-gradient-to-b from-[#F3FBFF] to-white"
                      : index === 1
                      ? "border border-[#793BDE] bg-gradient-to-b from-[#F3ECFF] to-white"
                      : index === 2
                      ? "border border-[#F200EA] bg-gradient-to-b from-[#FFEFFE] to-white"
                      : index === 3
                      ? "border border-[#0CB600] bg-gradient-to-b from-[#F0FFEF] to-white"
                      : index === 4
                      ? "border border-[#008FFF] bg-gradient-to-b from-[#F3FBFF] to-white"
                      : index === 5
                      ? "border border-[#F200EA] bg-gradient-to-b from-[#FFEFFE] to-white"
                      : index === 6
                      ? "border border-[#793BDE] bg-gradient-to-b from-[#F3ECFF] to-white"
                      : index === 7
                      ? "border border-[#0CB600] bg-gradient-to-b from-[#F0FFEF] to-white"
                      : index === 8
                      ? "border border-[#008FFF] bg-gradient-to-b from-[#F3FBFF] to-white"
                      : index === 9
                      ? "border border-[#F200EA] bg-gradient-to-b from-[#FFEFFE] to-white"
                      : index === 10
                      ? "border border-[#793BDE] bg-gradient-to-b from-[#F3ECFF] to-white"
                      : index === 11
                      ? "border border-[#0CB600] bg-gradient-to-b from-[#F0FFEF] to-white"
                      : index === 12
                      ? "border border-[#F200EA] bg-gradient-to-b from-[#FFEFFE] to-white"
                      : "border border-[#0CB600] bg-gradient-to-b from-[#F0FFEF] to-white"
                  }`}
                  style={{
                    borderRadius:
                      index === 0
                        ? "28.752px"
                        : index === 1
                        ? "32px"
                        : index === 2
                        ? "28.774px"
                        : index === 3
                        ? "32px"
                        : index === 4
                        ? "28.752px"
                        : index === 5
                        ? "32px"
                        : index === 6
                        ? "28.752px"
                        : index === 7
                        ? "32px"
                        : index === 8
                        ? "28.752px"
                        : index === 9
                        ? "32px"
                        : index === 10
                        ? "28.752px"
                        : "32px",
                    borderWidth:
                      index === 0
                        ? "0.899px"
                        : index === 1
                        ? "1px"
                        : index === 2
                        ? "0.899px"
                        : index === 3
                        ? "1px"
                        : index === 4
                        ? "0.899px"
                        : index === 5
                        ? "1px"
                        : index === 6
                        ? "0.899px"
                        : index === 7
                        ? "1px"
                        : index === 8
                        ? "0.899px"
                        : index === 9
                        ? "1px"
                        : index === 10
                        ? "0.899px"
                        : "1px",
                  }}
                >
                  <h3
                    style={{
                      color: "#000",
                      fontFamily: "SF Pro, sans-serif",
                      fontSize: "18px",
                      fontWeight: "500",
                      lineHeight: "19.285px",
                      textTransform: "capitalize",
                    }}
                    className="text-base sm:text-lg md:text-2xl"
                  >
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  style={{
                    color: "#2F2F2F",
                    fontFamily: "SF Pro, sans-serif",
                    fontWeight: "400",
                    lineHeight: "128%",
                    // textTransform: "capitalize",
                    letterSpacing: "1px",
                  }}
                  className="mb-4 md:mb-6 text-xs sm:text-sm md:text-[13.975px]"
                >
                  {feature.description}
                </p>

                {/* Stats Section */}
                <div className="flex flex-wrap justify-around gap-1 sm:gap-4 mb-4 md:mb-8">
                  {feature.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <p
                        style={{
                          color: index === 2 ? "#F200EA" : "#008FFF",
                          textAlign: "start",
                          fontFamily: "'Product Sans', sans-serif",
                          fontWeight: "700",
                          lineHeight: "128%",
                          textTransform: "capitalize",
                        }}
                        className="text-2xl sm:text-3xl md:text-[40.841px]"
                      >
                        {stat.value}
                      </p>
                      <p
                        style={{
                          color: "#2F2F2F",
                          textAlign: "start",
                          fontFamily: "SF Pro, sans-serif",
                          fontWeight: "400",
                          lineHeight: "110%",
                          textTransform: "capitalize",
                          margin: "0 auto",
                        }}
                        className="text-[9px] sm:text-[10px] md:text-[11.669px] max-w-[80px] sm:max-w-[90px] md:max-w-[100px]"
                      >
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Device Mockup */}
                <div className="w-full max-w-[200px] xs:max-w-[220px] sm:max-w-[250px] md:w-[278.828px] h-[220px] xs:h-[250px] sm:h-[290px] md:h-[328px] mx-auto rounded-xl flex items-center justify-center overflow-hidden">
                  {index === 0 && (
                    <img
                      src={storyf.src}
                      alt="Stories"
                      className="w-full h-full object-contain"
                    />
                  )}
                  {index === 1 && (
                    <img
                      src={pipf.src}
                      alt="PiP Video Feature"
                      className="w-full h-full object-contain"
                    />
                  )}
                  {index === 2 && (
                    <img
                      src={reelf.src}
                      alt="Reels Feature"
                      className="w-full h-full object-contain"
                    />
                  )}
                  {index === 3 && (
                    <img
                      src={banf.src}
                      alt="Banners Feature"
                      className="w-full h-full object-contain"
                    />
                  )}
                  {index === 4 && (
                    <img
                      src={floatf.src}
                      alt="Floater Feature"
                      className="w-full h-full object-contain"
                    />
                  )}
                  {index === 5 && (
                    <img
                      src={widgetf.src}
                      alt="Widgets Feature"
                      className="w-full h-full object-contain"
                    />
                  )}
                  {index === 6 && (
                    <img
                      src={scratchf.src}
                      alt="Scratch Cards Feature"
                      className="w-full h-full object-contain"
                    />
                  )}
                  {index === 7 && (
                    <img
                      src={csatf.src}
                      alt="Quizzes Feature"
                      className="w-full h-full object-contain"
                    />
                  )}
                  {index === 8 && (
                    <img
                      src={surveyf.src}
                      alt="Survey Feature"
                      className="w-full h-full object-contain"
                    />
                  )}
                  {index === 9 && (
                    <img
                      src={csatf.src}
                      alt="CSAT Feedback Feature"
                      className="w-full h-full object-contain"
                    />
                  )}
                  {index === 10 && (
                    <img
                      src={toolf.src}
                      alt="Tooltips Feature"
                      className="w-full h-full object-contain"
                    />
                  )}
                  {index === 11 && (
                    <img
                      src={coachf.src}
                      alt="Coachmarks Feature"
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons - repositioned for better mobile experience */}
          <div className="absolute w-full z-30 flex justify-between top-1/2 -translate-y-1/2 pointer-events-none px-1 xs:px-2 sm:px-3 md:px-4">
            <button
              className="bg-[#FD5F03] text-white w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg pointer-events-auto transform -translate-x-0 sm:-translate-x-1"
              onClick={() =>
                setActiveIndex(
                  (activeIndex - 1 + features.length) % features.length
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              className="bg-[#FD5F03] text-white w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg pointer-events-auto transform translate-x-0 sm:translate-x-1"
              onClick={() =>
                setActiveIndex((activeIndex + 1) % features.length)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;

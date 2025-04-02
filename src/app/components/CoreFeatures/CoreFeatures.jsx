// import React, { useState } from "react";
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
//     <div className="w-full bg-gray-50">
//       <div className="sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[1200px] py-16 flex flex-col justify-center mx-auto">
//         <h3
//           className={`${satisfy.className} text-[#FD5F03] text-[26px] text-center`}
//         >
//           Core Features
//         </h3>
//         <h1
//           className={`${bricolageGrotesque.className} text-[46px] md:text-[56px] capitalize text-center mb-14 leading-tight`}
//         >
//           Incredible User Experiences
//         </h1>

//         <div className="relative flex flex-col items-center">
//           {/* Feature cards carousel */}
//           <div className="relative w-full h-[540px] sm:h-[600px] md:h-[650px] flex justify-center overflow-visible">
//             {features.map((feature, index) => (
//               <div
//                 key={feature.id}
//                 className={`absolute transition-all duration-500 w-[85%] max-w-[380px] h-[600px] rounded-[32px] ${
//                   feature.borderWidth
//                 } ${feature.borderColor} ${feature.bgStyle} ${
//                   feature.boxShadow
//                 } p-6 ${
//                   //   index === activeIndex
//                   //     ? 'z-20 opacity-100 scale-100 transform translate-y-0'
//                   //     : index === activeIndex - 1 || (activeIndex === 0 && index === features.length - 1)
//                   //       ? 'z-10 opacity-90 scale-[0.85] -translate-x-[70%] lg:-translate-x-[50%]'
//                   //       : 'z-10 opacity-90 scale-[0.85] translate-x-[70%] lg:translate-x-[50%]'

//                   index === activeIndex
//                     ? "z-20 opacity-100 scale-100 transform translate-y-0"
//                     : index === activeIndex - 1 ||
//                       (activeIndex === 0 && index === features.length - 1)
//                     ? "z-10 opacity-90 scale-[0.88] -translate-x-[75%]"
//                     : "z-10 opacity-90 scale-[0.88] translate-x-[75%]"
//                 }`}
//                 style={{
//                   display:
//                     Math.abs(index - activeIndex) > 1 &&
//                     !(activeIndex === 0 && index === features.length - 1) &&
//                     !(activeIndex === features.length - 1 && index === 0)
//                       ? "none"
//                       : "block",
//                 }}
//               >
              
//                 <div
//                   className={`rounded-full inline-block px-6 py-2 h-[40px] mb-4 ${
//                     index === 0
//                       ? "border border-[#008FFF] bg-gradient-to-b from-[#F3FBFF] to-white"
//                       : index === 1
//                       ? "border border-[#793BDE] bg-gradient-to-b from-[#F3ECFF] to-white"
//                       : "border border-[#F200EA] bg-gradient-to-b from-[#FFEFFE] to-white"
//                   }`}
//                   style={{
//                     borderRadius:
//                       index === 0
//                         ? "28.752px"
//                         : index === 1
//                         ? "32px"
//                         : "28.774px",
//                     borderWidth: index === 0 || index === 2 ? "0.899px" : "1px",
//                   }}
//                 >
//                   <h3
//                     style={{
//                       color: "#000",
//                       fontFamily: "SF Pro, sans-serif",
//                       fontSize: "24px",
//                       fontWeight: "500",
//                       lineHeight: "19.285px",
//                       textTransform: "capitalize",
//                     }}
//                   >
//                     {feature.title}
//                   </h3>
//                 </div>

//                 {/* Description */}
//                 <p
//                   style={{
//                     color: "#2F2F2F",
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "13.975px",
//                     fontWeight: "400",
//                     lineHeight: "128%",
//                     textTransform: "capitalize",
//                   }}
//                   className="mb-8"
//                 >
//                   {feature.description}
//                 </p>

//                 {/* Stats Section */}
//                 <div className="flex flex-wrap justify-around gap-2 mb-8">
//                   {feature.stats.map((stat, i) => (
//                     <div key={i} className="text-center">
//                       <p
//                         style={{
//                           color: index === 2 ? "#F200EA" : "#008FFF",
//                           textAlign: "center",
//                           fontFamily: "'Product Sans', sans-serif",
//                           fontSize: "40.841px",
//                           fontWeight: "700",
//                           lineHeight: "128%",
//                           textTransform: "capitalize",
//                         }}
//                       >
//                         {stat.value}
//                       </p>
//                       <p
//                         style={{
//                           color: "#2F2F2F",
//                           fontFamily: "Outfit, sans-serif",
//                           fontSize: "11.669px",
//                           fontWeight: "400",
//                           lineHeight: "110%",
//                           textTransform: "capitalize",
//                           maxWidth: "100px",
//                           margin: "0 auto",
//                         }}
//                       >
//                         {stat.label}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Device Mockup */}
//                 <div className="w-[278.828px] h-[328px] mx-auto rounded-xl flex items-center justify-center overflow-hidden">
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

//           {/* Navigation buttons - positioned to match the design */}
//           <div
//             className="absolute w-full z-30 flex justify-between top-1/2 -translate-y-1/2 pointer-events-none"
//             style={{ padding: "0 10px" }}
//           >
//             <button
//               className="bg-[#FD5F03] text-white w-[32px] h-[32px] rounded-full flex items-center justify-center shadow-lg pointer-events-auto transform -translate-x-1"
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
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15.75 19.5L8.25 12l7.5-7.5"
//                 />
//               </svg>
//             </button>
//             <button
//               className="bg-[#FD5F03] text-white w-[32px] h-[32px] rounded-full flex items-center justify-center shadow-lg pointer-events-auto transform translate-x-1"
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
//                 className="w-6 h-6"
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
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    {
      id: 0,
      title: "Stories",
      description:
        "Create easy-to-consume, visually engaging stories that capture user attention instantly.",
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
      description:
        "Create easy-to-consume, visually engaging stories that capture user attention instantly.",
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
      description:
        "Create easy-to-consume, visually engaging stories that capture user attention instantly.",
      stats: [
        { value: "60%", label: "Increase in KYC Retention" },
        { value: "150%", label: "Increase in Session Duration" },
      ],
      bgStyle: "bg-gradient-to-b from-[#FFEFFE] to-white",
      textColor: "text-[#F200EA]",
      borderColor: "border-[#F200EA]",
      borderWidth: "border-2",
      boxShadow: "shadow-[4px_8px_32px_0px_rgba(148,114,80,0.18)]",
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      <div className="sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[1200px] py-8 md:py-12 lg:py-16 flex flex-col justify-center mx-auto px-4 sm:px-6 md:px-0">
        <h3
          className={`${satisfy.className} text-[#FD5F03] text-[22px] md:text-[26px] text-center`}
        >
          Core Features
        </h3>
        <h1
          className={`${bricolageGrotesque.className} text-[32px] sm:text-[38px] md:text-[46px] lg:text-[56px] capitalize text-center mb-8 md:mb-14 leading-tight`}
        >
          Incredible User Experiences
        </h1>

        <div className="relative flex flex-col items-center">
          {/* Feature cards carousel */}
          <div className="relative w-full h-[520px] xs:h-[550px] sm:h-[600px] md:h-[650px] flex justify-center overflow-visible">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`absolute transition-all duration-500 w-[90%] xs:w-[90%] sm:w-[85%] md:w-[85%] max-w-[380px] h-auto sm:h-[580px] md:h-[600px] rounded-[32px] ${
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
                    (!isMobile && Math.abs(index - activeIndex) > 1 &&
                    !(activeIndex === 0 && index === features.length - 1) &&
                    !(activeIndex === features.length - 1 && index === 0))
                      ? "none"
                      : "block",
                }}
              >
                {/* Card Header */}
                <div className={`rounded-full inline-block px-4 sm:px-5 md:px-6 py-1 sm:py-2 mb-3 md:mb-4 ${
                  index === 0 
                    ? "border border-[#008FFF] bg-gradient-to-b from-[#F3FBFF] to-white" 
                    : index === 1 
                      ? "border border-[#793BDE] bg-gradient-to-b from-[#F3ECFF] to-white" 
                      : "border border-[#F200EA] bg-gradient-to-b from-[#FFEFFE] to-white"
                }`} style={{
                  borderRadius: index === 0 ? "28.752px" : index === 1 ? "32px" : "28.774px",
                  borderWidth: index === 0 || index === 2 ? "0.899px" : "1px"
                }}>
                  <h3 style={{ 
                    color: "#000",
                    fontFamily: "SF Pro, sans-serif",
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "19.285px",
                    textTransform: "capitalize"
                  }} className="text-base sm:text-lg md:text-2xl">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  style={{
                    color: "#2F2F2F",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "400",
                    lineHeight: "128%",
                    textTransform: "capitalize",
                  }}
                  className="mb-4 md:mb-8 text-xs sm:text-sm md:text-[13.975px]"
                >
                  {feature.description}
                </p>

                {/* Stats Section */}
                <div className="flex flex-wrap justify-around gap-1 sm:gap-2 mb-4 md:mb-8">
                  {feature.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <p
                        style={{
                          color: index === 2 ? "#F200EA" : "#008FFF",
                          textAlign: "center",
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
                          fontFamily: "Outfit, sans-serif",
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
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons - repositioned for better mobile experience */}
          <div
            className="absolute w-full z-30 flex justify-between top-1/2 -translate-y-1/2 pointer-events-none px-1 xs:px-2 sm:px-3 md:px-4"
          >
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
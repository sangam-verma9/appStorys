// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import InteractiveHoverButton from './InteractiveHoverButton';
// import store from "../store/store";

// const HeroSection = () => {
//   const texts = [
//     "Engagement",
//     "Retention",
//     "Conversion Rate",
//     "Stickiness",
//     "Revenue",
//   ];
//   const [index, setIndex] = useState(0);
//   const textColor = ["#FD5F03", "#03A1FD", "#793BDE", "#F200EA", "#0CB600"];

//   const { setRequestDemoClick, openContactModal } = store();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const containerVariants = {
//     hidden: {
//       opacity: 0,
//       x: -1000, // Start far off to the left
//     },
//     visible: {
//       opacity: 1,
//       x: 0, // End at normal position
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.2,
//         duration: 0.8,
//         type: "spring",
//         damping: 25,
//         stiffness: 100
//       }
//     }
//   };

//   // Heading animation variant (from top)
//   const headingVariants = {
//     hidden: {
//       y: -100,
//       opacity: 0
//     },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         damping: 12,
//         stiffness: 100
//       }
//     }
//   };

//   // Paragraph animation variant (from left)
//   const paragraphVariants = {
//     hidden: {
//       x: -100,
//       opacity: 0
//     },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         damping: 12,
//         stiffness: 80
//       }
//     }
//   };

//   // Button animation variant (from right)
//   const buttonVariants = {
//     hidden: {
//       x: 100,
//       opacity: 0
//     },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         damping: 12,
//         stiffness: 90
//       }
//     }
//   };

//   return (
//     <section className="bg-[#FFF7F3] w-full py-16 md:py-24 lg:py-32 md:-mt-[100px]">
//       <div className="container mx-auto px-4">
//         <motion.div
//           className="flex flex-col items-center justify-center"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {/* Heading */}
//           <motion.h1
//             className="text-center w-full"
//             variants={headingVariants}
//           >
//             <span className="block text-black font-bold text-4xl md:text-6xl lg:text-[72.048px] leading-tight md:leading-tight capitalize font-sfpro">
//               Increase
//             </span>
//             <div className="h-[60px] md:h-[90px] lg:h-[140px] relative flex items-center justify-center -mt-4 md:-mt-6 lg:-mt-8">
//               <AnimatePresence mode="wait">
//                 <motion.span
//                   key={index}
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: -20, opacity: 0 }}
//                   transition={{
//                     duration: 0.5,
//                     ease: "easeInOut",
//                   }}
//                   style={{ color: textColor[index] }}
//                   className="font-bold text-4xl md:text-6xl lg:text-[106.048px] leading-tight md:leading-tight lg:leading-[103.587px] font-sfpro text-center"
//                 >
//                   {texts[index]}
//                 </motion.span>
//               </AnimatePresence>
//             </div>
//           </motion.h1>

//           {/* Paragraph */}
//           <motion.p
//             className="text-black text-center text-lg md:text-xl lg:text-[28.05px] font-medium font-sfpro mt-4 md:mt-4"
//             variants={paragraphVariants}
//           >
//             For your App & website
//           </motion.p>

//           {/* Call-to-action buttons */}
//           <motion.div
//             className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 md:mt-16"
//             variants={buttonVariants}
//           >
//             {/* Book a call button - replaced with Interactive Button */}
//             <InteractiveHoverButton
//               className="bg-[#FD5F03] border-[#FD5F03] text-white w-[200px] h-[58.61px] font-medium text-xl"
//               onClick={() => {
//                 setRequestDemoClick(true);
//                 openContactModal(); // Open the modal
//               }}
//             >
//               Schedule a Demo
//             </InteractiveHoverButton>

//             {/* Watch a quick demo text */}
//             <span className="text-black text-center text-lg md:text-xl lg:text-[20.909px] font-medium capitalize font-sfpro">
//               Watch a quick demo
//             </span>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveHoverButton from "./InteractiveHoverButton";
import store from "../store/store";
import heromain from "../../assets/heromain.png";

import Image from "next/image";

const HeroSection = () => {
  const texts = ["Engagement", "Retention", "Stickiness", "Revenue"];
  const [index, setIndex] = useState(0);
  const textColor = ["#FD5F03", "#03A1FD", "#793BDE", "#F200EA", "#0CB600"];

  const { setRequestDemoClick, openContactModal } = store();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#FFF7F3] w-full py-10 md:py-10 lg:py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Heading - centered with fixed "Increase" text that doesn't move */}
          <h1 className="text-center w-full flex justify-center items-center flex-col md:flex-row">
            <span className="text-black font-bold text-4xl md:text-[77px] lg:text-[72px]">
              Increase{" "}
            </span>
            <span className="inline-block relative ml-5">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  style={{ color: textColor[index] }}
                  className="font-bold text-4xl md:text-6xl lg:text-[72px] absolute left-0"
                >
                  {texts[index]}
                </motion.span>
              </AnimatePresence>
              {/* Invisible text to maintain spacing */}
              <span className="invisible font-bold text-4xl md:text-6xl lg:text-[72px]">
                {texts.reduce((a, b) => (a.length > b.length ? a : b))}
              </span>
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-black text-center text-lg md:text-xl lg:text-[28.05px] font-medium mt-4">
            For your App & website
          </p>

          {/* Image for 3 panels - using Image component for better loading */}
          <div className="w-full mt-12 md:mt-16 flex justify-center">
            <div className="relative w-full max-w-6xl">
              <Image
                src={heromain}
                alt="Features panels"
                className="w-full h-auto"
                placeholder="blur"
              />
            </div>
          </div>

          {/* Call-to-action button with increased width */}
          <div className=" flex justify-center md:-mt-8">
            <InteractiveHoverButton
              className="bg-[#FD5F03] border-[#FD5F03] text-white w-[200px] h-[58.61px] font-medium text-xl"
              onClick={() => {
                setRequestDemoClick(true);
                openContactModal();
              }}
            >
              Schedule a Demo
            </InteractiveHoverButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import InteractiveHoverButton from "./InteractiveHoverButton";
// import store from "../store/store";
// import heromain from "../../assets/heromain.gif";

// import Image from "next/image";

// const HeroSection = () => {
//   const texts = ["Engagement", "Retention", "Stickiness", " Revenue"];
//   const [index, setIndex] = useState(0);
//   const textColor = ["#FD5F03", "#03A1FD", "#793BDE", "#F200EA", "#0CB600"];

//   const { setRequestDemoClick, openContactModal } = store();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-[#FFF7F3] w-full py-10 md:py-10 lg:py-10">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center">
//           {/* Heading - centered with fixed "Increase" text that doesn't move */}
//           {/* <h1 className="text-center w-full flex justify-center items-center flex-col md:flex-row">
//             <span className="text-black font-bold text-4xl md:text-[77px] lg:text-[72px]">
//               Increase{" "}
//             </span>
//             <span className="inline-block relative ml-5 ">
//               <AnimatePresence mode="wait">
//                 <motion.span
//                   key={index}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{
//                     duration: 0.3,
//                     ease: "easeInOut",
//                   }}
//                   style={{ color: textColor[index] }}
//                   className="font-bold text-4xl md:text-6xl lg:text-[72px] absolute left-0"
//                 >
//                   {texts[index]}
//                 </motion.span>
//               </AnimatePresence>
           
//               <span className="invisible font-bold text-4xl md:text-6xl lg:text-[72px]">
//                 {texts.reduce((a, b) => (a.length > b.length ? a : b))}
//               </span>
//             </span>
//           </h1> */}

//           {/* Heading - centered with fixed "Increase" text that doesn't move */}
//           <h1 className="text-center w-full flex justify-center items-center flex-col">
//             <span className="text-black font-bold text-4xl md:text-[57px] lg:text-[72px]">
//               Increase
//             </span>
//             <span className="inline-block relative ">
//               <AnimatePresence mode="wait">
//                 <motion.span
//                   key={index}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{
//                     duration: 0.3,
//                     ease: "easeInOut",
//                   }}
//                   style={{ color: textColor[index] }}
//                   className="font-bold text-4xl md:text-6xl lg:text-[100px] absolute transform left-1/2 -translate-x-1/2"
//                 >
//                   {texts[index]}
//                 </motion.span>
//               </AnimatePresence>
//               {/* Invisible text to maintain spacing */}
//               <span className="invisible font-bold text-4xl md:text-6xl lg:text-[72px]">
//                 {texts.reduce((a, b) => (a.length > b.length ? a : b))}
//               </span>
//             </span>
//           </h1>

//           {/* Paragraph */}
//           <p className="text-black text-center text-lg md:text-xl lg:text-[28.05px] font-medium mt-5 lg:mt-14">
//             For your App & website
//           </p>

//           {/* Image for 3 panels - using Image component for better loading */}
//           <div className="w-full mt-12 md:mt-16 flex justify-center">
//             <div className="relative w-full max-w-6xl">
//               <Image
//                 src={heromain}
//                 alt="Features panels"
//                 className="w-full h-auto"
//               />
//             </div>
//           </div>

//           {/* Call-to-action button with increased width */}
//           <div className=" flex justify-center md:-mt-8">
//             <InteractiveHoverButton
//               className="bg-[#FD5F03] text-white w-[200px] h-[58.61px] font-medium text-xl"
//               onClick={() => {
//                 setRequestDemoClick(true);
//                 openContactModal();
//               }}
//             >
//               Schedule a Demo
//             </InteractiveHoverButton>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveHoverButton from "./InteractiveHoverButton";
import store from "../store/store";
import Image from "next/image";
import heromain from "../../assets/heromain.gif"; // Import the GIF as fallback

// Direct import attempt for the JSON file
import heromainJson from "../../assets/heromain.json"; // Adjust path if needed

const HeroSection = () => {
  const texts = ["Engagement", "Retention", "Stickiness", " Revenue"];
  const [index, setIndex] = useState(0);
  const textColor = ["#FD5F03", "#03A1FD", "#793BDE", "#F200EA", "#0CB600"];
  const lottieContainerRef = useRef(null);
  const [lottieLoaded, setLottieLoaded] = useState(false);

  const { setRequestDemoClick, openContactModal } = store();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Initialize Lottie animation after the component mounts
  useEffect(() => {
    // Create a script element to load the Lottie library
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js";
    script.async = true;
    
    // Once the script is loaded, initialize the animation
    script.onload = () => {
      if (lottieContainerRef.current && window.lottie) {
        try {
          console.log("Attempting to load Lottie animation from imported JSON...");
          console.log("Animation data structure:", Object.keys(heromainJson));
          
          // Load the animation with the directly imported data
          const anim = window.lottie.loadAnimation({
            container: lottieContainerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: heromainJson // Use the imported JSON directly
          });
          
          anim.addEventListener('DOMLoaded', () => {
            console.log("Lottie animation loaded successfully!");
            setLottieLoaded(true);
          });
          
          anim.addEventListener('error', (error) => {
            console.error("Lottie animation error:", error);
            setLottieLoaded(false);
          });
          
          // Cleanup function
          return () => {
            anim.destroy();
          };
        } catch (error) {
          console.error("Error initializing Lottie:", error);
          setLottieLoaded(false);
        }
      }
    };
    
    script.onerror = (error) => {
      console.error("Failed to load Lottie script:", error);
      setLottieLoaded(false);
    };
    
    // Add the script to the document
    document.body.appendChild(script);
    
    // Cleanup function
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="bg-[#FFF7F3] w-full py-10 md:py-10 lg:py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-center w-full flex justify-center items-center flex-col">
            <span className="text-black font-bold text-4xl md:text-[57px] lg:text-[72px]">
              Increase
            </span>
            <span className="inline-block relative ">
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
                  className="font-bold text-4xl md:text-6xl lg:text-[100px] absolute transform left-1/2 -translate-x-1/2"
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
          <p className="text-black text-center text-lg md:text-xl lg:text-[28.05px] font-medium mt-5 lg:mt-14">
            For your App & website
          </p>

          {/* Animation container - stack both and control visibility */}
          <div className="w-full mt-12 md:mt-16 flex justify-center">
            <div className="relative w-full max-w-6xl">
              {/* Lottie animation container */}
              <div 
                ref={lottieContainerRef} 
                className="relative w-full"
                style={{minHeight: "400px"}}
              ></div>
              
              {/* Fallback GIF - shown when Lottie fails */}
              {!lottieLoaded && (
                <div className="absolute inset-0 z-10">
                  <Image
                    src={heromain}
                    alt="Features panels"
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Call-to-action button with increased width */}
          <div className="flex justify-center md:-mt-8">
            <InteractiveHoverButton
              className="bg-[#FD5F03] text-white w-[200px] h-[58.61px] font-medium text-xl"
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
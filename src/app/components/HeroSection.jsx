// HeroSection.jsx
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const texts = [
    "Engagement",
    "Retention",
    "Conversion Rate",
    "Stickiness",
    "Revenue",
  ];
  const [index, setIndex] = useState(0);
  const textColor = ["#FD5F03", "#03A1FD", "#793BDE", "#F200EA", "#0CB600"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#FFF7F3] w-full py-16 md:py-24 lg:py-32 -mt-[100px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Heading */}
          <h1 className="text-center w-full">
            <span className="block text-black font-bold text-4xl md:text-6xl lg:text-[72.048px] leading-tight md:leading-tight  capitalize font-sfpro">
              Increase
            </span>
            <div className="h-[60px] md:h-[90px] lg:h-[140px] relative flex items-center justify-center -mt-4 md:-mt-6 lg:-mt-8">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  style={{ color: textColor[index] }}
                  className="font-bold text-4xl md:text-6xl lg:text-[106.048px] leading-tight md:leading-tight lg:leading-[103.587px]  font-sfpro text-center"
                >
                  {texts[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          {/* Paragraph */}
          <p className="text-black text-center text-lg md:text-xl lg:text-[28.05px] font-medium  font-sfpro mt-4 md:mt-4">
            For your App & website
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 md:mt-16">
            {/* Book a call button */}

            <button className="flex items-center bg-[#FD5F03] hover:bg-[#e55602] transition-colors duration-300 text-white rounded-[41.942px] w-[200px] h-[58.61px] relative group">
              <span className="text-white font-medium text-xl font-sfpro  group-hover:pl-2 transition-all duration-300 pl-6">
                Book a call
              </span>
              <div className="bg-white rounded-full w-[45px] h-[45px] absolute right-2 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 47 46"
                  fill="none"
                >
                  <path
                    d="M27.2943 15.3825C27.1411 15.2398 27.0183 15.0678 26.9331 14.8766C26.8479 14.6854 26.8021 14.479 26.7984 14.2697C26.7947 14.0604 26.8332 13.8526 26.9116 13.6585C26.99 13.4644 27.1067 13.2881 27.2547 13.1401C27.4027 12.9921 27.579 12.8754 27.7731 12.797C27.9672 12.7186 28.175 12.6801 28.3843 12.6838C28.5936 12.6875 28.8 12.7333 28.9912 12.8185C29.1824 12.9037 29.3544 13.0265 29.4971 13.1797L37.8098 21.4923C38.1017 21.7846 38.2656 22.1807 38.2656 22.5938C38.2656 23.0068 38.1017 23.403 37.8098 23.6952L29.4971 32.0079C29.3544 32.161 29.1824 32.2838 28.9912 32.369C28.8 32.4542 28.5936 32.5 28.3843 32.5037C28.175 32.5074 27.9672 32.4689 27.7731 32.3905C27.579 32.3121 27.4027 32.1954 27.2547 32.0474C27.1067 31.8994 26.99 31.7231 26.9116 31.5291C26.8332 31.335 26.7947 31.1271 26.7984 30.9178C26.8021 30.7086 26.8479 30.5022 26.9331 30.311C27.0183 30.1198 27.1411 29.9477 27.2943 29.805L32.9469 24.1524H12.8094C12.3961 24.1524 11.9996 23.9882 11.7073 23.6959C11.415 23.4036 11.2508 23.0071 11.2508 22.5938C11.2508 22.1804 11.415 21.784 11.7073 21.4917C11.9996 21.1994 12.3961 21.0351 12.8094 21.0351H32.9469L27.2943 15.3825Z"
                    fill="#FD5F03"
                  />
                </svg>
              </div>
            </button>

            {/* Watch a quick demo text */}
            <span className="text-black text-center text-lg md:text-xl lg:text-[20.909px] font-medium capitalize font-sfpro">
              Watch a quick demo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// // HyperPersonalization.jsx
// "use client";
// import React from 'react';
// import Image from 'next/image';
// import hp from '../../assets/hp.png';

// const HyperPersonalization = () => {
//   return (
//     <div className="w-full  py-16  bg-[#FFF7F3]">
//       <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
//         {/* Left Column - Text */}
//         <div className="w-full md:w-1/2">
//           <h2
//             className="text-[#101010] text-[56px] font-medium leading-[102%] capitalize font-['SF_Pro_Display',_sans-serif] mb-6"
//           >
//             Hyper Personalization Using Cohorts
//           </h2>
//           <p
//             className="text-[#2F2F2F] text-[18px] font-normal leading-[128%] capitalize font-['SF_Pro_Display',_sans-serif]"
//           >
//             Connect with your CDP to fetch user cohorts (segments) based on their activity, behavior, or preferences. You can then show personalized in-app content like stories, videos, or banners to each user group — helping you boost engagement and conversions without any manual work.
//           </p>
//         </div>

//         {/* Right Column - Image Container */}
//         <div
//           className="w-full md:w-[731px] h-[616px] flex-shrink-0 rounded-[21px] border-2 border-[#FF5E00] bg-[#FFE4D5]"
//         >
//           {/* Image display */}
//           <div className="w-full h-full relative">
//             <Image
//               src={hp}
//               alt="Hyper Personalization illustration"
//               fill
//               style={{ objectFit: "contain" }}
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HyperPersonalization;

// HyperPersonalization.jsx
// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import hp1 from '../../assets/hp1.png';
// import hp2 from '../../assets/hp2.png';
// import hp3 from '../../assets/hp3.png';
// import hp4 from '../../assets/hp4.png';
// import hp5 from '../../assets/hp5.png';

// const HyperPersonalization = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [hp1, hp2, hp3, hp4, hp5];

//   useEffect(() => {
//     // Create a smoother animation by cycling through images faster
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 1200); // Faster transition for more fluid animation

//     return () => clearInterval(interval);
//   }, []);

//   // Custom variants for the animation
//   const imageVariants = {
//     enter: { opacity: 0, scale: 0.95 },
//     center: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.4, ease: "easeOut" }
//     },
//     exit: {
//       opacity: 0,
//       scale: 1.05,
//       transition: { duration: 0.3, ease: "easeIn" }
//     }
//   };

//   return (
//     <div className="w-full py-16 bg-[#FFF7F3]">
//       <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
//         {/* Left Column - Text */}
//         <div className="w-full md:w-1/2">
//           <h2 style={{
//             color: '#101010',
//             fontFamily: '"SF Pro Display", sans-serif',
//             fontSize: '56px',
//             fontStyle: 'normal',
//             fontWeight: '500',
//             lineHeight: '102%',
//             textTransform: 'capitalize',
//             marginBottom: '24px'
//           }}>
//             Hyper Personalization Using Cohorts
//           </h2>
//           <p style={{
//             color: '#2F2F2F',
//             fontFeatureSettings: "'liga' off, 'clig' off",
//             fontFamily: '"SF Pro Display", sans-serif',
//             fontSize: '18px',
//             fontStyle: 'normal',
//             fontWeight: '400',
//             lineHeight: '128%',
//             textTransform: 'capitalize'
//           }}>
//             Connect with your CDP to fetch user cohorts (segments) based on their activity, behavior, or preferences. You can then show personalized in-app content like stories, videos, or banners to each user group — helping you boost engagement and conversions without any manual work.
//           </p>
//         </div>

//         {/* Right Column - Image Container with Enhanced Animation */}
//         <div
//           className="w-full md:w-[731px] h-[616px] flex-shrink-0 rounded-[21px] border-2 border-[#FF5E00] bg-[#FFE4D5] overflow-hidden"
//         >
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentImageIndex}
//               className="w-full h-full relative"
//               variants={imageVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//             >
//               <Image
//                 src={images[currentImageIndex]}
//                 alt={`Hyper Personalization illustration ${currentImageIndex + 1}`}
//                 fill
//                 style={{ objectFit: "contain" }}
//                 priority
//                 quality={100}
//               />
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HyperPersonalization;

// HyperPersonalization.jsx
// "use client";
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import hp1 from '../../assets/hp1.png';
// import hp2 from '../../assets/hp2.png';
// import hp3 from '../../assets/hp3.png';
// import hp4 from '../../assets/hp4.png';
// import hp5 from '../../assets/hp5.png';

// const HyperPersonalization = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const images = [hp1, hp2, hp3, hp4, hp5];

//   useEffect(() => {
//     // Use a very fast interval to create animation effect
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 1000); // Fast cycling for animation effect

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="w-full py-16 bg-[#FFF7F3]">
//       <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
//         {/* Left Column - Text */}
//         <div className="w-full md:w-1/2">
//           <h2 style={{
//             color: '#101010',
//             fontFamily: '"SF Pro Display", sans-serif',
//             fontSize: '56px',
//             fontStyle: 'normal',
//             fontWeight: '500',
//             lineHeight: '102%',
//             textTransform: 'capitalize',
//             marginBottom: '24px'
//           }}>
//             Hyper Personalization Using Cohorts
//           </h2>
//           <p style={{
//             color: '#2F2F2F',
//             fontFeatureSettings: "'liga' off, 'clig' off",
//             fontFamily: '"SF Pro Display", sans-serif',
//             fontSize: '18px',
//             fontStyle: 'normal',
//             fontWeight: '400',
//             lineHeight: '128%',
//             textTransform: 'capitalize'
//           }}>
//             Connect with your CDP to fetch user cohorts (segments) based on their activity, behavior, or preferences. You can then show personalized in-app content like stories, videos, or banners to each user group — helping you boost engagement and conversions without any manual work.
//           </p>
//         </div>

//         {/* Right Column - Fast Animation Container */}
//         <div className="w-full md:w-[731px] h-[616px] flex-shrink-0 rounded-[21px] border-2 border-[#FF5E00] bg-[#FFE4D5] overflow-hidden relative">
//           <AnimatePresence mode="sync">
//             <motion.div
//               key={currentImage}
//               className="absolute inset-0"
//               initial={{ opacity: 0.8 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{
//                 duration: 0.15, // Very short transition
//                 ease: "linear"
//               }}
//             >
//               <Image
//                 src={images[currentImage]}
//                 alt="Animation frame"
//                 fill
//                 style={{ objectFit: "contain" }}
//                 priority
//                 quality={100}
//               />
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HyperPersonalization;

// HyperPersonalization.jsx
// "use client";
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import hp1 from '../../assets/hp1.png';
// import hp2 from '../../assets/hp2.png';
// import hp3 from '../../assets/hp3.png';
// import hp4 from '../../assets/hp4.png';
// import hp5 from '../../assets/hp5.png';

// const HyperPersonalization = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [prevIndex, setPrevIndex] = useState(4); // Start with last image as previous
//   const images = [hp1, hp2, hp3, hp4, hp5];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPrevIndex(activeIndex);
//       setActiveIndex((prev) => (prev + 1) % images.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [activeIndex, images.length]);

//   return (
//     <div className="w-full py-16 bg-[#FFF7F3]">
//       <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
//         {/* Left Column - Text */}
//         <div className="w-full md:w-1/2">
//           <h2 style={{
//             color: '#101010',
//             fontFamily: '"SF Pro Display", sans-serif',
//             fontSize: '56px',
//             fontStyle: 'normal',
//             fontWeight: '500',
//             lineHeight: '102%',
//             textTransform: 'capitalize',
//             marginBottom: '24px'
//           }}>
//             Hyper Personalization Using Cohorts
//           </h2>
//           <p style={{
//             color: '#2F2F2F',
//             fontFeatureSettings: "'liga' off, 'clig' off",
//             fontFamily: '"SF Pro Display", sans-serif',
//             fontSize: '18px',
//             fontStyle: 'normal',
//             fontWeight: '400',
//             lineHeight: '128%',
//             textTransform: 'capitalize'
//           }}>
//             Connect with your CDP to fetch user cohorts (segments) based on their activity, behavior, or preferences. You can then show personalized in-app content like stories, videos, or banners to each user group — helping you boost engagement and conversions without any manual work.
//           </p>
//         </div>

//         {/* Right Column - Double-layer Animation Container */}
//         <div className="w-full md:w-[731px] h-[616px] flex-shrink-0 rounded-[21px] border-2 border-[#FF5E00] bg-[#FFE4D5] overflow-hidden relative">
//           {/* Double-layer approach: keep both current and previous images visible */}

//           {/* Previous image - always behind */}
//           <div className="absolute inset-0">
//             <Image
//               src={images[prevIndex]}
//               alt="Previous animation frame"
//               fill
//               style={{ objectFit: "contain" }}
//               priority
//               quality={100}
//             />
//           </div>

//           {/* Current image - animate opacity */}
//           <motion.div
//             className="absolute inset-0"
//             animate={{
//               opacity: [0, 1],
//             }}
//             transition={{
//               duration: 0.8,
//               ease: "easeInOut",
//               times: [0, 1]
//             }}
//             key={activeIndex}
//           >
//             <Image
//               src={images[activeIndex]}
//               alt="Current animation frame"
//               fill
//               style={{ objectFit: "contain" }}
//               priority
//               quality={100}
//             />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HyperPersonalization;

// HyperPersonalization.jsx
// "use client";
// import React, { useEffect, useState, useRef } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import hp1 from '../../assets/hp1.png';
// import hp2 from '../../assets/hp2.png';
// import hp3 from '../../assets/hp3.png';
// import hp4 from '../../assets/hp4.png';
// import hp5 from '../../assets/hp5.png';

// const HyperPersonalization = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [nextIndex, setNextIndex] = useState(1);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const timeoutRef = useRef(null);

//   const images = [hp1, hp2, hp3, hp4, hp5];

//   useEffect(() => {
//     const animate = () => {
//       // Start transition
//       setIsTransitioning(true);

//       // After transition completes, update indices
//       timeoutRef.current = setTimeout(() => {
//         setCurrentIndex(nextIndex);
//         setNextIndex((nextIndex + 1) % images.length);
//         setIsTransitioning(false);
//       }, 1500); // Match the transition duration
//     };

//     const interval = setInterval(animate, 1500);

//     return () => {
//       clearInterval(interval);
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
//   }, [nextIndex, images.length]);

//   return (
//     <div className="w-full py-16 bg-[#FFF7F3]">
//       <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
//         {/* Left Column - Text */}
//         <div className="w-full md:w-1/2">
//           <h2 style={{
//             color: '#101010',
//             fontFamily: '"SF Pro Display", sans-serif',
//             fontSize: '56px',
//             fontStyle: 'normal',
//             fontWeight: '500',
//             lineHeight: '102%',
//             textTransform: 'capitalize',
//             marginBottom: '24px'
//           }}>
//             Hyper Personalization Using Cohorts
//           </h2>
//           <p style={{
//             color: '#2F2F2F',
//             fontFeatureSettings: "'liga' off, 'clig' off",
//             fontFamily: '"SF Pro Display", sans-serif',
//             fontSize: '18px',
//             fontStyle: 'normal',
//             fontWeight: '400',
//             lineHeight: '128%',
//             textTransform: 'capitalize'
//           }}>
//             Connect with your CDP to fetch user cohorts (segments) based on their activity, behavior, or preferences. You can then show personalized in-app content like stories, videos, or banners to each user group — helping you boost engagement and conversions without any manual work.
//           </p>
//         </div>

//         {/* Right Column - Better Animation Container */}
//         <div className="w-full md:w-[731px] h-[616px] flex-shrink-0 rounded-[21px] border-2 border-[#FF5E00] bg-[#FFE4D5] overflow-hidden relative">
//           {/* Current image layer - always visible */}
//           <div className="absolute inset-0" style={{ zIndex: 1 }}>
//             <Image
//               src={images[currentIndex]}
//               alt="Current frame"
//               fill
//               style={{
//                 objectFit: "contain",
//                 opacity: isTransitioning ? 0 : 1,
//                 transition: "opacity 0.8s ease-in-out"
//               }}
//               priority
//               quality={100}
//             />
//           </div>

//           {/* Next image layer - fades in during transition */}
//           <div className="absolute inset-0" style={{ zIndex: 2 }}>
//             <Image
//               src={images[nextIndex]}
//               alt="Next frame"
//               fill
//               style={{
//                 objectFit: "contain",
//                 opacity: isTransitioning ? 1 : 0,
//                 transition: "opacity 0.8s ease-in-out"
//               }}
//               priority
//               quality={100}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HyperPersonalization;

// HyperPersonalization.jsx
// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import hp1 from '../../assets/hp1.png';
// import hp2 from '../../assets/hp2.png';
// import hp3 from '../../assets/hp3.png';
// import hp4 from '../../assets/hp4.png';
// import hp5 from '../../assets/hp5.png';

// const HyperPersonalization = () => {
//   const images = [hp1, hp2, hp3, hp4, hp5];
//   const [imagesLoaded, setImagesLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setImagesLoaded(true);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="w-full py-16 bg-[#FFF7F3]">
//       <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
//         {/* Left Column - Text */}
//         <div className="w-full md:w-1/2">
//           <h2 style={{
//             color: '#101010',
//             fontFamily: '"SF Pro Display", sans-serif',
//             fontSize: '56px',
//             fontStyle: 'normal',
//             fontWeight: '500',
//             lineHeight: '102%',
//             textTransform: 'capitalize',
//             marginBottom: '24px'
//           }}>
//             Hyper Personalization Using Cohorts
//           </h2>
//           <p style={{
//             color: '#2F2F2F',
//             fontFeatureSettings: "'liga' off, 'clig' off",
//             fontFamily: '"SF Pro Display", sans-serif',
//             fontSize: '18px',
//             fontStyle: 'normal',
//             fontWeight: '400',
//             lineHeight: '128%',
//             textTransform: 'capitalize'
//           }}>
//             Connect with your CDP to fetch user cohorts (segments) based on their activity, behavior, or preferences. You can then show personalized in-app content like stories, videos, or banners to each user group — helping you boost engagement and conversions without any manual work.
//           </p>
//         </div>

//         {/* Right Column - True Animation Container */}
//         <div
//           className="w-full md:w-[731px] h-[616px] flex-shrink-0 rounded-[21px] border-2 border-[#FF5E00] bg-[#FFE4D5] overflow-hidden relative"
//         >
//           {/* Loading state */}
//           {!imagesLoaded && (
//             <div className="absolute inset-0 flex items-center justify-center">
//               <p>Loading animation...</p>
//             </div>
//           )}

//           {/* Animation layers - these will all be constantly visible with varying opacities */}
//           <motion.div
//             className="absolute inset-0"
//             animate={{
//               opacity: [1, 0.8, 0.4, 0, 0, 0, 0, 0.4, 0.8, 1],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 8,
//               ease: "easeInOut",
//               times: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 0.8, 0.85, 0.9, 1]
//             }}
//             style={{ display: imagesLoaded ? 'block' : 'none' }}
//           >
//             <Image src={hp1} alt="Animation frame 1" fill style={{ objectFit: "contain" }} priority quality={100} />
//           </motion.div>

//           <motion.div
//             className="absolute inset-0"
//             animate={{
//               opacity: [0, 0.4, 0.8, 1, 0.8, 0.4, 0, 0, 0, 0],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 8,
//               ease: "easeInOut",
//               times: [0, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.7, 0.9, 1]
//             }}
//             style={{ display: imagesLoaded ? 'block' : 'none' }}
//           >
//             <Image src={hp2} alt="Animation frame 2" fill style={{ objectFit: "contain" }} priority quality={100} />
//           </motion.div>

//           <motion.div
//             className="absolute inset-0"
//             animate={{
//               opacity: [0, 0, 0, 0.4, 0.8, 1, 0.8, 0.4, 0, 0],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 8,
//               ease: "easeInOut",
//               times: [0, 0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 1]
//             }}
//             style={{ display: imagesLoaded ? 'block' : 'none' }}
//           >
//             <Image src={hp3} alt="Animation frame 3" fill style={{ objectFit: "contain" }} priority quality={100} />
//           </motion.div>

//           <motion.div
//             className="absolute inset-0"
//             animate={{
//               opacity: [0, 0, 0, 0, 0, 0.4, 0.8, 1, 0.8, 0.4],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 8,
//               ease: "easeInOut",
//               times: [0, 0.1, 0.3, 0.4, 0.5, 0.55, 0.6, 0.7, 0.8, 0.9]
//             }}
//             style={{ display: imagesLoaded ? 'block' : 'none' }}
//           >
//             <Image src={hp4} alt="Animation frame 4" fill style={{ objectFit: "contain" }} priority quality={100} />
//           </motion.div>

//           <motion.div
//             className="absolute inset-0"
//             animate={{
//               opacity: [0.4, 0, 0, 0, 0, 0, 0, 0, 0.4, 0.8],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 8,
//               ease: "easeInOut",
//               times: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.7, 0.8, 0.85, 0.9]
//             }}
//             style={{ display: imagesLoaded ? 'block' : 'none' }}
//           >
//             <Image src={hp5} alt="Animation frame 5" fill style={{ objectFit: "contain" }} priority quality={100} />
//           </motion.div>

//           {/* Subtle overlay animation to make transitions even smoother */}
//           <motion.div
//             className="absolute inset-0"
//             animate={{
//               opacity: [0, 0.03, 0],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 4,
//               ease: "easeInOut"
//             }}
//             style={{
//               display: imagesLoaded ? 'block' : 'none',
//               background: "radial-gradient(circle, rgba(255,255,255,0) 30%, rgba(255,228,213,0.05) 70%)"
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HyperPersonalization;

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import hp1 from "../../assets/hp1.png";
// import hp2 from "../../assets/hp2.png";
// import hp3 from "../../assets/hp3.png";
// import hp4 from "../../assets/hp4.png";
// import hp5 from "../../assets/hp5.png";
// import "../globals.css";

// const HyperPersonalization = () => {
//   const images = [hp1, hp2, hp3, hp4, hp5];
//   const [imagesLoaded, setImagesLoaded] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Set images as loaded after component mounts
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setImagesLoaded(true);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   // Continuous animation cycle
//   useEffect(() => {
//     if (!imagesLoaded) return;

//     const animationInterval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % images.length);
//     }, 2000); // Change every 2 seconds

//     return () => clearInterval(animationInterval);
//   }, [imagesLoaded, images.length]);

//   return (
//     <div className="w-full py-16 bg-[#FFF7F3]">
//       <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
//         {/* Left Column - Text */}
//         <div className="w-full md:w-1/2 ">
//           <h2 className="text-[#101010]  text-[56px] font-medium leading-[102%] mb-6 capitalize">
//             Hyper Personalization Using Cohorts
//           </h2>
//           <p
//             style={{
//               color: "#2F2F2F",
//               fontFeatureSettings: "'liga' off, 'clig' off",
//               // fontFamily: '"SF Pro Display", sans-serif',
//               fontSize: "16px",
//               fontStyle: "normal",
//               fontWeight: "400",
//               lineHeight: "128%",
//               maxWidth: "350px",
//               justifyContent: "center",
//               // textTransform: 'capitalize'
//             }}
//           >
//             Connect with your CDP to fetch user cohorts (segments) based on
//             their activity, behavior, or preferences. You can then show
//             personalized in-app content like stories, videos, or banners to each
//             user group — helping you boost engagement and conversions without
//             any manual work.
//           </p>
//         </div>

//         {/* Right Column - Animated Container */}
//         <div className="w-full md:w-[731px] h-[500px] flex-shrink-0 rounded-[21px] border-2 border-[#FF5E00] bg-[#FFE4D5] overflow-hidden relative">
//           {/* Loading state */}
//           {!imagesLoaded && (
//             <div className="absolute inset-0 flex items-center justify-center">
//               <p>Loading animation...</p>
//             </div>
//           )}

//           {/* Continuous animation */}
//           {imagesLoaded && (
//             <>
//               {images.map((image, index) => {
//                 // Calculate position in animation cycle
//                 const position =
//                   (index - activeIndex + images.length) % images.length;

//                 // Determine if this image is active, entering, or exiting
//                 const isActive = position === 0;
//                 const isEntering = position === images.length - 1;
//                 const isExiting = position === 1;

//                 // Different animation states
//                 let animateProps = {};
//                 let initial = {};
//                 let transition = {};

//                 if (isActive) {
//                   // Current active image
//                   animateProps = {
//                     opacity: 1,
//                     scale: 1,
//                     zIndex: 10,
//                   };
//                   initial = {
//                     opacity: 0,
//                     scale: 1.05,
//                   };
//                   transition = {
//                     opacity: { duration: 0.8, ease: "easeInOut" },
//                     scale: { duration: 3, ease: "easeOut" },
//                   };
//                 } else if (isEntering) {
//                   // Image about to enter
//                   animateProps = {
//                     opacity: 0,
//                     scale: 1.05,
//                     zIndex: 5,
//                   };
//                   initial = {
//                     opacity: 0,
//                     scale: 1.05,
//                   };
//                   transition = {
//                     opacity: { duration: 0.5, ease: "easeIn" },
//                     scale: { duration: 0.8, ease: "easeIn" },
//                   };
//                 } else if (isExiting) {
//                   // Image that was active and is now exiting
//                   animateProps = {
//                     opacity: 0,
//                     scale: 1,
//                     zIndex: 8,
//                   };
//                   initial = {
//                     opacity: 1,
//                     scale: 1,
//                   };
//                   transition = {
//                     opacity: { duration: 1.2, ease: "easeOut" },
//                     scale: { duration: 0.8, ease: "easeOut" },
//                   };
//                 } else {
//                   // Other images (inactive)
//                   animateProps = {
//                     opacity: 0,
//                     scale: 1,
//                     zIndex: 1,
//                   };
//                   initial = {
//                     opacity: 0,
//                     scale: 1,
//                   };
//                   transition = {
//                     opacity: { duration: 0.5 },
//                     scale: { duration: 0.5 },
//                   };
//                 }

//                 return (
//                   <motion.div
//                     key={`image-${index}`}
//                     className="absolute inset-0"
//                     initial={initial}
//                     animate={animateProps}
//                     transition={transition}
//                   >
//                     <Image
//                       src={image}
//                       alt={`Personalization visualization ${index + 1}`}
//                       fill
//                       style={{ objectFit: "contain" }}
//                       priority
//                       quality={100}
//                     />
//                   </motion.div>
//                 );
//               })}

//               {/* Subtle visual enhancement layer */}
//               <motion.div
//                 className="absolute inset-0 pointer-events-none"
//                 animate={{
//                   opacity: [0.02, 0.08, 0.02],
//                 }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 3,
//                   ease: "easeInOut",
//                 }}
//                 style={{
//                   background:
//                     "radial-gradient(circle, rgba(255,255,255,0.05) 30%, rgba(255,94,0,0.03) 70%)",
//                 }}
//               />
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HyperPersonalization;


"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import hp1 from "../../assets/hp1.png";
import hp2 from "../../assets/hp2.png";
import hp3 from "../../assets/hp3.png";
import hp4 from "../../assets/hp4.png";
import hp5 from "../../assets/hp5.png";
import "../globals.css";

const HyperPersonalization = () => {
  const images = [hp1, hp2, hp3, hp4, hp5];
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Set images as loaded after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Continuous animation cycle
  useEffect(() => {
    if (!imagesLoaded) return;

    const animationInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 2 seconds

    return () => clearInterval(animationInterval);
  }, [imagesLoaded, images.length]);

  return (
    <div className="w-full py-5 md:py-8 bg-[#FFF7F3]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        {/* Left Column - Text */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
          <h2 className="text-[#101010] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] md:leading-[102%] mb-4 md:mb-6 capitalize">
            Hyper Personalization Using Cohorts
          </h2>
          <p className="text-[#2F2F2F] text-base font-normal leading-[128%] max-w-[400px]">
            Connect with your CDP to fetch user cohorts (segments) based on
            their activity, behavior, or preferences. You can then show
            personalized in-app content like stories, videos, or banners to each
            user group — helping you boost engagement and conversions without
            any manual work.
          </p>
        </div>

        {/* Right Column - Animated Container */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="w-full h-[400px] md:h-[450px] lg:h-[450px] flex-shrink-0 rounded-[21px] border-2 border-[#FF5E00] bg-[#FFE4D5] overflow-hidden relative">
            {/* Loading state */}
            {!imagesLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <p>Loading animation...</p>
              </div>
            )}

            {/* Continuous animation */}
            {imagesLoaded && (
              <>
                {images.map((image, index) => {
                  // Calculate position in animation cycle
                  const position =
                    (index - activeIndex + images.length) % images.length;

                  // Determine if this image is active, entering, or exiting
                  const isActive = position === 0;
                  const isEntering = position === images.length - 1;
                  const isExiting = position === 1;

                  // Different animation states
                  let animateProps = {};
                  let initial = {};
                  let transition = {};

                  if (isActive) {
                    // Current active image
                    animateProps = {
                      opacity: 1,
                      scale: 1,
                      zIndex: 10,
                    };
                    initial = {
                      opacity: 0,
                      scale: 1.05,
                    };
                    transition = {
                      opacity: { duration: 0.8, ease: "easeInOut" },
                      scale: { duration: 3, ease: "easeOut" },
                    };
                  } else if (isEntering) {
                    // Image about to enter
                    animateProps = {
                      opacity: 0,
                      scale: 1.05,
                      zIndex: 5,
                    };
                    initial = {
                      opacity: 0,
                      scale: 1.05,
                    };
                    transition = {
                      opacity: { duration: 0.5, ease: "easeIn" },
                      scale: { duration: 0.8, ease: "easeIn" },
                    };
                  } else if (isExiting) {
                    // Image that was active and is now exiting
                    animateProps = {
                      opacity: 0,
                      scale: 1,
                      zIndex: 8,
                    };
                    initial = {
                      opacity: 1,
                      scale: 1,
                    };
                    transition = {
                      opacity: { duration: 1.2, ease: "easeOut" },
                      scale: { duration: 0.8, ease: "easeOut" },
                    };
                  } else {
                    // Other images (inactive)
                    animateProps = {
                      opacity: 0,
                      scale: 1,
                      zIndex: 1,
                    };
                    initial = {
                      opacity: 0,
                      scale: 1,
                    };
                    transition = {
                      opacity: { duration: 0.5 },
                      scale: { duration: 0.5 },
                    };
                  }

                  return (
                    <motion.div
                      key={`image-${index}`}
                      className="absolute inset-0"
                      initial={initial}
                      animate={animateProps}
                      transition={transition}
                    >
                      <Image
                        src={image}
                        alt={`Personalization visualization ${index + 1}`}
                        fill
                        style={{ objectFit: "contain" }}
                        priority
                        quality={100}
                      />
                    </motion.div>
                  );
                })}

                {/* Subtle visual enhancement layer */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    opacity: [0.02, 0.08, 0.02],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.05) 30%, rgba(255,94,0,0.03) 70%)",
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HyperPersonalization;
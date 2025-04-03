// import { motion, useAnimation } from "framer-motion";
// import { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";
// import { Inter, Bricolage_Grotesque, Satisfy, Outfit } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
// const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800'] });
// const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'] });
// const outfit = Outfit({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
// import how_it_works_1 from "@/assets/how_it_works_1.png"

// const Card = ({ text, index, activeIndex, total }) => {
//     const controls = useAnimation();
//     const { ref, inView } = useInView({ triggerOnce: false, threshold: 1 });

//     useEffect(() => {
//         if (inView) {
//             const offset = index - activeIndex;
//             if (offset === 0) {
//                 controls.start({ opacity: 1, x: 0, y: 0, zIndex: total });
//             } else if (offset > 0) {
//                 controls.start({
//                     opacity: Math.max(0.2, 1 - (Math.abs(offset) * 0.3)),
//                     x: 50 * offset,
//                     y: 10 * offset,
//                     zIndex: total - offset
//                 });
//             } else {
//                 controls.start({
//                     opacity: Math.max(0.2, 1 - (Math.abs(offset) * 0.3)),
//                     x: 50 * offset,
//                     y: 10 * offset,
//                     zIndex: total + offset
//                 });
//             }
//         }
//     }, [controls, inView, activeIndex, index, total]);

//     return (
//         <motion.div
//             ref={ref}
//             initial={{ opacity: 0.5, x: 0, y: 0, zIndex: total - Math.abs(index - activeIndex) }}
//             animate={controls}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//             className=" shadow-lg p-6 rounded-lg w-[900px] h-[300px] absolute bg-[#B5DFFF] border-4 border-white"
//             style={{ left: "20%", transform: "translateX(-50%)" }}
//         >
//             {text}
//         </motion.div>
//     );
// };
// const HowItWorks = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [isAnimating, setIsAnimating] = useState(false);
//     const { ref, inView } = useInView({ threshold: 0.3 }); // Detect section visibility

//     const cards = [
//         { title: "Integrate SDK", content: "Add our SDK to your App. Integration is straightforward and typically involves following a few easy steps provided in our documentation. Our team will guide you end to end during the process. Entire steps takes approximate 30 minutes. Extremely secure SDK distributed by the largest distribution partner in the world.", icon: "💻" },
//         { title: "Integrate SDK", content: "Add our SDK to your App. Integration is straightforward and typically involves following a few easy steps provided in our documentation. Our team will guide you end to end during the process. Entire steps takes approximate 30 minutes. Extremely secure SDK distributed by the largest distribution partner in the world.", icon: "📱" },
//         { title: "Integrate SDK", content: "Add our SDK to your App. Integration is straightforward and typically involves following a few easy steps provided in our documentation. Our team will guide you end to end during the process. Entire steps takes approximate 30 minutes. Extremely secure SDK distributed by the largest distribution partner in the world.", icon: "☁️" }
//     ];

//     const handleWheel = (event) => {
//         if (!inView || isAnimating) return; // Only animate when in viewport
//         setIsAnimating(true);

//         if (event.deltaY > 0) {
//             setActiveIndex((prev) => Math.min(prev + 1, cards.length - 1));
//         } else {
//             setActiveIndex((prev) => Math.max(prev - 1, 0));
//         }

//         setTimeout(() => setIsAnimating(false), 800);
//     };

//     useEffect(() => {
//         window.addEventListener("wheel", handleWheel);
//         return () => window.removeEventListener("wheel", handleWheel);
//     }, [isAnimating, inView]);
//     return (
//         <div className='px-16 py-5  flex flex-col justify-center bg-gradient-to-b from-white to-[#FFEBE0]'>
//             <h3 className={`${satisfy.className} text-[#FD5F03] text-[26px] text-center`}>How It Works</h3>
//             <h1 className={`${bricolageGrotesque.className} text-[46px] capitalize text-center mb-2 leading-none`}>Integration Process {"<"} 30 Mins</h1>
//             <p className={` ${outfit.className} text-center my-2`}>Install our SDK in less than 30 minutes and use our <br /> dashboards that say a lot more than just graphs.</p>
//             <div className="relative my-20 flex flex-col items-center justify-center">
//                 <div ref={ref} className="relative w-full h-[300px] flex items-center justify-center">
//                     {cards.map((card, index) => (
//                         <Card key={index} text={
//                             <div className="flex items-center">
//                                 <div className="flex flex-col w-[50%]">
//                                     <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
//                                     <p className="text-gray-600 text-center">{card.content}</p>
//                                 </div>
//                                 <div className="w-[50%] flex justify-center items-center">
//                                     <img src={how_it_works_1.src} alt="how it works" className=" w-[80%]" />
//                                 </div>
//                             </div>
//                         }
//                             index={index}
//                             activeIndex={activeIndex}
//                             total={cards.length} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HowItWorks




import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Inter, Bricolage_Grotesque, Satisfy, Outfit } from 'next/font/google';
import img1 from '@/assets/codeblock.png';

// Font definitions
const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800'] });
const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

const StackedCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  
  // Card data - using the image you provided (img1)
  const cards = [
    { 
      id: 1,
      title: "Integrate SDK", 
      content: "Add our SDK to your App. Integration is straightforward and typically involves following a few easy steps provided in our documentation. Our team will guide you end to end during the process. Entire steps takes approximate 30 minutes. Extremely secure SDK distributed by the largest distribution partner in the world.",
      image: img1
    },
    { 
      id: 2,
      title: "Configure Settings", 
      content: "Configure your SDK settings according to your specific needs. Our dashboard makes this process intuitive and straightforward. You can set up custom tracking events, user identification, and analytics preferences in minutes.",
      image: img1
    },
    { 
      id: 3,
      title: "Access Dashboard", 
      content: "Get immediate access to our comprehensive analytics dashboard. View detailed metrics, user behavior patterns, and actionable insights. Our dashboards say a lot more than just graphs - they provide the information you need to make data-driven decisions.",
      image: img1
    }
  ];

  // Section header component
  const Header = () => (
    <div className="text-center mb-12">
      <h3 className={`${satisfy.className} text-[#FD5F03] text-xl md:text-[26px] mb-2`}>How It Works</h3>
      <h1 className={`${bricolageGrotesque.className} text-3xl font-normal md:text-[56px] capitalize mb-2 leading-none`}>Integration Process &lt; 30 Mins</h1>
      <p className={`${outfit.className} text-center my-2 text-[16px] md:text-base`}>
        Install our SDK in less than 30 minutes and use our<br className="hidden md:block" />
        dashboards that say a lot more than just graphs.
      </p>
    </div>
  );

  // Improved wheel handler with direction tracking
  const handleWheel = (e) => {
    e.preventDefault();
    
    if (isAnimating) return;
    
    const scrollThreshold = 15;
    if (Math.abs(e.deltaY) > scrollThreshold) {
      setIsAnimating(true);
      
      if (e.deltaY > 0 && activeIndex < cards.length - 1) {
        // Scroll down - next card
        setDirection('down');
        setActiveIndex(prev => prev + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        // Scroll up - previous card
        setDirection('up');
        setActiveIndex(prev => prev - 1);
      }
      
      // Reset animation state after transition
      setTimeout(() => {
        setIsAnimating(false);
        setDirection(null);
      }, 500);
    }
  };

  // Touch event handlers with direction tracking
  const touchStartRef = useRef(0);
  
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientY;
  };
  
  const handleTouchEnd = (e) => {
    if (isAnimating) return;
    
    const touchEnd = e.changedTouches[0].clientY;
    const diff = touchStartRef.current - touchEnd;
    const threshold = 30;
    
    if (Math.abs(diff) > threshold) {
      setIsAnimating(true);
      
      if (diff > 0 && activeIndex < cards.length - 1) {
        // Swipe up - next card
        setDirection('down');
        setActiveIndex(prev => prev + 1);
      } else if (diff < 0 && activeIndex > 0) {
        // Swipe down - previous card
        setDirection('up');
        setActiveIndex(prev => prev - 1);
      }
      
      setTimeout(() => {
        setIsAnimating(false);
        setDirection(null);
      }, 500);
    }
  };

  // Individual card component with improved animation
  const Card = ({ card, index }) => {
    const position = index - activeIndex;
    
    // Calculate card appearance for stacking at top
    let zIndex, opacity, y, scale, rotate;
    
    if (position === 0) {
      // Active card
      zIndex = 30;
      opacity = 1;
      y = 0;
      scale = 1;
      rotate = 0;
    } else if (position < 0) {
      // Cards stacked at the top (negative position means they're above the active card)
      zIndex = 30 + position; // Lower z-index as we go up
      opacity = Math.max(0.95, 1 + position * 0.05);
      y = position * -20; // Negative y moves cards upward
      scale = 1 + position * 0.01;
      rotate = position * -0.5; // Slight rotation for visual interest
    } else {
      // Cards below active card (hidden)
      zIndex = -10;
      opacity = 0;
      y = 40;
      scale = 0.95;
      rotate = 1;
    }

    // Dynamic transition based on direction
    const getTransition = () => {
      const baseTransition = {
        type: 'spring',
        stiffness: 400,
        damping: 35
      };
      
      if (direction === 'up' && (position === 0 || position === -1)) {
        // Previous card coming into view or active card leaving
        return {
          ...baseTransition,
          stiffness: 350,
          damping: 25,
          velocity: 2
        };
      } else if (direction === 'down' && (position === 0 || position === 1)) {
        // Next card coming into view or active card leaving
        return {
          ...baseTransition,
          stiffness: 350,
          damping: 25,
          velocity: 2
        };
      }
      
      return baseTransition;
    };

    return (
      <motion.div
        initial={false}
        animate={{ 
          opacity, 
          y, 
          zIndex, 
          scale,
          rotateX: rotate
        }}
        transition={getTransition()}
        className="absolute rounded-[19px] border-[5px] border-white bg-[#B5DFFF] w-full max-w-5xl mx-auto shadow-lg overflow-hidden"
        style={{ 
          height: "365px",
          transformOrigin: "center top" // Changed to top for stacking from the top
        }}
      >
        <div className="flex flex-col md:flex-row items-center h-full p-4 md:p-8">
          {/* Text content */}
          <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0">
            <h2 className={`${bricolageGrotesque.className} text-xl md:text-2xl font-bold mb-3`}>{card.title}</h2>
            <p className={`${outfit.className} text-gray-700 text-sm md:text-base`}>{card.content}</p>
          </div>
          
          {/* Image side with Next.js Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full h-[220px] overflow-hidden rounded-lg shadow-md">
              <Image 
                src={card.image}
                alt={`Illustration for ${card.title}`}
                fill
                style={{ objectFit: 'contain' }}
                priority={position === 0}
              />
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-white to-[#FFEBE0] py-10 md:py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        {/* Card stack container */}
        <div 
          className="relative h-[450px] md:h-[500px] flex items-center justify-center mx-auto"
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ perspective: "1000px" }}
        >
          {cards.map((card, i) => (
            <Card 
              key={card.id}
              card={card}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackedCards;


// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Inter, Bricolage_Grotesque, Satisfy, Outfit } from 'next/font/google';
// import img1 from '@/assets/codeblock.png';

// // Font definitions
// const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
// const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800'] });
// const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'] });
// const outfit = Outfit({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

// const StackedCards = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [direction, setDirection] = useState(null);
  
//   // Card data - using the image you provided (img1)
//   const cards = [
//     { 
//       id: 1,
//       title: "Integrate SDK", 
//       content: "Add our SDK to your App. Integration is straightforward and typically involves following a few easy steps provided in our documentation. Our team will guide you end to end during the process. Entire steps takes approximate 30 minutes. Extremely secure SDK distributed by the largest distribution partner in the world.",
//       image: img1
//     },
//     { 
//       id: 2,
//       title: "Configure Settings", 
//       content: "Configure your SDK settings according to your specific needs. Our dashboard makes this process intuitive and straightforward. You can set up custom tracking events, user identification, and analytics preferences in minutes.",
//       image: img1
//     },
//     { 
//       id: 3,
//       title: "Access Dashboard", 
//       content: "Get immediate access to our comprehensive analytics dashboard. View detailed metrics, user behavior patterns, and actionable insights. Our dashboards say a lot more than just graphs - they provide the information you need to make data-driven decisions.",
//       image: img1
//     }
//   ];

//   // Section header component
//   const Header = () => (
//     <div className="text-center mb-12">
//       <h3 className={`${satisfy.className} text-[#FD5F03] text-xl md:text-[26px] mb-2`}>How It Works</h3>
//       <h1 className={`${bricolageGrotesque.className} text-3xl md:text-[46px] capitalize mb-2 leading-none`}>Integration Process &lt; 30 Mins</h1>
//       <p className={`${outfit.className} text-center my-2 text-sm md:text-base`}>
//         Install our SDK in less than 30 minutes and use our<br className="hidden md:block" />
//         dashboards that say a lot more than just graphs.
//       </p>
//     </div>
//   );

//   // Improved wheel handler with direction tracking and corrected logic
//   const handleWheel = (e) => {
//     e.preventDefault();
    
//     if (isAnimating) return;
    
//     const scrollThreshold = 15;
//     if (Math.abs(e.deltaY) > scrollThreshold) {
//       setIsAnimating(true);
      
//       if (e.deltaY > 0 && activeIndex > 0) {
//         // Scroll down - previous card (lower index)
//         setDirection('down');
//         setActiveIndex(prev => prev - 1);
//       } else if (e.deltaY < 0 && activeIndex < cards.length - 1) {
//         // Scroll up - next card (higher index)
//         setDirection('up');
//         setActiveIndex(prev => prev + 1);
//       }
      
//       // Reset animation state after transition
//       setTimeout(() => {
//         setIsAnimating(false);
//         setDirection(null);
//       }, 500);
//     }
//   };

//   // Touch event handlers with direction tracking and corrected logic
//   const touchStartRef = useRef(0);
  
//   const handleTouchStart = (e) => {
//     touchStartRef.current = e.touches[0].clientY;
//   };
  
//   const handleTouchEnd = (e) => {
//     if (isAnimating) return;
    
//     const touchEnd = e.changedTouches[0].clientY;
//     const diff = touchStartRef.current - touchEnd;
//     const threshold = 30;
    
//     if (Math.abs(diff) > threshold) {
//       setIsAnimating(true);
      
//       if (diff > 0 && activeIndex < cards.length - 1) {
//         // Swipe up - show card above (higher index)
//         setDirection('up');
//         setActiveIndex(prev => prev + 1);
//       } else if (diff < 0 && activeIndex > 0) {
//         // Swipe down - show card below (lower index)
//         setDirection('down');
//         setActiveIndex(prev => prev - 1);
//       }
      
//       setTimeout(() => {
//         setIsAnimating(false);
//         setDirection(null);
//       }, 500);
//     }
//   };

//   // Individual card component with improved animation
//   const Card = ({ card, index }) => {
//     const position = index - activeIndex;
    
//     // Calculate card appearance for stacking at top with corrected logic
//     let zIndex, opacity, y, scale, rotate;
    
//     if (position === 0) {
//       // Active card
//       zIndex = 30;
//       opacity = 1;
//       y = 0;
//       scale = 1;
//       rotate = 0;
//     } else if (position > 0) {
//       // Cards stacked above the active card (higher index = cards that should be above)
//       zIndex = 30 - position; // Lower z-index as we go up
//       opacity = Math.max(0.9, 1 - position * 0.1);
//       y = position * -25; // Negative y moves cards upward
//       scale = 1 - position * 0.02;
//       rotate = position * -0.5; // Slight rotation for visual interest
//     } else {
//       // Cards that should be below active card (hidden)
//       zIndex = -10;
//       opacity = 0;
//       y = 40;
//       scale = 0.95;
//       rotate = 1;
//     }

//     // Dynamic transition based on direction
//     const getTransition = () => {
//       const baseTransition = {
//         type: 'spring',
//         stiffness: 400,
//         damping: 35
//       };
      
//       if (direction === 'up' && (position === 0 || position === -1)) {
//         // Previous card coming into view or active card leaving
//         return {
//           ...baseTransition,
//           stiffness: 350,
//           damping: 25,
//           velocity: 2
//         };
//       } else if (direction === 'down' && (position === 0 || position === 1)) {
//         // Next card coming into view or active card leaving
//         return {
//           ...baseTransition,
//           stiffness: 350,
//           damping: 25,
//           velocity: 2
//         };
//       }
      
//       return baseTransition;
//     };

//     return (
//       <motion.div
//         initial={false}
//         animate={{ 
//           opacity, 
//           y, 
//           zIndex, 
//           scale,
//           rotateX: rotate
//         }}
//         transition={getTransition()}
//         className="absolute rounded-[19px] border-[5px] border-white bg-[#B5DFFF] w-full max-w-5xl mx-auto shadow-lg overflow-hidden"
//         style={{ 
//           height: "365px",
//           transformOrigin: "center top" // Changed to top for stacking from the top
//         }}
//       >
//         <div className="flex flex-col md:flex-row items-center h-full p-4 md:p-8">
//           {/* Text content */}
//           <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0">
//             <h2 className={`${bricolageGrotesque.className} text-xl md:text-2xl font-bold mb-3`}>{card.title}</h2>
//             <p className={`${outfit.className} text-gray-700 text-sm md:text-base`}>{card.content}</p>
//           </div>
          
//           {/* Image side with Next.js Image */}
//           <div className="w-full md:w-1/2 flex justify-center items-center">
//             <div className="relative w-full h-[220px] overflow-hidden rounded-lg shadow-md">
//               <Image 
//                 src={card.image}
//                 alt={`Illustration for ${card.title}`}
//                 fill
//                 style={{ objectFit: 'contain' }}
//                 priority={position === 0}
//               />
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   // Debug info to verify active index
//   useEffect(() => {
//     console.log('Active index:', activeIndex);
//     console.log('Cards above active:', cards.length - 1 - activeIndex);
//   }, [activeIndex, cards.length]);

//   return (
//     <div className="bg-gradient-to-b from-white to-[#FFEBE0] py-10 md:py-16 px-4 overflow-hidden">
//       <div className="max-w-6xl mx-auto">
//         <Header />
        
//         {/* Card stack container */}
//         <div 
//           className="relative h-[450px] md:h-[500px] flex items-center justify-center mx-auto"
//           onWheel={handleWheel}
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//           style={{ perspective: "1000px" }}
//         >
//           {/* Start with the highest index card to ensure proper stacking in the DOM */}
//           {[...cards].map((card, i) => (
//             <Card 
//               key={card.id}
//               card={card}
//               index={i}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StackedCards;
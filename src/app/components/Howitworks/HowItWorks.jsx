


// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Inter, Bricolage_Grotesque, Satisfy, Outfit } from 'next/font/google';
// import img1 from '@/assets/hw1.png';
// import img2 from '@/assets/hw2.png';
// import img3 from '@/assets/hw3.png';

// import "../../globals.css";

// // Font definitions
// const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
// const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800'] });
// const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'] });
// const outfit = Outfit({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

// const StackedCards = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const containerRef = useRef(null);
  
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
//       image: img2
//     },
//     { 
//       id: 3,
//       title: "Access Dashboard", 
//       content: "Get immediate access to our comprehensive analytics dashboard. View detailed metrics, user behavior patterns, and actionable insights. Our dashboards say a lot more than just graphs - they provide the information you need to make data-driven decisions.",
//       image: img3
//     }
//   ];

//   // Section header component
//   const Header = () => (
//     <div className="text-center mb-6">
//       <h3 className={`${satisfy.className} text-[#FD5F03] text-xl md:text-[26px] mb-2`}>How It Works</h3>
//       <h1 className={`font-sf-pro text-3xl font-medium md:text-[56px] capitalize mb-2 leading-none`}>Integration Process &lt; 30 Mins</h1>
//       <p className={`font-sf-pro text-center my-4 text-[16px] md:text-base`}>
//       Install our SDK, launch campaigns from the dashboard and experience them go live magically in your App in real time.<br className="hidden md:block" />
//       Watch users interact with AppStorys’ elements and improve their in-app journey.
//       </p>
//     </div>
//   );

//   // Handle scroll/wheel events for card navigation
//   const handleWheel = (e) => {
//     e.preventDefault();
    
//     if (isAnimating) return;
    
//     const scrollThreshold = 15;
//     if (Math.abs(e.deltaY) > scrollThreshold) {
//       setIsAnimating(true);
      
//       if (e.deltaY > 0 && activeIndex < cards.length - 1) {
//         // Scroll down - next card
//         setActiveIndex(prev => prev + 1);
//       } else if (e.deltaY < 0 && activeIndex > 0) {
//         // Scroll up - previous card
//         setActiveIndex(prev => prev - 1);
//       }
      
//       // Reset animation state after transition
//       setTimeout(() => {
//         setIsAnimating(false);
//       }, 600);
//     }
//   };

//   // Touch event handlers
//   const touchStartRef = useRef({ x: 0, y: 0 });
  
//   const handleTouchStart = (e) => {
//     touchStartRef.current = { 
//       x: e.touches[0].clientX,
//       y: e.touches[0].clientY 
//     };
//   };
  
//   const handleTouchEnd = (e) => {
//     if (isAnimating) return;
    
//     const touchEndX = e.changedTouches[0].clientX;
//     const touchEndY = e.changedTouches[0].clientY;
//     const diffX = touchStartRef.current.x - touchEndX;
//     const diffY = touchStartRef.current.y - touchEndY;
//     const threshold = 50;
    
//     // Check if horizontal or vertical swipe is stronger
//     if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > threshold) {
//       setIsAnimating(true);
      
//       if (diffY > 0 && activeIndex < cards.length - 1) {
//         // Swipe up - next card
//         setActiveIndex(prev => prev + 1);
//       } else if (diffY < 0 && activeIndex > 0) {
//         // Swipe down - previous card
//         setActiveIndex(prev => prev - 1);
//       }
      
//       setTimeout(() => {
//         setIsAnimating(false);
//       }, 600);
//     }
//   };

//   // Navigation dots component
//   const NavigationDots = () => (
//     <div className="flex justify-center mt-6 space-x-2">
//       {cards.map((_, index) => (
//         <button
//           key={index}
//           className={`w-3 h-3 rounded-full transition-all duration-300 ${
//             index === activeIndex ? 'bg-[#FD5F03] w-8' : 'bg-gray-300'
//           }`}
//           onClick={() => {
//             if (!isAnimating && index !== activeIndex) {
//               setIsAnimating(true);
//               setActiveIndex(index);
//               setTimeout(() => setIsAnimating(false), 600);
//             }
//           }}
//           aria-label={`Go to slide ${index + 1}`}
//         />
//       ))}
//     </div>
//   );

//   // Individual card component
//   const Card = ({ card, index }) => {
//     const isActive = index === activeIndex;
//     const position = index - activeIndex;
    
//     // Base styles for all cards
//     let opacity = 0, scale = 0.85, y = 100, zIndex = 0;
    
//     // Active card
//     if (isActive) {
//       opacity = 1;
//       scale = 1;
//       y = 0;
//       zIndex = 30;
//     }
//     // Previous card (stacked above)
//     else if (position < 0) {
//       // Only show the immediate previous card slightly
//       if (position === -1) {
//         opacity = 0.4;
//         scale = 0.95;
//         y = -80;
//         zIndex = 20;
//       } else {
//         opacity = 0;
//         y = -100;
//         zIndex = 10 + position; // Lower z-index as we go up
//       }
//     }
//     // Next cards (stacked below)
//     else if (position > 0) {
//       // Only show the immediate next card slightly
//       if (position === 1) {
//         opacity = 0.4;
//         scale = 0.95;
//         y = 80;
//         zIndex = 20;
//       } else {
//         opacity = 0;
//         y = 100;
//         zIndex = 10 - position; // Lower z-index as we go down
//       }
//     }

//     return (
//       <motion.div
//         className="absolute w-full max-w-5xl mx-auto rounded-[19px] border-[5px] border-white bg-[#B5DFFF] shadow-xl overflow-hidden"
//         style={{ 
//           height: "365px",
//           zIndex,
//         }}
//         initial={false}
//         animate={{ 
//           opacity, 
//           scale, 
//           y,
//           rotateX: position < 0 ? -3 : position > 0 ? 3 : 0
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 300,
//           damping: 35,
//           mass: 1
//         }}
//       >
//         <div className="flex flex-col md:flex-row items-center h-full p-4 md:p-8">
//           {/* Text content */}
//           <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0">
//             <h2 className={`${bricolageGrotesque.className} text-xl md:text-2xl font-bold mb-3`}>{card.title}</h2>
//             <p className={`${outfit.className} text-gray-700 text-sm md:text-base`}>{card.content}</p>
//           </div>
          
//           {/* Image side */}
//           <div className="w-full md:w-1/2 flex justify-center items-center">
//             <div className="relative w-full h-[320px] overflow-hidden rounded-lg ">
//               <Image 
//                 src={card.image}
//                 alt={`Illustration for ${card.title}`}
//                 fill
//                 style={{ objectFit: 'contain' }}
//                 priority={isActive}
//               />
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   // Navigation arrows
//   const NavigationArrows = () => (
//     <div className="absolute w-full flex justify-between top-1/2 -translate-y-1/2 px-4 pointer-events-none">
//       <button
//         onClick={() => {
//           if (!isAnimating && activeIndex > 0) {
//             setIsAnimating(true);
//             setActiveIndex(prev => prev - 1);
//             setTimeout(() => setIsAnimating(false), 600);
//           }
//         }}
//         className={`h-12 w-12 rounded-full bg-white/80 shadow-md flex items-center justify-center pointer-events-auto transition-opacity ${
//           activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-white cursor-pointer'
//         }`}
//         disabled={activeIndex === 0 || isAnimating}
//         aria-label="Previous card"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <polyline points="15 18 9 12 15 6"></polyline>
//         </svg>
//       </button>
      
//       <button
//         onClick={() => {
//           if (!isAnimating && activeIndex < cards.length - 1) {
//             setIsAnimating(true);
//             setActiveIndex(prev => prev + 1);
//             setTimeout(() => setIsAnimating(false), 600);
//           }
//         }}
//         className={`h-12 w-12 rounded-full bg-white/80 shadow-md flex items-center justify-center pointer-events-auto transition-opacity ${
//           activeIndex === cards.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-white cursor-pointer'
//         }`}
//         disabled={activeIndex === cards.length - 1 || isAnimating}
//         aria-label="Next card"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <polyline points="9 18 15 12 9 6"></polyline>
//         </svg>
//       </button>
//     </div>
//   );

//   return (
//     <div className="bg-[#FFF7F3] py-10 md:py-16 px-4 overflow-hidden">
//       <div className="max-w-6xl mx-auto">
//         <Header />
        
//         {/* Card stack container */}
//         <div 
//           ref={containerRef}
//           className="relative h-[450px] md:h-[500px] flex items-center justify-center mx-auto"
//           onWheel={handleWheel}
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//         >
//           {cards.map((card, index) => (
//             <Card 
//               key={card.id} 
//               card={card}
//               index={index}
//             />
//           ))}
          
//           <NavigationArrows />
//         </div>
        
//         <NavigationDots />
        
//         {/* Progress indicator */}
//         {/* <div className="mt-6 text-center">
//           <p className={`${outfit.className} text-gray-500`}>
//             Step {activeIndex + 1} of {cards.length}
//           </p>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default StackedCards;



import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Inter, Bricolage_Grotesque, Satisfy, Outfit } from 'next/font/google';
import img1 from '@/assets/hw1.png';
import img2 from '@/assets/hw2.png';
import img3 from '@/assets/hw3.png';

import "../../globals.css";

// Font definitions
const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800'] });
const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  
  // Card data
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
      image: img2
    },
    { 
      id: 3,
      title: "Access Dashboard", 
      content: "Get immediate access to our comprehensive analytics dashboard. View detailed metrics, user behavior patterns, and actionable insights. Our dashboards say a lot more than just graphs - they provide the information you need to make data-driven decisions.",
      image: img3
    }
  ];

  // Setup scroll handling for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current || isAnimating) return;
      
      const scrollPosition = window.scrollY;
      const sectionTop = scrollRef.current.offsetTop;
      const sectionHeight = scrollRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Check if section is in view
      if (scrollPosition + viewportHeight > sectionTop && 
          scrollPosition < sectionTop + sectionHeight) {
        
        // Calculate which card should be active based on scroll position
        const scrollProgress = (scrollPosition - (sectionTop - viewportHeight / 2)) / (sectionHeight);
        const normalizedProgress = Math.max(0, Math.min(scrollProgress, 1));
        const targetIndex = Math.min(
          Math.floor(normalizedProgress * cards.length),
          cards.length - 1
        );
        
        if (targetIndex !== activeIndex && !isScrolling) {
          setIsScrolling(true);
          setIsAnimating(true);
          setActiveIndex(targetIndex);
          
          setTimeout(() => {
            setIsAnimating(false);
            setIsScrolling(false);
          }, 600);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex, cards.length, isAnimating, isScrolling]);

  // Handle scroll/wheel events for card navigation when not in automatic scroll mode
  const handleWheel = (e) => {
    if (isAnimating || isScrolling) return;
    
    const scrollThreshold = 15;
    if (Math.abs(e.deltaY) > scrollThreshold) {
      e.preventDefault();
      setIsAnimating(true);
      
      if (e.deltaY > 0 && activeIndex < cards.length - 1) {
        // Scroll down - next card
        setActiveIndex(prev => prev + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        // Scroll up - previous card
        setActiveIndex(prev => prev - 1);
      }
      
      // Reset animation state after transition
      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    }
  };

  // Touch event handlers
  const touchStartRef = useRef({ x: 0, y: 0 });
  
  const handleTouchStart = (e) => {
    touchStartRef.current = { 
      x: e.touches[0].clientX,
      y: e.touches[0].clientY 
    };
  };
  
  const handleTouchEnd = (e) => {
    if (isAnimating || isScrolling) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartRef.current.x - touchEndX;
    const diffY = touchStartRef.current.y - touchEndY;
    const threshold = 50;
    
    // Check if horizontal or vertical swipe is stronger
    if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > threshold) {
      setIsAnimating(true);
      
      if (diffY > 0 && activeIndex < cards.length - 1) {
        // Swipe up - next card
        setActiveIndex(prev => prev + 1);
      } else if (diffY < 0 && activeIndex > 0) {
        // Swipe down - previous card
        setActiveIndex(prev => prev - 1);
      }
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    }
  };

  // Section header component
  const Header = () => (
    <div className="text-center mb-6 px-4">
      <h3 className={`${satisfy.className} text-[#FD5F03] text-xl md:text-[26px] mb-2`}>How It Works</h3>
      <h1 className={`font-sf-pro text-2xl sm:text-3xl font-medium md:text-[40px] lg:text-[56px] capitalize mb-2 leading-tight`}>
        Integration Process &lt; 30 Mins
      </h1>
      <p className={`font-sf-pro text-center my-4 text-sm sm:text-[16px] md:text-base max-w-3xl mx-auto`}>
        Install our SDK, launch campaigns from the dashboard and experience them go live magically in your App in real time.
        Watch users interact with AppStorys' elements and improve their in-app journey.
      </p>
    </div>
  );

  // Navigation dots component
  const NavigationDots = () => (
    <div className="flex justify-center mt-6 space-x-2">
      {cards.map((_, index) => (
        <button
          key={index}
          className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
            index === activeIndex ? 'bg-[#FD5F03] w-6 sm:w-8' : 'bg-gray-300'
          }`}
          onClick={() => {
            if (!isAnimating && !isScrolling && index !== activeIndex) {
              setIsAnimating(true);
              setActiveIndex(index);
              setTimeout(() => setIsAnimating(false), 600);
            }
          }}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );

  // Individual card component with parallax effect
  const Card = ({ card, index }) => {
    const isActive = index === activeIndex;
    const position = index - activeIndex;
    
    // Base styles for all cards
    let opacity = 0, scale = 0.85, y = 100, zIndex = 0, rotateX = 0;
    
    // Active card
    if (isActive) {
      opacity = 1;
      scale = 1;
      y = 0;
      zIndex = 30;
      rotateX = 0;
    }
    // Previous card (stacked above)
    else if (position < 0) {
      // Only show the immediate previous card slightly
      if (position === -1) {
        opacity = 0.5;
        scale = 0.9;
        y = -100;
        zIndex = 20;
        rotateX = 5;
      } else if (position === -2) {
        opacity = 0.2;
        scale = 0.85;
        y = -180;
        zIndex = 15;
        rotateX = 10;
      } else {
        opacity = 0;
        y = -250;
        zIndex = 10 + position;
        rotateX = 15;
      }
    }
    // Next cards (stacked below)
    else if (position > 0) {
      // Only show the immediate next card slightly
      if (position === 1) {
        opacity = 0.5;
        scale = 0.9;
        y = 100;
        zIndex = 20;
        rotateX = -5;
      } else if (position === 2) {
        opacity = 0.2;
        scale = 0.85;
        y = 180;
        zIndex = 15;
        rotateX = -10;
      } else {
        opacity = 0;
        y = 250;
        zIndex = 10 - position;
        rotateX = -15;
      }
    }

    // Calculate image parallax offset based on position
    let imageYOffset = 0;
    if (position === -2) imageYOffset = -30;
    else if (position === -1) imageYOffset = -15;
    else if (position === 0) imageYOffset = 0;
    else if (position === 1) imageYOffset = 15;
    else if (position === 2) imageYOffset = 30;

    return (
      <motion.div
        className="absolute w-full max-w-5xl mx-auto rounded-[19px] border-[3px] sm:border-[5px] border-white bg-[#B5DFFF] shadow-xl overflow-hidden"
        style={{ 
          height: "320px",
          zIndex,
          perspective: 1000,
        }}
        initial={false}
        animate={{ 
          opacity, 
          scale, 
          y,
          rotateX,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8
        }}
      >
        <div className="flex flex-col md:flex-row items-center h-full p-4 md:p-6 lg:p-8">
          {/* Text content */}
          <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0">
            <h2 className={`${bricolageGrotesque.className} text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3`}>
              {card.title}
            </h2>
            <p className={`${outfit.className} text-gray-700 text-xs sm:text-sm md:text-base`}>
              {card.content}
            </p>
          </div>
          
          {/* Image side with parallax effect */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <motion.div 
              className="relative w-full h-[180px] sm:h-[200px] md:h-[250px] lg:h-[280px] overflow-hidden rounded-lg"
              animate={{ y: imageYOffset }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 25
              }}
            >
              <Image 
                src={card.image}
                alt={`Illustration for ${card.title}`}
                fill
                style={{ objectFit: 'contain' }}
                priority={isActive}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Navigation arrows
  const NavigationArrows = () => (
    <div className="absolute w-full flex justify-between top-1/2 -translate-y-1/2 px-4 pointer-events-none z-40">
      <button
        onClick={() => {
          if (!isAnimating && !isScrolling && activeIndex > 0) {
            setIsAnimating(true);
            setActiveIndex(prev => prev - 1);
            setTimeout(() => setIsAnimating(false), 600);
          }
        }}
        className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-white/80 shadow-md flex items-center justify-center pointer-events-auto transition-opacity ${
          activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-white cursor-pointer'
        }`}
        disabled={activeIndex === 0 || isAnimating || isScrolling}
        aria-label="Previous card"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5 md:w-6 md:h-6">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      
      <button
        onClick={() => {
          if (!isAnimating && !isScrolling && activeIndex < cards.length - 1) {
            setIsAnimating(true);
            setActiveIndex(prev => prev + 1);
            setTimeout(() => setIsAnimating(false), 600);
          }
        }}
        className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-white/80 shadow-md flex items-center justify-center pointer-events-auto transition-opacity ${
          activeIndex === cards.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-white cursor-pointer'
        }`}
        disabled={activeIndex === cards.length - 1 || isAnimating || isScrolling}
        aria-label="Next card"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5 md:w-6 md:h-6">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );

  // Progress indicator (optional)
  const ProgressIndicator = () => (
    <div className="mt-4 text-center">
      <p className={`${outfit.className} text-gray-500 text-sm`}>
        Step {activeIndex + 1} of {cards.length}
      </p>
    </div>
  );

  return (
    <div ref={scrollRef} className="bg-[#FFF7F3] py-8 sm:py-10 md:py-16 px-2 sm:px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        {/* Card stack container */}
        <div 
          ref={containerRef}
          className="relative h-[380px] sm:h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center mx-auto"
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {cards.map((card, index) => (
            <Card 
              key={card.id} 
              card={card}
              index={index}
            />
          ))}
          
          <NavigationArrows />
        </div>
        
        <NavigationDots />
        <ProgressIndicator />
      </div>
    </div>
  );
};

export default HowItWorks;

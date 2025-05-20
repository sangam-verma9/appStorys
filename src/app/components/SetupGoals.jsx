// // SetupGoals.jsx
// "use client";
// import React from 'react';
// import Image from 'next/image';
// import goals from "../../assets/goals.png";
// const SetupGoals = () => {
//   return (
//     <div className="w-full py-16 bg-[#FFF7F3]">
//       <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-16">
//         {/* Left Column - Image Container */}
//         <div className="w-full md:w-1/2">
//           <div className="w-full h-[616px] flex-shrink-0 rounded-[21px] border-2 border-[#FF5E00] bg-[#FFE4D5] relative">
//             {/* This is a placeholder for your image */}
//             <div className="w-full h-full relative">
//               <Image 
//                 src={goals} 
//                 alt="Setup Goals & Track Outcomes illustration" 
//                 fill
//                 style={{ objectFit: "contain" }}
//                 priority
//               />
//             </div>
//           </div>
//         </div>
        
//         {/* Right Column - Text */}
//         <div className="w-full md:w-1/2 sf-pro">
//           <h2 className='sm:text-[22px]' style={{
//             color: '#101010',
//             // fontFamily: '"SF Pro Display", sans-serif',
//             fontSize: '56px',
//             fontStyle: 'normal',
//             fontWeight: '500',
//             lineHeight: '102%',
//             textTransform: 'capitalize',
//             marginBottom: '24px'
//           }}>
//             Setup Goals & <br /> Track Outcomes
//           </h2>
//           <p style={{
//             color: '#2F2F2F',
//             fontFeatureSettings: "'liga' off, 'clig' off",
//             // fontFamily: '"SF Pro Display", sans-serif',
//             fontSize: '16px',
//             fontStyle: 'normal',
//             fontWeight: '400',
//             lineHeight: '128%',
//             // textTransform: 'capitalize',
//             maxWidth:'400px'
//           }}>
//             Define specific measurable outcomes for completing a purchase, signing up, or viewing a product. These goals are tied to in-app events (purchase, add-to-cart, view product, click) and KPIs of consideration. This helps you optimize every campaign based on actual outcomes, not just impressions.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SetupGoals;


"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import goals from "../../assets/goals.png";
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const SetupGoals = () => {
  const [animationData, setAnimationData] = useState(null);
  useEffect(() => {
      const loadAnimation = async () => {
        try {
          const animData = await import('../../assets/goalsfiles.json');
          setAnimationData(animData.default || animData);
        } catch (error) {
          try {
            const response = await fetch('/assets/heromain.json');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            console.log('Animation data fetched:', data);
            setAnimationData(data);
          } catch (fetchError) {
            console.error('Both import and fetch failed:', fetchError);
          }
        }
      };
  
      loadAnimation();
    }, []);
  return (
    <div className="w-full py-12 md:py-16 bg-[#FFF7F3]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        {/* Left Column - Image Container */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 order-1 md:order-1">
          <Lottie
            animationData={animationData}
            loop={false}
            autoplay={true}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        
        {/* Right Column - Text */}
        <div className="w-full md:w-1/2 order-2 md:order-2">
          <h2 className="text-[#101010] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] md:leading-[102%] mb-4 md:mb-6 capitalize">
            Setup Goals & <br className="hidden sm:block" /> Track Outcomes
          </h2>
          <p className="text-[#2F2F2F] text-base font-normal leading-[128%] max-w-[400px]">
            Define specific measurable outcomes for completing a purchase, signing up, or viewing a product. These goals are tied to in-app events (purchase, add-to-cart, view product, click) and KPIs of consideration. This helps you optimize every campaign based on actual outcomes, not just impressions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SetupGoals;
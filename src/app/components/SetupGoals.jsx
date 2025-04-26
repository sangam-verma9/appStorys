// SetupGoals.jsx
"use client";
import React from 'react';
import Image from 'next/image';

const SetupGoals = () => {
  return (
    <div className="w-full py-16 bg-[#FFF7F3]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Column - Image Container */}
        <div className="w-full md:w-1/2">
          <div className="w-full h-[616px] flex-shrink-0 rounded-[21px] border-2 border-[#FF5E00] bg-[#FFE4D5] relative">
            {/* This is a placeholder for your image */}
            <div className="w-full h-full relative">
              <Image 
                src="/api/placeholder/731/616" 
                alt="Setup Goals & Track Outcomes illustration" 
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
        
        {/* Right Column - Text */}
        <div className="w-full md:w-1/2 sf-pro">
          <h2 style={{
            color: '#101010',
            // fontFamily: '"SF Pro Display", sans-serif',
            fontSize: '62px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '102%',
            textTransform: 'capitalize',
            marginBottom: '24px'
          }}>
            Setup Goals & <br /> Track Outcomes
          </h2>
          <p style={{
            color: '#2F2F2F',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: '"SF Pro Display", sans-serif',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '128%',
            textTransform: 'capitalize',
            maxWidth:'400px'
          }}>
            Define specific measurable outcomes for completing a purchase, signing up, or viewing a product. These goals are tied to in-app events (purchase, add-to-cart, view product, click) and KPIs of consideration. This helps you optimize every campaign based on actual outcomes, not just impressions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SetupGoals;
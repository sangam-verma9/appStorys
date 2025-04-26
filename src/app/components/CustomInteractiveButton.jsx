// components/CustomInteractiveButton.jsx
"use client";
import React, { useState } from "react";

const CustomInteractiveButton = ({ onClick, children, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      className={`flex items-center bg-[#FD5F03] hover:bg-[#e55602] transition-colors duration-300 text-white rounded-[41.942px] relative group overflow-hidden ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* The expanding dot (only visible on hover) */}
      <div 
        className={`absolute h-2 w-2 rounded-full bg-[#ff5047] transition-all duration-300 ${isHovered ? 'scale-[100]' : 'scale-0'}`}
        style={{ left: '10%', top: '50%', transform: `translate(-50%, -50%) scale(${isHovered ? 100 : 0})` }}
      />
      
      {/* Default state content */}
      <div className={`flex items-center w-full justify-between transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <span className="text-white font-medium text-xl font-sfpro pl-6">
          {children}
        </span>
        <div className="bg-white rounded-full w-[45px] h-[45px] flex-shrink-0 mx-2 flex items-center justify-center">
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
      </div>
      
      {/* Hover state content */}
      <div 
        className={`absolute inset-0 flex items-center justify-center gap-2 text-white transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <span className="font-medium text-xl mr-2">{children}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </div>
    </button>
  );
};

export default CustomInteractiveButton;
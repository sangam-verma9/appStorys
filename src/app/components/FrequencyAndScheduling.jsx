// import React from 'react';
// import { motion } from 'framer-motion';

// const FrequencyScheduling = () => {
//   return (
//     <div className="w-full bg-[#FFF8F5] py-16 flex justify-center">
//       <div className="max-w-[1002px] mx-auto px-4">
//         <h2 className="text-[#101010] text-center font-['SF_Pro_Display'] text-[56px] font-medium leading-[102%] capitalize mb-6">
//           Frequency And Scheduling
//         </h2>
//         <p className="text-[#2F2F2F] text-center font-['SF_Pro_Display'] text-[18px] font-normal leading-[128%] capitalize mb-12 max-w-[1002px] mx-auto">
//           Control how often users see your campaign, show it just once, repeat it daily, weekly, or monthly, or create custom rules like "up to 5 
//           times a day" or "only after 2 days of last view." Set triggers based on views, clicks, interactions, or specific events. You can also 
//           schedule start and end dates, with time zone support to match user locations. For the best experience, limit views to avoid user fatigue
//           — like showing promos a few times a week or resetting after clicks.
//         </p>
        
//         <div className="w-full bg-black rounded-2xl p-12 text-white">
//           <div className="flex justify-between mb-12">
//             <h3 className="text-xl font-medium underline">Without Frequency:</h3>
//             <h3 className="text-xl font-medium underline">With Frequency:</h3>
//           </div>
          
//           <div className="flex items-center justify-between relative">
//             {/* Left side - problems */}
//             <div className="w-1/4 z-10">
//               <div className="bg-[#262626] rounded-lg p-4 mb-6">
//                 <div className="text-center">
//                   <div className="font-medium">High Audience</div>
//                   <div className="font-medium">Fatigue Risk</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#262626] rounded-lg p-4 mb-6">
//                 <div className="text-center">
//                   <div className="font-medium">Visual</div>
//                   <div className="font-medium">Overload</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#262626] rounded-lg p-4 mb-6">
//                 <div className="text-center">
//                   <div className="font-medium">Poor</div>
//                   <div className="font-medium">Outreach</div>
//                   <div className="font-medium">Timing</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#262626] rounded-lg p-4">
//                 <div className="text-center">
//                   <div className="font-medium">Manual</div>
//                   <div className="font-medium">Campaign</div>
//                   <div className="font-medium">Management</div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Middle - scheduling interface */}
//             <div className="w-2/5 mx-4 z-10">
//               <div className="bg-white rounded-lg p-4 text-black">
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="text-sm flex items-center">
//                     <div className="w-3 h-3 rounded-full bg-gray-300 mr-1"></div>
//                     Enable Scheduling
//                   </span>
//                   <div className="bg-blue-100 rounded-full w-10 h-6 flex items-center px-1">
//                     <div className="bg-blue-500 w-4 h-4 rounded-full ml-4"></div>
//                   </div>
//                 </div>
                
//                 <div className="text-xs text-gray-500 mb-4">
//                   Allow campaigns to be scheduled and shown based automatically based on a schedule
//                 </div>
                
//                 {/* Days scheduling */}
//                 <div className="space-y-2">
//                   {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
//                     <div key={day} className="flex items-center justify-between">
//                       <div className="flex items-center">
//                         <div className="bg-green-500 rounded-full w-5 h-5 mr-2"></div>
//                         <span>{day}</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <span className="text-xs">08:00 AM</span>
//                         <span className="text-xs">to</span>
//                         <span className="text-xs">5:00 PM</span>
//                       </div>
//                     </div>
//                   ))}
                  
//                   {['Saturday', 'Sunday'].map((day) => (
//                     <div key={day} className="flex items-center justify-between">
//                       <div className="flex items-center">
//                         <div className="bg-gray-300 rounded-full w-5 h-5 mr-2"></div>
//                         <span>{day}</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <span className="text-xs bg-gray-100 px-2 py-1 rounded">Closed</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
                
//                 <div className="mt-4 border-t pt-4">
//                   <div className="flex justify-between items-center">
//                     <span className="text-xs">Automatically Archive Campaign After Shutdown</span>
//                     <button className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs">Set Up</button>
//                   </div>
                  
//                   <div className="flex justify-between items-center mt-2">
//                     <span className="text-xs">Automatically Archive Campaign After Shutdown</span>
//                     <div className="bg-gray-200 rounded-full w-8 h-5 flex items-center px-0.5">
//                       <div className="bg-white w-4 h-4 rounded-full shadow"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Right side - benefits */}
//             <div className="w-1/4 z-10">
//               <div className="bg-[#6A3DD4] rounded-lg p-4 mb-6">
//                 <div className="text-center">
//                   <div className="font-medium">Consistent</div>
//                   <div className="font-medium">Timing</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#65AA47] rounded-lg p-4 mb-6">
//                 <div className="text-center">
//                   <div className="font-medium">Pre-Plan</div>
//                   <div className="font-medium">Outreach</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#E67635] rounded-lg p-4 mb-6">
//                 <div className="text-center">
//                   <div className="font-medium">Higher</div>
//                   <div className="font-medium">Conversion</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#8E43D2] rounded-lg p-4">
//                 <div className="text-center">
//                   <div className="font-medium">Automated</div>
//                   <div className="font-medium">Workflow</div>
//                 </div>
//               </div>
//             </div>
            
//                           {/* Animated connection lines */}
//             <div className="absolute inset-0 pointer-events-none overflow-visible">
//               {/* Lines from problems to interface */}
//               <svg width="100%" height="100%" className="absolute inset-0">
//                 <path d="M 180,80 C 270,80 310,80 360,80" stroke="#444" strokeWidth="2" fill="none" />
//                 <path d="M 180,180 C 270,180 310,180 360,180" stroke="#444" strokeWidth="2" fill="none" />
//                 <path d="M 180,280 C 270,280 310,280 360,280" stroke="#444" strokeWidth="2" fill="none" />
//                 <path d="M 180,380 C 270,380 310,380 360,380" stroke="#444" strokeWidth="2" fill="none" />
//               </svg>
              
//               {/* Animated colored lines from interface to benefits */}
//               <svg width="100%" height="100%" className="absolute inset-0 overflow-visible">
//                 {/* Purple line - Consistent Timing */}
//                 <motion.svg width="100%" height="100%" className="absolute">
//                   <motion.path 
//                     d="M 500,80 C 590,80 630,80 680,80" 
//                     stroke="#6A3DD4" 
//                     strokeWidth="3" 
//                     fill="none"
//                     initial={{ pathLength: 0 }}
//                     animate={{ 
//                       pathLength: [0, 1],
//                       pathOffset: [0, 1]
//                     }}
//                     transition={{ 
//                       duration: 3,
//                       repeat: Infinity,
//                       repeatType: "loop",
//                       ease: "linear"
//                     }}
//                   />
//                 </motion.svg>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FrequencyScheduling;

// FrequencyScheduling.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const FrequencyScheduling = () => {
//   // Animation settings for all colored lines
//   const animationSettings = {
//     initial: { pathLength: 0, pathOffset: 0 },
//     animate: { 
//       pathLength: 1,
//       pathOffset: [0, 1]
//     },
//     transition: { 
//       duration: 2.5,
//       repeat: Infinity,
//       repeatType: "loop",
//       ease: "linear"
//     }
//   };

//   return (
//     <div className="w-full bg-[#FFF8F5] py-16 flex justify-center">
//       <div className="max-w-[1002px] mx-auto px-4">
//         <h2 className="text-[#101010] text-center font-['SF_Pro_Display'] text-[56px] font-medium leading-[102%] capitalize mb-6">
//           Frequency And Scheduling
//         </h2>
//         <p className="text-[#2F2F2F] text-center font-['SF_Pro_Display'] text-[18px] font-normal leading-[128%] capitalize mb-12 max-w-[1002px] mx-auto">
//           Control how often users see your campaign, show it just once, repeat it daily, weekly, or monthly, or create custom rules like "up to 5 
//           times a day" or "only after 2 days of last view." Set triggers based on views, clicks, interactions, or specific events. You can also 
//           schedule start and end dates, with time zone support to match user locations. For the best experience, limit views to avoid user fatigue
//           — like showing promos a few times a week or resetting after clicks.
//         </p>
        
//         <div className="w-full bg-black rounded-2xl p-12 text-white relative">
//           <div className="flex justify-between mb-8">
//             <h3 className="text-xl font-medium underline">Without Frequency:</h3>
//             <h3 className="text-xl font-medium underline">With Frequency:</h3>
//           </div>
          
//           <div className="flex items-center justify-between relative min-h-[400px]">
//             {/* Left side - problems */}
//             <div className="w-1/4 flex flex-col space-y-6 z-10">
//               <div className="bg-[#262626] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">High Audience</div>
//                   <div className="font-medium">Fatigue Risk</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#262626] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Visual</div>
//                   <div className="font-medium">Overload</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#262626] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Poor</div>
//                   <div className="font-medium">Outreach</div>
//                   <div className="font-medium">Timing</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#262626] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Manual</div>
//                   <div className="font-medium">Campaign</div>
//                   <div className="font-medium">Management</div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Middle - scheduling interface image */}
//             <div className="flex-1 flex justify-center z-10 px-2">
//               {/* This will be replaced with the actual image */}
//               <div className="w-[340px] h-[340px] bg-[#2b2b2b] rounded-lg overflow-hidden relative">
//                 {/* Once you have the image, replace this div with:
//                 <Image 
//                   src="/path-to-your-scheduling-interface-image.png"
//                   alt="Scheduling interface"
//                   width={340}
//                   height={340}
//                   className="rounded-lg"
//                 /> */}
                
//                 {/* Placeholder UI - This will be removed once you have the actual image */}
//                 <div className="w-full h-full bg-white rounded-lg text-black p-4">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-sm flex items-center">
//                       <div className="w-3 h-3 rounded-full bg-gray-300 mr-1"></div>
//                       Enable Scheduling
//                     </span>
//                     <div className="bg-blue-100 rounded-full w-10 h-6 flex items-center px-1">
//                       <div className="bg-blue-500 w-4 h-4 rounded-full ml-4"></div>
//                     </div>
//                   </div>
                  
//                   <div className="text-xs text-gray-500 mb-4">
//                     Allow campaigns to be scheduled and shown based automatically based on a schedule
//                   </div>
                  
//                   {/* Days scheduling */}
//                   <div className="space-y-2 text-sm">
//                     {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
//                       <div key={day} className="flex items-center justify-between">
//                         <div className="flex items-center">
//                           <div className="bg-green-500 rounded-full w-4 h-4 mr-2"></div>
//                           <span>{day}</span>
//                         </div>
//                         <div className="flex items-center space-x-1">
//                           <div className="bg-gray-50 px-2 py-0.5 text-xs rounded border border-gray-200">
//                             09:00 AM
//                           </div>
//                           <span className="text-xs">to</span>
//                           <div className="bg-gray-50 px-2 py-0.5 text-xs rounded border border-gray-200">
//                             5:00 PM
//                           </div>
//                         </div>
//                       </div>
//                     ))}
                    
//                     {['Saturday', 'Sunday'].map((day) => (
//                       <div key={day} className="flex items-center justify-between">
//                         <div className="flex items-center">
//                           <div className="bg-gray-300 rounded-full w-4 h-4 mr-2"></div>
//                           <span>{day}</span>
//                         </div>
//                         <div className="flex items-center">
//                           <span className="text-xs bg-gray-100 px-3 py-1 rounded">Closed</span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
                  
//                   <div className="mt-4 border-t pt-3">
//                     <div className="flex justify-between items-center text-xs">
//                       <span>Automatically Archive Campaign After Shutdown</span>
//                       <button className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-xs">Set Up</button>
//                     </div>
                    
//                     <div className="flex justify-between items-center mt-2 text-xs">
//                       <span>Automatically Archive Campaign After Shutdown</span>
//                       <div className="bg-gray-200 rounded-full w-8 h-5 flex items-center px-0.5">
//                         <div className="bg-white w-4 h-4 rounded-full shadow"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Right side - benefits */}
//             <div className="w-1/4 flex flex-col items-end space-y-6 z-10">
//               <div className="bg-[#6A3DD4] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Consistent</div>
//                   <div className="font-medium">Timing</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#65AA47] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Pre-Plan</div>
//                   <div className="font-medium">Outreach</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#E67635] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Higher</div>
//                   <div className="font-medium">Conversion</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#8E43D2] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Automated</div>
//                   <div className="font-medium">Workflow</div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Animated connection lines */}
//             <div className="absolute inset-0 pointer-events-none overflow-visible">
//               {/* Left side connection lines (static) */}
//               <svg width="100%" height="100%" className="absolute inset-0">
//                 {/* Line 1 - High Audience Fatigue Risk */}
//                 <path 
//                   d="M 180,60 C 220,60 260,80 360,120" 
//                   stroke="#444" 
//                   strokeWidth="2" 
//                   fill="none" 
//                 />
                
//                 {/* Line 2 - Visual Overload */}
//                 <path 
//                   d="M 180,142 C 220,142 270,150 360,170" 
//                   stroke="#444" 
//                   strokeWidth="2" 
//                   fill="none" 
//                 />
                
//                 {/* Line 3 - Poor Outreach Timing */}
//                 <path 
//                   d="M 180,226 C 230,226 270,210 360,210" 
//                   stroke="#444" 
//                   strokeWidth="2" 
//                   fill="none" 
//                 />
                
//                 {/* Line 4 - Manual Campaign Management */}
//                 <path 
//                   d="M 180,310 C 230,310 270,270 360,250" 
//                   stroke="#444" 
//                   strokeWidth="2" 
//                   fill="none" 
//                 />
//               </svg>
              
//               {/* Animated colored strings from center to right */}
//               <div className="absolute inset-0">
//                 {/* All animated paths in a single SVG for better sync */}
//                 <motion.svg width="100%" height="100%" className="absolute inset-0">
//                   {/* Purple line - Consistent Timing */}
//                   <motion.path 
//                     d="M 500,120 C 570,80 615,60 680,60" 
//                     stroke="#6A3DD4" 
//                     strokeWidth="3" 
//                     fill="none"
//                     initial={{ pathLength: 0, pathOffset: 0 }}
//                     animate={{ 
//                       pathLength: 1,
//                       pathOffset: [0, 1]
//                     }}
//                     transition={{ 
//                       duration: 3,
//                       repeat: Infinity,
//                       repeatType: "loop",
//                       ease: "linear"
//                     }}
//                   />
                  
//                   {/* Green line - Pre-Plan Outreach */}
//                   <motion.path 
//                     d="M 500,170 C 570,155 615,142 680,142" 
//                     stroke="#65AA47" 
//                     strokeWidth="3" 
//                     fill="none"
//                     initial={{ pathLength: 0, pathOffset: 0 }}
//                     animate={{ 
//                       pathLength: 1,
//                       pathOffset: [0, 1]
//                     }}
//                     transition={{ 
//                       duration: 3,
//                       repeat: Infinity,
//                       repeatType: "loop",
//                       ease: "linear"
//                     }}
//                   />
                  
//                   {/* Orange line - Higher Conversion */}
//                   <motion.path 
//                     d="M 500,210 C 570,215 615,226 680,226" 
//                     stroke="#E67635" 
//                     strokeWidth="3" 
//                     fill="none"
//                     initial={{ pathLength: 0, pathOffset: 0 }}
//                     animate={{ 
//                       pathLength: 1,
//                       pathOffset: [0, 1]
//                     }}
//                     transition={{ 
//                       duration: 3,
//                       repeat: Infinity,
//                       repeatType: "loop",
//                       ease: "linear"
//                     }}
//                   />
                  
//                   {/* Purple line - Automated Workflow */}
//                   <motion.path 
//                     d="M 500,250 C 570,275 615,310 680,310" 
//                     stroke="#8E43D2" 
//                     strokeWidth="3" 
//                     fill="none"
//                     initial={{ pathLength: 0, pathOffset: 0 }}
//                     animate={{ 
//                       pathLength: 1,
//                       pathOffset: [0, 1]
//                     }}
//                     transition={{ 
//                       duration: 3,
//                       repeat: Infinity,
//                       repeatType: "loop",
//                       ease: "linear"
//                     }}
//                   />
//                 </motion.svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FrequencyScheduling;


// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const FrequencyScheduling = () => {
//   return (
//     <div className="w-full bg-[#FFF8F5] py-16 flex justify-center">
//       <div className="max-w-[1002px] mx-auto px-4">
//         <h2 className="text-[#101010] text-center font-['SF_Pro_Display'] text-[56px] font-medium leading-[102%] capitalize mb-6">
//           Frequency And Scheduling
//         </h2>
//         <p className="text-[#2F2F2F] text-center font-['SF_Pro_Display'] text-[18px] font-normal leading-[128%] capitalize mb-12 max-w-[1002px] mx-auto">
//           Control how often users see your campaign, show it just once, repeat it daily, weekly, or monthly, or create custom rules like "up to 5 
//           times a day" or "only after 2 days of last view." Set triggers based on views, clicks, interactions, or specific events. You can also 
//           schedule start and end dates, with time zone support to match user locations. For the best experience, limit views to avoid user fatigue
//           — like showing promos a few times a week or resetting after clicks.
//         </p>
        
//         <div className="w-full bg-black rounded-2xl p-12 text-white relative">
//           <div className="flex justify-between mb-8">
//             <h3 className="text-xl font-medium underline">Without Frequency:</h3>
//             <h3 className="text-xl font-medium underline">With Frequency:</h3>
//           </div>
          
//           <div className="flex items-center justify-between relative min-h-[400px]">
//             {/* Left side - problems */}
//             <div className="w-1/4 flex flex-col space-y-6 z-10">
//               <div className="bg-[#262626] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">High Audience</div>
//                   <div className="font-medium">Fatigue Risk</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#262626] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Visual</div>
//                   <div className="font-medium">Overload</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#262626] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Poor</div>
//                   <div className="font-medium">Outreach</div>
//                   <div className="font-medium">Timing</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#262626] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Manual</div>
//                   <div className="font-medium">Campaign</div>
//                   <div className="font-medium">Management</div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Middle - scheduling interface image */}
//             <div className="flex-1 flex justify-center z-10 px-2">
//               {/* This will be replaced with the actual image */}
//               <div className="w-[340px] h-[340px] bg-[#2b2b2b] rounded-lg overflow-hidden relative">
//                 {/* Once you have the image, replace this div with:
//                 <Image 
//                   src="/path-to-your-scheduling-interface-image.png"
//                   alt="Scheduling interface"
//                   width={340}
//                   height={340}
//                   className="rounded-lg"
//                 /> */}
                
//                 {/* Placeholder UI - This will be removed once you have the actual image */}
//                 <div className="w-full h-full bg-white rounded-lg text-black p-4">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-sm flex items-center">
//                       <div className="w-3 h-3 rounded-full bg-gray-300 mr-1"></div>
//                       Enable Scheduling
//                     </span>
//                     <div className="bg-blue-100 rounded-full w-10 h-6 flex items-center px-1">
//                       <div className="bg-blue-500 w-4 h-4 rounded-full ml-4"></div>
//                     </div>
//                   </div>
                  
//                   <div className="text-xs text-gray-500 mb-4">
//                     Allow campaigns to be scheduled and shown based automatically based on a schedule
//                   </div>
                  
//                   {/* Days scheduling */}
//                   <div className="space-y-2 text-sm">
//                     {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
//                       <div key={day} className="flex items-center justify-between">
//                         <div className="flex items-center">
//                           <div className="bg-green-500 rounded-full w-4 h-4 mr-2"></div>
//                           <span>{day}</span>
//                         </div>
//                         <div className="flex items-center space-x-1">
//                           <div className="bg-gray-50 px-2 py-0.5 text-xs rounded border border-gray-200">
//                             09:00 AM
//                           </div>
//                           <span className="text-xs">to</span>
//                           <div className="bg-gray-50 px-2 py-0.5 text-xs rounded border border-gray-200">
//                             5:00 PM
//                           </div>
//                         </div>
//                       </div>
//                     ))}
                    
//                     {['Saturday', 'Sunday'].map((day) => (
//                       <div key={day} className="flex items-center justify-between">
//                         <div className="flex items-center">
//                           <div className="bg-gray-300 rounded-full w-4 h-4 mr-2"></div>
//                           <span>{day}</span>
//                         </div>
//                         <div className="flex items-center">
//                           <span className="text-xs bg-gray-100 px-3 py-1 rounded">Closed</span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
                  
//                   <div className="mt-4 border-t pt-3">
//                     <div className="flex justify-between items-center text-xs">
//                       <span>Automatically Archive Campaign After Shutdown</span>
//                       <button className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-xs">Set Up</button>
//                     </div>
                    
//                     <div className="flex justify-between items-center mt-2 text-xs">
//                       <span>Automatically Archive Campaign After Shutdown</span>
//                       <div className="bg-gray-200 rounded-full w-8 h-5 flex items-center px-0.5">
//                         <div className="bg-white w-4 h-4 rounded-full shadow"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Right side - benefits */}
//             <div className="w-1/4 flex flex-col items-end space-y-6 z-10">
//               <div className="bg-[#6A3DD4] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Consistent</div>
//                   <div className="font-medium">Timing</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#65AA47] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Pre-Plan</div>
//                   <div className="font-medium">Outreach</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#E67635] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Higher</div>
//                   <div className="font-medium">Conversion</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#8E43D2] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Automated</div>
//                   <div className="font-medium">Workflow</div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Animated connection lines */}
//             <div className="absolute inset-0 pointer-events-none overflow-visible">
//               {/* Left side connection lines (static) */}
//               <svg width="100%" height="100%" className="absolute inset-0">
//                 {/* Line 1 - High Audience Fatigue Risk */}
//                 <path 
//                   d="M 180,60 C 220,60 260,80 360,120" 
//                   stroke="#444" 
//                   strokeWidth="2" 
//                   fill="none" 
//                 />
                
//                 {/* Line 2 - Visual Overload */}
//                 <path 
//                   d="M 180,142 C 220,142 270,150 360,170" 
//                   stroke="#444" 
//                   strokeWidth="2" 
//                   fill="none" 
//                 />
                
//                 {/* Line 3 - Poor Outreach Timing */}
//                 <path 
//                   d="M 180,226 C 230,226 270,210 360,210" 
//                   stroke="#444" 
//                   strokeWidth="2" 
//                   fill="none" 
//                 />
                
//                 {/* Line 4 - Manual Campaign Management */}
//                 <path 
//                   d="M 180,310 C 230,310 270,270 360,250" 
//                   stroke="#444" 
//                   strokeWidth="2" 
//                   fill="none" 
//                 />
//               </svg>
              
//               {/* Animated colored strings from center to right */}
//               <div className="absolute inset-0">
//                 {/* All animated paths in a single SVG for better sync */}
//                 <motion.svg width="100%" height="100%" className="absolute inset-0">
//                   {/* Purple line - Consistent Timing */}
//                   <motion.path 
//                     d="M 500,120 C 550,35 600,0 680,60" 
//                     stroke="#6A3DD4" 
//                     strokeWidth="4" 
//                     fill="none"
//                     initial={{ pathLength: 0, pathOffset: 0 }}
//                     animate={{ 
//                       pathLength: 1,
//                       pathOffset: [0, 1]
//                     }}
//                     transition={{ 
//                       duration: 3,
//                       repeat: Infinity,
//                       repeatType: "loop",
//                       ease: "linear"
//                     }}
//                   />
                  
//                   {/* Green line - Pre-Plan Outreach */}
//                   <motion.path 
//                     d="M 500,170 C 560,120 610,105 680,142" 
//                     stroke="#65AA47" 
//                     strokeWidth="4" 
//                     fill="none"
//                     initial={{ pathLength: 0, pathOffset: 0 }}
//                     animate={{ 
//                       pathLength: 1,
//                       pathOffset: [0, 1]
//                     }}
//                     transition={{ 
//                       duration: 3,
//                       repeat: Infinity,
//                       repeatType: "loop",
//                       ease: "linear"
//                     }}
//                   />
                  
//                   {/* Orange line - Higher Conversion */}
//                   <motion.path 
//                     d="M 500,210 C 560,240 610,250 680,226" 
//                     stroke="#E67635" 
//                     strokeWidth="4" 
//                     fill="none"
//                     initial={{ pathLength: 0, pathOffset: 0 }}
//                     animate={{ 
//                       pathLength: 1,
//                       pathOffset: [0, 1]
//                     }}
//                     transition={{ 
//                       duration: 3,
//                       repeat: Infinity,
//                       repeatType: "loop",
//                       ease: "linear"
//                     }}
//                   />
                  
//                   {/* Purple line - Automated Workflow */}
//                   <motion.path 
//                     d="M 500,250 C 550,330 600,370 680,310" 
//                     stroke="#8E43D2" 
//                     strokeWidth="4" 
//                     fill="none"
//                     initial={{ pathLength: 0, pathOffset: 0 }}
//                     animate={{ 
//                       pathLength: 1,
//                       pathOffset: [0, 1]
//                     }}
//                     transition={{ 
//                       duration: 3,
//                       repeat: Infinity,
//                       repeatType: "loop",
//                       ease: "linear"
//                     }}
//                   />
//                 </motion.svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FrequencyScheduling;

// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const FrequencyScheduling = () => {
//   return (
//     <div className="w-full bg-[#FFF8F5] py-16 flex justify-center">
//       <div className="max-w-[1002px] mx-auto px-4">
//         <h2 className="text-[#101010] text-center font-['SF_Pro_Display'] text-[56px] font-medium leading-[102%] capitalize mb-6">
//           Frequency And Scheduling
//         </h2>
//         <p className="text-[#2F2F2F] text-center font-['SF_Pro_Display'] text-[18px] font-normal leading-[128%] capitalize mb-12 max-w-[1002px] mx-auto">
//           Control how often users see your campaign, show it just once, repeat it daily, weekly, or monthly, or create custom rules like "up to 5 
//           times a day" or "only after 2 days of last view." Set triggers based on views, clicks, interactions, or specific events. You can also 
//           schedule start and end dates, with time zone support to match user locations. For the best experience, limit views to avoid user fatigue
//           — like showing promos a few times a week or resetting after clicks.
//         </p>
        
//         <div className="w-full bg-black rounded-2xl p-12 text-white relative">
//           <div className="flex justify-between mb-8">
//             <h3 className="text-xl font-medium underline">Without Frequency:</h3>
//             <h3 className="text-xl font-medium underline">With Frequency:</h3>
//           </div>
          
//           <div className="flex items-center justify-between relative min-h-[400px]">
//             {/* Left side - problems */}
//             <div className="w-1/4 flex flex-col space-y-6 z-10">
//               <div className="bg-[#262626] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">High Audience</div>
//                   <div className="font-medium">Fatigue Risk</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#262626] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Visual</div>
//                   <div className="font-medium">Overload</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#262626] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Poor</div>
//                   <div className="font-medium">Outreach</div>
//                   <div className="font-medium">Timing</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#262626] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Manual</div>
//                   <div className="font-medium">Campaign</div>
//                   <div className="font-medium">Management</div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Middle - scheduling interface image */}
//             <div className="flex-1 flex justify-center z-10 px-2">
//               {/* This will be replaced with the actual image */}
//               <div className="w-[340px] h-[340px] bg-[#2b2b2b] rounded-lg overflow-hidden relative">
//                 {/* Once you have the image, replace this div with:
//                 <Image 
//                   src="/path-to-your-scheduling-interface-image.png"
//                   alt="Scheduling interface"
//                   width={340}
//                   height={340}
//                   className="rounded-lg"
//                 /> */}
                
//                 {/* Placeholder UI - This will be removed once you have the actual image */}
//                 <div className="w-full h-full bg-white rounded-lg text-black p-4">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-sm flex items-center">
//                       <div className="w-3 h-3 rounded-full bg-gray-300 mr-1"></div>
//                       Enable Scheduling
//                     </span>
//                     <div className="bg-blue-100 rounded-full w-10 h-6 flex items-center px-1">
//                       <div className="bg-blue-500 w-4 h-4 rounded-full ml-4"></div>
//                     </div>
//                   </div>
                  
//                   <div className="text-xs text-gray-500 mb-4">
//                     Allow campaigns to be scheduled and shown based automatically based on a schedule
//                   </div>
                  
//                   {/* Days scheduling */}
//                   <div className="space-y-2 text-sm">
//                     {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
//                       <div key={day} className="flex items-center justify-between">
//                         <div className="flex items-center">
//                           <div className="bg-green-500 rounded-full w-4 h-4 mr-2"></div>
//                           <span>{day}</span>
//                         </div>
//                         <div className="flex items-center space-x-1">
//                           <div className="bg-gray-50 px-2 py-0.5 text-xs rounded border border-gray-200">
//                             09:00 AM
//                           </div>
//                           <span className="text-xs">to</span>
//                           <div className="bg-gray-50 px-2 py-0.5 text-xs rounded border border-gray-200">
//                             5:00 PM
//                           </div>
//                         </div>
//                       </div>
//                     ))}
                    
//                     {['Saturday', 'Sunday'].map((day) => (
//                       <div key={day} className="flex items-center justify-between">
//                         <div className="flex items-center">
//                           <div className="bg-gray-300 rounded-full w-4 h-4 mr-2"></div>
//                           <span>{day}</span>
//                         </div>
//                         <div className="flex items-center">
//                           <span className="text-xs bg-gray-100 px-3 py-1 rounded">Closed</span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
                  
//                   <div className="mt-4 border-t pt-3">
//                     <div className="flex justify-between items-center text-xs">
//                       <span>Automatically Archive Campaign After Shutdown</span>
//                       <button className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-xs">Set Up</button>
//                     </div>
                    
//                     <div className="flex justify-between items-center mt-2 text-xs">
//                       <span>Automatically Archive Campaign After Shutdown</span>
//                       <div className="bg-gray-200 rounded-full w-8 h-5 flex items-center px-0.5">
//                         <div className="bg-white w-4 h-4 rounded-full shadow"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Right side - benefits */}
//             <div className="w-1/4 flex flex-col items-end space-y-6 z-10">
//               <div className="bg-[#6A3DD4] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Consistent</div>
//                   <div className="font-medium">Timing</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#65AA47] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Pre-Plan</div>
//                   <div className="font-medium">Outreach</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#E67635] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Higher</div>
//                   <div className="font-medium">Conversion</div>
//                 </div>
//               </div>
              
//               <div className="bg-[#8E43D2] rounded-lg p-3 w-[180px]">
//                 <div className="text-center">
//                   <div className="font-medium">Automated</div>
//                   <div className="font-medium">Workflow</div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Animated connection lines */}
//             <div className="absolute inset-0 pointer-events-none overflow-visible">
//               {/* Left side connection lines (animated) */}
//               <motion.svg width="100%" height="100%" className="absolute inset-0">
//                 {/* Line 1 - High Audience Fatigue Risk */}
//                 <motion.path 
//                   d="M 180,60 C 220,60 260,80 360,120" 
//                   stroke="#444" 
//                   strokeWidth="4" 
//                   fill="none"
//                   initial={{ pathLength: 0, pathOffset: 0 }}
//                   animate={{ 
//                     pathLength: 1,
//                     pathOffset: [0, 1]
//                   }}
//                   transition={{ 
//                     duration: 3,
//                     repeat: Infinity,
//                     repeatType: "loop",
//                     ease: "linear"
//                   }}
//                 />
                
//                 {/* Line 2 - Visual Overload */}
//                 <motion.path 
//                   d="M 180,142 C 220,142 270,150 360,170" 
//                   stroke="#444" 
//                   strokeWidth="4" 
//                   fill="none"
//                   initial={{ pathLength: 0, pathOffset: 0 }}
//                   animate={{ 
//                     pathLength: 1,
//                     pathOffset: [0, 1]
//                   }}
//                   transition={{ 
//                     duration: 3,
//                     repeat: Infinity,
//                     repeatType: "loop",
//                     ease: "linear"
//                   }}
//                 />
                
//                 {/* Line 3 - Poor Outreach Timing */}
//                 <motion.path 
//                   d="M 180,226 C 230,226 270,210 360,210" 
//                   stroke="#444" 
//                   strokeWidth="4" 
//                   fill="none"
//                   initial={{ pathLength: 0, pathOffset: 0 }}
//                   animate={{ 
//                     pathLength: 1,
//                     pathOffset: [0, 1]
//                   }}
//                   transition={{ 
//                     duration: 3,
//                     repeat: Infinity,
//                     repeatType: "loop",
//                     ease: "linear"
//                   }}
//                 />
                
//                 {/* Line 4 - Manual Campaign Management */}
//                 <motion.path 
//                   d="M 180,310 C 230,310 270,270 360,250" 
//                   stroke="#444" 
//                   strokeWidth="4" 
//                   fill="none"
//                   initial={{ pathLength: 0, pathOffset: 0 }}
//                   animate={{ 
//                     pathLength: 1,
//                     pathOffset: [0, 1]
//                   }}
//                   transition={{ 
//                     duration: 3,
//                     repeat: Infinity,
//                     repeatType: "loop",
//                     ease: "linear"
//                   }}
//                 />
//               </motion.svg>
              
//               {/* Animated colored strings from center to right */}
//               <div className="absolute inset-0">
//                 {/* All animated paths in a single SVG for better sync */}
//                 <motion.svg width="100%" height="100%" className="absolute inset-0">
//                   {/* Purple line - Consistent Timing */}
//                   <motion.path 
//                     d="M 500,120 C 550,35 600,0 680,60" 
//                     stroke="#6A3DD4" 
//                     strokeWidth="4" 
//                     fill="none"
//                     initial={{ pathLength: 0, pathOffset: 0 }}
//                     animate={{ 
//                       pathLength: 1,
//                       pathOffset: [0, 1]
//                     }}
//                     transition={{ 
//                       duration: 3,
//                       repeat: Infinity,
//                       repeatType: "loop",
//                       ease: "linear"
//                     }}
//                   />
                  
//                   {/* Green line - Pre-Plan Outreach */}
//                   <motion.path 
//                     d="M 500,170 C 560,120 610,105 680,142" 
//                     stroke="#65AA47" 
//                     strokeWidth="4" 
//                     fill="none"
//                     initial={{ pathLength: 0, pathOffset: 0 }}
//                     animate={{ 
//                       pathLength: 1,
//                       pathOffset: [0, 1]
//                     }}
//                     transition={{ 
//                       duration: 3,
//                       repeat: Infinity,
//                       repeatType: "loop",
//                       ease: "linear"
//                     }}
//                   />
                  
//                   {/* Orange line - Higher Conversion */}
//                   <motion.path 
//                     d="M 500,210 C 560,240 610,250 680,226" 
//                     stroke="#E67635" 
//                     strokeWidth="4" 
//                     fill="none"
//                     initial={{ pathLength: 0, pathOffset: 0 }}
//                     animate={{ 
//                       pathLength: 1,
//                       pathOffset: [0, 1]
//                     }}
//                     transition={{ 
//                       duration: 3,
//                       repeat: Infinity,
//                       repeatType: "loop",
//                       ease: "linear"
//                     }}
//                   />
                  
//                   {/* Purple line - Automated Workflow */}
//                   <motion.path 
//                     d="M 500,250 C 550,330 600,370 680,310" 
//                     stroke="#8E43D2" 
//                     strokeWidth="4" 
//                     fill="none"
//                     initial={{ pathLength: 0, pathOffset: 0 }}
//                     animate={{ 
//                       pathLength: 1,
//                       pathOffset: [0, 1]
//                     }}
//                     transition={{ 
//                       duration: 3,
//                       repeat: Infinity,
//                       repeatType: "loop",
//                       ease: "linear"
//                     }}
//                   />
//                 </motion.svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FrequencyScheduling;

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import '../globals.css'


const FrequencyScheduling = () => {
  return (
    <div className="w-full sf-pro bg-[#FFF8F5] py-16 flex justify-center">
      <div className="max-w-[1002px] mx-auto px-4">
        <h2 className="text-[#101010] text-center sf-pro  text-[56px] font-medium leading-[102%] mb-6">
          Frequency & Scheduling
        </h2>
        <p className="text-[#2F2F2F] text-center sf-pro  text-[16px] font-normal leading-[128%]  mb-12 max-w-[1002px] mx-auto">
          Control how often users see your campaign, show it just once, repeat it daily, weekly, or monthly, or create custom rules like "up to 5 
          times a day" or "only after 2 days of last view." Set triggers based on views, clicks, interactions, or specific events. You can also 
          schedule start and end dates, with time zone support to match user locations. For the best experience, limit views to avoid user fatigue
          — like showing promos a few times a week or resetting after clicks.
        </p>
        
        <div className="w-full bg-black rounded-2xl p-12 text-white relative">
          <div className="flex justify-between mb-8">
            <h3 className="text-xl font-medium underline">Without Frequency:</h3>
            <h3 className="text-xl font-medium underline">With Frequency:</h3>
          </div>
          
          <div className="flex items-center justify-between relative min-h-[400px]">
            {/* Left side - problems */}
            <div className="w-1/4 flex flex-col space-y-6 z-10">
              <div className="bg-[#262626] rounded-lg p-3 w-[180px]">
                <div className="text-center">
                  <div className="font-medium">High Audience</div>
                  <div className="font-medium">Fatigue Risk</div>
                </div>
              </div>
              
              <div className="bg-[#262626] rounded-lg p-3 w-[180px]">
                <div className="text-center">
                  <div className="font-medium">Visual</div>
                  <div className="font-medium">Overload</div>
                </div>
              </div>
              
              <div className="bg-[#262626] rounded-lg p-3 w-[180px]">
                <div className="text-center">
                  <div className="font-medium">Poor</div>
                  <div className="font-medium">Outreach</div>
                  <div className="font-medium">Timing</div>
                </div>
              </div>
              
              <div className="bg-[#262626] rounded-lg p-3 w-[180px]">
                <div className="text-center">
                  <div className="font-medium">Manual</div>
                  <div className="font-medium">Campaign</div>
                  <div className="font-medium">Management</div>
                </div>
              </div>
            </div>
            
            {/* Middle - scheduling interface image */}
            <div className="flex-1 flex justify-center z-10 px-2">
              {/* This will be replaced with the actual image */}
              <div className="w-[340px] h-[340px] bg-[#2b2b2b] rounded-lg overflow-hidden relative">
                {/* Once you have the image, replace this div with:
                <Image 
                  src="/path-to-your-scheduling-interface-image.png"
                  alt="Scheduling interface"
                  width={340}
                  height={340}
                  className="rounded-lg"
                /> */}
                
                {/* Placeholder UI - This will be removed once you have the actual image */}
                <div className="w-full h-full bg-white rounded-lg text-black p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm flex items-center">
                      <div className="w-3 h-3 rounded-full bg-gray-300 mr-1"></div>
                      Enable Scheduling
                    </span>
                    <div className="bg-blue-100 rounded-full w-10 h-6 flex items-center px-1">
                      <div className="bg-blue-500 w-4 h-4 rounded-full ml-4"></div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500 mb-4">
                    Allow campaigns to be scheduled and shown based automatically based on a schedule
                  </div>
                  
                  {/* Days scheduling */}
                  <div className="space-y-2 text-sm">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                      <div key={day} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-green-500 rounded-full w-4 h-4 mr-2"></div>
                          <span>{day}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="bg-gray-50 px-2 py-0.5 text-xs rounded border border-gray-200">
                            09:00 AM
                          </div>
                          <span className="text-xs">to</span>
                          <div className="bg-gray-50 px-2 py-0.5 text-xs rounded border border-gray-200">
                            5:00 PM
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {['Saturday', 'Sunday'].map((day) => (
                      <div key={day} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-gray-300 rounded-full w-4 h-4 mr-2"></div>
                          <span>{day}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs bg-gray-100 px-3 py-1 rounded">Closed</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 border-t pt-3">
                    <div className="flex justify-between items-center text-xs">
                      <span>Automatically Archive Campaign After Shutdown</span>
                      <button className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-xs">Set Up</button>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2 text-xs">
                      <span>Automatically Archive Campaign After Shutdown</span>
                      <div className="bg-gray-200 rounded-full w-8 h-5 flex items-center px-0.5">
                        <div className="bg-white w-4 h-4 rounded-full shadow"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - benefits */}
            <div className="w-1/4 flex flex-col items-end space-y-6 z-10">
              <div className="bg-[#6A3DD4] rounded-lg p-3 w-[180px]">
                <div className="text-center">
                  <div className="font-medium">Consistent</div>
                  <div className="font-medium">Timing</div>
                </div>
              </div>
              
              <div className="bg-[#65AA47] rounded-lg p-3 w-[180px]">
                <div className="text-center">
                  <div className="font-medium">Pre-Plan</div>
                  <div className="font-medium">Outreach</div>
                </div>
              </div>
              
              <div className="bg-[#E67635] rounded-lg p-3 w-[180px]">
                <div className="text-center">
                  <div className="font-medium">Higher</div>
                  <div className="font-medium">Conversion</div>
                </div>
              </div>
              
              <div className="bg-[#8E43D2] rounded-lg p-3 w-[180px]">
                <div className="text-center">
                  <div className="font-medium">Automated</div>
                  <div className="font-medium">Workflow</div>
                </div>
              </div>
            </div>
            
            {/* Animated connection lines */}
            <div className="absolute inset-0 pointer-events-none overflow-visible">
              {/* Left side connection lines (animated) */}
              <motion.svg width="100%" height="100%" className="absolute inset-0">
                {/* Line 1 - High Audience Fatigue Risk */}
                <motion.path 
                  d="M 180,60 C 230,20 280,60 360,120" 
                  stroke="#444" 
                  strokeWidth="4" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 1],
                    pathOffset: [0, 0, 1]
                  }}
                  transition={{ 
                    duration: 4.5,
                    times: [0, 0.33, 1],
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }}
                />
                
                {/* Line 2 - Visual Overload */}
                <motion.path 
                  d="M 180,142 C 230,110 280,120 360,170" 
                  stroke="#444" 
                  strokeWidth="4" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 1],
                    pathOffset: [0, 0, 1]
                  }}
                  transition={{ 
                    duration: 4.5,
                    times: [0, 0.33, 1],
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }}
                />
                
                {/* Line 3 - Poor Outreach Timing */}
                <motion.path 
                  d="M 180,226 C 230,240 280,230 360,210" 
                  stroke="#444" 
                  strokeWidth="4" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 1],
                    pathOffset: [0, 0, 1]
                  }}
                  transition={{ 
                    duration: 4.5,
                    times: [0, 0.33, 1],
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }}
                />
                
                {/* Line 4 - Manual Campaign Management */}
                <motion.path 
                  d="M 180,310 C 230,340 280,300 360,250" 
                  stroke="#444" 
                  strokeWidth="4" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 1],
                    pathOffset: [0, 0, 1]
                  }}
                  transition={{ 
                    duration: 4.5,
                    times: [0, 0.33, 1],
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }}
                />
              </motion.svg>
              
              {/* Animated colored strings from center to right */}
              <div className="absolute inset-0">
                {/* All animated paths in a single SVG for better sync */}
                <motion.svg width="100%" height="100%" className="absolute inset-0">
                  {/* Purple line - Consistent Timing */}
                  <motion.path 
                    d="M 500,120 C 550,35 600,0 680,60" 
                    stroke="#6A3DD4" 
                    strokeWidth="4" 
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 1],
                      pathOffset: [0, 0, 1]
                    }}
                    transition={{ 
                      duration: 4.5,
                      times: [0, 0.33, 1],
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear"
                    }}
                  />
                  
                  {/* Green line - Pre-Plan Outreach */}
                  <motion.path 
                    d="M 500,170 C 560,120 610,105 680,142" 
                    stroke="#65AA47" 
                    strokeWidth="4" 
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 1],
                      pathOffset: [0, 0, 1]
                    }}
                    transition={{ 
                      duration: 4.5,
                      times: [0, 0.33, 1],
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear"
                    }}
                  />
                  
                  {/* Orange line - Higher Conversion */}
                  <motion.path 
                    d="M 500,210 C 560,240 610,250 680,226" 
                    stroke="#E67635" 
                    strokeWidth="4" 
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 1],
                      pathOffset: [0, 0, 1]
                    }}
                    transition={{ 
                      duration: 4.5,
                      times: [0, 0.33, 1],
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear"
                    }}
                  />
                  
                  {/* Purple line - Automated Workflow */}
                  <motion.path 
                    d="M 500,250 C 550,330 600,370 680,310" 
                    stroke="#8E43D2"
                    strokeWidth="4" 
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 1],
                      pathOffset: [0, 0, 1]
                    }}
                    transition={{ 
                      duration: 4.5,
                      times: [0, 0.33, 1],
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear"
                    }}
                  />
                </motion.svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequencyScheduling;
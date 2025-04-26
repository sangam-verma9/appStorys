

// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import '../globals.css'


// const FrequencyScheduling = () => {
//   return (
//     <div className="w-full sf-pro bg-[#FFF8F5] py-16 flex justify-center">
//       <div className="max-w-[1002px] mx-auto px-4">
//         <h2 className="text-[#101010] text-center sf-pro  text-[56px] font-medium leading-[102%] mb-6">
//           Frequency & Scheduling
//         </h2>
//         <p className="text-[#2F2F2F] text-center sf-pro  text-[16px] font-normal leading-[138%]  mb-12 max-w-[1002px] mx-auto">
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
//                   d="M 180,60 C 230,20 280,60 360,120" 
//                   stroke="#444" 
//                   strokeWidth="4" 
//                   fill="none"
//                   initial={{ pathLength: 0 }}
//                   animate={{ 
//                     pathLength: [0, 1, 1],
//                     pathOffset: [0, 0, 1]
//                   }}
//                   transition={{ 
//                     duration: 4.5,
//                     times: [0, 0.33, 1],
//                     repeat: Infinity,
//                     repeatType: "loop",
//                     ease: "linear"
//                   }}
//                 />
                
//                 {/* Line 2 - Visual Overload */}
//                 <motion.path 
//                   d="M 180,142 C 230,110 280,120 360,170" 
//                   stroke="#444" 
//                   strokeWidth="4" 
//                   fill="none"
//                   initial={{ pathLength: 0 }}
//                   animate={{ 
//                     pathLength: [0, 1, 1],
//                     pathOffset: [0, 0, 1]
//                   }}
//                   transition={{ 
//                     duration: 4.5,
//                     times: [0, 0.33, 1],
//                     repeat: Infinity,
//                     repeatType: "loop",
//                     ease: "linear"
//                   }}
//                 />
                
//                 {/* Line 3 - Poor Outreach Timing */}
//                 <motion.path 
//                   d="M 180,226 C 230,240 280,230 360,210" 
//                   stroke="#444" 
//                   strokeWidth="4" 
//                   fill="none"
//                   initial={{ pathLength: 0 }}
//                   animate={{ 
//                     pathLength: [0, 1, 1],
//                     pathOffset: [0, 0, 1]
//                   }}
//                   transition={{ 
//                     duration: 4.5,
//                     times: [0, 0.33, 1],
//                     repeat: Infinity,
//                     repeatType: "loop",
//                     ease: "linear"
//                   }}
//                 />
                
//                 {/* Line 4 - Manual Campaign Management */}
//                 <motion.path 
//                   d="M 180,310 C 230,340 280,300 360,250" 
//                   stroke="#444" 
//                   strokeWidth="4" 
//                   fill="none"
//                   initial={{ pathLength: 0 }}
//                   animate={{ 
//                     pathLength: [0, 1, 1],
//                     pathOffset: [0, 0, 1]
//                   }}
//                   transition={{ 
//                     duration: 4.5,
//                     times: [0, 0.33, 1],
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
//                     initial={{ pathLength: 0 }}
//                     animate={{ 
//                       pathLength: [0, 1, 1],
//                       pathOffset: [0, 0, 1]
//                     }}
//                     transition={{ 
//                       duration: 4.5,
//                       times: [0, 0.33, 1],
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
//                     initial={{ pathLength: 0 }}
//                     animate={{ 
//                       pathLength: [0, 1, 1],
//                       pathOffset: [0, 0, 1]
//                     }}
//                     transition={{ 
//                       duration: 4.5,
//                       times: [0, 0.33, 1],
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
//                     initial={{ pathLength: 0 }}
//                     animate={{ 
//                       pathLength: [0, 1, 1],
//                       pathOffset: [0, 0, 1]
//                     }}
//                     transition={{ 
//                       duration: 4.5,
//                       times: [0, 0.33, 1],
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
//                     initial={{ pathLength: 0 }}
//                     animate={{ 
//                       pathLength: [0, 1, 1],
//                       pathOffset: [0, 0, 1]
//                     }}
//                     transition={{ 
//                       duration: 4.5,
//                       times: [0, 0.33, 1],
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


// // import React from 'react';
// // import { motion } from 'framer-motion';

// // const FrequencyScheduling = () => {
// //   return (
// //     <div className="w-full sf-pro bg-[#FFF8F5] py-16 flex justify-center">
// //       <div className="max-w-[1002px] mx-auto px-4">
// //         <h2 className="text-[#101010] text-center sf-pro text-[56px] font-medium leading-[102%] mb-6">
// //           Frequency And Scheduling
// //         </h2>
// //         <p className="text-[#2F2F2F] text-center sf-pro text-[16px] font-normal leading-[138%] mb-12 max-w-[1002px] mx-auto">
// //           Control how often users see your campaign, show it just once, repeat it daily, weekly, or monthly, or create custom rules like "up to 5 
// //           times a day" or "only after 2 days of last view." Set triggers based on views, clicks, interactions, or specific events. You can also 
// //           schedule start and end dates, with time zone support to match user locations. For the best experience, limit views to avoid user fatigue
// //           — like showing promos a few times a week or resetting after clicks.
// //         </p>
        
// //         <div className="w-full bg-black rounded-2xl p-12 text-white relative">
// //           <div className="flex justify-between mb-8">
// //             <h3 className="text-xl font-medium underline">Without Frequency:</h3>
// //             <h3 className="text-xl font-medium underline">With Frequency:</h3>
// //           </div>
          
// //           <div className="flex items-center justify-between relative min-h-[400px]">
// //             {/* Left side - problems */}
// //             <div className="w-1/4 flex flex-col space-y-6 z-10">
// //               <div style={{
// //                 width: '129.464px',
// //                 height: '65.413px',
// //                 flexShrink: 0,
// //                 borderRadius: '12.265px',
// //                 border: '1.363px solid rgba(255, 255, 255, 0.29)',
// //                 background: 'rgba(255, 255, 255, 0.10)',
// //                 backdropFilter: 'blur(12.264979362487793px)'
// //               }} className="flex items-center justify-center">
// //                 <div className="text-center">
// //                   <div className="font-medium">High Audience</div>
// //                   <div className="font-medium">Fatigue Risk</div>
// //                 </div>
// //               </div>
              
// //               <div style={{
// //                 width: '129.464px',
// //                 height: '65.413px',
// //                 flexShrink: 0,
// //                 borderRadius: '12.265px',
// //                 border: '1.363px solid rgba(255, 255, 255, 0.29)',
// //                 background: 'rgba(255, 255, 255, 0.10)',
// //                 backdropFilter: 'blur(12.264979362487793px)'
// //               }} className="flex items-center justify-center">
// //                 <div className="text-center">
// //                   <div className="font-medium">Visual</div>
// //                   <div className="font-medium">Overload</div>
// //                 </div>
// //               </div>
              
// //               <div style={{
// //                 width: '129.464px',
// //                 height: '65.413px',
// //                 flexShrink: 0,
// //                 borderRadius: '12.265px',
// //                 border: '1.363px solid rgba(255, 255, 255, 0.29)',
// //                 background: 'rgba(255, 255, 255, 0.10)',
// //                 backdropFilter: 'blur(12.264979362487793px)'
// //               }} className="flex items-center justify-center">
// //                 <div className="text-center">
// //                   <div className="font-medium">Poor</div>
// //                   <div className="font-medium">Outreach</div>
// //                   <div className="font-medium">Timing</div>
// //                 </div>
// //               </div>
              
// //               <div style={{
// //                 width: '129.464px',
// //                 height: '65.413px',
// //                 flexShrink: 0,
// //                 borderRadius: '12.265px',
// //                 border: '1.363px solid rgba(255, 255, 255, 0.29)',
// //                 background: 'rgba(255, 255, 255, 0.10)',
// //                 backdropFilter: 'blur(12.264979362487793px)'
// //               }} className="flex items-center justify-center">
// //                 <div className="text-center">
// //                   <div className="font-medium">Manual</div>
// //                   <div className="font-medium">Campaign</div>
// //                   <div className="font-medium">Management</div>
// //                 </div>
// //               </div>
// //             </div>
            
// //             {/* Center - Sun-like glowing circles */}
// //             <div className="flex-1 flex justify-center items-center relative z-0">
// //               {/* Outer glow circle */}
// //               <div style={{
// //                 width: '375px',
// //                 height: '375px',
// //                 position: 'absolute',
// //                 borderRadius: '375px',
// //                 opacity: '0.3',
// //                 background: '#FB6901'
// //               }}></div>
              
// //               {/* Middle glow circle */}
// //               <div style={{
// //                 width: '250px',
// //                 height: '250px',
// //                 position: 'absolute',
// //                 borderRadius: '250px',
// //                 opacity: '0.5',
// //                 background: '#FB6901'
// //               }}></div>
              
// //               {/* Inner glow circle */}
// //               <div style={{
// //                 width: '130px',
// //                 height: '130px',
// //                 position: 'absolute',
// //                 borderRadius: '130px',
// //                 background: '#FB6901'
// //               }}></div>
// //             </div>
            
// //             {/* Right side - benefits */}
// //             <div className="w-1/4 flex flex-col items-end space-y-6 z-10">
// //               <div style={{
// //                 width: '103.571px',
// //                 height: '65.413px',
// //                 flexShrink: 0,
// //                 borderRadius: '12.265px',
// //                 border: '1.363px solid rgba(255, 255, 255, 0.29)',
// //                 background: 'linear-gradient(262deg, #5301F8 4.07%, #5B3F98 94.5%)',
// //                 backdropFilter: 'blur(12.264979362487793px)'
// //               }} className="flex items-center justify-center">
// //                 <div className="text-center">
// //                   <div className="font-medium">Consistent</div>
// //                   <div className="font-medium">Timing</div>
// //                 </div>
// //               </div>
              
// //               <div style={{
// //                 width: '103.571px',
// //                 height: '65.413px',
// //                 flexShrink: 0,
// //                 borderRadius: '12.265px',
// //                 border: '1.363px solid rgba(255, 255, 255, 0.29)',
// //                 background: 'linear-gradient(262deg, #6ABE32 4.07%, #669232 94.5%)',
// //                 backdropFilter: 'blur(12.264979362487793px)'
// //               }} className="flex items-center justify-center">
// //                 <div className="text-center">
// //                   <div className="font-medium">Pre-Plan</div>
// //                   <div className="font-medium">Outreach</div>
// //                 </div>
// //               </div>
              
// //               <div style={{
// //                 width: '103.571px',
// //                 height: '65.413px',
// //                 flexShrink: 0,
// //                 borderRadius: '12.265px',
// //                 border: '1.363px solid rgba(255, 255, 255, 0.29)',
// //                 background: 'linear-gradient(262deg, #FF6100 4.07%, #B75B21 94.5%)',
// //                 backdropFilter: 'blur(12.264979362487793px)'
// //               }} className="flex items-center justify-center">
// //                 <div className="text-center">
// //                   <div className="font-medium">Higher</div>
// //                   <div className="font-medium">Conversion</div>
// //                 </div>
// //               </div>
              
// //               <div style={{
// //                 width: '103.571px',
// //                 height: '65.413px',
// //                 flexShrink: 0,
// //                 borderRadius: '12.265px',
// //                 border: '1.363px solid rgba(255, 255, 255, 0.29)',
// //                 background: 'linear-gradient(262deg, #981EC2 4.07%, #76199D 94.5%)',
// //                 backdropFilter: 'blur(12.264979362487793px)'
// //               }} className="flex items-center justify-center">
// //                 <div className="text-center">
// //                   <div className="font-medium">Automated</div>
// //                   <div className="font-medium">Workflow</div>
// //                 </div>
// //               </div>
// //             </div>
            
// //             {/* Animated connection lines */}
// //             <div className="absolute inset-0 pointer-events-none overflow-visible">
// //               {/* Left side connection lines (animated) */}
// //               <motion.svg width="100%" height="100%" className="absolute inset-0">
// //                 {/* Line 1 - High Audience Fatigue Risk */}
// //                 <motion.path 
// //                   d="M 130,50 C 200,50 270,80 340,120" 
// //                   stroke="rgba(255, 255, 255, 0.4)" 
// //                   strokeWidth="2" 
// //                   fill="none"
// //                   initial={{ pathLength: 0 }}
// //                   animate={{ 
// //                     pathLength: [0, 1, 1],
// //                     pathOffset: [0, 0, 1]
// //                   }}
// //                   transition={{ 
// //                     duration: 4,
// //                     times: [0, 0.4, 1],
// //                     repeat: Infinity,
// //                     repeatType: "loop",
// //                     ease: "easeInOut"
// //                   }}
// //                 />
                
// //                 {/* Line 2 - Visual Overload */}
// //                 <motion.path 
// //                   d="M 130,130 C 200,120 270,130 340,150" 
// //                   stroke="rgba(255, 255, 255, 0.4)" 
// //                   strokeWidth="2" 
// //                   fill="none"
// //                   initial={{ pathLength: 0 }}
// //                   animate={{ 
// //                     pathLength: [0, 1, 1],
// //                     pathOffset: [0, 0, 1]
// //                   }}
// //                   transition={{ 
// //                     duration: 4,
// //                     times: [0, 0.4, 1],
// //                     repeat: Infinity,
// //                     repeatType: "loop",
// //                     ease: "easeInOut",
// //                     delay: 0.2
// //                   }}
// //                 />
                
// //                 {/* Line 3 - Poor Outreach Timing */}
// //                 <motion.path 
// //                   d="M 130,210 C 200,220 270,210 340,190" 
// //                   stroke="rgba(255, 255, 255, 0.4)" 
// //                   strokeWidth="2" 
// //                   fill="none"
// //                   initial={{ pathLength: 0 }}
// //                   animate={{ 
// //                     pathLength: [0, 1, 1],
// //                     pathOffset: [0, 0, 1]
// //                   }}
// //                   transition={{ 
// //                     duration: 4,
// //                     times: [0, 0.4, 1],
// //                     repeat: Infinity,
// //                     repeatType: "loop",
// //                     ease: "easeInOut",
// //                     delay: 0.4
// //                   }}
// //                 />
                
// //                 {/* Line 4 - Manual Campaign Management */}
// //                 <motion.path 
// //                   d="M 130,290 C 200,280 270,260 340,220" 
// //                   stroke="rgba(255, 255, 255, 0.4)" 
// //                   strokeWidth="2" 
// //                   fill="none"
// //                   initial={{ pathLength: 0 }}
// //                   animate={{ 
// //                     pathLength: [0, 1, 1],
// //                     pathOffset: [0, 0, 1]
// //                   }}
// //                   transition={{ 
// //                     duration: 4,
// //                     times: [0, 0.4, 1],
// //                     repeat: Infinity,
// //                     repeatType: "loop",
// //                     ease: "easeInOut",
// //                     delay: 0.6
// //                   }}
// //                 />
// //               </motion.svg>
              
// //               {/* Right side connection lines (animated with colors) */}
// //               <motion.svg width="100%" height="100%" className="absolute inset-0">
// //                 {/* Purple line - Consistent Timing */}
// //                 <motion.path 
// //                   d="M 520,120 C 590,50 660,20 730,50" 
// //                   stroke="#5301F8" 
// //                   strokeWidth="2" 
// //                   fill="none"
// //                   initial={{ pathLength: 0 }}
// //                   animate={{ 
// //                     pathLength: [0, 1, 1],
// //                     pathOffset: [0, 0, 1]
// //                   }}
// //                   transition={{ 
// //                     duration: 4,
// //                     times: [0, 0.4, 1],
// //                     repeat: Infinity,
// //                     repeatType: "loop",
// //                     ease: "easeInOut"
// //                   }}
// //                 />
                
// //                 {/* Green line - Pre-Plan Outreach */}
// //                 <motion.path 
// //                   d="M 520,150 C 590,170 660,120 730,130" 
// //                   stroke="#6ABE32" 
// //                   strokeWidth="2" 
// //                   fill="none"
// //                   initial={{ pathLength: 0 }}
// //                   animate={{ 
// //                     pathLength: [0, 1, 1],
// //                     pathOffset: [0, 0, 1]
// //                   }}
// //                   transition={{ 
// //                     duration: 4,
// //                     times: [0, 0.4, 1],
// //                     repeat: Infinity, 
// //                     repeatType: "loop",
// //                     ease: "easeInOut",
// //                     delay: 0.2
// //                   }}
// //                 />
                
// //                 {/* Orange line - Higher Conversion */}
// //                 <motion.path 
// //                   d="M 520,190 C 590,210 660,220 730,210" 
// //                   stroke="#FF6100" 
// //                   strokeWidth="2" 
// //                   fill="none"
// //                   initial={{ pathLength: 0 }}
// //                   animate={{ 
// //                     pathLength: [0, 1, 1],
// //                     pathOffset: [0, 0, 1]
// //                   }}
// //                   transition={{ 
// //                     duration: 4,
// //                     times: [0, 0.4, 1],
// //                     repeat: Infinity,
// //                     repeatType: "loop",
// //                     ease: "easeInOut",
// //                     delay: 0.4
// //                   }}
// //                 />
                
// //                 {/* Purple line - Automated Workflow */}
// //                 <motion.path 
// //                   d="M 520,220 C 590,290 660,320 730,290" 
// //                   stroke="#981EC2" 
// //                   strokeWidth="2" 
// //                   fill="none"
// //                   initial={{ pathLength: 0 }}
// //                   animate={{ 
// //                     pathLength: [0, 1, 1],
// //                     pathOffset: [0, 0, 1]
// //                   }}
// //                   transition={{ 
// //                     duration: 4,
// //                     times: [0, 0.4, 1],
// //                     repeat: Infinity,
// //                     repeatType: "loop",
// //                     ease: "easeInOut",
// //                     delay: 0.6
// //                   }}
// //                 />
// //               </motion.svg>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FrequencyScheduling;



// // import React from 'react';
// // import { motion } from 'framer-motion';

// // const FrequencyScheduling = () => {
// //   return (
// //     <div className="w-full sf-pro bg-[#FFF8F5] py-16 flex justify-center">
// //       <div className="max-w-[1002px] mx-auto px-4">
// //         <h2 className="text-[#101010] text-center sf-pro text-[56px] font-medium leading-[102%] mb-6">
// //           Frequency And Scheduling
// //         </h2>
// //         <p className="text-[#2F2F2F] text-center sf-pro text-[16px] font-normal leading-[138%] mb-12 max-w-[1002px] mx-auto">
// //           Control how often users see your campaign, show it just once, repeat it daily, weekly, or monthly, or create custom rules like "up to 5 
// //           times a day" or "only after 2 days of last view." Set triggers based on views, clicks, interactions, or specific events. You can also 
// //           schedule start and end dates, with time zone support to match user locations. For the best experience, limit views to avoid user fatigue
// //           — like showing promos a few times a week or resetting after clicks.
// //         </p>
        
// //         <div className="w-full bg-black rounded-2xl p-12 text-white relative">
// //           <div className="flex justify-between mb-8">
// //             <h3 className="text-xl font-medium underline">Without Frequency:</h3>
// //             <h3 className="text-xl font-medium underline">With Frequency:</h3>
// //           </div>
          
// //           <div className="flex items-center justify-between relative min-h-[400px]">
// //             {/* Left side - problems */}
// //             <div className="w-1/4 flex flex-col justify-between z-10" style={{ height: '390px' }}>
// //               <div style={{
// //                 width: '129.464px',
// //                 height: '65.413px',
// //                 flexShrink: 0,
// //                 borderRadius: '12.265px',
// //                 border: '1.363px solid rgba(255, 255, 255, 0.29)',
// //                 background: 'rgba(255, 255, 255, 0.10)',
// //                 backdropFilter: 'blur(12.264979362487793px)'
// //               }} className="flex items-center justify-center ml-auto">
// //                 <div className="text-center">
// //                   <div className="font-medium">High Audience</div>
// //                   <div className="font-medium">Fatigue Risk</div>
// //                 </div>
// //               </div>
              
// //               <div style={{
// //                 width: '129.464px',
// //                 height: '65.413px',
// //                 flexShrink: 0,
// //                 borderRadius: '12.265px',
// //                 border: '1.363px solid rgba(255, 255, 255, 0.29)',
// //                 background: 'rgba(255, 255, 255, 0.10)',
// //                 backdropFilter: 'blur(12.264979362487793px)'
// //               }} className="flex items-center justify-center ml-auto">
// //                 <div className="text-center">
// //                   <div className="font-medium">Visual</div>
// //                   <div className="font-medium">Overload</div>
// //                 </div>
// //               </div>
              
// //               <div style={{
// //                 width: '129.464px',
// //                 height: '65.413px',
// //                 flexShrink: 0,
// //                 borderRadius: '12.265px',
// //                 border: '1.363px solid rgba(255, 255, 255, 0.29)',
// //                 background: 'rgba(255, 255, 255, 0.10)',
// //                 backdropFilter: 'blur(12.264979362487793px)'
// //               }} className="flex items-center justify-center ml-auto">
// //                 <div className="text-center">
// //                   <div className="font-medium">Poor</div>
// //                   <div className="font-medium">Outreach</div>
// //                   <div className="font-medium">Timing</div>
// //                 </div>
// //               </div>
              
// //               <div style={{
// //                 width: '129.464px',
// //                 height: '65.413px',
// //                 flexShrink: 0,
// //                 borderRadius: '12.265px',
// //                 border: '1.363px solid rgba(255, 255, 255, 0.29)',
// //                 background: 'rgba(255, 255, 255, 0.10)',
// //                 backdropFilter: 'blur(12.264979362487793px)'
// //               }} className="flex items-center justify-center ml-auto">
// //                 <div className="text-center">
// //                   <div className="font-medium">Manual</div>
// //                   <div className="font-medium">Campaign</div>
// //                   <div className="font-medium">Management</div>
// //                 </div>
// //               </div>
// //             </div>
            
// //             {/* Center - Sun-like glowing circles */}
// //             <div className="flex-1 flex justify-center items-center relative z-0">
// //               {/* Outer glow circle */}
// //               <div style={{
// //                 width: '375px',
// //                 height: '375px',
// //                 position: 'absolute',
// //                 borderRadius: '375px',
// //                 opacity: '0.3',
// //                 background: '#FB6901'
// //               }}></div>
              
// //               {/* Middle glow circle */}
// //               <div style={{
// //                 width: '250px',
// //                 height: '250px',
// //                 position: 'absolute',
// //                 borderRadius: '250px',
// //                 opacity: '0.5',
// //                 background: '#FB6901'
// //               }}></div>
              
// //               {/* Inner glow circle */}
// //               <div style={{
// //                 width: '130px',
// //                 height: '130px',
// //                 position: 'absolute',
// //                 borderRadius: '130px',
// //                 background: '#FB6901'
// //               }}></div>
// //             </div>
            
// //             {/* Right side - benefits */}
// //             <div className="w-1/4 flex flex-col justify-between z-10" style={{ height: '390px' }}>
// //               <div style={{
// //                 width: '103.571px',
// //                 height: '65.413px',
// //                 flexShrink: 0,
// //                 borderRadius: '12.265px',
// //                 border: '1.363px solid rgba(255, 255, 255, 0.29)',
// //                 background: 'linear-gradient(262deg, #5301F8 4.07%, #5B3F98 94.5%)',
// //                 backdropFilter: 'blur(12.264979362487793px)'
// //               }} className="flex items-center justify-center">
// //                 <div className="text-center">
// //                   <div className="font-medium">Consistent</div>
// //                   <div className="font-medium">Timing</div>
// //                 </div>
// //               </div>
              
// //               <div style={{
// //                 width: '103.571px',
// //                 height: '65.413px',
// //                 flexShrink: 0,
// //                 borderRadius: '12.265px',
// //                 border: '1.363px solid rgba(255, 255, 255, 0.29)',
// //                 background: 'linear-gradient(262deg, #6ABE32 4.07%, #669232 94.5%)',
// //                 backdropFilter: 'blur(12.264979362487793px)'
// //               }} className="flex items-center justify-center">
// //                 <div className="text-center">
// //                   <div className="font-medium">Pre-Plan</div>
// //                   <div className="font-medium">Outreach</div>
// //                 </div>
// //               </div>
              
// //               <div style={{
// //                 width: '103.571px',
// //                 height: '65.413px',
// //                 flexShrink: 0,
// //                 borderRadius: '12.265px',
// //                 border: '1.363px solid rgba(255, 255, 255, 0.29)',
// //                 background: 'linear-gradient(262deg, #FF6100 4.07%, #B75B21 94.5%)',
// //                 backdropFilter: 'blur(12.264979362487793px)'
// //               }} className="flex items-center justify-center">
// //                 <div className="text-center">
// //                   <div className="font-medium">Higher</div>
// //                   <div className="font-medium">Conversion</div>
// //                 </div>
// //               </div>
              
// //               <div style={{
// //                 width: '103.571px',
// //                 height: '65.413px',
// //                 flexShrink: 0,
// //                 borderRadius: '12.265px',
// //                 border: '1.363px solid rgba(255, 255, 255, 0.29)',
// //                 background: 'linear-gradient(262deg, #981EC2 4.07%, #76199D 94.5%)',
// //                 backdropFilter: 'blur(12.264979362487793px)'
// //               }} className="flex items-center justify-center">
// //                 <div className="text-center">
// //                   <div className="font-medium">Automated</div>
// //                   <div className="font-medium">Workflow</div>
// //                 </div>
// //               </div>
// //             </div>
            
// //             {/* Animated connection lines */}
// //             <div className="absolute inset-0 pointer-events-none overflow-visible">
// //               {/* Left side connection lines (animated) */}
// //               <motion.svg width="100%" height="100%" className="absolute inset-0">
// //                 {/* Line 1 - High Audience Fatigue Risk */}
// //                 <motion.path 
// //                   d="M 130,32 C 180,32 270,80 340,120" 
// //                   stroke="rgba(255, 255, 255, 0.7)" 
// //                   strokeWidth="3" 
// //                   fill="none"
// //                   initial={{ pathLength: 0 }}
// //                   animate={{ 
// //                     pathLength: [0, 1, 1],
// //                     pathOffset: [0, 0, 1]
// //                   }}
// //                   transition={{ 
// //                     duration: 4,
// //                     times: [0, 0.4, 1],
// //                     repeat: Infinity,
// //                     repeatType: "loop",
// //                     ease: "easeInOut"
// //                   }}
// //                 />
                
// //                 {/* Line 2 - Visual Overload */}
// //                 <motion.path 
// //                   d="M 130,130 C 180,130 270,130 340,170" 
// //                   stroke="rgba(255, 255, 255, 0.7)" 
// //                   strokeWidth="3" 
// //                   fill="none"
// //                   initial={{ pathLength: 0 }}
// //                   animate={{ 
// //                     pathLength: [0, 1, 1],
// //                     pathOffset: [0, 0, 1]
// //                   }}
// //                   transition={{ 
// //                     duration: 4,
// //                     times: [0, 0.4, 1],
// //                     repeat: Infinity,
// //                     repeatType: "loop",
// //                     ease: "easeInOut",
// //                     delay: 0.2
// //                   }}
// //                 />
                
// //                 {/* Line 3 - Poor Outreach Timing */}
// //                 <motion.path 
// //                   d="M 130,228 C 180,228 270,200 340,190" 
// //                   stroke="rgba(255, 255, 255, 0.7)" 
// //                   strokeWidth="3" 
// //                   fill="none"
// //                   initial={{ pathLength: 0 }}
// //                   animate={{ 
// //                     pathLength: [0, 1, 1],
// //                     pathOffset: [0, 0, 1]
// //                   }}
// //                   transition={{ 
// //                     duration: 4,
// //                     times: [0, 0.4, 1],
// //                     repeat: Infinity,
// //                     repeatType: "loop",
// //                     ease: "easeInOut",
// //                     delay: 0.4
// //                   }}
// //                 />
                
// //                 {/* Line 4 - Manual Campaign Management */}
// //                 <motion.path 
// //                   d="M 130,326 C 180,326 270,260 340,220" 
// //                   stroke="rgba(255, 255, 255, 0.7)" 
// //                   strokeWidth="3" 
// //                   fill="none"
// //                   initial={{ pathLength: 0 }}
// //                   animate={{ 
// //                     pathLength: [0, 1, 1],
// //                     pathOffset: [0, 0, 1]
// //                   }}
// //                   transition={{ 
// //                     duration: 4,
// //                     times: [0, 0.4, 1],
// //                     repeat: Infinity,
// //                     repeatType: "loop",
// //                     ease: "easeInOut",
// //                     delay: 0.6
// //                   }}
// //                 />
// //               </motion.svg>
              
// //               {/* Right side connection lines (animated with colors) */}
// //               <motion.svg width="100%" height="100%" className="absolute inset-0">
// //                 {/* Purple line - Consistent Timing */}
// //                 <motion.path 
// //                   d="M 520,120 C 590,32 660,32 730,32" 
// //                   stroke="#5301F8" 
// //                   strokeWidth="3" 
// //                   fill="none"
// //                   initial={{ pathLength: 0 }}
// //                   animate={{ 
// //                     pathLength: [0, 1, 1],
// //                     pathOffset: [0, 0, 1]
// //                   }}
// //                   transition={{ 
// //                     duration: 4,
// //                     times: [0, 0.4, 1],
// //                     repeat: Infinity,
// //                     repeatType: "loop",
// //                     ease: "easeInOut"
// //                   }}
// //                 />
                
// //                 {/* Green line - Pre-Plan Outreach */}
// //                 <motion.path 
// //                   d="M 520,150 C 590,130 660,130 730,130" 
// //                   stroke="#6ABE32" 
// //                   strokeWidth="3" 
// //                   fill="none"
// //                   initial={{ pathLength: 0 }}
// //                   animate={{ 
// //                     pathLength: [0, 1, 1],
// //                     pathOffset: [0, 0, 1]
// //                   }}
// //                   transition={{ 
// //                     duration: 4,
// //                     times: [0, 0.4, 1],
// //                     repeat: Infinity, 
// //                     repeatType: "loop",
// //                     ease: "easeInOut",
// //                     delay: 0.2
// //                   }}
// //                 />
                
// //                 {/* Orange line - Higher Conversion */}
// //                 <motion.path 
// //                   d="M 520,190 C 590,228 660,228 730,228" 
// //                   stroke="#FF6100" 
// //                   strokeWidth="3" 
// //                   fill="none"
// //                   initial={{ pathLength: 0 }}
// //                   animate={{ 
// //                     pathLength: [0, 1, 1],
// //                     pathOffset: [0, 0, 1]
// //                   }}
// //                   transition={{ 
// //                     duration: 4,
// //                     times: [0, 0.4, 1],
// //                     repeat: Infinity,
// //                     repeatType: "loop",
// //                     ease: "easeInOut",
// //                     delay: 0.4
// //                   }}
// //                 />
                
// //                 {/* Purple line - Automated Workflow */}
// //                 <motion.path 
// //                   d="M 520,220 C 590,326 660,326 730,326" 
// //                   stroke="#981EC2" 
// //                   strokeWidth="3" 
// //                   fill="none"
// //                   initial={{ pathLength: 0 }}
// //                   animate={{ 
// //                     pathLength: [0, 1, 1],
// //                     pathOffset: [0, 0, 1]
// //                   }}
// //                   transition={{ 
// //                     duration: 4,
// //                     times: [0, 0.4, 1],
// //                     repeat: Infinity,
// //                     repeatType: "loop",
// //                     ease: "easeInOut",
// //                     delay: 0.6
// //                   }}
// //                 />
// //               </motion.svg>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FrequencyScheduling;


// import React from 'react';
// import Image from 'next/image';
// import fns from '../../assets/fns.png'
// const FrequencyScheduling = () => {
//   return (
//     <div className="w-full bg-[#FFF8F5] py-8 sm:py-12 md:py-16 flex justify-center">
//       <div className="w-full max-w-[1002px] mx-auto px-4 sm:px-6 md:px-8">
//         <h2 className="text-[#101010] text-center sf-pro text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium leading-[102%] mb-4 sm:mb-6">
//           Frequency & Scheduling
//         </h2>
//         <p className="text-[#2F2F2F] text-center text-base  sm:text-base font-normal leading-[138%] mb-8 sm:mb-10 md:mb-12 max-w-[1002px] mx-auto">
//           Control how often users see your campaign, show it just once, repeat it daily, weekly, or monthly, or create custom rules like "up to 5 
//           times a day" or "only after 2 days of last view." Set triggers based on views, clicks, interactions, or specific events. You can also 
//           schedule start and end dates, with time zone support to match user locations. For the best experience, limit views to avoid user fatigue
//           — like showing promos a few times a week or resetting after clicks.
//         </p>
        
//         {/* Image Container */}
//         <div className="w-full  overflow-hidden rounded-xl sm:rounded-2xl">
//           {/* Replace with actual image when you have it */}
//           <div className="relative w-full  h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
//             {/* Placeholder for the image */}
//             <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center overflow-hidden">
//               When you have the actual image, replace this div with:
//               <Image 
//                 src={fns}
//                 alt="Frequency and Scheduling Comparison"
//                 fill
//                 sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 1002px"
//                 className="object-contain"
//                 priority
//               />
          
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FrequencyScheduling;


import React from 'react';
import Image from 'next/image';
import fnsg from '../../assets/fnsg.gif';

const FrequencyScheduling = () => {
  return (
    <div className="w-full bg-[#FFF8F5] py-8 sm:py-12 md:py-16 flex justify-center">
      <div className="w-full max-w-[1002px] mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-[#101010] text-center sf-pro text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium leading-[102%] mb-4 sm:mb-6">
          Frequency & Scheduling
        </h2>
        <p className="text-[#2F2F2F] text-center text-base sm:text-base font-normal leading-[138%] mb-8 sm:mb-10 md:mb-12 max-w-[1002px] mx-auto">
          Control how often users see your campaign, show it just once, repeat it daily, weekly, or monthly, or create custom rules like "up to 5 
          times a day" or "only after 2 days of last view." Set triggers based on views, clicks, interactions, or specific events. You can also 
          schedule start and end dates, with time zone support to match user locations. For the best experience, limit views to avoid user fatigue
          — like showing promos a few times a week or resetting after clicks.
        </p>
        
        {/* GIF Container */}
        <div className="w-full overflow-hidden rounded-xl sm:rounded-2xl">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
            <Image 
              src={fnsg}
              alt="Frequency and Scheduling Comparison"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 1002px"
              className="object-contain"
              priority
              unoptimized={true} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequencyScheduling;
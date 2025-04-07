
// "use client";

// import React from 'react';
// import Image from "next/image";
// import { motion } from "framer-motion";
// import step1 from '../../assets/steps_1.png';
// import step2 from '../../assets/steps_2.png';
// import step3 from '../../assets/steps_3.png';


// const StepsSection = ({ keyword }) => {
//   return (
//     <section className="flex justify-center items-center w-full min-h-[90vh] py-16 bg-[#0E0E0E] relative overflow-hidden">
//       {/* Gradient ball at top right */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[rgba(255,94,0,0.20)] blur-[80px] opacity-70 -mr-32 -mt-32"></div>
      
//       {/* Gradient ball at bottom left */}
//       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[rgba(255,94,0,0.20)] blur-[80px] opacity-70 -ml-32 -mb-32"></div>
      
//       <div className="flex flex-col justify-center items-center w-full max-w-7xl gap-y-[40px] px-6 md:px-8 lg:px-12 relative z-10">
//         <div className="flex flex-col justify-center items-start w-full gap-y-[16px]">
//           <h3 className="text-white text-[0.9rem] font-bold tracking-[2px] uppercase">STEPS</h3>
//           <h1 
//   className="text-[42px] md:text-[56px] capitalize leading-[102%] font-semibold"
//   style={{
//     background: "linear-gradient(180deg, #FD5F03 0%, #FDE8DC 119.74%)",
//     backgroundClip: "text",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent"
//   }}
// >
//   Let's Start With App {keyword}?
// </h1>
//           <h2 className="text-[16px] md:text-[18px] font-bold text-white mt-[20px]">
//             Install SDK &nbsp; ---&gt; &nbsp; Create Campaign &nbsp; ---&gt; &nbsp; Go Live
//           </h2>
//         </div>

//         <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full mt-[30px]">
//           {/* Step 1 */}
//           <motion.div 
//             className="w-full md:w-[401px] h-auto md:h-[334px] p-6 rounded-[13px] border border-white/30 bg-white/10 backdrop-blur-md"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex flex-col gap-y-6 h-full">
//               <h3 className="text-white text-[12px] font-bold tracking-[2px] uppercase">STEP 01</h3>
//               <div className="flex justify-start items-center">
//                 <div className="rounded-full p-3 h-[70px] w-[70px] flex items-center justify-center">
//                   <Image
//                     src={step1}
//                     alt="Request a personalized demo"
//                     width={40}
//                     height={40}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col gap-y-3">
//                 <h3 className="text-white text-[18px] font-medium leading-[119%] capitalize">
//                   Request A Personalized Demo
//                 </h3>
//                 <p className="text-white text-[14px] font-normal leading-[150%]">
//                   Schedule a quick call with us to try all the mobile Stories capabilities. Learn how to launch Stories directly for your apps while getting tips and suggestions on how to improve your primary product metrics.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
          
//           {/* Step 2 */}
//           <motion.div 
//             className="w-full md:w-[401px] h-auto md:h-[334px] p-6 rounded-[13px] border border-white/30 bg-white/10 backdrop-blur-md"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex flex-col gap-y-6 h-full">
//               <h3 className="text-white text-[12px] font-bold tracking-[2px] uppercase">STEP 02</h3>
//               <div className="flex justify-start items-center">
//               <div className="rounded-full p-3 h-[70px] w-[70px] flex items-center justify-center">
//                   <Image
//                     src={step2}
//                     alt="Integrate SDK"
//                     width={40}
//                     height={40}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col gap-y-3">
//                 <h3 className="text-white text-[18px] font-medium leading-[119%] capitalize">
//                   Integrate SDK
//                 </h3>
//                 <p className="text-white text-[14px] font-normal leading-[150%]">
//                   Select a fitting plan depending on the MAU or DAU of your mobile application. Integrate the SDK into your digital product. With a simple step like that, you are ready to launch a campaign anytime now!
//                 </p>
//               </div>
//             </div>
//           </motion.div>
          
//           {/* Step 3 */}
//           <motion.div 
//             className="w-full md:w-[401px] h-auto md:h-[334px] p-6 rounded-[13px] border border-white/30 bg-white/10 backdrop-blur-md"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex flex-col gap-y-6 h-full">
//               <h3 className="text-white text-[12px] font-bold tracking-[2px] uppercase">STEP 03</h3>
//               <div className="flex justify-start items-center">
//               <div className="rounded-full p-3 h-[70px] w-[70px] flex items-center justify-center">
//                   <Image
//                     src={step3}
//                     alt="Launch your first PIP Videos"
//                     width={40}
//                     height={40}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col gap-y-3">
//                 <h3 className="text-white text-[18px] font-medium leading-[119%] capitalize">
//                   Launch Your First {keyword}
//                 </h3>
//                 <p className="text-white text-[14px] font-normal leading-[150%]">
//                   Publish {keyword} carousel or use in-app {keyword}! Follow these steps and launch {keyword} in your app without any engineering efforts!
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StepsSection;


"use client";

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import step1 from '../../assets/steps_1.png';
import step2 from '../../assets/steps_2.png';
import step3 from '../../assets/steps_3.png';


const StepsSection = ({ keyword }) => {
  return (
    <section className="flex justify-center items-center w-full min-h-[90vh] py-16 bg-[#0E0E0E] relative overflow-hidden">
      {/* Gradient ball at top right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[rgba(255,94,0,0.20)] blur-[80px] opacity-70 -mr-32 -mt-32"></div>
      
      {/* Gradient ball at bottom left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[rgba(255,94,0,0.20)] blur-[80px] opacity-70 -ml-32 -mb-32"></div>
      
      <div className="flex flex-col justify-center items-center w-full max-w-[1400px] gap-y-[40px] px-4 sm:px-6 md:px-8 lg:px-20 relative z-10">
        <div className="flex flex-col justify-center items-start w-full gap-y-[16px]">
          <h3 className="text-white text-[0.9rem] font-bold tracking-[2px] uppercase">STEPS</h3>
          <h1 
            className="text-[42px] md:text-[56px] capitalize leading-[102%] font-semibold"
            style={{
              background: "linear-gradient(180deg, #FD5F03 0%, #FDE8DC 119.74%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Let's Start With App {keyword}?
          </h1>
          <h2 className="text-[16px] md:text-[18px] font-bold text-white mt-[20px]">
            Install SDK &nbsp; ---&gt; &nbsp; Create Campaign &nbsp; ---&gt; &nbsp; Go Live
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full mt-[30px]">
          {/* Step 1 */}
          <motion.div 
            className="w-full md:w-1/3 lg:w-[401px] h-auto md:h-[334px] p-6 rounded-[13px] border border-white/30 bg-white/10 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-y-6 h-full">
              <h3 className="text-white text-[12px] font-bold tracking-[2px] uppercase">STEP 01</h3>
              <div className="flex justify-start items-center">
                <div className="rounded-full p-3 h-[70px] w-[70px] flex items-center justify-center">
                  <Image
                    src={step1}
                    alt="Request a personalized demo"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-3">
                <h3 className="text-white text-[18px] font-medium leading-[119%] capitalize">
                  Request A Personalized Demo
                </h3>
                <p className="text-white text-[14px] font-normal leading-[150%]">
                  Schedule a quick call with us to try all the mobile Stories capabilities. Learn how to launch Stories directly for your apps while getting tips and suggestions on how to improve your primary product metrics.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Step 2 */}
          <motion.div 
            className="w-full md:w-1/3 lg:w-[401px] h-auto md:h-[334px] p-6 rounded-[13px] border border-white/30 bg-white/10 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-y-6 h-full">
              <h3 className="text-white text-[12px] font-bold tracking-[2px] uppercase">STEP 02</h3>
              <div className="flex justify-start items-center">
                <div className="rounded-full p-3 h-[70px] w-[70px] flex items-center justify-center">
                  <Image
                    src={step2}
                    alt="Integrate SDK"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-3">
                <h3 className="text-white text-[18px] font-medium leading-[119%] capitalize">
                  Integrate SDK
                </h3>
                <p className="text-white text-[14px] font-normal leading-[150%]">
                  Select a fitting plan depending on the MAU or DAU of your mobile application. Integrate the SDK into your digital product. With a simple step like that, you are ready to launch a campaign anytime now!
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Step 3 */}
          <motion.div 
            className="w-full md:w-1/3 lg:w-[401px] h-auto md:h-[334px] p-6 rounded-[13px] border border-white/30 bg-white/10 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-y-6 h-full">
              <h3 className="text-white text-[12px] font-bold tracking-[2px] uppercase">STEP 03</h3>
              <div className="flex justify-start items-center">
                <div className="rounded-full p-3 h-[70px] w-[70px] flex items-center justify-center">
                  <Image
                    src={step3}
                    alt="Launch your first PIP Videos"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-3">
                <h3 className="text-white text-[18px] font-medium leading-[119%] capitalize">
                  Launch Your First {keyword}
                </h3>
                <p className="text-white text-[14px] font-normal leading-[150%]">
                  Publish {keyword} carousel or use in-app {keyword}! Follow these steps and launch {keyword} in your app without any engineering efforts!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
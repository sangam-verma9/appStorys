


// import React from 'react'
// import Image from 'next/image'
// import { Bricolage_Grotesque, Satisfy } from 'next/font/google';
// import security_whyus from "@/assets/security_whyus.png"
// import audience_whyus from "@/assets/audience_whyus.png"
// import powerfull_whyus from "@/assets/powerfull_whyus.png"
// import realtime_whyus from "@/assets/realtime_whyus.png"
// import tailored_whyus from "@/assets/tailored_whyus.png"
// import quick_intgration_whyus from "@/assets/quick_intgration_whyus.png"
// import { useRef } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";

// const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800'] });
// const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'] });

// const TiltedCard = ({ children, rotateAmplitude = 12, scaleOnHover = 1.05 }) => {
//   const ref = useRef(null);
//   const springConfig = {
//     damping: 30,
//     stiffness: 100,
//     mass: 2,
//   };

//   const rotateX = useSpring(0, springConfig);
//   const rotateY = useSpring(0, springConfig);
//   const scale = useSpring(1, springConfig);

//   function handleMouse(e) {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();

//     // Calculate mouse position relative to card center
//     const offsetX = e.clientX - rect.left - rect.width / 2;
//     const offsetY = e.clientY - rect.top - rect.height / 2;

//     // Calculate rotation based on mouse position
//     const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
//     const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

//     rotateX.set(rotationX);
//     rotateY.set(rotationY);
//   }

//   function handleMouseEnter() {
//     scale.set(scaleOnHover);
//   }

//   function handleMouseLeave() {
//     scale.set(1);
//     rotateX.set(0);
//     rotateY.set(0);
//   }

//   return (
//     <motion.div
//       ref={ref}
//       className="h-full w-full [perspective:1200px]"
//       onMouseMove={handleMouse}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <motion.div
//         className="h-full w-full rounded-3xl bg-white border border-[#DEDFE3] shadow-[2px_4px_38px_0px_rgba(0,0,0,0.07)] [transform-style:preserve-3d]"
//         style={{
//           rotateX,
//           rotateY,
//           scale,
//         }}
//       >
//         {children}
//       </motion.div>
//     </motion.div>
//   );
// };

// const Whyus = () => {
//     return (
//         <div className='w-full bg-[#FFF7F3]'>
//             <div className='sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[1200px] py-5 flex flex-col justify-center mx-auto'>
//                 <h3 className={`${satisfy.className} text-[#FD5F03] text-[26px] text-center`}>Why us</h3>
//                 <h1 className={`font-sf-pro text-[30px] md:text-[56px] font-medium capitalize text-center mb-2 leading-none`}>Advanced Features</h1>
//                 <div className='mx-auto'>
//                     <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-evenly'>
//                         <div className='h-[460px] w-[380px] scale-[0.9]'>
//                             <TiltedCard>
//                                 <div className="h-full w-full px-7 py-10">
//                                     <h3 className={`font-sf-pro font-medium card-whyus-heading pb-1 -mt-2 text-[23px] capitalize mb-2`}>Security #1 Priority</h3>
//                                     <div className='w-[100%] h-[60%] relative flex justify-center items-center mx-auto'>
//                                         <img src={security_whyus.src} alt='security' className="max-h-full" />
//                                     </div>
//                                     <br />
//                                     <p className={`font-sfpro text-[#737373] font-normal text-[16px] card-paragraph mt-1`}>SOC 2 Type 2 Certified by a leading auditor. AWS infrastructure in place with AES 256 encryption.</p>
//                                 </div>
//                             </TiltedCard>
//                         </div>

//                         <div className='h-[460px] w-[380px] scale-[0.9]'>
//                             <TiltedCard>
//                                 <div className="h-full w-full px-7 py-10">
//                                     <h3 className={`font-sf-pro font-medium card-whyus-heading pb-5 -mt-2 text-[23px] capitalize mb-5`}>Easy Audience segmentation</h3>
//                                     <div className='w-[100%] h-[50%] relative flex justify-center items-center mx-auto'>
//                                         <img src={audience_whyus.src} alt='audience' className="max-h-full" />
//                                     </div>
//                                     <br />
//                                     <p className={`font-sfpro text-[#737373] font-normal text-[16px] card-paragraph mt-5`}>Integrate with your CDP, let events flow and show campaigns accordingly.</p>
//                                 </div>
//                             </TiltedCard>
//                         </div>

//                         <div className='h-[460px] w-[380px] scale-[0.9]'>
//                             <TiltedCard>
//                                 <div className="h-full w-full px-7 py-10">
//                                     <h3 className={`font-sf-pro font-medium card-whyus-heading pb-5 -mt-2 text-[23px] capitalize mb-5`}>Real time Analysis</h3>
//                                     <div className='w-[100%] h-[50%] relative flex justify-center items-center mx-auto'>
//                                         <img src={realtime_whyus.src} alt='realtime' className="max-h-full" />
//                                     </div>
//                                     <br />
//                                     <p className={`font-sfpro text-[#737373] font-normal text-[16px] card-paragraph mt-5`}>Data starts flowing in real time once your campaign goes live. View, analyze and make data drive decisions.
//                                     </p>
//                                 </div>
//                             </TiltedCard>
//                         </div>

//                         <div className='h-[460px] w-[380px] scale-[0.9] lg:-mt-5'>
//                             <TiltedCard>
//                                 <div className="h-full w-full px-7 py-10">
//                                     <h3 className={`font-sf-pro font-medium card-whyus-heading pb-5 -mt-2 text-[23px] capitalize mb-5`}>Quick Integration</h3>
//                                     <div className='w-[100%] h-[50%] relative flex justify-center items-center mx-auto'>
//                                         <img src={quick_intgration_whyus.src} alt='quick integration' className="max-h-full" />
//                                     </div>
//                                     <br />
//                                     <p className={`font-sfpro text-[#737373] font-normal text-[16px] card-paragraph mt-5`}>Integrate our SDK (our team can help), test on a sandbox environment and take campaigns live
//                                     </p>
//                                 </div>
//                             </TiltedCard>
//                         </div>

//                         <div className='h-[460px] w-[380px] scale-[0.9] lg:-mt-5'>
//                             <TiltedCard>
//                                 <div className="h-full w-full px-7 py-10">
//                                     <h3 className={`font-sf-pro font-medium card-whyus-heading pb-5 -mt-2 text-[23px] capitalize mb-5`}>Tailored campaigns</h3>
//                                     <div className='w-[100%] h-[50%] relative flex justify-center items-center mx-auto'>
//                                         <img src={tailored_whyus.src} alt='tailored' className="max-h-full" />
//                                     </div>
//                                     <br />
//                                     <p className={`font-sfpro text-[#737373] font-normal text-[16px] card-paragraph mt-5`}>Show different campaigns to different users based on their attributes and conditions. Powerful segmentation.</p>
//                                 </div>
//                             </TiltedCard>
//                         </div>

//                         <div className='h-[460px] w-[380px] scale-[0.9] lg:-mt-5'>
//                             <TiltedCard>
//                                 <div className="h-full w-full px-7 py-10">
//                                     <h3 className={`font-sf-pro font-medium card-whyus-heading pb-5 -mt-2 text-[23px] capitalize mb-5`}>Powerful Dashboard</h3>
//                                     <div className='w-[100%] h-[50%] relative flex justify-center items-center mx-auto'>
//                                         <img src={powerfull_whyus.src} alt='powerful' className="max-h-full" />
//                                     </div>
//                                     <br />
//                                     <p className={`font-sfpro text-[#737373] font-normal text-[16px] card-paragraph mt-5`}>Super fast dashboard to create campaigns with deep controls to customize every style, frequency, condition, cohorts & more.</p>
//                                 </div>
//                             </TiltedCard>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Whyus


import React from 'react'
import Image from 'next/image'
import { Bricolage_Grotesque, Satisfy } from 'next/font/google';
import security_whyus from "@/assets/security_whyus.png"
import audience_whyus from "@/assets/audience_whyus.png"
import powerfull_whyus from "@/assets/powerfull_whyus.png"
import realtime_whyus from "@/assets/realtime_whyus.png"
import tailored_whyus from "@/assets/tailored_whyus.png"
import quick_intgration_whyus from "@/assets/quick_intgration_whyus.png"
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800'] });
const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'] });

const TiltedCard = ({ children, rotateAmplitude = 12, scaleOnHover = 1.05 }) => {
    const ref = useRef(null);
    const springConfig = {
        damping: 30,
        stiffness: 100,
        mass: 2,
    };

    const rotateX = useSpring(0, springConfig);
    const rotateY = useSpring(0, springConfig);
    const scale = useSpring(1, springConfig);

    function handleMouse(e) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        // Calculate mouse position relative to card center
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        // Calculate rotation based on mouse position
        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);
    }

    function handleMouseEnter() {
        scale.set(scaleOnHover);
    }

    function handleMouseLeave() {
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
    }

    return (
        <motion.div
            ref={ref}
            className="h-full w-full [perspective:1200px]"
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="h-full w-full rounded-3xl bg-white border border-[#DEDFE3] shadow-[2px_4px_38px_0px_rgba(0,0,0,0.07)] [transform-style:preserve-3d]"
                style={{
                    rotateX,
                    rotateY,
                    scale,
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

const Whyus = () => {
    return (
        <div className='w-full bg-[#FFF7F3]'>
            <div className='sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[1200px] py-5 flex flex-col justify-center mx-auto'>
                <h3 className={`${satisfy.className} text-[#FD5F03] text-[26px] text-center`}>Why us</h3>
                <h1 className={`font-sf-pro text-[30px] md:text-[56px] font-medium capitalize text-center mb-2 leading-none`}>Advanced Features</h1>
                <div className='mx-auto'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-evenly'>
                        <div className='h-[450px] w-[370px] scale-[0.9]'>
                            <TiltedCard>
                                <div className="h-full w-full px-7 py-10  rounded-2xl">
                                    <h3 className={`font-sf-pro font-medium card-whyus-heading pb-1 -mt-2 text-[23px] capitalize mb-2`}>Security #1 Priority</h3>
                                    <div className='w-[100%] h-[60%] relative flex justify-center items-center mx-auto'>
                                        <img src={security_whyus.src} alt='security' className="max-h-full" />
                                    </div>
                                    <br />
                                    <p className={`font-sfpro text-[#000000] font-normal text-[16px] card-paragraph mt-1`}>SOC 2 Type 2 Certified by a leading auditor. AWS infrastructure in place with AES 256 encryption.</p>
                                </div>
                            </TiltedCard>
                        </div>

                        <div className='h-[450px] w-[370px] scale-[0.9]'>
                            <TiltedCard>
                                <div className="h-full w-full px-7 py-10  rounded-2xl">
                                    <h3 className={`font-sf-pro font-medium card-whyus-heading pb-1 -mt-2 text-[23px] capitalize mb-2`}>Easy Audience segmentation</h3>
                                    <div className='w-[100%] h-[60%] relative flex justify-center items-center mx-auto'>
                                        <img src={audience_whyus.src} alt='audience' className="max-h-full" />
                                    </div>
                                    <br />
                                    <p className={`font-sfpro text-[#000000] font-normal text-[16px] card-paragraph mt-1`}>Integrate with your CDP, let events flow and show campaigns accordingly.</p>
                                </div>
                            </TiltedCard>
                        </div>

                        <div className='h-[450px] w-[370px] scale-[0.9]'>
                            <TiltedCard>
                                <div className="h-full w-full px-7 py-10  rounded-2xl">
                                    <h3 className={`font-sf-pro font-medium card-whyus-heading pb-1 -mt-2 text-[23px] capitalize mb-2`}>Real time Analysis</h3>
                                    <div className='w-[100%] h-[60%] relative flex justify-center items-center mx-auto'>
                                        <img src={realtime_whyus.src} alt='realtime' className="max-h-full" />
                                    </div>
                                    <br />
                                    <p className={`font-sfpro text-[#000000] font-normal text-[16px] card-paragraph mt-1`}>Data starts flowing in real time once your campaign goes live. View, analyze and make data drive decisions.
                                    </p>
                                </div>
                            </TiltedCard>
                        </div>

                        <div className='h-[450px] w-[370px] scale-[0.9] lg:-mt-5'>
                            <TiltedCard>
                                <div className="h-full w-full px-7 py-10  rounded-2xl">
                                    <h3 className={`font-sf-pro font-medium card-whyus-heading pb-1 -mt-2 text-[23px] capitalize mb-2`}>Quick Integration</h3>
                                    <div className='w-[100%] h-[60%] relative flex justify-center items-center mx-auto'>
                                        <img src={quick_intgration_whyus.src} alt='quick integration' className="max-h-full" />
                                    </div>
                                    <br />
                                    <p className={`font-sfpro text-[#000000] font-normal text-[16px] card-paragraph mt-1`}>Integrate our SDK (our team can help), test on a sandbox environment and take campaigns live
                                    </p>
                                </div>
                            </TiltedCard>
                        </div>

                        <div className='h-[450px] w-[370px] scale-[0.9] lg:-mt-5'>
                            <TiltedCard>
                                <div className="h-full w-full px-7 py-10 rounded-2xl">
                                    <h3 className={`font-sf-pro font-medium card-whyus-heading pb-1 -mt-2 text-[23px] capitalize mb-2`}>Tailored campaigns</h3>
                                    <div className='w-[100%] h-[60%] relative flex justify-center items-center mx-auto'>
                                        <img src={tailored_whyus.src} alt='tailored' className="max-h-full" />
                                    </div>
                                    <br />
                                    <p className={`font-sfpro text-[#000000] font-normal text-[16px] card-paragraph mt-1`}>Show different campaigns to different users based on their attributes and conditions. Powerful segmentation.</p>
                                </div>
                            </TiltedCard>
                        </div>

                        <div className='h-[450px] w-[370px] scale-[0.9] lg:-mt-5'>
                            <TiltedCard>
                                <div className="h-full w-full px-7 py-10  rounded-2xl">
                                    <h3 className={`font-sf-pro font-medium card-whyus-heading pb-1 -mt-2 text-[23px] capitalize mb-2`}>Powerful Dashboard</h3>
                                    <div className='w-[100%] h-[60%] relative flex justify-center items-center mx-auto'>
                                        <img src={powerfull_whyus.src} alt='powerful' className="max-h-full" />
                                    </div>
                                    <br />
                                    <p className={`font-sfpro text-[#000000] font-normal text-[16px] card-paragraph mt-1`}>Super fast dashboard to create campaigns with deep controls to customize every style, frequency, condition, cohorts & more.</p>
                                </div>
                            </TiltedCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whyus
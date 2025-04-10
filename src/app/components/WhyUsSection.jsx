"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from "framer-motion";
import Why_Us_Card_New from './WhyUsCardNew';
import whyUs1 from '../../assets/why_us_1.png';
import whyUs2 from '../../assets/why_us_2.png';
import whyUs3 from '../../assets/why_us_3.png';
import whyUs4 from '../../assets/why_us_4.png';
import whyUs5 from '../../assets/why_us_5.png';
import whyUs6 from '../../assets/why_us_6.png';

const WhyUsSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true }); // only animate once when it comes into view

    const cardVariantsLeft = {
        initial: { opacity: 0, x: '100vw'},
        animate: { opacity: 1, x: 0, transition: { duration: 2 } }
    };

    const cardVariantsRight = {
        initial: { opacity: 0, x: '-100vw' },
        animate: { opacity: 1, x: 0, transition: { duration: 2 } }
    };

    return (
        <section className='flex justify-start items-start w-full min-h-[100vh]'>
            <div className='flex flex-col justify-start items-center min-h-[100vh] w-full bg-[#fff] gap-y-[12px] px-[80px] max-[435px]:px-[25px] py-[4%]'>
                <h1 className='text-[0.8rem] font-bold font-InstrumentSans text-[#D64830] leading-[119%] tracking-[2px]'>OUR UNIQUE SELLING POINT</h1>
                <h1 className='text-[55px] leading-[102%] font-InstrumentSans font-semibold'>How We Supercharge Your App</h1>
                <div className='flex justify-center items-center flex-wrap mt-[37.31px] gap-x-[20px] gap-y-[20px] w-full'>
                    {/* First 3 Cards - move from right to left */}
                    <motion.div
                        className="card"
                        variants={cardVariantsLeft}
                        initial="initial"
                        animate="animate"
                    >
                        <Why_Us_Card_New
                            image={whyUs1}
                            heading="SECURITY #1 PRIORITY"
                            text="With AppStorys, deliver cutting-edge user experiences with top-notch security. AppStorys lightweight, secure SDK helps your app grow while protecting user data with end-to-end encryption. No data is stored on AppStorys servers, and all are hosted on AWS."
                            color="f4f6fe"
                        />
                    </motion.div>
                    <motion.div
                        className="card"
                        variants={cardVariantsLeft}
                        initial="initial"
                        animate="animate"
                    >
                        <Why_Us_Card_New
                            image={whyUs2}
                            heading="QUICK INTEGRATION"
                            text="Boost your app's user experience in minutes! With AppStorys SDK, simply install, configure, and go live—no heavy code or complex setup needed. Quick, easy, and live in under 30 minutes!"
                            color="f4f6fe"
                        />
                    </motion.div>
                    <motion.div
                        className="card"
                        variants={cardVariantsLeft}
                        initial="initial"
                        animate="animate"
                    >
                        <Why_Us_Card_New
                            image={whyUs3}
                            heading="REAL TIME ANALYTICS"
                            text="With AppStorys, track user interactions with stories, floaters, and banners in real-time. Instantly see clicks, views, and engagement metrics with AppStorys Dashboard — no waiting for reports, just immediate insights when you need them."
                            color="f4f6fe"
                        />
                    </motion.div>

                    {/* Next 3 Cards - move from left to right */}
                    <motion.div
                        className="card"
                        variants={cardVariantsRight}
                        initial="initial"
                        animate="animate"
                    >
                        <Why_Us_Card_New
                            image={whyUs4}
                            heading="EASY AUDIENCE SEGMENTATON"
                            text="Target users with precision using AppStorys! Seamlessly integrate with CleverTap or MoEngage for advanced segmentation, or upload a CSV for manual targeting. With AppStorys deliver personalized content to the right audience, effortlessly."
                            color="f4f6fe"
                        />
                    </motion.div>
                    <motion.div
                        className="card"
                        variants={cardVariantsRight}
                        initial="initial"
                        animate="animate"
                    >
                        <Why_Us_Card_New
                            image={whyUs5}
                            heading="POWERFUL DASHBOARD"
                            text="Introducing the AppStorys dashboard—your control center for managing stories, floaters, and banners. With AppStorys monitor engagement, tweak content, segment users, and get real-time insights—all in one place for complete app control."
                            color="f4f6fe"
                        />
                    </motion.div>
                    <motion.div
                        className="card"
                        variants={cardVariantsRight}
                        initial="initial"
                        animate="animate"
                    >
                        <Why_Us_Card_New
                            image={whyUs6}
                            heading="TAILORED CAMPAIGNS"
                            text="With AppStorys, customize campaigns for any screen—mobile, tablet, or desktop. Tailor stories, floaters, and banners for a seamless user experience, ensuring targeted engagement on every device."
                            color="f4f6fe"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
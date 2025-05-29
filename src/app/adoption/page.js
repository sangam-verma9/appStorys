"use client";

import React from 'react'
import adoption1 from '@/assets/adoption1.png'
import { Satisfy } from "next/font/google";
import Link from 'next/link';
import key_points from '@/assets/key_points.png'
import Integrations from '../components/Integrations/Integrations';
import TestimonialsSection from '../components/Testimonials/Testimonials';
import BlogSection from '../components/BlogSection';
import FeatureTicker from '../components/FeatureTicker';

const satisfy = Satisfy({
    subsets: ["latin"],
    weight: "400",
});

const Adoption = () => {
    return (
        <div className='lg:mb-[80px]'>
            <div className='w-full bg-gradient-to-b from-[#FFEADD] to-[#fff]'>
                <div className='grid lg:grid-cols-2 sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[1300px] px-10 py-8 mx-auto items-center'>
                    <div className='mb-10 lg:mb-0'>
                        <img src={adoption1.src} alt="" />
                    </div>
                    <div className='flex flex-col lg:pl-[80px]'>
                        <h3 className={`${satisfy.className} text-[#FD5F03] text-[20px] `}>Boost Feature Adoption with AppStorys</h3>
                        <p className='text-[50px] font-bold leading-none my-1'>Turn passive users into power users.</p>
                        <p className='lg:pr-[200px] mt-5'>Drive meaningful product engagement by guiding users to discover and adopt high-impact features—at the right moment.</p>
                        <Link className='flex justify-center cursor-pointer items-center py-[14px] px-[20px]  gap-x-[8px] bg-[#FD5F03] text-white rounded-[25px] mt-[25px] text-[12px] font-semibold font-InstrumentSans tracking-[1px] lg:w-[35%]'
                            href={"/bookademo"}>
                            <div className='h-[5px] w-[5px] bg-white rounded-full'></div>
                            Request A Demo
                        </Link>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 bg-[#fff] sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[1300px] px-10 py-8 mx-auto items-center'>
                <div className='flex flex-col mb-10 lg:mb-0'>
                    <h2 className='mb-4 font-bold text-[30px]'>Key Features</h2>
                    <div className='flex flex-col pr-[50px] gap-y-5'>
                        <div className='flex'>
                            <img src={key_points.src} alt="point" className='w-[20px] h-[20px] mr-4 mt-2' />
                            <p><span className='font-bold'>Contextual In-App Messages</span><br />Surface tooltips, nudges, and spotlights to promote features exactly when users need them.</p>
                        </div>
                        <div className='flex'>
                            <img src={key_points.src} alt="point" className='w-[20px] h-[20px] mr-4 mt-2' />
                            <p><span className='font-bold'>Behavior-Based Targeting</span><br />Trigger feature announcements and walkthroughs based on user actions or inactivity.</p>
                        </div>
                        <div className='flex'>
                            <img src={key_points.src} alt="point" className='w-[20px] h-[20px] mr-4 mt-2' />
                            <p><span className='font-bold'>Dynamic User Segments</span><br />Create segments based on usage patterns, cohorts, or custom properties.</p>
                        </div>
                        <div className='flex'>
                            <img src={key_points.src} alt="point" className='w-[20px] h-[20px] mr-4 mt-2' />
                            <p><span className='font-bold'>Multichannel Support</span><br />Reinforce feature education across web, mobile, and email—all from one dashboard.</p>
                        </div>
                        <div className='flex'>
                            <img src={key_points.src} alt="point" className='w-[20px] h-[20px] mr-4 mt-2' />
                            <p><span className='font-bold'>Analytics & Insights</span><br />Understand which features are being discovered and which need more visibility.</p>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <section className="w-full">
                <div className=" mx-auto">
                    <FeatureTicker
                        number1="4x"
                        number2="30%"
                        number3="25%"
                        heading1="increase feature engagement"
                        heading2="Increase in users returning"
                        heading3="higher completion rate"
                    />
                </div>
            </section>
            <Integrations />
            <TestimonialsSection />
            <BlogSection />
        </div>
    )
}

export default Adoption
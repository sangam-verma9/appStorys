"use client";

import React, { useState } from 'react'
import adoption1 from '@/assets/adoption1.png'
import adoption2 from '@/assets/adoption2.png'
import { Satisfy } from "next/font/google";
import Link from 'next/link';
import key_points from '@/assets/key_points.png'
import Integrations from '../components/Integrations/Integrations';
import TestimonialsSection from '../components/Testimonials/Testimonials';
import BlogSection from '../components/BlogSection';
import FeatureTicker from '../components/FeatureTicker';
import dropdown4 from '@/assets/adoption-spotlight.png'
import dropdown2 from '@/assets/adoption-pip.png'
import dropdown3 from '@/assets/adoption-reel.png'
import dropdown1 from '@/assets/adoption-widget.png'
import { FaAngleDown } from "react-icons/fa6";
const satisfy = Satisfy({
    subsets: ["latin"],
    weight: "400",
});

const Adoption = () => {
    const [openSection, setOpenSection] = useState('Spotlight');

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? '' : section);
    };
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
                <div className='flex justify-center items-center'>
                    <img src={adoption2.src} alt="adoption2" className='max-h-[500px] mt-3' />
                </div>
            </div>

            <div className='bg-[#fff] sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[1300px] px-10 py-16 mx-auto'>
                <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
                    {/* Left content */}
                    <div className='order-1'>
                        <h3 className={`${satisfy.className} text-[#FD5F03] text-[22px] md:text-[26px] `}>Our Services</h3>
                        <h2 className='text-[40px] lg:text-[48px] font-bold leading-tight mb-6'>
                            Capture Insights While Users Engage
                        </h2>
                        <p className='mb-8 text-[16px] leading-relaxed'>
                            Gather real-time insights through contextual surveys and micro-feedback, capturing what users think, need, and struggle with—right when it matters most.
                        </p>

                        <div className='space-y-4'>
                            <div className='border-b border-gray-200 pb-4'>
                                <div
                                    className='flex justify-between items-center cursor-pointer py-2'
                                    onClick={() => toggleSection('Spotlight')}
                                >
                                    <h3 className='text-[24px] font-medium '>Spotlight</h3>
                                    <div className={`transform transition-transform duration-200 ${openSection === 'Spotlight' ? 'rotate-180' : ''}`}>
                                        <FaAngleDown />
                                    </div>
                                </div>
                                {openSection === 'Spotlight' && (
                                    <div className='mt-3 '>
                                        <p className='mb-2'> Highlight key updates or features with in-product spotlights—right when users need them.</p>
                                        <Link href={"/spotlights"} className='text-[#FD5F03] cursor-pointer hover:underline text-sm'>Read more</Link>
                                    </div>
                                )}
                            </div>

                            <div className='border-b border-gray-200 pb-4'>
                                <div
                                    className='flex justify-between items-center cursor-pointer py-2'
                                    onClick={() => toggleSection('Pip')}
                                >
                                    <h3 className='text-[24px] font-medium '>PiP Video</h3>
                                    <div className={`transform transition-transform duration-200 ${openSection === 'Pip' ? 'rotate-180' : ''}`}>
                                        <FaAngleDown />
                                    </div>
                                </div>
                                {openSection === 'Pip' && (
                                    <div className='mt-3 '>
                                        <p className='mb-2'> Keep guidance visible and users on track with always-on, picture-in-picture help.</p>
                                        <Link href={"/pipvideos"} className='text-[#FD5F03] cursor-pointer hover:underline text-sm'>Read more</Link>
                                    </div>
                                )}
                            </div>

                            <div className='border-b border-gray-200 pb-4'>
                                <div
                                    className='flex justify-between items-center cursor-pointer py-2'
                                    onClick={() => toggleSection('Reel')}
                                >
                                    <h3 className='text-[24px] font-medium '>Reel</h3>
                                    <div className={`transform transition-transform duration-200 ${openSection === 'Reel' ? 'rotate-180' : ''}`}>
                                        <FaAngleDown />
                                    </div>
                                </div>
                                {openSection === 'Reel' && (
                                    <div className='mt-3 '>
                                        <p className='mb-2'>Deliver bite-sized, scrollable content to educate and engage—without breaking the flow.</p>
                                        <Link href={"/reels"} className='text-[#FD5F03] cursor-pointer hover:underline text-sm'>Read more</Link>
                                    </div>
                                )}
                            </div>

                            <div className=' pb-4'>
                                <div
                                    className='flex justify-between items-center cursor-pointer py-2'
                                    onClick={() => toggleSection('Widgets')}
                                >
                                    <h3 className='text-[24px] font-medium '>Widgets</h3>
                                    <div className={`transform transition-transform duration-200 ${openSection === 'Widgets' ? 'rotate-180' : ''}`}>
                                        <FaAngleDown />
                                    </div>
                                </div>
                                {openSection === 'Widgets' && (
                                    <div className='mt-3 '>
                                        <p className='mb-2'> Add interactive widgets to your product to inform, engage, and collect insights in context.</p>
                                        <Link href={"/widgets"} className='text-[#FD5F03] cursor-pointer hover:underline text-sm'>Read more</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right image */}
                    <div className='order-2 flex justify-center lg:pl-[80px]'>
                        <div className='w-full max-w-[400px] lg:max-w-none'>
                            {
                                openSection === 'Spotlight' && (
                                    <img
                                        src={dropdown1.src}
                                        alt="Mobile app feedback interface"
                                        className='w-full h-auto object-contain'
                                    />
                                )
                            }
                            {
                                openSection === 'Pip' && (
                                    <img
                                        src={dropdown2.src}
                                        alt="Mobile app feedback interface"
                                        className='w-full h-auto object-contain'
                                    />
                                )
                            }
                            {
                                openSection === 'Reel' && (
                                    <img
                                        src={dropdown3.src}
                                        alt="Mobile app feedback interface"
                                        className='w-full h-auto object-contain'
                                    />
                                )
                            }
                            {
                                openSection === 'Widgets' && (
                                    <img
                                        src={dropdown4.src}
                                        alt="Mobile app feedback interface"
                                        className='w-full h-auto object-contain'
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Integrations />
            <TestimonialsSection />
            <BlogSection />
        </div>
    )
}

export default Adoption
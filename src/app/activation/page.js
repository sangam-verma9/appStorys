"use client";

import React, { useState } from 'react'
import activation1 from '@/assets/activation1.png'
import activation2 from '@/assets/activation2.png'
import { Satisfy } from "next/font/google";
import Link from 'next/link';
import key_points from '@/assets/key_points.png'
import Integrations from '../components/Integrations/Integrations';
import TestimonialsSection from '../components/Testimonials/Testimonials';
import BlogSection from '../components/BlogSection';
import FeatureTicker from '../components/FeatureTicker';
import dropdown1 from '@/assets/activation-tooltip.png'
import dropdown2 from '@/assets/activation-modal.png'
import dropdown3 from '@/assets/activation-banner.png'
import dropdown4 from '@/assets/activation-coachmark.png'
import dropdown5 from '@/assets/activation-floater.png'
import { FaAngleDown } from "react-icons/fa6";
const satisfy = Satisfy({
    subsets: ["latin"],
    weight: "400",
});

const Activation = () => {
    const [openSection, setOpenSection] = useState('Tooltip');

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? '' : section);
    };
    return (
        <div className='lg:mb-[80px]'>
            <div className='w-full bg-gradient-to-b from-[#FFEADD] to-[#fff]'>
                <div className='grid lg:grid-cols-2 sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[1300px] px-10 py-8 mx-auto items-center'>
                    <div className='mb-10 lg:mb-0'>
                        <img src={activation1.src} alt="" />
                    </div>
                    <div className='flex flex-col lg:pl-[80px]'>
                        <h3 className={`${satisfy.className} text-[#FD5F03] text-[20px] `}>Accelerate User Activation with AppStorys</h3>
                        <p className='text-[50px] font-bold leading-none my-1'>Empower users to discover value faster.</p>
                        <p className='lg:pr-[200px] mt-5'>AppStorys enables product and growth teams to craft intuitive onboarding experiences that drive user engagement from the very first session.</p>
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
                        number1="18%"
                        number2="22%"
                        number3="35%"
                        heading1="faster time-to-value"
                        heading2="boost user setup completion"
                        heading3="increase activation milestones"
                    />
                </div>
            </section>

            <div className='grid lg:grid-cols-2 bg-[#fff] sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[1300px] px-10 py-8 mx-auto items-center'>
                <div className='flex flex-col mb-10 lg:mb-0'>
                    <h2 className='mb-4 font-bold text-[30px]'>Key Features</h2>
                    <div className='flex flex-col pr-[50px] gap-y-5'>
                        <div className='flex'>
                            <img src={key_points.src} alt="point" className='w-[20px] h-[20px] mr-4 mt-2' />
                            <p><span className='font-bold'>No-Code Onboarding Builder</span><br />Design and launch onboarding flows without engineering dependencies.</p>
                        </div>
                        <div className='flex'>
                            <img src={key_points.src} alt="point" className='w-[20px] h-[20px] mr-4 mt-2' />
                            <p><span className='font-bold'>Interactive Walkthroughs</span><br />Guide users through key features using contextual tooltips and product tours.</p>
                        </div>
                        <div className='flex'>
                            <img src={key_points.src} alt="point" className='w-[20px] h-[20px] mr-4 mt-2' />
                            <p><span className='font-bold'>Smart Segmentation</span><br />Target the right users based on behavior, lifecycle stage, and actions.</p>
                        </div>
                        <div className='flex'>
                            <img src={key_points.src} alt="point" className='w-[20px] h-[20px] mr-4 mt-2' />
                            <p><span className='font-bold'>A/B Testing</span><br />Experiment with different onboarding paths to discover what converts best.</p>
                        </div>
                        <div className='flex'>
                            <img src={key_points.src} alt="point" className='w-[20px] h-[20px] mr-4 mt-2' />
                            <p><span className='font-bold'>Automated Journeys</span><br />Create personalized, rule-based flows to nurture engagement over time.</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={activation2.src} alt="" className='max-h-[500px] mt-3' />
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
                                    onClick={() => toggleSection('Tooltip')}
                                >
                                    <h3 className='text-[24px] font-medium '>Tooltip</h3>
                                    <div className={`transform transition-transform duration-200 ${openSection === 'Tooltip' ? 'rotate-180' : ''}`}>
                                        <FaAngleDown />
                                    </div>
                                </div>
                                {openSection === 'Tooltip' && (
                                    <div className='mt-3 '>
                                        <p className='mb-2'> Surface helpful tips at the right moment to guide user actions effortlessly.</p>
                                        <Link href={"/tooltips"} className='text-[#FD5F03] cursor-pointer hover:underline text-sm'>Read more</Link>
                                    </div>
                                )}
                            </div>

                            <div className='border-b border-gray-200 pb-4'>
                                <div
                                    className='flex justify-between items-center cursor-pointer py-2'
                                    onClick={() => toggleSection('Modal')}
                                >
                                    <h3 className='text-[24px] font-medium '>Modal</h3>
                                    <div className={`transform transition-transform duration-200 ${openSection === 'Modal' ? 'rotate-180' : ''}`}>
                                        <FaAngleDown />
                                    </div>
                                </div>
                                {openSection === 'Modal' && (
                                    <div className='mt-3 '>
                                        <p className='mb-2'>Grab user attention and drive key actions with focused, interruptive modals.</p>
                                        <Link href={"/modals"} className='text-[#FD5F03] cursor-pointer hover:underline text-sm'>Read more</Link>
                                    </div>
                                )}
                            </div>

                            <div className=' border-b border-gray-200 pb-4'>
                                <div
                                    className='flex justify-between items-center cursor-pointer py-2'
                                    onClick={() => toggleSection('Banner')}
                                >
                                    <h3 className='text-[24px] font-medium '>Banner</h3>
                                    <div className={`transform transition-transform duration-200 ${openSection === 'Banner' ? 'rotate-180' : ''}`}>
                                        <FaAngleDown />
                                    </div>
                                </div>
                                {openSection === 'Banner' && (
                                    <div className='mt-3 '>
                                        <p className='mb-2'>Share timely updates or alerts seamlessly with in-product banners.</p>
                                        <Link href={"/banners"} className='text-[#FD5F03] cursor-pointer hover:underline text-sm'>Read more</Link>
                                    </div>
                                )}
                            </div>
                            <div className=' border-b border-gray-200 pb-4'>
                                <div
                                    className='flex justify-between items-center cursor-pointer py-2'
                                    onClick={() => toggleSection('Coachmarks')}
                                >
                                    <h3 className='text-[24px] font-medium '>Coachmarks</h3>
                                    <div className={`transform transition-transform duration-200 ${openSection === 'Coachmarks' ? 'rotate-180' : ''}`}>
                                        <FaAngleDown />
                                    </div>
                                </div>
                                {openSection === 'Coachmarks' && (
                                    <div className='mt-3 '>
                                        <p className='mb-2'>Walk users through key flows with step-by-step, contextual coachmarks.</p>
                                        <Link href={"/coachmarks"} className='text-[#FD5F03] cursor-pointer hover:underline text-sm'>Read more</Link>
                                    </div>
                                )}
                            </div>
                            <div className=' pb-4'>
                                <div
                                    className='flex justify-between items-center cursor-pointer py-2'
                                    onClick={() => toggleSection('Floater')}
                                >
                                    <h3 className='text-[24px] font-medium '>Floater</h3>
                                    <div className={`transform transition-transform duration-200 ${openSection === 'Floater' ? 'rotate-180' : ''}`}>
                                        <FaAngleDown />
                                    </div>
                                </div>
                                {openSection === 'Floater' && (
                                    <div className='mt-3 '>
                                        <p className='mb-2'> Deliver lightweight messages that float in context—without disrupting the journey.</p>
                                        <Link href={"/floaters"} className='text-[#FD5F03] cursor-pointer hover:underline text-sm'>Read more</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right image */}
                    <div className='order-2 flex justify-center lg:pl-[80px]'>
                        <div className='w-full max-w-[400px] lg:max-w-none'>
                            {
                                openSection === 'Tooltip' && (
                                    <img
                                        src={dropdown1.src}
                                        alt="Mobile app feedback interface"
                                        className='w-full h-auto object-contain'
                                    />
                                )
                            }
                            {
                                openSection === 'Modal' && (
                                    <img
                                        src={dropdown2.src}
                                        alt="Mobile app feedback interface"
                                        className='w-full h-auto object-contain'
                                    />
                                )
                            }
                            {
                                openSection === 'Banner' && (
                                    <img
                                        src={dropdown3.src}
                                        alt="Mobile app feedback interface"
                                        className='w-full h-auto object-contain'
                                    />
                                )
                            }
                            {
                                openSection === 'Coachmarks' && (
                                    <img
                                        src={dropdown4.src}
                                        alt="Mobile app feedback interface"
                                        className='w-full h-auto object-contain'
                                    />
                                )
                            }
                            {
                                openSection === 'Floater' && (
                                    <img
                                        src={dropdown5.src}
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

export default Activation
"use client";

import React, { useState } from 'react'
import feedback1 from '@/assets/feedback1.png'
import feedback2 from '@/assets/feedback2.png'
import dropdown1 from '@/assets/feedback-csat.png'
import dropdown2 from '@/assets/feedback-survey.png'
import dropdown3 from '@/assets/feedback-quiz.png'
import { Satisfy } from "next/font/google";
import Link from 'next/link';
import key_points from '@/assets/key_points.png'
import { FaAngleDown } from "react-icons/fa6";
import TestimonialsSection from '../components/Testimonials/Testimonials';
import Integrations from '../components/Integrations/Integrations';
import BlogSection from '../components/BlogSection';
import FeatureTicker from '../components/FeatureTicker';

const satisfy = Satisfy({
    subsets: ["latin"],
    weight: "400",
});

const Feedback = () => {
    const [openSection, setOpenSection] = useState('CSAT');

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? '' : section);
    };

    return (
        <div className='lg:mb-[80px]'>
            <div className='w-full bg-gradient-to-b from-[#FFEADD] to-[#fff]'>
                <div className='grid lg:grid-cols-2 sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[1300px] px-10 py-8 mx-auto items-center'>
                    <div className='mb-10 lg:mb-0'>
                        <img src={feedback1.src} alt="" />
                    </div>
                    <div className='flex flex-col lg:pl-[80px]'>
                        <h3 className={`${satisfy.className} text-[#FD5F03] text-[20px] `}>Collect Actionable Feedback with AppStorys</h3>
                        <p className='text-[50px] font-bold leading-none my-1'>Understand user needs while they're using your product.</p>
                        <p className='lg:pr-[200px] mt-5'>Use contextual, in-product surveys and micro-feedback to learn what your users think, want, and struggle with—when it matters most.</p>
                        <Link className='flex justify-center cursor-pointer items-center py-[14px] px-[20px]  gap-x-[8px] bg-[#FD5F03] text-white rounded-[25px] mt-[25px] text-[12px] font-semibold font-InstrumentSans tracking-[1px] lg:w-[35%]'
                            href={"/bookademo"}>
                            <div className='h-[5px] w-[5px] bg-white rounded-full '></div>
                            Request A Demo
                        </Link>
                    </div>
                </div>
            </div>

            <section className="w-full">
                <div className=" mx-auto">
                    <FeatureTicker
                        number1="5x"
                        number2="40%"
                        number3="28%"
                        heading1="more feedback submisstions"
                        heading2="increase actionable Insights"
                        heading3="high response rate"
                    />
                </div>
            </section>

            <div className='grid lg:grid-cols-2 bg-[#fff] sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[1300px] px-10 py-8 mx-auto items-center'>
                <div className='flex flex-col mb-10 lg:mb-0'>
                    <h2 className='mb-4 font-bold text-[30px]'>Key Features</h2>
                    <div className='flex flex-col pr-[50px] gap-y-5'>
                        <div className='flex'>
                            <img src={key_points.src} alt="point" className='w-[20px] h-[20px] mr-4 mt-2' />
                            <p><span className='font-bold'>In-App Surveys</span><br />Launch quick polls, NPS, CSAT, or open-text surveys without interrupting the user experience.</p>
                        </div>
                        <div className='flex'>
                            <img src={key_points.src} alt="point" className='w-[20px] h-[20px] mr-4 mt-2' />
                            <p><span className='font-bold'>Targeted Feedback Prompts</span><br />Ask the right users at the right time based on behavior, feature usage, or journey stage.</p>
                        </div>
                        <div className='flex'>
                            <img src={key_points.src} alt="point" className='w-[20px] h-[20px] mr-4 mt-2' />
                            <p><span className='font-bold'>No-Code Survey Builder</span><br />Design and deploy custom surveys in minutes using a visual editor.</p>
                        </div>
                        <div className='flex'>
                            <img src={key_points.src} alt="point" className='w-[20px] h-[20px] mr-4 mt-2' />
                            <p><span className='font-bold'>Analytics Dashboard</span><br />Visualize trends, filter responses, and turn raw feedback into actionable insights.</p>
                        </div>
                        <div className='flex'>
                            <img src={key_points.src} alt="point" className='w-[20px] h-[20px] mr-4 mt-2' />
                            <p><span className='font-bold'>Feedback-to-Action Workflows</span><br />Trigger follow-up journeys or team alerts based on survey responses.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={feedback2.src} alt="feedback2 image" className='lg:pl-[80px]' />
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
                            {/* CSAT Section */}
                            <div className='border-b border-gray-200 pb-4'>
                                <div
                                    className='flex justify-between items-center cursor-pointer py-2'
                                    onClick={() => toggleSection('CSAT')}
                                >
                                    <h3 className='text-[24px] font-medium '>CSAT</h3>
                                    <div className={`transform transition-transform duration-200 ${openSection === 'CSAT' ? 'rotate-180' : ''}`}>
                                        <FaAngleDown />
                                    </div>
                                </div>
                                {openSection === 'CSAT' && (
                                    <div className='mt-3 '>
                                        <p className='mb-2'>Capture real-time CSAT and trigger alerts or journeys to close the loop.</p>
                                        <Link href={"/csats"} className='text-[#FD5F03] cursor-pointer hover:underline text-sm'>Read more</Link>
                                    </div>
                                )}
                            </div>

                            {/* Survey Section */}
                            <div className='border-b border-gray-200 pb-4'>
                                <div
                                    className='flex justify-between items-center cursor-pointer py-2'
                                    onClick={() => toggleSection('Survey')}
                                >
                                    <h3 className='text-[24px] font-medium '>Survey</h3>
                                    <div className={`transform transition-transform duration-200 ${openSection === 'Survey' ? 'rotate-180' : ''}`}>
                                        <FaAngleDown />
                                    </div>
                                </div>
                                {openSection === 'Survey' && (
                                    <div className='mt-3 '>
                                        <p className='mb-2'>Act on feedback with timely, in-product surveys</p>
                                        <Link href={"/surveys"} className='text-[#FD5F03] cursor-pointer hover:underline text-sm'>Read more</Link>
                                    </div>
                                )}
                            </div>

                            {/* Quizzes Section */}
                            <div className=' pb-4'>
                                <div
                                    className='flex justify-between items-center cursor-pointer py-2'
                                    onClick={() => toggleSection('Quizzes')}
                                >
                                    <h3 className='text-[24px] font-medium '>Quizzes</h3>
                                    <div className={`transform transition-transform duration-200 ${openSection === 'Quizzes' ? 'rotate-180' : ''}`}>
                                        <FaAngleDown />
                                    </div>
                                </div>
                                {openSection === 'Quizzes' && (
                                    <div className='mt-3 '>
                                        <p className='mb-2'>Test knowledge in real time with in-product quizzes</p>
                                        <Link href={"/quizzes"} className='text-[#FD5F03] cursor-pointer hover:underline text-sm'>Read more</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right image */}
                    <div className='order-2 flex justify-center lg:pl-[80px]'>
                        <div className='w-full max-w-[400px] lg:max-w-none'>
                            {
                                openSection === 'CSAT' && (
                                    <img
                                        src={dropdown1.src}
                                        alt="Mobile app feedback interface"
                                        className='w-full h-auto object-contain'
                                    />
                                )
                            }
                            {
                                openSection === 'Survey' && (
                                    <img
                                        src={dropdown2.src}
                                        alt="Mobile app feedback interface"
                                        className='w-full h-auto object-contain'
                                    />
                                )
                            }
                            {
                                openSection === 'Quizzes' && (
                                    <img
                                        src={dropdown3.src}
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

export default Feedback
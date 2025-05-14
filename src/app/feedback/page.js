"use client";

import React from 'react'
import feedback1 from '@/assets/feedback1.png'
import feedback2 from '@/assets/feedback2.png'
import { Satisfy } from "next/font/google";
import Link from 'next/link';
import key_points from '@/assets/key_points.png'

const satisfy = Satisfy({
    subsets: ["latin"],
    weight: "400",
});

const Feedback = () => {
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
                        <Link className='flex justify-center cursor-pointer items-center py-[14px] px-[20px]  gap-x-[8px] bg-[#FD5F03] text-white rounded-[25px] mt-[25px] text-[10px] font-semibold font-InstrumentSans tracking-[1px] lg:w-[35%]'
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
                    <div className='flex flex-col pr-[50px]'>
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
        </div>
    )
}

export default Feedback
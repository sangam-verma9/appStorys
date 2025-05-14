"use client";

import React from 'react'
import feedback1 from '@/assets/feedback1.png'
import feedback2 from '@/assets/feedback2.png'
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({
    subsets: ["latin"],
    weight: "400",
});

const Feedback = () => {
    return (
        <div className='w-full bg-gradient-to-b from-[#FFEADD] to-[#fff]'>
            <div className='grid lg:grid-cols-2 sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[1300px] px-10 py-8 mx-auto'>
                <div>
                    <img src={feedback1.src} alt="" />
                </div>
                <div>
                    <h3 className={`${satisfy.className} text-[#FD5F03]`}>Collect Actionable Feedback with AppStorys</h3>
                    <h1 className='text-[50px] '>Understand user needs while they're using your product.</h1>
                    <p>Use contextual, in-product surveys and micro-feedback to learn what your users think, want, and struggle with—when it matters most.</p>
                </div>
            </div>
        </div>
    )
}

export default Feedback
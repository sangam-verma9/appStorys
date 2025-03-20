import React from 'react'
import Image from 'next/image'
import { Inter, Bricolage_Grotesque, Satisfy } from 'next/font/google';
import security_whyus from "@/assets/security_whyus.png"
import audience_whyus from "@/assets/audience_whyus.png"
import powerfull_whyus from "@/assets/powerfull_whyus.png"
import realtime_whyus from "@/assets/realtime_whyus.png"
import tailored_whyus from "@/assets/tailored_whyus.png"
import quick_intgration_whyus from "@/assets/quick_intgration_whyus.png"
const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800'] });
const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'] });
const Whyus = () => {

    return (
        <div className='w-full bg-[#EDF7FF]'>
            <div className='sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[1200px] py-5  flex flex-col justify-center mx-auto'>
                <h3 className={`${satisfy.className} text-[#FD5F03] text-[26px] text-center`}>Why us</h3>
                <h1 className={`${bricolageGrotesque.className} text-[46px] capitalize text-center mb-2 leading-none`}>Empower Your App with Our Expertise</h1>
                <div className='mx-auto'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-evenly'>
                        <div className='h-[490px] w-[380px] bg-white px-7 py-10 rounded-3xl border border-[#DEDFE3] shadow-[2px_4px_38px_0px_rgba(0,0,0,0.07)] scale-[0.9]'>
                            <h3 className={`${bricolageGrotesque.className} card-whyus-heading text-[23px] capitalize mb-5`}>Security #1 Priority</h3>
                            <div className='w-[90%] h-[50%] relative flex justify-center items-center mx-auto mb-4'>
                                <img src={security_whyus.src} fill="true" alt='security' />
                            </div>
                            <p className={`${inter.className} text-[#737373] font-extralight text-[16px] card-paragraph`}>AppStorys powers seamless experiences with top-tier security! Our lightweight SDK drives growth while safeguarding user data with end-to-end encryption—no storage on our servers, all hosted on AWS.</p>
                        </div>
                        <div className='h-[490px] w-[380px] bg-white px-7 py-10 rounded-3xl border border-[#DEDFE3] shadow-[2px_4px_38px_0px_rgba(0,0,0,0.07)] scale-[0.9]'>
                            <h3 className={`${bricolageGrotesque.className} card-whyus-heading text-[23px] capitalize mb-5`}>Easy Audience segmentation</h3>
                            <div className='w-[90%] h-[52%] relative flex justify-center items-center mx-auto -mt-5 ml-5 mb-6'>
                                <img src={audience_whyus.src} alt='security' />
                            </div>
                            <p className={`${inter.className} text-[#737373] font-extralight text-[16px] card-paragraph`}>Target users precisely with AppStorys! Integrate with CleverTap or MoEngage for advanced segmentation or upload a CSV for manual targeting. Deliver personalized content effortlessly!</p>
                        </div>
                        <div className='h-[490px] w-[380px] bg-white px-7 py-10 rounded-3xl border border-[#DEDFE3] shadow-[2px_4px_38px_0px_rgba(0,0,0,0.07)] scale-[0.9]'>
                            <h3 className={`${bricolageGrotesque.className} card-whyus-heading text-[23px] capitalize mb-4`}>Real time Analysis</h3>
                            <div className='w-[90%] h-[53%] relative flex justify-center items-center mx-auto'>
                                <img src={realtime_whyus.src} alt='security' />
                            </div>
                            <p className={`${inter.className} text-[#737373] font-extralight text-[16px] card-paragraph`}>Track user interactions in real-time with AppStorys! Instantly access clicks, views, and engagement—no waiting, just instant insights.</p>
                        </div>
                        <div className='h-[490px] w-[380px] bg-white px-7 py-10 rounded-3xl border border-[#DEDFE3] shadow-[2px_4px_38px_0px_rgba(0,0,0,0.07)] scale-[0.9] lg:-mt-5'>
                            <h3 className={`${bricolageGrotesque.className} card-whyus-heading text-[23px] capitalize mb-4`}>Quick Integration</h3>
                            <div className='w-[100%] h-[55%] relative flex justify-center items-center mx-auto'>
                                <img src={quick_intgration_whyus.src} alt='security' />
                            </div>
                            <p className={`${inter.className} text-[#737373] font-extralight text-[16px] card-paragraph`}>AppStorys ensures seamless experiences with top-tier security! Our lightweight SDK boosts growth while protecting user data with end-to-end encryption—no storage on our servers, all hosted on AWS.</p>
                        </div>
                        <div className='h-[490px] w-[380px] bg-white px-7 py-10 rounded-3xl border border-[#DEDFE3] shadow-[2px_4px_38px_0px_rgba(0,0,0,0.07)] scale-[0.9] lg:-mt-5'>
                            <h3 className={`${bricolageGrotesque.className} card-whyus-heading text-[23px] capitalize mb-5`}>Tailored campaigns</h3>
                            <div className='w-[90%] h-[53%] relative flex justify-center items-center mx-auto mb-1'>
                                <img src={tailored_whyus.src} alt='security' />
                            </div>
                            <p className={`${inter.className} text-[#737373] font-extralight text-[16px] card-paragraph`}>With AppStorys, customize campaigns for mobile, tablet, or desktop. Tailor content for a seamless experience and targeted engagement on any device!</p>
                        </div>
                        <div className='h-[490px] w-[380px] bg-white px-7 py-10 rounded-3xl border border-[#DEDFE3] shadow-[2px_4px_38px_0px_rgba(0,0,0,0.07)] scale-[0.9] lg:-mt-5'>
                            <h3 className={`${bricolageGrotesque.className} card-whyus-heading text-[23px] capitalize mb-2`}>Powerful Dashboard</h3>
                            <div className='w-[80%] h-[56%] relative flex justify-center items-center mx-auto'>
                                <img src={powerfull_whyus.src} alt='security' />
                            </div>
                            <p className={`${inter.className} text-[#737373] font-extralight  text-[16px] card-paragraph`}>Meet the AppStorys dashboard—your control center for stories, floaters, and banners. Monitor engagement, segment users, and get real-time insights—all in one place!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whyus
"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import LocationCard from "../components/LocationCard";
import getInTouchComp from '../../assets/get_in_touch_comp.png';
import tickYellow from '../../assets/tick_yellow.png';

export default function GetInTouch() {
    const [fullName, setFullName] = useState('');
    const [businessEmail, setBusinessEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://backend.appstorys.com/api/v1/form/create-response/',
                { name: fullName, email: businessEmail, source: 'Get in touch Form', message }
            );

            if (response.status === 201) {
                setSubmitSuccess(true);
            }
        }
        catch (error) {
            // console.log("Error : ", error)
        }
        // setSubmitSuccess(true);
    };

    useEffect(() => {
        if (submitSuccess) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }

        return () => {
            document.body.style.overflow = 'auto'; // Clean up on component unmount
        };
    }, [submitSuccess]);

    return (
        <main className="flex flex-col justify-center items-center w-full bg-[#fff] max-[927px]:py-[0px]">
            {/* Form Section */}
            <section className='flex justify-start items-start max-w-[1400px] min-h-[70vh]'>
                {/* <div className='w-[5px] h-[110vh] max-[895px]:hidden'>
                    <div className='w-full h-[90%] bg-[#FD5F03]'></div>
                    <div className='w-full h-[10%] bg-[#E9A63A]'></div>
                </div> */}
                <div className='flex justify-start items-start h-full w-full bg-[#fafafa] gap-y-[20px] min-[540px]:pl-[40px] min-[540px]:pr-[40px] min-[540px]:pt-[20px] min-[540px]:pb-[20px] gap-x-[21px] max-[1085px]:flex-col max-[540px]:px-[25px] max-[540px]:py-[25px]'>
                    <div className='w-[20%] flex flex-col justify-start items-start gap-y-[80px] max-[1085px]:w-full'>
                        <div className='flex flex-col min-[1085px]:justify-between items-start min-[1085px]:h-[209px] gap-y-[34px]'>
                            <h1 className='text-[54px] font-semibold font-InstrumentSans leading-[107%] min-[1085px]:w-[231px]'>Let's Get In Touch</h1>
                            <p className='text-[16px] font-InstrumentSans text-[#545454]'>Ready to boost your app's engagement? Reach out today, and let's explore how AppStorys can help you grow.</p>
                        </div>
                        <div className='flex flex-col justify-between items-start'>
                            <h1 className='text-[12px] tracking-[2px] leading-[119%] font-bold font-InstrumentSans'>REACH OUT TO US</h1>
                            <a href="mailto:support@appstorys.com" target='_blank' className='font-semibold font-InstrumentSans text-[18px] leading-[119%] text-[#FD5F03] hover:cursor-pointer'>support@appstorys.com</a>
                        </div>
                    </div>
                    <div className='relative h-[687px] w-[65%] max-[1085px]:w-full flex justify-center items-center'>
                        <form className='flex flex-col justify-start items-center px-[80px] max-[617px]:px-[40px] py-[80px] bg-[#e8ecf3] gap-y-[31px] min-[1085px]:ml-[104px] w-full h-full max-[487px]:px-[25px]' onSubmit={handleSubmit}>
                            <div className='w-full justify-between items-start flex flex-col gap-y-[16px]'>
                                <label htmlFor="Full Name" className='text-[#FD5F03] leading-[150%] text-[16px] font-InstrumentSans'>Full Name&nbsp;<span className='text-[#D64830]'>*</span></label>
                                <input
                                    type="text"
                                    name='Full Name'
                                    value={fullName}
                                    className='py-[14px] pl-[16px] w-full rounded-[2px] font-InstrumentSans bg-white'
                                    placeholder='Please enter full name'
                                    onChange={(e) => { setFullName(e.target.value) }}
                                />
                            </div>
                            <div className='w-full justify-between items-start flex flex-col gap-y-[16px] mt-[9px]'>
                                <label htmlFor="Business Email" className='text-[#FD5F03] leading-[150%] text-[16px] font-InstrumentSans'>Business Email&nbsp;<span className='text-[#D64830]'>*</span></label>
                                <input
                                    type="email"
                                    name='Business Email'
                                    value={businessEmail}
                                    className='py-[14px] pl-[16px] w-full rounded-[2px] font-InstrumentSans bg-white'
                                    placeholder='email@company.com'
                                    onChange={(e) => { setBusinessEmail(e.target.value) }}
                                />
                            </div>
                            <div className='w-full justify-between items-start flex flex-col gap-y-[16px] mt-[9px]'>
                                <label htmlFor="Message" className='text-[#FD5F03] leading-[150%] text-[16px] font-InstrumentSans'>Message&nbsp;<span className='text-[#D64830]'>*</span></label>
                                <textarea
                                    rows={3}
                                    type="text"
                                    name='Message'
                                    value={message}
                                    className='py-[14px] pl-[16px] w-full rounded-[2px] font-InstrumentSans bg-white'
                                    onChange={(e) => { setMessage(e.target.value) }}
                                />
                            </div>
                            <button className='flex justify-center items-center py-[11px] px-[50px] gap-x-[8px] bg-[#FD5F03] text-white rounded-[25px] mt-[25px] text-[10px] font-semibold font-InstrumentSans tracking-[1px]' type='submit'>
                                <div className='h-[5px] w-[5px] bg-white rounded-full'></div>
                                SUBMIT
                            </button>
                        </form>
                        {
                            submitSuccess && submitSuccess === true &&
                            <div className='max-[694px]:px-[25px] w-full h-full flex justify-center items-center bg-[#d9d9d9af] z-[100000] fixed top-0 left-0 '>
                                <div className='bg-white w-[60%] min-[1046px]:h-[278px] gap-y-[32px] flex justify-center items-center flex-col min-[1046px]:px-[126px] max-[1046px]:px-[20px] max-[1046px]:py-[40px] max-[694px]:w-full'>
                                    <Image
                                        src={tickYellow}
                                        alt="AppStorys tick_yellow"
                                        width={48}
                                        height={48}
                                        className="h-[48px] w-auto"
                                    />
                                    <p className='text-[16px] font-InstrumentSans leading-[150%] text-[#FD5F03] text-center min-[1046px]:w-[606px]'>Thank you for submitting the form. You'll be hearing from us shortly, so please keep an eye on your email inbox.</p>
                                    <Link href='/' onClick={() => { setSubmitSuccess(false) }} className='h-[34px] w-[133px] bg-[#FD5F03] flex justify-center items-center gap-x-[9px] text-white tracking-[1px] text-[10px] font-semibold font-InstrumentSans'>
                                        <div className='w-[5px] h-[5px] bg-white rounded-full'></div>
                                        OKAY
                                    </Link>
                                </div>
                            </div>
                        }
                    </div>
                    <div className='w-[15%] h-full max-[1085px]:hidden'>
                        <Image
                            src={getInTouchComp}
                            alt="AppStorys get_in_touch_comp"
                            width={200}
                            height={687}
                            className="h-[687px] w-auto max-[1085px]:hidden"
                        />
                    </div>
                </div>
            </section>

            <section className='bg-[#fff] flex flex-col justify-start items-start py-[67px] px-[55px] max-[540px]:px-[25px] max-[540px]:py-[25px] max-w-[1500px] gap-y-[15.89px]'>
                <h1 className='text-[12px] font-bold font-InstrumentSans text-[#FD5F03] tracking-[2px] leading-[119%]'>OUR LOCATIONS</h1>
                <div className='flex justify-start max-[1051px]:justify-center items-center flex-wrap gap-x-[16.62px] max-[1440px]:gap-x-[2px] max-[1336px]:gap-x-[10px] max-[1336px]:gap-y-[10px] '>
                    <LocationCard country='INDIA' city='Mumbai' address='Office #3, Neelkanth, Next to Shreeji Heights, Sector 45A, Navi Mumbai, Maharashtra, India - 400706' />
                    <LocationCard country='INDIA' city='Noida' address='Office #37, Tapasya Corp Heights, Sector 126, Noida, Uttar Pradesh - 201301' />
                    <LocationCard country='USA' city='Delaware' address='16192 Coastal Hwy, Lewes, DE 19958, USA ' />
                    <LocationCard country='USA' city='California' address='140 Black Mountain Cir, Fremont, California, USA - 94536' />
                </div>
            </section>
        </main>
    );
}
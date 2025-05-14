

"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import LocationCard from "../components/LocationCard";
import tickYellow from '../../assets/tick_yellow.png';
import axios from 'axios';

const countryCodes = [
    { code: 'RU', name: 'Russia', dialCode: '+7' },
    { code: 'US', name: 'United States', dialCode: '+1' },
    { code: 'IN', name: 'India', dialCode: '+91' },
];

export default function CareerPage() {
    const [value, setValue] = useState('');

    const [interest, setInterest] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showInterestOptions, setShowInterestOptions] = useState(false);
    const [showLocationOptions, setShowLocationOptions] = useState(false);

    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://backend.appstorys.com/api/v1/form/create-response/',
                { name: fullName, interest, email, phone: phoneNumber, source: 'Careers Page' }
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

    const interestOptions = [
        'Django Developer',
        'SDE Manager',
        'DevOps Engineer',
        'Graphic Designer',
        'Typescript Developer'
    ];

    const locationOptions = [
        'Delhi',
        'Noida',
        'Mumbai',
        'Navi Mumbai',
        'Fremont - California',
        'San Francisco - California'
    ];

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
        <main className="flex flex-col justify-center items-center w-full bg-[#fff] max-[927px]:py-[0px] gap-y-[60px]">
            {/* Layer */}
            <section className='flex justify-start items-start min-[1078px]:min-h-[70vh] w-full max-[1078px]:flex-col'>
                <div className='w-[40%] bg-[#ffffff] h-[100%] flex flex-col justify-start items-start py-[25px] px-[25px] max-[371px]:px-[15px] gap-y-[20px] max-[1327px]:w-[50%] max-[1078px]:w-full'>
                    <div className='flex flex-col justify-start items-start w-full gap-y-[12px]'>
                        <h1 className='text-[0.8rem] font-bold font-InstrumentSans text-[#D64830] leading-[119%] tracking-[2px]'>OPENINGS</h1>
                        <h1 className='text-[44px] leading-[120%] tracking-[0px] font-InstrumentSans font-semibold'>Join Us</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[100%]'>
                        <form onSubmit={handleSubmit} className='w-[100%] flex flex-col justify-center items-center py-[30px] bg-[#e8ecf3] px-[34px] max-[426px]:px-[25px] gap-y-[20px]'>
                            <div className='w-full justify-between items-start flex flex-col gap-y-[16px] max-[424px]:gap-y-[12px] font-InstrumentSans text-[#B8B8B8]'>
                                <label htmlFor="area of interest" className='text-[#1F4D9C] leading-[150%] text-[16px] capitalize font-InstrumentSans'>Select your area of interest &nbsp;<span className='text-[#D64830]'>*</span></label>
                                <div className='relative w-full'>
                                    <div 
                                        className='py-[14px] pl-[16px] w-full font-InstrumentSans text-[#B8B8B8] bg-white flex justify-between items-center cursor-pointer'
                                        onClick={() => setShowInterestOptions(!showInterestOptions)}
                                    >
                                        <span>{interest || 'Interest'}</span>
                                        <span className="pr-3">▼</span>
                                    </div>
                                    {showInterestOptions && (
                                        <div className='absolute top-full left-0 w-full bg-white z-10 border border-[#e0e0e0] max-h-[200px] overflow-y-auto'>
                                            {interestOptions.map((option, index) => (
                                                <div 
                                                    key={index} 
                                                    className='py-2 px-4 hover:bg-[#f5f5f5] cursor-pointer'
                                                    onClick={() => {
                                                        setInterest(option);
                                                        setShowInterestOptions(false);
                                                    }}
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='flex justify-between items-center w-full gap-x-[31px] max-[607px]:flex-col max-[607px]:gap-y-[20px]'>
                                <div className='w-full justify-between items-start flex flex-col gap-y-[16px] max-[424px]:gap-y-[12px]'>
                                    <label htmlFor="Full Name" className='text-[#1F4D9C] leading-[150%] text-[16px] capitalize font-InstrumentSans'>Full Name&nbsp;<span className='text-[#D64830]'>*</span></label>
                                    <input
                                        type="text"
                                        name='Full Name'
                                        value={fullName}
                                        className='py-[14px] pl-[16px] w-full font-InstrumentSans text-[#B8B8B8] placeholder-[#B8B8B8] bg-white'
                                        placeholder='Please enter first name'
                                        onChange={(e) => { setFullName(e.target.value) }}
                                    />
                                </div>
                                <div className='w-full justify-between items-start flex flex-col gap-y-[16px] max-[424px]:gap-y-[12px]'>
                                    <label htmlFor="Email" className='text-[#1F4D9C] leading-[150%] text-[16px] capitalize font-InstrumentSans'>Email&nbsp;<span className='text-[#D64830]'>*</span></label>
                                    <input
                                        type="email"
                                        name='Email'
                                        value={email}
                                        className='py-[14px] pl-[16px] w-full font-InstrumentSans text-[#B8B8B8] placeholder-[#B8B8B8] bg-white'
                                        placeholder='email@company.com'
                                        onChange={(e) => { setEmail(e.target.value) }}
                                    />
                                </div>
                            </div>

                            <div className='w-full justify-between items-start flex flex-col gap-y-[16px] max-[424px]:gap-y-[12px] mt-[9px]'>
                                <label htmlFor="Phone Number" className='text-[#1F4D9C] leading-[150%] text-[16px] capitalize font-InstrumentSans'>Phone Number &nbsp;<span className='text-[#D64830]'>*</span></label>
                                <input
                                    type="tel"
                                    name='Phone Number'
                                    value={phoneNumber}
                                    className='py-[14px] pl-[16px] w-full rounded-[2px] font-InstrumentSans bg-white'
                                    placeholder='Please enter your phone number'
                                    onChange={(e) => { setPhoneNumber(e.target.value) }}
                                />
                            </div>

                            <div className='w-full justify-between items-start flex flex-col gap-y-[16px] max-[424px]:gap-y-[12px] mt-[9px] font-InstrumentSans'>
                                <label htmlFor="Preferred location" className='text-[#1F4D9C] leading-[150%] text-[16px] capitalize font-InstrumentSans'>Preferred location&nbsp;<span className='text-[#D64830]'>*</span></label>
                                <div className='relative w-full'>
                                    <div 
                                        className='py-[14px] pl-[16px] w-full font-InstrumentSans text-[#B8B8B8] bg-white flex justify-between items-center cursor-pointer'
                                        onClick={() => setShowLocationOptions(!showLocationOptions)}
                                    >
                                        <span>{location || 'Location'}</span>
                                        <span className="pr-3">▼</span>
                                    </div>
                                    {showLocationOptions && (
                                        <div className='absolute top-full left-0 w-full bg-white z-10 border border-[#e0e0e0] max-h-[200px] overflow-y-auto'>
                                            {locationOptions.map((option, index) => (
                                                <div 
                                                    key={index} 
                                                    className='py-2 px-4 hover:bg-[#f5f5f5] cursor-pointer'
                                                    onClick={() => {
                                                        setLocation(option);
                                                        setShowLocationOptions(false);
                                                    }}
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            <button className='flex justify-center items-center py-[11px] px-[50px] gap-x-[8px] bg-[#1f4d9c] text-white rounded-[25px] mt-[25px] text-[10px] font-semibold font-InstrumentSans tracking-[1px]' type='submit'>
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
                                    <p className='text-[16px] font-InstrumentSans leading-[150%] text-[#1F4D9C] text-center min-[1046px]:w-[606px]'>Thank you for submitting the form. You'll be hearing from us shortly, so please keep an eye on your email inbox.</p>
                                    <Link href='/home' onClick={() => { setSubmitSuccess(false) }} className='h-[34px] w-[133px] bg-[#1F4D9C] flex justify-center items-center gap-x-[9px] text-white tracking-[1px] text-[10px] font-semibold font-InstrumentSans'>
                                        <div className='w-[5px] h-[5px] bg-white rounded-full'></div>
                                        OKAY
                                    </Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className='w-[60%] bg-[#1f4d9c] h-[100%] flex justify-start items-start px-[25px] py-[25px] max-[1327px]:w-[50%] max-[1078px]:w-full'>
                    <div className='w-[100%] flex flex-col justify-start py-[7%] items-center h-full max-[1327px]:pt-[40px]'>
                        <div className='w-full flex-col flex justify-start items-start gap-y-[16px] max-[424px]:gap-y-[12px] border-b-[0.2px] border-[#ffffff] py-[18px] '>
                            <h1 className='text-[18px] font-semibold leading-[150%] font-InstrumentSans text-white'>Career Opportunities</h1>
                            <p className='leading-[150%] text-[14px] font-InstrumentSans text-[#e8ecf3]'>AppStorys to fast-track your career with an innovative team. Contribute to cutting-edge app solutions that shape mobile engagement while fostering your personal growth.</p>
                        </div>
                        <div className='w-full flex-col flex justify-start items-start gap-y-[16px] max-[424px]:gap-y-[12px] border-b-[0.2px] border-[#ffffff] py-[18px]'>
                            <h1 className='text-[18px] font-semibold leading-[150%] font-InstrumentSans text-white'>Company Benefits</h1>
                            <p className='leading-[150%] text-[14px] font-InstrumentSans text-[#e8ecf3]'>At AppStorys, enjoy flexible work, competitive pay, and continuous learning in a dynamic environment that supports your career growth and provides access to the latest tools for success.</p>
                        </div>
                        <div className='w-full flex-col flex justify-start items-start gap-y-[16px] max-[424px]:gap-y-[12px] border-b-[0.2px] border-[#ffffff] py-[18px]'>
                            <h1 className='text-[18px] font-semibold leading-[150%] font-InstrumentSans text-white'>Employee Benefits</h1>
                            <p className='leading-[150%] text-[14px] font-InstrumentSans text-[#e8ecf3]'>AppStorys provides a comprehensive benefits package, including health insurance, flexible hours, and professional development. We prioritize work-life balance, career growth, and a supportive team culture.</p>
                        </div>
                        <div className='w-full flex-col flex justify-start items-start gap-y-[16px] max-[424px]:gap-y-[12px] border-b-[0.2px] border-[#ffffff] py-[18px]'>
                            <h1 className='text-[18px] font-semibold leading-[150%] font-InstrumentSans text-white'>Application Process</h1>
                            <p className='leading-[150%] text-[14px] font-InstrumentSans text-[#e8ecf3]'>Submit your resume and portfolio on our website to start your application. The process includes an initial interview, skills assessment, and final interview, with timely feedback throughout.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Setion */}
            <section className='bg-[#fff] flex flex-col justify-start items-start py-[67px] px-[55px] max-[540px]:px-[25px] max-[540px]:py-[25px] w-full gap-y-[15.89px]'>
                <h1 className='text-[12px] font-bold font-InstrumentSans text-[#1F4D9C] tracking-[2px] leading-[119%]'>OUR LOCATIONS</h1>
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
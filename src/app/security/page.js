"use client";

import React, { useRef, useState } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { Gradient } from '@mui/icons-material';
import securityBanner from '../../assets/security_banner.png';
import downArrowWhite from '../../assets/down_arrow_white.png';

export default function Security() {
    const [openPopoverIndexes, setOpenPopoverIndexes] = React.useState([null, null, null]);

    const handleMouseEnter = (rowIndex, popoverIndex) => {
        const newIndexes = [...openPopoverIndexes];
        newIndexes[rowIndex] = popoverIndex; // Set the index of the hovered popover for the specific row
        setOpenPopoverIndexes(newIndexes);
    };

    const handleMouseLeave = (rowIndex) => {
        const newIndexes = [...openPopoverIndexes];
        newIndexes[rowIndex] = null; // Reset when mouse leaves the row
        setOpenPopoverIndexes(newIndexes);
    };

    // Popovers and corresponding headings for each row
    const rowsData = [
        {
            heading: "User Data Protection",
            color: '#1F4D9C',
            gradient: 'linear-gradient(0deg, rgba(31, 77, 156, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%)',
            popovers: [
                { id: 1, content: "AppStorys SDK collects no personal data, ensuring no tracking or third-party sharing. You retain full control over your user base." },
                { id: 2, content: "All data transmitted via AppStorys SDK is encrypted, ensuring security and preventing unauthorized access." },
                { id: 3, content: "AppStorys does not store user data, minimizing security risks and keeping your app independent and safe." },
            ],
            buttons: [
                { id: 1, content: "We Do Not Collect User Data" },
                { id: 2, content: "End-to-End Encryption" },
                { id: 3, content: "Nothing Stored on Our Servers" },
            ]
        },
        {
            heading: "Infrastructure And Performance",
            color: '#E9A63A',
            gradient: 'linear-gradient(0deg, rgba(233, 166, 58, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%)',
            popovers: [
                { id: 1, content: "AppStorys SDK is optimized to be lightweight and efficient, ensuring it won't slow down your app or affect performance." },
                { id: 2, content: "AppStorys is hosted on AWS, providing secure infrastructure, 99.9% uptime, and scalability for your app's growth." },
                { id: 3, content: "AppStorys scales with your needs, supporting millions of users while maintaining performance and security." },
            ],
            buttons: [
                { id: 1, content: "Lightweight SDK" },
                { id: 2, content: "Secure Hosting" },
                { id: 3, content: "Built for Scalability" },
            ]
        },
        {
            heading: "Compliance And Monitoring",
            color: '#D64830',
            gradient: 'linear-gradient(0deg, rgba(214, 72, 48, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%)',
            popovers: [
                { id: 1, content: "We conduct regular security audits and vulnerability tests to keep AppStorys secure and aligned with the latest standards." },
                { id: 2, content: "AppStorys adheres to global security standards, ensuring GDPR compliance for seamless data privacy in your app integration." },
                { id: 3, content: "We use advanced monitoring tools to detect and address irregular activity instantly, ensuring your app's integrity and user experience." },
            ],
            buttons: [
                { id: 1, content: "Regular Security Audits" },
                { id: 2, content: "Industry-Standard Compliance" },
                { id: 3, content: "Continuous Monitoring" },
            ]
        },
    ];

    return (
        <main className="flex flex-col justify-center items-center w-full bg-[#fafafa] max-[927px]:py-[0px] gap-y-[60px] ">
            <section className="flex justify-start items-center gap-x-[60px] min-h-[70vh] px-[40px] py-[40px] bg-[#000] relative w-full max-[1078px]:flex-col-reverse max-[425px]:px-[25px] max-[425px]:py-[25px]" >
                <div className='w-full flex justify-end items-center'>
                    <Image
                        src={securityBanner}
                        alt="AppStorys security_banner"
                        width={800}
                        height={605}
                        className="h-[605px] w-auto max-[779px]:w-full max-[779px]:h-auto"
                    />
                </div>
                <div className='flex justify-between flex-col items-start w-[50%] max-[1078px]:w-full max-[1078px]:gap-y-[50px] min-[1078px]:absolute min-[1078px]:px-[40px] min-[1078px]:py-[80px] h-full'>
                    <h1 className='text-[60px] font-semibold font-InstrumentSans leading-[102%] text-white capitalize max-[557px]:text-[50px] max-[425px]:text-[40px]'>Global Compliance <br />and Security</h1>
                    <p className='text-[21px] font-InstrumentSans min-[603px]:w-[500px] leading-[120%] text-[#fafafa]'>At AppStorys, security is at the core of everything we do. Our SDK not only enhances user experience but also ensures robust protection for your data and infrastructure. Here's how we keep your app and users secure:</p>
                </div>
            </section>

            {/* Our Security */}
            <section className='flex flex-col justify-start items-start min-h-[100vh] w-full bg-[#fff] gap-y-[16px] px-[40px] py-[40px] max-[425px]:px-[25px] max-[425px]:py-[25px]'>
                <h1 className='text-[0.8rem] font-bold font-InstrumentSans text-[#D64830] leading-[119%] tracking-[2px]'>OUR SECURITY</h1>
                <h1 className='capitalize text-[54px] min-[917px]:w-[876px] leading-[99%] font-InstrumentSans font-semibold max-[511px]:text-[40px]'>Commitment to Security and <br /> User Privacy</h1>
                <div className='flex flex-col justify-between items-center w-full gap-y-[53px] pt-[44px] mt-[64px] max-[1334px]:gap-y-[60px] max-[755px]:flex-col max-[511px]:mt-[10px]'>
                    {rowsData.map((row, rowIndex) => (
                        <div className='w-full flex justify-between items-center gap-x-[21px] max-[1334px]:flex-col max-[1334px]:gap-y-[10px] max-[1334px]:items-start' key={rowIndex}>
                            <h1 className='leading-[95%] font-semibold font-InstrumentSans w-[289px] text-[34px]' style={{ color: `${row.color}` }}>
                                {row.heading}
                            </h1>
                            <div className="flex justify-between items-center w-full max-[1078px]:flex-wrap max-[1078px]:justify-center max-[1078px]:gap-x-[25px] max-[1078px]:gap-y-[25px]">
                                {row.popovers.map((popover, popoverIndex) => (
                                    <div
                                        key={popover.id}
                                        className="relative inline-block w-[325px] h-[154px]"
                                        style={{ background: `${row.gradient}` }}
                                        onMouseEnter={() => handleMouseEnter(rowIndex, popoverIndex)}
                                        onMouseLeave={() => handleMouseLeave(rowIndex)}
                                    >
                                        {openPopoverIndexes[rowIndex] === popoverIndex && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute w-full shadow-lg h-[80%] pt-[27px] pl-[26px] z-10 hover:cursor-pointer"
                                            >
                                                <p className='text-[14px] font-InstrumentSans leading-[130%] text-[#545454] pr-[49px] hover:cursor-pointer'>{popover.content}</p>
                                            </motion.div>
                                        )}

                                        <button
                                            className="absolute bottom-0 w-full text-white h-[20%] px-4 focus:outline-non uppercase font-semibold font-InstrumentSans text-[12px] leading-[150%] tracking-[1px] flex justify-between items-center"
                                            style={{ backgroundColor: `${row.color}` }}
                                        >
                                            {row.buttons[popoverIndex].content}
                                            <Image
                                                src={downArrowWhite}
                                                alt="AppStorys down_arrow_white"
                                                width={12}
                                                height={12}
                                                className="scale-[1.4] rotate-180 h-[12px] w-auto"
                                            />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Cutting Edge Experience */}
            <section className="max-[1078px]:hidden flex justify-start bg-white items-center gap-x-[60px] min-h-[70vh] pr-[40px] relative w-full" >
                <div className='flex justify-between flex-col items-start w-[50%] h-full px-[70px] py-[10%] gap-y-[40px] bg-[#E2E9F3]'>
                    <h1 className='text-[60px] font-semibold font-InstrumentSans leading-[98%] w-[781px]'>Cutting-Edge <br />Experiences</h1>
                    <p className=' text-[21px] font-InstrumentSans w-[413px] text-[#192964] leading-[107%]'>At AppStorys, security is at the core of everything we do. Our SDK not only enhances user experience but also ensures robust protection for your data and infrastructure. Here's how we keep your app and users secure:</p>
                </div>
                <div className='h-full w-[62%] flex justify-center items-center'>
                    <Image
                        src={securityBanner}
                        alt="AppStorys security_banner"
                        width={800}
                        height={600}
                        className="h-full w-auto"
                    />
                </div>
            </section>

            <section className="min-[1078px]:hidden flex justify-start bg-white items-center gap-x-[60px] min-h-[90vh] w-full" >
                <div className='w-full flex flex-col justify-center items-center h-full gap-y-[20px] py-[10px]'>
                    <div className='flex justify-between flex-col items-start w-[100%] h-full bg-[#e2e9f3] px-[40px] py-[40px] gap-y-[20px] max-[425px]:px-[25px] max-[425px]:py-[25px]'>
                        <h1 className='text-[95px] font-semibold font-InstrumentSans leading-[98%] min-[825px]:w-[781px] max-[711px]:text-[60px] max-[477px]:text-[50px]'>Cutting-Edge Experiences</h1>
                        <p className=' text-[21px] font-InstrumentSans min-[467px]:w-[413px] text-[#192964] leading-[107%]'>At AppStorys, security is at the core of everything we do. Our SDK not only enhances user experience but also ensures robust protection for your data and infrastructure. Here's how we keep your app and users secure:</p>
                    </div>
                    <Image
                        src={securityBanner}
                        alt="AppStorys security_banner"
                        width={800}
                        height={511}
                        className="h-[511.85px] w-auto bg-white max-[782px]:w-full max-[782px]:h-auto"
                    />
                </div>
            </section>

          
        </main>
    );
}
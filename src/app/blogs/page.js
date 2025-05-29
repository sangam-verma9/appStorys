

"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import blogAppRetentionMain from '../../assets/Blog_App_Retention_main.png';
import blogAppEngagementMain from '../../assets/Blog_App_Engagement_main.png';
import blogAppSaasMain from '../../assets/Blog_App_Saas_main.png';
import SimilarBlogCard from '../components/similarBlogCard';

export default function Blogs() {
  const data = [
    {
      image: blogAppRetentionMain,
      heading: '5 Ways to Increase App Retention',
      para: 'In todays competitive mobile app landscape, retaining users is as crucial as acquiring them ...',
      date: '20 October 2023',
      time: 5,
      link: '/blogs/5-Ways-to-Increase-App-Retention'
    },
    {
      image: blogAppEngagementMain,
      heading: '5 Ways Stories Can Help You Increase App Engagement',
      para: 'In todays fast-paced digital world, grabbing and holding users  attention is more challenging than ever ...',
      date: '20 October 2023',
      time: 5,
      link: '/blogs/5-Ways-Stories-Can-Help-You-Increase-App-Engagement'
    },
    {
      image: blogAppSaasMain,
      heading: '5 Causes and Symptoms of Customer Churn in SaaS Companies',
      para: 'Customer churn is a critical issue for SaaS (Software as a Service) companies, impacting revenue and growth ...',
      date: '20 October 2023',
      time: 5,
      link: '/blogs/5-Causes-and-Symptoms-of-Customer-Churn-in-SaaS-Companies'
    },
  ];

  return (
    <main className="flex flex-col justify-center items-center w-full bg-[#fafafa] max-[927px]:py-[0px]">
      <section className='flex flex-col justify-end max-[898px]:justofy-center max-[898px]:items-center items-start min-[898px]:h-[378px] min-[898px]:pb-[72px] min-[898px]:pl-[153px] w-full max-[898px]:px-[40px] max-[898px]:py-[40px]'>
        <div className='flex flex-col justify-start items-start gap-y-[34px] max-[898px]:justify-center max-[898px]:items-center max-[898px]:w-full max-[898px]:gap-y-[20px]'>
          <h1 className='text-[64px] font-InstrumentSans font-semibold leading-[120%] tracking-[-0.5px] max-[644px]:text-[50px] capitalize max-[519px]:text-[40px]'>Explore our insights</h1>
          <p className='text-[#545454] text-[16px] font-InstrumentSans leading-[150%] min-[898px]:w-[554px]'>Discover expert tips, trends, and insights to stay ahead in the ever-evolving industry. Explore our curated content for fresh ideas and practical advice that inspire growth and innovation.</p>
        </div>
      </section>

      <section className='flex justify-start items-center min-[1078px]:h-[422px] bg-[#E2E9F3] w-full gap-x-[100.09px] max-[1282px]:gap-x-[50px] px-[25px] max-[1078px]:flex-col max-[1078px]:gap-y-[20px] max-[1078px]:py-[20px]'>
        <div className="relative md:w-1/2 w-full">
          <Image
            src={blogAppRetentionMain}
            alt="AppStorys Blog_App_Retention_main"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            priority
          />
        </div>
        <div className='flex flex-col justify-center items-start h-full gap-y-[16px] max-[1078px]:w-full'>
          <h1 className='uppercase text-[#d64830] font-Montserrat text-[12px] font-bold'>Featured</h1>
          <p className='capitalize text-[#1F4D9C] text-[30px] min-[1282px]:w-[351px] leading-[111%] font-semibold font-InstrumentSans mt-[4px]'>5 Ways to Increase App Retention</p>
          <p className="uppercase text-[#A8A8A8] font-semibold font-InstrumentSans text-[10px] w-full flex justify-start items-center leading-[150%] tracking-[2px] gap-x-[6px] mt-[24px]">
            <div className="h-[2.98px] w-[2.98px] bg-[#E9A63A] rounded-full"></div>12th October 2024<div className="h-[2.98px] w-[2.98px] bg-[#E9A63A] rounded-full"></div> 04 mins. Read mins. read
          </p>
          <p className='font-InstrumentSans text-[14px] leading-[150%] text-[#657BA0] min-[1282px]:w-[361px]'>In today's competitive mobile app landscape, retaining users is as crucial as acquiring them ...</p>
          <Link href='/blogs/5-Ways-to-Increase-App-Retention' className='underline hover:cursor-pointer underline-offset-4 text-[#1F4D9C] font-InstrumentSans text-[14px] mt-[58px] max-[966px]:mt-[30px] max-[537px]:mt-[20px]'>Read More</Link>
        </div>
      </section>

      <section className='flex justify-between items-center w-full py-[40px] min-h-[60vh] max-[932px]:flex-col max-[932px]:gap-y-[30px]'>
        <div className='w-[20%] flex flex-col justify-start items-start px-[40px] min-[932px]:h-[50vh] max-[932px]:gap-x-[20px] max-[932px]:flex-wrap max-[932px]:w-full max-[932px]:flex-row'>
          <p className='font-Montserrat tracking-[1.73px] font-bold text-[12px] flex gap-x-[9px] justify-center items-center hover:cursor-pointer uppercase'>
            <div className='h-[8px] w-[8px] bg-[#E9A63A] rounded-full'></div>
            All Blogs
          </p>
        </div>
        <div className='flex justify-start items-center gap-x-[20px] gap-y-[20px] w-[80%] flex-wrap max-[932px]:w-full max-[932px]:justify-center max-[390px]:px-[20px]'>
          {
            data.map((element, index) => (
              <SimilarBlogCard
                key={index}
                index={index}
                link={element.link}
                image={element.image}
                heading={element.heading}
                para={element.para}
                date={element.date}
                time={element.time}
              />
            ))
          }
        </div>
      </section>
    </main>
  );
}
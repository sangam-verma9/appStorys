"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SimilarBlogCard = ({ index, image, heading, para, date, time, link }) => {
  const scrollToTop = () => {
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <Link 
      href={link} 
      onClick={scrollToTop} 
      className='flex flex-col justify-between items-center h-[371.54px] w-[360.98px] p-[15.12px] border-b-[3px] border-[#D64830] bg-[#f6f6f6] hover:cursor-pointer'
    >
      <div className="relative w-auto h-[154.77px]">
        <Image
          src={image}
          alt={'AppStorys image'}
          width={330}
          height={154.77}
          style={{ objectFit: "contain", height: "100%", width: "auto" }}
        />
      </div>
      <div className='flex flex-col justify-start items-start w-full gap-y-[16.19px]'>
        <h1 className='text-[16px] font-InstrumentSans leading-[150%]'>{heading}</h1>
        <p className='text-[#545454] text-[14px] leading-[150%] font-InstrumentSans'>{para}</p>
      </div>
      <p className="uppercase text-[#A8A8A8] font-semibold font-InstrumentSans text-[10px] w-full flex justify-start items-center leading-[150%] tracking-[2px] gap-x-[6px]">
        <div className="h-[2.98px] w-[2.98px] bg-[#E9A63A] rounded-full"></div>{date}<div className="h-[2.98px] w-[2.98px] bg-[#E9A63A] rounded-full"></div> {time} mins. read
      </p>
    </Link>
  );
};

export default SimilarBlogCard;
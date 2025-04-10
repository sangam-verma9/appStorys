"use client";

import React from 'react';
import Image from 'next/image';

const WhyUsCardNew = ({image, heading, text, color, gap}) => {
  return (
    <div className={`min-[429px]:h-[345px] flex flex-col max-[429px]:w-full justify-start items-start min-[429px]:w-[389px] rounded-[20px] px-[32px] min-[429px]:pt-[37px] max-[429px]:py-[30px] max-[429px]:px-[30px] gap-y-[30px]`} style={{ backgroundColor: `#${color}` }}>
      <div className="relative h-[50px] w-auto">
        <Image
          src={image}
          alt={'AppStorys image'}
          width={50}
          height={50}
          style={{ width: 'auto', height: '50px', objectFit: "contain" }}
        />
      </div>
      <h1 className='text-[#D64830] text-[15px] tracking-[2px] leading-[119%] font-InstrumentSans mt-[25px] font-bold'>{heading}</h1>
      <p className='text-[14px] font-InstrumentSans tracking-[1px] leading-[132%]'>{text}</p>
    </div>
  );
};

export default WhyUsCardNew;
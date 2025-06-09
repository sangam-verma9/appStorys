"use client";

import React from 'react';
import Image from 'next/image';
import locationIcon from '../../assets/location_icon.png';

const LocationCard = ({ country, city, address }) => {
  return (
    <div className='w-[300px] max-[1300px]:w-[350px] h-[230px] bg-[#FFF7F3] flex flex-col justify-start items-start border-l-[5.87px] border-[#fd5f03] py-[34.11px] px-[31.03px] gap-y-[12.09px]'>
      <h1 className='text-[12px] font-bold font-InstrumentSans leading-[119%] tracking-[2px] text-[#fd5f03]'>{country}</h1>
      <h1 className='text-[24px] font-semibold font-Montserrat leading-[119%] text-[#000]'>{city}</h1>
      <div className='flex justify-start items-start w-full pt-[26.11px] gap-x-[9px]'>
        <div className="relative h-[12px] w-[12px] mt-[3px] ml-[3px]">
          <Image
            src={locationIcon}
            alt="AppStorys location_icon"
            width={12}
            height={12}
            style={{ height: '12px', width: 'auto' }}
          />
        </div>
        <p className='text-[16px] font-InstrumentSans leading-[120%] text-[#545454] w-[246px]'>{address}</p>
      </div>
    </div>
  );
};

export default LocationCard;
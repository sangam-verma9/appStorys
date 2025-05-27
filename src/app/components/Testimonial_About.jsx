"use client";

import React from 'react';
import Image from 'next/image';
import testi1 from '../../assets/Testi_1.png';
import testi3 from '../../assets/Testi_3.png';
import testi4 from '../../assets/Testi_4.png';
import testi5 from '../../assets/Testi_5.png';
import redArrow from '../../assets/red_arrow.png';

const Testimonial_About = () => {
  return (
    <section className='flex justify-start items-center w-full min-[982px]:h-[50vh] h-full bg-[#ffffff]'>
      {/* <div className='w-[5px] h-[50vh]'>
        <div className='w-full h-[70%] bg-[#E9A63A]'></div>
        <div className='w-full h-[30%] bg-[#1F4D9C]'></div>
      </div> */}
      <div className='flex flex-col justify-start h-full items-center pt-[42.97px] w-full gap-y-[4%] max-[666px]:px-[25px]'>
        <h1 className='text-[#D64830] text-[12px] font-bold font-InstrumentSans tracking-[2px] leading-[119%] flex gap-x-[5px]'>
          APPSTORYS & OUR PARENT COMPANY
          <div className="relative h-[12.3px] w-[15px]">
            <Image
              src={redArrow}
              alt='AppStorys red_arrow'
              width={15}
              height={12.3}
              style={{ width: 'auto', height: '12.3px', objectFit: "contain" }}
            />
          </div>
        </h1>
        <h1 className='text-[30px] mt-2 font-semibold font-InstrumentSans leading-[119%] tracking-[2px] text-center max-[666px]:text-[30px] min-[666px]:w-[629px] capitalize max-[425px]:text-[30px]'>Backed By Our Established Parent Company With Leading Clients</h1>
        <div className='flex justify-center'>
          <div className='mt-[1.5px] grid grid-cols-2 md:grid-cols-4 justify-between items-center w-[100%]'>
            <div className="relative h-[40px] w-[150px]">
              <Image
                src={testi1}
                alt='AppStorys Testi_1'
                width={150}
                height={40}
                style={{ width: 'auto', height: '40px', objectFit: "contain" }}
              />
            </div>
            {/* Testi_2 is commented out in the original code */}
            <div className="relative h-[92px] w-[150px] px-2 ml-3">
              <Image
                src={testi3}
                alt='AppStorys Testi_3'
                width={150}
                height={92}
                style={{ width: 'auto', height: '92px', objectFit: "contain" }}
              />
            </div>
            <div className="relative h-[134px] w-[150px]">
              <Image
                src={testi4}
                alt='AppStorys Testi_4'
                width={150}
                height={134}
                style={{ width: 'auto', height: '134px', objectFit: "contain" }}
              />
            </div>
            <div className="relative h-[38px] w-[150px] px-2 ml-3">
              <Image
                src={testi5}
                alt='AppStorys Testi_5'
                width={150}
                height={38}
                style={{ width: 'auto', height: '38px', objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial_About;
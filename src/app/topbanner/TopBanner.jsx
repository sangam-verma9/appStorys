import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import doller_icon from '@/assets/doller_icon.png'
import Link from 'next/link';
const TopBanner = () => {
    return (
        <>
            <div className={`w-full  h-[50px] flex bg-[#FD5F03] py-3 z-50 justify-center items-center`}>
                <img src={doller_icon.src} alt="doller" height={25} width={25} className='md:mr-2 mr-[3px] scale-[0.8] md:scale-[1]' />
                <p className='text-white font-semibold mr-1 md:text-xl text-[12px]'>We’ve raised $5M to power the next journey of growth</p>
                <Link href={"https://www.prweb.com/releases/appstorys-raises-5-million-in-funding-to-accelerate-global-expansion-and-empower-businesses-with-growth-tools-302379955.html"}>
                    <GoArrowUpRight className='md:w-[25px] md:h-[25px] w-[15px] h-[15px] text-white md:-mb-2' />
                </Link>
            </div>
        </>
    )
}

export default TopBanner;
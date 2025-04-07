import Image from 'next/image'
import React from 'react'
import logo from "@/assets/favicon.png";
import { Outfit, Bricolage_Grotesque, Poppins } from 'next/font/google';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import footer_img1 from "@/assets/footer_img1.png"
import footer_img2 from "@/assets/footer_img2.png"



const outfit = Outfit({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800'] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
// sm: px - 14 md: px - 20 lg: px - 32 xl: px - 40 px - 10
const Footer = () => {
  return (
    <div className='w-full bg-gradient-to-b from-white to-[#FFEBE0]'>
      <div className='sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[1300px] px-10 py-8 mx-auto'>
        <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-center`}>
          <h2 className={`text-[28px] ${bricolageGrotesque.className} leading-tight`}>Get started today or schedule<br /> a quick 15 min demo</h2>
          <div className='mt-5 sm:mt-0'><button className={` ${outfit.className} px-8 py-3 bg-[#FD5F03] cursor-pointer rounded-md text-white text-md sm:text-xl font-bold`}>BOOK A DEMO</button></div>
        </div>
        <div className='w-[100%] h-[0.8px] bg-[#fcf1e4] relative my-4'></div>
        <div className='flex flex-col sm:flex-row justify-between sm:items-center my-4 py-2'>
          <div className='flex mb-5 sm:mb-0 justify-center sm:justify-normal items-center'>
            <img src={logo.src} alt={`${logo}`} className="mr-2 w-[5%] " />
            <h1 className={`hover:cursor-pointer text-[#FD5F03] font-semibold text-[30px] leading-[110%] ${poppins.className}`}>
              AppStorys
            </h1>
          </div>
          <div className='flex justify-center sm:justify-normal'>
            <p >
              <FaLinkedin className='w-[35px] h-[35px] mr-3 cursor-pointer' />
            </p>
            <p >
              <FaInstagram className='w-[35px] h-[35px] mr-3 cursor-pointer' />
            </p>
            <p>
              <FaXTwitter className='w-[35px] h-[35px] mr-3 cursor-pointer' />
            </p>
            <p >
              <FaYoutube className='w-[35px] h-[35px] mr-3 cursor-pointer' />
            </p>
          </div>
        </div>
        <div className='w-[100%] h-[0.8px] bg-[#fcf1e4] relative my-2'></div>
        <div className='grid grid-cols-1 sm:grid-cols-4 my-4 mt-6'>
          <div className='flex justify-center sm:justify-normal'>
            <div className='flex flex-col text-center sm:text-left mb-5 sm:mb-0'>
              <h3 className={`${bricolageGrotesque.className} capitalize text-[18px]`}>Integratable growth Tools</h3>
              <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Stories</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>reels/Short videos</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>PiP Videos</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>banners</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Floaters</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Widgets</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Quizzes</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Surveys</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>CSAT Feedback</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Coachmarks</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>tooltips</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Scratch Cards</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>bottom Sheets</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Spotlight</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='flex flex-col justify-between'>
              <div className='flex flex-col text-center sm:text-left mb-5 sm:mb-0'>
                <h3 className={`${bricolageGrotesque.className} capitalize text-[18px] `}>Our SDKs</h3>
                <p className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000]  `}>iOS</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>android</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>flutter</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>react native</p>
                <p className={`${outfit.className} font-extralight  text-[#2b2a2a] hover:text-[#000000] `}>React.js</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>angular</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>wordpress</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>shopify</p>
              </div>
              <div className='flex flex-col text-center sm:text-left mb-5 sm:mb-0'>
                <h3 className={`${bricolageGrotesque.className} capitalize  text-[18px]`}>resources</h3>
                <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>blog</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>inspiration gallery</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>appStorys book</p>
              </div>
            </div>
          </div>

          <div className='flex justify-center'>
            <div className='flex flex-col text-center sm:text-left mb-5 sm:mb-0'>
              <h3 className={`${bricolageGrotesque.className} capitalize  text-[18px]`}>Integrations</h3>
              <p className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>cleverTap</p>
              <p className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000] `}>MoEngage</p>
              <p className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000] `}>Mixpanel</p>
              <p className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000] `}>mParticle</p>
              <p className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000] `}>Custom Audiences</p>
            </div>
          </div>
          <div className='flex sm:justify-end justify-center'>
            <div className='flex flex-col justify-between'>
              <div className='flex flex-col text-center sm:text-left mb-5 sm:mb-0'>
                <h3 className={`${bricolageGrotesque.className} capitalize text-[18px] `}>security</h3>
                <p className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>SOC 2 verified</p>
                <p className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>encrypted</p>
                <p className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>24/7 Global Fraud Monitoring</p>
                <p className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>AWS Servers - No data collected</p>
                <p className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>GDPR Compliant</p>
                <p className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>RBI Compliant</p>
              </div>
              <div className='flex flex-col text-center sm:text-left'>
                <h3 className={`${bricolageGrotesque.className} capitalize text-[18px] `}>company</h3>
                <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>about</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>contact us</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>careers</p>
                <p className={`${outfit.className} font-extralight  text-[#2b2a2a] hover:text-[#000000] `}>Terms of Service</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>privacy Policy</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>refund policy</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-col sm:flex-row flex justify-between mt-20 items-center'>
          <div><p className={`${outfit.className} font-extralight text-[14px] mb-5 sm:mb-0`}>2025 AppStorys Inc. All rights reserved</p></div>
          <div><p className={`${bricolageGrotesque.className} text-[18px] mb-5 sm:mb-0`}>Made with ❤️ in USA & India</p></div>
          <div className='flex w-[20%] justify-end'>
            <img src={footer_img1.src} height={10} width={40} alt='footer img 1' className='mx-4' />
            <img src={footer_img2.src} height={10} width={50} alt='footer img 2' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
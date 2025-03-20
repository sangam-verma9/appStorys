import Image from 'next/image'
import React from 'react'
import logo from "@/assets/favicon.png";
import { Outfit, Bricolage_Grotesque, Poppins } from 'next/font/google';
import linkedin_icon from "@/assets/linkedin_icon.png"
import insta_icon from "@/assets/insta_icon.png"
import x_icon from "@/assets/x_icon.png"
import youtube_icon from "@/assets/youtube_icon.png"
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
      <div className='sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[1280px] px-10 py-8 mx-auto'>
        <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-center`}>
          <h2 className={`text-[28px] ${bricolageGrotesque.className} leading-tight`}>Get started today or schedule<br /> a quick 15 min demo</h2>
          <div className='mt-5 sm:mt-0'><button className={` ${outfit.className} px-8 py-3 bg-[#FD5F03] cursor-pointer rounded-md text-white text-md sm:text-xl font-bold`}>BOOK A DEMO</button></div>
        </div>
        <div className='w-[100%] h-[0.8px] bg-[#fcf1e4] relative my-4'></div>
        <div className='flex flex-col sm:flex-row justify-between sm:items-center my-4 py-2'>
          <div className='flex mb-5 sm:mb-0 justify-center sm:justify-normal'>
            <img src={logo.src} alt={`${logo}`} width={30} height={30} className="mr-2" />
            <h1 className={`hover:cursor-pointer text-[#FD5F03] font-Poppins font-semibold text-[4vh] leading-[110%] ${poppins.className}`}>
              AppStorys
            </h1>
          </div>
          <div className='flex justify-center sm:justify-normal'>
            <p >
              <Image src={linkedin_icon.src} width={25} height={20} alt='pedin' className='mr-3' />
            </p>
            <p >
              <Image src={insta_icon.src} width={25} height={20} alt='Instagram' className='mx-3' />
            </p>
            <p>
              <Image src={x_icon.src} width={25} height={20} alt='X' className='mx-3' />
            </p>
            <p >
              <Image src={youtube_icon.src} width={30} height={20} alt='You Tube' className='mx-3' />
            </p>
          </div>
        </div>
        <div className='w-[100%] h-[0.8px] bg-[#fcf1e4] relative my-2'></div>
        <div className='grid grid-cols-1 sm:grid-cols-4 my-4 mt-6'>
          <div className='flex justify-center sm:justify-normal'>
            <div className='flex flex-col text-center sm:text-left mb-5 sm:mb-0'>
              <h3 className={`${bricolageGrotesque.className} capitalize`}>Integratable growth Tools</h3>
              <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>Stories</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>reels/Short videos</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>PiP Videos</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>banners</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>Floaters</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>Widgets</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>Quizzes</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>Surveys</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>CSAT Feedback</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>Coachmarks</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>tooltips</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>Scratch Cards</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>bottom Sheets</p>
              <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>Spotlight</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='flex flex-col justify-between'>
              <div className='flex flex-col text-center sm:text-left mb-5 sm:mb-0'>
                <h3 className={`${bricolageGrotesque.className} capitalize  `}>Our SDKs</h3>
                <p className={`${outfit.className} font-extralight text-[#606060] hover:text-[#000000] text-[14px] `}>iOS</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>android</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>flutter</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>react native</p>
                <p className={`${outfit.className} font-extralight  text-[#606060] hover:text-[#000000] text-[14px]`}>React.js</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>angular</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>wordpress</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>shopify</p>
              </div>
              <div className='flex flex-col text-center sm:text-left mb-5 sm:mb-0'>
                <h3 className={`${bricolageGrotesque.className} capitalize  `}>resources</h3>
                <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>blog</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>inspiration gallery</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>appStorys book</p>
              </div>
            </div>
          </div>

          <div className='flex justify-center'>
            <div className='flex flex-col text-center sm:text-left mb-5 sm:mb-0'>
              <h3 className={`${bricolageGrotesque.className} capitalize  `}>Integrations</h3>
              <p className={`${outfit.className} font-extralight text-[#606060] hover:text-[#000000] text-[14px] capitalize`}>cleverTap</p>
              <p className={`${outfit.className} font-extralight text-[#606060] hover:text-[#000000] text-[14px]`}>MoEngage</p>
              <p className={`${outfit.className} font-extralight text-[#606060] hover:text-[#000000] text-[14px]`}>Mixpanel</p>
              <p className={`${outfit.className} font-extralight text-[#606060] hover:text-[#000000] text-[14px]`}>mParticle</p>
              <p className={`${outfit.className} font-extralight text-[#606060] hover:text-[#000000] text-[14px]`}>Custom Audiences</p>
            </div>
          </div>
          <div className='flex sm:justify-end justify-center'>
            <div className='flex flex-col justify-between'>
              <div className='flex flex-col text-center sm:text-left mb-5 sm:mb-0'>
                <h3 className={`${bricolageGrotesque.className} capitalize  `}>security</h3>
                <p className={`${outfit.className} font-extralight text-[#606060] hover:text-[#000000] text-[14px] capitalize`}>SOC 2 verified</p>
                <p className={`${outfit.className} font-extralight text-[#606060] hover:text-[#000000] text-[14px] capitalize`}>encrypted</p>
                <p className={`${outfit.className} font-extralight text-[#606060] hover:text-[#000000] text-[14px] capitalize`}>24/7 Global Fraud Monitoring</p>
                <p className={`${outfit.className} font-extralight text-[#606060] hover:text-[#000000] text-[14px] capitalize`}>AWS Servers - No data collected</p>
                <p className={`${outfit.className} font-extralight text-[#606060] hover:text-[#000000] text-[14px] capitalize`}>GDPR Compliant</p>
                <p className={`${outfit.className} font-extralight text-[#606060] hover:text-[#000000] text-[14px] capitalize`}>RBI Compliant</p>
              </div>
              <div className='flex flex-col text-center sm:text-left'>
                <h3 className={`${bricolageGrotesque.className} capitalize  `}>company</h3>
                <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>about</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>contact us</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>careers</p>
                <p className={`${outfit.className} font-extralight  text-[#606060] hover:text-[#000000] text-[14px]`}>Terms of Service</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>privacy Policy</p>
                <p className={`${outfit.className} font-extralight capitalize text-[#606060] hover:text-[#000000] text-[14px]`}>refund policy</p>
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
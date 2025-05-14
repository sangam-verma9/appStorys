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
import Link from 'next/link';



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
      <Link href="/stories" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Stories</Link>
      <Link href="/reels" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>reels/Short videos</Link>
      <Link href="/pipVideos" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>PiP Videos</Link>
      <Link href="/banners" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>banners</Link>
      <Link href="/floaters" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Floaters</Link>
      <Link href="/widgets" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Widgets</Link>
      <Link href="/quizzes" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Quizzes</Link>
      <Link href="/surveys" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Surveys</Link>
      <Link href="/csats" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>CSAT Feedback</Link>
      <Link href="/coachmarks" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Coachmarks</Link>
      <Link href="/tooltips" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>tooltips</Link>
      <Link href="/scratchCards" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Scratch Cards</Link>
      <Link href="/bottomsheets" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>bottom Sheets</Link>
      <Link href="/spotlights" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Spotlight</Link>
    </div>
  </div>
  <div className='flex justify-center'>
    <div className='flex flex-col justify-between'>
      <div className='flex flex-col text-center sm:text-left mb-5 sm:mb-0'>
        <h3 className={`${bricolageGrotesque.className} capitalize text-[18px] `}>Our SDKs</h3>
        <Link href="/ios" className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000]  `}>iOS</Link>
        <Link href="/android" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>android</Link>
        <Link href="/flutter" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>flutter</Link>
        <Link href="/react-native" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>react native</Link>
        <Link href="/reactjs" className={`${outfit.className} font-extralight  text-[#2b2a2a] hover:text-[#000000] `}>React.js</Link>
        <Link href="/angular" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>angular</Link>
        <Link href="/wordpress" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>wordpress</Link>
        <Link href="/shopify" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>shopify</Link>
      </div>
      <div className='flex flex-col text-center sm:text-left mb-5 sm:mb-0'>
        <h3 className={`${bricolageGrotesque.className} capitalize  text-[18px]`}>resources</h3>
        <Link href="/blogs" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>blog</Link>
        <Link href="/inspiration-gallery" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>inspiration gallery</Link>
        <Link href="/appstorys-book" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>appStorys book</Link>
      </div>
    </div>
  </div>

  <div className='flex justify-center'>
    <div className='flex flex-col text-center sm:text-left mb-5 sm:mb-0'>
      <h3 className={`${bricolageGrotesque.className} capitalize  text-[18px]`}>Integrations</h3>
      <Link href="/clevertap" className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>cleverTap</Link>
      <Link href="/moengage" className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000] `}>MoEngage</Link>
      <Link href="/mixpanel" className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000] `}>Mixpanel</Link>
      <Link href="/mparticle" className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000] `}>mParticle</Link>
      <Link href="/custom-audiences" className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000] `}>Custom Audiences</Link>
    </div>
  </div>
  <div className='flex sm:justify-end justify-center'>
    <div className='flex flex-col justify-between'>
      <div className='flex flex-col text-center sm:text-left mb-5 sm:mb-0'>
        <h3 className={`${bricolageGrotesque.className} capitalize text-[18px] `}>security</h3>
        <Link href="/soc2" className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>SOC 2 verified</Link>
        <Link href="/encryption" className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>encrypted</Link>
        <Link href="/fraud-monitoring" className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>24/7 Global Fraud Monitoring</Link>
        <Link href="/aws-servers" className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>AWS Servers - No data collected</Link>
        <Link href="/gdpr" className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>GDPR Compliant</Link>
        <Link href="/rbi" className={`${outfit.className} font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>RBI Compliant</Link>
      </div>
      <div className='flex flex-col text-center sm:text-left'>
        <h3 className={`${bricolageGrotesque.className} capitalize text-[18px] `}>company</h3>
        <Link href="/about" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>about</Link>
        <Link href="/contact" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>contact us</Link>
        <Link href="/career" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>careers</Link>
        <Link href="/security" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Security</Link>
        <Link href="/privacypolicy" className={`${outfit.className} font-extralight  text-[#2b2a2a] hover:text-[#000000] `}>Terms of Service</Link>
        <Link href="/privacypolicy" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>privacy Policy</Link>
        <Link href="/privacypolicy" className={`${outfit.className} font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>refund policy</Link>
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
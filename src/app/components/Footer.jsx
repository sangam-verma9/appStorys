"use client";
import Image from 'next/image'
import React from 'react'
import logo from "@/assets/favicon.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import footer_img1 from "@/assets/footer_img1.png"
import footer_img2 from "@/assets/footer_img2.png"
import Link from 'next/link';
import { Poppins } from "next/font/google";

import store from "../store/store";
import ContactModal from './ContactModal';
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// sm: px - 14 md: px - 20 lg: px - 32 xl: px - 40 px - 10
const Footer = () => {
  const { setRequestDemoClick, isContactModalOpen, openContactModal, closeContactModal } = store();
  return (
    <div className='w-full bg-gradient-to-b from-white to-[#FFEBE0]'>
      <div className='sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[1300px] px-10 py-8 mx-auto'>
        <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-center`}>
          <h2 className={`text-[28px]  leading-tight font-medium`}>Get started today or schedule<br /> a quick 15 min demo</h2>
          <div className='mt-5 sm:mt-0'><button className={`  px-8 py-3 bg-[#FD5F03] cursor-pointer rounded-md text-white text-md sm:text-xl font-bold`} onClick={() => {
            setRequestDemoClick(true);
            openContactModal();
          }}>SCHEDULE A DEMO</button></div>
        </div>
        <div className='w-[100%] h-[0.8px] bg-[#fcf1e4] relative my-4'></div>
        <div className='flex flex-col sm:flex-row justify-between sm:items-center my-4 py-2'>
          <div className='flex mb-5 sm:mb-0 justify-center sm:justify-normal items-center'>
            <img src={logo.src} alt={`${logo}`} className="mr-2 md:w-[5%] w-[10%] " />
            <h1 className={`hover:cursor-pointer text-[#FD5F03] font-semibold text-[30px] ${poppins.className} leading-[110%] `}>
              AppStorys
            </h1>
          </div>
          <div className='flex justify-center sm:justify-normal'>
            <p >
              <Link href={"https://www.linkedin.com/company/appstorys/"}><FaLinkedin className='w-[35px] h-[35px] mr-3 cursor-pointer' /></Link>
            </p>
            <p >
              <Link href={"https://www.instagram.com/appstorys__/"}><FaInstagram className='w-[35px] h-[35px] mr-3 cursor-pointer' /></Link>
            </p>
            <p>
              <Link href={"https://x.com/AppStorys_"}><FaXTwitter className='w-[35px] h-[35px] mr-3 cursor-pointer' /></Link>
            </p>
            <p >
              <Link href={"https://www.youtube.com/@appstorys00"}><FaYoutube className='w-[35px] h-[35px] mr-3 cursor-pointer' /></Link>
            </p>
          </div>
        </div>
        <div className='w-[100%] h-[0.8px] bg-[#fcf1e4] relative my-2'></div>
        <div className='grid grid-cols-1 sm:grid-cols-4 my-4 mt-6'>
          <div className='flex justify-center sm:justify-normal'>
            <div className='flex flex-col text-center sm:text-left mb-5 sm:mb-0'>
              <h3 className={` capitalize text-[18px]`}>Integratable growth Tools</h3>
              <Link href="/stories" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Stories</Link>
              <Link href="/reels" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>reels/Short videos</Link>
              <Link href="/pipVideos" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>PiP Videos</Link>
              <Link href="/banners" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>banners</Link>
              <Link href="/floaters" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Floaters</Link>
              <Link href="/widgets" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Widgets</Link>
              <Link href="/quizzes" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Quizzes</Link>
              <Link href="/surveys" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Surveys</Link>
              <Link href="/csats" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>CSAT Feedback</Link>
              <Link href="/coachmarks" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Coachmarks</Link>
              <Link href="/tooltips" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>tooltips</Link>
              <Link href="/scratchCards" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Scratch Cards</Link>
              <Link href="/bottomsheets" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>bottom Sheets</Link>
              <Link href="/spotlights" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Spotlight</Link>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='flex flex-col justify-between'>
              <div className='flex flex-col text-center sm:text-left mb-5 sm:mb-0'>
                <h3 className={` capitalize text-[18px] `}>Our SDKs</h3>
                <p href="/ios" className={` font-extralight text-[#2b2a2a] hover:text-[#000000]  `}>iOS</p>
                <p href="/android" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>android</p>
                <p href="/flutter" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>flutter</p>
                <p href="/react-native" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>react native</p>
                <p href="/reactjs" className={` font-extralight  text-[#2b2a2a] hover:text-[#000000] `}>React.js</p>
                <p href="/angular" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>angular</p>
                <p href="/wordpress" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>wordpress</p>
                <p href="/shopify" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>shopify</p>
              </div>
              <div className='flex flex-col text-center sm:text-left mb-5 sm:mb-0'>
                <h3 className={` capitalize  text-[18px]`}>resources</h3>
                <Link href="/blogs" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>blog</Link>
                <Link href="/inspiration-gallery" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>inspiration gallery</Link>
                <Link href="/AppStoryseBook.pdf" className={` font-extralight  text-[#2b2a2a] hover:text-[#000000] `}>AppStorys eBook</Link>
              </div>
            </div>
          </div>

          <div className='flex justify-center'>
            <div className='flex flex-col text-center sm:text-left mb-5 sm:mb-0'>
              <h3 className={` capitalize  text-[18px]`}>Integrations</h3>
              <p href="/clevertap" className={` font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>cleverTap</p>
              <p href="/moengage" className={` font-extralight text-[#2b2a2a] hover:text-[#000000] `}>MoEngage</p>
              <p href="/mixpanel" className={` font-extralight text-[#2b2a2a] hover:text-[#000000] `}>Mixpanel</p>
              <p href="/mparticle" className={` font-extralight text-[#2b2a2a] hover:text-[#000000] `}>mParticle</p>
              <p href="/custom-audiences" className={` font-extralight text-[#2b2a2a] hover:text-[#000000] `}>Custom Audiences</p>
            </div>
          </div>
          <div className='flex sm:justify-end justify-center'>
            <div className='flex flex-col justify-between'>
              <div className='flex flex-col text-center sm:text-left mb-5 sm:mb-0'>
                <h3 className={` capitalize text-[18px] `}>security</h3>
                <p href="/soc2" className={` font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>SOC 2 verified</p>
                <p href="/encryption" className={` font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>encrypted</p>
                <p href="/fraud-monitoring" className={` font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>24/7 Global Fraud Monitoring</p>
                <p href="/aws-servers" className={` font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>AWS Servers - No data collected</p>
                <p href="/gdpr" className={` font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>GDPR Compliant</p>
                <p href="/rbi" className={` font-extralight text-[#2b2a2a] hover:text-[#000000]  capitalize`}>RBI Compliant</p>
              </div>
              <div className='flex flex-col text-center sm:text-left mt-5'>
                <h3 className={` capitalize text-[18px] `}>company</h3>
                <Link href="/about" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>about</Link>
                <Link href="/contact" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>contact us</Link>
                <Link href="/career" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>careers</Link>
                <Link href="/security" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>Security</Link>
                <Link href="/privacypolicy" className={` font-extralight  text-[#2b2a2a] hover:text-[#000000] `}>Terms of Service</Link>
                <Link href="/privacypolicy" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>privacy Policy</Link>
                {/* <Link href="/privacypolicy" className={` font-extralight capitalize text-[#2b2a2a] hover:text-[#000000] `}>refund policy</Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className='flex-col sm:flex-row flex justify-between mt-20 items-center'>
          <div><p className={` font-extralight text-[14px] mb-5 sm:mb-0`}>2025 AppStorys Inc. All rights reserved</p></div>
          <div><p className={` text-[18px] mb-5 sm:mb-0`}>Made with ❤️ in USA & India</p></div>
          <div className='flex w-[20%] justify-end'>
            <img src={footer_img1.src} height={15} width={50} alt='footer img 1' className='mx-4' />
            <img src={footer_img2.src} height={15} width={65} alt='footer img 2' />
          </div>
        </div>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  )
}

export default Footer
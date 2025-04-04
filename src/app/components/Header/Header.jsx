// "use client";
// import "./Header.css"
// import Link from "next/link";
// import React, { useState } from "react";
// import Image from "next/image";
// import { Outfit, Bricolage_Grotesque, Poppins } from 'next/font/google';
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { AiFillAndroid } from "react-icons/ai";
// import { FaApple } from "react-icons/fa";
// import { FaReact } from "react-icons/fa";
// import { FaFlutter } from "react-icons/fa6";
// import { FaAngular } from "react-icons/fa6";
// import { FaWordpressSimple } from "react-icons/fa";
// import { FaShopify } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa6";
// import down_arrow_black from "@/assets/down_arrow_black.png";
// import down_arrow_white from "@/assets/down_arrow_white.png";
// import hamburger_black from "@/assets/hamburger_black.png";
// import hamburger_white from "@/assets/hamburger_white.png";
// import banner from "@/assets/banner.png";
// import floater from "@/assets/floater.png";
// import pip from "@/assets/pip.png";
// import bottom_sheet from "@/assets/bottom_sheet.png";
// import tooltip from "@/assets/tooltip.png";
// import spot from "@/assets/spotlight.png";
// import scratch from "@/assets/scratchcard.png";
// import reel from "@/assets/reel.png";
// import coach from "@/assets/coachmark.png";
// import survey from "@/assets/survey.png";
// import quiz from "@/assets/quizzes.png";
// import csat from "@/assets/csat.png";
// import widget from "@/assets/widget.png";
// import story from "@/assets/story.png";
// import bulb from "@/assets/bulb.png";
// import career from "@/assets/career.png";
// import blog from "@/assets/blog.png";
// import angular from "@/assets/angular.png";
// import reactnative from "@/assets/reactnative.png";
// import react from "@/assets/reactnative.png";
// import flutter from "@/assets/flutter.png";
// import logo from "@/assets/favicon.png";
// import right_arrow_orange from "@/assets/right_arrow_orange.png";
// import right_arrow_white from "@/assets/right_arrow_white.png";
// import mparticle_icon from "@/assets/mparticel_icon.png";
// import clevertap_icon from "@/assets/clevertap_icon.png";
// import moengage_icon from "@/assets/moengage_icon.png"
// import custom_audienec_icon from "@/assets/custom_audience_icon.png"
// import { motion } from "framer-motion";
// import store from "../../store/store";
// const outfit = Outfit({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
// });
// const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800'] });

// const Header = ({ style }) => {
//   const [dropdownOpen, setDropdownOpen] = useState({
//     feature: false,
//     advanceSolutions: false,
//     resources: false,
//     sdks: false,
//   });

//   const [listVisible, setListVisible] = useState(false);

//   const handleClick = (link) => {
//     setDropdownOpen((prevState) => ({
//       feature: link === "feature" ? !prevState.feature : false,
//       advanceSolutions: link === "advanceSolutions" ? !prevState.advanceSolutions : false,
//       resources: link === "resources" ? !prevState.resources : false,
//       sdks: link === "sdks" ? !prevState.sdks : false,
//     }));
//   };

//   const handleOptionClick = () => {
//     setDropdownOpen({ feature: false });
//     setDropdownOpen({ advanceSolutions: false });
//     setDropdownOpen({ resources: false });
//     setDropdownOpen({ sdks: false });
//     setListVisible(false);
//   };

//   const { setRequestDemoClick } = store();

//   return (
//     <>
//       <div
//         className={`w-full bg-transparent relative z-[1000] flex flex-col justify-start items-center h-full py-[15px] px-[8%] max-[1129px]:px-[2%] min-[927px]:px-[0%] min-[927px]:py-[20px]`}
//       >
//         <div className="flex justify-between items-center w-full min-[1158px]:px-[3%] max-[1158px]:px-[3%] h-full">
//           <div className="flex justify-start items-center gap-x-[4vw] max-[1158px]:gap-x-[3vw]">
//             <div
//               className={`flex flex-col justify-center items-center h-full ${style === "dark" ? "text-[#fff]" : "text-[#000]"}`}>
//               <Link
//                 href="/"
//                 onClick={() => {
//                   handleOptionClick();
//                   setRequestDemoClick(false);
//                 }}
//                 className="flex items-center"
//               >
//                 <img src={logo.src} alt={`${logo}`} width={35} height={35} className="mr-2" />
//                 <h1
//                   className={`hover:cursor-pointer text-[#FD5F03] ${poppins.className} font-semibold text-[4vh] leading-[110%]`}
//                 >
//                   AppStorys
//                 </h1>
//               </Link>
//             </div>
//             <div
//               className={`hidden min-[1078px]:flex justify-center items-center gap-x-[2.8vw] max-[1236px]:gap-x-[2vw] h-full ${style === "dark" ? "text-[#fff]" : "text-[#000]"
//                 }`}
//             >
//               <Link
//                 href="/about"
//                 className="text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer "
//                 onClick={() => {
//                   handleOptionClick;
//                   setRequestDemoClick(false);
//                 }}
//               >
//                 About Us
//               </Link>
//               <div className="relative">
//                 <button
//                   onClick={() => {
//                     handleClick("feature");
//                     setRequestDemoClick(false);
//                   }}
//                   className="text-[2vh] font-InstrumentSans tracking-[0.6px]  hover:cursor-pointer  flex justify-center items-center gap-x-[0.5vw]"
//                 >
//                   Features
//                   <RiArrowDropDownLine className={`h-[25px] w-[25px] ${dropdownOpen.feature
//                     ? "rotate-180 ease-in duration-150"
//                     : ""
//                     }`} />
//                 </button>
//               </div>
//               <div className="relative">
//                 <button
//                   onClick={() => {
//                     handleClick("advanceSolutions");
//                     setRequestDemoClick(false);
//                   }}
//                   className="text-[2vh] font-InstrumentSans tracking-[0.6px]  hover:cursor-pointer  flex justify-center items-center gap-x-[0.5vw]"
//                 >
//                   Advanced Solutions
//                   <RiArrowDropDownLine className={`h-[25px] w-[25px] ${dropdownOpen.advanceSolutions
//                     ? "rotate-180 ease-in duration-150"
//                     : ""
//                     }`} />
//                 </button>
//               </div>
//               <div className="relative">
//                 <button
//                   onClick={() => {
//                     handleClick("resources");
//                     setRequestDemoClick(false);
//                   }}
//                   className="text-[2vh] font-InstrumentSans tracking-[0.6px]  hover:cursor-pointer  flex justify-center items-center gap-x-[0.5vw]"
//                 >
//                   Resources
//                   <RiArrowDropDownLine className={`h-[25px] w-[25px] ${dropdownOpen.resources
//                     ? "rotate-180 ease-in duration-150"
//                     : ""
//                     }`} />
//                 </button>
//               </div>
//               <div className="relative">
//                 <button
//                   onClick={() => {
//                     handleClick("sdks");
//                     setRequestDemoClick(false);
//                   }}
//                   className="text-[2vh] font-InstrumentSans tracking-[0.6px]  hover:cursor-pointer  flex justify-center items-center gap-x-[0.5vw]"
//                 >
//                   Our SDKs
//                   <RiArrowDropDownLine className={`h-[25px] w-[25px] ${dropdownOpen.sdks
//                     ? "rotate-180 ease-in duration-150"
//                     : ""
//                     }`} />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="hidden min-[1078px]:flex justify-center items-center gap-x-[1vw] h-full">

//             {/* Request Demo Button */}
//             <motion.button
//               className="relative overflow-hidden flex border-3 border-[#FD5F03] justify-center items-center text-[1.6vh] font-InstrumentSans gap-x-[0.6vw] text-[#FD5F03] font-bold tracking-[1.18px] h-[6vh] w-[10vw] bg-white rounded-lg hover:shadow-[0_0_30px_5px_rgba(253,95,3,0.7)] transition-shadow duration-300 "
//               onClick={() => {
//                 handleOptionClick();
//                 setRequestDemoClick(true);
//               }}
//               whileHover="hover"
//             >
//               {/* Background Animation */}
//               <motion.div
//                 variants={{
//                   initial: { top: "0%" },
//                   hover: { top: "-100%" },
//                 }}
//                 transition={{ duration: 0.3 }}
//                 className="absolute top-0 left-0 w-full h-full bg-white z-0"
//               />
//               <motion.div
//                 variants={{
//                   initial: { top: "100%" },
//                   hover: { top: "0%" },
//                 }}
//                 transition={{ duration: 0.3 }}
//                 className="absolute top-full left-0 w-full h-full bg-orange-500 z-0"
//               />

//               {/* Text Layer */}
//               <motion.span
//                 variants={{
//                   initial: { y: 0 },
//                   hover: { y: "-100%" },
//                 }}
//                 transition={{ duration: 0.3 }}
//                 className="absolute w-full h-full flex items-center justify-center text-orange-500 font-semibold text-lg z-20"
//               >
//                 Demo <Image src={right_arrow_orange} height={10} width={10} className="ml-2" alt="right arrow " />
//               </motion.span>
//               <motion.span
//                 variants={{
//                   initial: { y: "100%" },
//                   hover: { y: "0%" },
//                 }}
//                 transition={{ duration: 0.3 }}
//                 className="absolute w-full h-full flex items-center justify-center text-white font-semibold text-lg z-10"
//               >
//                 Demo <Image src={right_arrow_white} height={10} width={10} className="ml-2" alt="right arrow " />
//               </motion.span>
//             </motion.button>

//             {/* Login Button */}
//             <motion.div
//               className="relative overflow-hidden flex border-3 border-[#FD5F03] justify-center items-center text-[1.6vh] font-InstrumentSans gap-x-[0.6vw] text-[#FD5F03] font-bold tracking-[1.18px] h-[6vh] w-[10vw] cursor-pointer hover:shadow-[0_0_30px_5px_rgba(253,95,3,0.7)] transition-shadow duration-300 bg-white rounded-lg"
//               onClick={() => {
//                 handleOptionClick();
//                 setRequestDemoClick(false);
//               }}
//               whileHover="hover"
//             >
//               <Link href="https://admin.appstorys.com/" target="_blank" className="w-full h-full flex items-center justify-center relative">
//                 {/* Background Animation */}
//                 <motion.div
//                   variants={{
//                     initial: { top: "0%" },
//                     hover: { top: "-100%" },
//                   }}
//                   transition={{ duration: 0.3 }}
//                   className="absolute top-0 left-0 w-full h-full bg-white z-0"
//                 />
//                 <motion.div
//                   variants={{
//                     initial: { top: "100%" },
//                     hover: { top: "0%" },
//                   }}
//                   transition={{ duration: 0.3 }}
//                   className="absolute top-full left-0 w-full h-full bg-orange-500 z-0"
//                 />

//                 {/* Text Layer */}
//                 <motion.span
//                   variants={{
//                     initial: { y: 0 },
//                     hover: { y: "-100%" },
//                   }}
//                   transition={{ duration: 0.3 }}
//                   className="absolute w-full h-full flex items-center justify-center text-[#FD5F03] font-bold text-lg z-20"
//                 >
//                   Login <Image src={right_arrow_orange} height={10} width={10} className="ml-2" alt="right arrow " />
//                 </motion.span>
//                 <motion.span
//                   variants={{
//                     initial: { y: "100%" },
//                     hover: { y: "0%" },
//                   }}
//                   transition={{ duration: 0.3 }}
//                   className="absolute w-full h-full flex items-center justify-center text-white font-bold text-lg z-10"
//                 >
//                   Login <Image src={right_arrow_white} height={10} width={10} className="ml-2" alt="right arrow " />
//                 </motion.span>
//               </Link>
//             </motion.div>

//           </div>
//           <Image
//             height={10}
//             width={10}
//             src={`${style === "dark" ? hamburger_white.src : hamburger_black.src}`}
//             alt={`${style === "dark"
//               ? "AppStorys hamburger_white"
//               : "AppStorys hamburger_black"
//               }`}
//             className="min-[1078px]:hidden h-[13.5px] w-auto"
//             onClick={() => setListVisible(!listVisible)}
//           />
//         </div>

//         {dropdownOpen.feature && (
//           <motion.div
//             className="hidden min-[1078px]:flex absolute top-[80px] z-50 bg-white shadow-lg w-[100%]"
//             initial={{ y: -30, opacity: 0.9 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="w-full ">
//               <h3 className={`text-left mb-4 py-3 px-40 ${outfit.className} font-light text-[#000] text-[12px] border-b-2 border-t-2 border-[#D9D9D9]`}> CORE FEATURES </h3>
//               <div className="flex w-full pt-2 pb-5 px-40 gap-x-8">
//                 {/* Rich Media Content Column */}
//                 <div className="flex flex-col w-1/4">
//                   <h3 className={`${outfit.className} text-[12px] text-[#000] font-light  mb-4  border-[#D9D9D9] border-b-2 pb-2`}>RICH MEDIA CONTENT</h3>
//                   <ul className="space-y-4">
//                     <li className="hover:bg-sky-100 flex w-full">
//                       <Link href="/stories" className="flex w-[100%] items-center gap-x-3 group border-[#D9D9D9] border-b-2 pb-2" onClick={handleOptionClick}>
//                         <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                           <Image src={story} alt="Stories" width={20} height={20} />
//                         </div>
//                         <div>
//                           <p className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Stories</p>
//                           <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Rich media bite sized content</p>
//                         </div>
//                         <FaArrowRight className="relative right-0" />
//                       </Link>
//                     </li>
//                     <li className="hover:bg-sky-100 flex w-full">
//                       <Link href="/reels" className="flex w-[100%] items-center gap-x-3 group border-[#D9D9D9] border-b-2 pb-2" onClick={handleOptionClick}>
//                         <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                           <Image src={reel} alt="Reels" width={20} height={20} />
//                         </div>
//                         <div>
//                           <p className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Reels</p>
//                           <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Present constantly scrolling short videos</p>
//                         </div>
//                         <FaArrowRight className="" />
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/pipVideos" className="flex items-center gap-x-3 group border-[#D9D9D9] border-b-2 pb-2" onClick={handleOptionClick}>
//                         <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                           <Image src={pip} alt="PIP Videos" width={20} height={20} />
//                         </div>
//                         <div>
//                           <p className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>PIP Videos</p>
//                           <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Non-intrusive movable on-screen video</p>
//                         </div>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/floaters" className="flex items-center gap-x-3 group border-[#D9D9D9] border-b-2 pb-2" onClick={handleOptionClick}>
//                         <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                           <Image src={bottom_sheet} alt="Bottom Sheets" width={20} height={20} />
//                         </div>
//                         <div>
//                           <p className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Bottom Sheets</p>
//                           <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Rich media bite sized content</p>
//                         </div>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>

//                 {/* Interactive Elements Column */}
//                 <div className="flex flex-col w-1/4">
//                   <h3 className={`${outfit.className} text-[12px] text-[#000] font-light  mb-4  border-[#D9D9D9] border-b-2 pb-2`}>INTERACTIVE ELEMENTS</h3>
//                   <ul className="space-y-4">
//                     <li>
//                       <Link href="/banners" className="flex items-center gap-x-3 group border-[#D9D9D9] border-b-2 pb-2" onClick={handleOptionClick}>
//                         <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                           <Image src={banner} alt="Banner" width={20} height={20} />
//                         </div>
//                         <div>
//                           <p className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Banner</p>
//                           <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Automatic banner moving with screen</p>
//                         </div>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/csats" className="flex items-center gap-x-3 group border-[#D9D9D9] border-b-2 pb-2" onClick={handleOptionClick}>
//                         <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                           <Image src={floater} alt="Widgets" width={20} height={20} />
//                         </div>
//                         <div>
//                           <p className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Widgets</p>
//                           <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Small Image/GIF on screen floating with content</p>
//                         </div>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/widgets" className="flex items-center gap-x-3 group border-[#D9D9D9] border-b-2 pb-2" onClick={handleOptionClick}>
//                         <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                           <Image src={widget} alt="Widgets" width={20} height={20} />
//                         </div>
//                         <div>
//                           <p className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Widgets</p>
//                           <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Customizable scalable images/animation</p>
//                         </div>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/scratchCards" className="flex items-center gap-x-3 group border-[#D9D9D9] border-b-2 pb-2" onClick={handleOptionClick}>
//                         <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                           <Image src={scratch} alt="Scratch Card" width={20} height={20} />
//                         </div>
//                         <div>
//                           <p className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Scratch Card</p>
//                           <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Gamification option to engage users</p>
//                         </div>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>

//                 {/* Take Action Column */}
//                 <div className="flex flex-col w-1/4">
//                   <h3 className={`${outfit.className} text-[12px] text-[#000] font-light  mb-4  border-[#D9D9D9] border-b-2 pb-2`}>TAKE ACTION</h3>
//                   <ul className="space-y-4">
//                     <li>
//                       <Link href="/quizzes" className="flex items-center gap-x-3 group border-[#D9D9D9] border-b-2 pb-2" onClick={handleOptionClick}>
//                         <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                           <Image src={quiz} alt="Quiz" width={20} height={20} />
//                         </div>
//                         <div>
//                           <p className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Quiz</p>
//                           <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Ask users questions and engage them</p>
//                         </div>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/surveys" className="flex items-center gap-x-3 group border-[#D9D9D9] border-b-2 pb-2" onClick={handleOptionClick}>
//                         <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                           <Image src={survey} alt="Survey" width={20} height={20} />
//                         </div>
//                         <div>
//                           <p className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Survey</p>
//                           <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Get user inputs</p>
//                         </div>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/csats" className="flex items-center gap-x-3 group border-[#D9D9D9] border-b-2 pb-2" onClick={handleOptionClick}>
//                         <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                           <Image src={csat} alt="CSAT Feedback" width={20} height={20} />
//                         </div>
//                         <div>
//                           <p className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>CSAT Feedback</p>
//                           <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Measure services via feedback</p>
//                         </div>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>

//                 {/* Onboarding Column */}
//                 <div className="flex flex-col w-1/4">
//                   <h3 className={`${outfit.className} text-[12px] text-[#000] font-light  mb-4  border-[#D9D9D9] border-b-2 pb-2`}>ONBOARDING</h3>
//                   <ul className="space-y-4">
//                     <li>
//                       <Link href="/coachmarks" className="flex items-center gap-x-3 group border-[#D9D9D9] border-b-2 pb-2" onClick={handleOptionClick}>
//                         <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                           <Image src={tooltip} alt="Tooltips" width={20} height={20} />
//                         </div>
//                         <div>
//                           <p className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Tooltips</p>
//                           <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Onboarding journey for users</p>
//                         </div>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/coachmarks" className="flex items-center gap-x-3 group border-[#D9D9D9] border-b-2 pb-2" onClick={handleOptionClick}>
//                         <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                           <Image src={coach} alt="Coachmarks" width={20} height={20} />
//                         </div>
//                         <div>
//                           <p className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Coachmarks</p>
//                           <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Highlight new features with wrapper</p>
//                         </div>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/spotlights" className="flex items-center gap-x-3 group border-[#D9D9D9] border-b-2 pb-2" onClick={handleOptionClick}>
//                         <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                           <Image src={spot} alt="Spotlight" width={20} height={20} />
//                         </div>
//                         <div>
//                           <p className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Spotlight</p>
//                           <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Get user attention to specific features</p>
//                         </div>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//         {dropdownOpen.resources && (
//           <motion.div
//             className="hidden min-[1078px]:flex absolute top-[80px] w-[95%] z-50 bg-white rounded-b-xl shadow-lg "
//             initial={{ y: -30, opacity: 0.9 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="flex w-full p-6">
//               <div className="flex flex-col w-full">
//                 {/* Main resources section */}
//                 <div className="flex mb-6">
//                   {/* Left column */}
//                   <div className="flex flex-col">
//                     <h3 className={`${outfit.className} text-[12px] text-[#000] font-light  mb-4`}>RESOURCES</h3>
//                     <ul className="space-y-4 flex ">
//                       <li>
//                         <Link href="/blogs" className="flex items-center gap-x-3 group" onClick={handleOptionClick}>
//                           <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                             <Image src={blog} alt="Blog" width={20} height={20} />
//                           </div>
//                           <div>
//                             <p className="font-medium text-blue-700 group-hover:text-blue-800">Blog</p>
//                             <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Latest articles and updates</p>
//                           </div>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/career" className="flex items-center gap-x-3 group" onClick={handleOptionClick}>
//                           <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                             <Image src={career} alt="Careers" width={20} height={20} />
//                           </div>
//                           <div>
//                             <p className="font-medium text-blue-700 group-hover:text-blue-800">Careers</p>
//                             <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Join our growing team</p>
//                           </div>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/inspirationGallery" className="flex items-center gap-x-3 group" onClick={handleOptionClick}>
//                           <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                             <Image src={bulb} alt="Inspiration Gallery" width={20} height={20} />
//                           </div>
//                           <div>
//                             <p className="font-medium text-blue-700 group-hover:text-blue-800">Inspiration Gallery</p>
//                             <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Find ideas for your next project</p>
//                           </div>
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>

//                   {/* Empty space for balance */}
//                   <div className="w-3/4"></div>
//                 </div>

//                 {/* SDKs & Frameworks section */}
//                 <div>
//                   <h3 className={`${outfit.className} text-[12px] text-[#000] font-light  mb-4`}>SDKs & FRAMEWORKS</h3>
//                   <div className="grid grid-cols-4 gap-4">
//                     <Link href="#" className="flex items-center gap-x-3 group" onClick={handleOptionClick}>
//                       <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                         <Image src={react} alt="React" width={20} height={20} className="object-contain" />
//                       </div>
//                       <div>
//                         <p className="font-medium text-blue-700 group-hover:text-blue-800">React</p>
//                         <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Web framework</p>
//                       </div>
//                     </Link>

//                     <Link href="#" className="flex items-center gap-x-3 group" onClick={handleOptionClick}>
//                       <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                         <Image src={flutter} alt="Flutter" width={20} height={20} className="object-contain" />
//                       </div>
//                       <div>
//                         <p className="font-medium text-blue-700 group-hover:text-blue-800">Flutter</p>
//                         <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Cross-platform framework</p>
//                       </div>
//                     </Link>

//                     <Link href="#" className="flex items-center gap-x-3 group" onClick={handleOptionClick}>
//                       <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                         <Image src={angular} alt="Angular" width={20} height={20} className="object-contain" />
//                       </div>
//                       <div>
//                         <p className="font-medium text-blue-700 group-hover:text-blue-800">Angular</p>
//                         <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Web framework</p>
//                       </div>
//                     </Link>

//                     <Link href="#" className="flex items-center gap-x-3 group" onClick={handleOptionClick}>
//                       <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                         <Image src={reactnative} alt="React Native" width={20} height={20} className="object-contain" />
//                       </div>
//                       <div>
//                         <p className="font-medium text-blue-700 group-hover:text-blue-800">React Native</p>
//                         <p className={`text-xs  ${outfit.className} font-light text-[10px] text-[#898989]`}>Mobile framework</p>
//                       </div>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//         {dropdownOpen.advanceSolutions && (
//           <motion.div
//             className="hidden min-[1078px]:flex absolute top-[80px] z-50 bg-white rounded-b-xl shadow-lg w-[95%]"
//             initial={{ y: -30, opacity: 0.9 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="flex flex-col w-full py-4">
//               <div className="px-5">
//                 <h2>CORE FEATURES</h2>
//               </div>
//               <div className="w-full grid grid-cols-4 gap-x-6 px-6 my-2">
//                 {/* Column 1: Integrations */}
//                 <div className="flex flex-col">
//                   <h3 className="text-xs  uppercase mb-4">Integrations</h3>
//                   <ul className="space-y-4">
//                     <li>
//                       <Link href="/integrations/mixpanel" className="flex items-center gap-x-3 group" onClick={handleOptionClick}>
//                         <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                           <Image src={mparticle_icon.src} alt="Mixpanel" width={18} height={18} />
//                         </div>
//                         <span className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Mixpanel</span>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/integrations/clevertap" className="flex items-center gap-x-3 group" onClick={handleOptionClick}>
//                         <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                           <Image src={clevertap_icon.src} alt="CleverTap" width={18} height={18} />
//                         </div>
//                         <span className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>CleverTap</span>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/integrations/moengage" className="flex items-center gap-x-3 group" onClick={handleOptionClick}>
//                         <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                           <Image src={moengage_icon.src} alt="MoEngage" width={18} height={18} />
//                         </div>
//                         <span className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>MoEngage</span>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/integrations/custom" className="flex items-center gap-x-3 group" onClick={handleOptionClick}>
//                         <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                           <Image src={custom_audienec_icon.src} alt="Custom Audiences" width={18} height={18} />
//                         </div>
//                         <span className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Custom Audiences</span>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>

//                 {/* Segmentation & Cohorts */}
//                 <div className="flex flex-col">
//                   <h3 className="text-xs  uppercase mb-4">Segmentation & Cohorts</h3>
//                   <ul className="space-y-4">
//                     <li>
//                       <div className="flex items-center gap-x-3 group">
//                         <span className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Real-Time Targeting</span>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="flex items-center gap-x-3 group" >
//                         <span className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Feature Adoption Insights</span>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="flex items-center gap-x-3 group">
//                         <span className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Automated Growth Journeys</span>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>



//                 {/* Column 3: Measurement */}
//                 <div className="flex flex-col">
//                   <h3 className="text-xs  uppercase mb-4">Goals & Impact Measurement</h3>
//                   <ul className="space-y-4">
//                     <li>
//                       <div className="flex items-center gap-x-3 group">
//                         <span className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Setup Goals</span>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="flex items-center gap-x-3 group" >
//                         <span className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Measure Impact</span>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="flex items-center gap-x-3 group">
//                         <span className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Goal-Based Event Tracking</span>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//         {dropdownOpen.sdks && (
//           <motion.div
//             className="hidden min-[1078px]:flex absolute top-[80px] z-50 bg-white rounded-b-xl shadow-lg w-[95%]"
//             initial={{ y: -30, opacity: 0.9 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="flex flex-col w-full py-4">
//               <h2 className="px-5 text-center border-[#D9D9D9] border-b-2">OUR SDKs</h2>
//               <div className="w-[50%] grid grid-cols-2 gap-x-6 px-6 my-2 mx-auto">
//                 {/* Column 1: Mobile */}
//                 <div className="flex flex-col">
//                   <h3 className="font-medium text-gray-800 py-3">Mobile</h3>
//                   <ul className="space-y-4">
//                     <li>
//                       <div className="flex items-center gap-x-3 group" >
//                         <div className="w-6 h-6 flex items-center justify-center">
//                           <FaApple className="w-[30px] h-[30px] text-black" />
//                         </div>
//                         <span className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>iOS</span>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="flex items-center gap-x-3 group" >
//                         <div className="w-6 h-6 flex items-center justify-center">
//                           <AiFillAndroid className="w-[30px] h-[30px] text-green-400" />
//                         </div>
//                         <span className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Android</span>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="flex items-center gap-x-3 group" >
//                         <div className="w-6 h-6 flex items-center justify-center">
//                           <FaReact className="w-[30px] h-[30px] text-sky-500" />
//                         </div>
//                         <span className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>React Native</span>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="flex items-center gap-x-3 group" >
//                         <div className="w-6 h-6 flex items-center justify-center">
//                           <FaFlutter className="w-[30px] h-[30px] text-sky-500" />
//                         </div>
//                         <span className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Flutter</span>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="flex items-center gap-x-3 group" >
//                         <div className="w-6 h-6 flex items-center justify-center">
//                           <FaReact className="w-[30px] h-[30px] text-sky-500" />
//                         </div>
//                         <span className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>React.js</span>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="flex items-center gap-x-3 group" >
//                         <div className="w-6 h-6 flex items-center justify-center">
//                           <FaAngular className="w-[30px] h-[30px] text-red-600" />

//                         </div>
//                         <span className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Angular</span>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>

//                 {/* Column 2: Web */}
//                 <div className="flex flex-col">
//                   <h3 className="font-medium text-gray-800 py-3">Web</h3>
//                   <ul className="space-y-4">
//                     <li>
//                       <div className="flex items-center gap-x-3 group">
//                         <div className="w-6 h-6 flex items-center justify-center">
//                           <FaReact className="w-[30px] h-[30px] text-sky-500" />
//                         </div>
//                         <span className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>React.js</span>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="flex items-center gap-x-3 group">
//                         <div className="w-6 h-6 flex items-center justify-center">
//                           <FaAngular className="w-[30px] h-[30px] text-red-600" />
//                         </div>
//                         <span className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Angular</span>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="flex items-center gap-x-3 group">
//                         <div className="w-6 h-6 flex items-center justify-center">
//                           <FaWordpressSimple className="w-[30px] h-[30px] text-black" />
//                         </div>
//                         <span className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Wordpress</span>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="flex items-center gap-x-3 group">
//                         <div className="w-6 h-6 flex items-center justify-center">
//                           <FaShopify className="w-[30px] h-[30px] text-green-600" />
//                         </div>
//                         <span className={`text-[12px] ${bricolageGrotesque.className} text-black group-hover:text-gray-600`}>Shopify</span>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}


//         {listVisible && (
//           <motion.div
//             className={`${style === "dark" ? "text-[#fff]" : "text-[#000]"
//               } hidden max-[1078px]:flex flex-col justify-center max-[1078px]:items-start items-center gap-y-[20px] w-full py-[10px] rounded-bl-3xl rounded-br-3xl max-[425px]:mt-[20px] px-[20px]`}
//             initial={{ y: -30, opacity: 0.9 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -30, opacity: 0.9 }} // Add exit animation
//             transition={{ duration: 0.3 }}
//           >
//             <div className="flex flex-col justify-center items-start w-full">
//               <button
//                 onClick={() => {
//                   handleClick("feature");
//                   setRequestDemoClick(false);
//                 }}
//                 className="text-[2vh] font-InstrumentSans tracking-[0.6px]  hover:cursor-pointer  flex justify-center items-center gap-x-[0.5vw]"
//               >
//                 Features
//                 <Image
//                   height={10}
//                   width={10}
//                   src={`${style === "dark" ? down_arrow_white.src : down_arrow_black.src
//                     }`}
//                   alt={`${style === "dark"
//                     ? "AppStorys down_arrow_white"
//                     : "AppStorys down_arrow_black"
//                     }`}
//                   className={`h-[2vh] ${dropdownOpen.feature
//                     ? "rotate-180 ease-in duration-150"
//                     : ""
//                     }`}
//                 />
//               </button>
//               {dropdownOpen.feature && (
//                 <motion.div
//                   className={`hidden max-[1078px]:flex flex-col justify-start items-start w-full gap-x-[10vw] z-[10] max-[1129px]:px-[8%] max-[463px]:px-[0%] max-[1078px]:gap-y-[0px] ${style === "dark"
//                     ? "bg-[#151515] text-white "
//                     : "bg-[#f8f7f7] text-black"
//                     } ${style === "orange" && "bg-[#fff6f2]"}`}
//                   initial={{ y: -30, opacity: 0.9 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <ul className="flex flex-col justify-center items-start py-[1vh] gap-y-[5px] w-full">
//                     <li className="w-full flex justify-start items-center">
//                       <Link
//                         href="/floaters"
//                         className={`block px-4 py-2 w-full ${style === "dark"
//                           ? "hover:bg-[#2a2a2b]"
//                           : "hover:bg-[#f3f4f6]"
//                           }`}
//                         onClick={handleOptionClick}
//                       >
//                         <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
//                           <Image
//                             width={10}
//                             height={10}
//                             src={floater}
//                             alt="AppStorys check_black"
//                             className="h-[4vh]"
//                           />
//                           <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
//                             <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
//                               Floaters
//                             </h1>
//                           </div>
//                         </div>
//                       </Link>
//                     </li>
//                     <li className="w-full flex justify-start items-center ">
//                       <Link
//                         href="/stories"
//                         className={`block px-4 py-2 w-full ${style === "dark"
//                           ? "hover:bg-[#2a2a2b]"
//                           : "hover:bg-[#f3f4f6]"
//                           }`}
//                         onClick={handleOptionClick}
//                       >
//                         <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
//                           <Image
//                             width={10}
//                             height={10}
//                             src={story}
//                             alt="AppStorys check_black"
//                             className="h-[4vh]"
//                           />
//                           <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
//                             <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
//                               Stories
//                             </h1>
//                           </div>
//                         </div>
//                       </Link>
//                     </li>
//                     <li className="w-full flex justify-start items-center">
//                       <Link
//                         href="/pipVideos"
//                         className={`block px-4 py-2 w-full ${style === "dark"
//                           ? "hover:bg-[#2a2a2b]"
//                           : "hover:bg-[#f3f4f6]"
//                           }`}
//                         onClick={handleOptionClick}
//                       >
//                         <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
//                           <Image
//                             width={10}
//                             height={10}
//                             src={pip}
//                             alt="AppStorys check_black"
//                             className="h-[4vh]"
//                           />
//                           <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
//                             <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
//                               PiP Videos
//                             </h1>
//                           </div>
//                         </div>
//                       </Link>
//                     </li>
//                     <li className="flex justify-start items-center w-full">
//                       <Link
//                         href="/coachmarks"
//                         className={`block px-4 py-2 w-full ${style === "dark"
//                           ? "hover:bg-[#2a2a2b]"
//                           : "hover:bg-[#f3f4f6]"
//                           }`}
//                         onClick={handleOptionClick}
//                       >
//                         <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
//                           <Image
//                             width={10}
//                             height={10}
//                             src={coach}
//                             alt="AppStorys check_black"
//                             className="h-[4vh]"
//                           />
//                           <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
//                             <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
//                               Coachmarks
//                             </h1>
//                           </div>
//                         </div>
//                       </Link>
//                     </li>
//                     <li className="w-full flex justify-start items-center">
//                       <Link
//                         href="/banners"
//                         className={`block px-4 py-2 w-full ${style === "dark"
//                           ? "hover:bg-[#2a2a2b]"
//                           : "hover:bg-[#f3f4f6]"
//                           }`}
//                         onClick={handleOptionClick}
//                       >
//                         <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
//                           <Image
//                             width={10}
//                             height={10}
//                             src={banner}
//                             alt="AppStorys check_black"
//                             className="h-[4vh]"
//                           />
//                           <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
//                             <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
//                               Banners
//                             </h1>
//                           </div>
//                         </div>
//                       </Link>
//                     </li>
//                     <li className="w-full flex justify-start items-center">
//                       <Link
//                         href="/surveys"
//                         className={`block px-4 py-2 w-full ${style === "dark"
//                           ? "hover:bg-[#2a2a2b]"
//                           : "hover:bg-[#f3f4f6]"
//                           }`}
//                         onClick={handleOptionClick}
//                       >
//                         <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
//                           <Image
//                             width={10}
//                             height={10}
//                             src={survey}
//                             alt="AppStorys check_black"
//                             className="h-[4vh]"
//                           />
//                           <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
//                             <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
//                               Surveys
//                             </h1>
//                           </div>
//                         </div>
//                       </Link>
//                     </li>
//                     <li className="w-full flex justify-start items-center">
//                       <Link
//                         href="/quizzes"
//                         className={`block px-4 py-2 w-full ${style === "dark"
//                           ? "hover:bg-[#2a2a2b]"
//                           : "hover:bg-[#f3f4f6]"
//                           }`}
//                         onClick={handleOptionClick}
//                       >
//                         <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
//                           <Image
//                             width={10}
//                             height={10}
//                             src={quiz}
//                             alt="AppStorys check_black"
//                             className="h-[4vh]"
//                           />
//                           <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
//                             <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
//                               Quizzes
//                             </h1>
//                           </div>
//                         </div>
//                       </Link>
//                     </li>
//                     <li className="w-full flex justify-start items-center">
//                       <Link
//                         href="/csats"
//                         className={`block px-4 py-2 w-full ${style === "dark"
//                           ? "hover:bg-[#2a2a2b]"
//                           : "hover:bg-[#f3f4f6]"
//                           }`}
//                         onClick={handleOptionClick}
//                       >
//                         <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
//                           <Image
//                             width={10}
//                             height={10}
//                             src={csat}
//                             alt="AppStorys check_black"
//                             className="h-[4vh]"
//                           />
//                           <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
//                             <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
//                               CSATs
//                             </h1>
//                           </div>
//                         </div>
//                       </Link>
//                     </li>
//                     <li className="w-full flex justify-start items-center">
//                       <Link
//                         href="/widgets"
//                         className={`block px-4 py-2 w-full ${style === "dark"
//                           ? "hover:bg-[#2a2a2b]"
//                           : "hover:bg-[#f3f4f6]"
//                           }`}
//                         onClick={handleOptionClick}
//                       >
//                         <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
//                           <Image
//                             width={10}
//                             height={10}
//                             src={widget}
//                             alt="AppStorys check_black"
//                             className="h-[4vh]"
//                           />
//                           <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
//                             <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
//                               Widgets
//                             </h1>
//                           </div>
//                         </div>
//                       </Link>
//                     </li>
//                     <li className="w-full flex justify-start items-center">
//                       <Link
//                         href="/spotlights"
//                         className={`block px-4 py-2 w-full ${style === "dark"
//                           ? "hover:bg-[#2a2a2b]"
//                           : "hover:bg-[#f3f4f6]"
//                           }`}
//                         onClick={handleOptionClick}
//                       >
//                         <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
//                           <Image
//                             width={10}
//                             height={10}
//                             src={spot}
//                             alt="AppStorys check_black"
//                             className="h-[4vh]"
//                           />
//                           <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
//                             <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
//                               Spotlights
//                             </h1>
//                           </div>
//                         </div>
//                       </Link>
//                     </li>
//                     <li className="w-full flex justify-start items-center">
//                       <Link
//                         href="/reels"
//                         className={`block px-4 py-2 w-full ${style === "dark"
//                           ? "hover:bg-[#2a2a2b]"
//                           : "hover:bg-[#f3f4f6]"
//                           }`}
//                         onClick={handleOptionClick}
//                       >
//                         <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
//                           <Image
//                             width={10}
//                             height={10}
//                             src={reel}
//                             alt="AppStorys check_black"
//                             className="h-[4vh]"
//                           />
//                           <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
//                             <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
//                               Reels
//                             </h1>
//                           </div>
//                         </div>
//                       </Link>
//                     </li>
//                     <li className="w-full flex justify-start items-center">
//                       <Link
//                         href="/scratchCards"
//                         className={`block px-4 py-2 w-full ${style === "dark"
//                           ? "hover:bg-[#2a2a2b]"
//                           : "hover:bg-[#f3f4f6]"
//                           }`}
//                         onClick={handleOptionClick}
//                       >
//                         <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
//                           <Image
//                             width={10}
//                             height={10}
//                             src={scratch}
//                             alt="AppStorys check_black"
//                             className="h-[4vh]"
//                           />
//                           <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
//                             <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
//                               Scratch Cards
//                             </h1>
//                           </div>
//                         </div>
//                       </Link>
//                     </li>
//                   </ul>
//                 </motion.div>
//               )}
//             </div>
//             <Link
//               href="/security"
//               className="text-[2vh] font-InstrumentSans tracking-[0.6px]  hover:cursor-pointer "
//               onClick={() => {
//                 handleOptionClick();
//                 setRequestDemoClick(false);
//               }}
//             >
//               Security
//             </Link>
//             <div className="flex flex-col justify-center items-start w-full">
//               <button
//                 onClick={() => {
//                   handleClick("resources");
//                   setRequestDemoClick(false);
//                 }}
//                 className="text-[2vh] font-InstrumentSans tracking-[0.6px]  hover:cursor-pointer  flex justify-center items-center gap-x-[0.5vw]"
//               >
//                 Resources
//                 <Image
//                   width={10}
//                   height={10}
//                   src={`${style === "dark" ? down_arrow_white.src : down_arrow_black.src
//                     }`}
//                   alt={`${style === "dark" ? down_arrow_white.src : down_arrow_black.src
//                     }`}
//                   className={`h-[2vh] ${dropdownOpen.resources
//                     ? "rotate-180 ease-in duration-150"
//                     : ""
//                     }`}
//                 />
//               </button>
//               {dropdownOpen.resources && (
//                 <motion.div
//                   className={`hidden max-[1078px]:flex flex-col justify-start items-start w-full gap-x-[10vw] z-[10] max-[1129px]:px-[8%] max-[463px]:px-[0%] ${style === "dark"
//                     ? "bg-[#151515] text-white "
//                     : "bg-[#f8f7f7] text-black"
//                     } ${style === "orange" && "bg-[#fff6f2]"}`}
//                   initial={{ y: -30, opacity: 0.9 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <ul className="flex flex-col justify-center items-start py-[1vh] gap-y-[5px] w-full">
//                     <li className="w-full flex justify-start items-center">
//                       <Link
//                         href="/blogs"
//                         className={`block px-4 py-2 w-full ${style === "dark"
//                           ? "hover:bg-[#2a2a2b]"
//                           : "hover:bg-[#f3f4f6]"
//                           }`}
//                         onClick={handleOptionClick}
//                       >
//                         <div className="flex justify-start items-center gap-x-[1vw] hover:cursor-pointer">
//                           <Image
//                             width={10}
//                             height={10}
//                             src={blog}
//                             alt="AppStorys check_black"
//                             className="h-[4vh]"
//                           />
//                           <div className="flex flex-col justify-center items-start hover:cursor-pointer">
//                             <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer">
//                               Blog
//                             </h1>
//                           </div>
//                         </div>
//                       </Link>
//                     </li>
//                     <li className="w-full flex justify-start items-center">
//                       <Link
//                         href="/career"
//                         className={`block px-4 py-2 w-full ${style === "dark"
//                           ? "hover:bg-[#2a2a2b]"
//                           : "hover:bg-[#f3f4f6]"
//                           }`}
//                         onClick={handleOptionClick}
//                       >
//                         <div className="flex justify-start items-center gap-x-[1vw] hover:cursor-pointer">
//                           <Image
//                             width={10}
//                             height={10}
//                             src={career}
//                             alt="AppStorys check_black"
//                             className="h-[4vh]"
//                           />
//                           <div className="flex flex-col justify-center items-start hover:cursor-pointer">
//                             <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer">
//                               Careers
//                             </h1>
//                           </div>
//                         </div>
//                       </Link>
//                     </li>
//                     <li className="flex justify-start items-center w-full">
//                       <Link
//                         href="/inspirationGallery"
//                         className={`block px-4 py-2 w-full ${style === "dark"
//                           ? "hover:bg-[#2a2a2b]"
//                           : "hover:bg-[#f3f4f6]"
//                           }`}
//                         onClick={handleOptionClick}
//                       >
//                         <div className="flex justify-start items-center gap-x-[1vw] hover:cursor-pointer">
//                           <Image
//                             width={10}
//                             height={10}
//                             src={bulb}
//                             alt="AppStorys check_black"
//                             className="h-[4vh]"
//                           />
//                           <div className="flex flex-col justify-center items-start hover:cursor-pointer">
//                             <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer">
//                               Inspiration Gallery
//                             </h1>
//                           </div>
//                         </div>
//                       </Link>
//                     </li>
//                   </ul>
//                 </motion.div>
//               )}
//             </div>
//             <Link
//               href="/about"
//               className="text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer "
//               onClick={() => {
//                 handleOptionClick();
//                 setRequestDemoClick(false);
//               }}
//             >
//               About Us
//             </Link>
//             <Link
//               href="/getintouch"
//               className="text-[2vh] font-InstrumentSans tracking-[0.6px]  hover:cursor-pointer "
//               onClick={() => {
//                 handleOptionClick();
//                 setRequestDemoClick(false);
//               }}
//             >
//               Contact Us
//             </Link>
//             <div className="flex w-full flex-col justify-center items-center gap-y-[10px]">
//               <button
//                 className="flex justify-center items-center bg-[#d64830] text-[11.76px] font-1.6vhx-[10.58px] text-white 0.6vw tracking-[1.18px] h-[6vh] w-[12vw] max-[1078px]:w-full gap-x-[10px]"
//                 onClick={() => {
//                   handleOptionClick();
//                   setRequestDemoClick(true);
//                 }}
//               >
//                 <div className="w-[0.6vh] h-[0.6vh] bg-white rounded-full"></div>
//                 Demo
//               </button>
//               <a
//                 href="https://admin.appstorys.com/"
//                 target="/blank"
//                 className="flex justify-center items-center bg-[#d64830] text-[11.76px] font-1.6vhx-[10.58px] text-white 0.6vw tracking-[1.18px] h-[6vh] w-[12vw] max-[1078px]:w-full gap-x-[10px]"
//                 onClick={() => {
//                   handleOptionClick();
//                   setRequestDemoClick(false);
//                 }}
//               >
//                 <div className="w-[0.6vh] h-[0.6vh] bg-white rounded-full"></div>
//                 Login
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Header;


// "use client";
// import "./Header.css";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { Outfit, Bricolage_Grotesque, Poppins } from 'next/font/google';
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { AiFillAndroid } from "react-icons/ai";
// import { FaApple, FaArrowRight } from "react-icons/fa";

// import { FaReact, FaFlutter, FaAngular, FaWordpressSimple, FaShopify } from "react-icons/fa";

// // Import all assets
// import logo from "@/assets/favicon.png";
// import banner from "@/assets/banner.png";
// import floater from "@/assets/floater.png";
// import pip from "@/assets/pip.png";
// import bottom_sheet from "@/assets/bottom_sheet.png";
// import tooltip from "@/assets/tooltip.png";
// import spot from "@/assets/spotlight.png";
// import scratch from "@/assets/scratchcard.png";
// import reel from "@/assets/reel.png";
// import coach from "@/assets/coachmark.png";
// import survey from "@/assets/survey.png";
// import quiz from "@/assets/quizzes.png";
// import csat from "@/assets/csat.png";
// import widget from "@/assets/widget.png";
// import story from "@/assets/story.png";
// import bulb from "@/assets/bulb.png";
// import career from "@/assets/career.png";
// import blog from "@/assets/blog.png";
// import angular from "@/assets/angular.png";
// import reactnative from "@/assets/reactnative.png";
// import react from "@/assets/reactnative.png";
// import flutter from "@/assets/flutter.png";
// import down_arrow_black from "@/assets/down_arrow_black.png";
// import down_arrow_white from "@/assets/down_arrow_white.png";
// import hamburger_black from "@/assets/hamburger_black.png";
// import hamburger_white from "@/assets/hamburger_white.png";
// import mparticle_icon from "@/assets/mparticel_icon.png";
// import clevertap_icon from "@/assets/clevertap_icon.png";
// import moengage_icon from "@/assets/moengage_icon.png";
// import custom_audienec_icon from "@/assets/custom_audience_icon.png";

// import { motion } from "framer-motion";
// import store from "../../store/store";

// // Load fonts
// const outfit = Outfit({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
// });
// const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800'] });

// const Header = ({ style }) => {
//   const [dropdownOpen, setDropdownOpen] = useState({
//     feature: false,
//     advanceSolutions: false,
//     resources: false,
//     sdks: false,
//   });

//   const [listVisible, setListVisible] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState(null);

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.dropdown-container')) {
//         setDropdownOpen({
//           feature: false,
//           advanceSolutions: false,
//           resources: false,
//           sdks: false,
//         });
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleClick = (link) => {
//     setDropdownOpen((prevState) => ({
//       feature: link === "feature" ? !prevState.feature : false,
//       advanceSolutions: link === "advanceSolutions" ? !prevState.advanceSolutions : false,
//       resources: link === "resources" ? !prevState.resources : false,
//       sdks: link === "sdks" ? !prevState.sdks : false,
//     }));
//   };

//   const handleOptionClick = () => {
//     setDropdownOpen({
//       feature: false,
//       advanceSolutions: false,
//       resources: false,
//       sdks: false
//     });
//     setListVisible(false);
//   };

//   const { setRequestDemoClick } = store();

//   return (
//     <header className="sticky top-0 z-50 bg-white w-full shadow-sm">
//       <div className="container mx-auto px-4 md:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center" onClick={() => handleOptionClick()}>
//               <Image src={logo} alt="AppStorys Logo" width={35} height={35} className="mr-2" />
//               <h1 className={`text-[#FD5F03] ${poppins.className} font-semibold text-2xl`}>
//                 AppStorys
//               </h1>
//             </Link>
//           </div>

//           {/* Navigation - Desktop */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             <Link
//               href="/about"
//               className="text-gray-800 hover:text-[#FD5F03] transition duration-150 font-medium"
//               onClick={() => handleOptionClick()}
//             >
//               About
//             </Link>
            
//             <div className="relative dropdown-container">
//               <button
//                 onClick={() => handleClick("feature")}
//                 className="text-gray-800 hover:text-[#FD5F03] transition duration-150 font-medium flex items-center"
//               >
//                 Features
//                 <RiArrowDropDownLine 
//                   className={`ml-1 h-5 w-5 transition-transform duration-200 ${dropdownOpen.feature ? "rotate-180" : ""}`} 
//                 />
//               </button>
              
//               {dropdownOpen.feature && (
//                 <div className="absolute top-full left-0 right-0 w-screen bg-white shadow-lg mt-1 py-4 z-20">
//                   <div className="container mx-auto">
//                     <h3 className={`text-left mb-4 px-4 py-2 ${outfit.className} font-light text-gray-500 text-sm border-b border-gray-200`}>
//                       CORE FEATURES
//                     </h3>
                    
//                     <div className="grid grid-cols-4 gap-6 px-4">
//                       {/* Rich Media Content */}
//                       <div className="space-y-4">
//                         <h4 className={`${outfit.className} text-sm text-gray-800 font-medium mb-2 pb-2 border-b border-gray-200`}>
//                           RICH MEDIA CONTENT
//                         </h4>
                        
//                         <div 
//                           className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
//                           onMouseEnter={() => setHoveredItem('stories')}
//                           onMouseLeave={() => setHoveredItem(null)}
//                         >
//                           <Link href="/stories" className="flex items-center gap-3" onClick={handleOptionClick}>
//                             <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                               <Image src={story} alt="Stories" width={20} height={20} />
//                             </div>
//                             <div className="flex-grow">
//                               <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Stories</p>
//                               <p className={`text-xs ${outfit.className} text-gray-500`}>Rich media bite sized content</p>
//                             </div>
//                             <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'stories' ? 'opacity-100' : 'opacity-0'}`} />
//                           </Link>
//                         </div>
                        
//                         <div 
//                           className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
//                           onMouseEnter={() => setHoveredItem('reels')}
//                           onMouseLeave={() => setHoveredItem(null)}
//                         >
//                           <Link href="/reels" className="flex items-center gap-3" onClick={handleOptionClick}>
//                             <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                               <Image src={reel} alt="Reels" width={20} height={20} />
//                             </div>
//                             <div className="flex-grow">
//                               <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Reels</p>
//                               <p className={`text-xs ${outfit.className} text-gray-500`}>Present constantly scrolling short videos</p>
//                             </div>
//                             <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'reels' ? 'opacity-100' : 'opacity-0'}`} />
//                           </Link>
//                         </div>
                        
//                         <div 
//                           className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
//                           onMouseEnter={() => setHoveredItem('pip')}
//                           onMouseLeave={() => setHoveredItem(null)}
//                         >
//                           <Link href="/pipVideos" className="flex items-center gap-3" onClick={handleOptionClick}>
//                             <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                               <Image src={pip} alt="PIP Videos" width={20} height={20} />
//                             </div>
//                             <div className="flex-grow">
//                               <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>PIP Videos</p>
//                               <p className={`text-xs ${outfit.className} text-gray-500`}>Non-intrusive movable on-screen video</p>
//                             </div>
//                             <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'pip' ? 'opacity-100' : 'opacity-0'}`} />
//                           </Link>
//                         </div>
                        
//                         <div 
//                           className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
//                           onMouseEnter={() => setHoveredItem('bottom')}
//                           onMouseLeave={() => setHoveredItem(null)}
//                         >
//                           <Link href="/bottomSheets" className="flex items-center gap-3" onClick={handleOptionClick}>
//                             <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                               <Image src={bottom_sheet} alt="Bottom Sheets" width={20} height={20} />
//                             </div>
//                             <div className="flex-grow">
//                               <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Bottom Sheets</p>
//                               <p className={`text-xs ${outfit.className} text-gray-500`}>Rich media bite sized content</p>
//                             </div>
//                             <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'bottom' ? 'opacity-100' : 'opacity-0'}`} />
//                           </Link>
//                         </div>
//                       </div>
                      
//                       {/* Interactive Elements */}
//                       <div className="space-y-4">
//                         <h4 className={`${outfit.className} text-sm text-gray-800 font-medium mb-2 pb-2 border-b border-gray-200`}>
//                           INTERACTIVE ELEMENTS
//                         </h4>
                        
//                         <div 
//                           className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
//                           onMouseEnter={() => setHoveredItem('banner')}
//                           onMouseLeave={() => setHoveredItem(null)}
//                         >
//                           <Link href="/banners" className="flex items-center gap-3" onClick={handleOptionClick}>
//                             <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                               <Image src={banner} alt="Banner" width={20} height={20} />
//                             </div>
//                             <div className="flex-grow">
//                               <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Banner</p>
//                               <p className={`text-xs ${outfit.className} text-gray-500`}>Automatic banner moving with screen</p>
//                             </div>
//                             <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'banner' ? 'opacity-100' : 'opacity-0'}`} />
//                           </Link>
//                         </div>
                        
//                         <div 
//                           className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
//                           onMouseEnter={() => setHoveredItem('floater')}
//                           onMouseLeave={() => setHoveredItem(null)}
//                         >
//                           <Link href="/floaters" className="flex items-center gap-3" onClick={handleOptionClick}>
//                             <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                               <Image src={floater} alt="Floaters" width={20} height={20} />
//                             </div>
//                             <div className="flex-grow">
//                               <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Floaters</p>
//                               <p className={`text-xs ${outfit.className} text-gray-500`}>Small Image/GIF on screen floating with content</p>
//                             </div>
//                             <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'floater' ? 'opacity-100' : 'opacity-0'}`} />
//                           </Link>
//                         </div>
                        
//                         <div 
//                           className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
//                           onMouseEnter={() => setHoveredItem('widgets')}
//                           onMouseLeave={() => setHoveredItem(null)}
//                         >
//                           <Link href="/widgets" className="flex items-center gap-3" onClick={handleOptionClick}>
//                             <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                               <Image src={widget} alt="Widgets" width={20} height={20} />
//                             </div>
//                             <div className="flex-grow">
//                               <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Widgets</p>
//                               <p className={`text-xs ${outfit.className} text-gray-500`}>Customizable scalable images/animation</p>
//                             </div>
//                             <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'widgets' ? 'opacity-100' : 'opacity-0'}`} />
//                           </Link>
//                         </div>
                        
//                         <div 
//                           className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
//                           onMouseEnter={() => setHoveredItem('scratch')}
//                           onMouseLeave={() => setHoveredItem(null)}
//                         >
//                           <Link href="/scratchCards" className="flex items-center gap-3" onClick={handleOptionClick}>
//                             <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                               <Image src={scratch} alt="Scratch Card" width={20} height={20} />
//                             </div>
//                             <div className="flex-grow">
//                               <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Scratch Card</p>
//                               <p className={`text-xs ${outfit.className} text-gray-500`}>Gamification option to engage users</p>
//                             </div>
//                             <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'scratch' ? 'opacity-100' : 'opacity-0'}`} />
//                           </Link>
//                         </div>
//                       </div>
                      
//                       {/* Take Action */}
//                       <div className="space-y-4">
//                         <h4 className={`${outfit.className} text-sm text-gray-800 font-medium mb-2 pb-2 border-b border-gray-200`}>
//                           TAKE ACTION
//                         </h4>
                        
//                         <div 
//                           className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
//                           onMouseEnter={() => setHoveredItem('quiz')}
//                           onMouseLeave={() => setHoveredItem(null)}
//                         >
//                           <Link href="/quizzes" className="flex items-center gap-3" onClick={handleOptionClick}>
//                             <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                               <Image src={quiz} alt="Quiz" width={20} height={20} />
//                             </div>
//                             <div className="flex-grow">
//                               <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Quiz</p>
//                               <p className={`text-xs ${outfit.className} text-gray-500`}>Ask users questions and engage them</p>
//                             </div>
//                             <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'quiz' ? 'opacity-100' : 'opacity-0'}`} />
//                           </Link>
//                         </div>
                        
//                         <div 
//                           className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
//                           onMouseEnter={() => setHoveredItem('survey')}
//                           onMouseLeave={() => setHoveredItem(null)}
//                         >
//                           <Link href="/surveys" className="flex items-center gap-3" onClick={handleOptionClick}>
//                             <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                               <Image src={survey} alt="Survey" width={20} height={20} />
//                             </div>
//                             <div className="flex-grow">
//                               <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Survey</p>
//                               <p className={`text-xs ${outfit.className} text-gray-500`}>Get user inputs</p>
//                             </div>
//                             <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'survey' ? 'opacity-100' : 'opacity-0'}`} />
//                           </Link>
//                         </div>
                        
//                         <div 
//                           className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
//                           onMouseEnter={() => setHoveredItem('csat')}
//                           onMouseLeave={() => setHoveredItem(null)}
//                         >
//                           <Link href="/csats" className="flex items-center gap-3" onClick={handleOptionClick}>
//                             <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                               <Image src={csat} alt="CSAT Feedback" width={20} height={20} />
//                             </div>
//                             <div className="flex-grow">
//                               <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>CSAT Feedback</p>
//                               <p className={`text-xs ${outfit.className} text-gray-500`}>Measure services via feedback</p>
//                             </div>
//                             <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'csat' ? 'opacity-100' : 'opacity-0'}`} />
//                           </Link>
//                         </div>
//                       </div>
                      
//                       {/* Onboarding */}
//                       <div className="space-y-4">
//                         <h4 className={`${outfit.className} text-sm text-gray-800 font-medium mb-2 pb-2 border-b border-gray-200`}>
//                           ONBOARDING
//                         </h4>
                        
//                         <div 
//                           className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
//                           onMouseEnter={() => setHoveredItem('tooltip')}
//                           onMouseLeave={() => setHoveredItem(null)}
//                         >
//                           <Link href="/tooltips" className="flex items-center gap-3" onClick={handleOptionClick}>
//                             <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                               <Image src={tooltip} alt="Tooltips" width={20} height={20} />
//                             </div>
//                             <div className="flex-grow">
//                               <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Tooltips</p>
//                               <p className={`text-xs ${outfit.className} text-gray-500`}>Onboarding journey for users</p>
//                             </div>
//                             <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'tooltip' ? 'opacity-100' : 'opacity-0'}`} />
//                           </Link>
//                         </div>
                        
//                         <div 
//                           className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
//                           onMouseEnter={() => setHoveredItem('coach')}
//                           onMouseLeave={() => setHoveredItem(null)}
//                         >
//                           <Link href="/coachmarks" className="flex items-center gap-3" onClick={handleOptionClick}>
//                             <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                               <Image src={coach} alt="Coachmarks" width={20} height={20} />
//                             </div>
//                             <div className="flex-grow">
//                               <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Coachmarks</p>
//                               <p className={`text-xs ${outfit.className} text-gray-500`}>Highlight new features with wrapper</p>
//                             </div>
//                             <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'coach' ? 'opacity-100' : 'opacity-0'}`} />
//                           </Link>
//                         </div>
                        
//                         <div 
//                           className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
//                           onMouseEnter={() => setHoveredItem('spotlight')}
//                           onMouseLeave={() => setHoveredItem(null)}
//                         >
//                           <Link href="/spotlights" className="flex items-center gap-3" onClick={handleOptionClick}>
//                             <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                               <Image src={spot} alt="Spotlight" width={20} height={20} />
//                             </div>
//                             <div className="flex-grow">
//                               <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Spotlight</p>
//                               <p className={`text-xs ${outfit.className} text-gray-500`}>Get user attention to specific features</p>
//                             </div>
//                             <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'spotlight' ? 'opacity-100' : 'opacity-0'}`} />
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
            
//             <div className="relative dropdown-container">
//               <button
//                 onClick={() => handleClick("advanceSolutions")}
//                 className="text-gray-800 hover:text-[#FD5F03] transition duration-150 font-medium flex items-center"
//               >
//                 Advanced Solutions
//                 <RiArrowDropDownLine 
//                   className={`ml-1 h-5 w-5 transition-transform duration-200 ${dropdownOpen.advanceSolutions ? "rotate-180" : ""}`} 
//                 />
//               </button>
              
//               {dropdownOpen.advanceSolutions && (
//                 <div className="absolute top-full left-0 w-screen bg-white shadow-lg mt-1 py-4 z-20">
//                   <div className="container mx-auto">
//                     <h3 className={`text-left mb-4 px-4 py-2 ${outfit.className} font-light text-gray-500 text-sm border-b border-gray-200`}>
//                       CORE FEATURES
//                     </h3>
                    
//                     <div className="grid grid-cols-3 gap-8 px-6">
//                       {/* Integrations */}
//                       <div className="space-y-4">
//                         <h4 className={`${outfit.className} text-sm text-gray-800 font-medium mb-3`}>Integrations</h4>
//                         <ul className="space-y-3">
//                           <li>
//                             <Link href="/integrations/mixpanel" className="flex items-center gap-3 group" onClick={handleOptionClick}>
//                               <div className="w-6 h-6 flex items-center justify-center">
//                                 <Image src={mparticle_icon} alt="Mixpanel" width={18} height={18} />
//                               </div>
//                               <span className={`text-sm ${bricolageGrotesque.className} text-gray-800 group-hover:text-blue-700`}>Mixpanel</span>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link href="/integrations/clevertap" className="flex items-center gap-3 group" onClick={handleOptionClick}>
//                               <div className="w-6 h-6 flex items-center justify-center">
//                                 <Image src={clevertap_icon} alt="CleverTap" width={18} height={18} />
//                               </div>
//                               <span className={`text-sm ${bricolageGrotesque.className} text-gray-800 group-hover:text-blue-700`}>CleverTap</span>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link href="/integrations/moengage" className="flex items-center gap-3 group" onClick={handleOptionClick}>
//                               <div className="w-6 h-6 flex items-center justify-center">
//                                 <Image src={moengage_icon} alt="MoEngage" width={18} height={18} />
//                               </div>
//                               <span className={`text-sm ${bricolageGrotesque.className} text-gray-800 group-hover:text-blue-700`}>MoEngage</span>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link href="/integrations/custom" className="flex items-center gap-3 group" onClick={handleOptionClick}>
//                               <div className="w-6 h-6 flex items-center justify-center">
//                                 <Image src={custom_audienec_icon} alt="Custom Audiences" width={18} height={18} />
//                               </div>
//                               <span className={`text-sm ${bricolageGrotesque.className} text-gray-800 group-hover:text-blue-700`}>Custom Audiences</span>
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
                      
//                       {/* Segmentation & Cohorts */}
//                       <div className="space-y-4">
//                         <h4 className={`${outfit.className} text-sm text-gray-800 font-medium mb-3`}>Segmentation & Cohorts</h4>
//                         <ul className="space-y-3">
//                           <li>
//                             <div className="flex items-center gap-3 group">
//                               <span className={`text-sm ${bricolageGrotesque.className} text-gray-800 group-hover:text-blue-700`}>Real-Time Targeting</span>
//                             </div>
//                           </li>
//                           <li>
//                             <div className="flex items-center gap-3 group">
//                               <span className={`text-sm ${bricolageGrotesque.className} text-gray-800 group-hover:text-blue-700`}>Feature Adoption Insights</span>
//                             </div>
//                           </li>
//                           <li>
//                             <div className="flex items-center gap-3 group">
//                               <span className={`text-sm ${bricolageGrotesque.className} text-gray-800 group-hover:text-blue-700`}>Automated Growth Journeys</span>
//                             </div>
//                           </li>
//                         </ul>
//                       </div>
                      
//                       {/* Goals & Impact Measurement */}
//                       <div className="space-y-4">
//                         <h4 className={`${outfit.className} text-sm text-gray-800 font-medium mb-3`}>Goals & Impact Measurement</h4>
//                         <ul className="space-y-3">
//                           <li>
//                             <div className="flex items-center gap-3 group">
//                               <span className={`text-sm ${bricolageGrotesque.className} text-gray-800 group-hover:text-blue-700`}>Setup Goals</span>
//                             </div>
//                           </li>
//                           <li>
//                             <div className="flex items-center gap-3 group">
//                               <span className={`text-sm ${bricolageGrotesque.className} text-gray-800 group-hover:text-blue-700`}>Measure Impact</span>
//                             </div>
//                           </li>
//                           <li>
//                             <div className="flex items-center gap-3 group">
//                               <span className={`text-sm ${bricolageGrotesque.className} text-gray-800 group-hover:text-blue-700`}>Goal-Based Event Tracking</span>
//                             </div>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
            
//             <div className="relative dropdown-container">
//               <button
//                 onClick={() => handleClick("resources")}
//                 className="text-gray-800 hover:text-[#FD5F03] transition duration-150 font-medium flex items-center"
//               >
//                 Resources
//                 <RiArrowDropDownLine 
//                   className={`ml-1 h-5 w-5 transition-transform duration-200 ${dropdownOpen.resources ? "rotate-180" : ""}`} 
//                 />
//               </button>
              
//               {dropdownOpen.resources && (
//                 <div className="absolute top-full left-0 w-screen bg-white shadow-lg mt-1 py-4 z-20">
//                   <div className="container mx-auto px-4">
//                     <div className="flex flex-col w-full">
//                       {/* Main resources section */}
//                       <div className="flex mb-6">
//                         {/* Resources column */}
//                         <div className="flex flex-col w-1/3">
//                           <h4 className={`${outfit.className} text-sm text-gray-800 font-medium mb-4`}>RESOURCES</h4>
//                           <ul className="space-y-4">
//                             <li>
//                               <Link href="/blogs" className="flex items-center gap-3 group" onClick={handleOptionClick}>
//                                 <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                                   <Image src={blog} alt="Blog" width={20} height={20} />
//                                 </div>
//                                 <div>
//                                   <p className="font-medium text-blue-700 group-hover:text-blue-800">Blog</p>
//                                   <p className={`text-xs ${outfit.className} font-light text-gray-500`}>Latest articles and updates</p>
//                                 </div>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link href="/career" className="flex items-center gap-3 group" onClick={handleOptionClick}>
//                                 <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                                   <Image src={career} alt="Careers" width={20} height={20} />
//                                 </div>
//                                 <div>
//                                   <p className="font-medium text-blue-700 group-hover:text-blue-800">Careers</p>
//                                   <p className={`text-xs ${outfit.className} font-light text-gray-500`}>Join our growing team</p>
//                                 </div>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link href="/inspirationGallery" className="flex items-center gap-3 group" onClick={handleOptionClick}>
//                                 <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                                   <Image src={bulb} alt="Inspiration Gallery" width={20} height={20} />
//                                 </div>
//                                 <div>
//                                   <p className="font-medium text-blue-700 group-hover:text-blue-800">Inspiration Gallery</p>
//                                   <p className={`text-xs ${outfit.className} font-light text-gray-500`}>Find ideas for your next project</p>
//                                 </div>
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>

//                       {/* SDKs & Frameworks section */}
//                       <div>
//                         <h4 className={`${outfit.className} text-sm text-gray-800 font-medium mb-4`}>SDKs & FRAMEWORKS</h4>
//                         <div className="grid grid-cols-4 gap-6">
//                           <Link href="#" className="flex items-center gap-3 group" onClick={handleOptionClick}>
//                             <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                               <Image src={react} alt="React" width={20} height={20} className="object-contain" />
//                             </div>
//                             <div>
//                               <p className="font-medium text-blue-700 group-hover:text-blue-800">React</p>
//                               <p className={`text-xs ${outfit.className} font-light text-gray-500`}>Web framework</p>
//                             </div>
//                           </Link>

//                           <Link href="#" className="flex items-center gap-3 group" onClick={handleOptionClick}>
//                             <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                               <Image src={flutter} alt="Flutter" width={20} height={20} className="object-contain" />
//                             </div>
//                             <div>
//                               <p className="font-medium text-blue-700 group-hover:text-blue-800">Flutter</p>
//                               <p className={`text-xs ${outfit.className} font-light text-gray-500`}>Cross-platform framework</p>
//                             </div>
//                           </Link>

//                           <Link href="#" className="flex items-center gap-3 group" onClick={handleOptionClick}>
//                             <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                               <Image src={angular} alt="Angular" width={20} height={20} className="object-contain" />
//                             </div>
//                             <div>
//                               <p className="font-medium text-blue-700 group-hover:text-blue-800">Angular</p>
//                               <p className={`text-xs ${outfit.className} font-light text-gray-500`}>Web framework</p>
//                             </div>
//                           </Link>

//                           <Link href="#" className="flex items-center gap-3 group" onClick={handleOptionClick}>
//                             <div className="w-6 h-6 flex items-center justify-center text-blue-600">
//                               <Image src={reactnative} alt="React Native" width={20} height={20} className="object-contain" />
//                             </div>
//                             <div>
//                               <p className="font-medium text-blue-700 group-hover:text-blue-800">React Native</p>
//                               <p className={`text-xs ${outfit.className} font-light text-gray-500`}>Mobile framework</p>
//                             </div>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
            
//             <Link
//               href="/about"
//               className="text-gray-800 hover:text-[#FD5F03] transition duration-150 font-medium"
//               onClick={() => handleOptionClick()}
//             >
//               Contact
//             </Link>
//           </nav>
          
//           {/* Action Buttons - Desktop */}
//           <div className="hidden lg:flex items-center space-x-4">
//             <Link 
//               href="https://admin.appstorys.com/"
//               className="px-4 py-2 text-[#FD5F03] font-medium transition duration-150 hover:text-[#e05303]"
//               target="_blank"
//               onClick={() => handleOptionClick()}
//             >
//               Login
//             </Link>
            
//             <Link 
//               href="/contact"
//               className="rounded-full bg-[#FD5F03] text-white font-medium px-6 py-2.5 transition duration-150 hover:bg-[#e05303] flex items-center"
//               onClick={() => {
//                 handleOptionClick();
//                 setRequestDemoClick(true);
//               }}
//             >
//               <span>Contact Sales</span>
//               <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
//                 <path d="M4.16699 10H15.8337" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 <path d="M10.833 5L15.833 10L10.833 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </Link>
//           </div>
          
//           {/* Mobile Menu Button */}
//           <button 
//             className="lg:hidden flex items-center"
//             onClick={() => setListVisible(!listVisible)}
//           >
//             <Image
//               src={style === "dark" ? hamburger_white : hamburger_black}
//               alt="Menu"
//               width={24}
//               height={24}
//             />
//           </button>
//         </div>
        
//         {/* Mobile Navigation */}
//         {listVisible && (
//           <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-3 shadow-lg">
//             <nav className="flex flex-col space-y-4">
//               <Link
//                 href="/about"
//                 className="py-2 text-gray-800"
//                 onClick={() => handleOptionClick()}
//               >
//                 About Us
//               </Link>
              
//               <div>
//                 <button
//                   onClick={() => handleClick("feature")}
//                   className="flex items-center justify-between w-full py-2 text-gray-800"
//                 >
//                   <span>Features</span>
//                   <RiArrowDropDownLine 
//                     className={`h-6 w-6 transition-transform duration-200 ${dropdownOpen.feature ? "rotate-180" : ""}`} 
//                   />
//                 </button>
                
//                 {dropdownOpen.feature && (
//                   <div className="pl-4 mt-2 space-y-3">
//                     <Link 
//                       href="/stories" 
//                       className="flex items-center py-2"
//                       onClick={handleOptionClick}
//                     >
//                       <Image src={story} alt="Stories" width={20} height={20} className="mr-3" />
//                       <span>Stories</span>
//                     </Link>
//                     <Link 
//                       href="/reels" 
//                       className="flex items-center py-2"
//                       onClick={handleOptionClick}
//                     >
//                       <Image src={reel} alt="Reels" width={20} height={20} className="mr-3" />
//                       <span>Reels</span>
//                     </Link>
//                     <Link 
//                       href="/pipVideos" 
//                       className="flex items-center py-2"
//                       onClick={handleOptionClick}
//                     >
//                       <Image src={pip} alt="PIP Videos" width={20} height={20} className="mr-3" />
//                       <span>PIP Videos</span>
//                     </Link>
//                     <Link 
//                       href="/banners" 
//                       className="flex items-center py-2"
//                       onClick={handleOptionClick}
//                     >
//                       <Image src={banner} alt="Banners" width={20} height={20} className="mr-3" />
//                       <span>Banners</span>
//                     </Link>
//                     <Link 
//                       href="/csats" 
//                       className="flex items-center py-2"
//                       onClick={handleOptionClick}
//                     >
//                       <Image src={csat} alt="CSATs" width={20} height={20} className="mr-3" />
//                       <span>CSATs</span>
//                     </Link>
//                   </div>
//                 )}
//               </div>
              
//               <div>
//                 <button
//                   onClick={() => handleClick("advanceSolutions")}
//                   className="flex items-center justify-between w-full py-2 text-gray-800"
//                 >
//                   <span>Advanced Solutions</span>
//                   <RiArrowDropDownLine 
//                     className={`h-6 w-6 transition-transform duration-200 ${dropdownOpen.advanceSolutions ? "rotate-180" : ""}`} 
//                   />
//                 </button>
                
//                 {dropdownOpen.advanceSolutions && (
//                   <div className="pl-4 mt-2 space-y-3">
//                     <Link 
//                       href="/integrations/mixpanel" 
//                       className="flex items-center py-2"
//                       onClick={handleOptionClick}
//                     >
//                       <Image src={mparticle_icon} alt="Mixpanel" width={18} height={18} className="mr-3" />
//                       <span>Mixpanel</span>
//                     </Link>
//                     <Link 
//                       href="/integrations/clevertap" 
//                       className="flex items-center py-2"
//                       onClick={handleOptionClick}
//                     >
//                       <Image src={clevertap_icon} alt="CleverTap" width={18} height={18} className="mr-3" />
//                       <span>CleverTap</span>
//                     </Link>
//                   </div>
//                 )}
//               </div>
              
//               <div>
//                 <button
//                   onClick={() => handleClick("resources")}
//                   className="flex items-center justify-between w-full py-2 text-gray-800"
//                 >
//                   <span>Resources</span>
//                   <RiArrowDropDownLine 
//                     className={`h-6 w-6 transition-transform duration-200 ${dropdownOpen.resources ? "rotate-180" : ""}`} 
//                   />
//                 </button>
                
//                 {dropdownOpen.resources && (
//                   <div className="pl-4 mt-2 space-y-3">
//                     <Link 
//                       href="/blogs" 
//                       className="flex items-center py-2"
//                       onClick={handleOptionClick}
//                     >
//                       <Image src={blog} alt="Blog" width={20} height={20} className="mr-3" />
//                       <span>Blog</span>
//                     </Link>
//                     <Link 
//                       href="/career" 
//                       className="flex items-center py-2"
//                       onClick={handleOptionClick}
//                     >
//                       <Image src={career} alt="Careers" width={20} height={20} className="mr-3" />
//                       <span>Careers</span>
//                     </Link>
//                   </div>
//                 )}
//               </div>
              
//               <Link
//                 href="/contact"
//                 className="py-2 text-gray-800"
//                 onClick={() => handleOptionClick()}
//               >
//                 Contact
//               </Link>
              
//               <div className="pt-2 space-y-3">
//                 <Link
//                   href="/contact"
//                   className="block w-full rounded-full bg-[#FD5F03] text-white font-medium text-center px-4 py-2.5"
//                   onClick={() => {
//                     handleOptionClick();
//                     setRequestDemoClick(true);
//                   }}
//                 >
//                   Contact Sales
//                 </Link>
                
//                 <Link
//                   href="https://admin.appstorys.com/"
//                   className="block w-full text-[#FD5F03] font-medium text-center px-4 py-2.5 border border-[#FD5F03] rounded-full"
//                   target="_blank"
//                   onClick={() => handleOptionClick()}
//                 >
//                   Login
//                 </Link>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;



"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Outfit, Bricolage_Grotesque, Poppins } from 'next/font/google';
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiFillAndroid } from "react-icons/ai";
import { FaApple, FaArrowRight } from "react-icons/fa";

import { FaReact, FaFlutter, FaAngular, FaWordpressSimple, FaShopify } from "react-icons/fa";

// Import all assets
import logo from "@/assets/favicon.png";
import banner from "@/assets/banner.png";
import floater from "@/assets/floater.png";
import pip from "@/assets/pip.png";
import bottom_sheet from "@/assets/bottom_sheet.png";
import tooltip from "@/assets/tooltip.png";
import spot from "@/assets/spotlight.png";
import scratch from "@/assets/scratchcard.png";
import reel from "@/assets/reel.png";
import coach from "@/assets/coachmark.png";
import survey from "@/assets/survey.png";
import quiz from "@/assets/quizzes.png";
import csat from "@/assets/csat.png";
import widget from "@/assets/widget.png";
import story from "@/assets/story.png";
import bulb from "@/assets/bulb.png";
import career from "@/assets/career.png";
import blog from "@/assets/blog.png";
import angular from "@/assets/angular.png";
import reactnative from "@/assets/reactnative.png";
import react from "@/assets/reactnative.png";
import flutter from "@/assets/flutter.png";
import down_arrow_black from "@/assets/down_arrow_black.png";
import down_arrow_white from "@/assets/down_arrow_white.png";
import hamburger_black from "@/assets/hamburger_black.png";
import hamburger_white from "@/assets/hamburger_white.png";
import mparticle_icon from "@/assets/mparticel_icon.png";
import clevertap_icon from "@/assets/clevertap_icon.png";
import moengage_icon from "@/assets/moengage_icon.png";
import custom_audienec_icon from "@/assets/custom_audience_icon.png";

import { motion } from "framer-motion";
import store from "../../store/store";

// Load fonts
const outfit = Outfit({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800'] });

const Header = ({ style }) => {
  const [dropdownOpen, setDropdownOpen] = useState({
    feature: false,
    advanceSolutions: false,
    resources: false,
    sdks: false,
  });

  const [listVisible, setListVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setDropdownOpen({
          feature: false,
          advanceSolutions: false,
          resources: false,
          sdks: false,
        });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = (link) => {
    setDropdownOpen((prevState) => ({
      feature: link === "feature" ? !prevState.feature : false,
      advanceSolutions: link === "advanceSolutions" ? !prevState.advanceSolutions : false,
      resources: link === "resources" ? !prevState.resources : false,
      sdks: link === "sdks" ? !prevState.sdks : false,
    }));
  };

  const handleOptionClick = () => {
    setDropdownOpen({
      feature: false,
      advanceSolutions: false,
      resources: false,
      sdks: false
    });
    setListVisible(false);
  };

  const { setRequestDemoClick } = store();

  return (
    <header className="sticky top-0 z-50 bg-white w-full shadow-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center" onClick={() => handleOptionClick()}>
              <Image src={logo} alt="AppStorys Logo" width={35} height={35} className="mr-2" />
              <h1 className={`text-[#FD5F03] ${poppins.className} font-semibold text-2xl`}>
                AppStorys
              </h1>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-gray-800 hover:text-[#FD5F03] transition duration-150 font-medium"
              onClick={() => handleOptionClick()}
            >
              About
            </Link>
            
            <div className="relative dropdown-container">
              <button
                onClick={() => handleClick("feature")}
                className="text-gray-800 hover:text-[#FD5F03] transition duration-150 font-medium flex items-center"
              >
                Features
                <RiArrowDropDownLine 
                  className={`ml-1 h-5 w-5 transition-transform duration-200 ${dropdownOpen.feature ? "rotate-180" : ""}`} 
                />
              </button>
              
              {dropdownOpen.feature && (
                // <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen bg-white shadow-lg mt-1 py-4 z-20">
                //   <div className="container mx-auto">
<div className="fixed top-16 md:top-20 left-0 right-0 w-full bg-white shadow-lg mt-1 py-4 z-20">
<div className="w-full max-w-6xl mx-auto px-4">
                    <h3 className={`text-left mb-4 px-4 py-2 ${outfit.className} font-light text-gray-500 text-sm border-b border-gray-200`}>
                      CORE FEATURES
                    </h3>
                    
                    <div className="grid grid-cols-4 gap-6 px-4">
                      {/* Rich Media Content */}
                      <div className="space-y-4">
                        <h4 className={`${outfit.className} text-sm text-gray-800 font-medium mb-2 pb-2 border-b border-gray-200`}>
                          RICH MEDIA CONTENT
                        </h4>
                        
                        <div 
                          className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
                          onMouseEnter={() => setHoveredItem('stories')}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <Link href="/stories" className="flex items-center gap-3" onClick={handleOptionClick}>
                            <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                              <Image src={story} alt="Stories" width={20} height={20} />
                            </div>
                            <div className="flex-grow">
                              <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Stories</p>
                              <p className={`text-xs ${outfit.className} text-gray-500`}>Rich media bite sized content</p>
                            </div>
                            <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'stories' ? 'opacity-100' : 'opacity-0'}`} />
                          </Link>
                        </div>
                        
                        <div 
                          className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
                          onMouseEnter={() => setHoveredItem('reels')}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <Link href="/reels" className="flex items-center gap-3" onClick={handleOptionClick}>
                            <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                              <Image src={reel} alt="Reels" width={20} height={20} />
                            </div>
                            <div className="flex-grow">
                              <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Reels</p>
                              <p className={`text-xs ${outfit.className} text-gray-500`}>Present constantly scrolling short videos</p>
                            </div>
                            <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'reels' ? 'opacity-100' : 'opacity-0'}`} />
                          </Link>
                        </div>
                        
                        <div 
                          className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
                          onMouseEnter={() => setHoveredItem('pip')}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <Link href="/pipVideos" className="flex items-center gap-3" onClick={handleOptionClick}>
                            <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                              <Image src={pip} alt="PIP Videos" width={20} height={20} />
                            </div>
                            <div className="flex-grow">
                              <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>PIP Videos</p>
                              <p className={`text-xs ${outfit.className} text-gray-500`}>Non-intrusive movable on-screen video</p>
                            </div>
                            <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'pip' ? 'opacity-100' : 'opacity-0'}`} />
                          </Link>
                        </div>
                        
                        <div 
                          className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
                          onMouseEnter={() => setHoveredItem('bottom')}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <Link href="/bottomSheets" className="flex items-center gap-3" onClick={handleOptionClick}>
                            <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                              <Image src={bottom_sheet} alt="Bottom Sheets" width={20} height={20} />
                            </div>
                            <div className="flex-grow">
                              <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Bottom Sheets</p>
                              <p className={`text-xs ${outfit.className} text-gray-500`}>Rich media bite sized content</p>
                            </div>
                            <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'bottom' ? 'opacity-100' : 'opacity-0'}`} />
                          </Link>
                        </div>
                      </div>
                      
                      {/* Interactive Elements */}
                      <div className="space-y-4">
                        <h4 className={`${outfit.className} text-sm text-gray-800 font-medium mb-2 pb-2 border-b border-gray-200`}>
                          INTERACTIVE ELEMENTS
                        </h4>
                        
                        <div 
                          className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
                          onMouseEnter={() => setHoveredItem('banner')}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <Link href="/banners" className="flex items-center gap-3" onClick={handleOptionClick}>
                            <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                              <Image src={banner} alt="Banner" width={20} height={20} />
                            </div>
                            <div className="flex-grow">
                              <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Banner</p>
                              <p className={`text-xs ${outfit.className} text-gray-500`}>Automatic banner moving with screen</p>
                            </div>
                            <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'banner' ? 'opacity-100' : 'opacity-0'}`} />
                          </Link>
                        </div>
                        
                        <div 
                          className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
                          onMouseEnter={() => setHoveredItem('floater')}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <Link href="/floaters" className="flex items-center gap-3" onClick={handleOptionClick}>
                            <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                              <Image src={floater} alt="Floaters" width={20} height={20} />
                            </div>
                            <div className="flex-grow">
                              <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Floaters</p>
                              <p className={`text-xs ${outfit.className} text-gray-500`}>Small Image/GIF on screen floating with content</p>
                            </div>
                            <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'floater' ? 'opacity-100' : 'opacity-0'}`} />
                          </Link>
                        </div>
                        
                        <div 
                          className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
                          onMouseEnter={() => setHoveredItem('widgets')}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <Link href="/widgets" className="flex items-center gap-3" onClick={handleOptionClick}>
                            <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                              <Image src={widget} alt="Widgets" width={20} height={20} />
                            </div>
                            <div className="flex-grow">
                              <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Widgets</p>
                              <p className={`text-xs ${outfit.className} text-gray-500`}>Customizable scalable images/animation</p>
                            </div>
                            <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'widgets' ? 'opacity-100' : 'opacity-0'}`} />
                          </Link>
                        </div>
                        
                        <div 
                          className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
                          onMouseEnter={() => setHoveredItem('scratch')}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <Link href="/scratchCards" className="flex items-center gap-3" onClick={handleOptionClick}>
                            <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                              <Image src={scratch} alt="Scratch Card" width={20} height={20} />
                            </div>
                            <div className="flex-grow">
                              <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Scratch Card</p>
                              <p className={`text-xs ${outfit.className} text-gray-500`}>Gamification option to engage users</p>
                            </div>
                            <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'scratch' ? 'opacity-100' : 'opacity-0'}`} />
                          </Link>
                        </div>
                      </div>
                      
                      {/* Take Action */}
                      <div className="space-y-4">
                        <h4 className={`${outfit.className} text-sm text-gray-800 font-medium mb-2 pb-2 border-b border-gray-200`}>
                          TAKE ACTION
                        </h4>
                        
                        <div 
                          className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
                          onMouseEnter={() => setHoveredItem('quiz')}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <Link href="/quizzes" className="flex items-center gap-3" onClick={handleOptionClick}>
                            <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                              <Image src={quiz} alt="Quiz" width={20} height={20} />
                            </div>
                            <div className="flex-grow">
                              <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Quiz</p>
                              <p className={`text-xs ${outfit.className} text-gray-500`}>Ask users questions and engage them</p>
                            </div>
                            <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'quiz' ? 'opacity-100' : 'opacity-0'}`} />
                          </Link>
                        </div>
                        
                        <div 
                          className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
                          onMouseEnter={() => setHoveredItem('survey')}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <Link href="/surveys" className="flex items-center gap-3" onClick={handleOptionClick}>
                            <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                              <Image src={survey} alt="Survey" width={20} height={20} />
                            </div>
                            <div className="flex-grow">
                              <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Survey</p>
                              <p className={`text-xs ${outfit.className} text-gray-500`}>Get user inputs</p>
                            </div>
                            <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'survey' ? 'opacity-100' : 'opacity-0'}`} />
                          </Link>
                        </div>
                        
                        <div 
                          className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
                          onMouseEnter={() => setHoveredItem('csat')}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <Link href="/csats" className="flex items-center gap-3" onClick={handleOptionClick}>
                            <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                              <Image src={csat} alt="CSAT Feedback" width={20} height={20} />
                            </div>
                            <div className="flex-grow">
                              <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>CSAT Feedback</p>
                              <p className={`text-xs ${outfit.className} text-gray-500`}>Measure services via feedback</p>
                            </div>
                            <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'csat' ? 'opacity-100' : 'opacity-0'}`} />
                          </Link>
                        </div>
                      </div>
                      
                      {/* Onboarding */}
                      <div className="space-y-4">
                        <h4 className={`${outfit.className} text-sm text-gray-800 font-medium mb-2 pb-2 border-b border-gray-200`}>
                          ONBOARDING
                        </h4>
                        
                        <div 
                          className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
                          onMouseEnter={() => setHoveredItem('tooltip')}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <Link href="/tooltips" className="flex items-center gap-3" onClick={handleOptionClick}>
                            <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                              <Image src={tooltip} alt="Tooltips" width={20} height={20} />
                            </div>
                            <div className="flex-grow">
                              <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Tooltips</p>
                              <p className={`text-xs ${outfit.className} text-gray-500`}>Onboarding journey for users</p>
                            </div>
                            <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'tooltip' ? 'opacity-100' : 'opacity-0'}`} />
                          </Link>
                        </div>
                        
                        <div 
                          className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
                          onMouseEnter={() => setHoveredItem('coach')}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <Link href="/coachmarks" className="flex items-center gap-3" onClick={handleOptionClick}>
                            <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                              <Image src={coach} alt="Coachmarks" width={20} height={20} />
                            </div>
                            <div className="flex-grow">
                              <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Coachmarks</p>
                              <p className={`text-xs ${outfit.className} text-gray-500`}>Highlight new features with wrapper</p>
                            </div>
                            <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'coach' ? 'opacity-100' : 'opacity-0'}`} />
                          </Link>
                        </div>
                        
                        <div 
                          className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2"
                          onMouseEnter={() => setHoveredItem('spotlight')}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <Link href="/spotlights" className="flex items-center gap-3" onClick={handleOptionClick}>
                            <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                              <Image src={spot} alt="Spotlight" width={20} height={20} />
                            </div>
                            <div className="flex-grow">
                              <p className={`text-sm ${bricolageGrotesque.className} text-gray-900 group-hover:text-blue-700`}>Spotlight</p>
                              <p className={`text-xs ${outfit.className} text-gray-500`}>Get user attention to specific features</p>
                            </div>
                            <FaArrowRight className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === 'spotlight' ? 'opacity-100' : 'opacity-0'}`} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative dropdown-container">
              <button
                onClick={() => handleClick("advanceSolutions")}
                className="text-gray-800 hover:text-[#FD5F03] transition duration-150 font-medium flex items-center"
              >
                Advanced Solutions
                <RiArrowDropDownLine 
                  className={`ml-1 h-5 w-5 transition-transform duration-200 ${dropdownOpen.advanceSolutions ? "rotate-180" : ""}`} 
                />
              </button>
              
              {dropdownOpen.advanceSolutions && (
                // <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen bg-white shadow-lg mt-1 py-4 z-20">
                //   <div className="container mx-auto">
                <div className="fixed top-16 md:top-20 left-0 right-0 w-full bg-white shadow-lg mt-1 py-4 z-20">
<div className="w-full max-w-6xl mx-auto px-4">
                    <h3 className={`text-left mb-4 px-4 py-2 ${outfit.className} font-light text-gray-500 text-sm border-b border-gray-200`}>
                      CORE FEATURES
                    </h3>
                    
                    <div className="grid grid-cols-3 gap-8 px-6">
                      {/* Integrations */}
                      <div className="space-y-4">
                        <h4 className={`${outfit.className} text-sm text-gray-800 font-medium mb-3`}>Integrations</h4>
                        <ul className="space-y-3">
                          <li>
                            <Link href="/integrations/mixpanel" className="flex items-center gap-3 group" onClick={handleOptionClick}>
                              <div className="w-6 h-6 flex items-center justify-center">
                                <Image src={mparticle_icon} alt="Mixpanel" width={18} height={18} />
                              </div>
                              <span className={`text-sm ${bricolageGrotesque.className} text-gray-800 group-hover:text-blue-700`}>Mixpanel</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/integrations/clevertap" className="flex items-center gap-3 group" onClick={handleOptionClick}>
                              <div className="w-6 h-6 flex items-center justify-center">
                                <Image src={clevertap_icon} alt="CleverTap" width={18} height={18} />
                              </div>
                              <span className={`text-sm ${bricolageGrotesque.className} text-gray-800 group-hover:text-blue-700`}>CleverTap</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/integrations/moengage" className="flex items-center gap-3 group" onClick={handleOptionClick}>
                              <div className="w-6 h-6 flex items-center justify-center">
                                <Image src={moengage_icon} alt="MoEngage" width={18} height={18} />
                              </div>
                              <span className={`text-sm ${bricolageGrotesque.className} text-gray-800 group-hover:text-blue-700`}>MoEngage</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/integrations/custom" className="flex items-center gap-3 group" onClick={handleOptionClick}>
                              <div className="w-6 h-6 flex items-center justify-center">
                                <Image src={custom_audienec_icon} alt="Custom Audiences" width={18} height={18} />
                              </div>
                              <span className={`text-sm ${bricolageGrotesque.className} text-gray-800 group-hover:text-blue-700`}>Custom Audiences</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      
                      {/* Segmentation & Cohorts */}
                      <div className="space-y-4">
                        <h4 className={`${outfit.className} text-sm text-gray-800 font-medium mb-3`}>Segmentation & Cohorts</h4>
                        <ul className="space-y-3">
                          <li>
                            <div className="flex items-center gap-3 group">
                              <span className={`text-sm ${bricolageGrotesque.className} text-gray-800 group-hover:text-blue-700`}>Real-Time Targeting</span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 group">
                              <span className={`text-sm ${bricolageGrotesque.className} text-gray-800 group-hover:text-blue-700`}>Feature Adoption Insights</span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 group">
                              <span className={`text-sm ${bricolageGrotesque.className} text-gray-800 group-hover:text-blue-700`}>Automated Growth Journeys</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                      {/* Goals & Impact Measurement */}
                      <div className="space-y-4">
                        <h4 className={`${outfit.className} text-sm text-gray-800 font-medium mb-3`}>Goals & Impact Measurement</h4>
                        <ul className="space-y-3">
                          <li>
                            <div className="flex items-center gap-3 group">
                              <span className={`text-sm ${bricolageGrotesque.className} text-gray-800 group-hover:text-blue-700`}>Setup Goals</span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 group">
                              <span className={`text-sm ${bricolageGrotesque.className} text-gray-800 group-hover:text-blue-700`}>Measure Impact</span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 group">
                              <span className={`text-sm ${bricolageGrotesque.className} text-gray-800 group-hover:text-blue-700`}>Goal-Based Event Tracking</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative dropdown-container">
              <button
                onClick={() => handleClick("resources")}
                className="text-gray-800 hover:text-[#FD5F03] transition duration-150 font-medium flex items-center"
              >
                Resources
                <RiArrowDropDownLine 
                  className={`ml-1 h-5 w-5 transition-transform duration-200 ${dropdownOpen.resources ? "rotate-180" : ""}`} 
                />
              </button>
              
              {dropdownOpen.resources && (
                // <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen bg-white shadow-lg mt-1 py-4 z-20">
                //   <div className="container mx-auto px-4">
                <div className="fixed top-16 md:top-20 left-0 right-0 w-full bg-white shadow-lg mt-1 py-4 z-20">
<div className="w-full max-w-6xl mx-auto px-4">
                    <div className="flex flex-col w-full">
                      {/* Main resources section */}
                      <div className="flex mb-6">
                        {/* Resources column */}
                        <div className="flex flex-col w-1/3">
                          <h4 className={`${outfit.className} text-sm text-gray-800 font-medium mb-4`}>RESOURCES</h4>
                          <ul className="space-y-4">
                            <li>
                              <Link href="/blogs" className="flex items-center gap-3 group" onClick={handleOptionClick}>
                                <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                                  <Image src={blog} alt="Blog" width={20} height={20} />
                                </div>
                                <div>
                                  <p className="font-medium text-blue-700 group-hover:text-blue-800">Blog</p>
                                  <p className={`text-xs ${outfit.className} font-light text-gray-500`}>Latest articles and updates</p>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link href="/career" className="flex items-center gap-3 group" onClick={handleOptionClick}>
                                <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                                  <Image src={career} alt="Careers" width={20} height={20} />
                                </div>
                                <div>
                                  <p className="font-medium text-blue-700 group-hover:text-blue-800">Careers</p>
                                  <p className={`text-xs ${outfit.className} font-light text-gray-500`}>Join our growing team</p>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link href="/inspirationGallery" className="flex items-center gap-3 group" onClick={handleOptionClick}>
                                <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                                  <Image src={bulb} alt="Inspiration Gallery" width={20} height={20} />
                                </div>
                                <div>
                                  <p className="font-medium text-blue-700 group-hover:text-blue-800">Inspiration Gallery</p>
                                  <p className={`text-xs ${outfit.className} font-light text-gray-500`}>Find ideas for your next project</p>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* SDKs & Frameworks section */}
                      <div>
                        <h4 className={`${outfit.className} text-sm text-gray-800 font-medium mb-4`}>SDKs & FRAMEWORKS</h4>
                        <div className="grid grid-cols-4 gap-6">
                          <Link href="#" className="flex items-center gap-3 group" onClick={handleOptionClick}>
                            <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                              <Image src={react} alt="React" width={20} height={20} className="object-contain" />
                            </div>
                            <div>
                              <p className="font-medium text-blue-700 group-hover:text-blue-800">React</p>
                              <p className={`text-xs ${outfit.className} font-light text-gray-500`}>Web framework</p>
                            </div>
                          </Link>

                          <Link href="#" className="flex items-center gap-3 group" onClick={handleOptionClick}>
                            <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                              <Image src={flutter} alt="Flutter" width={20} height={20} className="object-contain" />
                            </div>
                            <div>
                              <p className="font-medium text-blue-700 group-hover:text-blue-800">Flutter</p>
                              <p className={`text-xs ${outfit.className} font-light text-gray-500`}>Cross-platform framework</p>
                            </div>
                          </Link>

                          <Link href="#" className="flex items-center gap-3 group" onClick={handleOptionClick}>
                            <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                              <Image src={angular} alt="Angular" width={20} height={20} className="object-contain" />
                            </div>
                            <div>
                              <p className="font-medium text-blue-700 group-hover:text-blue-800">Angular</p>
                              <p className={`text-xs ${outfit.className} font-light text-gray-500`}>Web framework</p>
                            </div>
                          </Link>

                          <Link href="#" className="flex items-center gap-3 group" onClick={handleOptionClick}>
                            <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                              <Image src={reactnative} alt="React Native" width={20} height={20} className="object-contain" />
                            </div>
                            <div>
                              <p className="font-medium text-blue-700 group-hover:text-blue-800">React Native</p>
                              <p className={`text-xs ${outfit.className} font-light text-gray-500`}>Mobile framework</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link
              href="/contact"
              className="text-gray-800 hover:text-[#FD5F03] transition duration-150 font-medium"
              onClick={() => handleOptionClick()}
            >
              Contact
            </Link>
          </nav>
          
          {/* Action Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="https://admin.appstorys.com/"
              className="px-4 py-2 text-[#FD5F03] font-medium transition duration-150 hover:text-[#e05303]"
              target="_blank"
              onClick={() => handleOptionClick()}
            >
              Login
            </Link>
            
            <Link 
              href="/contact"
              className="rounded-full bg-[#FD5F03] text-white font-medium px-6 py-2.5 transition duration-150 hover:bg-[#e05303] flex items-center"
              onClick={() => {
                handleOptionClick();
                setRequestDemoClick(true);
              }}
            >
              <span>Contact Sales</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                <path d="M4.16699 10H15.8337" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.833 5L15.833 10L10.833 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden flex items-center"
            onClick={() => setListVisible(!listVisible)}
          >
            <Image
              src={style === "dark" ? hamburger_white : hamburger_black}
              alt="Menu"
              width={24}
              height={24}
            />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {listVisible && (
          <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-3 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="py-2 text-gray-800"
                onClick={() => handleOptionClick()}
              >
                About Us
              </Link>
              
              <div>
                <button
                  onClick={() => handleClick("feature")}
                  className="flex items-center justify-between w-full py-2 text-gray-800"
                >
                  <span>Features</span>
                  <RiArrowDropDownLine 
                    className={`h-6 w-6 transition-transform duration-200 ${dropdownOpen.feature ? "rotate-180" : ""}`} 
                  />
                </button>
                
                {dropdownOpen.feature && (
                  <div className="pl-4 mt-2 space-y-3">
                    <Link 
                      href="/stories" 
                      className="flex items-center py-2"
                      onClick={handleOptionClick}
                    >
                      <Image src={story} alt="Stories" width={20} height={20} className="mr-3" />
                      <span>Stories</span>
                    </Link>
                    <Link 
                      href="/reels" 
                      className="flex items-center py-2"
                      onClick={handleOptionClick}
                    >
                      <Image src={reel} alt="Reels" width={20} height={20} className="mr-3" />
                      <span>Reels</span>
                    </Link>
                    <Link 
                      href="/pipVideos" 
                      className="flex items-center py-2"
                      onClick={handleOptionClick}
                    >
                      <Image src={pip} alt="PIP Videos" width={20} height={20} className="mr-3" />
                      <span>PIP Videos</span>
                    </Link>
                    <Link 
                      href="/banners" 
                      className="flex items-center py-2"
                      onClick={handleOptionClick}
                    >
                      <Image src={banner} alt="Banners" width={20} height={20} className="mr-3" />
                      <span>Banners</span>
                    </Link>
                    <Link 
                      href="/csats" 
                      className="flex items-center py-2"
                      onClick={handleOptionClick}
                    >
                      <Image src={csat} alt="CSATs" width={20} height={20} className="mr-3" />
                      <span>CSATs</span>
                    </Link>
                  </div>
                )}
              </div>
              
              <div>
                <button
                  onClick={() => handleClick("advanceSolutions")}
                  className="flex items-center justify-between w-full py-2 text-gray-800"
                >
                  <span>Advanced Solutions</span>
                  <RiArrowDropDownLine 
                    className={`h-6 w-6 transition-transform duration-200 ${dropdownOpen.advanceSolutions ? "rotate-180" : ""}`} 
                  />
                </button>
                
                {dropdownOpen.advanceSolutions && (
                  <div className="pl-4 mt-2 space-y-3">
                    <Link 
                      href="/integrations/mixpanel" 
                      className="flex items-center py-2"
                      onClick={handleOptionClick}
                    >
                      <Image src={mparticle_icon} alt="Mixpanel" width={18} height={18} className="mr-3" />
                      <span>Mixpanel</span>
                    </Link>
                    <Link 
                      href="/integrations/clevertap" 
                      className="flex items-center py-2"
                      onClick={handleOptionClick}
                    >
                      <Image src={clevertap_icon} alt="CleverTap" width={18} height={18} className="mr-3" />
                      <span>CleverTap</span>
                    </Link>
                  </div>
                )}
              </div>
              
              <div>
                <button
                  onClick={() => handleClick("resources")}
                  className="flex items-center justify-between w-full py-2 text-gray-800"
                >
                  <span>Resources</span>
                  <RiArrowDropDownLine 
                    className={`h-6 w-6 transition-transform duration-200 ${dropdownOpen.resources ? "rotate-180" : ""}`} 
                  />
                </button>
                
                {dropdownOpen.resources && (
                  <div className="pl-4 mt-2 space-y-3">
                    <Link 
                      href="/blogs" 
                      className="flex items-center py-2"
                      onClick={handleOptionClick}
                    >
                      <Image src={blog} alt="Blog" width={20} height={20} className="mr-3" />
                      <span>Blog</span>
                    </Link>
                    <Link 
                      href="/career" 
                      className="flex items-center py-2"
                      onClick={handleOptionClick}
                    >
                      <Image src={career} alt="Careers" width={20} height={20} className="mr-3" />
                      <span>Careers</span>
                    </Link>
                  </div>
                )}
              </div>
              
              <Link
                href="/contact"
                className="py-2 text-gray-800"
                onClick={() => handleOptionClick()}
              >
                Contact
              </Link>
              
              <div className="pt-2 space-y-3">
                <Link
                  href="/contact"
                  className="block w-full rounded-full bg-[#FD5F03] text-white font-medium text-center px-4 py-2.5"
                  onClick={() => {
                    handleOptionClick();
                    setRequestDemoClick(true);
                  }}
                >
                  Contact Sales
                </Link>
                
                <Link
                  href="https://admin.appstorys.com/"
                  className="block w-full text-[#FD5F03] font-medium text-center px-4 py-2.5 border border-[#FD5F03] rounded-full"
                  target="_blank"
                  onClick={() => handleOptionClick()}
                >
                  Login
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
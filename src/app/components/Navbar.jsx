"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import down_arrow_black from "@/assets/down_arrow_black.png";
import down_arrow_white from "@/assets/down_arrow_white.png";
import hamburger_black from "@/assets/hamburger_black.png";
import hamburger_white from "@/assets/hamburger_white.png";
import banner from "@/assets/banner.png";
import floater from "@/assets/floater.png";
import pip from "@/assets/pip.png";
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
import logo from "@/assets/favicon.png";
import right_arrow_orange from "@/assets/right_arrow_orange.png";
import right_arrow_white from "@/assets/right_arrow_white.png";

import { motion } from "framer-motion";
import store from "../store/store";

const Navbar = ({ style }) => {
  const [dropdownOpen, setDropdownOpen] = useState({
    feature: false,
    resources: false,
    sdks: false,
  });

  const [listVisible, setListVisible] = useState(false);

  const handleClick = (link) => {
    setDropdownOpen((prevState) => ({
      feature: link === "feature" ? !prevState.feature : false, // Toggle 'feature' only when clicking 'features'
      resources: link === "resources" ? !prevState.resources : false,
      sdks: link === "sdks" ? !prevState.sdks : false, // Toggle 'resources' only when clicking 'resources'
    }));
  };

  const handleOptionClick = () => {
    setDropdownOpen({ feature: false });
    setDropdownOpen({ resources: false });
    setDropdownOpen({ sdks: false });

    setListVisible(false);
  };

  const { setRequestDemoClick } = store();

  return (
    <>
      <div
        className={`w-full z-[1000] flex flex-col justify-start items-center bg-[#fff] h-full py-[15px] px-[8%] max-[1129px]:px-[2%] min-[927px]:px-[0%] min-[927px]:py-[20px]`}
      >
        <div className="flex justify-between items-center w-full min-[1158px]:px-[3%] max-[1158px]:px-[3%] h-full">
          <div className="flex justify-start items-center gap-x-[4vw] max-[1158px]:gap-x-[3vw]">
            <div
              className={`flex flex-col justify-center items-center h-full ${style === "dark" ? "text-[#fff]" : "text-[#000]"
                }`}
            >
              <Link
                href="/"
                onClick={() => {
                  handleOptionClick();
                  setRequestDemoClick(false);
                }}
                className="flex"
              >
                <Image src={logo} alt={`${logo}`} width={35} height={35} className="mr-2" />
                <h1
                  className={`hover:cursor-pointer text-[#FD5F03] font-Poppins font-semibold text-[4vh] leading-[110%]`}
                >
                  AppStorys
                </h1>
              </Link>
            </div>
            <div
              className={`hidden min-[1078px]:flex justify-center items-center gap-x-[2.8vw] max-[1236px]:gap-x-[2vw] h-full ${style === "dark" ? "text-[#fff]" : "text-[#000]"
                }`}
            >
              <Link
                href="/about"
                className="text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer "
                onClick={() => {
                  handleOptionClick;
                  setRequestDemoClick(false);
                }}
              >
                About Us
              </Link>
              <div className="relative">
                <button
                  onClick={() => {
                    handleClick("feature");
                    setRequestDemoClick(false);
                  }}
                  className="text-[2vh] font-InstrumentSans tracking-[0.6px]  hover:cursor-pointer  flex justify-center items-center gap-x-[0.5vw]"
                >
                  Features
                  <Image
                    src={`${style === "dark" ? down_arrow_white.src : down_arrow_black.src
                      }`}
                    alt={`${style === "dark" ? down_arrow_white.src : down_arrow_black.src
                      }`}
                    className={`h-[2vh] ${dropdownOpen.feature
                      ? "rotate-180 ease-in duration-150"
                      : ""
                      }`}
                    width={15}
                    height={15}
                  />
                </button>
              </div>
              <Link
                href="/overview"
                className="text-[2vh] font-InstrumentSans tracking-[0.6px]  hover:cursor-pointer "
                onClick={() => {
                  handleOptionClick;
                  setRequestDemoClick(false);
                }}
              >
                Platform Overview
              </Link>
              <div className="relative">
                <button
                  onClick={() => {
                    handleClick("resources");
                    setRequestDemoClick(false);
                  }}
                  className="text-[2vh] font-InstrumentSans tracking-[0.6px]  hover:cursor-pointer  flex justify-center items-center gap-x-[0.5vw]"
                >
                  Resources
                  <Image
                    src={`${style === "dark" ? down_arrow_white.src : down_arrow_black.src
                      }`}
                    alt={`${style === "dark" ? down_arrow_white.src : down_arrow_black.src
                      }`}
                    className={`h-[2vh] ${dropdownOpen.resources
                      ? "rotate-180 ease-in duration-150"
                      : ""
                      }`}
                    width={15}
                    height={15}
                  />
                </button>
              </div>

              <Link
                href="/getintouch"
                className="text-[2vh] font-InstrumentSans tracking-[0.6px]  hover:cursor-pointer "
                onClick={() => {
                  handleOptionClick;
                  setRequestDemoClick(false);
                }}
              >
                Support
              </Link>
            </div>
          </div>
          <div className="hidden min-[1078px]:flex justify-center items-center gap-x-[1vw] h-full">

            {/* Request Demo Button */}
            <motion.button
              className="relative overflow-hidden flex border-3 border-[#FD5F03] justify-center items-center text-[1.6vh] font-InstrumentSans gap-x-[0.6vw] text-[#FD5F03] font-bold tracking-[1.18px] h-[6vh] w-[10vw] bg-white rounded-lg hover:shadow-[0_0_30px_5px_rgba(253,95,3,0.7)] transition-shadow duration-300 "
              onClick={() => {
                handleOptionClick();
                setRequestDemoClick(true);
              }}
              whileHover="hover"
            >
              {/* Background Animation */}
              <motion.div
                variants={{
                  initial: { top: "0%" },
                  hover: { top: "-100%" },
                }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full bg-white z-0"
              />
              <motion.div
                variants={{
                  initial: { top: "100%" },
                  hover: { top: "0%" },
                }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 w-full h-full bg-orange-500 z-0"
              />

              {/* Text Layer */}
              <motion.span
                variants={{
                  initial: { y: 0 },
                  hover: { y: "-100%" },
                }}
                transition={{ duration: 0.3 }}
                className="absolute w-full h-full flex items-center justify-center text-orange-500 font-semibold text-lg z-20"
              >
                Demo <Image src={right_arrow_orange} height={10} width={10} className="ml-2" alt="right arrow " />
              </motion.span>
              <motion.span
                variants={{
                  initial: { y: "100%" },
                  hover: { y: "0%" },
                }}
                transition={{ duration: 0.3 }}
                className="absolute w-full h-full flex items-center justify-center text-white font-semibold text-lg z-10"
              >
                Demo <Image src={right_arrow_white} height={10} width={10} className="ml-2" alt="right arrow " />
              </motion.span>
            </motion.button>

            {/* Login Button */}
            <motion.div
              className="relative overflow-hidden flex border-3 border-[#FD5F03] justify-center items-center text-[1.6vh] font-InstrumentSans gap-x-[0.6vw] text-[#FD5F03] font-bold tracking-[1.18px] h-[6vh] w-[10vw] cursor-pointer hover:shadow-[0_0_30px_5px_rgba(253,95,3,0.7)] transition-shadow duration-300 bg-white rounded-lg"
              onClick={() => {
                handleOptionClick();
                setRequestDemoClick(false);
              }}
              whileHover="hover"
            >
              <Link href="https://admin.appstorys.com/" target="_blank" className="w-full h-full flex items-center justify-center relative">
                {/* Background Animation */}
                <motion.div
                  variants={{
                    initial: { top: "0%" },
                    hover: { top: "-100%" },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 w-full h-full bg-white z-0"
                />
                <motion.div
                  variants={{
                    initial: { top: "100%" },
                    hover: { top: "0%" },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full left-0 w-full h-full bg-orange-500 z-0"
                />

                {/* Text Layer */}
                <motion.span
                  variants={{
                    initial: { y: 0 },
                    hover: { y: "-100%" },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full h-full flex items-center justify-center text-[#FD5F03] font-bold text-lg z-20"
                >
                  Login <Image src={right_arrow_orange} height={10} width={10} className="ml-2" alt="right arrow " />
                </motion.span>
                <motion.span
                  variants={{
                    initial: { y: "100%" },
                    hover: { y: "0%" },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full h-full flex items-center justify-center text-white font-bold text-lg z-10"
                >
                  Login <Image src={right_arrow_white} height={10} width={10} className="ml-2" alt="right arrow " />
                </motion.span>
              </Link>
            </motion.div>

          </div>
          <Image
            height={10}
            width={10}
            src={`${style === "dark" ? hamburger_white.src : hamburger_black.src}`}
            alt={`${style === "dark"
              ? "AppStorys hamburger_white"
              : "AppStorys hamburger_black"
              }`}
            className="min-[1078px]:hidden h-[13.5px] w-auto"
            onClick={() => setListVisible(!listVisible)}
          />
        </div>

        {dropdownOpen.feature && (
          <motion.div
            className={`hidden border-b-[#f0f0f0] text-[#1F4D9C] font-normal   border-b-[2px] min-[1078px]:flex justify-start mt-[7vh] items-start w-auto mr-[40vw] shadow-lg rounded-b-xl z-50 absolute gap-x-[4vw] py-[4vh] max-[927px]:py-[22.5px] px-[0%] max-[1129px]:px-[8%] max-[463px]:px-[0%] bg-[#EAF1FD] font-InstrumentSans  `}
            initial={{ y: -30, opacity: 0.9 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col justify-center font-medium  items-start px-[1vw] py-[1vh] gap-y-[1vh] w-[40%]">
              <li className="w-full hover:text-[#1A345A] flex justify-start items-center">
                <Link
                  href="/stories"
                  className={`block px-4 py-2 w-full ${style === "dark"
                    ? "hover:bg-[#2a2a2b]"
                    : "hover:bg-[#f3f4f6]"
                    }`}
                  onClick={handleOptionClick}
                >
                  <div className="flex  justify-start items-center gap-x-[1vw] hover:cursor-pointer">
                    <Image
                      src={story}
                      alt="AppStorys check_black"
                      className="h-[5vh]"
                      width={20}
                      height={100}
                    />
                    <div className="flex flex-col  justify-center items-start hover:cursor-pointer">
                      <h1 className=" text-[2vh]   font-InstrumentSans tracking-[0.6px] hover:cursor-pointer">
                        Stories
                      </h1>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="w-full hover:text-[#1A345A] flex justify-start items-center">
                <Link
                  href="/pipVideos"
                  className={`block px-4 py-2 w-full ${style === "dark"
                    ? "hover:bg-[#2a2a2b]"
                    : "hover:bg-[#f3f4f6]"
                    }`}
                  onClick={handleOptionClick}
                >
                  <div className="flex justify-start items-center gap-x-[1vw] hover:cursor-pointer">
                    <Image
                      width={20}
                      height={100}
                      src={pip}
                      alt="AppStorys check_black"
                      className="h-[5vh]"
                    />
                    <div className="flex flex-col justify-center items-start hover:cursor-pointer">
                      <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer">
                        PiP Videos
                      </h1>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="w-full hover:text-[#1A345A] flex justify-start items-center">
                <Link
                  href="/floaters"
                  className={`block px-4 py-2 w-full ${style === "dark"
                    ? "hover:bg-[#2a2a2b]"
                    : "hover:bg-[#f3f4f6]"
                    }`}
                  onClick={handleOptionClick}
                >
                  <div className="flex justify-start items-center gap-x-[1vw] hover:cursor-pointer">
                    <Image
                      width={20}
                      height={100}
                      src={floater}
                      alt="AppStorys check_black"
                      className="h-[5vh]"
                    />

                    <div className="flex flex-col justify-center items-start hover:cursor-pointer">
                      <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer">
                        Floaters
                      </h1>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="w-full hover:text-[#1A345A] flex justify-start items-center">
                <Link
                  href="/csats"
                  className={`block px-4 py-2 w-full ${style === "dark"
                    ? "hover:bg-[#2a2a2b]"
                    : "hover:bg-[#f3f4f6]"
                    }`}
                  onClick={handleOptionClick}
                >
                  <div className="flex justify-start items-center gap-x-[1vw] hover:cursor-pointer">
                    <Image
                      width={20}
                      height={100}
                      src={csat}
                      alt="AppStorys check_black"
                      className="h-[5vh]"
                    />
                    <div className="flex flex-col justify-center items-start hover:cursor-pointer">
                      <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer">
                        CSATs
                      </h1>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="w-full hover:text-[#1A345A] flex justify-start items-center">
                <Link
                  href="/widgets"
                  className={`block px-4 py-2 w-full ${style === "dark"
                    ? "hover:bg-[#2a2a2b]"
                    : "hover:bg-[#f3f4f6]"
                    }`}
                  onClick={handleOptionClick}
                >
                  <div className="flex justify-start items-center gap-x-[1vw] hover:cursor-pointer">
                    <Image
                      width={20}
                      height={100}
                      src={widget}
                      alt="AppStorys check_black"
                      className="h-[5vh]"
                    />
                    <div className="flex flex-col justify-center items-start hover:cursor-pointer">
                      <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer">
                        Widgets
                      </h1>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="w-full hover:text-[#1A345A] flex justify-start items-center">
                <Link
                  href="/scratchCards"
                  className={`block px-4 py-2 w-full ${style === "dark"
                    ? "hover:bg-[#2a2a2b]"
                    : "hover:bg-[#f3f4f6]"
                    }`}
                  onClick={handleOptionClick}
                >
                  <div className="flex justify-start items-center gap-x-[1vw] hover:cursor-pointer">
                    <Image
                      width={20}
                      height={100}
                      src={scratch}
                      alt="AppStorys check_black"
                      className="h-[5vh]"
                    />
                    <div className="flex flex-col justify-center items-start hover:cursor-pointer">
                      <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer">
                        Scratch Cards
                      </h1>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col justify-center font-medium  items-start px-[1vw] py-[1vh] gap-y-[1vh] w-[40%]">
              <li className="w-full flex hover:text-[#1A345A] justify-start items-center">
                <Link
                  href="/banners"
                  className={`block px-4 py-2 w-full ${style === "dark"
                    ? "hover:bg-[#2a2a2b]"
                    : "hover:bg-[#f3f4f6]"
                    }`}
                  onClick={handleOptionClick}
                >
                  <div className="flex justify-start items-center gap-x-[1vw] hover:cursor-pointer">
                    <Image
                      width={20}
                      height={100}
                      src={banner}
                      alt="AppStorys check_black"
                      className="h-[5vh]"
                    />
                    <div className="flex flex-col justify-center items-start hover:cursor-pointer">
                      <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer">
                        Banners
                      </h1>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="w-full flex hover:text-[#1A345A] justify-start items-center">
                <Link
                  href="/coachmarks"
                  className={`block px-4 py-2 w-full ${style === "dark"
                    ? "hover:bg-[#2a2a2b]"
                    : "hover:bg-[#f3f4f6]"
                    }`}
                  onClick={handleOptionClick}
                >
                  <div className="flex justify-start items-center gap-x-[1vw] hover:cursor-pointer">
                    <Image
                      width={20}
                      height={100}
                      src={coach}
                      alt="AppStorys check_black"
                      className="h-[5vh]"
                    />
                    <div className="flex flex-col justify-center items-start hover:cursor-pointer">
                      <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer">
                        Coachmarks
                      </h1>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="w-full hover:text-[#1A345A] flex justify-start items-center">
                <Link
                  href="/surveys"
                  className={`block px-4 py-2 w-full ${style === "dark"
                    ? "hover:bg-[#2a2a2b]"
                    : "hover:bg-[#f3f4f6]"
                    }`}
                  onClick={handleOptionClick}
                >
                  <div className="flex justify-start items-center gap-x-[1vw] hover:cursor-pointer">
                    <Image
                      width={20}
                      height={100}
                      src={survey}
                      alt="AppStorys check_black"
                      className="h-[5vh]"
                    />
                    <div className="flex flex-col justify-center items-start hover:cursor-pointer">
                      <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer">
                        Surveys
                      </h1>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="w-full hover:text-[#1A345A] flex justify-start items-center">
                <Link
                  href="/quizzes"
                  className={`block px-4 py-2 w-full ${style === "dark"
                    ? "hover:bg-[#2a2a2b]"
                    : "hover:bg-[#f3f4f6]"
                    }`}
                  onClick={handleOptionClick}
                >
                  <div className="flex justify-start items-center gap-x-[1vw] hover:cursor-pointer">
                    <Image
                      width={20}
                      height={100}
                      src={quiz}
                      alt="AppStorys check_black"
                      className="h-[5vh]"
                    />
                    <div className="flex flex-col justify-center items-start hover:cursor-pointer">
                      <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer">
                        Quizzes
                      </h1>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="w- hover:text-[#1A345A] flex justify-start items-center">
                <Link
                  href="/spotlights"
                  className={`block px-4 py-2 w-full ${style === "dark"
                    ? "hover:bg-[#2a2a2b]"
                    : "hover:bg-[#f3f4f6]"
                    }`}
                  onClick={handleOptionClick}
                >
                  <div className="flex justify-start items-center gap-x-[1vw] hover:cursor-pointer">
                    <Image
                      width={20}
                      height={100}
                      src={spot}
                      alt="AppStorys check_black"
                      className="h-[5vh]"
                    />
                    <div className="flex flex-col justify-center items-start hover:cursor-pointer">
                      <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer">
                        Spotlights
                      </h1>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="w-full hover:text-[#1A345A] flex justify-start items-center">
                <Link
                  href="/reels"
                  className={`block px-4 py-2 w-full ${style === "dark"
                    ? "hover:bg-[#2a2a2b]"
                    : "hover:bg-[#f3f4f6]"
                    }`}
                  onClick={handleOptionClick}
                >
                  <div className="flex justify-start items-center gap-x-[1vw] hover:cursor-pointer">
                    <Image
                      width={20}
                      height={100}
                      src={reel}
                      alt="AppStorys check_black"
                      className="h-[5vh]"
                    />
                    <div className="flex flex-col justify-center items-start hover:cursor-pointer">
                      <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer">
                        Reels
                      </h1>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
        {dropdownOpen.resources && (
          <motion.div
            className={`absolute z-50 w-[30vw] mr-40 mt-[7vh] border-b-2 border-gray-200 rounded-b-xl bg-[#EAF1FD] shadow-lg max-[1078px]:hidden min-[2000px]:mr-96`}
            initial={{ y: -30, opacity: 0.9 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-wrap justify-center px-4 py-6">
              {/* Other Resource Links */}
              <ul className="flex-1 w-[20%] font-medium text-[#1F4D9C]">
                <li className="mb-0">
                  <Link
                    href="/blogs"
                    className={`block p-2 rounded-md ${style === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"
                      }`}
                    onClick={handleOptionClick}
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        width={30}
                        height={100}
                        src={blog} alt="Check" className="h-8" />
                      <h1 className="text-[2vh] font-medium tracking-wide">Blog</h1>
                    </div>
                  </Link>
                </li>
                <li className="mb-0">
                  <Link
                    href="/career"
                    className={`block p-2 rounded-md ${style === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"
                      }`}
                    onClick={handleOptionClick}
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        width={30}
                        height={100}
                        src={career} alt="Check" className="h-8" />
                      <h1 className="text-[2vh] font-medium tracking-wide">Careers</h1>
                    </div>
                  </Link>
                </li>
              </ul>
              <ul className="flex-1 w-[20%] text-[#1F4D9C]">
                <li className="mb-2">
                  <Link
                    href="/inspirationGallery"
                    className={`block p-2 rounded-md ${style === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"
                      }`}
                    onClick={handleOptionClick}
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        width={30}
                        height={100}
                        src={bulb} alt="Check" className="h-8" />
                      <h1 className="text-[2vh] font-medium tracking-wide">
                        Inspiration Gallery
                      </h1>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-4">
              <h2 className="text-lg font-semibold text-black mt-1 px-2">
                SDKs & Frameworks
              </h2>
            </div>

            <div className="flex flex-wrap justify-center px-4 py-3">
              <ul className="flex-1 w-[20%] font-medium text-[#1F4D9C] space-y-2">
                <li>
                  <Link
                    href="#"
                    className={` p-2 rounded-md flex items-center gap-3 ${style === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"
                      }`}
                    onClick={handleOptionClick}
                  >
                    <Image
                      width={100}
                      height={100} src={react} alt="React" className="h-6 w-6 object-contain" />
                    <span className="text-[2vh] font-medium tracking-wide">React</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={` p-2 rounded-md flex items-center gap-3 ${style === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"
                      }`}
                    onClick={handleOptionClick}
                  >
                    <Image
                      width={100}
                      height={100} src={flutter} alt="Flutter" className="h-6 w-6 object-contain" />
                    <span className="text-[2vh] font-medium tracking-wide">Flutter</span>
                  </Link>
                </li>
              </ul>

              <ul className="flex-1 w-[20%] text-[#1F4D9C] space-y-2">
                <li>
                  <Link
                    href="#"
                    className={` p-2 rounded-md flex items-center gap-3 ${style === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"
                      }`}
                    onClick={handleOptionClick}
                  >
                    <Image
                      width={100}
                      height={100} src={angular} alt="Angular" className="h-6 w-6 object-contain" />
                    <span className="text-[2vh] font-medium tracking-wide">Angular</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={` p-2 rounded-md flex items-center gap-3 ${style === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"
                      }`}
                    onClick={handleOptionClick}
                  >
                    <Image
                      width={100}
                      height={100} src={reactnative} alt="React Native" className="h-6 w-6 object-contain" />
                    <span className="text-[2vh] font-medium tracking-wide">React Native</span>
                  </Link>
                </li>
              </ul>
            </div>

          </motion.div>
        )}


        {listVisible && (
          <motion.div
            className={`${style === "dark" ? "text-[#fff]" : "text-[#000]"
              } hidden max-[1078px]:flex flex-col justify-center max-[1078px]:items-start items-center gap-y-[20px] w-full py-[10px] rounded-bl-3xl rounded-br-3xl max-[425px]:mt-[20px] px-[20px]`}
            initial={{ y: -30, opacity: 0.9 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0.9 }} // Add exit animation
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col justify-center items-start w-full">
              <button
                onClick={() => {
                  handleClick("feature");
                  setRequestDemoClick(false);
                }}
                className="text-[2vh] font-InstrumentSans tracking-[0.6px]  hover:cursor-pointer  flex justify-center items-center gap-x-[0.5vw]"
              >
                Features
                <Image
                  height={10}
                  width={10}
                  src={`${style === "dark" ? down_arrow_white.src : down_arrow_black.src
                    }`}
                  alt={`${style === "dark"
                    ? "AppStorys down_arrow_white"
                    : "AppStorys down_arrow_black"
                    }`}
                  className={`h-[2vh] ${dropdownOpen.feature
                    ? "rotate-180 ease-in duration-150"
                    : ""
                    }`}
                />
              </button>
              {dropdownOpen.feature && (
                <motion.div
                  className={`hidden max-[1078px]:flex flex-col justify-start items-start w-full gap-x-[10vw] z-[10] max-[1129px]:px-[8%] max-[463px]:px-[0%] max-[1078px]:gap-y-[0px] ${style === "dark"
                    ? "bg-[#151515] text-white "
                    : "bg-[#f8f7f7] text-black"
                    } ${style === "orange" && "bg-[#fff6f2]"}`}
                  initial={{ y: -30, opacity: 0.9 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="flex flex-col justify-center items-start py-[1vh] gap-y-[5px] w-full">
                    <li className="w-full flex justify-start items-center">
                      <Link
                        href="/floaters"
                        className={`block px-4 py-2 w-full ${style === "dark"
                          ? "hover:bg-[#2a2a2b]"
                          : "hover:bg-[#f3f4f6]"
                          }`}
                        onClick={handleOptionClick}
                      >
                        <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
                          <Image
                            width={10}
                            height={10}
                            src={floater}
                            alt="AppStorys check_black"
                            className="h-[4vh]"
                          />
                          <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
                            <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
                              Floaters
                            </h1>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="w-full flex justify-start items-center ">
                      <Link
                        href="/stories"
                        className={`block px-4 py-2 w-full ${style === "dark"
                          ? "hover:bg-[#2a2a2b]"
                          : "hover:bg-[#f3f4f6]"
                          }`}
                        onClick={handleOptionClick}
                      >
                        <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
                          <Image
                            width={10}
                            height={10}
                            src={story}
                            alt="AppStorys check_black"
                            className="h-[4vh]"
                          />
                          <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
                            <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
                              Stories
                            </h1>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="w-full flex justify-start items-center">
                      <Link
                        href="/pipVideos"
                        className={`block px-4 py-2 w-full ${style === "dark"
                          ? "hover:bg-[#2a2a2b]"
                          : "hover:bg-[#f3f4f6]"
                          }`}
                        onClick={handleOptionClick}
                      >
                        <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
                          <Image
                            width={10}
                            height={10}
                            src={pip}
                            alt="AppStorys check_black"
                            className="h-[4vh]"
                          />
                          <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
                            <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
                              PiP Videos
                            </h1>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="flex justify-start items-center w-full">
                      <Link
                        href="/coachmarks"
                        className={`block px-4 py-2 w-full ${style === "dark"
                          ? "hover:bg-[#2a2a2b]"
                          : "hover:bg-[#f3f4f6]"
                          }`}
                        onClick={handleOptionClick}
                      >
                        <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
                          <Image
                            width={10}
                            height={10}
                            src={coach}
                            alt="AppStorys check_black"
                            className="h-[4vh]"
                          />
                          <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
                            <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
                              Coachmarks
                            </h1>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="w-full flex justify-start items-center">
                      <Link
                        href="/banners"
                        className={`block px-4 py-2 w-full ${style === "dark"
                          ? "hover:bg-[#2a2a2b]"
                          : "hover:bg-[#f3f4f6]"
                          }`}
                        onClick={handleOptionClick}
                      >
                        <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
                          <Image
                            width={10}
                            height={10}
                            src={banner}
                            alt="AppStorys check_black"
                            className="h-[4vh]"
                          />
                          <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
                            <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
                              Banners
                            </h1>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="w-full flex justify-start items-center">
                      <Link
                        href="/surveys"
                        className={`block px-4 py-2 w-full ${style === "dark"
                          ? "hover:bg-[#2a2a2b]"
                          : "hover:bg-[#f3f4f6]"
                          }`}
                        onClick={handleOptionClick}
                      >
                        <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
                          <Image
                            width={10}
                            height={10}
                            src={survey}
                            alt="AppStorys check_black"
                            className="h-[4vh]"
                          />
                          <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
                            <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
                              Surveys
                            </h1>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="w-full flex justify-start items-center">
                      <Link
                        href="/quizzes"
                        className={`block px-4 py-2 w-full ${style === "dark"
                          ? "hover:bg-[#2a2a2b]"
                          : "hover:bg-[#f3f4f6]"
                          }`}
                        onClick={handleOptionClick}
                      >
                        <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
                          <Image
                            width={10}
                            height={10}
                            src={quiz}
                            alt="AppStorys check_black"
                            className="h-[4vh]"
                          />
                          <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
                            <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
                              Quizzes
                            </h1>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="w-full flex justify-start items-center">
                      <Link
                        href="/csats"
                        className={`block px-4 py-2 w-full ${style === "dark"
                          ? "hover:bg-[#2a2a2b]"
                          : "hover:bg-[#f3f4f6]"
                          }`}
                        onClick={handleOptionClick}
                      >
                        <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
                          <Image
                            width={10}
                            height={10}
                            src={csat}
                            alt="AppStorys check_black"
                            className="h-[4vh]"
                          />
                          <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
                            <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
                              CSATs
                            </h1>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="w-full flex justify-start items-center">
                      <Link
                        href="/widgets"
                        className={`block px-4 py-2 w-full ${style === "dark"
                          ? "hover:bg-[#2a2a2b]"
                          : "hover:bg-[#f3f4f6]"
                          }`}
                        onClick={handleOptionClick}
                      >
                        <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
                          <Image
                            width={10}
                            height={10}
                            src={widget}
                            alt="AppStorys check_black"
                            className="h-[4vh]"
                          />
                          <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
                            <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
                              Widgets
                            </h1>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="w-full flex justify-start items-center">
                      <Link
                        href="/spotlights"
                        className={`block px-4 py-2 w-full ${style === "dark"
                          ? "hover:bg-[#2a2a2b]"
                          : "hover:bg-[#f3f4f6]"
                          }`}
                        onClick={handleOptionClick}
                      >
                        <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
                          <Image
                            width={10}
                            height={10}
                            src={spot}
                            alt="AppStorys check_black"
                            className="h-[4vh]"
                          />
                          <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
                            <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
                              Spotlights
                            </h1>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="w-full flex justify-start items-center">
                      <Link
                        href="/reels"
                        className={`block px-4 py-2 w-full ${style === "dark"
                          ? "hover:bg-[#2a2a2b]"
                          : "hover:bg-[#f3f4f6]"
                          }`}
                        onClick={handleOptionClick}
                      >
                        <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
                          <Image
                            width={10}
                            height={10}
                            src={reel}
                            alt="AppStorys check_black"
                            className="h-[4vh]"
                          />
                          <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
                            <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
                              Reels
                            </h1>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="w-full flex justify-start items-center">
                      <Link
                        href="/scratchCards"
                        className={`block px-4 py-2 w-full ${style === "dark"
                          ? "hover:bg-[#2a2a2b]"
                          : "hover:bg-[#f3f4f6]"
                          }`}
                        onClick={handleOptionClick}
                      >
                        <div className="flex justify-start items-center gap-x-[1vw] max-[450px]:gap-x-[5vw] hover:cursor-pointer w-full">
                          <Image
                            width={10}
                            height={10}
                            src={scratch}
                            alt="AppStorys check_black"
                            className="h-[4vh]"
                          />
                          <div className="flex flex-col justify-center items-start hover:cursor-pointer w-full">
                            <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer w-full">
                              Scratch Cards
                            </h1>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>
            <Link
              href="/security"
              className="text-[2vh] font-InstrumentSans tracking-[0.6px]  hover:cursor-pointer "
              onClick={() => {
                handleOptionClick();
                setRequestDemoClick(false);
              }}
            >
              Security
            </Link>
            <div className="flex flex-col justify-center items-start w-full">
              <button
                onClick={() => {
                  handleClick("resources");
                  setRequestDemoClick(false);
                }}
                className="text-[2vh] font-InstrumentSans tracking-[0.6px]  hover:cursor-pointer  flex justify-center items-center gap-x-[0.5vw]"
              >
                Resources
                <Image
                  width={10}
                  height={10}
                  src={`${style === "dark" ? down_arrow_white.src : down_arrow_black.src
                    }`}
                  alt={`${style === "dark" ? down_arrow_white.src : down_arrow_black.src
                    }`}
                  className={`h-[2vh] ${dropdownOpen.resources
                    ? "rotate-180 ease-in duration-150"
                    : ""
                    }`}
                />
              </button>
              {dropdownOpen.resources && (
                <motion.div
                  className={`hidden max-[1078px]:flex flex-col justify-start items-start w-full gap-x-[10vw] z-[10] max-[1129px]:px-[8%] max-[463px]:px-[0%] ${style === "dark"
                    ? "bg-[#151515] text-white "
                    : "bg-[#f8f7f7] text-black"
                    } ${style === "orange" && "bg-[#fff6f2]"}`}
                  initial={{ y: -30, opacity: 0.9 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="flex flex-col justify-center items-start py-[1vh] gap-y-[5px] w-full">
                    <li className="w-full flex justify-start items-center">
                      <Link
                        href="/blogs"
                        className={`block px-4 py-2 w-full ${style === "dark"
                          ? "hover:bg-[#2a2a2b]"
                          : "hover:bg-[#f3f4f6]"
                          }`}
                        onClick={handleOptionClick}
                      >
                        <div className="flex justify-start items-center gap-x-[1vw] hover:cursor-pointer">
                          <Image
                            width={10}
                            height={10}
                            src={blog}
                            alt="AppStorys check_black"
                            className="h-[4vh]"
                          />
                          <div className="flex flex-col justify-center items-start hover:cursor-pointer">
                            <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer">
                              Blog
                            </h1>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="w-full flex justify-start items-center">
                      <Link
                        href="/career"
                        className={`block px-4 py-2 w-full ${style === "dark"
                          ? "hover:bg-[#2a2a2b]"
                          : "hover:bg-[#f3f4f6]"
                          }`}
                        onClick={handleOptionClick}
                      >
                        <div className="flex justify-start items-center gap-x-[1vw] hover:cursor-pointer">
                          <Image
                            width={10}
                            height={10}
                            src={career}
                            alt="AppStorys check_black"
                            className="h-[4vh]"
                          />
                          <div className="flex flex-col justify-center items-start hover:cursor-pointer">
                            <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer">
                              Careers
                            </h1>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="flex justify-start items-center w-full">
                      <Link
                        href="/inspirationGallery"
                        className={`block px-4 py-2 w-full ${style === "dark"
                          ? "hover:bg-[#2a2a2b]"
                          : "hover:bg-[#f3f4f6]"
                          }`}
                        onClick={handleOptionClick}
                      >
                        <div className="flex justify-start items-center gap-x-[1vw] hover:cursor-pointer">
                          <Image
                            width={10}
                            height={10}
                            src={bulb}
                            alt="AppStorys check_black"
                            className="h-[4vh]"
                          />
                          <div className="flex flex-col justify-center items-start hover:cursor-pointer">
                            <h1 className=" text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer">
                              Inspiration Gallery
                            </h1>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>
            <Link
              href="/about"
              className="text-[2vh] font-InstrumentSans tracking-[0.6px] hover:cursor-pointer "
              onClick={() => {
                handleOptionClick();
                setRequestDemoClick(false);
              }}
            >
              About Us
            </Link>
            <Link
              href="/getintouch"
              className="text-[2vh] font-InstrumentSans tracking-[0.6px]  hover:cursor-pointer "
              onClick={() => {
                handleOptionClick();
                setRequestDemoClick(false);
              }}
            >
              Contact Us
            </Link>
            <div className="flex w-full flex-col justify-center items-center gap-y-[10px]">
              <button
                className="flex justify-center items-center bg-[#d64830] text-[11.76px] font-1.6vhx-[10.58px] text-white 0.6vw tracking-[1.18px] h-[6vh] w-[12vw] max-[1078px]:w-full gap-x-[10px]"
                onClick={() => {
                  handleOptionClick();
                  setRequestDemoClick(true);
                }}
              >
                <div className="w-[0.6vh] h-[0.6vh] bg-white rounded-full"></div>
                REQUEST A DEMO
              </button>
              <a
                href="https://admin.appstorys.com/"
                target="/blank"
                className="flex justify-center items-center bg-[#d64830] text-[11.76px] font-1.6vhx-[10.58px] text-white 0.6vw tracking-[1.18px] h-[6vh] w-[12vw] max-[1078px]:w-full gap-x-[10px]"
                onClick={() => {
                  handleOptionClick();
                  setRequestDemoClick(false);
                }}
              >
                <div className="w-[0.6vh] h-[0.6vh] bg-white rounded-full"></div>
                LOG IN
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navbar;

"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Outfit, Bricolage_Grotesque, Poppins } from "next/font/google";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiFillAndroid, AiTwotoneThunderbolt } from "react-icons/ai";
import { FaApple, FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation"
import { LuHeartHandshake } from "react-icons/lu";
import { MdFeedback } from "react-icons/md";
import { FaBlog } from "react-icons/fa6";
import { TfiGallery } from "react-icons/tfi";
import { TbNotebook } from "react-icons/tb";

import {
  FaReact,
  FaFlutter,
  FaAngular,
  FaWordpressSimple,
  FaShopify,
} from "react-icons/fa";

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
import '../../globals.css'

import store from "../../store/store";
import InteractiveHoverButton from '../InteractiveHoverButton';

// Load fonts
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Header = ({ style }) => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState({
    feature: false,
    advanceSolutions: false,
    resources: false,
    sdks: false,
  });
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { setRequestDemoClick } = store();

  const [listVisible, setListVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container") &&
        !event.target.closest(".mobile-nav-container")) {
        setDropdownOpen({
          feature: false,
          advanceSolutions: false,
          resources: false,
          sdks: false,
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleClick = (link) => {
    setDropdownOpen((prevState) => ({
      feature: link === "feature" ? !prevState.feature : false,
      advanceSolutions:
        link === "advanceSolutions" ? !prevState.advanceSolutions : false,
      resources: link === "resources" ? !prevState.resources : false,
      sdks: link === "sdks" ? !prevState.sdks : false,
    }));
  };

  const handleOptionClick = () => {
    setDropdownOpen({
      feature: false,
      advanceSolutions: false,
      resources: false,
      sdks: false,
    });
    setListVisible(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFF7F3] w-full shadow-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-24">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => handleOptionClick()}
            >
              <Image
                src={logo}
                alt="AppStorys Logo"
                width={35}
                height={35}
                className="mr-2"
              />
              <h1
                className={`text-[#FD5F03] ${poppins.className} font-semibold text-2xl`}
              >
                AppStorys
              </h1>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden xl:flex items-center space-x-6">
            <div className="relative dropdown-container">
              <button
                onClick={() => handleClick("feature")}
                className="text-[#000] hover:text-[#FD5F03] transition duration-150 font-normal flex items-center"
              >
                Features
                <RiArrowDropDownLine
                  className={`ml-1 h-5 w-5 transition-transform duration-200 ${dropdownOpen.feature ? "rotate-180" : ""
                    }`}
                />
              </button>

              {dropdownOpen.feature && (
                <div className={`fixed top-16 ${scrolled ? "md:top-19" : "md:top-30"}  left-0 right-0 w-full bg-white shadow-lg mt-1 py-4 z-20`}>
                  <div className="w-full max-w-6xl mx-auto px-4">
                    <h3
                      className={`text-left mb-4 px-4 py-2  sf-pro font-bold tracking-[1px] text-black font text-sm border-b border-gray-200`}
                    >
                      CORE FEATURES
                    </h3>

                    <div className="grid grid-cols-4 gap-6 px-4">
                      {/* Rich Media Content */}
                      <div className="space-y-4">
                        <h4
                          className={`sf-pro  text-sm text-gray-800 font-medium mb-2 pb-2 border-b border-gray-200`}
                        >
                          RICH MEDIA CONTENT
                        </h4>

                        <div className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2 h-20">
                          <Link
                            href="/stories"
                            className="flex items-center gap-3 h-full w-full"
                            onClick={handleOptionClick}
                            onMouseEnter={() => setHoveredItem("stories")}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-blue-600">
                              <Image
                                src={story}
                                alt="Stories"
                                width={20}
                                height={20}
                              />
                            </div>
                            <div className="flex-grow">
                              <p
                                className={`text-sm sf-pro text-gray-900 group-hover:text-blue-700`}
                              >
                                Stories
                              </p>
                              <p
                                className={`text-xs sf-pro text-gray-500`}
                              >
                                Rich media bite sized content
                              </p>
                            </div>
                            <FaArrowRight
                              className={`text-blue-600  transition-opacity duration-150 ${hoveredItem === "stories"
                                ? "opacity-100"
                                : "opacity-0"
                                }`}
                            />
                          </Link>
                        </div>

                        <div className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2 h-20">
                          <Link
                            href="/reels"
                            className="flex items-center gap-3 h-full w-full"
                            onClick={handleOptionClick}
                            onMouseEnter={() => setHoveredItem("reels")}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-blue-600">
                              <Image
                                src={reel}
                                alt="Reels"
                                width={20}
                                height={20}
                              />
                            </div>
                            <div className="flex-grow">
                              <p
                                className={`text-sm sf-pro text-gray-900 group-hover:text-blue-700`}
                              >
                                Reels
                              </p>
                              <p
                                className={`text-xs sf-pro text-gray-500`}
                              >
                                Present constantly scrolling short videos
                              </p>
                            </div>
                            <FaArrowRight
                              className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === "reels"
                                ? "opacity-100"
                                : "opacity-0"
                                }`}
                            />
                          </Link>
                        </div>

                        <div className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2 h-20">
                          <Link
                            href="/pipVideos"
                            className="flex items-center gap-3 h-full w-full"
                            onClick={handleOptionClick}
                            onMouseEnter={() => setHoveredItem("pip")}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-blue-600">
                              <Image
                                src={pip}
                                alt="PIP Videos"
                                width={20}
                                height={20}
                              />
                            </div>
                            <div className="flex-grow">
                              <p
                                className={`text-sm sf-pro text-gray-900 group-hover:text-blue-700`}
                              >
                                PiP Videos
                              </p>
                              <p
                                className={`text-xs sf-pro text-gray-500`}
                              >
                                Non-intrusive movable on-screen video
                              </p>
                            </div>
                            <FaArrowRight
                              className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === "pip"
                                ? "opacity-100"
                                : "opacity-0"
                                }`}
                            />
                          </Link>
                        </div>

                        <div className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2 h-20">
                          <Link
                            href="/bottomSheets"
                            className="flex items-center gap-3 h-full w-full"
                            onClick={handleOptionClick}
                            onMouseEnter={() => setHoveredItem("bottom")}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-blue-600">
                              <Image
                                src={bottom_sheet}
                                alt="Bottom Sheets"
                                width={20}
                                height={20}
                              />
                            </div>
                            <div className="flex-grow">
                              <p
                                className={`text-sm sf-pro text-gray-900 group-hover:text-blue-700`}
                              >
                                Bottom Sheets
                              </p>
                              <p
                                className={`text-xs sf-pro text-gray-500`}
                              >
                                Boost Engagement With Interactive Bottom Sheets
                              </p>
                            </div>
                            <FaArrowRight
                              className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === "bottom"
                                ? "opacity-100"
                                : "opacity-0"
                                }`}
                            />
                          </Link>
                        </div>
                      </div>

                      {/* Interactive Elements */}
                      <div className="space-y-4">
                        <h4
                          className={`sf-pro text-sm text-gray-800 font-medium mb-2 pb-2 border-b border-gray-200`}
                        >
                          INTERACTIVE ELEMENTS
                        </h4>

                        <div className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2 h-20">
                          <Link
                            href="/banners"
                            className="flex items-center gap-3 h-full w-full"
                            onClick={handleOptionClick}
                            onMouseEnter={() => setHoveredItem("banner")}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-blue-600">
                              <Image
                                src={banner}
                                alt="Banner"
                                width={20}
                                height={20}
                              />
                            </div>
                            <div className="flex-grow">
                              <p
                                className={`text-sm sf-pro text-gray-900 group-hover:text-blue-700`}
                              >
                                Banner
                              </p>
                              <p
                                className={`text-xs sf-pro text-gray-500`}
                              >
                                Automatic banner moving with screen
                              </p>
                            </div>
                            <FaArrowRight
                              className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === "banner"
                                ? "opacity-100"
                                : "opacity-0"
                                }`}
                            />
                          </Link>
                        </div>

                        <div className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2 h-20">
                          <Link
                            href="/floaters"
                            className="flex items-center gap-3 h-full w-full"
                            onClick={handleOptionClick}
                            onMouseEnter={() => setHoveredItem("floater")}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-blue-600">
                              <Image
                                src={floater}
                                alt="Floaters"
                                width={20}
                                height={20}
                              />
                            </div>
                            <div className="flex-grow">
                              <p
                                className={`text-sm sf-pro text-gray-900 group-hover:text-blue-700`}
                              >
                                Floaters
                              </p>
                              <p
                                className={`text-xs sf-pro text-gray-500`}
                              >
                                Small Image/GIF on screen floating with content
                              </p>
                            </div>
                            <FaArrowRight
                              className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === "floater"
                                ? "opacity-100"
                                : "opacity-0"
                                }`}
                            />
                          </Link>
                        </div>

                        <div className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2 h-20">
                          <Link
                            href="/widgets"
                            className="flex items-center gap-3 h-full w-full"
                            onClick={handleOptionClick}
                            onMouseEnter={() => setHoveredItem("widgets")}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-blue-600">
                              <Image
                                src={widget}
                                alt="Widgets"
                                width={20}
                                height={20}
                              />
                            </div>
                            <div className="flex-grow">
                              <p
                                className={`text-sm sf-pro text-gray-900 group-hover:text-blue-700`}
                              >
                                Widgets
                              </p>
                              <p
                                className={`text-xs sf-pro text-gray-500`}
                              >
                                Customizable scalable images/animation
                              </p>
                            </div>
                            <FaArrowRight
                              className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === "widgets"
                                ? "opacity-100"
                                : "opacity-0"
                                }`}
                            />
                          </Link>
                        </div>

                        <div className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2 h-20">
                          <Link
                            href="/scratchCards"
                            className="flex items-center gap-3 h-full w-full"
                            onClick={handleOptionClick}
                            onMouseEnter={() => setHoveredItem("scratch")}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-blue-600">
                              <Image
                                src={scratch}
                                alt="Scratch Card"
                                width={20}
                                height={20}
                              />
                            </div>
                            <div className="flex-grow">
                              <p
                                className={`text-sm sf-pro text-gray-900 group-hover:text-blue-700`}
                              >
                                Scratch Card
                              </p>
                              <p
                                className={`text-xs sf-pro text-gray-500`}
                              >
                                Gamification option to engage users
                              </p>
                            </div>
                            <FaArrowRight
                              className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === "scratch"
                                ? "opacity-100"
                                : "opacity-0"
                                }`}
                            />
                          </Link>
                        </div>
                      </div>

                      {/* Take Action */}
                      <div className="space-y-4">
                        <h4
                          className={`sf-pro text-sm text-gray-800 font-medium mb-2 pb-2 border-b border-gray-200`}
                        >
                          TAKE ACTION
                        </h4>

                        <div className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2 h-20">
                          <Link
                            href="/quizzes"
                            className="flex items-center gap-3 h-full w-full"
                            onClick={handleOptionClick}
                            onMouseEnter={() => setHoveredItem("quiz")}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-blue-600">
                              <Image
                                src={quiz}
                                alt="Quiz"
                                width={20}
                                height={20}
                              />
                            </div>
                            <div className="flex-grow">
                              <p
                                className={`text-sm sf-pro text-gray-900 group-hover:text-blue-700`}
                              >
                                Quiz
                              </p>
                              <p
                                className={`text-xs sf-pro text-gray-500`}
                              >
                                Ask users questions and engage them
                              </p>
                            </div>
                            <FaArrowRight
                              className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === "quiz"
                                ? "opacity-100"
                                : "opacity-0"
                                }`}
                            />
                          </Link>
                        </div>

                        <div className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2 h-20">
                          <Link
                            href="/surveys"
                            className="flex items-center gap-3 h-full w-full"
                            onClick={handleOptionClick}
                            onMouseEnter={() => setHoveredItem("survey")}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-blue-600">
                              <Image
                                src={survey}
                                alt="Survey"
                                width={20}
                                height={20}
                              />
                            </div>
                            <div className="flex-grow">
                              <p
                                className={`text-sm sf-pro text-gray-900 group-hover:text-blue-700`}
                              >
                                Survey
                              </p>
                              <p
                                className={`text-xs sf-pro text-gray-500`}
                              >
                                Get user inputs
                              </p>
                            </div>
                            <FaArrowRight
                              className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === "survey"
                                ? "opacity-100"
                                : "opacity-0"
                                }`}
                            />
                          </Link>
                        </div>

                        <div className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2 h-20">
                          <Link
                            href="/csats"
                            className="flex items-center gap-3 h-full w-full"
                            onClick={handleOptionClick}
                            onMouseEnter={() => setHoveredItem("csat")}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-blue-600">
                              <Image
                                src={csat}
                                alt="CSAT Feedback"
                                width={20}
                                height={20}
                              />
                            </div>
                            <div className="flex-grow">
                              <p
                                className={`text-sm sf-pro text-gray-900 group-hover:text-blue-700`}
                              >
                                CSAT Feedback
                              </p>
                              <p
                                className={`text-xs sf-pro text-gray-500`}
                              >
                                Measure services via feedback
                              </p>
                            </div>
                            <FaArrowRight
                              className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === "csat"
                                ? "opacity-100"
                                : "opacity-0"
                                }`}
                            />
                          </Link>
                        </div>
                      </div>

                      {/* Onboarding */}
                      <div className="space-y-4">
                        <h4
                          className={`sf-pro text-sm text-gray-800 font-medium mb-2 pb-2 border-b border-gray-200`}
                        >
                          ONBOARDING
                        </h4>

                        <div className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2 h-20">
                          <Link
                            href="/tooltips"
                            className="flex items-center gap-3 h-full w-full"
                            onClick={handleOptionClick}
                            onMouseEnter={() => setHoveredItem("tooltip")}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-blue-600">
                              <Image
                                src={tooltip}
                                alt="Tooltips"
                                width={20}
                                height={20}
                              />
                            </div>
                            <div className="flex-grow">
                              <p
                                className={`text-sm sf-pro text-gray-900 group-hover:text-blue-700`}
                              >
                                Tooltips
                              </p>
                              <p
                                className={`text-xs sf-pro text-gray-500`}
                              >
                                Onboarding journey for users
                              </p>
                            </div>
                            <FaArrowRight
                              className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === "tooltip"
                                ? "opacity-100"
                                : "opacity-0"
                                }`}
                            />
                          </Link>
                        </div>

                        <div className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2 h-20">
                          <Link
                            href="/coachmarks"
                            className="flex items-center gap-3 h-full w-full"
                            onClick={handleOptionClick}
                            onMouseEnter={() => setHoveredItem("coach")}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-blue-600">
                              <Image
                                src={coach}
                                alt="Coachmarks"
                                width={20}
                                height={20}
                              />
                            </div>
                            <div className="flex-grow">
                              <p
                                className={`text-sm sf-pro text-gray-900 group-hover:text-blue-700`}
                              >
                                Coachmarks
                              </p>
                              <p
                                className={`text-xs sf-pro text-gray-500`}
                              >
                                Highlight new features with wrapper
                              </p>
                            </div>
                            <FaArrowRight
                              className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === "coach"
                                ? "opacity-100"
                                : "opacity-0"
                                }`}
                            />
                          </Link>
                        </div>

                        <div className="group hover:bg-blue-50 rounded-lg transition duration-150 p-2 h-20">
                          <Link
                            href="/spotlights"
                            className="flex items-center gap-3 h-full w-full"
                            onClick={handleOptionClick}
                            onMouseEnter={() => setHoveredItem("spotlight")}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-blue-600">
                              <Image
                                src={spot}
                                alt="Spotlight"
                                width={20}
                                height={20}
                              />
                            </div>
                            <div className="flex-grow">
                              <p
                                className={`text-sm sf-pro text-gray-900 group-hover:text-blue-700`}
                              >
                                Spotlight
                              </p>
                              <p
                                className={`text-xs sf-pro text-gray-500`}
                              >
                                Get user attention to specific features
                              </p>
                            </div>
                            <FaArrowRight
                              className={`text-blue-600 transition-opacity duration-150 ${hoveredItem === "spotlight"
                                ? "opacity-100"
                                : "opacity-0"
                                }`}
                            />
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
                className="text-[#000] hover:text-[#FD5F03] transition duration-150 font-normal flex items-center"
              >
                Advanced Solutions
                <RiArrowDropDownLine
                  className={`ml-1 h-5 w-5 transition-transform duration-200 ${dropdownOpen.advanceSolutions ? "rotate-180" : ""
                    }`}
                />
              </button>

              {dropdownOpen.advanceSolutions && (
                <div className={`fixed top-16 ${scrolled ? "md:top-19" : "md:top-30"} left-0 right-0 w-full bg-white shadow-lg mt-1 z-20`}>
                  <div className="w-full max-w-6xl mx-auto">
                    <div className="grid grid-cols-3">
                      <div className="py-2 border-r border-gray-200 min-h-[300px]">
                        <h4 className="p-3 text-base font-medium">
                          Integrations
                        </h4>

                        <div className="border-t border-gray-200">
                          <div
                            className="flex items-center gap-3 p-3 hover:bg-gray-50"
                          // onClick={handleOptionClick}
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <Image
                                src={mparticle_icon}
                                alt="mParticle"
                                width={18}
                                height={18}
                              />
                            </div>
                            <span className="text-base text-gray-800 ml-2">
                              mParticle
                            </span>
                          </div>
                        </div>

                        <div className="border-t border-gray-200">
                          <div
                            className="flex items-center gap-3 p-3 hover:bg-gray-50"
                          // onClick={handleOptionClick}
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <Image
                                src={clevertap_icon}
                                alt="CleverTap"
                                width={18}
                                height={18}
                              />
                            </div>
                            <span className="text-base text-gray-800 ml-2">
                              CleverTap
                            </span>
                          </div>
                        </div>

                        <div className="border-t border-gray-200">
                          <div
                            className="flex items-center gap-3 p-3 hover:bg-gray-50"
                          // onClick={handleOptionClick}
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <Image
                                src={moengage_icon}
                                alt="MoEngage"
                                width={18}
                                height={18}
                              />
                            </div>
                            <span className="text-base text-gray-800 ml-2">
                              MoEngage
                            </span>
                          </div>
                        </div>

                        <div className="border-t border-gray-200">
                          <div
                            className="flex items-center gap-3 p-3 hover:bg-gray-50"
                          // onClick={handleOptionClick}
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <Image
                                src={custom_audienec_icon}
                                alt="Custom Audiences"
                                width={18}
                                height={18}
                              />
                            </div>
                            <span className="text-base text-gray-800 ml-2">
                              Custom Audiences
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="py-2 border-r border-gray-200">
                        <h4 className="p-3 text-base font-medium">
                          Segmentation & Cohorts
                        </h4>

                        <div className="border-t border-gray-200">
                          <div className="flex items-center gap-3 p-3">
                            <span className="text-base text-gray-800">
                              Real-Time Targeting
                            </span>
                          </div>
                        </div>

                        <div className="border-t border-gray-200">
                          <div className="flex items-center gap-3 p-3">
                            <span className="text-base text-gray-800">
                              Behaviour-Driven Campaigns
                            </span>
                          </div>
                        </div>

                        <div className="border-t border-gray-200">
                          <div className="flex items-center gap-3 p-3">
                            <span className="text-base text-gray-800">
                              Feature Adoption Insights
                            </span>
                          </div>
                        </div>

                        <div className="border-t border-gray-200">
                          <div className="flex items-center gap-3 p-3">
                            <span className="text-base text-gray-800">
                              Automated Growth Journeys
                            </span>
                          </div>
                        </div>
                        <div className="border-t border-gray-200">
                          <div className="flex items-center gap-3 p-3">
                            <span className="text-base text-gray-800">
                              Goals & Impact Measurement
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="py-2">
                        <h4 className="p-3 text-base font-medium">
                          Use Cases
                        </h4>

                        <div className="border-t border-gray-200">
                          <Link
                            href="/adoption"
                            className="flex items-center gap-3 p-3 hover:bg-gray-50"
                            onClick={handleOptionClick}
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <LuHeartHandshake className="text-green-500 text-xl" />
                            </div>
                            <span className="text-base text-gray-800 ml-2">
                              Adoption
                            </span>
                          </Link>
                        </div>

                        <div className="border-t border-gray-200">
                          <Link
                            href="/activation"
                            className="flex items-center gap-3 p-3 hover:bg-gray-50"
                            onClick={handleOptionClick}
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <AiTwotoneThunderbolt className="text-yellow-500 text-xl" />
                            </div>
                            <span className="text-base text-gray-800 ml-2">
                              Activation
                            </span>
                          </Link>
                        </div>

                        <div className="border-t border-gray-200">
                          <Link
                            href="/feedback"
                            className="flex items-center gap-3 p-3 hover:bg-gray-50"
                            onClick={handleOptionClick}
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <MdFeedback className="text-blue-500 text-xl" />
                            </div>
                            <span className="text-base text-gray-800 ml-2">
                              Feedback
                            </span>
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
                onClick={() => handleClick("resources")}
                className="text-[#000] hover:text-[#FD5F03] transition duration-150 font-normal flex items-center"
              >
                Resources
                <RiArrowDropDownLine
                  className={`ml-1 h-5 w-5 transition-transform duration-200 ${dropdownOpen.resources ? "rotate-180" : ""
                    }`}
                />
              </button>

              {dropdownOpen.resources && (
                <div className={`fixed top-16 ${scrolled ? "md:top-19" : "md:top-30"} left-0 right-0 w-full bg-white shadow-lg mt-1 py-4 z-20`}>
                  <div className="w-full max-w-6xl mx-auto px-4">
                    <h3 className="text-lg font-medium mb-2">OUR SDKs & Resources</h3>

                    <div className="grid grid-cols-3 border-t border-gray-200">
                      <div className="py-2 border-r border-gray-200">
                        <h4 className="p-3 text-base font-medium">Mobile</h4>

                        <div className="border-t border-gray-200">
                          <div
                            className="flex items-center gap-3 p-3 hover:bg-gray-50"
                          // onClick={handleOptionClick}
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <FaApple className="text-black text-xl" />
                            </div>
                            <span className="text-base text-gray-800 ml-2">
                              iOS
                            </span>
                          </div>
                        </div>

                        <div className="border-t border-gray-200">
                          <div
                            className="flex items-center gap-3 p-3 hover:bg-gray-50"
                          // onClick={handleOptionClick}
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <AiFillAndroid className="text-green-500 text-xl" />
                            </div>
                            <span className="text-base text-gray-800 ml-2">
                              Android
                            </span>
                          </div>
                        </div>

                        <div className="border-t border-gray-200">
                          <div
                            className="flex items-center gap-3 p-3 hover:bg-gray-50"
                          // onClick={handleOptionClick}
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <FaReact className="text-blue-400 text-xl" />
                            </div>
                            <span className="text-base text-gray-800 ml-2">
                              React Native
                            </span>
                          </div>
                        </div>

                        <div className="border-t border-gray-200">
                          <div
                            className="flex items-center gap-3 p-3 hover:bg-gray-50"
                          // onClick={handleOptionClick}
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <Image
                                src={flutter}
                                alt="Flutter"
                                width={20}
                                height={20}
                              />
                            </div>
                            <span className="text-base text-gray-800 ml-2">
                              Flutter
                            </span>
                          </div>
                        </div>

                        <div className="border-t border-gray-200">
                          <div
                            className="flex items-center gap-3 p-3 hover:bg-gray-50"
                          // onClick={handleOptionClick}
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <FaReact className="text-blue-400 text-xl" />
                            </div>
                            <span className="text-base text-gray-800 ml-2">
                              React.js
                            </span>
                          </div>
                        </div>

                        <div className="border-t border-gray-200">
                          <div
                            className="flex items-center gap-3 p-3 hover:bg-gray-50"
                          // onClick={handleOptionClick}
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <FaAngular className="text-red-600 text-xl" />
                            </div>
                            <span className="text-base text-gray-800 ml-2">
                              Angular
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="py-2 border-r border-gray-200">
                        <h4 className="p-3 text-base font-medium">Web</h4>

                        <div className="border-t border-gray-200">
                          <div
                            className="flex items-center gap-3 p-3 hover:bg-gray-50"
                          // onClick={handleOptionClick}
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <FaReact className="text-blue-400 text-xl" />
                            </div>
                            <span className="text-base text-gray-800 ml-2">
                              React.js
                            </span>
                          </div>
                        </div>

                        <div className="border-t border-gray-200">
                          <div
                            className="flex items-center gap-3 p-3 hover:bg-gray-50"
                          // onClick={handleOptionClick}
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <FaAngular className="text-red-600 text-xl" />
                            </div>
                            <span className="text-base text-gray-800 ml-2">
                              Angular
                            </span>
                          </div>
                        </div>

                        <div className="border-t border-gray-200">
                          <div
                            className="flex items-center gap-3 p-3 hover:bg-gray-50"
                          // onClick={handleOptionClick}
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <FaWordpressSimple className="text-gray-700 text-xl" />
                            </div>
                            <span className="text-base text-gray-800 ml-2">
                              Wordpress
                            </span>
                          </div>
                        </div>

                        <div className="border-t border-gray-200">
                          <div
                            className="flex items-center gap-3 p-3 hover:bg-gray-50"
                          // onClick={handleOptionClick}
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <FaShopify className="text-green-600 text-xl" />
                            </div>
                            <span className="text-base text-gray-800 ml-2">
                              Shopify
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="py-2">
                        <h4 className="p-3 text-base font-medium">Resources</h4>

                        <div className="border-t border-gray-200">
                          <Link
                            href="/blogs"
                            className="flex items-center gap-3 p-3 hover:bg-gray-50"
                            onClick={handleOptionClick}
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <FaBlog className="text-orange-500 text-xl" />
                            </div>
                            <span className="text-base text-gray-800 ml-2">
                              Blogs
                            </span>
                          </Link>
                        </div>

                        <div className="border-t border-gray-200">
                          <Link
                            href="/inspiration-gallery"
                            className="flex items-center gap-3 p-3 hover:bg-gray-50"
                            onClick={handleOptionClick}
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <TfiGallery className="text-pink-600 text-xl" />
                            </div>
                            <span className="text-base text-gray-800 ml-2">
                              Inspiration gallery
                            </span>
                          </Link>
                        </div>

                        <div className="border-t border-gray-200">
                          <Link
                            href="/AppStoryseBook.pdf"
                            className="flex items-center gap-3 p-3 hover:bg-gray-50"
                            onClick={handleOptionClick}
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <TbNotebook className="text-black-600 text-xl" />
                            </div>
                            <span className="text-base text-gray-800 ml-2">
                              eBook
                            </span>
                          </Link>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-gray-[#000]  hover:text-[#FD5F03] transition duration-150 font-normal"
              onClick={() => handleOptionClick()}
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-[#000] hover:text-[#FD5F03] transition duration-150 font-normal"
              onClick={() => handleOptionClick()}
            >
              Contact
            </Link>
          </nav>

          {/* Action Buttons - Desktop */}
          <div className="hidden xl:flex items-center space-x-4">
            <Link
              href="https://admin.appstorys.com/"
              className="px-4 py-2 text-[#000] font-medium transition duration-150 hover:text-[#e05303]"
              target="_blank"
              onClick={() => handleOptionClick()}
            >
              Login
            </Link>


            <InteractiveHoverButton
              className="bg-[#FD5F03] border-2 border-[#FD5F03] text-white h-[50px] font-medium"
            >
              <Link href={"/bookademo"}>
                Book a Demo
              </Link>
            </InteractiveHoverButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden flex items-center"
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
          <div className="xl:hidden bg-white border-t border-gray-200 px-4 py-3 shadow-lg max-h-[85vh] overflow-y-auto mobile-nav-container">
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
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick("feature");
                  }}
                  className="flex items-center justify-between w-full py-2 text-gray-800"
                >
                  <span>Features</span>
                  <RiArrowDropDownLine
                    className={`h-6 w-6 transition-transform duration-200 ${dropdownOpen.feature ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {dropdownOpen.feature && (
                  <div className="pl-4 mt-2 space-y-3">
                    <h5 className="font-medium text-gray-700 mt-2 mb-1">
                      RICH MEDIA CONTENT
                    </h5>
                    <div
                      className="flex items-center py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push('/stories');
                        setTimeout(() => {
                          handleOptionClick();
                        }, 100);
                      }}
                    >
                      <Image
                        src={story}
                        alt="Stories"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span>Stories</span>
                    </div>
                    <div
                      className="flex items-center py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push('/reels');
                        setTimeout(() => {
                          handleOptionClick();
                        }, 100);
                      }}
                    >
                      <Image
                        src={reel}
                        alt="Reels"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span>Reels</span>
                    </div>
                    <div
                      className="flex items-center py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push('/pipVideos');
                        setTimeout(() => {
                          handleOptionClick();
                        }, 100);
                      }}
                    >
                      <Image
                        src={pip}
                        alt="PIP Videos"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span>PIP Videos</span>
                    </div>
                    <div
                      className="flex items-center py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push('/bottomSheets');
                        setTimeout(() => {
                          handleOptionClick();
                        }, 100);
                      }}
                    >
                      <Image
                        src={bottom_sheet}
                        alt="Bottom Sheets"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span>Bottom Sheets</span>
                    </div>

                    <h5 className="font-medium text-gray-700 mt-3 mb-1">
                      INTERACTIVE ELEMENTS
                    </h5>
                    <div
                      className="flex items-center py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push('/banners');
                        setTimeout(() => {
                          handleOptionClick();
                        }, 100);
                      }}
                    >
                      <Image
                        src={banner}
                        alt="Banners"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span>Banners</span>
                    </div>
                    <div
                      className="flex items-center py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push('/floaters');
                        setTimeout(() => {
                          handleOptionClick();
                        }, 100);
                      }}
                    >
                      <Image
                        src={floater}
                        alt="Floaters"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span>Floaters</span>
                    </div>
                    <div
                      className="flex items-center py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push('/widgets');
                        setTimeout(() => {
                          handleOptionClick();
                        }, 100);
                      }}
                    >
                      <Image
                        src={widget}
                        alt="Widgets"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span>Widgets</span>
                    </div>
                    <div
                      className="flex items-center py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push('/scratchCards');
                        setTimeout(() => {
                          handleOptionClick();
                        }, 100);
                      }}
                    >
                      <Image
                        src={scratch}
                        alt="Scratch Cards"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span>Scratch Cards</span>
                    </div>

                    <h5 className="font-medium text-gray-700 mt-3 mb-1">
                      TAKE ACTION
                    </h5>
                    <div
                      className="flex items-center py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push('/quizzes');
                        setTimeout(() => {
                          handleOptionClick();
                        }, 100);
                      }}
                    >
                      <Image
                        src={quiz}
                        alt="Quizzes"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span>Quizzes</span>
                    </div>
                    <div
                      className="flex items-center py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push('/surveys');
                        setTimeout(() => {
                          handleOptionClick();
                        }, 100);
                      }}
                    >
                      <Image
                        src={survey}
                        alt="Surveys"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span>Surveys</span>
                    </div>
                    <div
                      className="flex items-center py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push('/csats');
                        setTimeout(() => {
                          handleOptionClick();
                        }, 100);
                      }}
                    >
                      <Image
                        src={csat}
                        alt="CSAT Feedback"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span>CSAT Feedback</span>
                    </div>

                    <h5 className="font-medium text-gray-700 mt-3 mb-1">
                      ONBOARDING
                    </h5>
                    <div
                      className="flex items-center py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push('/tooltips');
                        setTimeout(() => {
                          handleOptionClick();
                        }, 100);
                      }}
                    >
                      <Image
                        src={tooltip}
                        alt="Tooltips"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span>Tooltips</span>
                    </div>
                    <div
                      className="flex items-center py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push('/coachmarks');
                        setTimeout(() => {
                          handleOptionClick();
                        }, 100);
                      }}
                    >
                      <Image
                        src={coach}
                        alt="Coachmarks"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span>Coachmarks</span>
                    </div>
                    <div
                      className="flex items-center py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push('/spotlights');
                        setTimeout(() => {
                          handleOptionClick();
                        }, 100);
                      }}
                    >
                      <Image
                        src={spot}
                        alt="Spotlights"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span>Spotlights</span>
                    </div>
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
                    className={`h-6 w-6 transition-transform duration-200 ${dropdownOpen.advanceSolutions ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {dropdownOpen.advanceSolutions && (
                  <div className="pl-4 mt-2 space-y-3">
                    <h5 className="font-medium text-gray-700 mt-2 mb-1">
                      INTEGRATIONS
                    </h5>
                    <Link
                      href="#"
                      className="flex items-center py-2"
                      // onClick={handleOptionClick}
                    >
                      <Image
                        src={mparticle_icon}
                        alt="mParticle"
                        width={18}
                        height={18}
                        className="mr-3"
                      />
                      <span>mParticle</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center py-2"
                      // onClick={handleOptionClick}
                    >
                      <Image
                        src={clevertap_icon}
                        alt="CleverTap"
                        width={18}
                        height={18}
                        className="mr-3"
                      />
                      <span>CleverTap</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center py-2"
                      // onClick={handleOptionClick}
                    >
                      <Image
                        src={moengage_icon}
                        alt="MoEngage"
                        width={18}
                        height={18}
                        className="mr-3"
                      />
                      <span>MoEngage</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center py-2"
                      // onClick={handleOptionClick}
                    >
                      <Image
                        src={custom_audienec_icon}
                        alt="Custom Audiences"
                        width={18}
                        height={18}
                        className="mr-3"
                      />
                      <span>Custom Audiences</span>
                    </Link>

                    <h5 className="font-medium text-gray-700 mt-3 mb-1">
                      SEGMENTATION & COHORTS
                    </h5>
                    <Link
                      href="#"
                      className="flex items-center py-2"
                      // onClick={handleOptionClick}
                    >
                      <span>Real-Time Targeting</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center py-2"
                      // onClick={handleOptionClick}
                    >
                      <span>Behaviour-Driven Campaigns</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center py-2"
                      // onClick={handleOptionClick}
                    >
                      <span>Feature Adoption Insights</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center py-2"
                      // onClick={handleOptionClick}
                    >
                      <span>Automated Growth Journeys</span>
                    </Link>

                    <Link
                      href="#"
                      className="flex items-center py-2"
                      // onClick={handleOptionClick}
                    >
                      <span>GOALS & IMPACT MEASUREMENT</span>
                    </Link>

                    <h5 className="font-medium text-gray-700 mt-3 mb-1">
                      USE CASES
                    </h5>
                    <div
                      className="flex items-center py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push('/adoption');
                        setTimeout(() => {
                          handleOptionClick();
                        }, 100);
                      }}
                    >
                      <LuHeartHandshake className="text-green-500 text-xl w-5 h-5 mr-2" />
                      <span>Adoption</span>
                    </div>
                    <div
                      className="flex items-center py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push('/activation');
                        setTimeout(() => {
                          handleOptionClick();
                        }, 100);
                      }}
                    >
                      <AiTwotoneThunderbolt className="text-yellow-500 text-xl w-5 h-5 mr-2" />
                      <span>Activation</span>
                    </div>
                    <div
                      className="flex items-center py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push('/feedback');
                        setTimeout(() => {
                          handleOptionClick();
                        }, 100);
                      }}
                    >
                      <MdFeedback className="text-blue-500 text-xl w-5 h-5 mr-2" />
                      <span>Feedback</span>
                    </div>
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
                    className={`h-6 w-6 transition-transform duration-200 ${dropdownOpen.resources ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {dropdownOpen.resources && (
                  <div className="pl-4 mt-2 space-y-3">
                    <h5 className="font-medium text-gray-700 mt-2 mb-1">
                      MOBILE
                    </h5>
                    <Link
                      href="#"
                      className="flex items-center py-2"
                    // onClick={handleOptionClick}
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <FaApple className="text-black text-xl" />
                      </div>
                      <span className="ml-2">iOS</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center py-2"
                    // onClick={handleOptionClick}
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <AiFillAndroid className="text-green-500 text-xl" />
                      </div>
                      <span className="ml-2">Android</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center py-2"
                      onClick={handleOptionClick}
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <FaReact className="text-blue-400 text-xl" />
                      </div>
                      <span className="ml-2">React Native</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center py-2"
                    // onClick={handleOptionClick}
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <Image
                          src={flutter}
                          alt="Flutter"
                          width={20}
                          height={20}
                        />
                      </div>
                      <span className="ml-2">Flutter</span>
                    </Link>

                    <h5 className="font-medium text-gray-700 mt-3 mb-1">WEB</h5>
                    <Link
                      href="#"
                      className="flex items-center py-2"
                    // onClick={handleOptionClick}
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <FaReact className="text-blue-400 text-xl" />
                      </div>
                      <span className="ml-2">React.js</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center py-2"
                    // onClick={handleOptionClick}
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <FaAngular className="text-red-600 text-xl" />
                      </div>
                      <span className="ml-2">Angular</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center py-2"
                    // onClick={handleOptionClick}
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <FaWordpressSimple className="text-gray-700 text-xl" />
                      </div>
                      <span className="ml-2">Wordpress</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center py-2"
                    // onClick={handleOptionClick}
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <FaShopify className="text-green-600 text-xl" />
                      </div>
                      <span className="ml-2">Shopify</span>
                    </Link>

                    <h5 className="font-medium text-gray-700 mt-3 mb-1">
                      RESOURCES
                    </h5>

                    <div
                      className="flex items-center py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push('/blogs');
                        setTimeout(() => {
                          handleOptionClick();
                        }, 100);
                      }}
                    >
                      <FaBlog className="text-orange-500 text-xl w-5 h-5 mr-2" />
                      <span>Blogs</span>
                    </div>
                    <div
                      className="flex items-center py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push('/inspiration-gallery');
                        setTimeout(() => {
                          handleOptionClick();
                        }, 100);
                      }}
                    >
                      <TfiGallery className="text-pink-500 text-xl w-5 h-5 mr-2" />
                      <span>Inspiration Gallery</span>
                    </div>
                    <div
                      className="flex items-center py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push('/ebook');
                        setTimeout(() => {
                          handleOptionClick();
                        }, 100);
                      }}
                    >
                      <TbNotebook className="text-black-500 text-xl w-5 h-5 mr-2" />
                      <span>eBook</span>
                    </div>
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
                  href="/bookademo"
                  className="block w-full rounded-full bg-[#FD5F03] text-white font-medium text-center px-4 py-2.5"
                  onClick={() => {
                    handleOptionClick();
                    setRequestDemoClick(true);
                  }}
                >
                  Book a Demo
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

// "use client";

// import React, { useState } from 'react';
// import Image from "next/image";
// import { motion } from 'framer-motion';
// import WhyUsSection from "../components/WhyUsSection";
// import StepsSection from "../components/StepsSection";
// import aboutBanner from '../../assets/about_banner.jpg';
// import ourMission from '../../assets/our_mission.png';
// import officesImage from '../../assets/offices_image.png';
// import Testimonial_About from '../components/Testimonial_About';

// const CustomAccordion = ({ title, content, isOpen, onClick }) => {
//   return (
//     <div className="accordion border-b-[1px] border-[#638ED7] py-[28px] min-[1265px]:w-[477.02px] max-[1078px]:w-full">
//       <div
//         className="accordion-header text-[18px] font-medium font-InstrumentSans text-[#1F4D9C] bg-[#d7e5ff] flex items-center hover:cursor-pointer gap-x-[7px]"
//         onClick={onClick}
//       >
//         {/* Bullet Point Circle or Ring */}
//         <div style={{ transition: 'all 0.3s ease' }} className={`h-[8.71px] w-[8.71px] ${isOpen ? 'bg-[#E9A63A]' : ''} ${isOpen ? '' : 'border-[1px] border-[#E9A63A]'} rounded-full`}
//         ></div>
//         <h3 className="hover:cursor-pointer">{title}</h3>
//       </div>
//       <motion.div
//         initial={false}
//         animate={{ height: isOpen ? 'auto' : 0 }}
//         transition={{ duration: 0.3 }}
//         style={{
//           overflow: 'hidden',
//         }}
//       >
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isOpen ? 1 : 0 }}
//           transition={{ duration: 0.3 }}
//           style={{ margin: 0, padding: '10px 0' }}
//           className="text-[#495F86]"
//         >
//           {content}
//         </motion.p>
//       </motion.div>
//     </div>
//   );
// };

// export default function AboutUs() {
//   const [openAccordion, setOpenAccordion] = useState(0); // 0 is the default open accordion

//   const handleAccordionClick = (index) => {
//     setOpenAccordion(openAccordion === index ? -1 : index); // If the clicked accordion is open, close it; otherwise, open it
//   };

//   const accordionData = [
//     {
//       title: "Customer Satisfaction Above All",
//       content: "Deliver exceptional service and products tailored to meet client needs and exceed their expectations.",
//     },
//     {
//       title: "Innovation and Growth",
//       content: "Constantly evolve, embrace new ideas, and innovate to stay ahead in the market while fostering individual and team growth.",
//     },
//     {
//       title: "Accountability and Integrity",
//       content: "Own your work, maintain transparency, and uphold the highest standards of ethics in everything we do.",
//     },
//     {
//       title: "Collaboration and Teamwork",
//       content: "Value diverse perspectives, promote open communication, and support each other to achieve collective success.",
//     },
//   ];

//   return (
//     <main className="flex flex-col justify-center items-center w-full bg-[#ffffff] gap-y-[60px]">
//       {/* Hero Section */}
//       <section className="flex justify-center items-center bg-[#fff] w-full max-[1078px]:flex-col">
//         <div className='w-[44%] flex flex-col justify-center items-center min-[1078px]:h-[80vh] bg-white max-[1078px]:w-full'>
//           <div className='h-[80%] flex flex-col justify-end items-start min-[1350px]:pl-[72px] min-[1350px]:pr-[130px] gap-y-[42px] pb-[69px] w-full bg-[#ebf2ff] max-[1350px]:justify-center max-[1350px]:items-center max-[1350px]:px-[20px] max-[1350px]:py-[20px] max-[1078px]:py-[40px] max-[1078px]:w-full max-[1078px]:gap-y-[20px]'>
//             <h1 className='leading-[91%] text-[60px] font-semibold font-InstrumentSans max-[573px]:text-[40px]'>We As An Organization</h1>
//             <p className='text-[16px] font-InstrumentSans leading-[135%]'>AppStorys, a part of the AppVersal group of companies, helps App developers integrate user experiences in their App without developer effort. Our state of the art systems are built to scale and capable of delivering interactive user experiences to million of users at scale</p>
//           </div>
//         </div>
//         <div className="w-[56%] max-[1078px]:w-full">
//           <Image
//             src={aboutBanner}
//             alt="AppStorys about_banner"
//             width={800}
//             height={634}
//             style={{ 
//               objectFit: "cover", 
//               height: "634px", 
//               width: "100%",
//               maxWidth: "100%",
//               display: "block" 
//             }}
//             className="max-[1280px]:h-[550px] max-[1157px]:h-[450px] max-[1078px]:h-auto"
//             priority
//           />
//         </div>
//       </section>

//       {/* Our Mission */}
//       <section className='flex justify-start items-start w-full min-h-[60vh]'>
//         <div className='flex justify-start items-start h-full w-full bg-[#ffffff] max-[1280px]:flex-col min-[1280px]:pl-[77px]'>
//           <div className='w-[40%] max-[1280px]:w-full flex flex-col justify-start items-start gap-y-[14px] min-[1280px]:pt-[70px] max-[1280px]:py-[25px]'>
//             <h1 className='text-[0.8px] font-bold font-InstrumentSans text-[#fd5f03] leading-[119%] tracking-[2px] max-[1280px]:px-[25px]'>OUR MISSION</h1>
//             <h1 className='text-[42px] leading-[111%] tracking-[0px] font-InstrumentSans font-semibold max-[1280px]:px-[25px] max-[487px]:text-[40px]'>Where We See Ourselves <br />In 2 Years</h1>
//             <div className='bg-[#f6c26e] pt-[40px] pl-[32px] pb-[45px] pr-[59px] mt-[66px] max-[825px]:mt-[40px]'>
//               <p className='text-[#755A2D] text-[14px] font-InstrumentSans leading-[150%]'>In two years, AppStorys aims to be a leader in app engagement and retention, powering thousands of apps worldwide. We envision expanding our SDK to include AI-driven personalization and advanced analytics, partnering with top-tier developers to enhance user interaction and growth. With a stronger global presence and cutting-edge technology, we plan to double our client base and become the go-to platform for improving app experiences.</p>
//             </div>
//           </div>
//           <div className='h-full flex justify-center items-center max-[1280px]:w-full'>
//             <Image
//               src={ourMission}
//               alt="AppStorys our_mission"
//               width={600}
//               height={470}
//               className='h-[470.78px] w-auto max-[805px]:w-full max-[805px]:h-auto'
//               style={{ objectFit: "contain" }}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Our Values */}
//       <section className='bg-[#d7e5ff] min-h-[577px] w-full flex justify-center items-center py-[90px] max-[1078px]:py-[50px] max-[1078px]:flex-col max-[1078px]:gap-y-[30px]'>
//         <div className='w-[55%] max-[1078px]:w-full flex flex-col justify-start items-start gap-y-[9px] min-[1356px]:pl-[155px] px-[60px] max-[435px]:px-[25px]'>
//           <h1 className='text-[0.8rem] font-bold font-InstrumentSans text-[#fd5f03] leading-[119%] tracking-[2px]'>OUR VALUES</h1>
//           <h1 className='text-[45px] leading-[102%] font-InstrumentSans font-semibold min-[1078px]:w-[539px] max-[476px]:text-[40px]'>Guided By Our Core Values: Our Commitment To Excellence</h1>
//           <p className='text-[16px] leading-[150%] text-[#545454] font-InstrumentSans mt-[31px] min-[1078px]:w-[433.44px]'>At AppStorys, our core values drive our commitment to excellence, prioritizing customer satisfaction, fostering innovation, and empowering our team to thrive.</p>
//         </div>
//         <div className='w-[45%] max-[1078px]:w-full flex justify-center items-center'>
//           <div className='w-[80%] max-[425px]:w-[90%] flex justify-start items-start h-full flex-col'>
//             {accordionData.map((item, index) => (
//               <CustomAccordion
//                 key={index}
//                 title={item.title}
//                 content={item.content}
//                 isOpen={openAccordion === index}
//                 onClick={() => handleAccordionClick(index)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Us */}
//       <WhyUsSection />

//       {/* Our Offices */}
//       <section className='flex justify-between items-start w-full bg-[#1f4d9c] min-h-[60vh] relative overflow-hidden max-[1220px]:flex-col max-[1220px]:h-auto max-[1220px]:gap-y-[20px]'>
//         <div className='w-[30%] max-[1381px]:w-[50%] flex flex-col min-[1220px]:pl-[117px] max-[1381px]:pl-[50px] justify-start items-start h-full pt-[75.64px] gap-y-[30.36px] z-[1000] max-[1220px]:w-full max-[1220px]:px-[25px]'>
//           <h1 className='text-[54px] font-semibold font-InstrumentSans text-[#fff] leading-[127%] -tracking-[0.5px]'>Our Offices</h1>
//           <p className='text-white text-[16px] leading-[130%]'>We are a global leader in app engagement and retention, with diverse teams delivering innovative solutions worldwide. Our expertise in SDK integration empowers app developers to unlock growth and enhance user experiences.</p>
//         </div>
//         <Image
//           src={officesImage}
//           alt="AppStorys offices_image"
//           width={800}
//           height={642}
//           className='h-[642px] w-auto max-[1381px]:w-[60%] max-[1381px]:h-auto max-[1220px]:w-full max-[122]'
//           style={{ 
//             objectFit: "contain", 
//             backgroundColor: "#1f4d9c"
//           }}
//         />
//         <div className='w-[100%] bg-[#AEC6EE] right-0 bottom-0 absolute z-[20] h-[21px]'></div>
//       </section>

//       {/* Steps Section */}
//       <StepsSection />

//       {/* Testimonials */}
//       <Testimonial_About />

//       {/* One More Thing */}
//       <section className='flex w-full flex-col justify-center items-center gap-y-[20px] px-[307px] py-[64.5px] bg-[#d7e5ff] max-[1208px]:px-[150px] max-[960px]:px-[100px] max-[960px]:gap-y-[20px] max-[651px]:px-[50px] max-[454px]:px-[25px] max-[454px]:py-[25px]'>
//         <h1 className='text-[44px] font-semibold leading-[120%] font-InstrumentSans -tracking-[0.5px] max-[464px]:text-[40px]'>One More Thing...</h1>
//         <p className='text-center text-[18px] font-InstrumentSans leading-[150%]'>We're on our way to world domination. We build enterprise level software which leading brands from across the world use and trust. From indie developers to enterprise level brands, our platform is built to scale. We're confident that we've got the right architecture not just in silicon, but in the organization as well to build these kinds of products</p>
//       </section>
//     </main>
//   );
// }

// app/about/AboutUs.jsx
"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import WhyUsSection from "../components/WhyUsSection";
import StepsSection from "../components/StepsSection";
import aboutBanner from '../../assets/about_banner.jpg';
import ourMission from '../../assets/our_mission.png';
import officesImage from '../../assets/offices_image1.png';
import Testimonial_About from '../components/Testimonial_About';
import Whyus from '../components/Whyus/Whyus';

const CustomAccordion = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordion border-b-[1px] border-[#638ED7] py-[28px] min-[1265px]:w-[477.02px] max-[1078px]:w-full">
      <div
        className="accordion-header text-[18px] font-medium font-InstrumentSans text-[#000] bg-[#FFF7F3] flex items-center hover:cursor-pointer gap-x-[7px]"
        onClick={onClick}
        aria-expanded={isOpen}
        role="button"
        aria-label={`${title} accordion section`}
      >
        {/* Bullet Point Circle or Ring */}
        <div style={{ transition: 'all 0.3s ease' }} className={`h-[8.71px] w-[8.71px] ${isOpen ? 'bg-[#E9A63A]' : ''} ${isOpen ? '' : 'border-[1px] border-[#E9A63A]'} rounded-full`}
        ></div>
        <h3 className="hover:cursor-pointer text-[#fd5f03]">{title}</h3>
      </div>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          overflow: 'hidden',
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ margin: 0, padding: '10px 0' }}
          className="text-[#000]"
        >
          {content}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default function AboutUs() {
  const [openAccordion, setOpenAccordion] = useState(0); // 0 is the default open accordion

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index); // If the clicked accordion is open, close it; otherwise, open it
  };

  const accordionData = [
    {
      title: "Customer Satisfaction Above All",
      content: "Deliver exceptional service and products tailored to meet client needs and exceed their expectations.",
    },
    {
      title: "Innovation and Growth",
      content: "Constantly evolve, embrace new ideas, and innovate to stay ahead in the market while fostering individual and team growth.",
    },
    {
      title: "Accountability and Integrity",
      content: "Own your work, maintain transparency, and uphold the highest standards of ethics in everything we do.",
    },
    {
      title: "Collaboration and Teamwork",
      content: "Value diverse perspectives, promote open communication, and support each other to achieve collective success.",
    },
  ];

  return (
    <main className="flex flex-col justify-center items-center w-full bg-[#ffffff]">
      {/* Hero Section */}
      <section className="flex justify-center items-center bg-[#fff] w-full max-[1078px]:flex-col">
        <div className='w-[44%] flex flex-col justify-center items-center min-[1078px]:h-[80vh] bg-white max-[1078px]:w-full'>
          <div className='h-[80%] flex flex-col justify-end items-start min-[1350px]:pl-[72px] min-[1350px]:pr-[130px] gap-y-[42px] pb-[69px] w-full bg-[#FFF7F3] max-[1350px]:justify-center max-[1350px]:items-center max-[1350px]:px-[20px] max-[1350px]:py-[20px] max-[1078px]:py-[40px] max-[1078px]:w-full max-[1078px]:gap-y-[20px]'>
            <h1 className='leading-[91%] text-[60px] font-semibold font-InstrumentSans max-[573px]:text-[40px]'>We As An Organization</h1>
            <p className='text-[16px] font-InstrumentSans leading-[135%]'>AppStorys, a part of the AppVersal group of companies, helps App developers integrate user experiences in their App without developer effort. Our state of the art systems are built to scale and capable of delivering interactive user experiences to million of users at scale</p>
          </div>
        </div>
        <div className="w-[56%] max-[1078px]:w-full">
          <Image
            src={aboutBanner}
            alt="AppStorys team collaborating on innovative app development solutions"
            width={800}
            height={634}
            style={{
              objectFit: "cover",
              height: "634px",
              width: "100%",
              maxWidth: "100%",
              display: "block"
            }}
            className="max-[1280px]:h-[550px] max-[1157px]:h-[450px] max-[1078px]:h-auto"
            priority
          />
        </div>
      </section>

      {/* Our Mission */}
      <section className='flex justify-start items-start w-full min-h-[60vh] mt-10' aria-labelledby="mission-heading">
        <div className='flex justify-start items-start h-full w-full bg-[#ffffff] max-[1280px]:flex-col min-[1280px]:pl-[77px]'>
          <div className='w-[40%] max-[1280px]:w-full flex flex-col justify-start items-start gap-y-[14px] min-[1280px]:pt-[70px] max-[1280px]:py-[25px]'>
            <h2 id="mission-heading" className='text-[0.8px] font-bold font-InstrumentSans text-[#fd5f03] leading-[119%] tracking-[2px] max-[1280px]:px-[25px]'>OUR MISSION</h2>
            <h3 className='text-[42px] leading-[111%] tracking-[0px] font-InstrumentSans font-semibold max-[1280px]:px-[25px] max-[487px]:text-[40px]'>Where We See Ourselves <br />In 2 Years</h3>
            <article className='bg-[#fd5d03] pt-[40px] pl-[32px] pb-[45px] pr-[59px] mt-[66px] max-[825px]:mt-[40px]'>
              <p className='text-[#fff] text-[14px] font-medium leading-[150%]'>In two years, AppStorys aims to be a leader in app engagement and retention, powering thousands of apps worldwide. We envision expanding our SDK to include AI-driven personalization and advanced analytics, partnering with top-tier developers to enhance user interaction and growth. With a stronger global presence and cutting-edge technology, we plan to double our client base and become the go-to platform for improving app experiences.</p>
            </article>
          </div>
          <div className='h-full flex justify-center items-center max-[1280px]:w-full'>
            <Image
              src={ourMission}
              alt="AppStorys mission and future vision illustration with growth trajectory"
              width={600}
              height={470}
              className='h-[470.78px] w-auto max-[805px]:w-full max-[805px]:h-auto'
              style={{ objectFit: "contain" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className='bg-[#FFF7F3] min-h-[577px] w-full flex justify-center items-center py-[90px] max-[1078px]:py-[50px] max-[1078px]:flex-col max-[1078px]:gap-y-[30px]' aria-labelledby="values-heading">
        <div className='w-[55%] max-[1078px]:w-full flex flex-col justify-start items-start gap-y-[9px] min-[1356px]:pl-[155px] px-[60px] max-[435px]:px-[25px]'>
          <h2 id="values-heading" className='text-[0.8rem] font-bold font-InstrumentSans text-[#fd5f03] leading-[119%] tracking-[2px]'>OUR VALUES</h2>
          <h3 className='text-[45px] leading-[102%] font-InstrumentSans font-semibold min-[1078px]:w-[539px] max-[476px]:text-[40px]'>Guided By Our Core Values: Our Commitment To Excellence</h3>
          <p className='text-[16px] leading-[150%] text-[#545454] font-InstrumentSans mt-[31px] min-[1078px]:w-[433.44px]'>At AppStorys, our core values drive our commitment to excellence, prioritizing customer satisfaction, fostering innovation, and empowering our team to thrive.</p>
        </div>
        <div className='w-[45%] max-[1078px]:w-full flex justify-center items-center'>
          <div className='w-[80%] max-[425px]:w-[90%] flex justify-start items-start h-full flex-col'>
            {accordionData.map((item, index) => (
              <CustomAccordion
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openAccordion === index}
                onClick={() => handleAccordionClick(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <Whyus />
      {/* <WhyUsSection /> */}

      {/* Our Offices */}
      <section className='flex justify-between items-start w-full bg-[#fff] min-h-[60vh] relative overflow-hidden max-[1220px]:flex-col max-[1220px]:h-auto max-[1220px]:gap-y-[20px]' aria-labelledby="offices-heading">
        <div className='w-[30%] max-[1381px]:w-[50%] flex flex-col min-[1220px]:pl-[117px] max-[1381px]:pl-[50px] justify-start items-start h-full pt-[75.64px] gap-y-[30.36px] z-[1000] max-[1220px]:w-full max-[1220px]:px-[25px]'>
          <h2 id="offices-heading" className='text-[54px] font-semibold font-InstrumentSans text-[#000] leading-[127%] -tracking-[0.5px]'>Our Global Offices</h2>
          <p className='text-black text-[16px] leading-[130%]'>We are a global leader in app engagement and retention, with diverse teams delivering innovative solutions worldwide. Our expertise in SDK integration empowers app developers to unlock growth and enhance user experiences.</p>
        </div>
        <Image
          src={officesImage}
          alt="AppStorys global offices and worldwide presence map"
          width={800}
          height={515}
          className='h-[515px] w-auto max-[1381px]:w-[60%] max-[1381px]:h-auto max-[1220px]:w-full max-[122]'
          style={{
            objectFit: "contain",
            backgroundColor: "#fff"
          }}
          loading="lazy"
        />
        {/* <div className='w-[100%] bg-[#AEC6EE] right-0 bottom-0 absolute z-[20] h-[21px]'></div> */}
      </section>

      {/* Steps Section */}
      <StepsSection />

      {/* Testimonials */}
      <Testimonial_About />

      {/* One More Thing */}
      <section className='flex w-full flex-col justify-center items-center gap-y-[20px] px-[307px] py-[64.5px] bg-[#FFdf] max-[1208px]:px-[150px] max-[960px]:px-[100px] max-[960px]:gap-y-[20px] max-[651px]:px-[50px] max-[454px]:px-[25px] max-[454px]:py-[25px]' aria-labelledby="closing-heading">
        <h2 id="closing-heading" className='text-[44px] font-semibold leading-[120%] font-InstrumentSans -tracking-[0.5px] max-[464px]:text-[40px]'>One More Thing...</h2>
        <p className='text-center text-[18px] font-InstrumentSans leading-[150%]'>We're on our way to world domination. We build enterprise level software which leading brands from across the world use and trust. From indie developers to enterprise level brands, our platform is built to scale. We're confident that we've got the right architecture not just in silicon, but in the organization as well to build these kinds of products</p>
      </section>
    </main>
  );
}
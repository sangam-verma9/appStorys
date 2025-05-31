// "use client";

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const SimilarBlogCard = ({ index, image, heading, para, date, time, link }) => {
//   const scrollToTop = () => {
//     document.body.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     });
//   };

//   return (
//     <Link 
//       href={link} 
//       onClick={scrollToTop} 
//       className='flex flex-col justify-between items-center h-[371.54px] w-[360.98px] p-[15.12px] border-b-[3px] border-[#D64830] bg-[#f6f6f6] hover:cursor-pointer'
//     >
//       <div className="relative w-auto h-[154.77px]">
//         <Image
//           src={image}
//           alt={'AppStorys image'}
//           width={330}
//           height={154.77}
//           style={{ objectFit: "contain", height: "100%", width: "auto" }}
//         />
//       </div>
//       <div className='flex flex-col justify-start items-start w-full gap-y-[16.19px]'>
//         <h1 className='text-[16px] font-InstrumentSans leading-[150%]'>{heading}</h1>
//         <p className='text-[#545454] text-[14px] leading-[150%] font-InstrumentSans'>{para}</p>
//       </div>
//       <p className="uppercase text-[#A8A8A8] font-semibold font-InstrumentSans text-[10px] w-full flex justify-start items-center leading-[150%] tracking-[2px] gap-x-[6px]">
//         <div className="h-[2.98px] w-[2.98px] bg-[#E9A63A] rounded-full"></div>{date}<div className="h-[2.98px] w-[2.98px] bg-[#E9A63A] rounded-full"></div> {time} mins. read
//       </p>
//     </Link>
//   );
// };

// export default SimilarBlogCard;

import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function SimilarBlogCard({ index, link, image, heading, para, date, time }) {
  return (
    <div className="max-w-sm min-h-[450px] bg-white border border-gray-200 rounded-lg shadow">
      <Link href={link}>
        <Image
          src={image}
          alt={heading}
          className="rounded-t-lg w-full h-48 object-cover"
          width={400}
          height={200}
        />
      </Link>
      <div className="p-5">
        <div className='min-h-[200px]'>
          <Link href={link}>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 hover:text-blue-600">
              {heading}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700">
            {para}
          </p>
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{time} min read</span>
          </div>
        </div>
        <Link
          href={link}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
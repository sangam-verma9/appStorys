// "use client";

// import React from 'react';

// const FeatureTicker = ({ number1, number2, number3, heading1, heading2, heading3 }) => {
//   return (
//     <section className="min-[1279px]:h-[119px] max-[1279px]:gap-y-[10px] bg-[#000000] flex justify-between items-center w-full px-[48px] max-[1279px]:flex-col max-[1279px]:items-start max-[474px]:px-[30px] max-[425px]:px-[10px]">
//       <div className="flex justify-between items-center gap-x-[26px] max-[630px]:w-full max-[571px]:justify-start">
//         <h1 className="text-[58px] font-bold text-white font-[var(--font-geist-sans)] max-[505px]:text-[50px] max-[492px]:text-[35px]">{number1}</h1>
//         <p className="font-semibold text-[20px] text-white font-[var(--font-geist-sans)] capitalize leading-[108%]">{heading1}</p>
//       </div>
//       <div className="flex justify-between items-center gap-x-[26px] max-[630px]:w-full max-[571px]:justify-start">
//         <h1 className="text-[58px] font-bold text-white font-[var(--font-geist-sans)] max-[505px]:text-[50px] max-[492px]:text-[35px]">{number2}</h1>
//         <p className="font-semibold text-[20px] text-white font-[var(--font-geist-sans)] capitalize leading-[108%]">{heading2}</p>
//       </div>
//       <div className="flex justify-between items-center gap-x-[26px] max-[630px]:w-full max-[571px]:justify-start">
//         <h1 className="text-[58px] font-bold text-white font-[var(--font-geist-sans)] max-[505px]:text-[50px] max-[492px]:text-[35px]">{number3}</h1>
//         <p className="font-semibold text-[20px] text-white font-[var(--font-geist-sans)] capitalize leading-[108%]">{heading3}</p>
//       </div>
//     </section>
//   );
// };

// export default FeatureTicker;

"use client";

import React from 'react';

const FeatureTicker = ({ number1, number2, number3, heading1, heading2, heading3 }) => {
  return (
    <section className="bg-black w-full px-6 py-8 md:py-6 lg:px-12 xl:px-12 xl:h-30">
      <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:justify-between md:items-center max-w-7xl mx-auto">
        {/* First Feature */}
        <div className="flex items-center gap-4 w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-sans">
            {number1}
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-white font-sans capitalize leading-tight">
            {heading1}
          </p>
        </div>

        {/* Second Feature */}
        <div className="flex items-center gap-4 w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-sans">
            {number2}
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-white font-sans capitalize leading-tight">
            {heading2}
          </p>
        </div>

        {/* Third Feature */}
        <div className="flex items-center gap-4 w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-sans">
            {number3}
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-white font-sans capitalize leading-tight">
            {heading3}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureTicker;
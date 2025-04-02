import React from 'react';
import Image from 'next/image';
import { Inter, Satisfy } from 'next/font/google';

import t1 from '@/assets/t1.png';
import t2 from '@/assets/t2.png';
import t3 from '@/assets/t3.png';
import t4 from '@/assets/t4.png';

const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'] });

const TrustSection = () => {

  const boxImages = [
    t1,  
    t2,
    t3,
    t4
  ];

  return (
    <div className="py-16 px-4 flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto">
      {/* Right Side - Text (now appears first on mobile) */}
      <div className="md:max-w-[450px] text-center md:text-left order-first md:order-last mb-8 md:mb-0">
        <h3 className={`${satisfy.className} text-[#FD5F03] text-2xl mb-2`}>
          How It Works
        </h3>
        <h2 className="text-4xl md:text-5xl font-medium leading-tight">
          AppStorys is <br></br>
           trusted by developers globally
        </h2>
      </div>

      {/* Left Side - Direct Box Images */}
      <div className="flex flex-wrap justify-center gap-1 md:gap-0 order-last md:order-first">
        {boxImages.map((image, index) => (
          <Image 
            key={index}
            src={image} 
            alt={`Certification ${index + 1}`}
            className="w-[150px] h-[150px] md:w-[150px] md:h-[150px] object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default TrustSection;


// import React from 'react';
// import Image from 'next/image';
// import { Inter, Satisfy } from 'next/font/google';

// import t1 from '@/assets/t1.png';
// import t2 from '@/assets/t2.png';
// import t3 from '@/assets/t3.png';
// import t4 from '@/assets/t4.png';

// const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
// const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'] });

// const TrustSection = () => {

//   const boxImages = [
//     t1,  
//     t2,
//     t3,
//     t4
//   ];

//   return (
//     <div className="py-16 px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
//       {/* Right Side - Text (now appears first on mobile) */}
//       <div className="md:max-w-[480px] text-center md:text-left order-first md:order-last mb-8 md:mb-0">
//         <h3 className={`${satisfy.className} text-[#FD5F03] text-2xl mb-2`}>
//           How It Works
//         </h3>
//         <h2 
//           className="text-black text-[40px] md:text-[50.287px] font-medium capitalize"
//           style={{
//             fontFamily: '"SF Pro Display", sans-serif',
//             fontWeight: 500,
//             lineHeight: '102%',
//           }}
//         >
//           AppStorys is trusted by developers globally
//         </h2>
//       </div>

//       {/* Left Side - Direct Box Images */}
//       <div className="flex flex-wrap justify-center gap-1 md:gap-0 order-last md:order-first">
//         {boxImages.map((image, index) => (
//           <Image 
//             key={index}
//             src={image} 
//             alt={`Certification ${index + 1}`}
//             className="w-[150px] h-[150px] md:w-[150px] md:h-[150px] object-contain"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrustSection;
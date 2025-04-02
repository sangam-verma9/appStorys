// import React, { useState, useRef } from 'react';
// import { Inter, Satisfy } from 'next/font/google';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// import Image from 'next/image';
// import star from '@/assets/star.png';

// const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
// const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'] });

// const TestimonialsSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carouselRef = useRef(null);

//   const testimonials = [
//     {
//       id: 1,
//       text: '"AppStorys has completely transformed how we engage with our users. The widgets and floater allow us to place key actions strategically, ensuring higher interaction rates. Our engagement levels have soared, and users find our app more intuitive !"',
//       author: 'PRIYA S.',
//       position: 'Product Manager At A Fintech App'
//     },
//     {
//       id: 2,
//       text: '"The impact AppStorys has had on our user experience is remarkable."',
//       author: 'MICHAEL T.',
//       position: 'CTO at Health Tech Startup'
//     },
//     {
//       id: 3,
//       text: '"What impressed us most about AppStorys is how seamlessly it integrated with our existing systems. The analytics provided give us actionable insights that have helped us refine our user journey continuously."',
//       author: 'SARAH L.',
//       position: 'VP of Product at E-commerce Platform'
//     }
//   ];

//   const nextSlide = () => {
//     if (currentIndex < testimonials.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <section className="bg-black py-16 px-4 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h3 className={`${satisfy.className} text-2xl text-white mb-2`}>
//             Testimonials
//           </h3>
//           <h2 
//             className="text-white text-[40px] md:text-[48px] font-medium"
//             style={{
//               fontFamily: '"SF Pro Display", sans-serif',
//               fontWeight: 500,
//               lineHeight: '102%',
//             }}
//           >
//             What Our Clients Have To Say
//           </h2>
//         </div>

//         {/* Fixed width container for stacked cards */}
//         <div className="relative max-w-[720px] mx-auto h-[400px]">
//           {/* Previous Card (Left) */}
//           {currentIndex > 0 && (
//             <div 
//               className="absolute top-0 left-0 w-[85%] h-[340px] rounded-[13px] border border-white/24 z-10"
//               style={{
//                 background: 'radial-gradient(90.08% 90.08% at 97.01% 0%, #844D0A 0%, #151517 100%)',
//                 transform: 'translateX(-65%) scale(0.95)',
//                 opacity: 0.5
//               }}
//             />
//           )}
          
//           {/* Next Card (Right) */}
//           {currentIndex < testimonials.length - 1 && (
//             <div 
//               className="absolute top-0 right-0 w-[85%] h-[340px] rounded-[13px] border border-white/24 z-10"
//               style={{
//                 background: 'radial-gradient(90.08% 90.08% at 3% 0%, #844D0A 0%, #151517 100%)',
//                 transform: 'translateX(65%) scale(0.95)',
//                 opacity: 0.5
//               }}
//             />
//           )}
          
//           {/* Current Card (Center) */}
//           <div 
//             className="absolute top-0 left-1/2 w-[85%] h-[340px] rounded-[13px] border border-white/24 z-20 p-8 md:p-12 flex flex-col justify-between"
//             style={{
//               background: 'radial-gradient(90.08% 90.08% at 97.01% 0%, #844D0A 0%, #151517 100%)',
//               transform: 'translateX(-50%)',
//               backdropFilter: 'blur(6.6px)'
//             }}
//           >
//             {/* Stars in top right */}
//             <div className="absolute top-8 md:top-12 right-8 md:right-12">
//               <Image 
//                 src={star}
//                 alt="5 Star Rating" 
//                 width={120} 
//                 height={24}
//                 className="h-6"
//               />
//             </div>
            
//             {/* Testimonial Text */}
//             <p className="text-white text-[20px] font-normal md:text-xl mb-8 pt-8">
//               {testimonials[currentIndex].text}
//             </p>
            
//             {/* Author Info */}
//             <div>
//               <p className="text-[#FFF] text-[16px] md:text-base font-normal">
//                 {testimonials[currentIndex].author}
//               </p>
//               <p className="text-[#FFF] text-xs md:text-[16px] font-bold">
//                 {testimonials[currentIndex].position}
//               </p>
//             </div>
//           </div>

//           {/* Navigation Controls */}
//           <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-2">
//             <button 
//               onClick={prevSlide} 
//               className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/30 text-white ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'}`}
//               disabled={currentIndex === 0}
//               style={{
//                 background: currentIndex > 0 ? 'linear-gradient(90deg, rgba(132, 77, 10, 0.4) 0%, rgba(21, 21, 23, 0.2) 100%)' : 'transparent'
//               }}
//             >
//               <IoIosArrowBack size={20} />
//             </button>
//             <button 
//               onClick={nextSlide} 
//               className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/30 text-white ${currentIndex === testimonials.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'}`}
//               disabled={currentIndex === testimonials.length - 1}
//               style={{
//                 background: currentIndex < testimonials.length - 1 ? 'linear-gradient(90deg, rgba(21, 21, 23, 0.2) 0%, rgba(132, 77, 10, 0.4) 100%)' : 'transparent'
//               }}
//             >
//               <IoIosArrowForward size={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;

// import React, { useState, useRef } from 'react';
// import { Inter, Satisfy } from 'next/font/google';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// import Image from 'next/image';
// import star from '@/assets/star.png';

// const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
// const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'] });

// const TestimonialsSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carouselRef = useRef(null);

//   const testimonials = [
//     {
//       id: 1,
//       text: '"AppStorys has completely transformed how we engage with our users. The widgets and floater allow us to place key actions strategically, ensuring higher interaction rates. Our engagement levels have soared, and users find our app more intuitive !"',
//       author: 'PRIYA S.',
//       position: 'Product Manager At A Fintech App'
//     },
//     {
//       id: 2,
//       text: '"The impact AppStorys has had on our user experience is remarkable."',
//       author: 'MICHAEL T.',
//       position: 'CTO at Health Tech Startup'
//     },
//     {
//       id: 3,
//       text: '"What impressed us most about AppStorys is how seamlessly it integrated with our existing systems. The analytics provided give us actionable insights that have helped us refine our user journey continuously."',
//       author: 'SARAH L.',
//       position: 'VP of Product at E-commerce Platform'
//     }
//   ];

//   const nextSlide = () => {
//     if (currentIndex < testimonials.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <section className="bg-black py-8 sm:py-12 md:py-16 px-4 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-8 md:mb-16">
//           <h3 className={`${satisfy.className} text-xl sm:text-2xl text-white mb-2`}>
//             Testimonials
//           </h3>
//           <h2 
//             className="text-white text-3xl sm:text-4xl md:text-[48px] font-medium px-4"
//             style={{
//               fontFamily: '"SF Pro Display", sans-serif',
//               fontWeight: 500,
//               lineHeight: '102%',
//             }}
//           >
//             What Our Clients Have To Say
//           </h2>
//         </div>

//         {/* Responsive container for stacked cards */}
//         <div className="relative mx-auto h-[280px] sm:h-[320px] md:h-[400px] w-full max-w-[320px] sm:max-w-[500px] md:max-w-[720px]">
//           {/* Previous Card (Left) - Hidden on smallest screens */}
//           {currentIndex > 0 && (
//             <div 
//               className="hidden sm:block absolute top-0 left-0 w-[85%] h-[240px] sm:h-[280px] md:h-[340px] rounded-[13px] border border-white/24 z-10"
//               style={{
//                 background: 'radial-gradient(90.08% 90.08% at 97.01% 0%, #844D0A 0%, #151517 100%)',
//                 transform: 'translateX(-65%) scale(0.95)',
//                 opacity: 0.5
//               }}
//             />
//           )}
          
//           {/* Next Card (Right) - Hidden on smallest screens */}
//           {currentIndex < testimonials.length - 1 && (
//             <div 
//               className="hidden sm:block absolute top-0 right-0 w-[85%] h-[240px] sm:h-[280px] md:h-[340px] rounded-[13px] border border-white/24 z-10"
//               style={{
//                 background: 'radial-gradient(90.08% 90.08% at 3% 0%, #844D0A 0%, #151517 100%)',
//                 transform: 'translateX(65%) scale(0.95)',
//                 opacity: 0.5
//               }}
//             />
//           )}
          
//           {/* Current Card (Center) */}
//           <div 
//             className="absolute top-0 left-1/2 w-full sm:w-[85%] h-[240px] sm:h-[280px] md:h-[340px] rounded-[13px] border border-white/24 z-20 p-4 sm:p-8 md:p-12 flex flex-col justify-between"
//             style={{
//               background: 'radial-gradient(90.08% 90.08% at 97.01% 0%, #844D0A 0%, #151517 100%)',
//               transform: 'translateX(-50%)',
//               backdropFilter: 'blur(6.6px)'
//             }}
//           >
//             {/* Stars in top right */}
//             <div className="absolute top-4 sm:top-8 md:top-12 right-4 sm:right-8 md:right-12">
//               <Image 
//                 src={star}
//                 alt="5 Star Rating" 
//                 width={120} 
//                 height={24}
//                 className="h-4 sm:h-5 md:h-6 w-auto"
//               />
//             </div>
            
//             {/* Testimonial Text - Adjusted font sizes and overflow handling */}
//             <div className="text-white text-base sm:text-lg md:text-xl mb-4 sm:mb-8 pt-6 sm:pt-8 overflow-y-auto max-h-[120px] sm:max-h-[140px] md:max-h-[180px] pr-2">
//               <p>{testimonials[currentIndex].text}</p>
//             </div>
            
//             {/* Author Info */}
//             <div>
//               <p className="text-[#FFF] text-sm sm:text-base md:text-[16px] font-normal">
//                 {testimonials[currentIndex].author}
//               </p>
//               <p className="text-[#FFF] text-xs md:text-[16px] font-bold">
//                 {testimonials[currentIndex].position}
//               </p>
//             </div>
//           </div>

//           {/* Navigation Controls */}
//           <div className="absolute -bottom-12 sm:bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-2">
//             <button 
//               onClick={prevSlide} 
//               className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-white/30 text-white ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'}`}
//               disabled={currentIndex === 0}
//               style={{
//                 background: currentIndex > 0 ? 'linear-gradient(90deg, rgba(132, 77, 10, 0.4) 0%, rgba(21, 21, 23, 0.2) 100%)' : 'transparent'
//               }}
//             >
//               <IoIosArrowBack size={18} className="sm:text-lg md:text-xl" />
//             </button>
//             <button 
//               onClick={nextSlide} 
//               className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-white/30 text-white ${currentIndex === testimonials.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'}`}
//               disabled={currentIndex === testimonials.length - 1}
//               style={{
//                 background: currentIndex < testimonials.length - 1 ? 'linear-gradient(90deg, rgba(21, 21, 23, 0.2) 0%, rgba(132, 77, 10, 0.4) 100%)' : 'transparent'
//               }}
//             >
//               <IoIosArrowForward size={18} className="sm:text-lg md:text-xl" />
//             </button>
//           </div>
          
//           {/* Pagination dots for mobile */}
//           <div className="sm:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//             {testimonials.map((_, index) => (
//               <div 
//                 key={index}
//                 className={`h-2 rounded-full ${currentIndex === index ? 'w-4 bg-white' : 'w-2 bg-white/30'}`}
//                 onClick={() => setCurrentIndex(index)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;

import React, { useState, useRef } from 'react';
import { Inter, Satisfy } from 'next/font/google';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import star from '@/assets/star.png';

const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'] });

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      text: '"AppStorys has completely transformed how we engage with our users. The widgets and floater allow us to place key actions strategically, ensuring higher interaction rates. Our engagement levels have soared, and users find our app more intuitive !"',
      author: 'PRIYA S.',
      position: 'Product Manager At A Fintech App'
    },
    {
      id: 2,
      text: '"The impact AppStorys has had on our user experience is remarkable."',
      author: 'MICHAEL T.',
      position: 'CTO at Health Tech Startup'
    },
    {
      id: 3,
      text: '"What impressed us most about AppStorys is how seamlessly it integrated with our existing systems. The analytics provided give us actionable insights that have helped us refine our user journey continuously."',
      author: 'SARAH L.',
      position: 'VP of Product at E-commerce Platform'
    }
  ];

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="bg-black py-8 sm:py-12 md:py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h3 className={`${satisfy.className} text-xl sm:text-2xl text-white mb-2`}>
            Testimonials
          </h3>
          <h2 
            className="text-white text-3xl sm:text-4xl md:text-[48px] font-medium px-4"
            style={{
              fontFamily: '"SF Pro Display", sans-serif',
              fontWeight: 500,
              lineHeight: '102%',
            }}
          >
            What Our Clients Have To Say
          </h2>
        </div>

        {/* Responsive container for stacked cards - Added padding at bottom for navigation */}
        <div className="relative mx-auto h-[440px] sm:h-[320px] md:h-[400px] w-full max-w-[320px] sm:max-w-[500px] md:max-w-[720px] pb-16">
          {/* Previous Card (Left) - Hidden on smallest screens */}
          {currentIndex > 0 && (
            <div 
              className="hidden sm:block absolute top-0 left-0 w-[85%] h-[240px] sm:h-[280px] md:h-[340px] rounded-[13px] border border-white/24 z-10"
              style={{
                background: 'radial-gradient(90.08% 90.08% at 97.01% 0%, #844D0A 0%, #151517 100%)',
                transform: 'translateX(-65%) scale(0.95)',
                opacity: 0.5
              }}
            />
          )}
          
          {/* Next Card (Right) - Hidden on smallest screens */}
          {currentIndex < testimonials.length - 1 && (
            <div 
              className="hidden sm:block absolute top-0 right-0 w-[85%] h-[240px] sm:h-[280px] md:h-[340px] rounded-[13px] border border-white/24 z-10"
              style={{
                background: 'radial-gradient(90.08% 90.08% at 3% 0%, #844D0A 0%, #151517 100%)',
                transform: 'translateX(65%) scale(0.95)',
                opacity: 0.5
              }}
            />
          )}
          
          {/* Current Card (Center) */}
          <div 
            className="absolute top-0 left-1/2 w-full sm:w-[85%] h-[340px] sm:h-[280px] md:h-[340px] rounded-[13px] border border-white/24 z-20 p-4 sm:p-8 md:p-12 flex flex-col justify-between"
            style={{
              background: 'radial-gradient(90.08% 90.08% at 97.01% 0%, #844D0A 0%, #151517 100%)',
              transform: 'translateX(-50%)',
              backdropFilter: 'blur(6.6px)'
            }}
          >
            {/* Stars in top right */}
            <div className="absolute top-4 sm:top-8 md:top-12 right-4 sm:right-8 md:right-12">
              <Image 
                src={star}
                alt="5 Star Rating" 
                width={120} 
                height={24}
                className="h-4 sm:h-5 md:h-6 w-auto"
              />
            </div>
            
            {/* Testimonial Text - Adjusted font sizes and overflow handling */}
            <div className="text-white text-base sm:text-lg md:text-xl mb-4 sm:mb-8 pt-6 sm:pt-8  max-h-[300px] sm:max-h-[320px] md:max-h-[180px] pr-2">
              <p>{testimonials[currentIndex].text}</p>
            </div>
            
            {/* Author Info */}
            <div>
              <p className="text-[#FFF] text-sm sm:text-base md:text-[16px] font-normal">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-[#FFF] text-xs md:text-[16px] font-bold">
                {testimonials[currentIndex].position}
              </p>
            </div>
          </div>

          {/* Navigation Controls - Fixed positioning */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-2 mt-6">
            <button 
              onClick={prevSlide} 
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-white/30 text-white ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'}`}
              disabled={currentIndex === 0}
              style={{
                background: currentIndex > 0 ? 'linear-gradient(90deg, rgba(132, 77, 10, 0.4) 0%, rgba(21, 21, 23, 0.2) 100%)' : 'transparent'
              }}
            >
              <IoIosArrowBack size={18} className="sm:text-lg md:text-xl" />
            </button>
            <button 
              onClick={nextSlide} 
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-white/30 text-white ${currentIndex === testimonials.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'}`}
              disabled={currentIndex === testimonials.length - 1}
              style={{
                background: currentIndex < testimonials.length - 1 ? 'linear-gradient(90deg, rgba(21, 21, 23, 0.2) 0%, rgba(132, 77, 10, 0.4) 100%)' : 'transparent'
              }}
            >
              <IoIosArrowForward size={18} className="sm:text-lg md:text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
// import React from 'react';
// import Image from 'next/image';
// import { Inter, Bricolage_Grotesque, Satisfy, Outfit } from 'next/font/google';
// import blog1 from '@/assets/blog1.png';
// import blog2 from '@/assets/blog2.png';

// // Font definitions
// const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
// const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800'] });
// const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'] });
// const outfit = Outfit({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

// const BlogSection = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       title: "5 Ways To Increase App Retention",
//       excerpt: "With AppStorys, deliver cutting-edge user experiences with top-notch security. Our lightweight, secure SDK helps your app grow while protecting user data with end...",
//       image: blog1,
//       category: "AppStorys"
//     },
//     {
//       id: 2,
//       title: "5 Ways Stories Can Help You Increase App Engagement",
//       excerpt: "With AppStorys, deliver cutting-edge user experiences with top-notch security. Our lightweight, secure SDK helps your app grow while protecting user data with end...",
//       image: blog2,
//       category: "AppStorys"
//     }
//   ];

//   return (
//     <section className="py-16 px-4 md:px-6 lg:px-16 bg-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Two-column layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//           {/* Left column: Title and button */}
//           <div className="lg:col-span-4">
//             <p className={`${satisfy.className} text-purple-600 text-xl mb-2`}>Blogs</p>
//             <h2 className={`${bricolageGrotesque.className} text-4xl md:text-5xl font-bold text-black leading-tight`}>
//               Read All Our<br />Recent Articles
//             </h2>
            
//             <div className="mt-8">
//               <a 
//                 href="#" 
//                 className="inline-flex items-center bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 py-3 rounded-full font-medium"
//               >
//                 Read All
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
//                   <circle cx="12" cy="12" r="10" />
//                   <path d="M12 8l4 4-4 4" />
//                   <path d="M8 12h8" />
//                 </svg>
//               </a>
//             </div>
//           </div>
          
//           {/* Right column: Blog cards */}
//           <div className="lg:col-span-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {blogPosts.map((post) => (
//                 <div key={post.id} className="flex flex-col">
//                   {/* Blog card with image */}
//                   <div className="bg-orange-50 rounded-[8px] w-[375px] h-[222px] overflow-hidden mb-6">
                  
//                     <div className="relative h-48 w-full">
//                       <Image 
//                         src={post.image}
//                         alt={post.title}
//                         fill
//                         style={{ objectFit: 'cover' }}
//                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       />
                     
//                     </div>
//                   </div>
                  
//                   {/* Post title and excerpt */}
//                   <h2 className={`${bricolageGrotesque.className} text-xl font-bold mb-2`}>
//                     {post.title}
//                   </h2>
//                   <p className={`${outfit.className} text-sm text-gray-600 mb-3`}>
//                     {post.excerpt}
//                   </p>
//                   <a href="#" className="flex items-center text-orange-500 font-medium">
//                     Read more
//                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
//                       <path d="M5 12h14" />
//                       <path d="M12 5l7 7-7 7" />
//                     </svg>
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;

import React from 'react';
import Image from 'next/image';
import { Satisfy } from 'next/font/google';
import blog1 from '@/assets/blog1.png';
import blog2 from '@/assets/blog2.png';

// Only keep Satisfy font from Google Fonts
const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'] });

// Add the following to your global CSS or a CSS module:
// @font-face {
//   font-family: 'SF Pro';
//   src: url('/fonts/SF-Pro-Display-Regular.woff2') format('woff2');
//   font-weight: normal;
//   font-style: normal;
//   font-display: swap;
// }
// @font-face {
//   font-family: 'SF Pro';
//   src: url('/fonts/SF-Pro-Display-Medium.woff2') format('woff2');
//   font-weight: 500;
//   font-style: normal;
//   font-display: swap;
// }
// @font-face {
//   font-family: 'SF Pro';
//   src: url('/fonts/SF-Pro-Display-Bold.woff2') format('woff2');
//   font-weight: bold;
//   font-style: normal;
//   font-display: swap;
// }

// Add this to your tailwind.config.js:
// theme: {
//   extend: {
//     fontFamily: {
//       'sf-pro': ['"SF Pro"', 'system-ui', 'sans-serif'],
//     }
//   }
// }

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Ways To Increase App Retention",
      excerpt: "With AppStorys, deliver cutting-edge user experiences with top-notch security. Our lightweight, secure SDK helps your app grow while protecting user data with end...",
      image: blog1,
      category: "AppStorys"
    },
    {
      id: 2,
      title: "5 Ways Stories Can Help You Increase App Engagement",
      excerpt: "With AppStorys, deliver cutting-edge user experiences with top-notch security. Our lightweight, secure SDK helps your app grow while protecting user data with end...",
      image: blog2,
      category: "AppStorys"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-16 bg-[#FFF7F3]">
      <div className="max-w-7xl mx-auto">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left column: Title and button */}
          <div className="lg:col-span-4">
            <p className={`${satisfy.className} text-purple-600 text-[22px] font-normal mb-2`}>Blogs</p>
            <h2 className="font-sf-pro text-4xl md:text-[50px] font-medium text-black ">
              Read All Our<br />Recent Articles
            </h2>
            
            <div className="mt-16">
            <a 
  href="#" 
  className="inline-flex items-center justify-center font-sf-pro font-medium text-white"
  style={{
    width: '126px',
    height: '40px',
    borderRadius: '5px',
    backgroundColor: '#FD5F03',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset'
  }}
>
  Read All
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8l4 4-4 4" />
    <path d="M8 12h8" />
  </svg>
</a>
            </div>
          </div>
          
          {/* Right column: Blog cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <div key={post.id} className="flex flex-col">
                  {/* Blog card with image */}
                  <div className="bg-orange-50 rounded-[8px] w-full md:w-[375px] h-[222px] overflow-hidden mb-6">
                    <div className="relative h-full w-full">
                      <Image 
                        src={post.image}
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  
                  {/* Post title and excerpt */}
                  <h2 className="font-sf-pro text-xl font-bold mb-2">
                    {post.title}
                  </h2>
                  <p className="font-sf-pro text-sm text-gray-600 mb-3">
                    {post.excerpt}
                  </p>
                  <a href="#" className="flex items-center text-orange-500 font-medium font-sf-pro">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
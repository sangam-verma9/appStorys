

import React from 'react';
import Image from 'next/image';
import { Inter, Satisfy } from 'next/font/google';
import s1 from '@/assets/s1.png';
import s2 from '@/assets/s2.png';
import s3 from '@/assets/s3.png';
import s4 from '@/assets/s4.png';
import s5 from '@/assets/s5.png';
import s6 from '@/assets/s6.png';

const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'] });

const Sdks = () => {
  const sdks = [
    { name: 'iOS Native', icon: s1 },
    { name: 'Android Native', icon: s2 },
    { name: 'React Native SDK', icon: s3 },
    { name: 'Angular SDK', icon: s4 },
    { name: 'React.js SDK', icon: s5 },
    { name: 'Flutter SDK', icon: s6 }
  ];

  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className={`${satisfy.className} text-[26px] mb-4 capitalize`}
              style={{
                letterSpacing: '1px',
                lineHeight: '27.6px'
              }}>
            How It Works
          </h3>
          <h1 className="text-white text-[30px] md:text-[56px] font-[500] leading-[102%] capitalize">
            Enterprise Ready SDKs
          </h1>
          <p className="text-white text-[16px] max-w-[400px] mx-auto mt-4"
             style={{
               lineHeight: '128%',
               letterSpacing: '0.48px'
             }}>
            Install our SDK in less than 30 minutes and use our dashboards that say a lot more than just graphs.
          </p>
        </div>

        {/* SDKs Grid */}
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          {sdks.map((sdk, index) => (
            <div 
              key={index} 
              className="w-full max-w-[250px] aspect-square rounded-2xl overflow-hidden"
            >
              <Image 
                src={sdk.icon} 
                alt={`${sdk.name} SDK`} 
                className="w-full h-full object-cover"
                layout="responsive"
                placeholder="blur"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sdks;
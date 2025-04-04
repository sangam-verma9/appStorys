import React from 'react';
import { Inter, Bricolage_Grotesque, Satisfy } from 'next/font/google';
// Import the logos
import clevertapLogo from '@/assets/i1.png';
import amplitudeLogo from '@/assets/i2.png';
import moengageLogo from '@/assets/i3.png';
import mparticleLogo from '@/assets/i4.png';
import mixpanelLogo from '@/assets/i5.png';
import optimizelyLogo from '@/assets/i6.png';
import redshiftLogo from '@/assets/i7.png';
import airshipLogo from '@/assets/i8.png';
import brazeLogo from '@/assets/i9.png';
import webengageLogo from '@/assets/i10.png';
import pendoLogo from '@/assets/i11.png';
import customLogo from '@/assets/i12.png';


const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800'] });
const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'] });

const Integrations = () => {
  // Array of integration partners
  const partners = [
    { name: 'CleverTap', logo: clevertapLogo },
    { name: 'Amplitude', logo: amplitudeLogo },
    { name: 'MoEngage', logo: moengageLogo },
    { name: 'MParticle', logo: mparticleLogo },
    { name: 'MixPanel', logo: mixpanelLogo },
    { name: 'Optimizely', logo: optimizelyLogo },
    { name: 'Amazon Redshift', logo: redshiftLogo },
    { name: 'Airship', logo: airshipLogo },
    { name: 'Braze', logo: brazeLogo },
    { name: 'WebEngage', logo: webengageLogo},
    { name: 'Pendo', logo: pendoLogo },
    { name: 'Custom CSV', logo: customLogo },
  ];

  return (
    <div className="w-full bg-[#FFF7F3] py-12 md:py-16 lg:py-20">
      <div className="sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[1200px] mx-auto px-4 sm:px-6 md:px-0">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className={`${satisfy.className} text-[#FD5F03] text-[22px] md:text-[26px] text-center`}>
            How It Works
          </h3>
          <h1 className={`font-sf-pro text-[32px] sm:text-[38px] md:text-[46px] lg:text-[56px] font-medium text-center mb-2`}>
            Our Integrations
          </h1>
          <p className={`${inter.className} text-center max-w-md mx-auto text-[#141414] text-base md:text-[16px] font-normal`}>
            We have deep integrations with the largest technology partners for events data flow in real time.
          </p>
        </div>

        {/* Integration Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center"
            >
              {partner.logo ? (
                // For imported logos
                <img 
                  src={partner.logo.src} 
                  alt={partner.name} 
                  style={{ width: '220.95px', height: '98.901px' }}
                  className="object-contain"
                />
              ) : (
                // For partners without logos
                <div className="flex items-center justify-center" style={{ width: '220.95px', height: '98.901px' }}>
                  <p className="text-lg font-medium text-gray-700">{partner.name}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="max-w-6xl mx-auto">
          <p className={`${inter.className} text-center font-normal text-sm sm:text-base md:text-[16px] text-[#141414]`}>
            We offer comprehensive CDP integration capabilities, supporting webhooks, API endpoints, and a variety of other data ingestion protocols. Our architecture is designed for real-time data processing, ensuring minimal latency. If you require specialized integration solutions, we can work directly with your CDP provider to develop a tailored approach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
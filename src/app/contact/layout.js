// app/contact/page.js
export const metadata = {
  title: "Contact AppStorys - Get In Touch For App Engagement Solutions",
  description: "Ready to boost your app's engagement? Contact AppStorys today to explore how our interactive user experience tools can help grow your app without developer effort.",
  keywords: "AppStorys contact, get in touch, app engagement, SDK integration, app development tools, mobile engagement, interactive content",
  openGraph: {
    title: "Contact AppStorys - Get In Touch For App Engagement Solutions",
    description: "Reach out to AppStorys for innovative app engagement solutions. Our team is ready to help you enhance user experiences and drive growth with our scalable platform.",
    url: "https://appstorys.com/contact",
    siteName: "AppStorys",
    images: [
      {
        url: "/contact-og-image.jpg", // Create this OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "Contact AppStorys Team",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AppStorys - Get In Touch For App Engagement Solutions",
    description: "Reach out to AppStorys for innovative app engagement solutions. Our team is ready to help you enhance user experiences and drive growth.",
    images: ["/contact-twitter-image.jpg"],
  },
  alternates: {
    canonical: "/contact",
  },
};

import Script from 'next/script';
import GetInTouch from './page';

export default function ContactPage() {
  return (
    <>
      <Script
        id="contact-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact AppStorys",
            "description": "Get in touch with AppStorys for app engagement solutions",
            "mainEntity": {
              "@type": "Organization",
              "name": "AppStorys",
              "url": "https://appstorys.com",
              "logo": "https://appstorys.com/img/logo.png",
              "email": "support@appstorys.com",
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressCountry": "India",
                  "addressLocality": "Mumbai",
                  "addressRegion": "Maharashtra",
                  "postalCode": "400706",
                  "streetAddress": "Office #3, Neelkanth, Next to Shreeji Heights, Sector 45A, Navi Mumbai"
                },
                {
                  "@type": "PostalAddress",
                  "addressCountry": "India",
                  "addressLocality": "Noida",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "201301",
                  "streetAddress": "Office #37, Tapasya Corp Heights, Sector 126"
                },
                {
                  "@type": "PostalAddress",
                  "addressCountry": "USA",
                  "addressLocality": "Lewes",
                  "addressRegion": "DE",
                  "postalCode": "19958",
                  "streetAddress": "16192 Coastal Hwy"
                },
                {
                  "@type": "PostalAddress",
                  "addressCountry": "USA",
                  "addressLocality": "Fremont",
                  "addressRegion": "California",
                  "postalCode": "94536",
                  "streetAddress": "140 Black Mountain Cir"
                }
              ]
            }
          })
        }}
      />
      <GetInTouch />
    </>
  );
}
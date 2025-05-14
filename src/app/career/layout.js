// app/careers/page.js
export const metadata = {
  title: "Careers at AppStorys - Join Our Team | App Engagement Solutions",
  description: "Join AppStorys and shape the future of app engagement. Explore exciting career opportunities in development, design, and more in a dynamic, innovative environment.",
  keywords: "AppStorys careers, job openings, tech jobs, app development careers, SDK development, mobile engagement jobs",
  openGraph: {
    title: "Careers at AppStorys - Join Our Team | App Engagement Solutions",
    description: "Join our innovative team at AppStorys and help shape the future of app engagement. We offer competitive benefits, growth opportunities, and a dynamic work environment.",
    url: "https://appstorys.com/careers",
    siteName: "AppStorys",
    images: [
      {
        url: "/careers-og-image.jpg", // Create this OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "AppStorys Careers",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at AppStorys - Join Our Team | App Engagement Solutions",
    description: "Join our innovative team at AppStorys and help shape the future of app engagement. We offer competitive benefits, growth opportunities, and a dynamic work environment.",
    images: ["/careers-twitter-image.jpg"],
  },
  alternates: {
    canonical: "/careers",
  },
};

import Script from 'next/script';
import CareerPage from './page';

export default function CareersPage() {
  return (
    <>
      <Script
        id="careers-jobposting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Multiple Positions",
            "description": "AppStorys is hiring for multiple roles including Django Developer, SDE Manager, DevOps Engineer, Graphic Designer, and Typescript Developer.",
            "datePosted": new Date().toISOString().split('T')[0],
            "validThrough": new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0],
            "employmentType": "FULL_TIME",
            "hiringOrganization": {
              "@type": "Organization",
              "name": "AppStorys",
              "sameAs": "https://appstorys.com",
              "logo": "https://appstorys.com/img/logo.png"
            },
            "jobLocations": [
              {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "India",
                  "addressLocality": "Mumbai",
                  "addressRegion": "Maharashtra",
                  "postalCode": "400706",
                  "streetAddress": "Office #3, Neelkanth, Next to Shreeji Heights, Sector 45A, Navi Mumbai"
                }
              },
              {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "India",
                  "addressLocality": "Noida",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "201301",
                  "streetAddress": "Office #37, Tapasya Corp Heights, Sector 126"
                }
              },
              {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "USA",
                  "addressLocality": "Fremont",
                  "addressRegion": "California",
                  "postalCode": "94536",
                  "streetAddress": "140 Black Mountain Cir"
                }
              }
            ],
            "applicationContact": {
              "@type": "ContactPoint",
              "email": "careers@appstorys.com"
            },
            "benefits": "Health insurance, flexible work hours, professional development opportunities, competitive salary, and a supportive team culture.",
            "skills": "Varies by position - Development, Design, DevOps",
            "qualifications": "Relevant experience and education in technology fields"
          })
        }}
      />
      <CareerPage />
    </>
  );
}
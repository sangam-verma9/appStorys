// app/about/page.js
import { Metadata } from 'next';
import Script from 'next/script';
import AboutUs from '../about/page'; // Import your existing AboutUs component

export const metadata = {
  title: "About Us - Discover AppStorys Mission and Values | App Engagement Platform",
  description: "AppStorys helps app developers integrate engaging user experiences without coding effort. Learn about our mission, values, and how we're revolutionizing app engagement.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us - Discover AppStorys Mission and Values | App Engagement Platform",
    description: "AppStorys helps app developers integrate engaging user experiences without coding effort. Learn how we're revolutionizing app engagement.",
    url: "https://appstorys.com/about",
    siteName: "AppStorys",
    images: [
      {
        url: "/about-og-image.jpg", // Create this OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "AppStorys About Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Discover AppStorys Mission and Values | App Engagement Platform",
    description: "AppStorys helps app developers integrate engaging user experiences without coding effort. Learn about our mission and values.",
    images: ["/about-twitter-image.jpg"], 
  },
  keywords: "AppStorys, app engagement, user experience, SDK integration, app development tools, mobile engagement, interactive content",
};

export default function Page() {
  return (
    <>
      <Script
        id="about-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AppStorys",
            "url": "https://appstorys.com",
            "logo": "https://appstorys.com/img/logo.png",
            "description": "AppStorys helps app developers integrate engaging user experiences without coding effort.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Global"
            },
            "sameAs": [
              "https://twitter.com/appstorys",
              "https://linkedin.com/company/appstorys",
              "https://facebook.com/appstorys"
            ]
          })
        }}
      />
      <AboutUs />
    </>
  );
}
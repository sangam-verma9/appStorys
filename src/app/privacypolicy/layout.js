// app/privacy-policy/page.js
export const metadata = {
  title: "Privacy Policy | Data Collection and Usage Practices | AppStorys",
  description: "Read AppStorys' privacy policy to understand how we collect, use, and protect your personal information. Learn about our data practices, cookie usage, and your privacy rights.",
  keywords: "AppStorys privacy policy, data protection, personal data collection, cookie policy, GDPR compliance, privacy rights, data security",
  openGraph: {
    title: "Privacy Policy | Data Collection and Usage Practices | AppStorys",
    description: "Read AppStorys' privacy policy to understand how we collect, use, and protect your personal information. Learn about our data practices and your privacy rights.",
    url: "https://appstorys.com/privacy-policy",
    siteName: "AppStorys",
    images: [
      {
        url: "/privacy-policy-og-image.jpg", // Create this OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "AppStorys Privacy Policy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Data Collection and Usage Practices | AppStorys",
    description: "Read AppStorys' privacy policy to understand how we collect, use, and protect your personal information. Learn about our data practices and your privacy rights.",
    images: ["/privacy-policy-twitter-image.jpg"],
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

import Script from 'next/script';
import PrivacyPolicy from './page';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Script
        id="privacy-policy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy | AppStorys",
            "description": "Read AppStorys' privacy policy to understand how we collect, use, and protect your personal information. Learn about our data practices, cookie usage, and your privacy rights.",
            "publisher": {
              "@type": "Organization",
              "name": "AppStorys",
              "logo": {
                "@type": "ImageObject",
                "url": "https://appstorys.com/img/logo.png"
              }
            },
            "mainEntity": {
              "@type": "PrivacyPolicy",
              "name": "AppStorys Privacy Policy",
              "datePublished": "2024-12-02",
              "dateModified": "2024-12-02",
              "creator": {
                "@type": "Organization",
                "name": "AppStorys"
              },
              "inLanguage": "en",
              "potentialAction": {
                "@type": "ReadAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://appstorys.com/privacy-policy",
                  "actionPlatform": [
                    "https://schema.org/DesktopWebPlatform",
                    "https://schema.org/MobileWebPlatform"
                  ]
                }
              },
              "contentLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "India",
                  "addressRegion": "Uttar Pradesh"
                }
              }
            }
          })
        }}
      />
      <PrivacyPolicy />
    </>
  );
}
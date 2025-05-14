// app/csats/page.js
export const metadata = {
  title: "CSATs | Customer Satisfaction Surveys | AppStorys",
  description: "Add engaging, customizable Customer Satisfaction (CSAT) surveys to your app with AppStorys. Collect valuable feedback, measure user satisfaction, and improve your app experience.",
  keywords: "CSAT, customer satisfaction surveys, app feedback, user satisfaction, feedback collection, mobile app surveys, AppStorys features, customer experience",
  openGraph: {
    title: "CSATs | Customer Satisfaction Surveys | AppStorys",
    description: "Add engaging, customizable Customer Satisfaction (CSAT) surveys to your app with AppStorys. Collect valuable feedback, measure user satisfaction, and improve your app experience.",
    url: "https://appstorys.com/csats",
    siteName: "AppStorys",
    images: [
      {
        url: "/csats-og-image.jpg", // Create this OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "AppStorys CSAT Feature",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSATs | Customer Satisfaction Surveys | AppStorys",
    description: "Add engaging, customizable Customer Satisfaction (CSAT) surveys to your app with AppStorys. Collect valuable feedback, measure user satisfaction, and improve your app experience.",
    images: ["/csats-twitter-image.jpg"],
  },
  alternates: {
    canonical: "/csats",
  },
};

import Script from 'next/script';
import CSATs from './page';

export default function CSATsPage() {
  return (
    <>
      <Script
        id="csats-feature-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "CSATs | Customer Satisfaction Surveys | AppStorys",
            "description": "Add engaging, customizable Customer Satisfaction (CSAT) surveys to your app with AppStorys. Collect valuable feedback, measure user satisfaction, and improve your app experience.",
            "url": "https://appstorys.com/csats",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "AppStorys CSAT Feature",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "AppStorys CSAT feature enables app developers to seamlessly integrate customer satisfaction surveys into their applications to gather valuable user feedback and improve product experience.",
              "featureList": "Customizable survey templates, Real-time feedback collection, Analytics dashboard, Multi-question formats, Targeted survey deployment, User segmentation, Feedback trend analysis, Integration with CRMs",
              "screenshot": "https://appstorys.com/img/csat_feature.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "280"
              }
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".feature-list"]
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://appstorys.com/img/csat_feature.png"
            },
            "potentialAction": [
              {
                "@type": "ReadAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://appstorys.com/csats"
                }
              },
              {
                "@type": "RequestQuoteAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://appstorys.com/contact"
                }
              }
            ],
            "mainContentOfPage": {
              "@type": "WebPageElement",
              "about": {
                "@type": "Thing",
                "name": "Customer Satisfaction Surveys",
                "description": "Tools and methods to measure user satisfaction and gather valuable feedback within mobile applications"
              }
            },
            "keywords": "CSAT surveys, customer satisfaction measurement, app feedback collection, user satisfaction metrics, mobile app surveys, feedback analytics, user experience improvement, AppStorys features"
          })
        }}
      />
      <CSATs />
    </>
  );
}
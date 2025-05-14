// app/coachmarks/page.js
export const metadata = {
  title: "Coachmarks | User Onboarding & Feature Discovery | AppStorys",
  description: "Guide users through your app with intuitive coachmarks. AppStorys simplifies onboarding and feature discovery with customizable tooltips for an enhanced user experience.",
  keywords: "coachmarks, app onboarding, feature discovery, user guidance, mobile app onboarding, tooltips, AppStorys features, user experience",
  openGraph: {
    title: "Coachmarks | User Onboarding & Feature Discovery | AppStorys",
    description: "Guide users through your app with intuitive coachmarks. AppStorys simplifies onboarding and feature discovery with customizable tooltips for an enhanced user experience.",
    url: "https://appstorys.com/coachmarks",
    siteName: "AppStorys",
    images: [
      {
        url: "/coachmarks-og-image.jpg", // Create this OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "AppStorys Coachmarks Feature",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coachmarks | User Onboarding & Feature Discovery | AppStorys",
    description: "Guide users through your app with intuitive coachmarks. AppStorys simplifies onboarding and feature discovery with customizable tooltips for an enhanced user experience.",
    images: ["/coachmarks-twitter-image.jpg"],
  },
  alternates: {
    canonical: "/coachmarks",
  },
};

import Script from 'next/script';
import Coachmarks from './page';

export default function CoachmarksPage() {
  return (
    <>
      <Script
        id="coachmarks-feature-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Coachmarks | User Onboarding & Feature Discovery | AppStorys",
            "description": "Guide users through your app with intuitive coachmarks. AppStorys simplifies onboarding and feature discovery with customizable tooltips for an enhanced user experience.",
            "url": "https://appstorys.com/coachmarks",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "AppStorys Coachmarks Feature",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "AppStorys Coachmarks feature helps app developers create intuitive user onboarding experiences and highlight new features through customizable interactive tooltips.",
              "featureList": "Intuitive onboarding, Feature discovery, Reduced learning curve, Improved user engagement, Customizable tooltips, Step-by-step guidance, Targeted feature highlighting",
              "screenshot": "https://appstorys.com/img/coachmarks_feature.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "320"
              }
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".feature-list"]
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://appstorys.com/img/coachmarks_feature.png"
            },
            "potentialAction": {
              "@type": "ReadAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://appstorys.com/coachmarks"
              }
            },
            "keywords": "coachmarks, app onboarding, feature discovery, user guidance, mobile app onboarding, tooltips, AppStorys features, user experience, user engagement, reduced learning curve"
          })
        }}
      />
      <Coachmarks />
    </>
  );
}
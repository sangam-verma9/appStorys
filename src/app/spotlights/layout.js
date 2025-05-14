// app/spotlights/page.js
export const metadata = {
  title: "Spotlights | Feature Highlight Tool | AppStorys",
  description: "Add engaging, attention-grabbing Spotlights to your app with AppStorys. Highlight key features, guide users, and improve feature discovery with customizable spotlight overlays.",
  keywords: "app spotlights, feature highlights, user onboarding, feature discovery, spotlight overlays, guided tours, user experience, AppStorys features, app engagement",
  openGraph: {
    title: "Spotlights | Feature Highlight Tool | AppStorys",
    description: "Add engaging, attention-grabbing Spotlights to your app with AppStorys. Highlight key features, guide users, and improve feature discovery with customizable spotlight overlays.",
    url: "https://appstorys.com/spotlights",
    siteName: "AppStorys",
    images: [
      {
        url: "/spotlights-og-image.jpg", // Create this OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "AppStorys Spotlights Feature",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spotlights | Feature Highlight Tool | AppStorys",
    description: "Add engaging, attention-grabbing Spotlights to your app with AppStorys. Highlight key features, guide users, and improve feature discovery with customizable spotlight overlays.",
    images: ["/spotlights-twitter-image.jpg"],
  },
  alternates: {
    canonical: "/spotlights",
  },
};

import Script from 'next/script';
import Spotlights from './page';

export default function SpotlightsPage() {
  return (
    <>
      <Script
        id="spotlights-feature-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Spotlights | Feature Highlight Tool | AppStorys",
            "description": "Add engaging, attention-grabbing Spotlights to your app with AppStorys. Highlight key features, guide users, and improve feature discovery with customizable spotlight overlays.",
            "url": "https://appstorys.com/spotlights",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "AppStorys Spotlights Feature",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "AppStorys Spotlights feature enables app developers to create focused highlight overlays that direct user attention to specific UI elements, helping with feature discovery, onboarding, and guiding users to new or important functionality within the application.",
              "featureList": "Customizable spotlight effects, Animated transitions, Sequential tours, Target element highlighting, Descriptive tooltips, User segmentation, Trigger-based activation, Analytics integration, A/B testing support, Adaptive positioning",
              "screenshot": "https://appstorys.com/img/spotlights_feature.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "290"
              }
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".feature-list"]
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://appstorys.com/img/spotlights_feature.png"
            },
            "potentialAction": [
              {
                "@type": "ReadAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://appstorys.com/spotlights"
                }
              },
              {
                "@type": "RequestDemoAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://appstorys.com/request-demo"
                }
              }
            ],
            "mainContentOfPage": {
              "@type": "WebPageElement",
              "about": {
                "@type": "Thing",
                "name": "UI Spotlight Technology",
                "description": "Technology that creates focused highlight overlays to draw user attention to specific elements within a mobile application interface"
              }
            },
            "significantLink": [
              {
                "@type": "WebPage",
                "url": "https://appstorys.com/features",
                "name": "All AppStorys Features"
              },
              {
                "@type": "WebPage",
                "url": "https://appstorys.com/coachmarks",
                "name": "AppStorys Coachmarks Feature"
              }
            ],
            "isPartOf": {
              "@type": "CreativeWork",
              "name": "AppStorys Onboarding Suite",
              "description": "A comprehensive suite of user onboarding and feature discovery tools designed to improve app usability and engagement"
            },
            "exampleOfWork": [
              {
                "@type": "CreativeWork",
                "name": "New Feature Spotlight Tour",
                "description": "Sequential spotlight tour that introduces users to newly released features within an application"
              },
              {
                "@type": "CreativeWork",
                "name": "First-time User Onboarding Spotlight",
                "description": "Step-by-step spotlight guide that walks new users through key app functionality"
              }
            ],
            "audience": {
              "@type": "Audience",
              "audienceType": "Mobile App Developers",
              "geographicArea": {
                "@type": "AdministrativeArea",
                "name": "Global"
              }
            },
            "keywords": "app spotlights, feature highlights, spotlight overlays, feature discovery, user onboarding, guided tours, UI highlighting, interactive guides, user experience, AppStorys features, attention-focusing tools"
          })
        }}
      />
      <Spotlights />
    </>
  );
}
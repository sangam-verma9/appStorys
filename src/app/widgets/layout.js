// app/widgets/page.js
export const metadata = {
  title: "Widgets | Customizable UI Components | AppStorys",
  description: "Add engaging, interactive widgets to your app with AppStorys. Enhance user experience with customizable UI components that provide useful functionality and drive engagement.",
  keywords: "app widgets, UI components, interactive widgets, mobile app widgets, customizable components, user experience, AppStorys features, app functionality",
  openGraph: {
    title: "Widgets | Customizable UI Components | AppStorys",
    description: "Add engaging, interactive widgets to your app with AppStorys. Enhance user experience with customizable UI components that provide useful functionality and drive engagement.",
    url: "https://appstorys.com/widgets",
    siteName: "AppStorys",
    images: [
      {
        url: "/widgets-og-image.jpg", // Create this OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "AppStorys Widgets Feature",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Widgets | Customizable UI Components | AppStorys",
    description: "Add engaging, interactive widgets to your app with AppStorys. Enhance user experience with customizable UI components that provide useful functionality and drive engagement.",
    images: ["/widgets-twitter-image.jpg"],
  },
  alternates: {
    canonical: "/widgets",
  },
};

import Script from 'next/script';
import Widgets from './page';

export default function WidgetsPage() {
  return (
    <>
      <Script
        id="widgets-feature-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Widgets | Customizable UI Components | AppStorys",
            "description": "Add engaging, interactive widgets to your app with AppStorys. Enhance user experience with customizable UI components that provide useful functionality and drive engagement.",
            "url": "https://appstorys.com/widgets",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "AppStorys Widgets Feature",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "AppStorys Widgets feature provides app developers with a library of customizable, interactive UI components that enhance app functionality, streamline user experience, and provide useful tools and information to users without requiring extensive development resources.",
              "featureList": "Pre-built UI components, Customizable styling, Interactive elements, Responsive design, Easy integration, Analytics tracking, User preference settings, Performance optimization, Cross-platform compatibility, Regular updates",
              "screenshot": "https://appstorys.com/img/widgets_feature.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "285"
              }
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".feature-list"]
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://appstorys.com/img/widgets_feature.png"
            },
            "potentialAction": [
              {
                "@type": "ReadAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://appstorys.com/widgets"
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
                "name": "Interactive UI Components",
                "description": "Pre-built, customizable user interface elements that enhance app functionality and user experience"
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
                "url": "https://appstorys.com/banners",
                "name": "AppStorys Banners Feature"
              }
            ],
            "isPartOf": {
              "@type": "CreativeWork",
              "name": "AppStorys UI Enhancement Suite",
              "description": "A comprehensive suite of user interface components designed to improve app functionality and user experience"
            },
            "exampleOfWork": [
              {
                "@type": "CreativeWork",
                "name": "Content Carousel Widget",
                "description": "Interactive widget for displaying multiple content items in a swipeable carousel format"
              },
              {
                "@type": "CreativeWork",
                "name": "Progress Tracker Widget",
                "description": "Visual widget that displays user progress toward goals or achievements"
              },
              {
                "@type": "CreativeWork",
                "name": "Quick Action Widget",
                "description": "Shortcut widget that provides easy access to frequently used app functions"
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
            "keywords": "app widgets, UI components, interactive widgets, mobile app widgets, customizable components, user experience, app functionality, pre-built components, UI enhancement, AppStorys features, developer tools"
          })
        }}
      />
      <Widgets />
    </>
  );
}
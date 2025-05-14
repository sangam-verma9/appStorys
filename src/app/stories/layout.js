// app/stories/page.js
export const metadata = {
  title: "Stories | In-App Storytelling Platform | AppStorys",
  description: "Add engaging, swipeable stories to your app with AppStorys. Enhance user interaction and retention with captivating, in-app storytelling tools that boost engagement and conversions.",
  keywords: "app stories, in-app stories, swipeable stories, interactive stories, social media stories, user engagement, mobile storytelling, AppStorys features, app retention",
  openGraph: {
    title: "Stories | In-App Storytelling Platform | AppStorys",
    description: "Add engaging, swipeable stories to your app with AppStorys. Enhance user interaction and retention with captivating, in-app storytelling tools that boost engagement and conversions.",
    url: "https://appstorys.com/stories",
    siteName: "AppStorys",
    images: [
      {
        url: "/stories-og-image.jpg", // Create this OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "AppStorys Stories Feature",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stories | In-App Storytelling Platform | AppStorys",
    description: "Add engaging, swipeable stories to your app with AppStorys. Enhance user interaction and retention with captivating, in-app storytelling tools that boost engagement and conversions.",
    images: ["/stories-twitter-image.jpg"],
  },
  alternates: {
    canonical: "/stories",
  },
};

import Script from 'next/script';
import Stories from './page';

export default function StoriesPage() {
  return (
    <>
      <Script
        id="stories-feature-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Stories | In-App Storytelling Platform | AppStorys",
            "description": "Add engaging, swipeable stories to your app with AppStorys. Enhance user interaction and retention with captivating, in-app storytelling tools that boost engagement and conversions.",
            "url": "https://appstorys.com/stories",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "AppStorys Stories Feature",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "AppStorys Stories feature enables app developers to implement Instagram/Snapchat-style story experiences within their applications, allowing for immersive, tappable content presentation that drives engagement through rich media, interactive elements, and time-limited experiences.",
              "featureList": "Swipeable story interface, Tappable navigation, Rich media support, Interactive elements, Engagement analytics, Custom branding options, Story creation tools, User segmentation, A/B testing capabilities, Performance optimization",
              "screenshot": "https://appstorys.com/img/stories_feature.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "375"
              }
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".feature-list"]
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://appstorys.com/img/stories_feature.png"
            },
            "potentialAction": [
              {
                "@type": "ReadAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://appstorys.com/stories"
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
                "name": "In-App Story Technology",
                "description": "Social media-inspired story format featuring swipeable, time-limited content experiences that drive engagement within mobile applications"
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
                "url": "https://appstorys.com/reels",
                "name": "AppStorys Reels Feature"
              }
            ],
            "isPartOf": {
              "@type": "CreativeWork",
              "name": "AppStorys Engagement Platform",
              "description": "A comprehensive suite of engagement tools designed to enhance user interaction and retention in mobile applications"
            },
            "exampleOfWork": [
              {
                "@type": "CreativeWork",
                "name": "Product Launch Stories",
                "description": "Immersive story format that introduces users to new product features and updates"
              },
              {
                "@type": "CreativeWork",
                "name": "Promotional Content Stories",
                "description": "Engaging story format that showcases special offers and limited-time promotions"
              },
              {
                "@type": "CreativeWork",
                "name": "Educational Content Stories",
                "description": "Step-by-step story format that guides users through how-to content and product tutorials"
              }
            ],
            "video": {
              "@type": "VideoObject",
              "name": "AppStorys Stories Feature Demo",
              "description": "A demonstration of how in-app Stories work in mobile applications using AppStorys",
              "thumbnailUrl": "https://appstorys.com/img/stories_thumbnail.jpg",
              "contentUrl": "https://appstorys.com/videos/stories-demo.mp4",
              "uploadDate": "2024-01-25T08:00:00+08:00",
              "duration": "PT2M30S",
              "interactionStatistic": {
                "@type": "InteractionCounter",
                "interactionType": "https://schema.org/WatchAction",
                "userInteractionCount": "8750"
              }
            },
            "contentReferenceTime": "2024-05-01T08:00:00+08:00",
            "audience": {
              "@type": "Audience",
              "audienceType": "Mobile App Developers",
              "geographicArea": {
                "@type": "AdministrativeArea",
                "name": "Global"
              }
            },
            "keywords": "app stories, in-app stories, story format, social media stories, swipeable content, interactive stories, mobile storytelling, user engagement, timed content, AppStorys features, content marketing"
          })
        }}
      />
      <Stories />
    </>
  );
}
// app/reels/page.js
export const metadata = {
  title: "Reels | Short-form Video Features | AppStorys",
  description: "Add engaging, attention-grabbing Reels to your app with AppStorys. Boost user engagement with immersive, short-form vertical videos that captivate your audience.",
  keywords: "app reels, short-form videos, vertical videos, app video content, mobile app reels, video engagement, user retention, AppStorys features, TikTok-style videos",
  openGraph: {
    title: "Reels | Short-form Video Features | AppStorys",
    description: "Add engaging, attention-grabbing Reels to your app with AppStorys. Boost user engagement with immersive, short-form vertical videos that captivate your audience.",
    url: "https://appstorys.com/reels",
    siteName: "AppStorys",
    images: [
      {
        url: "/reels-og-image.jpg", // Create this OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "AppStorys Reels Feature",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reels | Short-form Video Features | AppStorys",
    description: "Add engaging, attention-grabbing Reels to your app with AppStorys. Boost user engagement with immersive, short-form vertical videos that captivate your audience.",
    images: ["/reels-twitter-image.jpg"],
  },
  alternates: {
    canonical: "/reels",
  },
};

import Script from 'next/script';
import Reels from './page';

export default function ReelsPage() {
  return (
    <>
      <Script
        id="reels-feature-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Reels | Short-form Video Features | AppStorys",
            "description": "Add engaging, attention-grabbing Reels to your app with AppStorys. Boost user engagement with immersive, short-form vertical videos that captivate your audience.",
            "url": "https://appstorys.com/reels",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "AppStorys Reels Feature",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "AppStorys Reels feature enables app developers to implement TikTok-style short-form vertical video content within their applications, boosting user engagement through immersive, swipeable video experiences that capture audience attention and drive app retention.",
              "featureList": "Vertical video format, Swipe navigation, Auto-play functionality, Engagement metrics, Analytics integration, Custom branding options, Interactive elements, Call-to-action overlays, Content moderation tools, Performance optimization",
              "screenshot": "https://appstorys.com/img/reels_feature.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "340"
              }
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".feature-list"]
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://appstorys.com/img/reels_feature.png"
            },
            "potentialAction": [
              {
                "@type": "ReadAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://appstorys.com/reels"
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
                "name": "Short-form Vertical Video Technology",
                "description": "TikTok-style video format featuring immersive, swipeable short-form vertical videos that maximize user engagement in mobile applications"
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
                "url": "https://appstorys.com/stories",
                "name": "AppStorys Stories Feature"
              },
              {
                "@type": "WebPage",
                "url": "https://appstorys.com/pip-videos",
                "name": "AppStorys PiP Videos Feature"
              }
            ],
            "video": {
              "@type": "VideoObject",
              "name": "AppStorys Reels Feature Demo",
              "description": "A demonstration of how Reels can be implemented in mobile applications using AppStorys",
              "thumbnailUrl": "https://appstorys.com/img/reels_thumbnail.jpg",
              "contentUrl": "https://appstorys.com/videos/reels-demo.mp4",
              "uploadDate": "2024-01-20T08:00:00+08:00",
              "duration": "PT2M15S",
              "interactionStatistic": {
                "@type": "InteractionCounter",
                "interactionType": "https://schema.org/WatchAction",
                "userInteractionCount": "6240"
              }
            },
            "contentReferenceTime": "2024-05-01T08:00:00+08:00",
            "isPartOf": {
              "@type": "CreativeWork",
              "name": "AppStorys Video Engagement Suite",
              "description": "A comprehensive suite of video features designed to maximize engagement and retention in mobile apps"
            },
            "keywords": "short-form videos, app reels, TikTok-style videos, vertical videos, mobile video content, swipeable videos, video engagement, content creation, user retention, AppStorys features, immersive video experiences"
          })
        }}
      />
      <Reels />
    </>
  );
}
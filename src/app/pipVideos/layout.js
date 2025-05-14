// app/pip-videos/page.js
export const metadata = {
  title: "PiP Videos | Picture-in-Picture Video Feature | AppStorys",
  description: "Keep users engaged with floating Picture-in-Picture (PiP) videos. AppStorys enables apps to display video content while users multitask, boosting interaction and retention.",
  keywords: "PiP videos, picture-in-picture, floating videos, app video player, multitasking, video engagement, app retention, AppStorys features, mobile video",
  openGraph: {
    title: "PiP Videos | Picture-in-Picture Video Feature | AppStorys",
    description: "Keep users engaged with floating Picture-in-Picture (PiP) videos. AppStorys enables apps to display video content while users multitask, boosting interaction and retention.",
    url: "https://appstorys.com/pip-videos",
    siteName: "AppStorys",
    images: [
      {
        url: "/pip-videos-og-image.jpg", // Create this OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "AppStorys PiP Videos Feature",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PiP Videos | Picture-in-Picture Video Feature | AppStorys",
    description: "Keep users engaged with floating Picture-in-Picture (PiP) videos. AppStorys enables apps to display video content while users multitask, boosting interaction and retention.",
    images: ["/pip-videos-twitter-image.jpg"],
  },
  alternates: {
    canonical: "/pip-videos",
  },
};

import Script from 'next/script';
import PiPVideos from './page';

export default function PiPVideosPage() {
  return (
    <>
      <Script
        id="pip-videos-feature-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "PiP Videos | Picture-in-Picture Video Feature | AppStorys",
            "description": "Keep users engaged with floating Picture-in-Picture (PiP) videos. AppStorys enables apps to display video content while users multitask, boosting interaction and retention.",
            "url": "https://appstorys.com/pip-videos",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "AppStorys PiP Videos Feature",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "AppStorys Picture-in-Picture Videos feature allows app developers to implement floating, resizable video players that continue playing content while users navigate through other parts of the app, enhancing multitasking and content consumption.",
              "featureList": "Floating video players, Resizable PiP windows, Continuous playback during navigation, Drag-and-drop positioning, Custom controls, Video analytics integration, Responsive design across devices, Minimal battery impact",
              "screenshot": "https://appstorys.com/img/pip_videos_feature.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "295"
              }
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".feature-list"]
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://appstorys.com/img/pip_videos_feature.png"
            },
            "potentialAction": [
              {
                "@type": "ReadAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://appstorys.com/pip-videos"
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
                "name": "Picture-in-Picture Video Technology",
                "description": "Technology allowing users to watch video content in a small floating window while simultaneously using other parts of an application"
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
              }
            ],
            "video": {
              "@type": "VideoObject",
              "name": "AppStorys PiP Videos Demo",
              "description": "A demonstration of how Picture-in-Picture videos work in mobile applications",
              "thumbnailUrl": "https://appstorys.com/img/pip_video_thumbnail.jpg",
              "contentUrl": "https://appstorys.com/videos/pip-demo.mp4",
              "uploadDate": "2024-01-15T08:00:00+08:00",
              "duration": "PT1M45S",
              "interactionStatistic": {
                "@type": "InteractionCounter",
                "interactionType": "https://schema.org/WatchAction",
                "userInteractionCount": "5840"
              }
            },
            "keywords": "PiP videos, picture-in-picture, floating video player, multitasking in apps, video engagement, app retention, mobile video technology, continuous playback, AppStorys features, app user experience"
          })
        }}
      />
      <PiPVideos />
    </>
  );
}
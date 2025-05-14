// app/quizzes/page.js
export const metadata = {
  title: "Quizzes | Interactive Engagement Feature | AppStorys",
  description: "Add engaging, interactive quizzes to your app with AppStorys. Boost user engagement, collect valuable insights, and create fun experiences that drive app retention.",
  keywords: "app quizzes, interactive quizzes, engagement quizzes, mobile app quizzes, quiz creation tools, gamification, user engagement, AppStorys features",
  openGraph: {
    title: "Quizzes | Interactive Engagement Feature | AppStorys",
    description: "Add engaging, interactive quizzes to your app with AppStorys. Boost user engagement, collect valuable insights, and create fun experiences that drive app retention.",
    url: "https://appstorys.com/quizzes",
    siteName: "AppStorys",
    images: [
      {
        url: "/quizzes-og-image.jpg", // Create this OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "AppStorys Quizzes Feature",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quizzes | Interactive Engagement Feature | AppStorys",
    description: "Add engaging, interactive quizzes to your app with AppStorys. Boost user engagement, collect valuable insights, and create fun experiences that drive app retention.",
    images: ["/quizzes-twitter-image.jpg"],
  },
  alternates: {
    canonical: "/quizzes",
  },
};

import Script from 'next/script';
import Quizzes from './page';

export default function QuizzesPage() {
  return (
    <>
      <Script
        id="quizzes-feature-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Quizzes | Interactive Engagement Feature | AppStorys",
            "description": "Add engaging, interactive quizzes to your app with AppStorys. Boost user engagement, collect valuable insights, and create fun experiences that drive app retention.",
            "url": "https://appstorys.com/quizzes",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "AppStorys Quizzes Feature",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "AppStorys Quizzes feature allows app developers to create interactive, gamified quiz experiences within their applications to boost engagement, gather user insights, and enhance the overall user experience through entertaining content.",
              "featureList": "Multiple question formats, Customizable designs, Interactive results screens, User data collection, Analytics dashboard, Gamification elements, Personalization options, Branching logic, Integration with user profiles",
              "screenshot": "https://appstorys.com/img/quizzes_feature.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "315"
              }
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".feature-list"]
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://appstorys.com/img/quizzes_feature.png"
            },
            "potentialAction": [
              {
                "@type": "ReadAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://appstorys.com/quizzes"
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
                "name": "Interactive Quiz Technology",
                "description": "Tools for creating engaging quiz experiences within mobile applications to increase user engagement and collect valuable insights"
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
            "isPartOf": {
              "@type": "CreativeWork",
              "name": "AppStorys Engagement Suite",
              "description": "A comprehensive suite of interactive features designed to boost mobile app engagement and retention"
            },
            "exampleOfWork": [
              {
                "@type": "CreativeWork",
                "name": "Product Knowledge Quiz Template",
                "description": "An interactive quiz template that helps users learn about product features while collecting valuable user insights"
              },
              {
                "@type": "CreativeWork",
                "name": "Personality Quiz Template",
                "description": "Engaging personality quiz format that generates shareable results and increases social engagement"
              }
            ],
            "keywords": "app quizzes, interactive quiz tools, quiz creation platform, engagement quizzes, mobile app quizzes, gamification tools, personality quizzes, trivia quizzes, user engagement features, AppStorys features"
          })
        }}
      />
      <Quizzes />
    </>
  );
}
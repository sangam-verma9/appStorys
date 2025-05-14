// app/scratch-cards/page.js
export const metadata = {
  title: "Scratch Cards | Interactive Rewards Feature | AppStorys",
  description: "Add engaging, interactive Scratch Cards to your app with AppStorys. Boost user engagement and retention with fun, gamified reward experiences that delight your users.",
  keywords: "scratch cards, digital scratch cards, app rewards, gamification, interactive promotions, user engagement, loyalty programs, AppStorys features, mobile app rewards",
  openGraph: {
    title: "Scratch Cards | Interactive Rewards Feature | AppStorys",
    description: "Add engaging, interactive Scratch Cards to your app with AppStorys. Boost user engagement and retention with fun, gamified reward experiences that delight your users.",
    url: "https://appstorys.com/scratch-cards",
    siteName: "AppStorys",
    images: [
      {
        url: "/scratch-cards-og-image.jpg", // Create this OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "AppStorys Scratch Cards Feature",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scratch Cards | Interactive Rewards Feature | AppStorys",
    description: "Add engaging, interactive Scratch Cards to your app with AppStorys. Boost user engagement and retention with fun, gamified reward experiences that delight your users.",
    images: ["/scratch-cards-twitter-image.jpg"],
  },
  alternates: {
    canonical: "/scratch-cards",
  },
};

import Script from 'next/script';
import ScratchCards from './page';

export default function ScratchCardsPage() {
  return (
    <>
      <Script
        id="scratch-cards-feature-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Scratch Cards | Interactive Rewards Feature | AppStorys",
            "description": "Add engaging, interactive Scratch Cards to your app with AppStorys. Boost user engagement and retention with fun, gamified reward experiences that delight your users.",
            "url": "https://appstorys.com/scratch-cards",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "AppStorys Scratch Cards Feature",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "AppStorys Scratch Cards feature enables app developers to implement interactive, digital scratch-off reward cards that gamify the user experience, incentivize app engagement, and create delightful moments of discovery through promotional offers and prizes.",
              "featureList": "Realistic scratch-off animation, Customizable card designs, Prize management system, Reward redemption tracking, Animation effects, Analytics integration, Campaign scheduling, Targeted user segmentation, A/B testing capabilities, Performance metrics",
              "screenshot": "https://appstorys.com/img/scratch_cards_feature.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "325"
              }
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".feature-list"]
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://appstorys.com/img/scratch_cards_feature.png"
            },
            "potentialAction": [
              {
                "@type": "ReadAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://appstorys.com/scratch-cards"
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
                "name": "Digital Scratch Card Technology",
                "description": "Interactive digital version of traditional scratch-off cards that reveal prizes or promotions through a tactile scratching gesture on mobile devices"
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
                "url": "https://appstorys.com/quizzes",
                "name": "AppStorys Quizzes Feature"
              }
            ],
            "isPartOf": {
              "@type": "CreativeWork",
              "name": "AppStorys Gamification Suite",
              "description": "A comprehensive suite of interactive, gamified features designed to boost user engagement and retention in mobile applications"
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "App Developers",
              "geographicArea": {
                "@type": "AdministrativeArea",
                "name": "Global"
              }
            },
            "exampleOfWork": [
              {
                "@type": "CreativeWork",
                "name": "Promotional Discount Scratch Card",
                "description": "Interactive scratch card that reveals special promotional discounts when scratched"
              },
              {
                "@type": "CreativeWork",
                "name": "Loyalty Reward Scratch Card",
                "description": "Reward-based scratch card that reveals points or prizes for loyal app users"
              }
            ],
            "keywords": "scratch cards, digital scratch-off cards, app rewards, gamification, interactive promotions, mobile rewards, user engagement, loyalty incentives, prize campaigns, AppStorys features, engagement marketing"
          })
        }}
      />
      <ScratchCards />
    </>
  );
}
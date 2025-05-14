// app/banners/page.js
export const metadata = {
  title: "Banners | In-App Promotional Feature | AppStorys",
  description: "Design and display impactful banners with AppStorys to promote updates, offers, or announcements. Boost user engagement and conversions with eye-catching in-app banners.",
  keywords: "app banners, in-app banners, promotional banners, mobile app banners, user engagement, conversion optimization, AppStorys features",
  openGraph: {
    title: "Banners | In-App Promotional Feature | AppStorys",
    description: "Increase engagement and conversions with eye-catching in-app banners. Design and display impactful promotions to highlight your app's updates, offers and announcements.",
    url: "https://appstorys.com/banners",
    siteName: "AppStorys",
    images: [
      {
        url: "/banners-og-image.jpg", // Create this OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "AppStorys Banner Feature",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banners | In-App Promotional Feature | AppStorys",
    description: "Increase engagement and conversions with eye-catching in-app banners. Design and display impactful promotions to highlight your app's updates, offers and announcements.",
    images: ["/banners-twitter-image.jpg"],
  },
  alternates: {
    canonical: "/banners",
  },
};

import Script from 'next/script';
import Banners from './page';

export default function BannersPage() {
  return (
    <>
      <Script
        id="banners-feature-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Banners | In-App Promotional Feature | AppStorys",
            "description": "Design and display impactful banners with AppStorys to promote updates, offers, or announcements. Boost user engagement and conversions with eye-catching in-app banners.",
            "url": "https://appstorys.com/banners",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "AppStorys Banner Feature",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "AppStorys Banners feature allows app developers to design and display impactful promotional banners within their apps to highlight deals, updates, and special offers.",
              "featureList": "Grab attention, Increase conversions, Personalized messaging, Segment targeting, Integration with CleverTap and MoEngage",
              "screenshot": "https://appstorys.com/img/feature_banner.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "350"
              }
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".feature-list"]
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://appstorys.com/img/feature_banner.png"
            }
          })
        }}
      />
      <Banners />
    </>
  );
}
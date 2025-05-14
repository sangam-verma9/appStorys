// app/floaters/page.js
export const metadata = {
  title: "Floaters | Interactive Promotional Elements | AppStorys",
  description: "Highlight updates and offers with dynamic floaters. AppStorys lets you create customizable, interactive elements that capture attention and drive user action within your app.",
  keywords: "floaters, app floaters, interactive elements, mobile app promotion, floating elements, call to action, app updates, AppStorys features, user engagement",
  openGraph: {
    title: "Floaters | Interactive Promotional Elements | AppStorys",
    description: "Highlight updates and offers with dynamic floaters. AppStorys lets you create customizable, interactive elements that capture attention and drive user action within your app.",
    url: "https://appstorys.com/floaters",
    siteName: "AppStorys",
    images: [
      {
        url: "/floaters-og-image.jpg", // Create this OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "AppStorys Floaters Feature",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Floaters | Interactive Promotional Elements | AppStorys",
    description: "Highlight updates and offers with dynamic floaters. AppStorys lets you create customizable, interactive elements that capture attention and drive user action within your app.",
    images: ["/floaters-twitter-image.jpg"],
  },
  alternates: {
    canonical: "/floaters",
  },
};

import Script from 'next/script';
import Floaters from './page';

export default function FloatersPage() {
  return (
    <>
      <Script
        id="floaters-feature-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Floaters | Interactive Promotional Elements | AppStorys",
            "description": "Highlight updates and offers with dynamic floaters. AppStorys lets you create customizable, interactive elements that capture attention and drive user action within your app.",
            "url": "https://appstorys.com/floaters",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "AppStorys Floaters Feature",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "AppStorys Floaters feature enables app developers to create eye-catching, interactive floating elements that promote important updates, special offers, or new features without disrupting the user experience.",
              "featureList": "Attention-grabbing animations, Customizable design options, Strategic placement within app, Call-to-action buttons, Targeted user segmentation, A/B testing capabilities, Performance analytics, Interactive elements",
              "screenshot": "https://appstorys.com/img/floaters_feature.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "310"
              }
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".feature-list"]
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://appstorys.com/img/floaters_feature.png"
            },
            "potentialAction": [
              {
                "@type": "ReadAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://appstorys.com/floaters"
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
                "name": "Interactive Floating Elements",
                "description": "Non-intrusive promotional elements that float above app content to highlight important information and drive user actions"
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
            "keywords": "floaters, floating elements, app promotions, interactive elements, call to action, mobile app updates, user engagement tools, floating banners, promotional overlay, AppStorys features"
          })
        }}
      />
      <Floaters />
    </>
  );
}
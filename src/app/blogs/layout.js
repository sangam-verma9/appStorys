// app/blogs/page.js
export const metadata = {
  title: "Blog - Expert Insights on App Engagement & Retention | AppStorys",
  description: "Explore the AppStorys blog for expert tips, trends, and insights on boosting app engagement, improving user retention, and growing your mobile application.",
  keywords: "app engagement, user retention, mobile app growth, SaaS customer churn, app development blog, mobile app tips, app engagement strategies",
  openGraph: {
    title: "Blog - Expert Insights on App Engagement & Retention | AppStorys",
    description: "Stay updated with expert tips and insights on app growth. Explore the AppStorys blog for resources on boosting user engagement and retention.",
    url: "https://appstorys.com/blogs",
    siteName: "AppStorys",
    images: [
      {
        url: "/blog-og-image.jpg", // Create this OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "AppStorys Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Expert Insights on App Engagement & Retention | AppStorys",
    description: "Stay updated with expert tips and insights on app growth. Explore the AppStorys blog for resources on boosting user engagement and retention.",
    images: ["/blog-twitter-image.jpg"],
  },
  alternates: {
    canonical: "/blogs",
  },
};

import Script from 'next/script';
import Blogs from './page';

export default function BlogsPage() {
  return (
    <>
      <Script
        id="blog-listing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "headline": "AppStorys Blog - Expert Insights on App Engagement & Retention",
            "description": "Explore expert tips, trends, and insights to stay ahead in the ever-evolving mobile app industry.",
            "image": "https://appstorys.com/blog-header.jpg",
            "author": {
              "@type": "Organization",
              "name": "AppStorys",
              "url": "https://appstorys.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "AppStorys",
              "logo": {
                "@type": "ImageObject",
                "url": "https://appstorys.com/img/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://appstorys.com/blogs"
            },
            "blogPost": [
              {
                "@type": "BlogPosting",
                "headline": "5 Ways to Increase App Retention",
                "description": "In today's competitive mobile app landscape, retaining users is as crucial as acquiring them...",
                "image": "https://appstorys.com/Blog_App_Retention_main.png",
                "datePublished": "2024-10-12T08:00:00+00:00",
                "dateModified": "2024-10-12T08:00:00+00:00",
                "timeRequired": "PT4M",
                "url": "https://appstorys.com/blogs/5-Ways-to-Increase-App-Retention",
                "author": {
                  "@type": "Organization",
                  "name": "AppStorys"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "AppStorys",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://appstorys.com/img/logo.png"
                  }
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://appstorys.com/blogs/5-Ways-to-Increase-App-Retention"
                }
              },
              {
                "@type": "BlogPosting",
                "headline": "5 Ways Stories Can Help You Increase App Engagement",
                "description": "In today's fast-paced digital world, grabbing and holding users' attention is more challenging than ever...",
                "image": "https://appstorys.com/Blog_App_Engagement_main.png",
                "datePublished": "2023-10-20T08:00:00+00:00",
                "dateModified": "2023-10-20T08:00:00+00:00",
                "timeRequired": "PT5M",
                "url": "https://appstorys.com/blogs/5-Ways-Stories-Can-Help-You-Increase-App-Engagement",
                "author": {
                  "@type": "Organization",
                  "name": "AppStorys"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "AppStorys",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://appstorys.com/img/logo.png"
                  }
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://appstorys.com/blogs/5-Ways-Stories-Can-Help-You-Increase-App-Engagement"
                }
              },
              {
                "@type": "BlogPosting",
                "headline": "5 Causes and Symptoms of Customer Churn in SaaS Companies",
                "description": "Customer churn is a critical issue for SaaS (Software as a Service) companies, impacting revenue and growth...",
                "image": "https://appstorys.com/Blog_App_Saas_main.png",
                "datePublished": "2023-10-20T08:00:00+00:00",
                "dateModified": "2023-10-20T08:00:00+00:00",
                "timeRequired": "PT5M",
                "url": "https://appstorys.com/blogs/5-Causes-and-Symptoms-of-Customer-Churn-in-SaaS-Companies",
                "author": {
                  "@type": "Organization",
                  "name": "AppStorys"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "AppStorys",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://appstorys.com/img/logo.png"
                  }
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://appstorys.com/blogs/5-Causes-and-Symptoms-of-Customer-Churn-in-SaaS-Companies"
                }
              }
            ]
          })
        }}
      />
      <Blogs />
    </>
  );
}
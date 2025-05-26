// app/surveys/page.js
export const metadata = {
    title: "Surveys | In-App Feedback Collection Tool | AppStorys",
    description: "Add engaging, customizable surveys to your app with AppStorys. Collect valuable user feedback, gather insights, and improve your product with interactive survey tools.",
    keywords: "app surveys, in-app surveys, feedback collection, user insights, survey tools, mobile surveys, data collection, AppStorys features, customer feedback",
    openGraph: {
        title: "Surveys | In-App Feedback Collection Tool | AppStorys",
        description: "Add engaging, customizable surveys to your app with AppStorys. Collect valuable user feedback, gather insights, and improve your product with interactive survey tools.",
        url: "https://appstorys.com/surveys",
        siteName: "AppStorys",
        images: [
            {
                url: "/surveys-og-image.jpg",
                width: 1200,
                height: 630,
                alt: "AppStorys Surveys Feature",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Surveys | In-App Feedback Collection Tool | AppStorys",
        description: "Add engaging, customizable surveys to your app with AppStorys. Collect valuable user feedback, gather insights, and improve your product with interactive survey tools.",
        images: ["/surveys-twitter-image.jpg"],
    },
    alternates: {
        canonical: "/surveys",
    },
};

import Script from 'next/script';
import Tooltips from './page';

export default function TooltipPage() {
    return (
        <>
            <Script
                id="surveys-feature-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Surveys | In-App Feedback Collection Tool | AppStorys",
                        "description": "Add engaging, customizable surveys to your app with AppStorys. Collect valuable user feedback, gather insights, and improve your product with interactive survey tools.",
                        "url": "https://appstorys.com/surveys",
                        "mainEntity": {
                            "@type": "SoftwareApplication",
                            "name": "AppStorys Surveys Feature",
                            "applicationCategory": "BusinessApplication",
                            "operatingSystem": "iOS, Android",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "USD"
                            },
                            "description": "AppStorys Surveys feature enables app developers to create and deploy customizable in-app surveys that gather user feedback, measure satisfaction, and collect valuable insights to drive product improvements and enhance user experience.",
                            "featureList": "Multiple question types, Skip logic and branching, Custom styling options, Real-time data collection, Results dashboard, User segmentation, Conditional triggers, Response analytics, Survey scheduling, Multi-language support",
                            "screenshot": "https://appstorys.com/img/surveys_feature.png",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.8",
                                "ratingCount": "305"
                            }
                        },
                        "speakable": {
                            "@type": "SpeakableSpecification",
                            "cssSelector": ["h1", "h2", ".feature-list"]
                        },
                        "primaryImageOfPage": {
                            "@type": "ImageObject",
                            "contentUrl": "https://appstorys.com/img/surveys_feature.png"
                        },
                        "potentialAction": [
                            {
                                "@type": "ReadAction",
                                "target": {
                                    "@type": "EntryPoint",
                                    "urlTemplate": "https://appstorys.com/surveys"
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
                                "name": "In-App Survey Technology",
                                "description": "Tools for creating and deploying user feedback surveys within mobile applications to collect insights and measure satisfaction"
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
                                "url": "https://appstorys.com/csats",
                                "name": "AppStorys CSATs Feature"
                            }
                        ],
                        "isPartOf": {
                            "@type": "CreativeWork",
                            "name": "AppStorys Feedback Collection Suite",
                            "description": "A comprehensive suite of tools designed to gather user insights and feedback within mobile applications"
                        },
                        "exampleOfWork": [
                            {
                                "@type": "CreativeWork",
                                "name": "User Experience Survey",
                                "description": "In-app survey that collects feedback on user interface and overall experience"
                            },
                            {
                                "@type": "CreativeWork",
                                "name": "Feature Request Survey",
                                "description": "Interactive survey that gathers user input on desired new features and improvements"
                            },
                            {
                                "@type": "CreativeWork",
                                "name": "Customer Research Survey",
                                "description": "Demographic and behavioral survey that provides insights into user preferences and habits"
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
                        "keywords": "app surveys, in-app surveys, feedback collection, user insights, survey tools, mobile surveys, data collection, customer feedback, survey analytics, AppStorys features, product improvement"
                    })
                }}
            />
            <Tooltips />
        </>
    );
  }
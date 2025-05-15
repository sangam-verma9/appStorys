import React from 'react';
import { Metadata } from 'next';

export const metadata = {
    title: 'Activation | Drive Faster Time-to-Value | AppStorys',
    description: 'Accelerate user activation with AppStorys. Create intuitive onboarding experiences, interactive walkthroughs, and personalized user journeys that help users discover value from day one.',
    keywords: 'user activation, user onboarding, product tours, interactive walkthroughs, onboarding flows, user engagement, time to value, product experience, user journey, a/b testing onboarding',
    openGraph: {
        title: 'User Activation | Drive Faster Time-to-Value | AppStorys',
        description: 'Accelerate user activation with AppStorys. Create intuitive onboarding experiences that help users discover value from day one.',
        url: 'https://appstorys.com/user-activation',
        siteName: 'AppStorys',
        locale: 'en_US',
        type: 'website',
    },
    alternates: {
        canonical: 'https://appstorys.com/activation',
    },
    robots: {
        index: true,
        follow: true,
    },
};

import script from 'next/script';
import Activation from './page';

export default function ActivationLayout() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "AppStorys User Activation",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "All",
                        "description": "AppStorys User Activation enables product and growth teams to craft intuitive onboarding experiences that drive user engagement from day one, helping users discover value faster.",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        },
                        "featureList": [
                            "No-Code Onboarding Builder",
                            "Interactive Walkthroughs",
                            "Smart Segmentation",
                            "A/B Testing",
                            "Automated Journeys"
                        ],
                        "applicationSubCategory": "User Onboarding Platform",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.8",
                            "ratingCount": "310"
                        }
                    })
                }}
            />

            {/* FAQ Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is user activation and why is it important?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "User activation is the process of helping new users reach their first 'aha moment' and understand the core value of your product as quickly as possible. It's crucial because users who experience value early are significantly more likely to convert to paying customers and become long-term users. AppStorys helps accelerate this process through intuitive onboarding experiences."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How does AppStorys help improve user onboarding?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "AppStorys provides a no-code onboarding builder that allows teams to create interactive walkthroughs, tooltips, and product tours without engineering dependencies. You can target specific user segments, A/B test different onboarding approaches, and create automated, personalized journeys that guide users to their activation moment."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I measure the effectiveness of my onboarding flows?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, AppStorys provides comprehensive analytics that track completion rates, drop-off points, time-to-value metrics, and conversion impact. You can see which onboarding elements are most effective, compare different onboarding strategies through A/B testing, and continuously optimize your activation funnel based on real user data."
                                }
                            }
                        ]
                    })
                }}
            />

            {/* HowTo Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to Improve User Activation with AppStorys",
                        "description": "Follow these steps to create an effective user onboarding experience that accelerates activation.",
                        "step": [
                            {
                                "@type": "HowToStep",
                                "name": "Identify your activation metrics",
                                "text": "Define the key actions that indicate a user has experienced your product's core value."
                            },
                            {
                                "@type": "HowToStep",
                                "name": "Design your onboarding flow",
                                "text": "Use AppStorys' no-code builder to create interactive walkthroughs that guide users to their activation moment."
                            },
                            {
                                "@type": "HowToStep",
                                "name": "Segment your audience",
                                "text": "Create targeted onboarding experiences based on user roles, behaviors, or acquisition channels."
                            },
                            {
                                "@type": "HowToStep",
                                "name": "Test different approaches",
                                "text": "Use A/B testing to compare different onboarding strategies and optimize for better activation rates."
                            },
                            {
                                "@type": "HowToStep",
                                "name": "Analyze and optimize",
                                "text": "Track completion rates and activation metrics to continuously improve your onboarding experience."
                            }
                        ],
                        "tool": {
                            "@type": "HowToTool",
                            "name": "AppStorys User Activation Platform"
                        }
                    })
                }}
            />

            <Activation/>
        </>
    );
}
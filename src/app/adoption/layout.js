import React from 'react';
import { Metadata } from 'next';

export const metadata = {
    title: 'Feature Adoption | Boost User Engagement | AppStorys',
    description: 'Turn passive users into power users with AppStorys feature adoption tools Create contextual in-app messages behavior- based targeting and dynamic user segments to increase engagement.',
    keywords: 'feature adoption, user engagement, in-app messages, feature discovery, user onboarding, product adoption, user activation, tooltips, product walkthroughs',
    openGraph: {
        title: 'Feature Adoption | Boost User Engagement | AppStorys',
        description: 'Turn passive users into power users with AppStorys feature adoption tools.Increase feature discovery and product engagement with contextual guidance.',
        url: 'https://appstorys.com/adoption',
        siteName: 'AppStorys',
    },
    alternates: {
        canonical: 'https://appstorys.com/adoption',
    },
    robots: {
        index: true,
        follow: true,
    },
};

import Adoption from './page';
import script from 'next/script';

export default function AdoptionLayout() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "AppStorys Feature Adoption",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "All",
                        "description": "Turn passive users into power users with AppStorys' feature adoption tools. Create contextual in-app messages, behavior-based targeting, and dynamic user segments to increase engagement.",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        },
                        "featureList": [
                            "Contextual In-App Messages",
                            "Behavior-Based Targeting",
                            "Dynamic User Segments",
                            "Multichannel Support",
                            "Analytics & Insights"
                        ],
                        "applicationSubCategory": "User Engagement Platform",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.7",
                            "ratingCount": "275"
                        }
                    })
                }}
            />
            <Adoption/>
        </>
    );
}
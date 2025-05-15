import React from 'react';
import { Metadata } from 'next';

export const metadata = {
    title: 'Feedback Collection | AppStorys',
    description: 'Collect actionable user feedback while they use your product. In-app surveys, targeted feedback prompts, and analytics to understand user needs and improve your app experience.',
    keywords: 'user feedback, in-app surveys, feedback collection, app analytics, user experience, NPS, CSAT, customer feedback',
    openGraph: {
        title: 'User Feedback Collection | AppStorys',
        description: 'Collect actionable user feedback while they use your product. In-app surveys, targeted feedback prompts, and analytics to understand user needs.',
        url: 'https://appstorys.com/feedback',
        siteName: 'AppStorys',
        locale: 'en_US',
        type: 'website',
    },
    alternates: {
        canonical: 'https://appstorys.com/feedback',
    },
    robots: {
        index: true,
        follow: true,
    },
};

import Feedback from './page';

export default function FeedbackComponent() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "AppStorys Feedback Collection",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "All",
                        "description": "Collect actionable user feedback while they use your product. In-app surveys, targeted feedback prompts, and analytics to understand user needs.",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.8",
                            "ratingCount": "350"
                        }
                    })
                }}
            />

            <Feedback/>
        </>
    );
}
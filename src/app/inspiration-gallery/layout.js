export const metadata = {
    title: "Inspiration Gallery | UI & Feature Examples for App Developers | AppStorys",
    description: "Explore AppStorys' Inspiration Gallery showcasing UI designs, feature implementations, and user interface patterns to inspire your next app project.",
    keywords: "inspiration gallery, app UI examples, feature inspiration, mobile app design, app UI patterns, app feature showcase, AppStorys features",
    openGraph: {
        title: "Inspiration Gallery | UI & Feature Examples for App Developers | AppStorys",
        description: "Explore AppStorys' Inspiration Gallery showcasing UI designs, feature implementations, and user interface patterns to inspire your next app project.",
        url: "https://appstorys.com/inspiration-gallery",
        siteName: "AppStorys",
        type: "website",
    },
    alternates: {
        canonical: "/inspiration-gallery",
    },
};

import Script from 'next/script';

export default function InspirationGalleryPage({ children }) {
    return (
        <>
            <Script
                id="inspiration-gallery-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Inspiration Gallery | UI & Feature Examples for App Developers | AppStorys",
                        "description": "Explore AppStorys' Inspiration Gallery showcasing UI designs, feature implementations, and user interface patterns to inspire your next app project.",
                        "url": "https://appstorys.com/inspiration-gallery",
                        "mainEntity": {
                            "@type": "CollectionPage",
                            "name": "AppStorys Inspiration Gallery",
                            "about": "UI inspiration, app design patterns, mobile app features",
                            "hasPart": [
                                {
                                    "@type": "WebPageElement",
                                    "name": "UI Elements",
                                    "description": "Examples of modern UI components used in mobile applications"
                                },
                                {
                                    "@type": "WebPageElement",
                                    "name": "Feature Demos",
                                    "description": "Real implementation samples of app features like onboarding, stories, PiP, and more"
                                }
                            ]
                        },
                        "primaryImageOfPage": {
                            "@type": "ImageObject",
                            "contentUrl": "https://appstorys.com/img/inspiration_gallery_cover.png"
                        },
                        "speakable": {
                            "@type": "SpeakableSpecification",
                            "cssSelector": ["h1", "h2", ".gallery-section"]
                        },
                        "potentialAction": [
                            {
                                "@type": "ReadAction",
                                "target": {
                                    "@type": "EntryPoint",
                                    "urlTemplate": "https://appstorys.com/inspiration-gallery"
                                }
                            }
                        ],
                        "keywords": "inspiration gallery, UI design, mobile app features, app user experience, app feature examples, design inspiration, AppStorys showcase"
                    })
                }}
            />
            {children}
        </>
    );
}

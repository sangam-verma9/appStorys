export const metadata = {
    title: "Book a Demo - AppStorys",
    description: "Book a demo at AppStorys. Fill up the form and our team will get in touch with you. Quick 15 minute demo to show you the power of AppStorys.",
    keywords: "AppStorys Bookademo, get in touch, app engagement, appstorys demo, app storys demo, appstorys contact, book demo appstorys, request demo",
    openGraph: {
        title: "Book a Demo - AppStorys",
        description: "Book a demo at AppStorys. Fill up the form and our team will get in touch with you. Quick 15-minute demo to show you the power of AppStorys.",
        url: "https://appstorys.com/bookademo",
        siteName: "AppStorys",
        type: "website",
    },
    alternates: {
        canonical: "/bookademo",
    },
};

import Script from 'next/script';
import Bookademo from './page';

export default function BookademoPage() {
    return (
        <>
            <Script
                id="contact-organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Bookademopage",
                        "name": "Bookademo AppStorys",
                        "description": "Get in touch with AppStorys for app engagement solutions",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "AppStorys",
                            "url": "https://appstorys.com",
                            "logo": "https://appstorys.com/img/logo.png",
                            "email": "support@appstorys.com",
                        }
                    })
                }}
            />
            <Bookademo />
        </>
    );
  }
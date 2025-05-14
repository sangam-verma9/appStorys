// app/security/page.js
export const metadata = {
  title: "Security | Data Protection & Global Compliance | AppStorys",
  description: "AppStorys prioritizes data protection and compliance, offering secure SDK integration that enhances app engagement while safeguarding user information with end-to-end encryption.",
  keywords: "AppStorys security, data protection, GDPR compliance, secure SDK, app security, user privacy, encrypted data, lightweight SDK, AWS hosting",
  openGraph: {
    title: "Security | Data Protection & Global Compliance | AppStorys",
    description: "AppStorys prioritizes data protection and compliance, offering secure SDK integration that enhances app engagement while safeguarding user information.",
    url: "https://appstorys.com/security",
    siteName: "AppStorys",
    images: [
      {
        url: "/security-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AppStorys Security and Compliance",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security | Data Protection & Global Compliance | AppStorys",
    description: "AppStorys prioritizes data protection and compliance, offering secure SDK integration that enhances app engagement while safeguarding user information.",
    images: ["/security-twitter-image.jpg"],
  },
  alternates: {
    canonical: "/security",
  },
};

import Script from 'next/script';
import Security from '../security/page';

export default function SecurityPage() {
  return (
    <>
      <Script
        id="security-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "AppStorys Security and Compliance",
            "description": "Learn about AppStorys' commitment to security, data protection, and global compliance standards.",
            "image": "https://appstorys.com/security-banner.jpg",
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
            "datePublished": new Date().toISOString().split('T')[0],
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://appstorys.com/security"
            },
            "keywords": "data protection, GDPR compliance, secure SDK, app security, user privacy, encrypted data, lightweight SDK, AWS hosting",
            "about": {
              "@type": "Thing",
              "name": "Data security and privacy"
            },
            "articleSection": "Security"
          })
        }}
      />
      <Security />
    </>
  );
}
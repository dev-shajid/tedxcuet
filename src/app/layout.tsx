import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script';

// Font configurations
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// SEO Content Variables - Easy to update
const SiteConfig = {
  // Basic Information
  siteName: "TEDxCUET",
  siteUrl: "https://www.tedxcuet.com/",
  year: "2025",
  title: "TEDxCUET 2025: Innovation Through Diversity | Ideas Worth Spreading",
  description: "Join us at TEDxCUET 2025 to experience inspiring talks from visionaries, innovators, and thought leaders that will transform how you see the world. Connect with like-minded individuals and be part of the global TEDx community.",
  shortDescription: "Join us at TEDxCUET 2025 to experience inspiring talks from visionaries, innovators, and thought leaders that will transform how you see the world.",

  // Contact Info
  twitterHandle: "@tedxcuet",
  email: "tedxcuet2025@gmail.com",

  // Images
  mainImage: "https://www.tedxcuet.com/tedx.jpeg",
  imageWidth: 1200,
  imageHeight: 630,
  faviconPath: "https://www.tedxcuet.com/icon.svg",

  // Keywords
  keywords: ["TEDx", "TEDxCUET", "ideas worth spreading", "CUET", "conference", "speakers", "innovation", "inspiration", "technology", "design", "education", "Chittagong", "Bangladesh", "thought leadership"],

  // Event Information
  eventDate: "2025-06-21T09:00:00+06:00", // Date in ISO format
  eventEndDate: "2025-06-21T20:00:00+06:00",
  eventLocation: "Chittagong University of Engineering & Technology, Chittagong, Bangladesh",
  eventVenue: "CUET Auditorium",
  eventStatus: "EventScheduled", // Schema.org event status
  eventAttendanceMode: "OfflineEventAttendanceMode", // Schema.org attendance mode
}

// JSON-LD structured data for rich search results
const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": SiteConfig.title,
  "description": SiteConfig.description,
  "startDate": SiteConfig.eventDate,
  "endDate": SiteConfig.eventEndDate,
  "eventStatus": `https://schema.org/${SiteConfig.eventStatus}`,
  "eventAttendanceMode": `https://schema.org/${SiteConfig.eventAttendanceMode}`,
  "location": {
    "@type": "Place",
    "name": SiteConfig.eventVenue,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chittagong",
      "addressRegion": "Chittagong",
      "addressCountry": "Bangladesh"
    }
  },
  "image": [SiteConfig.mainImage],
  "organizer": {
    "@type": "Organization",
    "name": SiteConfig.siteName,
    "url": SiteConfig.siteUrl
  },
  "offers": {
    "@type": "Offer",
    "url": `${SiteConfig.siteUrl}#register`,
    "price": "0",
    "priceCurrency": "BDT",
    "availability": "https://schema.org/InStock",
    "validFrom": "2025-01-01T00:00:00+06:00"
  },
  "performer": {
    "@type": "Person",
    "name": "Various Speakers"
  }
};

// Next.js metadata configuration using our SEO variables
export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
  keywords: SiteConfig.keywords,
  authors: [{ name: `${SiteConfig.siteName} Organizing Team` }],
  creator: SiteConfig.siteName,
  publisher: SiteConfig.siteName,
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL(SiteConfig.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SiteConfig.title,
    description: SiteConfig.shortDescription,
    url: SiteConfig.siteUrl,
    siteName: SiteConfig.siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: SiteConfig.mainImage,
        width: SiteConfig.imageWidth,
        height: SiteConfig.imageHeight,
        alt: SiteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SiteConfig.title,
    description: SiteConfig.shortDescription,
    creator: SiteConfig.twitterHandle,
    images: [SiteConfig.mainImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Canonical link */}
        <link rel="canonical" href={SiteConfig.siteUrl} />

        {/* Enhanced Favicon Configuration */}
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="icon" type="image/png" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="shortcut icon" href="/icon.svg" />
        <link rel="mask-icon" href="/icon.svg" color="#dc2626" />

        {/* Additional favicon sizes */}
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/icon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/icon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="48x48" href="/icon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="any" href="/icon.svg" />

        {/* Explicit Open Graph tags for platforms that don't support Next.js metadata */}
        <meta property="og:title" content={SiteConfig.title} />
        <meta property="og:description" content={SiteConfig.shortDescription} />
        <meta property="og:image" content={SiteConfig.mainImage} />
        <meta property="og:image:width" content={SiteConfig.imageWidth.toString()} />
        <meta property="og:image:height" content={SiteConfig.imageHeight.toString()} />
        <meta property="og:url" content={SiteConfig.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SiteConfig.siteName} />

        {/* Explicit Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SiteConfig.title} />
        <meta name="twitter:description" content={SiteConfig.shortDescription} />
        <meta name="twitter:image" content={SiteConfig.mainImage} />
        <meta name="twitter:creator" content={SiteConfig.twitterHandle} />

        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* JSON-LD structured data */}
        <Script
          id="event-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
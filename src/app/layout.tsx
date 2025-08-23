import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glass House Recovery | Creative Therapy for Men in Baltimore",
  description: "Evidence-based creative therapy for men in Baltimore, Maryland. Specializing in trauma, addiction recovery, and mental health treatment. Call 410-970-3374 for a consultation.",
  keywords: "therapy Baltimore, men's mental health, creative therapy, trauma treatment, addiction recovery, Baltimore therapist, Maryland mental health",
  authors: [{ name: "Glass House Recovery" }],
  creator: "Glass House Recovery",
  publisher: "Glass House Recovery",
  robots: "index, follow",
  openGraph: {
    title: "Glass House Recovery | Creative Therapy for Men in Baltimore",
    description: "Evidence-based creative therapy for men in Baltimore, Maryland. Specializing in trauma, addiction recovery, and mental health treatment.",
    url: "https://glasshouserecovery.com",
    siteName: "Glass House Recovery",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/glass-house-logo.png",
        width: 1200,
        height: 630,
        alt: "Glass House Recovery Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Glass House Recovery | Creative Therapy for Men in Baltimore",
    description: "Evidence-based creative therapy for men in Baltimore, Maryland. Specializing in trauma, addiction recovery, and mental health treatment.",
    images: ["/glass-house-logo.png"]
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  alternates: {
    canonical: "https://glasshouserecovery.com"
  },
  category: "Healthcare",
  classification: "Mental Health Services",
  referrer: "origin-when-cross-origin"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "MedicalBusiness", "HealthAndBeautyBusiness"],
              "name": "Glass House Recovery",
              "description": "Evidence-based creative therapy for men specializing in trauma, addiction recovery, and mental health treatment in Baltimore, Maryland.",
              "url": "https://glasshouserecovery.com",
              "telephone": "410-970-3374",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Baltimore",
                "addressRegion": "MD",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "39.2904",
                "longitude": "-76.6122"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Baltimore"
                },
                {
                  "@type": "State", 
                  "name": "Maryland"
                }
              ],
              "serviceType": [
                "Mental Health Therapy",
                "Creative Therapy",
                "Trauma Therapy", 
                "Addiction Recovery",
                "Men's Mental Health"
              ],
              "medicalSpecialty": [
                "Psychiatry",
                "Psychology",
                "Mental Health Counseling"
              ],
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
              "currenciesAccepted": "USD",
              "openingHours": "Mo-Fr 09:00-17:00",
              "sameAs": [
                "https://www.psychologytoday.com/us/therapists/glass-house-recovery",
                "https://www.google.com/maps/place/glass-house-recovery"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What types of therapy do you offer for men?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Glass House Recovery specializes in creative therapy approaches for men including cognitive behavioral therapy (CBT), art therapy, music therapy, trauma-informed care, and evidence-based addiction recovery treatment."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Where is Glass House Recovery located?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Glass House Recovery is located in Old Ellicott City, Maryland, serving Baltimore, Columbia, Washington DC, and Annapolis areas. Call 410-970-3374 for directions and appointments."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you accept insurance for therapy sessions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Glass House Recovery accepts various insurance plans, cash, and credit card payments. Contact us at 410-970-3374 to verify your specific insurance coverage."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What should I expect in my first therapy session?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Your first session at Glass House Recovery includes a comprehensive assessment, discussion of your goals, and development of a personalized treatment plan using our creative, evidence-based approaches."
                  }
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Glass House Recovery",
              "employee": [
                {
                  "@type": "Person",
                  "name": "Dr. Sarah Johnson",
                  "jobTitle": "Clinical Director & Licensed Psychologist",
                  "hasCredential": [
                    {
                      "@type": "EducationalOccupationalCredential",
                      "credentialCategory": "Ph.D. in Clinical Psychology"
                    },
                    {
                      "@type": "EducationalOccupationalCredential", 
                      "credentialCategory": "Licensed Clinical Social Worker (LCSW)"
                    }
                  ],
                  "knowsAbout": ["Trauma Therapy", "Cognitive Behavioral Therapy", "Men's Mental Health", "Addiction Recovery"],
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Glass House Recovery"
                  }
                },
                {
                  "@type": "Person",
                  "name": "Dr. James Chen",
                  "jobTitle": "Addiction Specialist & Psychiatrist",
                  "hasCredential": [
                    {
                      "@type": "EducationalOccupationalCredential",
                      "credentialCategory": "M.D."
                    },
                    {
                      "@type": "EducationalOccupationalCredential",
                      "credentialCategory": "Board Certified Psychiatrist"
                    }
                  ],
                  "knowsAbout": ["Addiction Medicine", "Dual Diagnosis", "Medication Management", "Substance Abuse"],
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Glass House Recovery"
                  }
                },
                {
                  "@type": "Person",
                  "name": "Michael Rodriguez",
                  "jobTitle": "Lead Creative Therapist & Music Therapy Specialist",
                  "hasCredential": [
                    {
                      "@type": "EducationalOccupationalCredential",
                      "credentialCategory": "Board Certified Music Therapist (MT-BC)"
                    },
                    {
                      "@type": "EducationalOccupationalCredential",
                      "credentialCategory": "Licensed Creative Arts Therapist (LCAT)"
                    }
                  ],
                  "knowsAbout": ["Music Therapy", "Art Therapy", "Creative Expression", "Group Therapy"],
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Glass House Recovery"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}

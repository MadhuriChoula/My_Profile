import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: "Madhuri Choula",
    template: "%s | Madhuri Choula",
  },
  description: "Madhuri Choula | React.JS Full Stack Engineer",

  // Extended keywords for better SEO
  keywords: [
    // Name variations
    "Madhuri Choula",
    "Madhuri",
    "Choula",

    // Job titles
    "React.JS Full Stack Engineer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Node.js Developer",
    "AWS Developer",

    // Technologies
    "JavaScript",
    "React.js",
    "Redux",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "AWS Lambda",
    "SNS",
    "SQS",
    "CloudWatch",
    "Jenkins",
    "GitHub Actions",
    "CI/CD",
    "Jest",
    "Unit Testing",
    "ESLint",
    "SonarLint",

    // Skills
    "UI/UX Development",
    "State Management",
    "Event-Driven Architecture",
    "RESTful APIs",
    "Error Handling",
    "Production Support",
    "Agile",
    "Scrum",
    "TDD",
    "Code Reviews",

    // Location
    "Hyderabad",
    "India",
    "Durgam Cheruvu",

    // Services
    "Portfolio",
    "Resume",
    "Contact",
    "Education",
    "Experience",
  ].join(", "),

  authors: [
    {
      name: "Madhuri Choula",
      url: "https://your-portfolio-url",
    },
  ],
  creator: "Madhuri Choula",
  publisher: "Madhuri Choula",

  // Manifest
  manifest: "/manifest.json",

  // App-specific metadata
  applicationName: "Madhuri Choula Portfolio",

  // OpenGraph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url/",
    title: "Madhuri Choula | React.JS Full Stack Engineer",
    description:
      "React.JS Full Stack Engineer specializing in backend APIs, AWS serverless, and robust React UIs. Experienced in production support, error handling, and CI/CD.",
    siteName: "Madhuri Choula Portfolio",
    images: [
      {
        url: "https://your-portfolio-url/profile/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Madhuri Choula | React.JS Full Stack Engineer",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Madhuri Choula - React.JS Full Stack Engineer",
    description:
      "React.JS Full Stack Engineer specializing in backend APIs, AWS serverless, and robust React UIs. Experienced in production support, error handling, and CI/CD.",
    creator: "@madhurichoula_dev",
    images: ["https://madhurichoula.vercel.app/profile/profile.jpg"],
  },

  // Robots configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Base URL for relative URLs
  metadataBase: new URL("https://madhurichoula.vercel.app"),

  // Canonical URL
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data (JSON-LD) for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Madhuri Choula",
    alternateName: "Madhu Choula",
    url: "https://madhurichoula.vercel.app",
    image: "https://madhurichoula.vercel.app/profile/profile.jpg",
    sameAs: [
      "https://github.com/madhurichoula",
      "https://linkedin.com/in/madhuri-choula-535218329/",
    ],
    jobTitle: "AI/ML Engineer",
    worksFor: {
      "@type": "Organization",
      name: "State Street",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "USA",
      addressCountry: "US",
    },
    email: "madhurichoula12@gmail.com",
    telephone: "+919390032400",
    knowsAbout: [
      "AI/ML Engineering",
      "Machine Learning",
      "Python",
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
      "Deep Learning",
      "GenAI",
      "LLMs",
      "RAG",
      "LangChain",
      "Risk Analytics",
      "Fraud Detection",
      "Credit Modeling",
      "PySpark",
      "AWS",
      "Snowflake",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Missouri University of Science and Technology",
    },
  };

  return (
    <html lang="en" className={montserrat.className}>
      <head>
        {/* Favicons */}
        <link
          rel="shortcut icon"
          href="/profile/icon.png"
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href="/profile/icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/profile/icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/profile/icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/profile/icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="256x256"
          href="/profile/icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/profile/icon.png"
        />
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Additional meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Madhuri Choula Portfolio"
        />
      </head>
      <body>
        {/* Only use client components inside the body, not at the top level */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

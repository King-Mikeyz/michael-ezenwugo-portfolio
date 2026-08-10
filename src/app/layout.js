import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(
    "https://michael-ezenwugo-portfolio.vercel.app"
  ),

  title: {
    default:
      "Michael Ezenwugo | Frontend Developer",
    template:
      "%s | Michael Ezenwugo",
  },

  description:
    "Portfolio of Michael Ezenwugo, a Computer Science student and frontend developer building toward data science, artificial intelligence and machine learning.",

  applicationName:
    "Michael Ezenwugo Portfolio",

  authors: [
    {
      name: "Michael Ezenwugo",
    },
  ],

  creator: "Michael Ezenwugo",

  keywords: [
    "Michael Ezenwugo",
    "Frontend Developer",
    "Computer Science",
    "React",
    "JavaScript",
    "Data Science",
    "Artificial Intelligence",
    "Machine Learning",
    "Nigeria",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Michael Ezenwugo | Frontend Developer",

    description:
      "Frontend developer and Computer Science student building toward AI, machine learning and data science.",

    url: "/",

    siteName:
      "Michael Ezenwugo",

    locale: "en_NG",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Michael Ezenwugo | Frontend Developer",

    description:
      "Frontend developer and Computer Science student building toward AI, machine learning and data science.",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
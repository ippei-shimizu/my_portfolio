import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "清水 一平 Ippei Shimizu | Portfolio",
    template: "%s | 清水 一平 Ippei Shimizu | Portfolio",
  },
  description: "清水一平のポートフォリオサイトです。",
  openGraph: {
    title: "清水 一平 Ippei Shimizu | Portfolio",
    description: "清水一平のポートフォリオサイトです。",
    url: baseUrl,
    siteName: "清水 一平 Ippei Shimizu | Portfolio",
    locale: "ja_JP",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={cx(
        "text-[#fffffff5] bg-[#191919]",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <Script
      async src="https://www.googletagmanager.com/gtag/js?id=G-SVJD7NVLX8"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SVJD7NVLX8');
           `,
        }}
      />
      <body className="antialiased max-w-2xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}

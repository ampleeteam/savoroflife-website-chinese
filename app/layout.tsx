import { FacebookPixelEvents } from "@/components/analytics/FacebookPixelEvents";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MicrosoftClarity from "@/components/analytics/MicrosoftClarity";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { TiktokPixelEvents } from "@/components/analytics/TiktokPixelEvents";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Savor Restaurant",
    image:
      " https://www.savoroflife.com/_next/image?url=%2Flogo-savor-of-life.png&w=384&q=75",
    description:
      "Savor is a leading vegetarian restaurant in Kuala Lumpur, specializing in plant-based foods and health-focused meals.",
    servesCuisine: "Plant-Based, Vegetarian, Vegan",
    address: {
      "@type": "PostalAddress",
      streetAddress: "38G, Jalan 28/70A, Desa Sri Hartamas",
      addressLocality: "Kuala Lumpur",
      addressRegion: "Federal Territory of Kuala Lumpur",
      postalCode: "50480",
      addressCountry: "MY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "3.1694",
      longitude: "101.6501",
    },
    url: "https://www.savoroflife.com",
    telephone: "+601154306870",
    menu: "https://www.savoroflife.com/meals",
    priceRange: "RM 20 - RM 80",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "10:00",
        closes: "21:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
    acceptsReservations: "True",
    sameAs: [
      "https://www.facebook.com/savoroflife",
      "https://www.instagram.com/savoroflife",
      "https://www.tiktok.com/@savoroflife",
    ],
  };

  return (
    <html lang="cn">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              restaurantSchema,
            }),
          }}
        />
      </head>
      <Suspense>
        <GoogleAnalytics
          GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID as string}
        />
      </Suspense>
      <body className={inter.className}>
        <SpeedInsights />
        <NuqsAdapter>{children}</NuqsAdapter>
        <Suspense>
          <FacebookPixelEvents
            facebookPixelId={process.env.FACEBOOK_PIXEL_ID as string}
          />
        </Suspense>
        <Suspense>
          <MicrosoftClarity />
        </Suspense>
        <Suspense>
          <TiktokPixelEvents
            tiktokPixelId={process.env.TIKTOK_PIXEL_ID as string}
          />
        </Suspense>
      </body>
    </html>
  );
}

import About from "./components/About";
import EventsPage from "./components/EventsPage";
import Slider from "./components/Slider";
import { Metadata } from "next";
import Reviews from "@/components/reviews/Reviews";

const title =
  "Event Space KL: Restaurant Venue for Weddings, Corporate & Birthday Parties | Savor of Life";
const description =
  "Explore Savor’s premier event space in KL, perfect for weddings, corporate gatherings, and birthday parties. Situated in the heart of Kuala Lumpur, our restaurant venue offers stunning, versatile settings with exceptional plant-based cuisine. Secure your date now and make your next event unforgettable!";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/event-space`),
  title: title,
  description: description,
  alternates: {
    canonical: "/event-space",
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/event-space`,
    title: title,
    description: description,
    siteName: "Savor Of Life",
    images: [
      {
        url: "https://xkkoggplctunhruqhxlp.supabase.co/storage/v1/object/public/general/storefront-resized-50.png?t=2024-08-04T12%3A07%3A42.969Z",
        width: 1230,
        height: 630,
        alt: "Savor Of Life Kuala Lumpur",
      },
    ],
  },
};

export default async function EventSpace() {
  return (
    <div>
      <Slider />
      <About />
      <EventsPage />
      {/* <Dates /> */}
      <Reviews />
    </div>
  );
}

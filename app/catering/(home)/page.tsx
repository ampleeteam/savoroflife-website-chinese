import Slider from "./components/Slider";
import About from "./components/About";
import Gallery from "./components/Gallery";
import { Metadata } from "next";
import Reviews from "@/components/reviews/Reviews";

const title =
  "Vegan Catering KL: Plant-Based Catering Services for Weddings & Corporate Events | Savor of Life";
const description =
  "Delight your guests with exceptional vegan catering in Kuala Lumpur! Savor of Life offers bespoke plant-based menus for weddings, corporate events, and private parties. Choose our catering to enjoy diverse vegetarian and vegan food options crafted to please all palates. Book now to make your event a culinary success!";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/catering`),
  title: title,
  description: description,
  alternates: {
    canonical: "/catering",
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/catering`,
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

export default async function Catering() {
  return (
    <div>
      <Slider />
      <About />
      <Gallery />
      <Reviews />
    </div>
  );
}

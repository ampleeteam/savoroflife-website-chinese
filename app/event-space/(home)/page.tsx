import About from "./components/About";
import EventsPage from "./components/EventsPage";
import Slider from "./components/Slider";
import { Metadata } from "next";
import Reviews from "@/components/reviews/Reviews";
import SubscribeNewsletter from "@/components/SubscribeNewsletter";

const title = "吉隆坡活动场地：婚礼、公司与生日派对的餐厅场所 | Savor of Life";
const description =
  "探索 Savor 在吉隆坡的高级活动空间，完美适用于婚礼、公司聚会和生日派对。坐落于吉隆坡市中心，我们的餐厅场地提供优雅多变的环境与卓越的植物性料理。立即预订，让您的下一场活动难以忘怀！";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/event-space`),
  title: title,
  description: description,
  alternates: {
    canonical: "/event-space",
  },
  openGraph: {
    type: "website",
    locale: "cn_MY",
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
      <SubscribeNewsletter />
    </div>
  );
}

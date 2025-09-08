import Slider from "./components/Slider";
import About from "./components/About";
import Gallery from "./components/Gallery";
import { Metadata } from "next";
import Reviews from "@/components/reviews/Reviews";

const title = "吉隆坡纯素餐饮：婚礼与公司活动的植物性餐饮服务 | Savor of Life";
const description =
  "用卓越的纯素餐饮款待您的宾客！Savor of Life 在吉隆坡为婚礼、公司活动及私人派对提供量身定制的植物性菜单。选择我们的餐饮服务，享受多样的素食与纯素料理，满足所有人的味蕾。立即预订，让您的活动成为美食盛宴！";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/catering`),
  title: title,
  description: description,
  alternates: {
    canonical: "/catering",
  },
  openGraph: {
    type: "website",
    locale: "cn_MY",
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

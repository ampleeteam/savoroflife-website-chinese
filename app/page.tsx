import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/navbar/NavBar";
import { Metadata } from "next";
import Hero from "./components/Hero";
import MainMenu from "./components/MainMenu";
import SavorIntroduction from "./components/SavorIntroduction";
import SocialMedia from "./components/SocialMedia";
import WhatPeopleSaid from "./components/WhatPeopleSaid";
import { getMenuByCluster } from "@/services/menu";
import SubscribeNewsletter from "@/components/SubscribeNewsletter";

const title = "探索吉隆坡的植物性、纯素与素食美食 | Savor of Life";
const description =
  "发现 Savor，这家位于吉隆坡的植物性饮食先锋。我们的菜单以创意方式呈现纯素与素食料理，满足各种口味。非常适合追求可持续与健康饮食的人士。在您身边体验最精致的植物性美食。今天就来享用一顿既营养又美味的餐点吧！";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/`),
  title: title,
  description: description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "cn_MY",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
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

export default async function Home() {
  const starters = await getMenuByCluster("Starters");
  const western = await getMenuByCluster("Western");
  const asian = await getMenuByCluster("Asian");
  const breakfast = await getMenuByCluster("Breakfast");
  const drinks = await getMenuByCluster("Drinks");
  const desserts = await getMenuByCluster("Desserts");
  const kids = await getMenuByCluster("Kids Menu");

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main>
        <Hero />
        <SavorIntroduction />
        <MainMenu
          allMenu={{
            前菜: starters,
            西式: western,
            亚洲风味: asian,
            早餐: breakfast,
            饮品: drinks,
            甜品: desserts,
            儿童菜单: kids,
          }}
        />
        <SocialMedia />
        <WhatPeopleSaid />
        <SubscribeNewsletter />
      </main>
      <Footer />
    </div>
  );
}

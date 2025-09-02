import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/navbar/NavBar";
import { Metadata } from "next";
import AsFeaturedOn from "./components/AsFeaturedOn";
import BestSeller from "./components/BestSeller";
import Hero from "./components/Hero";
import MainMenu from "./components/MainMenu";
import SavorIntroduction from "./components/SavorIntroduction";
import SocialMedia from "./components/SocialMedia";
import WhatPeopleSaid from "./components/WhatPeopleSaid";
import { getMenuByCluster } from "@/services/menu";

const title =
  "Explore Plant-Based, Vegan & Vegetarian Cuisine in Kuala Lumpur | Savor of Life";
const description =
  "Discover Savor, a pioneer in plant-based dining in Kuala Lumpur. Our menu features creatively crafted vegan and vegetarian dishes that appeal to all palates. Perfect for anyone seeking sustainable and health-conscious dining options. Experience the finest plant-based cuisine near you. Visit us today for a meal that's as nutritious as it is delicious!";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/`),
  title: title,
  description: description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
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
        <BestSeller />
        <SocialMedia />
        <WhatPeopleSaid />
        <AsFeaturedOn />
      </main>
      <Footer />
    </div>
  );
}

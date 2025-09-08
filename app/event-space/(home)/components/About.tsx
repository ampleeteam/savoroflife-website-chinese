"use client";
import React from "react";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  const handleClickCatalog = async () => {
    const destination =
      "https://xkkoggplctunhruqhxlp.supabase.co/storage/v1/object/public/menu-file/Event%20Space%20Catalogue.pdf";
    window.open(destination, "_blank");
  };

  return (
    <div className="md:min-h-[100vh] bg-[#D9D9D9] lg:px-[15%] grid lg:grid-cols-2 items-center justify-center">
      <div className="py-10 max-lg:px-10">
        <div className="lg:w-[75%]">
          <h2 className="text-4xl mb-8 font-semibold md:text-5xl lg:text-4xl">
            Savor 活动空间
          </h2>
          <div className="flex flex-col gap-5 md:gap-10 lg:gap-5">
            <p>
              用 Savor
              多功能且时尚的场地，为您的活动增添格调。我们位于吉隆坡市中心的黄金地段，为您打造难忘的体验。
              场地可容纳超过 100 位宾客，灵活空间满足各种场合的需求。
            </p>
            <p>
              我们可承办： 无桌椅：最多 120 位宾客 带桌椅：最多 70 位宾客
              仅椅子：最多 100 位宾客
            </p>
            <p>
              无论您筹划的是企业活动、私人派对、婚礼，还是其他特别庆典，Savor
              都能为您提供量身定制的菜单与实惠的方案，满足您的需求。
            </p>
            <p>
              场地周边设有充足停车位，宾客可轻松抵达，尽享我们优质的活动空间。
              在 Savor，开启您完美聚会的理想场所。
            </p>
          </div>

          <div className="flex flex-row max-md:grid gap-2 mt-[50px]">
            <Link
              href="https://www.savoroflife.com/event-space/book"
              className="bg-[#223733] font-bold text-center text-[#F5C4B0] w-[50%] max-md:w-full py-1.5 rounded-full text-sm hover:bg-[#F5C4B0] hover:text-[#223733] hover:shadow-md hover:shadow-[#F5C4B0] hover:font-bold"
            >
              立即预订
            </Link>
            <button
              onClick={handleClickCatalog}
              className="bg-[#223733] font-bold text-[#F5C4B0] w-[50%] max-md:w-full py-1.5 rounded-full text-sm hover:bg-[#F5C4B0] hover:text-[#223733] hover:shadow-md hover:shadow-[#F5C4B0] hover:font-bold"
            >
              下载菜单
            </button>
          </div>
        </div>
      </div>
      <AspectRatio ratio={6 / 10.5}>
        <iframe
          src="https://www.youtube.com/embed/skV6FzBcjiE?si=kxjJQTF0M3Q_kC7x"
          className="w-full h-full"
          allowFullScreen
        />
      </AspectRatio>
    </div>
  );
};

export default About;

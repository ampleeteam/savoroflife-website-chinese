"use client";
import React from "react";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  const handleClickCatalog = async () => {
    window.open(
      "https://xkkoggplctunhruqhxlp.supabase.co/storage/v1/object/public/menu-file/Savor%20Catering%20Catalogue.pdf?t=2024-10-24T02%3A41%3A17.345Z"
    );
  };

  return (
    <div className="grid gap-[40px] md:gap-[100px] lg:grid-cols-2 items-center justify-center md:min-h-[100vh] bg-[#F5C4B0] lg:px-[15%]">
      <div className="text-[#223733] py-[50px] px-10 md:px-0 md:py-7">
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold">
          Savor 餐饮服务
        </h2>
        <div className="space-y-4 mt-10">
          <p>
            Savor 餐饮服务是您理想的合作伙伴，为任何场合量身打造难忘的美食体验。
          </p>
          <p>
            无论您正在筹划企业活动、婚礼、生日庆典或任何特别聚会，我们的餐饮服务都旨在以卓越的风味与呈现方式，提升您的活动品质。
          </p>
          <p>
            我们的专业厨师会根据您的喜好与饮食需求定制菜单，确保为您和宾客带来愉快而满足的用餐体验。
          </p>
          <p>
            从高雅的企业宴会到温馨的私人聚会，Savor
            宴会餐饮将我们的植物性料理精髓带到您的活动中，让味蕾与记忆都留下深刻的印象。
          </p>
          <p>
            让我们为您打造一段反映您独特场合的美食之旅，使其真正特别而难忘。
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link
            href="https://www.savoroflife.com/catering/book"
            className="bg-[#223733] font-bold text-[#F5C4B0] text-center w-full sm:w-1/2 py-2 rounded-full text-sm hover:bg-white hover:text-[#F5C4B0] hover:shadow-md transition-all duration-300"
          >
            立即预订
          </Link>
          <button
            onClick={handleClickCatalog}
            className="bg-[#223733] font-bold text-[#F5C4B0] w-full sm:w-1/2 py-2 rounded-full text-sm hover:bg-white hover:text-[#F5C4B0] hover:shadow-md transition-all duration-300"
          >
            下载菜单
          </button>
        </div>
      </div>
      <AspectRatio ratio={6 / 10.5}>
        <iframe
          src="https://www.youtube.com/embed/hteFS0EjKRg?si=Dm_koMbrrGvZi_iY"
          className="w-full h-full"
          allowFullScreen
        />
      </AspectRatio>
    </div>
  );
};

export default About;

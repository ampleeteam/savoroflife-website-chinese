"use client";
import Link from "next/link";

const SavorIntroductionViewMenu = () => {
  return (
    <Link href="/#restaurant-menu">
      <div className=" w-[140px] justify-center self-start px-5 py-1.5 mt-8 text-center text-orange-200 bg-gray-800 rounded-[50px] max-md:px-5 max-md:mt-10">
        查看菜单
      </div>
    </Link>
  );
};

export default SavorIntroductionViewMenu;

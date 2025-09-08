"use client";
import { menuNameVariants } from "@/types/menu";
import Link from "next/link";
import React from "react";

function MenuSelection({
  menuVariant,
  handleButtonClick,
}: {
  menuVariant: string;
  handleButtonClick: (menuVariant: string) => void;
}) {
  return (
    <div className="text-xs flex flex-wrap justify-between max-md:justify-normal max-md:grid max-md:place-items-center gap-5 my-12 text-xl font-bold text-center text-gray-800 max-md:mt-10 max-md:max-w-full">
      {menuNameVariants.map((menuName, index) => (
        <React.Fragment key={index}>
          <button
            className={`justify-center bg-GoldenChocolateColour text-DarkGreenColour hover:bg-white xl:text-[20px] items-center w-[14vw] lg:text-[13px] max-md:w-[70%] h-[40px] md:h-[30px] lg:h-[40px] whitespace-nowrap rounded-[50px] max-md:px-5 border-2
      ${menuVariant === menuName ? "bg-white border-GoldenChocolateColour border-3" : "border-none"}`}
            onClick={() => {
              handleButtonClick(menuName);
            }}
          >
            {menuName}
          </button>
        </React.Fragment>
      ))}
      <Link
        className={`bg-GoldenChocolateColour text-DarkGreenColour hover:bg-white xl:text-[20px] pt-[11px] md:pt-2 lg:pt-[11px] items-center w-[14vw] lg:text-[13px] max-md:w-[70%] h-[40px] md:h-[30px] lg:h-[40px] whitespace-nowrap rounded-[50px] max-md:px-5`}
        href={process.env.NEXT_PUBLIC_SAVOR_MENU_DOWNLOAD_URL || "/"}
        target="_blank"
      >
        <div>下载菜单</div>
      </Link>
    </div>
  );
}

export default MenuSelection;

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { getNavTextColor } from "@/lib/url";
import Image from "next/image";

const NavOptionsWeb = () => {
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <div className="hidden lg:block">
      <nav className="flex items-center space-x-4 lg:space-x-5">
        <Link
          href="/event-space"
          className={`text-sm ${getNavTextColor(currentPath, "/event-space")} font-bold`}
        >
          活动空间
        </Link>
        <Link
          href="/catering"
          className={`text-sm ${getNavTextColor(currentPath, "/catering")} font-bold`}
        >
          餐饮服务
        </Link>{" "}
        <Link
          href="https://www.savoroflife.com/reservations"
          target="_blank"
          className={`text-sm ${getNavTextColor(currentPath, "/reservations")} font-bold`}
        >
          预订
        </Link>{" "}
        <Link
          href="https://store.savoroflife.com/"
          className={`text-sm font-bold ${getNavTextColor(currentPath, "https://store.savoroflife.com/")} cursor-pointer flex gap-2`}
        >
          Savor 市场{" "}
          <Image src="/market.png" alt="Market" width={30} height={25} />
        </Link>
      </nav>
    </div>
  );
};

export default NavOptionsWeb;

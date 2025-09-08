"use client";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { getNavTextColor } from "@/lib/url";

const NavOptionsMobile = () => {
  const currentPath = usePathname();
  const [showMenuSheet, setShowMenuSheet] = useState<boolean>(false);

  return (
    <div className="sm:inline lg:hidden">
      <nav className="flex flex-row space-x-4 text-white">
        <Sheet open={showMenuSheet} onOpenChange={setShowMenuSheet}>
          <SheetTrigger>
            <Menu className="pl-1 text-xl" />
          </SheetTrigger>
          <SheetContent className="flex flex-col w-full bg-[#223733] text-center pt-[80px] gap-10">
            <div>
              <Link
                href="/event-space"
                className={`text-xl ${getNavTextColor(currentPath, "/event-space")} font-bold`}
                prefetch={true}
              >
                活动空间
              </Link>
            </div>
            <div>
              <Link
                href="/catering"
                className={`text-xl ${getNavTextColor(currentPath, "/catering")} font-bold`}
                prefetch={true}
              >
                餐饮服务
              </Link>
            </div>
            <div>
              <Link
                href="https://www.savoroflife.com/reservations"
                target="_blank"
                className={`text-xl ${getNavTextColor(currentPath, "/reservations")} font-bold`}
              >
                预订
              </Link>{" "}
            </div>
            <div className="flex justify-center gap-3">
              <Link
                href="https://store.savoroflife.com/"
                className={`text-xl text-white font-bold`}
                prefetch={true}
              >
                Savor 市场{" "}
              </Link>
              <Image src="/market.png" alt="Market" width={40} height={25} />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default NavOptionsMobile;

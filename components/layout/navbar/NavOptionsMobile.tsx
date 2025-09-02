"use client";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { getNavTextColor, url10DaysHealthChallenge } from "@/lib/url";

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
          <SheetContent className="flex flex-col w-full bg-[#223733] text-center pt-[80px]">
            <Separator className="my-2" />
            <div>
              <Link
                href="/about"
                className={`text-sm ${getNavTextColor(currentPath, "/about")} font-bold`}
                prefetch={true}
              >
                About
              </Link>
            </div>
            <div className="flex justify-center gap-3">
              <Link
                href="https://store.savoroflife.com/"
                className={`text-sm text-white font-bold`}
                prefetch={true}
              >
                Savor Market{" "}
              </Link>
              <Image src="/market.png" alt="Market" width={30} height={25} />
            </div>
            <div>
              <Link
                href={url10DaysHealthChallenge}
                className={`text-sm ${getNavTextColor(currentPath, "/transform")} font-bold`}
                prefetch={true}
              >
                10-Day Health Challenge
              </Link>
            </div>
            <div>
              <Link
                href="/event-space"
                className={`text-sm ${getNavTextColor(currentPath, "/event-space")} font-bold`}
                prefetch={true}
              >
                Event Space
              </Link>
            </div>
            <div>
              <Link
                href="/catering"
                className={`text-sm ${getNavTextColor(currentPath, "/catering")} font-bold`}
                prefetch={true}
              >
                Catering
              </Link>
            </div>
            <div>
              <Link
                href="https://www.savoroflife.com/reservations"
                target="_blank"
                className={`text-sm ${getNavTextColor(currentPath, "/reservations")} font-bold`}
                prefetch={true}
              >
                Reservations
              </Link>
            </div>
            <div>
              <Link
                href="/contact"
                className={`text-sm ${getNavTextColor(currentPath, "/contact")} font-bold`}
                prefetch={true}
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default NavOptionsMobile;

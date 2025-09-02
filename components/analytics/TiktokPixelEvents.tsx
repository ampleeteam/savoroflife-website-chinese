"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const TiktokPixelEvents = ({
  tiktokPixelId,
}: {
  tiktokPixelId: string;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    import("tiktok-pixel")
      .then((x) => x.default)
      .then((TiktokPixel) => {
        TiktokPixel.init(tiktokPixelId); //don't forget to change this
      });
  }, [pathname, searchParams]);

  return null;
};

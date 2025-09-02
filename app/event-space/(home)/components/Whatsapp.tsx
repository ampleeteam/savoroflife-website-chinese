import React from "react";
import Image from "next/image";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

const side = "bottom";

const Whatsapp = () => {
  return (
    <Sheet key={side}>
      <SheetTrigger asChild>
        <Image
          src="/event-space/WhatsApp_icon.png"
          width={70}
          height={70}
          alt="whatsapp"
          className="cursor-pointer hover:animate-bounce md:hidden"
        />
      </SheetTrigger>
    </Sheet>
  );
};

export default Whatsapp;

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
            Savor Event Space
          </h2>
          <div className="flex flex-col gap-5 md:gap-10 lg:gap-5">
            <p>
              Elevate your events with Savor&apos;s versatile and stylish space.
              Our prime location in the heart of Kuala Lumpur sets the stage for
              a memorable experience. Designed to accommodate over 100 guests,
              our venue offers the perfect setting for various occasions,
              providing flexibility to fit your needs.
            </p>
            <p>
              We can host up to 120 guests without tables and chairs, 70 guests
              with tables and chairs, and 100 guests with chairs only.
            </p>
            <p>
              Whether you&apos;re planning a corporate function, private party,
              wedding, or any other special event, Savor offers tailored food
              menus and budget-friendly options to suit your needs.
            </p>
            <p>
              With ample parking nearby, your guests will enjoy convenient
              access to our exceptional venue. Unlock the perfect setting for
              your gatherings at Savor.
            </p>
          </div>

          <div className="flex flex-row max-md:grid gap-2 mt-[50px]">
            <Link
              href="/event-space/book"
              className="bg-[#223733] font-bold text-center text-[#F5C4B0] w-[50%] max-md:w-full py-1.5 rounded-full text-sm hover:bg-[#F5C4B0] hover:text-[#223733] hover:shadow-md hover:shadow-[#F5C4B0] hover:font-bold"
            >
              Reserve Now
            </Link>
            <button
              onClick={handleClickCatalog}
              className="bg-[#223733] font-bold text-[#F5C4B0] w-[50%] max-md:w-full py-1.5 rounded-full text-sm hover:bg-[#F5C4B0] hover:text-[#223733] hover:shadow-md hover:shadow-[#F5C4B0] hover:font-bold"
            >
              Download Catalog
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

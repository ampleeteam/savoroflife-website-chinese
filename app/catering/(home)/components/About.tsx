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
          Savor Catering
        </h2>
        <div className="space-y-4 mt-10">
          <p>
            Savor Catering is your ideal partner for creating unforgettable
            culinary experiences tailored to any occasion.
          </p>
          <p>
            Whether you&apos;re planning a corporate event, wedding, birthday
            celebration, or any special gathering, our catering services are
            designed to elevate your event with exceptional flavors and
            presentation.
          </p>
          <p>
            Our expert chefs customize menus that complement your preferences
            and dietary requirements, ensuring a delightful and satisfying
            dining experience for you and your guests.
          </p>
          <p>
            From stylish corporate affairs to intimate celebrations, Savor
            Catering brings the essence of our plant-based cuisine to your
            event, leaving a lasting impression on taste buds and memories
            alike.
          </p>
          <p>
            Let us craft a culinary journey that reflects the uniqueness of your
            occasion, making it truly special and memorable.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link
            href="/catering/book"
            className="bg-[#223733] font-bold text-[#F5C4B0] text-center w-full sm:w-1/2 py-2 rounded-full text-sm hover:bg-white hover:text-[#F5C4B0] hover:shadow-md transition-all duration-300"
          >
            Book Now
          </Link>
          <button
            onClick={handleClickCatalog}
            className="bg-[#223733] font-bold text-[#F5C4B0] w-full sm:w-1/2 py-2 rounded-full text-sm hover:bg-white hover:text-[#F5C4B0] hover:shadow-md transition-all duration-300"
          >
            Download Catalog
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

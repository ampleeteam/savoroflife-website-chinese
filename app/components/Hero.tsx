"use client";
import { shimmer, toBase64 } from "@/lib/image-utils";
import Image from "next/image";
import React from "react";
import Whatsapp from "../event-space/(home)/components/Whatsapp";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      image: "/landing/Hero_1.webp",
      title: "Card 1",
      description: "Info which directs to the other page.",
    },
    {
      image: "/landing/Hero_2.webp",
      title: "Card 3",
      description: "Info which directs to the other page.",
    },
    {
      image: "/landing/Hero_3.webp",
      title: "Card 2",
      description: "Info which directs to the other page.",
    },
    {
      image: "/landing/Hero_4.webp",
      title: "Card 4",
      description: "Info which directs to the other page.",
    },
  ];

  const handleClick = async () => {
    const destination = `https://wa.me/601154306870`;
    window.open(destination);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };
  if (currentIndex > cards.length) {
    setCurrentIndex(0);
  }

  return (
    <div className="flex justify-center overflow-hidden relative flex-col px-20 pt-20 pb-[9vh] max-md:pb-[5vh] font-semibold text-white h-screen max-md:px-10">
      {cards.slice(currentIndex, currentIndex + 1).map((card, index) => (
        <Image
          key={index}
          src={card.image}
          width={1600}
          height={900}
          alt="Savor of Life Kuala Lumpur"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover max-md:object-cover"
          placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(1600, 900))}`}
        />
      ))}
      <div className="flex items-center min-h-screen">
        <div className="md:w-[60vw] lg:w-[25vw] text-white">
          <div className="relative mb-2 text-3xl font-bold text-shadow-lg shadow-black">
            Savor 餐厅
          </div>
          <div className="relative mb-4 font-semibold text-shadow text-lg shadow-black">
            在
            Savor，我们致力于呈现纯素料理的独特魅力，不断突破味觉与创意的界限。
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              href="https://www.savoroflife.com/reservations"
              className="relative flex gap-1.5 justify-center items-center px-3 py-2 md:w-1/2 bg-[#F5C4B0] hover:bg-white text-primary transform-gpu transition-all duration-500 hover:scale-105 rounded-full drop-shadow-md"
            >
              <button className="flex gap-1">预订</button>
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_SAVOR_MENU}`}
              className="relative flex gap-1.5 justify-center items-center px-3 py-2 md:w-1/2 bg-white text-primary transform-gpu transition-transform duration-500 hover:scale-105 rounded-full drop-shadow-md"
              target="_blank"
            >
              <button className="flex gap-1">查看菜单</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative bottom-14 flex justify-center gap-2">
        <ChevronLeft
          size={35}
          strokeWidth={2}
          color="white"
          className="cursor-pointer"
          onClick={handlePrev}
        />
        <ChevronRight
          size={35}
          strokeWidth={2}
          color="white"
          className="cursor-pointer"
          onClick={handleNext}
        />
      </div>

      <div
        className="flex justify-end gap-5 max-w-full text-xl pb-6 px-4 md:pb-0"
        onClick={handleClick}
      >
        <div className="fixed bottom-6 right-4 z-50 md:right-auto md:left-[75%]">
          <Whatsapp />
        </div>
        <div className="fixed bottom-8 right-5 z-50 hidden md:block lg:right-auto lg:left-[82%]">
          <Image
            src="/home/whatsapp.png"
            width={160}
            height={50}
            alt="whatsapp"
            className="cursor-pointer hover:animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

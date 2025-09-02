"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { images } from "@/utils/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Whatsapp from "./Whatsapp";
import { useRouter } from "next/navigation";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);
  const router = useRouter();

  const handleClick = async () => {
    const destination = "/event-space/book";
    router.push(destination);
  };

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div>
      <div className="w-full relative md:p-0 ">
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage ? "w-full object-cover" : "hidden"
            }`}
          >
            <div
              className="relative bg-cover h-screen bg-center bg-no-repeat text-left"
              style={{
                backgroundImage: `url(${elem.src})`,
              }}
            >
              <div
                className="flex items-center absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed px-7"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div
                  className="fixed inset-x-0 bottom-0 z-50 ml-[75%] mb-6 px-4"
                  onClick={handleClick}
                >
                  <Whatsapp />
                </div>
                <div
                  className="fixed inset-x-0 bottom-0 right-1 z-50 ml-[82%] mb-8 px-5"
                  onClick={handleClick}
                >
                  <Image
                    src="/event-space/whatsapp.png"
                    width={160}
                    height={50}
                    alt="whatsapp"
                    className="hidden cursor-pointer hover:animate-bounce md:block"
                  />
                </div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <div className="text-white w-[290px] md:w-[600px] md:px-10">
                    <h2 className="mb-2 text-3xl font-bold text-shadow-lg shadow-black">
                      {elem.title}
                    </h2>
                    <p className="mb-4 font-semibold text-shadow text-lg shadow-black">
                      Elevate your events with Savor&apos;s versatile and
                      stylish space. Our prime location in the heart of Kuala
                      Lumpur sets the stage for a memorable experience.
                    </p>
                  </div>
                </motion.div>
                <div className="absolute bottom-10 flex flex-row ml-[36%] md:ml-[45%]">
                  <div onClick={clickPrev}>
                    <ChevronLeft
                      size={30}
                      className="cursor-pointer hover:animate-bounce text-white"
                    />
                  </div>
                  <div onClick={clickNext}>
                    <ChevronRight
                      size={30}
                      className="cursor-pointer hover:animate-bounce text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { events } from "@/utils/constants";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const EventsPage = () => {
  const [activeEvent, setActiveEvent] = useState(0);

  const clickNext = () => {
    activeEvent === events.length - 1
      ? setActiveEvent(0)
      : setActiveEvent(activeEvent + 1);
  };
  const clickPrev = () => {
    activeEvent === 0
      ? setActiveEvent(events.length - 1)
      : setActiveEvent(activeEvent - 1);
  };

  const handleClick = () => {
    setActiveEvent(0);
  };

  const handleClick2 = () => {
    setActiveEvent(1);
  };

  const handleClick3 = () => {
    setActiveEvent(2);
  };

  const handleClick4 = () => {
    setActiveEvent(3);
  };

  const handleClick5 = () => {
    setActiveEvent(4);
  };

  return (
    <div className="mb-10">
      {events.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeEvent ? "w-full object-cover" : "hidden"
          }`}
        >
          <div className="grid px-10 pt-10 w-full h-full text-center">
            <div className="grid md:grid-cols-1 lg:flex lg:flex-col lg:px-[10%]">
              <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <button
                  onClick={handleClick}
                  className={`my-1 mx-5 rounded-full w-[215px] py-1.5 font-bold text-sm text-[#7F7F7F] ring-1 ring-[#7F7F7F] hover:bg-gray-800 ${activeEvent === 0 ? "bg-gray-800" : "bg-white"} md:mx-10 md:my-3`}
                >
                  Corporate Events
                </button>
                <button
                  onClick={handleClick2}
                  className={`my-1 mx-5 rounded-full w-[215px] py-1.5 font-bold text-sm text-[#7F7F7F] ring-1 ring-[#7F7F7F] hover:bg-gray-800 ${activeEvent === 1 ? "bg-gray-800" : "bg-white"} md:mx-10 md:my-3`}
                >
                  Weddings
                </button>
                <button
                  onClick={handleClick3}
                  className={`my-1 mx-5 rounded-full w-[215px] py-1.5 font-bold text-sm text-[#7F7F7F] ring-1 ring-[#7F7F7F] hover:bg-gray-800 ${activeEvent === 2 ? "bg-gray-800" : "bg-white"} md:mx-10 md:my-3`}
                >
                  Birthday Parties
                </button>
                <button
                  onClick={handleClick4}
                  className={`my-1 rounded-full w-[215px] py-1.5 font-bold text-sm text-[#7F7F7F] ring-1 ring-[#7F7F7F] hover:bg-gray-800 ${activeEvent === 3 ? "bg-gray-800" : "bg-white"} md:mx-10 md:my-0`}
                >
                  Seminars and Workshops
                </button>
                <button
                  onClick={handleClick5}
                  className={`my-1 rounded-full w-[215px] py-1.5 font-bold text-sm text-[#7F7F7F] ring-1 ring-[#7F7F7F] hover:bg-gray-800 ${activeEvent === 4 ? "bg-gray-800" : "bg-white"} md:mx-10 md:mt-3`}
                >
                  Special Occassions
                </button>
              </motion.div>
            </div>
            <div className="h-[200px] md:h-[140px] grid items-center">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="font-semibold text-2xl mt-5">{elem.title}</h2>
                <p className="font-semibold text-sm mt-5 w-[90%] mx-auto md:w-[50%]">
                  {elem.desc}
                </p>
              </motion.div>
            </div>
          </div>
          <div className="my-4 grid justify-center">
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="grid grid-cols-1 gap-4 p-4 md:flex flex-row md:ml-0">
                <Image
                  src={elem.img1}
                  alt="events (1)"
                  className="rounded-xl shadow-xl h-[200px]"
                  width={300}
                  height={200}
                />
                <Image
                  src={elem.img2}
                  alt="events (2)"
                  className="rounded-xl shadow-xl h-[200px]"
                  width={300}
                  height={200}
                />
              </div>
            </motion.div>
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.75 }}
            >
              <div className="grid grid-cols-1 px-4 gap-4 md:flex flex-row md:ml-0">
                <Image
                  src={elem.img3}
                  alt="events (3)"
                  className="rounded-xl shadow-xl h-[200px]"
                  width={300}
                  height={200}
                />
                <Image
                  src={elem.img4}
                  alt="events (4)"
                  className="rounded-xl shadow-xl h-[200px]"
                  width={300}
                  height={200}
                />
              </div>
            </motion.div>
          </div>
          <div className="mt-10 justify-center flex">
            <div onClick={clickPrev}>
              <ChevronLeft
                size={30}
                className="cursor-pointer hover:animate-bounce"
              />
            </div>
            <div onClick={clickNext}>
              <ChevronRight
                size={30}
                className="cursor-pointer hover:animate-bounce"
              />
            </div>
          </div>
          {/* <div className="inline-flex items-center justify-center w-full">
            <hr className="w-80 h-1 mt-10 bg-gray-300" />
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default EventsPage;

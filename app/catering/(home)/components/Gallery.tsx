"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gallery } from "@/utils/constantsCatering";

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

const Gallery = () => {
  return (
    <div className="flex flex-col md:gap-5 justify-center items-center text-center min-h-[100vh] py-[60px]">
      <h2 className="font-bold text-4xl">Gallery</h2>
      <div className="mt-5 grid justify-center">
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.5 }}
        >
          <div className="grid grid-cols-1 gap-4 p-4 md:flex flex-row md:ml-0">
            <Image
              src={gallery.img1}
              alt="gallery (1)"
              className="rounded-xl shadow-xl h-[180px]"
              width={300}
              height={200}
            />
            <Image
              src={gallery.img2}
              alt="gallery (2)"
              className="rounded-xl shadow-xl h-[180px]"
              width={300}
              height={200}
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.75 }}
        >
          <div className="grid grid-cols-1 p-4 gap-4 md:flex flex-row md:ml-0">
            <Image
              src={gallery.img3}
              alt="gallery (3)"
              className="rounded-xl shadow-xl h-[180px]"
              width={300}
              height={200}
            />
            <Image
              src={gallery.img4}
              alt="gallery (4)"
              className="rounded-xl shadow-xl h-[180px]"
              width={300}
              height={200}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;

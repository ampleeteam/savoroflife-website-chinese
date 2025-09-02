"use client";
import Image from "next/image";
import React from "react";
function CustomerReview() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      image: "/landing/Customer_review_1.png",
      title: "Card 1",
      description: "Info which directs to the other page.",
    },
    {
      image: "/landing/Customer_review_2.png",
      title: "Card 2",
      description: "Info which directs to the other page.",
    },
    {
      image: "/landing/Customer_review_3.png",
      title: "Card 3",
      description: "Info which directs to the other page.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length,
    );
  };
  if (currentIndex > cards.length) {
    setCurrentIndex(0);
  }

  return (
    <div className="justify-center pt-5 items-center px-16 lg:py-20 max-md:px-5 max-md:pt-[30px] max-md:pb-[30px] bg-DarkGreenColour">
      <p className="justify-center text-white text-center font-bold text-2xl">
        Customer Reviews
      </p>
      <div className="mt-16 max-md:mt-0 w-full max-md:max-w-full">
        <div className="flex gap-5 justify-center w-full max-md:flex-col  max-md:gap-0">
          <div className="hidden max-md:flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            {cards.slice(currentIndex, currentIndex + 1).map((card, index) => (
              <Image
                width={350}
                height={150}
                alt="Description of the image"
                loading="lazy"
                key={index}
                src={card.image}
                className="grow w-full shadow-sm aspect-[0.53] max-md:mt-10"
              />
            ))}
          </div>
          <div className="xl:flex xl:justify-center max-md:hidden md:flex md:justify-center">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <Image
                width={250}
                height={650}
                alt="Description of the image"
                loading="lazy"
                src="/landing/Customer_review_1.png"
                className="grow w-full shadow-sm aspect-[0.53] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <Image
                width={250}
                height={600}
                alt="Description of the image"
                loading="lazy"
                src="/landing/Customer_review_2.png"
                className="grow w-full shadow-sm  max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <Image
                width={250}
                height={650}
                alt="Description of the image"
                loading="lazy"
                src="/landing/Customer_review_3.png"
                className="w-full shadow-sm aspect-[0.6] max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center text-white">
          <div className="flex gap-5 justify-between mt-10 max-md:mt-5 w-auto">
            <button className="self-end " onClick={handlePrev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="max-md:w-10 max-md:h-10 w-8 h-8 md:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button className="self-end " onClick={handleNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="max-md:w-10 max-md:h-10 w-8 h-8 md:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReview;

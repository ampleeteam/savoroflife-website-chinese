"use client";
import Image from "next/image";
import React from "react";

function BestSeller() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      image: "/landing/BestSeller_1.png",
      title: "Savor Signature Sarawak Laksa",
      description:
        "  Immerse yourself in the delights of our laksa featuring fried shimeji mushrooms, tofu puffs, an array of vegetables, fresh coriander, and zesty calamansi, all served with laksa noodles in a mild, spicy vegetable broth.",
    },
    {
      image: "/landing/BestSeller_2.png",
      title: "Swiss Shroom Burger",
      description:
        "A Swiss mushroom sensation featuring our homemade plant-based patty, luscious cheese sauce, all nestled within a hearty wholemeal bun.",
    },
    {
      image: "/landing/BestSeller_3.png",
      title: "Shroomy Zoomy Bread Bowl",
      description:
        "Swiss button, oyster, and shiitake mushrooms meet in a creamy blend with chervil and infused green oil, all nestled in a rustic bread bowl. Elevate your experience with a truffle indulgence for just RM4",
    },
    {
      image: "/landing/BestSeller_4.png",
      title: "Savor's Silky Decadence",
      description:
        "Immerse yourself in a luxurious treat featuring silken tofu, rich dark chocolate, plant-based milk, brown suger, cocoa powder, accompanied by tangy gooseberries.",
    },
  ];

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
    <div className="flex flex-col items-center px-16 pt-20 pb-12 bg-orange-200 max-md:px-5">
      <div className="flex flex-col items-center max-w-full w-[948px]">
        <div className="text-4xl font-bold text-center text-gray-800">
          Best Sellers
        </div>

        <div className="self-stretch mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              {cards
                .slice(currentIndex, currentIndex + 1)
                .map((card, index) => (
                  <Image
                    key={index}
                    src={card.image}
                    alt="Description of the image"
                    width={400}
                    height={500}
                    loading="lazy"
                    className="max-md:w-[100%]"
                  />
                ))}
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto font-semibold text-gray-800 max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl max-md:max-w-full">
                  {cards
                    .slice(currentIndex, currentIndex + 1)
                    .map((card, index) => card.title)}
                </div>
                <div className="mt-5 text-lg italic max-md:max-w-full">
                  {cards
                    .slice(currentIndex, currentIndex + 1)
                    .map((card, index) => card.description)}

                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-5 justify-between mt-10 max-md:mt-5 w-auto max-md:mt-10">
            <button className="self-end " onClick={handlePrev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="max-md:w-10 max-md:h-10 w-8 h-8"
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
                className="max-md:w-10 max-md:h-10 w-8 h-8"
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

export default BestSeller;

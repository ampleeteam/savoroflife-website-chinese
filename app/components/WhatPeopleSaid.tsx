"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";

interface YouTubeVideo {
  url: string;
  title: string;
  cover_img: string;
}

interface LazyBackgroundImageProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

function LazyBackgroundImage({ src, alt, children }: LazyBackgroundImageProps) {
  // Create a reference to the div element using useRef hook
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create an intersection observer with options
    const item = divRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        // Loop through each entry
        entries.forEach((entry) => {
          // Check if the entry is intersecting
          if (entry.isIntersecting) {
            // Get the target element from the entry
            const target = entry.target as HTMLDivElement;
            // Set the background image style using the src prop
            target.style.backgroundImage = `url(${src})`;
            // Unobserve the target element since it's now loaded
            observer.unobserve(target);
          }
        });
      },
      {
        // Set the root margin to start loading the image when it's 200px below the viewport
        rootMargin: "0px 0px 200px 0px",
      }
    );

    // Check if the div reference exists
    if (item) {
      // Start observing the div element
      observer.observe(item);
    }

    // Clean up function to unobserve the div element when the component unmounts
    return () => {
      if (item) {
        observer.unobserve(item);
      }
    };
  }, [src]); // Run the effect whenever the src prop changes

  // Render the div element with the ref, inline styles, and children
  return (
    <div
      ref={divRef}
      style={{
        height: "270px",
        backgroundSize: "cover",
        backgroundPosition: "0% 15%",
      }}
      className="w-full md:w-[480px] relative flex justify-center items-center border-4 border-white rounded-xl"
      aria-label={`Savor Of Life Review - ${alt}`}
    >
      {children}
    </div>
  );
}

function WhatPeopleSaid() {
  const youtubeVideos: YouTubeVideo[] = [
    {
      url: "https://youtube.com/shorts/fQszbc6dNbE?si=pQpZ5xXdk0DNlg3G",
      title: "Barbara O’Neill 分享她对 Savor美食的体验",
      cover_img: "/landing/WhatPeopleSaid_1.png",
    },
    {
      url: "https://youtube.com/shorts/SV6PkjSP_0I?si=LzqkPDIk644Q9jAH",
      title: "连明星都无法抗拒的 Savor 纯素佳肴！",
      cover_img: "/landing/WhatPeopleSaid_2.png",
    },
    {
      url: "https://youtube.com/shorts/rXEfjMtNqEE?si=zGR9KiNSueOwcB7Y",
      title: "纯素厨师Dave点评 Savor 的植物性美味",
      cover_img: "/landing/WhatPeopleSaid_3.png",
    },
    {
      url: "https://youtube.com/shorts/bqk53WNXmqo?si=WIi21LAr5v7KxQkK",
      title: "旅行者打卡吉隆坡 Savor 纯素美食，快看看她的真实感受！",
      cover_img: "/landing/WhatPeopleSaid_4.png",
    },
  ];

  return (
    <div className="flex justify-center items-center px-16 py-20 bg-orange-100 max-md:px-5">
      <div className="flex flex-col gap-y-20 max-w-full w-[1049px]">
        <h2 className="self-center text-4xl font-semibold text-center text-black">
          顾客评价
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-stretch md:mx-[11%] lg:mx-0 gap-x-5 gap-y-12 lg:gap-y-20">
          {youtubeVideos.map((yt, idx) => (
            <div key={idx}>
              <Link
                href={yt.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={yt.title}
                className="cursor-pointer"
              >
                <LazyBackgroundImage src={yt.cover_img} alt={yt.title}>
                  <svg
                    width="78"
                    height="78"
                    viewBox="0 0 78 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M39 70.5C43.1366 70.5 47.2328 69.6852 51.0545 68.1022C54.8763 66.5192 58.3488 64.1989 61.2739 61.2739C64.1989 58.3488 66.5192 54.8763 68.1022 51.0545C69.6852 47.2328 70.5 43.1366 70.5 39C70.5 34.8634 69.6852 30.7672 68.1022 26.9455C66.5192 23.1237 64.1989 19.6512 61.2739 16.7261C58.3488 13.8011 54.8763 11.4808 51.0545 9.89779C47.2328 8.31477 43.1366 7.5 39 7.5C30.6457 7.5 22.6335 10.8187 16.7261 16.7261C10.8187 22.6335 7.5 30.6457 7.5 39C7.5 47.3543 10.8187 55.3665 16.7261 61.2739C22.6335 67.1813 30.6457 70.5 39 70.5ZM39 77.5C60.2625 77.5 77.5 60.2625 77.5 39C77.5 17.7375 60.2625 0.5 39 0.5C17.7375 0.5 0.5 17.7375 0.5 39C0.5 60.2625 17.7375 77.5 39 77.5Z"
                      fill="white"
                    />
                    <path
                      d="M53 39.0002L32 54.1552V23.8452L53 39.0002Z"
                      fill="white"
                    />
                  </svg>
                </LazyBackgroundImage>
              </Link>
              <h2 className="font-semibold text-xl mt-2">{yt.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatPeopleSaid;

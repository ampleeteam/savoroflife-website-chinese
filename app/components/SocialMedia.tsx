"use client";
import Image from "next/image";
import React from "react";
function SocialMedia() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };
  if (currentIndex >= 3) {
    setCurrentIndex(0);
  }

  if (currentIndex < 0) {
    setCurrentIndex(0);
  }

  return (
    <div className="hidden justify-center items-center px-16 py-20 max-md:py-10 bg-white max-md:px-5 grid max-md:w-[100vw]">
      <p className="justify-center text-center font-bold text-2xl max-md:w-inherit w-inherit">
        Social Media
      </p>
      <div className="mt-11 w-full max-w-[1341px] max-md:mt-10 max-md:w-inherit w-inherit">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:w-[100%] items-center">
          <div className="hidden max-md:flex max-md:justify-center">
            <div
              className={currentIndex === 0 ? "flex justify-center" : "hidden"}
            >
              <div className="flex flex-col w-[33%] max-md:ml-0 p-8 rounded-3xl max-md:w-[80%] shadow-Shadowbox">
                <div className="flex gap-4 text-2xl">
                  <Image
                    width={350}
                    height={150}
                    alt="Description of the image"
                    loading="lazy"
                    src="/landing/Social_5.png"
                    className="shrink-0 rounded-full aspect-[1.14] w-[57px]"
                  />
                  <div className="flex-auto my-auto">@ Stephy</div>
                </div>
                <Image
                  width={350}
                  height={150}
                  alt="Description of the image"
                  loading="lazy"
                  src="/landing/Social_1.png"
                  className="self-start mt-9 w-full aspect-[1.09]"
                />
                <div className="mt-9 text-xl">
                  Turn over a leaf this January and savor the goodness of
                  Vegnauary! Delight your taste buds with our irresistible
                  plant-based creations, making every bite a step towards a
                  healthier, kinder you.
                  <br />
                  See you at Savor!
                </div>
                <svg
                  width="51"
                  className="self-end mt-20 aspect-square w-[50px] max-md:mt-10"
                  height="51"
                  viewBox="0 0 51 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50.3402 25.3446C50.3402 37.9712 40.981 48.4098 28.8226 50.1038C27.6857 50.2614 26.5226 50.3438 25.342 50.3438C23.9792 50.3438 22.6409 50.2351 21.3377 50.0249C9.43498 48.1085 0.34375 37.7873 0.34375 25.3446C0.34375 11.5374 11.537 0.34375 25.3438 0.34375C39.1505 0.34375 50.3438 11.5374 50.3438 25.3446H50.3402Z"
                    fill="#1877F7"
                  />
                  <path
                    d="M28.8231 20.4193V25.8654H35.5601L34.4933 33.2017H28.8231V50.1043C27.6863 50.2619 26.5232 50.3443 25.3426 50.3443C23.9798 50.3443 22.6415 50.2357 21.3382 50.0255V33.2017H15.125V25.8654H21.3382V19.2018C21.3382 15.0677 24.6892 11.7148 28.8249 11.7148V11.7183C28.8372 11.7183 28.8477 11.7148 28.8599 11.7148H35.5619V18.0597H31.1827C29.8812 18.0597 28.8249 19.116 28.8249 20.4175L28.8231 20.4193Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div
              className={currentIndex === 1 ? "flex justify-center" : "hidden"}
            >
              <div className=" flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-[90%]">
                <div className="flex flex-col grow text-black ">
                  <div className="flex justify-center items-center  text-black bg-white max-md:px-5">
                    <div className="flex flex-col mt-8 max-md:mt-0 max-w-full w-[419px]">
                      <div className="flex flex-col items-start px-10 py-12 w-full bg-white rounded-3xl max-md:px-5 shadow-Shadowbox">
                        <div className="flex gap-5 text-2xl">
                          <Image
                            width={350}
                            height={150}
                            alt="Description of the image"
                            loading="lazy"
                            src="/landing/Social_4.png"
                            className="shrink-0 w-14 rounded-full aspect-[1.12]"
                          />
                          <div className="flex-auto my-auto">@ Benjamin</div>
                        </div>
                        <div className="mt-5 text-xl">
                          Dive into a delectable breakfast spread at Savor and
                          don&apos;t miss out on the breakfast of champions –
                          Savor&apos;s Creamy Curry Mee! Come, indulge, and
                          conquer your day with us!
                          <br />
                          See you at Savor!
                        </div>
                      </div>
                      <div className="flex flex-col px-10 py-7 mt-6 w-full text-2xl bg-white rounded-3xl max-md:px-5 shadow-Shadowbox">
                        <div className="flex gap-5">
                          <Image
                            width={250}
                            height={150}
                            alt="Description of the image"
                            loading="lazy"
                            src="/landing/Social_6.png"
                            className="shrink-0 w-14 rounded-full aspect-[1.12]"
                          />
                          <div className="flex-auto my-auto">@ Kelvin</div>
                        </div>
                        <Image
                          width={350}
                          height={150}
                          alt="Description of the image"
                          loading="lazy"
                          src="/landing/Social_2.png"
                          className="mt-3 w-full aspect-[1.28]"
                        />

                        <svg
                          className="self-end mt-5 aspect-square w-[50px]"
                          width="51"
                          height="51"
                          viewBox="0 0 51 51"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M25.7991 0.308594H25.6853C11.9096 0.308594 0.742188 11.476 0.742188 25.2517V25.3655C0.742188 39.1412 11.9096 50.3086 25.6853 50.3086H25.7991C39.5748 50.3086 50.7422 39.1412 50.7422 25.3655V25.2517C50.7422 11.476 39.5748 0.308594 25.7991 0.308594Z"
                            fill="url(#paint0_linear_312_17175)"
                          />
                          <path
                            d="M33.4807 10.4805H18.0093C13.735 10.4805 10.2578 13.9577 10.2578 18.2319V32.386C10.2578 36.6603 13.735 40.1375 18.0093 40.1375H33.4807C37.7549 40.1375 41.2321 36.6603 41.2321 32.386V18.2319C41.2321 13.9577 37.7549 10.4805 33.4807 10.4805ZM12.9923 18.2319C12.9923 15.4659 15.2433 13.2149 18.0093 13.2149H33.4807C36.2467 13.2149 38.4977 15.4659 38.4977 18.2319V32.386C38.4977 35.152 36.2467 37.403 33.4807 37.403H18.0093C15.2433 37.403 12.9923 35.152 12.9923 32.386V18.2319Z"
                            fill="white"
                          />
                          <path
                            d="M25.7453 32.517C29.72 32.517 32.9555 29.2833 32.9555 25.3069C32.9555 21.3304 29.7218 18.0967 25.7453 18.0967C21.7689 18.0967 18.5352 21.3304 18.5352 25.3069C18.5352 29.2833 21.7689 32.517 25.7453 32.517ZM25.7453 20.8329C28.2135 20.8329 30.221 22.8404 30.221 25.3086C30.221 27.7768 28.2135 29.7843 25.7453 29.7843C23.2771 29.7843 21.2696 27.7768 21.2696 25.3086C21.2696 22.8404 23.2771 20.8329 25.7453 20.8329Z"
                            fill="white"
                          />
                          <path
                            d="M33.6224 19.2613C34.6927 19.2613 35.5651 18.3907 35.5651 17.3187C35.5651 16.2466 34.6944 15.376 33.6224 15.376C32.5503 15.376 31.6797 16.2466 31.6797 17.3187C31.6797 18.3907 32.5503 19.2613 33.6224 19.2613Z"
                            fill="white"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_312_17175"
                              x1="8.04695"
                              y1="43.0038"
                              x2="43.4374"
                              y2="7.61511"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FAAD4F" />
                              <stop offset="0.35" stopColor="#DD2A7B" />
                              <stop offset="0.62" stopColor="#9537B0" />
                              <stop offset="1" stopColor="#515BD4" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={currentIndex === 2 ? "flex justify-center" : "hidden"}
            >
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow p-8 mx-auto w-full text-black bg-white rounded-3xl  max-md:w-[85%] max-md:px-5 max-md:mt-0 shadow-Shadowbox">
                  <div className="flex gap-4 self-start ml-2.5 text-2xl">
                    <Image
                      width={350}
                      height={150}
                      alt="Description of the image"
                      loading="lazy"
                      src="/landing/Social_7.png"
                      className="shrink-0 w-14 rounded-full aspect-[1.12]"
                    />
                    <div className="my-auto">@ Rose</div>
                  </div>
                  <Image
                    width={350}
                    height={150}
                    alt="Description of the image"
                    loading="lazy"
                    src="/landing/Social_3.png"
                    className="mt-9 w-full aspect-[1.11]"
                  />
                  <div className="mt-9 text-xl">
                    Dive into a delectable breakfast spread at Savor and
                    don&apos;t miss out on the breakfast of champions –
                    Savor&apos;s Creamy Curry Mee! Come, indulge, and conquer
                    your day with us!
                    <br />
                    See you at Savor!
                  </div>
                  <svg
                    className="self-end mt-24 aspect-square w-[50px] max-md:mt-10"
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.7991 0.308594H25.6853C11.9096 0.308594 0.742188 11.476 0.742188 25.2517V25.3655C0.742188 39.1412 11.9096 50.3086 25.6853 50.3086H25.7991C39.5748 50.3086 50.7422 39.1412 50.7422 25.3655V25.2517C50.7422 11.476 39.5748 0.308594 25.7991 0.308594Z"
                      fill="url(#paint0_linear_312_17175)"
                    />
                    <path
                      d="M33.4807 10.4805H18.0093C13.735 10.4805 10.2578 13.9577 10.2578 18.2319V32.386C10.2578 36.6603 13.735 40.1375 18.0093 40.1375H33.4807C37.7549 40.1375 41.2321 36.6603 41.2321 32.386V18.2319C41.2321 13.9577 37.7549 10.4805 33.4807 10.4805ZM12.9923 18.2319C12.9923 15.4659 15.2433 13.2149 18.0093 13.2149H33.4807C36.2467 13.2149 38.4977 15.4659 38.4977 18.2319V32.386C38.4977 35.152 36.2467 37.403 33.4807 37.403H18.0093C15.2433 37.403 12.9923 35.152 12.9923 32.386V18.2319Z"
                      fill="white"
                    />
                    <path
                      d="M25.7453 32.517C29.72 32.517 32.9555 29.2833 32.9555 25.3069C32.9555 21.3304 29.7218 18.0967 25.7453 18.0967C21.7689 18.0967 18.5352 21.3304 18.5352 25.3069C18.5352 29.2833 21.7689 32.517 25.7453 32.517ZM25.7453 20.8329C28.2135 20.8329 30.221 22.8404 30.221 25.3086C30.221 27.7768 28.2135 29.7843 25.7453 29.7843C23.2771 29.7843 21.2696 27.7768 21.2696 25.3086C21.2696 22.8404 23.2771 20.8329 25.7453 20.8329Z"
                      fill="white"
                    />
                    <path
                      d="M33.6224 19.2613C34.6927 19.2613 35.5651 18.3907 35.5651 17.3187C35.5651 16.2466 34.6944 15.376 33.6224 15.376C32.5503 15.376 31.6797 16.2466 31.6797 17.3187C31.6797 18.3907 32.5503 19.2613 33.6224 19.2613Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_312_17175"
                        x1="8.04695"
                        y1="43.0038"
                        x2="43.4374"
                        y2="7.61511"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FAAD4F" />
                        <stop offset="0.35" stopColor="#DD2A7B" />
                        <stop offset="0.62" stopColor="#9537B0" />
                        <stop offset="1" stopColor="#515BD4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:flex xl:justify-center max-md:hidden lg:flex lg:justify-center">
            <div className="flex flex-col w-[33%] max-md:ml-0 p-8 rounded-3xl max-md:w-[80%] shadow-Shadowbox">
              <div className="flex gap-4 text-2xl">
                <Image
                  width={350}
                  height={150}
                  alt="Description of the image"
                  loading="lazy"
                  src="/landing/Social_5.png"
                  className="shrink-0 rounded-full aspect-[1.14] w-[57px]"
                />
                <div className="flex-auto my-auto">@ Stephy</div>
              </div>
              <Image
                width={350}
                height={150}
                alt="Description of the image"
                loading="lazy"
                src="/landing/Social_1.png"
                className="self-start mt-9 w-full aspect-[1.09]"
              />
              <div className="mt-9 text-xl">
                Turn over a leaf this January and savor the goodness of
                Vegnauary! Delight your taste buds with our irresistible
                plant-based creations, making every bite a step towards a
                healthier, kinder you.
                <br />
                See you at Savor!
              </div>
              <svg
                width="51"
                className="self-end mt-20 aspect-square w-[50px] max-md:mt-10"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50.3402 25.3446C50.3402 37.9712 40.981 48.4098 28.8226 50.1038C27.6857 50.2614 26.5226 50.3438 25.342 50.3438C23.9792 50.3438 22.6409 50.2351 21.3377 50.0249C9.43498 48.1085 0.34375 37.7873 0.34375 25.3446C0.34375 11.5374 11.537 0.34375 25.3438 0.34375C39.1505 0.34375 50.3438 11.5374 50.3438 25.3446H50.3402Z"
                  fill="#1877F7"
                />
                <path
                  d="M28.8231 20.4193V25.8654H35.5601L34.4933 33.2017H28.8231V50.1043C27.6863 50.2619 26.5232 50.3443 25.3426 50.3443C23.9798 50.3443 22.6415 50.2357 21.3382 50.0255V33.2017H15.125V25.8654H21.3382V19.2018C21.3382 15.0677 24.6892 11.7148 28.8249 11.7148V11.7183C28.8372 11.7183 28.8477 11.7148 28.8599 11.7148H35.5619V18.0597H31.1827C29.8812 18.0597 28.8249 19.116 28.8249 20.4175L28.8231 20.4193Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="max-md:mt-[5px] flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-[90%]">
              <div className="flex flex-col grow text-black ">
                <div className="flex justify-center items-center  text-black bg-white max-md:px-5">
                  <div className="flex flex-col mt-8 max-md:mt-0 max-w-full w-[419px]">
                    <div className="flex flex-col items-start px-10 py-12 w-full bg-white rounded-3xl max-md:px-5 shadow-Shadowbox">
                      <div className="flex gap-5 text-2xl">
                        <Image
                          width={350}
                          height={150}
                          alt="Description of the image"
                          loading="lazy"
                          src="/landing/Social_4.png"
                          className="shrink-0 w-14 rounded-full aspect-[1.12]"
                        />
                        <div className="flex-auto my-auto">@ Benjamin</div>
                      </div>
                      <div className="mt-5 text-xl">
                        Dive into a delectable breakfast spread at Savor and
                        don&apos;t miss out on the breakfast of champions –
                        Savor&apos;s Creamy Curry Mee! Come, indulge, and
                        conquer your day with us!
                        <br />
                        See you at Savor!
                      </div>
                    </div>
                    <div className="flex flex-col px-10 py-7 mt-6 w-full text-2xl bg-white rounded-3xl max-md:px-5 shadow-Shadowbox">
                      <div className="flex gap-5">
                        <Image
                          width={250}
                          height={150}
                          alt="Description of the image"
                          loading="lazy"
                          src="/landing/Social_6.png"
                          className="shrink-0 w-14 rounded-full aspect-[1.12]"
                        />
                        <div className="flex-auto my-auto">@ Kelvin</div>
                      </div>
                      <Image
                        width={350}
                        height={150}
                        alt="Description of the image"
                        loading="lazy"
                        src="/landing/Social_2.png"
                        className="mt-3 w-full aspect-[1.28]"
                      />

                      <svg
                        className="self-end mt-5 aspect-square w-[50px]"
                        width="51"
                        height="51"
                        viewBox="0 0 51 51"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25.7991 0.308594H25.6853C11.9096 0.308594 0.742188 11.476 0.742188 25.2517V25.3655C0.742188 39.1412 11.9096 50.3086 25.6853 50.3086H25.7991C39.5748 50.3086 50.7422 39.1412 50.7422 25.3655V25.2517C50.7422 11.476 39.5748 0.308594 25.7991 0.308594Z"
                          fill="url(#paint0_linear_312_17175)"
                        />
                        <path
                          d="M33.4807 10.4805H18.0093C13.735 10.4805 10.2578 13.9577 10.2578 18.2319V32.386C10.2578 36.6603 13.735 40.1375 18.0093 40.1375H33.4807C37.7549 40.1375 41.2321 36.6603 41.2321 32.386V18.2319C41.2321 13.9577 37.7549 10.4805 33.4807 10.4805ZM12.9923 18.2319C12.9923 15.4659 15.2433 13.2149 18.0093 13.2149H33.4807C36.2467 13.2149 38.4977 15.4659 38.4977 18.2319V32.386C38.4977 35.152 36.2467 37.403 33.4807 37.403H18.0093C15.2433 37.403 12.9923 35.152 12.9923 32.386V18.2319Z"
                          fill="white"
                        />
                        <path
                          d="M25.7453 32.517C29.72 32.517 32.9555 29.2833 32.9555 25.3069C32.9555 21.3304 29.7218 18.0967 25.7453 18.0967C21.7689 18.0967 18.5352 21.3304 18.5352 25.3069C18.5352 29.2833 21.7689 32.517 25.7453 32.517ZM25.7453 20.8329C28.2135 20.8329 30.221 22.8404 30.221 25.3086C30.221 27.7768 28.2135 29.7843 25.7453 29.7843C23.2771 29.7843 21.2696 27.7768 21.2696 25.3086C21.2696 22.8404 23.2771 20.8329 25.7453 20.8329Z"
                          fill="white"
                        />
                        <path
                          d="M33.6224 19.2613C34.6927 19.2613 35.5651 18.3907 35.5651 17.3187C35.5651 16.2466 34.6944 15.376 33.6224 15.376C32.5503 15.376 31.6797 16.2466 31.6797 17.3187C31.6797 18.3907 32.5503 19.2613 33.6224 19.2613Z"
                          fill="white"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_312_17175"
                            x1="8.04695"
                            y1="43.0038"
                            x2="43.4374"
                            y2="7.61511"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FAAD4F" />
                            <stop offset="0.35" stopColor="#DD2A7B" />
                            <stop offset="0.62" stopColor="#9537B0" />
                            <stop offset="1" stopColor="#515BD4" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow p-8 mx-auto w-full text-black bg-white rounded-3xl  max-md:w-[85%] max-md:px-5 max-md:mt-10 shadow-Shadowbox">
                <div className="flex gap-4 self-start ml-2.5 text-2xl">
                  <Image
                    width={350}
                    height={150}
                    alt="Description of the image"
                    loading="lazy"
                    src="/landing/Social_7.png"
                    className="shrink-0 w-14 rounded-full aspect-[1.12]"
                  />
                  <div className="my-auto">@ Rose</div>
                </div>
                <Image
                  width={350}
                  height={150}
                  alt="Description of the image"
                  loading="lazy"
                  src="/landing/Social_3.png"
                  className="mt-9 w-full aspect-[1.11]"
                />
                <div className="mt-9 text-xl">
                  Dive into a delectable breakfast spread at Savor and
                  don&apos;t miss out on the breakfast of champions –
                  Savor&apos;s Creamy Curry Mee! Come, indulge, and conquer your
                  day with us!
                  <br />
                  See you at Savor!
                </div>
                <svg
                  className="self-end mt-24 aspect-square w-[50px] max-md:mt-10"
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.7991 0.308594H25.6853C11.9096 0.308594 0.742188 11.476 0.742188 25.2517V25.3655C0.742188 39.1412 11.9096 50.3086 25.6853 50.3086H25.7991C39.5748 50.3086 50.7422 39.1412 50.7422 25.3655V25.2517C50.7422 11.476 39.5748 0.308594 25.7991 0.308594Z"
                    fill="url(#paint0_linear_312_17175)"
                  />
                  <path
                    d="M33.4807 10.4805H18.0093C13.735 10.4805 10.2578 13.9577 10.2578 18.2319V32.386C10.2578 36.6603 13.735 40.1375 18.0093 40.1375H33.4807C37.7549 40.1375 41.2321 36.6603 41.2321 32.386V18.2319C41.2321 13.9577 37.7549 10.4805 33.4807 10.4805ZM12.9923 18.2319C12.9923 15.4659 15.2433 13.2149 18.0093 13.2149H33.4807C36.2467 13.2149 38.4977 15.4659 38.4977 18.2319V32.386C38.4977 35.152 36.2467 37.403 33.4807 37.403H18.0093C15.2433 37.403 12.9923 35.152 12.9923 32.386V18.2319Z"
                    fill="white"
                  />
                  <path
                    d="M25.7453 32.517C29.72 32.517 32.9555 29.2833 32.9555 25.3069C32.9555 21.3304 29.7218 18.0967 25.7453 18.0967C21.7689 18.0967 18.5352 21.3304 18.5352 25.3069C18.5352 29.2833 21.7689 32.517 25.7453 32.517ZM25.7453 20.8329C28.2135 20.8329 30.221 22.8404 30.221 25.3086C30.221 27.7768 28.2135 29.7843 25.7453 29.7843C23.2771 29.7843 21.2696 27.7768 21.2696 25.3086C21.2696 22.8404 23.2771 20.8329 25.7453 20.8329Z"
                    fill="white"
                  />
                  <path
                    d="M33.6224 19.2613C34.6927 19.2613 35.5651 18.3907 35.5651 17.3187C35.5651 16.2466 34.6944 15.376 33.6224 15.376C32.5503 15.376 31.6797 16.2466 31.6797 17.3187C31.6797 18.3907 32.5503 19.2613 33.6224 19.2613Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_312_17175"
                      x1="8.04695"
                      y1="43.0038"
                      x2="43.4374"
                      y2="7.61511"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FAAD4F" />
                      <stop offset="0.35" stopColor="#DD2A7B" />
                      <stop offset="0.62" stopColor="#9537B0" />
                      <stop offset="1" stopColor="#515BD4" />
                    </linearGradient>
                  </defs>
                </svg>
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
export default SocialMedia;

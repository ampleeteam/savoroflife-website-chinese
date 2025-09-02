"use client";
import { homepageRestaurantViewMenuParamKey } from "@/lib/url-params";
import { MenuKey, Menus, menuNameVariants } from "@/types/menu";
import { parseAsStringLiteral, useQueryState } from "nuqs";
import MenuSelection from "./MenuSelection";
import Separator from "./Separator";
import Image from "next/image";

function MainMenu({ allMenu }: { allMenu: Menus }) {
  const [menuVariant, setMenuVariant] = useQueryState(
    homepageRestaurantViewMenuParamKey,
    parseAsStringLiteral(menuNameVariants).withDefault(menuNameVariants[0])
  );

  const handleButtonClick = (menuVariant: string) => {
    const formattedUrl = `/?menu=${menuVariant}`;
    setMenuVariant(menuVariant);
  };

  return (
    <div
      id="restaurant-menu"
      className="justify-center items-center px-[18vw] py-20 max-md:px-5 bg-DarkGreenColour"
    >
      <div className="flex flex-col max-w-full w-[1148px]">
        <div className="self-center font-serif text-GoldenChocolateColour text-4xl font-semibold text-center ">
          菜单
        </div>
        <Separator />
      </div>
      <MenuSelection
        menuVariant={menuVariant}
        handleButtonClick={handleButtonClick}
      />

      <div className="flex max-md:block pt-[30px] max-md:pt-[10px]">
        <div className="bg-DarkGreenColour flex flex-col w-[50%] max-md:w-[100%] items-start max-md:px-5">
          {allMenu[menuVariant as MenuKey].map((m, idx) => (
            <div
              key={idx}
              className="flex flex-col max-w-full w-[80%] max-md:w-[100%] max-md:mt-5 max-md:ml-2.5"
            >
              <div className="text-GoldenChocolateColour font-serif xl:text-[30px] text-[20px] mb-5 font-semibold max-md:text-2xl">
                {idx === 0 ? m.cluster.toUpperCase() : null}{" "}
              </div>
              <div className="text-GoldenChocolateColour font-serif xl:text-[25px] text-[20px] max-md:text-2xl">
                {m.name.toUpperCase()}{" "}
              </div>
              <div className="text-GoldenChocolateColour mt-0.5 xl:text-[18px] text-[15px] max-md:text-lg max-md:font-medium italic font-normal line-clamp-4">
                {m.description.split(/[*.]/, 1)}
              </div>
            </div>
          ))}
        </div>
        <div className="max-md:flex max-md:w-[100%] justify-center items-end w-[50%] bg-DarkGreenColour text-center text-stone-400 max-md:px-5">
          {allMenu[menuVariant as MenuKey][0].cluster === "Starters" ? (
            <div className="flex flex-col max-w-full max-md:w-[100%] w-[75%] float-right max-md:mt-10 max-md:mr-2.5">
              <Image
                width={250}
                height={50}
                alt="BANG BANG BUFFALO CAULI"
                loading="lazy"
                src="/landing/Starters_1.webp"
                className="w-full rounded-t-lg"
              />
              <div className="justify-center font-serif text-GoldenChocolateColour mb-10 rounded-b-lg xl:text-[21px] text-[13px] p-[10px]  border border-solid border-stone-400 max-md:pr-7 max-md:pl-7">
                BEST SELLERS
              </div>
            </div>
          ) : null}
          {allMenu[menuVariant as MenuKey][0].cluster === "Western" ? (
            <div className="flex flex-col max-w-full max-md:w-[100%] w-[75%] float-right mt-2 max-md:mt-10 max-md:mr-2.5">
              <Image
                width={250}
                height={50}
                alt="IRISH SHEPHERD'S PIE"
                loading="lazy"
                src="/landing/Menu_1.webp"
                className="w-full aspect-[1.96] rounded-t-lg"
              />
              <div className="justify-center font-serif text-GoldenChocolateColour mb-10 rounded-b-lg xl:text-[21px] text-[13px] p-[10px]  border border-solid border-stone-400 max-md:pr-7 max-md:pl-7">
                IRISH SHEPHERD&apos;S PIE
              </div>
              <Image
                width={250}
                height={50}
                alt="SWISS SHROOM BURGER"
                loading="lazy"
                src="/landing/Menu_2.webp"
                className="w-full aspect-[1.96] rounded-t-lg"
              />
              <div className="justify-center font-serif text-GoldenChocolateColour mb-10 rounded-b-lg xl:text-[21px] text-[13px] p-[10px]  border border-solid border-stone-400 max-md:pr-7 max-md:pl-7">
                SWISS SHROOM BURGER
              </div>
              <Image
                width={250}
                height={50}
                alt="SHROOMY ZOOMY BREAD BOWL"
                loading="lazy"
                src="/landing/Menu_3.webp"
                className="w-full aspect-[1.96] rounded-t-lg"
              />
              <div className="justify-center font-serif text-GoldenChocolateColour mb-10 rounded-b-lg xl:text-[21px] text-[13px] p-[10px]  border border-solid border-stone-400 max-md:pr-7 max-md:pl-7">
                SHROOMY ZOOMY BREAD BOWL
              </div>
              <Image
                width={250}
                height={50}
                alt="LASAGNA NEAPOLITANA"
                loading="lazy"
                src="/landing/Menu_4.webp"
                className="w-full aspect-[1.96] rounded-t-lg"
              />
              <div className="justify-center font-serif text-GoldenChocolateColour rounded-b-lg xl:text-[21px] text-[13px] p-[10px]  border border-solid border-stone-400 max-md:pr-7 max-md:pl-7">
                LASAGNA NEAPOLITANA
              </div>
            </div>
          ) : null}
          {allMenu[menuVariant as MenuKey][0].cluster === "Desserts" ? (
            <div className="flex flex-col max-w-full max-md:w-[100%] w-[75%] float-right max-md:mt-10 max-md:mr-2.5">
              <Image
                width={250}
                height={50}
                alt="DESSERTS"
                loading="lazy"
                src="/landing/Desserts.webp"
                className="w-full rounded-t-lg"
              />
              <div className="justify-center font-serif text-GoldenChocolateColour mb-10 rounded-b-lg xl:text-[21px] text-[13px] p-[10px]  border border-solid border-stone-400 max-md:pr-7 max-md:pl-7">
                DESSERTS
              </div>
              <Image
                width={250}
                height={50}
                alt="SAVOR'S SILKY DECADENCE"
                loading="lazy"
                src="/landing/Menu_5.webp"
                className="w-full aspect-[1.96] rounded-t-lg"
              />
              <div className="justify-center font-serif text-GoldenChocolateColour rounded-b-lg xl:text-[21px] text-[13px] p-[10px]  border border-solid border-stone-400 max-md:pr-7 max-md:pl-7">
                SAVOR&apos;S SILKY DECADENCE
              </div>
            </div>
          ) : null}
          {allMenu[menuVariant as MenuKey][0].cluster === "Drinks" ? (
            <div className="flex flex-col max-w-full max-md:w-[100%] w-[75%] float-right max-md:mt-10 max-md:mr-2.5">
              <Image
                width={250}
                height={50}
                alt="DRINKS"
                loading="lazy"
                src="/landing/Drinks.webp"
                className="w-full rounded-t-lg"
              />
              <div className="justify-center font-serif text-GoldenChocolateColour rounded-b-lg xl:text-[21px] text-[13px] p-[10px]  border border-solid border-stone-400 max-md:pr-7 max-md:pl-7">
                DRINKS
              </div>
            </div>
          ) : null}
          {allMenu[menuVariant as MenuKey][0].cluster === "Asian" ? (
            <div className="flex flex-col max-w-full max-md:w-[100%] w-[75%] float-right max-md:mt-10 max-md:mr-2.5">
              <Image
                width={250}
                height={50}
                alt="ASIAN"
                loading="lazy"
                src="/landing/Asian_1.webp"
                className="w-full rounded-t-lg"
              />
              <div className="justify-center font-serif text-GoldenChocolateColour mb-10 rounded-b-lg xl:text-[21px] text-[13px] p-[10px]  border border-solid border-stone-400 max-md:pr-7 max-md:pl-7">
                ASIAN
              </div>
              <Image
                width={250}
                height={50}
                alt="NASI LEMAK"
                loading="lazy"
                src="/landing/Asian_2.webp"
                className="w-full rounded-t-lg"
              />
              <div className="justify-center font-serif text-GoldenChocolateColour mb-10 rounded-b-lg xl:text-[21px] text-[13px] p-[10px]  border border-solid border-stone-400 max-md:pr-7 max-md:pl-7">
                BEST SELLERS
              </div>
              <Image
                width={250}
                height={50}
                alt="NASI KERABU AYAM PERCIK"
                loading="lazy"
                src="/landing/Nasi Kerabu.webp"
                className="w-full rounded-t-lg"
              />
              <div className="justify-center font-serif text-GoldenChocolateColour mb-10 rounded-b-lg xl:text-[21px] text-[13px] p-[10px]  border border-solid border-stone-400 max-md:pr-7 max-md:pl-7">
                NASI KERABU AYAM PERCIK
              </div>
              <Image
                width={250}
                height={50}
                alt="BAKSO"
                loading="lazy"
                src="/landing/Bakso.webp"
                className="w-full rounded-t-lg"
              />
              <div className="justify-center font-serif text-GoldenChocolateColour mb-10 rounded-b-lg xl:text-[21px] text-[13px] p-[10px]  border border-solid border-stone-400 max-md:pr-7 max-md:pl-7">
                BAKSO
              </div>
              <Image
                width={250}
                height={50}
                alt="SARAWAK LAKSA"
                loading="lazy"
                src="/landing/Sarawak Laksa.webp"
                className="w-full rounded-t-lg"
              />
              <div className="justify-center font-serif text-GoldenChocolateColour rounded-b-lg xl:text-[21px] text-[13px] p-[10px]  border border-solid border-stone-400 max-md:pr-7 max-md:pl-7">
                SARAWAK LAKSA
              </div>
            </div>
          ) : null}
          {allMenu[menuVariant as MenuKey][0].cluster === "Breakfast" ? (
            <div className="flex flex-col max-w-full max-md:w-[100%] w-[75%] float-right max-md:mt-10 max-md:mr-2.5">
              <Image
                width={250}
                height={50}
                alt="THE BIG VEGAN BREAKFAST"
                loading="lazy"
                src="/landing/Big Breakfast.webp"
                className="w-full rounded-t-lg"
              />
              <div className="justify-center font-serif text-GoldenChocolateColour mb-10 rounded-b-lg xl:text-[21px] text-[13px] p-[10px]  border border-solid border-stone-400 max-md:pr-7 max-md:pl-7">
                THE BIG VEGAN BREAKFAST
              </div>
              <Image
                width={250}
                height={50}
                alt="DRY WANTAN MEE"
                loading="lazy"
                src="/landing/Wantan.webp"
                className="w-full rounded-t-lg"
              />
              <div className="justify-center font-serif text-GoldenChocolateColour rounded-b-lg xl:text-[21px] text-[13px] p-[10px]  border border-solid border-stone-400 max-md:pr-7 max-md:pl-7">
                DRY WANTAN MEE
              </div>
            </div>
          ) : null}
          {allMenu[menuVariant as MenuKey][0].cluster === "Kids Menu" ? (
            <div className="flex flex-col max-w-full max-md:w-[100%] w-[75%] float-right max-md:mt-10 max-md:mr-2.5">
              <Image
                width={250}
                height={50}
                alt="GOLDEN SEA BUDDIES WITH MASH POTATOES"
                loading="lazy"
                src="/landing/Golden Potato.webp"
                className="w-full rounded-t-lg"
              />
              <div className="justify-center font-serif text-GoldenChocolateColour mb-10 rounded-b-lg xl:text-[21px] text-[13px] p-[10px]  border border-solid border-stone-400 max-md:pr-7 max-md:pl-7">
                GOLDEN SEA BUDDIES WITH MASH POTATOES
              </div>
              <Image
                width={250}
                height={50}
                alt="KIDS MENU"
                loading="lazy"
                src="/landing/Slider Fries.webp"
                className="w-full rounded-t-lg"
              />
              <div className="justify-center font-serif text-GoldenChocolateColour mb-10 rounded-b-lg xl:text-[21px] text-[13px] p-[10px]  border border-solid border-stone-400 max-md:pr-7 max-md:pl-7">
                LIL&apos; SAVOR SLIDER WITH FRIES
              </div>
              <Image
                width={250}
                height={50}
                alt="GOLDEN SEA BUDDIES WITH FRIES"
                loading="lazy"
                src="/landing/Golden Fries.webp"
                className="w-full rounded-t-lg"
              />
              <div className="justify-center font-serif text-GoldenChocolateColour rounded-b-lg xl:text-[21px] text-[13px] p-[10px]  border border-solid border-stone-400 max-md:pr-7 max-md:pl-7">
                GOLDEN SEA BUDDIES WITH FRIES
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default MainMenu;

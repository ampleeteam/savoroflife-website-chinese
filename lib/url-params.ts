import { SingleCartItem } from "@/types/cart";
import { parseAsArrayOf, parseAsInteger } from "nuqs";

export const filterParamKey = "f";

export const homepageRestaurantViewMenuParamKey = "menu";

export const selectedFilterParser = parseAsArrayOf(parseAsInteger).withDefault(
  []
);

export const cartItemKey = "c";

export const cartItemSerializer = (value: SingleCartItem[]) => {
  return encodeURIComponent(
    value.map((item) => `${item.cartItem.id}+${item.qty}`).join(",")
  );
};

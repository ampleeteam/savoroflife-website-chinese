import { ItemDetail } from "./menu";

export interface Cart {
  cartId: number;
  cartSubtotal: number;
  cartItems: SingleCartItem[];
}

export interface SingleCartItem {
  cartItem: ItemDetail;
  qty: number;
}

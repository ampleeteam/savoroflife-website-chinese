import { Category } from "./category";

// Enum for item status
export enum ItemStatus {
  PENDING = 2,
  AVAILABLE = 1,
  UNAVAILABLE = 0,
}

export interface ItemDetail {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
  categoryId: number;
  qty_sold?: number;
  starting_time: Date;
  ending_time: Date;
  slug: string;
}

export const menuNameVariants = [
  "前菜",
  "西式",
  "亚洲风味",
  "早餐",
  "饮品",
  "甜品",
  "儿童菜单",
];

export interface ItemCluster {
  id: number;
  name_cn: string;
  description_cn: string;
  cluster: string;
  categoryId: number;
  imgHomeUrl: string;
  showHome: number;
}

export type MenuKey = (typeof menuNameVariants)[number];

export type Menus = {
  [key in MenuKey]: ItemCluster[];
};

export const INIT_ITEM_DETAIL: ItemDetail = {
  id: 0,
  name: "",
  imgUrl: "",
  price: 0,
  categoryId: 0,
  qty_sold: 0,
  starting_time: new Date(),
  ending_time: new Date(),
  slug: "",
};

export interface Menu {
  category: Category;
  menuList: ItemDetail[];
}

export interface ItemDetailFullData extends ItemDetail {
  created_at?: Date;
  updated_at?: Date;
  menu_end_at?: Date | undefined;
  menu_start_at?: Date | undefined;
  menu_start_hour?: string;
  menu_end_hour?: string;
  categoryName?: string;
  ingredients: string;
  description: string;
  status: ItemStatus;
}

export interface MenuCreateOrUpdateFormInput {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  price: number;
  imgUrl: string;
  ingredients: string;
  menu_start_at: Date;
  menu_end_at: Date | undefined;
  menu_start_hour: string;
  menu_end_hour: string;
}

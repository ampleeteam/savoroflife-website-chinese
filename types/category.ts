export interface Category {
  id: number;
  name: string;
  isLabel: boolean;
}

export interface ItemFilter {
  categories: Category[];
  cuisines: Category[];
}

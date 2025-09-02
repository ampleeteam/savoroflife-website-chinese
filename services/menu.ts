"use server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import {
  INIT_ITEM_DETAIL,
  ItemDetail,
  ItemDetailFullData,
  ItemStatus,
  MenuCreateOrUpdateFormInput,
  ItemCluster,
} from "@/types/menu";
import { utcToZonedTime } from "date-fns-tz";

export const getAllMenu = async (): Promise<ItemDetail[]> => {
  const supabase = await createSupabaseServerClient();
  const currentDatetime = new Date().toISOString();

  try {
    let { data: menu, error } = await supabase
      .from("menu")
      .select(
        "id,name,imgUrl,price,categoryId,qty_sold,starting_time,ending_time, slug"
      )
      .gte("menu_end_at", currentDatetime)
      .lte("menu_start_at", currentDatetime);

    if (error) {
      // Handle the error here if needed
      console.error("Error getAllMenu:", error);
      return []; // Return an empty array in case of an error
    }

    return menu as ItemDetail[];
  } catch (e) {
    console.error("An unexpected error occurred in getAllMenu:", e);
    return []; // Return an empty array in case of an unexpected error
  }
};

interface MenuAvailabilityDetails {
  available: boolean;
  startingDateTime?: Date;
  endingDateTime?: Date;
}

export const getMenuTimeAvailability = async (
  itemId: number
): Promise<MenuAvailabilityDetails> => {
  const supabase = await createSupabaseServerClient();
  const currentDatetime = new Date().toISOString();

  try {
    let { data: menu, error } = await supabase
      .from("menu")
      .select("starting_time,ending_time")
      .eq("id", itemId);

    if (error) {
      // Handle the error here if needed
      console.error("Error getAllMenu:", error);
      return { available: false }; // Return an empty array in case of an error
    }

    if (menu && menu[0]?.starting_time && menu[0]?.ending_time) {
      const startingTime = menu[0].starting_time;
      const endingTime = menu[0].ending_time;
      // Get the current date and time
      const currentDatetime = new Date();

      // Parse the starting and ending times
      const startingDatetime = new Date(
        currentDatetime.toDateString() + " " + startingTime
      );
      const endingDatetime = new Date(
        currentDatetime.toDateString() + " " + endingTime
      );
      if (
        startingDatetime <= currentDatetime &&
        currentDatetime <= endingDatetime
      ) {
        return { available: true };
      }
      return {
        available: false,
        startingDateTime: startingTime,
        endingDateTime: endingTime,
      };
    }
    return { available: false };
  } catch (e) {
    console.error("An unexpected error occurred in getAllMenu:", e);
    return { available: false }; // Return an empty array in case of an unexpected error
  }
};

export const getAllMenuAllStatus = async (): Promise<
  ItemDetailFullData[] | undefined
> => {
  const supabase = await createSupabaseServerClient();
  try {
    let { data: menus, error } = await supabase.from("menu").select("*");

    if (error) {
      // Handle the error here if needed
      console.error("Error fetching getAllMenuAllStatus data:", error);
      return;
    }

    return menus as ItemDetailFullData[];
  } catch (e) {
    console.error("An unexpected getAllMenuAllStatus error occurred:", e);
    return;
  }
};

export const getMenuByCluster = async (
  items: string
): Promise<ItemCluster[]> => {
  const supabase = await createSupabaseServerClient();
  try {
    let { data, error } = await supabase
      .from("menu")
      .select("id,name,description,cluster,categoryId,showHome")
      .eq("cluster", items)
      .eq("showHome", ItemStatus.AVAILABLE);

    if (error) {
      // Handle the error here if needed
      console.error("Error fetching getMenuByCluster data:", error);
      return [];
    }

    return data as ItemCluster[];
  } catch (e) {
    console.error("An unexpected getMenuByCluster error occurred:", e);
    return [];
  }
};

export const getAllMenuById = async (itemId: number): Promise<ItemDetail> => {
  const supabase = await createSupabaseServerClient();

  try {
    let { data: menus, error } = await supabase
      .from("menu")
      .select("id,name,imgUrl,price,categoryId,qty_sold")
      .eq("id", itemId);

    if (error || !menus || menus.length === 0) {
      // Handle the error here if needed
      console.error("Error getAllMenuById:", error);
      return INIT_ITEM_DETAIL; // Return an empty array in case of an error
    }

    return {
      id: menus[0].id,
      name: menus[0].name,
      imgUrl: menus[0].imgUrl,
      price: menus[0].price,
      categoryId: menus[0].categoryId,
      qty_sold: menus[0].qty_sold,
    } as ItemDetail;
  } catch (e) {
    console.error("An unexpected error occurred in getAllMenuById:", e);
    return INIT_ITEM_DETAIL; // Return an empty array in case of an unexpected error
  }
};

export const getAllMenuBySlugFullData = async (
  itemName: string
): Promise<ItemDetailFullData | undefined> => {
  const supabase = await createSupabaseServerClient();
  try {
    let { data: menus, error } = await supabase
      .from("menu")
      .select(
        "id,name,imgUrl,price,categoryId,ingredients,description,status,qty_sold,starting_time,ending_time,slug"
      )
      .eq("slug", itemName);

    if (error || !menus || menus.length === 0) {
      // Handle the error here if needed
      console.error("Error getAllMenuBySlugFullData:", error);
      return; // Return an empty array in case of an error
    }

    return {
      id: menus[0].id,
      name: menus[0].name,
      imgUrl: menus[0].imgUrl,
      price: menus[0].price,
      categoryId: menus[0].categoryId,
      ingredients: menus[0].ingredients,
      description: menus[0].description,
      status: menus[0].status,
      qty_sold: menus[0].qty_sold,
      starting_time: menus[0].starting_time,
      ending_time: menus[0].ending_time,
      slug: menus[0].slug,
    } as ItemDetailFullData;
  } catch (e) {
    console.error(
      "An unexpected error occurred in getAllMenuBySlugFullData:",
      e
    );
    return; // Return an empty array in case of an unexpected error
  }
};

export const getAllMenuByIdFullData = async (
  itemId: number
): Promise<ItemDetailFullData | undefined> => {
  const supabase = await createSupabaseServerClient();
  try {
    let { data: menus, error } = await supabase
      .from("menu")
      .select(
        "id,name,imgUrl,price,categoryId,ingredients,description,status,qty_sold,starting_time,ending_time,slug"
      )
      .eq("id", itemId);

    if (error || !menus || menus.length === 0) {
      // Handle the error here if needed
      console.error("Error getAllMenuByIdFullData:", error);
      return; // Return an empty array in case of an error
    }

    return {
      id: menus[0].id,
      name: menus[0].name,
      imgUrl: menus[0].imgUrl,
      price: menus[0].price,
      categoryId: menus[0].categoryId,
      ingredients: menus[0].ingredients,
      description: menus[0].description,
      status: menus[0].status,
      qty_sold: menus[0].qty_sold,
      starting_time: menus[0].starting_time,
      ending_time: menus[0].ending_time,
      slug: menus[0].slug,
    } as ItemDetailFullData;
  } catch (e) {
    console.error("An unexpected error occurred in getAllMenuByIdFullData:", e);
    return; // Return an empty array in case of an unexpected error
  }
};

export const getMenuQtySoldById = async (
  itemId: number
): Promise<number | undefined> => {
  const supabase = await createSupabaseServerClient();
  try {
    let { data, error } = await supabase
      .from("menu")
      .select("qty_sold")
      .eq("status", ItemStatus.AVAILABLE)
      .eq("id", itemId);

    if (!data || error) {
      // Handle the error here if needed
      console.error("Error getMenuQtySoldById:", error);
      return;
    }

    return data[0].qty_sold;
  } catch (e) {
    console.error("An unexpected error occurred in getMenuQtySoldById:", e);
    return;
  }
};

export const updateMenu = async (
  menu: MenuCreateOrUpdateFormInput
): Promise<number | undefined> => {
  const supabase = await createSupabaseServerClient();

  try {
    const { data, error } = await supabase
      .from("menu")
      .update({
        id: menu.id,
        name: menu.name,
        description: menu.description,
        price: menu.price,
        imgUrl: menu.imgUrl,
        ingredients: menu.ingredients,
        categoryId: menu.categoryId,
        menu_start_at: menu.menu_start_at,
        menu_end_at: menu.menu_end_at,
        starting_time: menu.menu_start_hour,
        ending_time: menu.menu_end_hour,
        updated_at: utcToZonedTime(new Date(), "Asia/Kuala_Lumpur"),
      })
      .eq("id", menu.id)
      .select();

    if (!data || error) {
      // Handle the error here if needed
      console.error("Error fetching updateMenu:", error);
      return;
    }

    return data[0].id;
  } catch (e) {
    console.error("An unexpected error occurred in updateMenu:", e);
    return;
  }
};

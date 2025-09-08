import { getAllMenu } from "@/services/menu";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const menus = await getAllMenu();
  const menuUrls = menus.map((menu) => {
    return {
      url: `${baseUrl}/menu/${menu.id}`,
      lastMofidied: new Date(),
    };
  });

  return [
    {
      url: baseUrl,
      lastMofidied: new Date(),
    },
    {
      url: `${baseUrl}/event-space`,
      lastMofidied: new Date(),
    },
    {
      url: `${baseUrl}/catering`,
      lastMofidied: new Date(),
    },
    ...menuUrls,
  ];
}

import { headers } from "next/headers";

export async function getCurrentUrl() {
  const headersList = await headers();
  try {
    const host = headersList.get("host");

    if (!host) {
      console.error("Host is not defined:", { headersList, host });
      return "";
    }

    const protocol = host.startsWith("localhost") ? "http" : "https";
    const currentUrl = `${protocol}://${host}`;
    return currentUrl;
  } catch (err) {
    console.error("Unexpected error getting current URL:", err);
    return "";
  }
}

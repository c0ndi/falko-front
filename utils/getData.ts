import axios from "@/config/axios";

export async function getData(
  url: string,
  locale: string | undefined,
  slug?: string | string[]
) {
  const query = slug
    ? `?&filters[slug][$eq]=${slug}&populate=deep&locale=${locale ?? "pl-PL"}`
    : `?populate=deep&locale=${locale ?? "pl-PL"}`;
  const res = await axios.get(`${url + query}`);

  return res.data;
}

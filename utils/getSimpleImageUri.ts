import { StrapiFile } from "@/types/types";
import { strapiURL } from "@/config/axios";

export function getSimpleImageUri(image: StrapiFile) {
  if (!image.data) return "/images/policies-bg.webp";

  return strapiURL + image.data.attributes.url;
}

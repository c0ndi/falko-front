import {StrapiFile} from "@/types/types";
import {strapiURL} from "@/config/axios";

export function getSimpleImageUri(image: StrapiFile){
   return strapiURL + image.data.attributes.url
}
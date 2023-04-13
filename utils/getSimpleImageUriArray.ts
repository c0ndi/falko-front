import {StrapiFileArray} from "@/types/types";
import {strapiURL} from "@/config/axios";

export function getSimpleImageUriArray(image: StrapiFileArray){
   return strapiURL + image.attributes.url
}
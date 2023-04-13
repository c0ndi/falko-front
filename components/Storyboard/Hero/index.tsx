import s from './index.module.scss'
import {PropsWithChildren} from "react";
import {StrapiFile} from "@/types/types";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";
import Image from "next/image";

type HeroProps = {
   title: string;
   subheading: string;
   cover: StrapiFile;
}

export default function Hero({content}: PropsWithChildren<{ content: HeroProps }>) {
   const {title, subheading, cover} = content;
   return (
      <section className={s.wrapper}>
         <Image
            src={getSimpleImageUri(cover)}
            alt={"HeroCover"}
            fill
            draggable={false}
         />

         <p>{subheading.toUpperCase()}</p>
         <h1>{title.toUpperCase()}</h1>
      </section>
   )
}
import s from './index.module.scss'
import {StrapiImage} from "@/types/types";
import {PropsWithChildren} from "react";

type HeroProps = {
   heading: string;
   subheading: string;
   cover: StrapiImage;
}

export default function Hero({content}: PropsWithChildren<{content: HeroProps}>) {
   const {heading, subheading, cover} = content;
   return (
      <section className={s.wrapper}>

      </section>
   )
}
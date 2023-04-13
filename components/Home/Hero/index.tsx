import s from './index.module.scss'
import {StrapiFile} from "@/types/types";
import {PropsWithChildren} from "react";

type HeroProps = {
   heading: string;
   subheading: string;
   cover: StrapiFile;
}

export default function Hero({content}: PropsWithChildren<{content: HeroProps}>) {
   const {heading, subheading, cover} = content;
   return (
      <section className={s.wrapper}>

      </section>
   )
}
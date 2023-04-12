import s from './index.module.scss'
import {PropsWithChildren} from "react";
import {StrapiFile} from "@/types/types";

type OurMangaProps = {
   heading: string;
   subheading: string;
   cover: StrapiFile;
   content: string;
}

export default function OurManga({content}: PropsWithChildren<{content: OurMangaProps}>) {
   const {heading, subheading, cover, content: contentText} = content;
   return (
      <section className={s.wrapper}>

      </section>
   )
}
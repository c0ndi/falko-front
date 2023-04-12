import s from './index.module.scss'
import {StrapiFile} from "@/types/types";
import {PropsWithChildren} from "react";

type OurStoryboardsProps = {
   heading: string;
   subheading: string;
   description: string;
   cover: StrapiFile;
}

export default function OurStoryboards({content}: PropsWithChildren<{content: OurStoryboardsProps}>) {
   return (
      <section className={s.wrapper}>

      </section>
   )
}
import s from './index.module.scss'
import {StrapiFile} from "@/types/types";
import {PropsWithChildren} from "react";

type AboutProps = {
   heading: string;
   subheading: string;
   video: StrapiFile;
   logo: StrapiFile;
   content: string;
   socialLabel: string;
}

export default function About({content}: PropsWithChildren<{ content: AboutProps}>) {
   return (
      <section className={s.wrapper}>

      </section>
   )
}
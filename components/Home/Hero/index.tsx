import s from './index.module.scss'
import {StrapiFile} from "@/types/types";
import {PropsWithChildren} from "react";
import Image from "next/image";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";

type HeroProps = {
   heading: string;
   subheading: string;
   cover: StrapiFile;
}

export default function Hero({content}: PropsWithChildren<{ content: HeroProps }>) {
   const {heading, subheading, cover} = content;
   return (
      <section className={s.wrapper}>
         <div className={s.innerWrapper}>
            <Image
               src={getSimpleImageUri(cover)}
               alt={""}
               fill
               priority
            />

            <div>
               {/*<p>{subheading.toUpperCase()}</p>*/}
               {/*<h1>{heading.toUpperCase()}</h1>*/}
            </div>
         </div>
      </section>
   )
}
import s from './index.module.scss'
import {StrapiFile} from "@/types/types";
import {PropsWithChildren} from "react";
import Image from "next/image";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";

type HeroProps = {
   cover: StrapiFile;
   coverMobile: StrapiFile;
}

export default function Hero({content}: PropsWithChildren<{ content: HeroProps }>) {
   const {cover, coverMobile} = content;
   return (
      <section className={s.wrapper}>
         <div className={s.innerWrapper}>
            <Image
               src={getSimpleImageUri(cover)}
               alt={""}
               fill
               priority
              unoptimized={true}
            />
         </div>

         <div className={s.innerWrapperMobile}>
            <Image
               src={getSimpleImageUri(coverMobile)}
               alt={"Mobile"}
               fill
               priority
               unoptimized={true}
            />
         </div>
      </section>
   )
}
import s from './index.module.scss'
import {StrapiFileArray} from "@/types/types";
import Image from "next/image";
import {getSimpleImageUriArray} from "@/utils/getSimpleImageUriArray";
import CoversSectionJapaneseText from '@/public/images/covers-section-japanese.svg'
import CoversSectionJapaneseTextSmall from '@/public/images/covers-section-japanese-small.svg'

type CoversSection = {
   covers: { data: StrapiFileArray [] };
}

export default function CoversSection({covers}: CoversSection) {
   return (
      <section className={s.wrapper}>
         <Image
            src={CoversSectionJapaneseText}
            alt={"Japanese text"}
            className={s.japaneseText}
         />
         <Image
            src={CoversSectionJapaneseTextSmall}
            alt={"Japanese text"}
            className={s.japaneseTextSmall}
         />

         <div>
            {covers.data[4] &&
               <Image
                  src={getSimpleImageUriArray(covers?.data[4])}
                  alt={"cover"}
                  fill
               />
            }
         </div>

         <div>
            {covers.data[5] &&
               <Image
                  src={getSimpleImageUriArray(covers?.data[5])}
                  alt={"cover"}
                  fill
               />
            }
         </div>
      </section>
   )
}

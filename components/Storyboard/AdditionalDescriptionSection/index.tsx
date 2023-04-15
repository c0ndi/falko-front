import s from './index.module.scss'
import {StrapiFileArray} from "@/types/types";
import Image from "next/image";
import {getSimpleImageUriArray} from "@/utils/getSimpleImageUriArray";
import RichText from "@/components/Shared/RichText";

type AdditionalDescriptionSection = {
   descriptionText: string;
   articleCovers: { data: StrapiFileArray [] };
}

export default function AdditionalDescriptionSection({content}: { content: AdditionalDescriptionSection }) {
   const {descriptionText, articleCovers} = content
   return (
      <section className={s.wrapper}>
         <div className={s.content}>
            <RichText desc={descriptionText}/>
         </div>

         <div className={s.imageWrapper}>
            {articleCovers.data[6] &&
               <Image
                  src={getSimpleImageUriArray(articleCovers?.data[6])}
                  alt={"AdditionalDescriptionCover"}
                  fill
               />
            }
         </div>
      </section>
   )
}

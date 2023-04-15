import s from './index.module.scss'
import {PropsWithChildren} from "react";
import {StrapiFileArray} from "@/types/types";
import RichText from "@/components/Shared/RichText";
import Image from "next/image";
import {getSimpleImageUriArray} from "@/utils/getSimpleImageUriArray";

type ContentSectionProps = {
   content: string;
   articleCovers: { data: StrapiFileArray [] };
}

export default function ContentSection({content}: PropsWithChildren<{ content: ContentSectionProps }>) {
   const {articleCovers, content: articleContent} = content;
   return (
      <section className={s.wrapper}>
         <div className={s.content}>
            <RichText desc={articleContent}/>
         </div>

         <div className={s.imageWrapper}>
            <div className={s.firstContainer}>
               {articleCovers.data[0] &&
                  <Image
                     src={getSimpleImageUriArray(articleCovers?.data[0])}
                     alt={"First-photo"}
                     fill
                  />
               }
            </div>
            <div className={s.secondContainer}>
               {articleCovers.data[1] &&
                  <Image
                     src={getSimpleImageUriArray(articleCovers?.data[1])}
                     alt={"Second-photo"}
                     fill
                  />
               }
            </div>
            <div className={s.thirdContainer}>
               {articleCovers.data[2] &&
                  <Image
                     src={getSimpleImageUriArray(articleCovers.data[2])}
                     alt={"Third-photo"}
                     fill
                  />
               }
            </div>
            <div className={s.fourthContainer}>
               {articleCovers.data[3] &&
                  <Image
                     src={getSimpleImageUriArray(articleCovers?.data[3])}
                     alt={"Fourth-photo"}
                     fill
                  />
               }
            </div>
         </div>
      </section>
   )
}

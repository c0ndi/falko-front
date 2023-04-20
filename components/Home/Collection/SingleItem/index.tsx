import s from './index.module.scss'
import {StrapiFile} from "@/types/types";
import Image from "next/image";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";
import Link from "next/link";

export type SingleItemT = {
   title: string;
   shopLink: string;
   price: string;
   cover: StrapiFile;
}

export default function SingleItem({content}: { content: SingleItemT }) {
   const {title, shopLink, price, cover} = content;
   return (
      <article className={s.wrapper}>
         <Link
            href={shopLink}
            target={"_blank"}
         >
            <div className={s.imageWrapper}>
               <Image
                  src={getSimpleImageUri(cover)}
                  alt={title}
                  width={375}
                  height={375}
                  priority
               />
            </div>
            <div className={s.bottomWrapper}>
               <div>
                  <p className={s.title}>{title}</p>
                  <p className={s.price}>{price}</p>
               </div>

               <span>Check out</span>
            </div>
         </Link>
      </article>
   )
}

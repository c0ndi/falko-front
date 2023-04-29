import s from './index.module.scss'
import {PropsWithChildren} from "react";
import Link from "next/link";
import SingleItem, {SingleItemT} from "@/components/Home/Collection/SingleItem";
import CollectionJapaneseText from '@/public/images/collection-japanase.png'
import Image from "next/image";
import StoreGraphic from '@/public/images/visit_store_svg.svg';
import StoreGraphicMobile from '@/public/images/visit_store_svg_mobile.svg';
import FalkoW from '@/public/images/falkow.svg';

type CollectionProps = {
   heading: string;
   subheading: string;
   descriptionHeading: string;
   descriptionText: string;
   storeButtonLabel: string;
   storeButtonLink: string;
   example_products: { data: { attributes: SingleItemT }[] }
}

export default function Collection({content}: PropsWithChildren<{ content: CollectionProps }>) {
   const {
      heading,
      subheading,
      storeButtonLabel,
      storeButtonLink,
      example_products
   } = content;
   return (
      <section
         className={s.wrapper}
         // @ts-ignore
         name={"collection"}
      >
         {/*<div>*/}
         {/*   <p className={s.subheading}>{subheading.toUpperCase()}</p>*/}
         {/*   <p className={s.heading}>{heading.toUpperCase()}</p>*/}
         {/*</div>*/}

         <Link href={storeButtonLink} target={"_blank"}>
            <Image
               src={StoreGraphic}
               alt={"StoreGraphic"}
               style={{width: "100%", marginBottom:"60px"}}
               className={s.storeGraphic}
            />
         </Link>

         <Link href={storeButtonLink} target={"_blank"}>
            <Image
               src={StoreGraphicMobile}
               alt={"StoreGraphicMobile"}
               style={{width: "100%", marginBottom:"60px"}}
               className={s.storeGraphicMobile}
            />
         </Link>

         <p className={s.heading}>LATEST STUFF</p>

         <div className={s.itemsWrapper}>
            <Image
               src={FalkoW}
               alt={""}
               className={s.japaneseText}
               priority
            />


            {example_products.data.map((item, index) => (
               <SingleItem
                  content={item.attributes}
                  key={index}
               />
            ))}
         </div>

         <div className={s.bottomWrapper}>
            {/*<div className={s.description}>*/}
            {/*   <p className={s.descriptionHeading}>{descriptionHeading}</p>*/}
            {/*   <p className={s.descB}>{descriptionText}</p>*/}
            {/*</div>*/}

            {/*<Link*/}
            {/*   href={storeButtonLink}*/}
            {/*   target={"_blank"}*/}
            {/*>*/}
            {/*   <p className={s.storeLink}>{storeButtonLabel.toUpperCase()}</p>*/}
            {/*</Link>*/}
         </div>
      </section>
   )
}
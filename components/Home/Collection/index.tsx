import SingleItem, { SingleItemT } from "@/components/Home/Collection/SingleItem";
import StoreGraphicEn from '@/public/images/store-web-eng.webp';
import StoreGraphicPl from '@/public/images/store-web-pl.webp';
// import StoreGraphicMobileEn from '@/public/images/store-mobile-en.png';
// import StoreGraphicMobilePl from '@/public/images/store-mobile-pl.png';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { PropsWithChildren } from "react";
import s from './index.module.scss';

type CollectionProps = {
   heading: string;
   subheading: string;
   descriptionHeading: string;
   descriptionText: string;
   storeButtonLabel: string;
   storeButtonLink: string;
   example_products: { data: { attributes: SingleItemT }[] }
}

export default function Collection({ content }: PropsWithChildren<{ content: CollectionProps }>) {
   const {
      heading,
      subheading,
      storeButtonLabel,
      storeButtonLink,
      example_products
   } = content;

   const router = useRouter();

   return (
      <section
         className={s.wrapper}
         // @ts-ignore
         name={"collection"}
         style={{ marginTop: "16px" }}
      >
         {/*<div>*/}
         {/*   <p className={s.subheading}>{subheading.toUpperCase()}</p>*/}
         {/*   <p className={s.heading}>{heading.toUpperCase()}</p>*/}
         {/*</div>*/}

         <Link href={storeButtonLink} target={"_blank"}>
            <Image
               src={router.locale === "en" ? StoreGraphicEn : StoreGraphicPl}
               alt={"StoreGraphic"}
               style={{ width: '100%', height: "auto" }}
               className={s.storeGraphic}
            />
         </Link>

         {/* <Link href={storeButtonLink} target={"_blank"}>
            <Image
               src={router.locale === "en" ? StoreGraphicMobileEn : StoreGraphicMobilePl}
               alt={"StoreGraphicMobile"}
               style={{ width: "100%", marginBottom: "60px" }}
               className={s.storeGraphicMobile}
            />
         </Link> */}

         {/* <p className={s.heading}>{router.locale === "en" ? "HOTTEST STUFF" : "WYRÓŻNIONE"} </p> */}

         <div className={s.itemsWrapper}>
            {/* <Image
               src={Gif}
               alt={""}
               className={s.japaneseText}
               priority
               height={250}
            /> */}


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
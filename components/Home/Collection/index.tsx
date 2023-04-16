import s from './index.module.scss'
import {PropsWithChildren} from "react";
import Link from "next/link";
import SingleItem, {SingleItemT} from "@/components/Home/Collection/SingleItem";

type CollectionProps = {
   heading: string;
   subheading: string;
   descriptionHeading: string;
   descriptionText: string;
   storeButtonLabel: string;
   storeButtonLink: string;
   example_products: {data: {attributes: SingleItemT}[]}
}

export default function Collection({content}: PropsWithChildren<{ content: CollectionProps }>) {
   const {heading, subheading, descriptionHeading, descriptionText, storeButtonLabel, storeButtonLink, example_products} = content;
   console.log(example_products)
   return (
      <section className={s.wrapper}>
         <div>
            <p className={s.subheading}>{subheading.toUpperCase()}</p>
            <p className={s.heading}>{heading.toUpperCase()}</p>
         </div>

         <div className={s.itemsWrapper}>
            {example_products.data.map((item, index) => (
               <SingleItem content={item.attributes} key={index}/>
            ))}
         </div>

         <div className={s.bottomWrapper}>
            <div className={s.description}>
               <p className={s.descriptionHeading}>{descriptionHeading}</p>
               <p className={s.descB}>{descriptionText}</p>
            </div>

            <Link href={storeButtonLink} target={"_blank"}>
               <p className={s.storeLink}>{storeButtonLabel.toUpperCase()}</p>
            </Link>
         </div>
      </section>
   )
}
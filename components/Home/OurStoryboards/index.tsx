import s from './index.module.scss'
import { StrapiFile, StrapiFileArray } from "@/types/types";
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import 'swiper/css';
import Link from "next/link";
import RichText from "@/components/Shared/RichText";
import FalkoArchive from "@/public/images/falko-archive.webp";

type Storyboard = {
   attributes: {
      title: string;
      cover: StrapiFile;
      slug: string;
      newBadge: boolean;
   }
}

type OurStoryboardsProps = {
   heading: string;
   subheading: string;
   secondSubheading: string;
   description: string;
   storyboards: { data: Storyboard[] };
   newBadge: boolean;
   linkLabel: string;
}

export default function OurStoryboards({ content }: PropsWithChildren<{ content: OurStoryboardsProps }>) {
   const { heading, subheading, secondSubheading, description, linkLabel } = content;
   return (
      <section
         className={s.wrapper}
         // @ts-ignore
         name={"storyboards"}
      >
         <div className={s.bottomWrapper}>
            <div className={s.topWrapper}>
               <div>
                  <p className={s.subheading}>{subheading}</p>
                  <p className={s.heading}>{heading.toUpperCase()}</p>
                  <p className={s.subheading}>{secondSubheading.toUpperCase()}</p>
               </div>
            </div>

            <Image
               src={FalkoArchive}
               alt={"FirstCover"}
               className={s.imageMobile}
               quality={65}
            />

            <div className={s.textWrapper}>
               <RichText desc={description} />
            </div>

            <Link
               href={"/"}
               className={s.link}
            >
               {linkLabel}
            </Link>


         </div>
         <Image
            src={FalkoArchive}
            alt={"FirstCover"}
            className={s.image}
            quality={100}
         />
      </section>
   )
}
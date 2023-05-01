import s from './index.module.scss'
import {StrapiFile, StrapiFileArray} from "@/types/types";
import {PropsWithChildren, ReactNode, useEffect, useState} from "react";
import Image from "next/image";
import 'swiper/css';
import Link from "next/link";
import RichText from "@/components/Shared/RichText";
import FalkoSketchbook from "@/public/images/falko-sketchbook.png";
import FalkoSketchbookMobile from "@/public/images/falko-sketchbook-mobile.png";

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
   description: string;
   storyboards: { data: Storyboard [] };
   newBadge: boolean;
   linkLabel: string;
}

export default function OurStoryboards({content}: PropsWithChildren<{ content: OurStoryboardsProps }>) {
   const {heading, subheading, description, linkLabel} = content;
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
                  <p className={s.heading}>{heading}</p>
               </div>
            </div>

            <Image
               src={FalkoSketchbookMobile}
               alt={"FirstCover"}
               className={s.imageMobile}
            />

            <div className={s.textWrapper}>
               <RichText desc={description}/>
            </div>

            <Link
               href={"/storyboardy"}
               className={s.link}
            >
               {linkLabel}
            </Link>


         </div>
         <Image
            src={FalkoSketchbook}
            alt={"FirstCover"}
            className={s.image}
         />
      </section>
   )
}
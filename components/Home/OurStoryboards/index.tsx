import s from './index.module.scss'
import {StrapiFile, StrapiFileArray} from "@/types/types";
import {PropsWithChildren, ReactNode, useEffect, useState} from "react";
import Image from "next/image";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";
import ArrowBlack from '@/public/icons/arrow-black.svg'

import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import 'swiper/css';
import Link from "next/link";
import SwiperCore from "swiper";
import {getSimpleImageUriArray} from "@/utils/getSimpleImageUriArray";
import RichText from "@/components/Shared/RichText";

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
   covers: {data: any};
   linkLabel: string;
}

export default function OurStoryboards({content}: PropsWithChildren<{ content: OurStoryboardsProps }>) {
   const {heading, subheading, description, covers, linkLabel} = content;
   const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
   return (
      <section
         className={s.wrapper}
         // @ts-ignore
         name={"storyboards"}
      >
         <div className={s.topWrapper}>
            <div>
               <p className={s.subheading}>{subheading}</p>
               <p className={s.heading}>{heading}</p>
            </div>
         </div>

         <div className={s.bottomWrapper}>
            <div className={s.textWrapper}>
               <RichText desc={description} />

               <Link
                  href={"/storyboardy"}
                  className={s.link}
               >
                  {linkLabel}
               </Link>
            </div>

            <div className={s.imageWrapper}>
               <div className={s.firstContainer}>
                  <Image
                     src={getSimpleImageUriArray(covers.data[0])}
                     alt={"FirstCover"}
                     fill
                  />
               </div>
               <div className={s.secondContainer}>
                  <Image
                     src={getSimpleImageUriArray(covers.data[1])}
                     alt={"SecondCover"}
                     fill
                  />
               </div>
               <div className={s.thirdContainer}>
                  <Image
                     src={getSimpleImageUriArray(covers.data[2])}
                     alt={"ThirdCover"}
                     fill
                  />
               </div>
            </div>
         </div>
      </section>
   )
}
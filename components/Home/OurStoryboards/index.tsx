import s from './index.module.scss'
import {StrapiFile} from "@/types/types";
import {PropsWithChildren, ReactNode, useEffect, useState} from "react";
import Image from "next/image";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";
import ArrowBlack from '@/public/icons/arrow-black.svg'

import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import 'swiper/css';
import Link from "next/link";
import SwiperCore from "swiper";

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
}

export default function OurStoryboards({content}: PropsWithChildren<{ content: OurStoryboardsProps }>) {
   const {heading, subheading, description, storyboards} = content;
   const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
   return (
      // @ts-ignore
      <section className={s.wrapper} name={"storyboards"}>
         <div className={s.topWrapper}>
            <div>
               <p className={s.subheading}>{subheading}</p>
               <p className={s.heading}>{heading}</p>
            </div>

            <p className={s.descB}>{description}</p>
         </div>

         <div className={s.bottomWrapper}>
            <Swiper
               slidesPerView={1}
               spaceBetween={16}
               onSwiper={(swiper) => setSwiperInstance(swiper)}
               breakpoints={{
                  1080: {
                     slidesPerView: 4
                  },
                  769: {
                     slidesPerView: 3,
                  },
                  639: {
                     slidesPerView: 2.5,
                  },
                  439: {
                     slidesPerView: 2,
                  },
               }}
            >
               {storyboards.data.map((storyboard, index) => (
                  <SwiperSlide key={index}>
                     <Link href={`/storyboardy/${storyboard.attributes.slug}`}>
                        <div className={s.cover}>
                           {storyboard.attributes.newBadge &&
                              <p className={s.badge}>New</p>
                           }
                           <Image
                              src={getSimpleImageUri(storyboard.attributes.cover)}
                              alt={storyboard.attributes.title}
                              fill
                           />
                        </div>

                        <p className={s.title}>{storyboard.attributes.title.toUpperCase()}</p>
                     </Link>
                  </SwiperSlide>
               ))}
            </Swiper>

            {storyboards.data.length > 4 &&
               <>
                  <button
                     onClick={() => swiperInstance?.slidePrev()}
                     className={s.btnPrev}
                  >
                     <Image
                        src={ArrowBlack}
                        alt={"arrow"}
                     />
                  </button>

                  <button
                     onClick={() => swiperInstance?.slideNext()}
                     className={s.btnNext}
                  >
                     <Image
                        src={ArrowBlack}
                        alt={"arrow"}
                     />
                  </button>
               </>
            }
         </div>
      </section>
   )
}
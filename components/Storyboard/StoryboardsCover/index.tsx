import s from './index.module.scss'
import {StrapiFile, StrapiFileArray} from "@/types/types";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Autoplay} from 'swiper';
import Image from "next/image";
import {getSimpleImageUriArray} from "@/utils/getSimpleImageUriArray";
import {useState} from "react";
import ArrowBlack from "@/public/icons/arrow-white.svg";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";
import Link from "next/link";

type CoversSlider = {
   title: string;
   singleCover: StrapiFile;
   slug: string;
}

export default function StoryboardCover({title, singleCover, slug}: CoversSlider) {
   return (
      <Link
         href={`/storyboardy/${slug}`}
      >
         <section
            className={s.wrapper}
            // @ts-ignore
            name={slug}
         >
            <p className={s.title}>{title.toUpperCase()}</p>

            <div className={s.newImageWrapper}>
               <Image
                  src={getSimpleImageUri(singleCover)}
                  alt={""}
                  fill
               />
            </div>
         </section>
      </Link>
   )
}
/*
* <Swiper
            spaceBetween={8}
            slidesPerView={1}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            breakpoints={{
               1080: {
                  slidesPerView: 2.3,
               },
            }}
         >
            {covers.data.map((cover, index) => (
               <SwiperSlide key={index}>
                  <div className={s.imageWrapper}>
                     <Image
                        src={getSimpleImageUriArray(cover)}
                        alt={"cover-" + index}
                        fill
                        priority
                     />
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
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
* */

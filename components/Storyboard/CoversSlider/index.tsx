import s from './index.module.scss'
import {StrapiFileArray} from "@/types/types";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
import Image from "next/image";
import {getSimpleImageUriArray} from "@/utils/getSimpleImageUriArray";
import {useState} from "react";
import ArrowBlack from "@/public/icons/arrow-white.svg";

type CoversSlider = {
   title: string;
   covers: { data: StrapiFileArray [] };
   slug: string;
}

SwiperCore.use([Autoplay]);

export default function CoversSlider({title, covers, slug}: CoversSlider) {
   const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
   return (
      // @ts-ignore
      <section className={s.wrapper} name={slug}>
         <p className={s.title}>{title.toUpperCase()}</p>
         <Swiper
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
      </section>
   )
}

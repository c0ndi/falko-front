import s from './index.module.scss'
import {StrapiFileArray} from "@/types/types";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
import Image from "next/image";
import {getSimpleImageUriArray} from "@/utils/getSimpleImageUriArray";

type CoversSlider = {
   covers: { data: StrapiFileArray [] };
}

SwiperCore.use([Autoplay]);

export default function CoversSlider({covers}: CoversSlider) {
   return (
      <section className={s.wrapper}>
         <Swiper
            spaceBetween={8}
            slidesPerView={1.5}
            loop={true}
            autoplay={{delay: 4000}}
         >
            {covers.data.map((cover, index) => (
               <SwiperSlide key={index}>
                  <div className={s.imageWrapper}>
                     <Image
                        src={getSimpleImageUriArray(cover)}
                        alt={"cover-" + index}
                        fill
                     />
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>

      </section>
   )
}

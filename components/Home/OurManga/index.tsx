import s from './index.module.scss'
import {PropsWithChildren, useState} from "react";
import {StrapiFile, StrapiFileArray} from "@/types/types";
import Image from "next/image";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";
import RichText from "@/components/Shared/RichText";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"
import Link from "next/link";
import SwiperCore from "swiper";
import ArrowBlack from "@/public/icons/arrow-white.svg";

type Manga = {
   attributes: {
      title: string;
      titleCover: StrapiFile;
      slug: string;
   }
}

type OurMangaProps = {
   heading: string;
   subheading: string;
   secondSubheading: string;
   cover: StrapiFile;
   mangas: { data: Manga [] };
}

export default function OurManga({content}: PropsWithChildren<{ content: OurMangaProps }>) {
   const {heading, subheading, secondSubheading, cover, mangas} = content;
   const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
   return (
      // @ts-ignore
      <section className={s.wrapper} name={"manga"}>
         <Image
            src={getSimpleImageUri(cover)}
            alt={""}
            fill
            className={s.bgCover}
            priority
         />
         <div className={s.innerWrapper}>
            <div>
               <p className={s.subheading}>{subheading.toUpperCase()}</p>
               <p className={s.heading}>{heading.toUpperCase()}</p>
               <p className={s.subheading}>{secondSubheading.toUpperCase()}</p>
            </div>

            <div className={s.bottomWrapper}>
               <div className={s.mangasWrapper}>
                  <Swiper
                     slidesPerView={4.5}
                     spaceBetween={8}
                     onSwiper={(swiper) => setSwiperInstance(swiper)}
                     breakpoints={{
                        1280: {
                          slidesPerView: 4.5,
                        },
                        1080: {
                           slidesPerView: 3.5,
                        },
                        650: {
                           slidesPerView: 2.5,
                           spaceBetween: 16,
                        },
                        1: {
                           slidesPerView: 1.5,
                        },
                     }}
                  >
                     {mangas.data.map((manga, index) => (
                        <SwiperSlide key={index}>
                           <Link href={`/manga/${manga.attributes.slug}`} prefetch={false}>
                              <div className={s.mangaWrapper}>
                                 <Image
                                    src={getSimpleImageUri(manga.attributes.titleCover)}
                                    alt={manga.attributes.title}
                                    width={250}
                                    height={350}
                                    priority
                                 />
                              </div>
                              <p className={s.mangaTitle}>{manga.attributes.title.toUpperCase()}</p>
                           </Link>
                        </SwiperSlide>
                     ))}
                  </Swiper>

                  {mangas.data.length > 2 &&
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
            </div>
         </div>
      </section>
   )
}
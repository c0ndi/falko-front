import s from './index.module.scss'
import {StrapiFileArray} from "@/types/types";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import {getSimpleImageUriArray} from "@/utils/getSimpleImageUriArray";
import {useEffect, useRef, useState} from "react";
import ArrowBackIcon from "@/public/icons/arrow-back.svg";

type MangaReader = {
   pages: { data: StrapiFileArray [] };
   title: string;
}

export default function MangaReader({pages, title}: MangaReader) {
   const book = useRef();
   const bookMobile = useRef();

   return (
      <section className={s.wrapper}>
         {/* @ts-ignore */}
         <HTMLFlipBook
            width={550}
            height={733}
            className={s.book}
            ref={book}
         >
            {pages.data.map((page, index) => (
               <div
                  className={s.page}
                  key={index}
               >
                  <Image
                     src={getSimpleImageUriArray(page)}
                     alt={""}
                     fill
                  />
               </div>
            ))}
         </HTMLFlipBook>

         {/* @ts-ignore */}
         <HTMLFlipBook
            width={370}
            height={490}
            className={s.bookMobile}
            // startPage={pages.data.length - 1}
            ref={bookMobile}
         >
            {pages.data.map((page, index) => (
               <div
                  className={s.page}
                  key={index}
               >
                  <Image
                     src={getSimpleImageUriArray(page)}
                     alt={""}
                     fill
                  />
               </div>
            ))}
         </HTMLFlipBook>

         <div className={s.navigation}>
            <div className={s.navigationWrapper}>
               <Image
                  src={ArrowBackIcon}
                  alt={"Prev page"}
                  onClick={() => {
                     // @ts-ignore
                     book.current.pageFlip().flipPrev()
                     // @ts-ignore
                     bookMobile.current.pageFlip().flipPrev()
                  }}
               />
               <Image
                  src={ArrowBackIcon}
                  alt={"Next page"}
                  onClick={() => {
                     // @ts-ignore
                     book.current.pageFlip().flipNext()
                     // @ts-ignore
                     bookMobile.current.pageFlip().flipNext()
                  }}
               />
            </div>
         </div>
      </section>
   )
}

import s from './index.module.scss'
import {StrapiFile} from "@/types/types";
import {PropsWithChildren} from "react";
import Image from "next/image";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";

type AboutProps = {
   heading: string;
   subheading: string;
   video: StrapiFile;
   logo: StrapiFile;
   descriptionHeading: string;
   descriptionText: string;
   infos: { info: string } [];
   socialLabel: string;
   cover: StrapiFile;
}

export default function About({content}: PropsWithChildren<{ content: AboutProps }>) {
   const {heading, subheading, video, logo, socialLabel, cover, descriptionHeading, descriptionText, infos} = content;
   return (
      <section className={s.wrapper}>
         <Image
            src={getSimpleImageUri(cover)}
            alt={""}
            fill
            className={s.bgCover}
         />

         <div className={s.innerWrapper}>
            <div className={s.topWrapper}>
               <div>
                  <p className={s.subheading}>{subheading.toUpperCase()}</p>
                  <p className={s.heading}>{heading.toUpperCase()}</p>
               </div>

               <Image
                  src={getSimpleImageUri(logo)}
                  alt={"FalkoLogoRed"}
                  width={280}
                  height={90}
               />
            </div>

            <div className={s.bottomWrapper}>
               <div className={s.videoWrapper}>
                  <video
                     controls
                     src={getSimpleImageUri(video)}
                  />
               </div>

               <div className={s.contentWrapper}>
                  <div>
                     <p className={s.descriptionHeading}>{descriptionHeading}</p>
                     <p className={s.descW}>{descriptionText}</p>
                  </div>

                  <div className={s.infoWrapper}>
                     {infos.map((info, index) => (
                        <p key={index}>{info.info}</p>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
import s from './index.module.scss'
import {StrapiFile} from "@/types/types";
import {PropsWithChildren, useContext, useRef, useState} from "react";
import Image from "next/image";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";
import {DataContext} from "@/components/Shared/Layout";
import Link from "next/link";
import ArrowWhite from "@/public/icons/arrow-white.svg";
import JapaneseText from "@/public/images/about-japanese-text.svg";
import VideoStart from '@/public/images/video-start.svg'
import VideoEnd from '@/public/images/video-end.svg'
import YoutubeIcon from '@/public/icons/youtube.svg'
import InstagramIcon from '@/public/icons/instagram.svg'
import FacebookIcon from '@/public/icons/facebook.svg'
import TiktokIcon from '@/public/icons/tiktok.svg'


type AboutProps = {
   heading: string;
   subheading: string;
   video: StrapiFile;
   videoPoster: StrapiFile;
   descriptionHeading: string;
   descriptionText: string;
   infos: { info: string } [];
   socialLabel: string;
   cover: StrapiFile;
}

export default function About({content}: PropsWithChildren<{ content: AboutProps }>) {
   const {heading, subheading, video, videoPoster, socialLabel, cover, descriptionHeading, descriptionText, infos} = content;


   const {data} = useContext(DataContext);

   const videoElement = useRef(null);

   const [isPlaying, setIsPlaying] = useState(false);
   const handleVideoControls = () => {
      if (videoElement !== null) {
         if (isPlaying) {
            // @ts-ignore
            videoElement.current.pause();
         } else {
            // @ts-ignore
            videoElement.current.play();
         }
         setIsPlaying((isPlaying) => !isPlaying);
      }
   };

   return (
      // @ts-ignore
      <section className={s.wrapper} name={"about"}>
         <Image
            src={getSimpleImageUri(cover)}
            alt={""}
            fill
            className={s.bgCover}
            priority
         />

         <div className={s.innerWrapper}>
            <div className={s.topWrapper}>
               <div>
                  <p className={s.subheading}>{subheading.toUpperCase()}</p>
                  <p className={s.heading}>{heading.toUpperCase()}</p>
               </div>

               {/*<Image*/}
               {/*   src={getSimpleImageUri(logo)}*/}
               {/*   alt={"FalkoLogoRed"}*/}
               {/*   width={280}*/}
               {/*   height={90}*/}
               {/*/>*/}
            </div>

            <div className={s.bottomWrapper}>
               <div className={s.videoWrapper}>
                  <video
                     controls={false}
                     disableRemotePlayback
                     src={getSimpleImageUri(video)}
                     ref={videoElement}
                     poster={getSimpleImageUri(videoPoster)}
                  />

                  {!isPlaying ?
                     <Image
                        src={VideoStart}
                        alt="photo"
                        className={s.startVideo}
                        onClick={handleVideoControls}
                        height={75}
                        width={75}
                     />
                     :
                     <Image
                        src={VideoEnd}
                        alt="Photo"
                        className={s.endVideo}
                        onClick={handleVideoControls}
                        height={50}
                        width={50}
                     />
                  }

                  {/*<Image*/}
                  {/*   src={JapaneseText}*/}
                  {/*   alt={""}*/}
                  {/*   width={40}*/}
                  {/*   height={200}*/}
                  {/*   className={s.japanText}*/}
                  {/*/>*/}

                  <div className={s.socials}>
                     <p className={s.socialLabel}>{socialLabel}</p>
                     <div className={s.socialIcons}>
                        <Link href={data.youtubeLink} target={"_blank"}>
                           <Image
                              src={YoutubeIcon}
                              alt={""}
                              width={22}
                              height={22}
                           />
                        </Link>
                        <Link href={data.instagramLink} target={"_blank"}>
                           <Image
                              src={InstagramIcon}
                              alt={""}
                              width={18}
                              height={18}
                           />
                        </Link>
                        <Link href={data.facebookLink} target={"_blank"}>
                           <Image
                              src={FacebookIcon}
                              alt={""}
                              width={18}
                              height={18}
                           />
                        </Link>
                        <Link href={data.tiktokLink} target={"_blank"}>
                           <Image
                              src={TiktokIcon}
                              alt={""}
                              width={18}
                              height={18}
                           />
                        </Link>
                     </div>
                  </div>
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

                  <Link href={`mailto:${data.email}`}>
                     <div className={s.email}>
                        <p>
                           {data.email.toUpperCase()}
                        </p>
                        <Image
                           src={ArrowWhite}
                           alt={"arrow"}
                           width={16}
                           height={16}
                        />
                     </div>
                  </Link>

                  <div className={s.socialsMobile}>
                     <p className={s.socialLabel}>{socialLabel}</p>
                     <div className={s.socialIcons}>
                        <Link href={data.youtubeLink} target={"_blank"}>
                           <Image
                              src={YoutubeIcon}
                              alt={""}
                              width={22}
                              height={22}
                           />
                        </Link>
                        <Link href={data.instagramLink} target={"_blank"}>
                           <Image
                              src={InstagramIcon}
                              alt={""}
                              width={18}
                              height={18}
                           />
                        </Link>
                        <Link href={data.facebookLink} target={"_blank"}>
                           <Image
                              src={FacebookIcon}
                              alt={""}
                              width={18}
                              height={18}
                           />
                        </Link>
                        <Link href={data.tiktokLink} target={"_blank"}>
                           <Image
                              src={TiktokIcon}
                              alt={""}
                              width={18}
                              height={18}
                           />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
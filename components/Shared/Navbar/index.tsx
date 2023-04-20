// @ts-nocheck
import s from './index.module.scss'
import {PropsWithChildren, useEffect, useState} from "react";
import {StrapiFile} from "@/types/types";
import Image from "next/image";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";
import Link from "next/link";
import YoutubeIcon from "@/public/icons/youtube.svg";
import InstagramIcon from "@/public/icons/instagram.svg";
import FacebookIcon from "@/public/icons/facebook.svg";

import {Turn as Hamburger} from 'hamburger-react'

type NavProps = {
   nav: {
      logoNav: StrapiFile;
      navLinks: { linkUrl: string, linkLabel: string } [];
   }
   facebookLink: string;
   instagramLink: string;
   youtubeLink: string;
}

export default function Navbar({content}: PropsWithChildren<{ content: NavProps }>) {
   const [isOpen, setOpen] = useState(false)

   const {logoNav, navLinks} = content.nav;
   const {facebookLink, instagramLink, youtubeLink} = content;

   const [scrollTop, setScrollTop] = useState(0);

   const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
   }

   useEffect(() => {
      window.addEventListener('scroll', onScroll);
   }, []);

   useEffect(() => {
      if (window.innerWidth <= 629) {
         if (scrollTop > 0 || isOpen) {
            document.querySelector('nav').style.position = "fixed";
            document.querySelector('nav').style.background = "#FFF6E1";
            document.querySelector('nav > div').style.filter = "invert(1)";
            document.querySelector('nav').style.padding = "3px 12px";
         } else {
            document.querySelector('nav').style.position = "absolute";
            document.querySelector('nav').style.background = "transparent";
            document.querySelector('nav > div').style.filter = "invert(0)";
            document.querySelector('nav').style.padding = "3px 12px";
         }
      }
   }, [scrollTop, isOpen])

   return (
      <nav
         className={s.wrapper}
         style={{transition: "0.3s"}}
      >
         <div className={s.innerWrapper}>

            <ul>
               {navLinks.map((link, index) => (
                  <li key={index}>
                     <Link href={link.linkUrl}>
                        <p>{link.linkLabel.toUpperCase()}</p>
                     </Link>
                  </li>
               ))}
            </ul>

            <Link href={"/"}>
               <Image
                  src={getSimpleImageUri(logoNav)}
                  alt={"Logo"}
                  width={75}
                  height={75}
                  className={s.logo}
                  onClick={() => window.scrollTo({
                     top: 0,
                     behavior: "smooth",
                  }) || setOpen(false)}
               />
            </Link>

            <div className={s.socialIcons}>
               <Link
                  href={youtubeLink}
                  target={"_blank"}
               >
                  <Image
                     src={YoutubeIcon}
                     alt={""}
                     width={22}
                     height={22}
                  />
               </Link>
               <Link
                  href={instagramLink}
                  target={"_blank"}
               >
                  <Image
                     src={InstagramIcon}
                     alt={""}
                     width={18}
                     height={18}
                  />
               </Link>
               <Link
                  href={facebookLink}
                  target={"_blank"}
               >
                  <Image
                     src={FacebookIcon}
                     alt={""}
                     width={18}
                     height={18}
                  />
               </Link>
            </div>

            <div className={s.hamburger}>
               <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  size={24}
               />
            </div>
         </div>

         <div className={`${isOpen ? s.mobileOpen : s.mobileClose} ${s.mobileMenu}`}>
            <ul className={s.linksMobile}>
               {navLinks.map((link, index) => (
                  <li key={index}>
                     <Link
                        href={link.linkUrl}
                        onClick={() => setOpen(false)}
                     >
                        <p>{link.linkLabel.toUpperCase()}</p>
                     </Link>
                  </li>
               ))}
            </ul>

            <div className={s.socialIconsMobile}>
               <Link
                  href={youtubeLink}
                  target={"_blank"}
               >
                  <Image
                     src={YoutubeIcon}
                     alt={""}
                     width={22}
                     height={22}
                  />
               </Link>
               <Link
                  href={instagramLink}
                  target={"_blank"}
               >
                  <Image
                     src={InstagramIcon}
                     alt={""}
                     width={18}
                     height={18}
                  />
               </Link>
               <Link
                  href={facebookLink}
                  target={"_blank"}
               >
                  <Image
                     src={FacebookIcon}
                     alt={""}
                     width={18}
                     height={18}
                  />
               </Link>
            </div>
         </div>
      </nav>
   )
}
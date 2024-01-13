// @ts-nocheck
import s from './index.module.scss'
import { PropsWithChildren, useEffect, useState } from "react";
import { StrapiFile } from "@/types/types";
import Image from "next/image";
import { getSimpleImageUri } from "@/utils/getSimpleImageUri";
import Link from "next/link";
import YoutubeIcon from "@/public/icons/youtube.svg";
import InstagramIcon from "@/public/icons/instagram.svg";
import FacebookIcon from "@/public/icons/facebook.svg";
import TiktokIcon from "@/public/icons/tiktok.svg";

import { Turn as Hamburger } from 'hamburger-react'

type NavProps = {
   nav: {
      logoNav: StrapiFile;
      navLinks: { linkUrl: string, linkLabel: string }[];
   }
   facebookLink: string;
   instagramLink: string;
   youtubeLink: string;
   tiktokLink: string;
}

export default function Navbar({ content }: PropsWithChildren<{ content: NavProps }>) {
   const [isOpen, setOpen] = useState(false)

   const { logoNav, navLinks } = content.nav;
   const { facebookLink, instagramLink, youtubeLink, tiktokLink } = content;

   const [scrollTop, setScrollTop] = useState(0);
   const [scrollImage, setScrollImage] = useState(false);

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
            document.querySelector('nav').style.background = "#faf6eb";
            document.querySelector('nav').style.padding = "3px 12px";
            setScrollImage(true)
         } else {
            document.querySelector('nav').style.position = "absolute";
            document.querySelector('nav').style.background = "transparent";
            document.querySelector('nav').style.padding = "3px 12px";
            setScrollImage(false)
         }
      }
   }, [scrollTop, isOpen])

   return (
      <nav
         className={s.wrapper}
         style={{ transition: "0.3s" }}
      >
         <div className={s.innerWrapper}>
            <Link href={"/"}>
               {!scrollImage ? (
                  <Image
                     src={getSimpleImageUri(logoNav)}
                     alt={"Logo"}
                     width={60}
                     height={60}
                     priority
                     className={s.logo}
                     onClick={() => window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                     }) || setOpen(false)}
                  />
               )
                  :
                  <Image
                     src={'/images/falko-black.png'}
                     alt={"Logo"}
                     width={60}
                     height={60}
                     priority
                     className={s.logo}
                     onClick={() => window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                     }) || setOpen(false)}
                  />
               }
            </Link>

            <ul>
               {navLinks.map((link, index) => (
                  <li key={index}>
                     <Link href={link.linkUrl}>
                        <p>{link.linkLabel.toUpperCase()}</p>
                     </Link>
                  </li>
               ))}
            </ul>



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
               <Link
                  href={tiktokLink}
                  target={"_blank"}
               >
                  <Image
                     src={TiktokIcon}
                     alt={""}
                     width={18}
                     height={18}
                  />
               </Link>


               <div className={s.locale}>
                  {/* <Link href="/pl" locale="pl"> */}
                  <button onClick={() => {
                     window.location.href = "/pl"

                     if (window.location.pathname === "/pl") window.location.reload()
                  }}>PL</button>
                  {/* </Link> */}
                  <button style={{ cursor: "auto" }}>|</button>
                  {/* <Link href="/en" locale="en"> */}
                  <button onClick={() => {
                     window.location.href = "/en"

                     if (window.location.pathname === "/en") window.location.reload()
                  }}>EN</button>
                  {/* </Link> */}
               </div>

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

            <div className={s.locale}>
               {/* <Link href="/pl" locale="pl"> */}
               <button onClick={() => {
                  window.location.href = "/pl"

                  if (window.location.pathname === "/pl") window.location.reload()
               }}>PL</button>
               {/* </Link> */}
               <button style={{ cursor: "auto" }}>|</button>
               {/* <Link href="/en" locale="en"> */}
               <button onClick={() => {
                  window.location.href = "/en"

                  if (window.location.pathname === "/en") window.location.reload()
               }}>EN</button>
               {/* </Link> */}
            </div>

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
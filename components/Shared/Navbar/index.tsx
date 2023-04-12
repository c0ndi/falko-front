import s from './index.module.scss'
import {PropsWithChildren} from "react";
import {StrapiFile} from "@/types/types";

type NavProps = {
   logo: StrapiFile;
   navLinks: { linkUrl: string, linkLabel: string } [];
   facebookLink: string;
   instagramLink: string;
   youtubeLink: string;
}

export default function Navbar({content}: PropsWithChildren<{content: NavProps}>) {
   const {logo, navLinks, facebookLink, instagramLink, youtubeLink} = content;
   return (
      <nav>
         <p></p>
      </nav>
   )
}
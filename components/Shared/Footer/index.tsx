import s from './index.module.scss'
import {PropsWithChildren} from "react";

type FooterProps = {
   facebookLink: string;
   instagramLink: string;
   youtubeLink: string;
   address:string;
   phoneNumber:string;
   nipNumber: string;
   logoFooter: string;
}

export default function Footer({content}: PropsWithChildren<{content: FooterProps}>) {
   return (
      <footer className={s.wrapper}>
         <p></p>
      </footer>
   )
}
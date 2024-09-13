import s from './index.module.scss'
import { PropsWithChildren, useState } from "react";
import { getSimpleImageUri } from "@/utils/getSimpleImageUri";
import Image from "next/image";
import { StrapiFile } from "@/types/types";
import Link from "next/link";
import ArrowBlack from '@/public/icons/arrow-black-small.svg';
import { useForm } from "react-hook-form";
import axios from '@/config/axios';
import { useRouter } from 'next/router';

type FooterProps = {
   facebookLink: string;
   instagramLink: string;
   youtubeLink: string;
   address: string;
   phoneNumber: string;
   nipNumber: string;
   logoFooter: StrapiFile;
}

export default function Footer({ content }: PropsWithChildren<{ content: FooterProps }>) {
   const router = useRouter();
   const { address, phoneNumber, logoFooter } = content;
   return (
      <footer className={s.wrapper}>
         <Image
            src={getSimpleImageUri(logoFooter)}
            width={75}
            height={75}
            alt="logo"
            className={s.logo}
         />

         <div className={s.data}>
            <p className={s.ceoName}>
               {/*Błażej Zajkiewicz, &nbsp;*/}
               <span>Falko project</span>
            </p>

            {/*<Link*/}
            {/*   href={`tel:${phoneNumber}`}*/}
            {/*   className={s.phone}*/}
            {/*>Tel. {phoneNumber}</Link>*/}

            <Link href={`/${router.locale}/policies`}>
               <p style={{ fontWeight: 600 }}>
                  {router.locale === "pl" ? "Regulamin" : "Terms and Conditions"}
               </p>
            </Link>

            <div className={s.locale}>
               <button onClick={() => {
                  window.location.href = "/pl"

                  if (window.location.pathname === "/pl") window.location.reload()
               }}>PL</button>
               <button style={{ cursor: "auto" }}>|</button>
               <button onClick={() => {
                  window.location.href = "/en"

                  if (window.location.pathname === "/en") window.location.reload()
               }}>EN</button>
            </div>
         </div>

         <div className={s.newsletter}>
            <Link href={`https://store.falkoproject.com${router.locale}/newsletter`} target='_blank'>
               <p>Subscribe To Our Newsletter</p>
            </Link>
         </div>
      </footer>
   )
}
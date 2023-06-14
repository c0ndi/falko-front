import s from './index.module.scss'
import {PropsWithChildren, useState} from "react";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";
import Image from "next/image";
import {StrapiFile} from "@/types/types";
import Link from "next/link";
import ArrowBlack from '@/public/icons/arrow-black-small.svg';
import {useForm} from "react-hook-form";
import axios from '@/config/axios';

type FooterProps = {
   facebookLink: string;
   instagramLink: string;
   youtubeLink: string;
   address: string;
   phoneNumber: string;
   nipNumber: string;
   logoFooter: StrapiFile;
}

export default function Footer({content}: PropsWithChildren<{ content: FooterProps }>) {
   const {register, handleSubmit, watch, formState: {errors}, reset} = useForm<{ email: string }>();
   const [status, setStatus] = useState<"normal" | "sending" | "success" | "error">("normal");

   const onSubmit = async (data: { email: string }) => {
      setStatus("sending");

      await axios.post('/customer-messages', {data: data}).then(() => {
         setTimeout(() => {
            setStatus("success");
            reset();
         }, 1000)
      }).catch((err) => {
         setStatus("error")
         reset();
      });
   }

   const {address, phoneNumber, logoFooter} = content;
   return (
      <footer className={s.wrapper}>
         <Image
            src={getSimpleImageUri(logoFooter)}
            width={75}
            height={75}
            alt="logo"
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

            <Link href={"/policies"}>
               <p style={{fontWeight: 600}}>
                  Terms and Conditions
               </p>
            </Link>
         </div>

         <div className={s.newsletter}>
            <p>Subscribe To Our Newsletter</p>
            <form
               onSubmit={handleSubmit(onSubmit)}
               className={s.input}
            >
               <input
                  type="text"
                  style={{color: errors.email ? "red" : "#333"}}
                  placeholder="Enter your email"
                  {...register("email", {required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})}
               />

               <button
                  type={"submit"}
                  className={s.iconWrapper}
               >
                  <Image
                     src={ArrowBlack}
                     alt={""}
                     width={12}
                     height={12}
                  />
               </button>
            </form>
            {status === "sending" && <p className={s.sending}>Sending...</p>}
            {status === "success" && <p className={s.success}>Success!</p>}
            {status === "error" && <p className={s.error}>Error. Try again later.</p>}
            {errors.email && <p className={s.error}>Please enter correct email.</p>}
         </div>
      </footer>
   )
}
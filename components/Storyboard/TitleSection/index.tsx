import s from './index.module.scss'
import Image from "next/image";
import FalkoRed from "@/public/images/falko-logo-red.webp";

type TitleSectionProps = {
   subheading: string;
}

export default function TitleSection({content}: { content: TitleSectionProps }) {
   const {subheading} = content;
   return (
      <section className={s.wrapper}>
         <div>
            <h2>
               {subheading.toUpperCase()}
            </h2>
         </div>

         <Image
            src={FalkoRed}
            alt={"FalkoLogoRed"}
            height={75}
            className={s.image}
         />

         <Image
            src={FalkoRed}
            alt={"FalkoLogoRed"}
            height={50}
            className={s.imageMobile}
         />
      </section>
   )
}
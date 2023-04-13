import s from './index.module.scss'
import Image from "next/image";
import FalkoRed from "@/public/images/falko-logo-red.png";

type TitleSectionProps = {
   title: string;
   subheadingTwo: string;
}

export default function TitleSection({content}: { content: TitleSectionProps }) {
   const {title, subheadingTwo} = content;
   return (
      <section className={s.wrapper}>
         <div>
            <p>{subheadingTwo.toUpperCase()}</p>
            <h2>
               {title.toUpperCase()}
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
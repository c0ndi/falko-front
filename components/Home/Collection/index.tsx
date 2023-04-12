import s from './index.module.scss'
import {PropsWithChildren} from "react";

type CollectionProps = {
   heading: string;
   subheading: string;
   descriptionHeading: string;
   descriptionText: string;
   storeButtonLabel: string;
   storeButtonLink: string;
}

export default function Collection({content}: PropsWithChildren<{ content: CollectionProps }>) {
   const {heading, subheading, descriptionHeading, descriptionText, storeButtonLabel, storeButtonLink} = content;
   return (
      <section className={s.wrapper}>

      </section>
   )
}
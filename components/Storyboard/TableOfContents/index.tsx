import s from './index.module.scss'
import Link from "next/link";
import {Storyboard} from "@/pages/storyboardy";


type TableOfContents = {
   content: {data: Storyboard []};
}

export default function TableOfContents({content}: TableOfContents) {
   return (
      <section className={s.wrapper}>
         {content.data.map((storyboard, index) => (
            <Link
               key={index}
               href={`/storyboardy#${storyboard.attributes.slug}`}
            >
               <p>{storyboard.attributes.title.toUpperCase()}</p>
            </Link>
         ))}
      </section>
   )
}

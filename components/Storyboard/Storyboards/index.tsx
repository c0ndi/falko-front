import s from './index.module.scss'
import {Storyboard} from "@/pages/storyboardy";
import CoversSlider from "@/components/Storyboard/CoversSlider";

type Storyboards = {
   storyboards: { data: Storyboard [] };
}

export default function Storyboards({storyboards}: Storyboards) {
   return (
      <section className={s.wrapper}>
         {storyboards.data.map((storyboard, index) => (
            <CoversSlider
               title={storyboard.attributes.title}
               slug={storyboard.attributes.slug}
               covers={storyboard.attributes.covers}
               key={index}
            />
         ))}
      </section>
   )
}

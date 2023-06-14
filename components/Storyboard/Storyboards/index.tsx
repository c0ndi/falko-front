import s from './index.module.scss'
import {Storyboard} from "@/pages/storyboardy";
import CoversSlider from "@/components/Storyboard/StoryboardsCover";
import StoryboardCover from "@/components/Storyboard/StoryboardsCover";

type Storyboards = {
   storyboards: { data: Storyboard [] };
}

export default function Storyboards({storyboards}: Storyboards) {
   return (
      <section className={s.wrapper}>
         {storyboards.data.map((storyboard, index) => (
            <StoryboardCover
               singleCover={storyboard.attributes.singleCover}
               title={storyboard.attributes.title}
               slug={storyboard.attributes.slug}
               key={index}
            />
         ))}
      </section>
   )
}

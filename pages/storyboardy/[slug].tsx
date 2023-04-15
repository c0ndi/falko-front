import {useQuery} from '@tanstack/react-query'
import {getData} from "@/utils/getData";
import {useRouter} from "next/router";
import ErrorComponent from "@/components/Shared/ErrorComponent";
import Hero from "@/components/Storyboard/Hero";
import TitleSection from "@/components/Storyboard/TitleSection";
import ContentSection from "@/components/Storyboard/ContentSection";
import CoversSection from "@/components/Storyboard/CoversSection";
import AdditionalDescriptionSection from "@/components/Storyboard/AdditionalDescriptionSection";
import CoversSlider from "@/components/Storyboard/CoversSlider";
import Loading from "@/components/Shared/Loading";

export default function Home() {
   const router = useRouter()
   const {slug} = router.query

   const {data, isLoading, isError} = useQuery({queryKey: [slug], queryFn: () => getData(`/storyboards`, slug)})

   if (isLoading) {
      return <Loading/>
   }

   if (isError || !data.data.length) {
      return <ErrorComponent redirect/>
   }

   const {
      title,
      subheading,
      subheadingTwo,
      content,
      cover,
      articleCovers,
      descriptionText,
   } = data.data[0].attributes;

   return (
      <>
         <Hero content={{title, subheading, cover}}/>
         <main className={"pageWrapper"}>
            <TitleSection content={{title, subheadingTwo}}/>

            <ContentSection content={{content, articleCovers}}/>
            <CoversSection covers={articleCovers}/>

            {(descriptionText) ? (
               <AdditionalDescriptionSection content={{descriptionText, articleCovers}}/>
            ) :
               <></>
            }

            <CoversSlider covers={articleCovers}/>
         </main>
      </>
   )
}

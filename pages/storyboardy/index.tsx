import {useQuery} from '@tanstack/react-query'
import {getData} from "@/utils/getData";
import ErrorComponent from "@/components/Shared/ErrorComponent";
import Loading from "@/components/Shared/Loading";
import Hero from "@/components/Storyboard/Hero";
import Link from "next/link";
import TitleSection from "@/components/Storyboard/TitleSection";
import {StrapiFileArray} from "@/types/types";
import TableOfContents from "@/components/Storyboard/TableOfContents";
import CoversSlider from "@/components/Storyboard/CoversSlider";
import Storyboards from "@/components/Storyboard/Storyboards";

export type Storyboard = {
   attributes: {
      title: string;
      covers: {data: StrapiFileArray []};
      slug: string;
   }
}

export default function Home() {
   const {data, isLoading, isError} = useQuery({
      queryKey: ["storyboards-page"],
      queryFn: () => getData(`/storyboards-page`)
   })

   if (isLoading) {
      return <Loading/>
   }

   if (isError) {
      return <ErrorComponent redirect/>
   }

   const {title, subheading, cover, storyboards} = data.data.attributes;

   return (
      <>
         <Hero content={{title, subheading, cover}}/>
         <main className={"pageWrapper"}>
            <TitleSection content={{subheading: "Spis treści: "}}/>

            <TableOfContents content={storyboards} />
            <Storyboards storyboards={storyboards} />
         </main>
      </>
   )
}

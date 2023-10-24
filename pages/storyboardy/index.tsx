import { useQuery } from '@tanstack/react-query'
import { getData } from "@/utils/getData";
import ErrorComponent from "@/components/Shared/ErrorComponent";
import Loading from "@/components/Shared/Loading";
import Hero from "@/components/Storyboard/Hero";
import Link from "next/link";
import TitleSection from "@/components/Storyboard/TitleSection";
import { StrapiFile, StrapiFileArray } from "@/types/types";
import TableOfContents from "@/components/Storyboard/TableOfContents";
import CoversSlider from "@/components/Storyboard/StoryboardsCover";
import Storyboards from "@/components/Storyboard/Storyboards";
import { useRouter } from 'next/router';

export type Storyboard = {
   attributes: {
      title: string;
      covers: { data: StrapiFileArray[] };
      singleCover: StrapiFile;
      slug: string;
   }
}

export default function Home() {
   const router = useRouter();

   const { data, isLoading, isError } = useQuery({
      queryKey: ["storyboards-page"],
      queryFn: () => getData(`/storyboards-page`, router.locale)
   })

   console.log(data);


   if (isLoading) {
      return <Loading />
   }

   if (isError) {
      return <ErrorComponent redirect />
   }

   const { title, subheading, cover, storyboards } = data.data.attributes;

   return (
      <>
         <Hero content={{ title, subheading, cover }} />
         <main className={"pageWrapper"}>
            <TitleSection content={{ subheading: router.locale == "en" ? "CONTENTS:" : "SPIS TRESCI:" }} />

            <TableOfContents content={storyboards} />
            <Storyboards storyboards={storyboards} />
         </main>
      </>
   )
}

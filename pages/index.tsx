import Hero from "@/components/Home/Hero";
import Collection from "@/components/Home/Collection";
import OurManga from "@/components/Home/OurManga";
import OurStoryboards from "@/components/Home/OurStoryboards";
import About from "@/components/Home/About";
import { getData } from "@/utils/getData";
import Seo from "@/components/Shared/Seo";
import { useRouter } from "next/router";

export default function Home({ data }: any) {
   const {
      hero,
      collection,
      ourManga,
      ourStoryboards,
      about,
      seo
   } = data.data.attributes;

   return (
      <>
         <Seo seo={seo} />
         <Hero content={hero} />
         <Collection content={collection} />
         <OurManga
            content={ourManga}
         />
         <div className={"pageWrapper"} meta-data={"t"}>
            <OurStoryboards content={ourStoryboards} />
         </div>
         <About content={about} />
      </>
   )
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
   const data = await getData("/home", locale)

   return {
      props: {
         data
      },
      revalidate: 10
   }
}
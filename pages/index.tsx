import About from "@/components/Home/About";
import Collection from "@/components/Home/Collection";
import Hero from "@/components/Home/Hero";
import OurManga from "@/components/Home/OurManga";
import OurStoryboards from "@/components/Home/OurStoryboards";
import { getData } from "@/utils/getData";

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
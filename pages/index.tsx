import Hero from "@/components/Home/Hero";
import Collection from "@/components/Home/Collection";
import OurManga from "@/components/Home/OurManga";
import OurStoryboards from "@/components/Home/OurStoryboards";
import About from "@/components/Home/About";
import {getData} from "@/utils/getData";
import {useQuery} from "@tanstack/react-query";
import ErrorComponent from "@/components/Shared/ErrorComponent";
import Loading from "@/components/Shared/Loading";

export async function getServerSideProps({req, res}: {req: any, res: any}) {
   res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59'
   )
   const homeData = await getData("/home")
   return { props: { homeData } }
}

export default function Home({homeData}: any) {
   const {data, isLoading, isError} = useQuery({queryKey: ['home'], queryFn: () => getData("/home"), initialData: homeData})

   if (isLoading) {
      return <Loading/>
   }

   if (isError) {
      return <ErrorComponent/>
   }

   const {
      hero,
      collection,
      ourManga,
      ourStoryboards,
      about,
   } = data.data.attributes;

   return (
      <>
         <Hero content={hero}/>
         <Collection content={collection}/>
         <OurManga
            content={ourManga}
         />
         <div className={"pageWrapper"}>
            <OurStoryboards content={ourStoryboards}/>
         </div>
         <About content={about}/>
      </>
   )
}

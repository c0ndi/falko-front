import Hero from "@/components/Home/Hero";
import Collection from "@/components/Home/Collection";
import OurManga from "@/components/Home/OurManga";
import OurStoryboards from "@/components/Home/OurStoryboards";
import About from "@/components/Home/About";
import {getData} from "@/utils/getData";
import {useQuery} from "@tanstack/react-query";
import ErrorComponent from "@/components/Shared/ErrorComponent";
import Loading from "@/components/Shared/Loading";

export default function Home() {
   const {data, isLoading, isError} = useQuery({queryKey: ['home'], queryFn: () => getData("/home")})

   if (isLoading) {
      return <Loading/>
   }

   if (isError) {
      return <ErrorComponent />
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
         <main className={"pageWrapper"}>
            <Hero content={hero}/>
            <Collection content={collection}/>
            <OurManga content={ourManga}/>
            <OurStoryboards content={ourStoryboards}/>
            <About content={about}/>
         </main>
      </>
   )
}

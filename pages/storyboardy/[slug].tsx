import {getData} from "@/utils/getData";
import {useQuery} from "@tanstack/react-query";
import ErrorComponent from "@/components/Shared/ErrorComponent";
import Loading from "@/components/Shared/Loading";
import {useRouter} from "next/router";
import Image from "next/image";
import MangaReader from "@/components/Manga/MangaReader";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";
import ArrowBackIcon from "@/public/icons/arrow-back.svg";
import Link from "next/link";
import Seo from "@/components/Shared/Seo";

export default function Home() {
   const router = useRouter();

   const {slug} = router.query;
   const {data, isLoading, isError} = useQuery({queryKey: [slug], queryFn: () => getData(`/storyboards`, slug)})

   if (isLoading) {
      return <Loading/>
   }

   if (isError || !data.data.length) {
      return <ErrorComponent redirect/>
   }

   const {covers, title, backgroundCover, seo} = data.data[0].attributes;

   return (
      <>
         <Seo seo={seo}/>
         <main className={"mangaWrapper"}>
            <div className={"backWrapper"}>
               <Link
                  href={"/"}
                  className={"back"}
               >
                  <Image
                     src={ArrowBackIcon}
                     alt={""}
                     width={40}
                     height={16}
                  />

                  <p>Powrót</p>
               </Link>

               {/*<h1>{title.toUpperCase()}</h1>*/}
            </div>
            <Image
               src={getSimpleImageUri(backgroundCover)}
               alt={title}
               fill
            />

            <MangaReader
               pages={covers}
               title={title}
            />
         </main>
      </>
   )
}

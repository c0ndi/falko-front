import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import FalkoBlack from "@/public/images/falko-black.png";

export default function ErrorComponent({redirect}: { redirect?: boolean}) {
   const router = useRouter();

   useEffect(()=> {
      if(router.pathname !== "/404")
         router.push("/error")
   }, [redirect, router])
   return (
      <main className="errorPage">
         <Image src={FalkoBlack} alt={"FalkoBlackLogo"} priority/>
         <h1>Something went wrong. Sorry ;/</h1>

         <Link href={"/"}>
            <span>Home</span>
         </Link>
      </main>
   )
}
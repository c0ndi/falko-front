import {useQuery} from "@tanstack/react-query";
import {getData} from "@/utils/getData";
import WelcomeLoading from "@/components/Shared/WelcomeLoading";
import ErrorComponent from "@/components/Shared/ErrorComponent";
import {useLoading} from "@/hooks/useLoading";
import Navbar from "@/components/Shared/Navbar";
import {ReactNode} from "react";
import Footer from "@/components/Shared/Footer";

export default function Layout({children}: { children: ReactNode }) {
   const {data, isLoading, isError} = useQuery({queryKey: ['shared'], queryFn: () => getData("/shared")})

   const loading = useLoading(isLoading);

   if(loading) {
      return <WelcomeLoading/>
   }

   if(isError) {
      return <ErrorComponent/>
   }

   const {nav, facebookLink, instagramLink, youtubeLink, phoneNumber, nipNumber, address, logoFooter} = data.data.attributes;

   const footerContent = {
      facebookLink,
      instagramLink,
      address,
      phoneNumber,
      nipNumber,
      logoFooter,
      youtubeLink
   }
   return (
      <>
         <Navbar content={nav}/>

         <main className={"pageWrapper"}>
            {children}
         </main>

         <Footer content={footerContent}/>
      </>
   )
}